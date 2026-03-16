import React, { createContext, useContext, useState, useEffect } from 'react';
// import pb from '@/lib/pocketbaseClient';
import PocketBase from 'pocketbase';

const AuthContext = createContext();

const POCKETBASE_URL = 'https://velocity-global-db-v2.onrender.com';
const pb = new PocketBase(POCKETBASE_URL);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(pb.authStore.model);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check auth state on mount
    const checkAuth = () => {
      const model = pb.authStore.model;
      setCurrentUser(model);
      setLoading(false);
    };

    checkAuth();

    // Subscribe to auth changes
    const unsubscribe = pb.authStore.onChange((token, model) => {
      setCurrentUser(model);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // Enrollment verification (kept active for background verification/network inspection)
  useEffect(() => {
    const verifyUserEnrollments = async () => {
      if (!currentUser?.id) return;

      try {
        // Fetch all enrollments for this user to verify persistence
        await pb.collection('enrollment').getFullList({
          filter: `user_id="${currentUser.id}"`,
          $autoCancel: false
        });
        // Logs removed as requested
      } catch (error) {
        console.error('[AuthContext] Failed to verify enrollments:', error);
        if (error.status === 404) {
          console.error('[AuthContext] WARNING: Enrollment collection might not exist or is not accessible.');
        }
      }
    };

    if (currentUser) {
      verifyUserEnrollments();
    }
  }, [currentUser?.id]);

  const login = async (email, password) => {
    try {
      const authData = await pb.collection('users').authWithPassword(email, password);
      return authData;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const signup = async (data) => {
    try {
      // Create user
      const record = await pb.collection('users').create({
        ...data,
        emailVisibility: true,
      });
      
      // Auto login after signup
      await login(data.email, data.password);
      return record;
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    }
  };

  const logout = () => {
    pb.authStore.clear();
  };

  const requestPasswordReset = async (email) => {
    try {
      await pb.collection('users').requestPasswordReset(email);
    } catch (error) {
      console.error("Password reset error:", error);
      throw error;
    }
  };

  const updateProfile = async (id, data) => {
    try {
      const record = await pb.collection('users').update(id, data);
      return record;
    } catch (error) {
      console.error("Update profile error:", error);
      throw error;
    }
  };

  const value = {
    currentUser,
    isAuthenticated: !!currentUser,
    login,
    signup,
    logout,
    requestPasswordReset,
    updateProfile,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};