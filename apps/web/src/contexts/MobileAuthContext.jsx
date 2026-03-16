import React, { createContext, useContext, useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient';

const MobileAuthContext = createContext();

export const useMobileAuth = () => {
  const context = useContext(MobileAuthContext);
  if (!context) {
    throw new Error('useMobileAuth must be used within MobileAuthProvider');
  }
  return context;
};

export const MobileAuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sessionData, setSessionData] = useState(null);

  // Load stored credentials and auto-login
  useEffect(() => {
    const autoLogin = async () => {
      try {
        // Check if user is already authenticated
        if (pb.authStore.isValid && pb.authStore.model) {
          setCurrentUser(pb.authStore.model);
          await updateSession();
        } else {
          // Try to load stored credentials
          const storedEmail = localStorage.getItem('mobile_user_email');
          const storedToken = localStorage.getItem('mobile_user_token');

          if (storedEmail && storedToken) {
            // Validate token by refreshing auth
            try {
              await pb.collection('users').authRefresh();
              setCurrentUser(pb.authStore.model);
              await updateSession();
            } catch (error) {
              // Token expired, clear stored credentials
              clearStoredCredentials();
            }
          }
        }
      } catch (error) {
        console.error('Auto-login failed:', error);
        clearStoredCredentials();
      } finally {
        setLoading(false);
      }
    };

    autoLogin();
  }, []);

  // Update session data in PocketBase
  const updateSession = async () => {
    if (!pb.authStore.model) return;

    try {
      const userId = pb.authStore.model.id;
      const deviceInfo = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language
      };

      const records = await pb.collection('mobile_user_sessions').getFullList({
        filter: `userId = "${userId}"`,
        $autoCancel: false
      });

      const sessionData = {
        userId,
        lastSyncDate: new Date().toISOString(),
        deviceInfo: JSON.stringify(deviceInfo),
        appVersion: '1.0.0',
        offlineContentList: JSON.stringify([])
      };

      if (records.length > 0) {
        const updated = await pb.collection('mobile_user_sessions').update(
          records[0].id,
          sessionData,
          { $autoCancel: false }
        );
        setSessionData(updated);
      } else {
        const created = await pb.collection('mobile_user_sessions').create(
          sessionData,
          { $autoCancel: false }
        );
        setSessionData(created);
      }
    } catch (error) {
      console.error('Failed to update session:', error);
    }
  };

  // Store credentials securely
  const storeCredentials = (email, token) => {
    localStorage.setItem('mobile_user_email', email);
    localStorage.setItem('mobile_user_token', token);
  };

  // Clear stored credentials
  const clearStoredCredentials = () => {
    localStorage.removeItem('mobile_user_email');
    localStorage.removeItem('mobile_user_token');
  };

  // Login function
  const login = async (email, password, rememberMe = true) => {
    try {
      const authData = await pb.collection('users').authWithPassword(email, password);
      setCurrentUser(authData.record);

      if (rememberMe) {
        storeCredentials(email, pb.authStore.token);
      }

      await updateSession();
      return authData;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  // Signup function
  const signup = async (email, password, name) => {
    try {
      // Create user
      const record = await pb.collection('users').create({
        email,
        password,
        passwordConfirm: password,
        name,
        emailVisibility: true
      });

      // Auto-login after signup
      await login(email, password, true);
      return record;
    } catch (error) {
      console.error('Signup failed:', error);
      throw error;
    }
  };

  // Logout function
  const logout = async () => {
    try {
      pb.authStore.clear();
      clearStoredCredentials();
      setCurrentUser(null);
      setSessionData(null);
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    }
  };

  // Sync with web platform
  const syncWithWeb = async () => {
    if (!currentUser) return;

    try {
      await updateSession();
      return true;
    } catch (error) {
      console.error('Sync failed:', error);
      return false;
    }
  };

  const value = {
    currentUser,
    sessionData,
    loading,
    isAuthenticated: !!currentUser,
    login,
    signup,
    logout,
    syncWithWeb,
    updateSession
  };

  return (
    <MobileAuthContext.Provider value={value}>
      {children}
    </MobileAuthContext.Provider>
  );
};