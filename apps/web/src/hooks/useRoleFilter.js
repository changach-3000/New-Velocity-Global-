
import { useState, useEffect, useCallback } from 'react';

export const useRoleFilter = () => {
  const [role, setRoleState] = useState(() => {
    try {
      return localStorage.getItem('userRole') || null;
    } catch (e) {
      console.error('Error reading userRole from localStorage', e);
      return null;
    }
  });

  const setRole = useCallback((newRole) => {
    try {
      if (newRole) {
        localStorage.setItem('userRole', newRole);
      } else {
        localStorage.removeItem('userRole');
      }
      setRoleState(newRole);
      // Dispatch custom event to sync across components in the same tab
      window.dispatchEvent(new CustomEvent('role_updated', { detail: newRole }));
    } catch (e) {
      console.error('Error saving userRole to localStorage', e);
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'userRole') {
        setRoleState(e.newValue);
      }
    };

    const handleCustomEvent = (e) => {
      setRoleState(e.detail);
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('role_updated', handleCustomEvent);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('role_updated', handleCustomEvent);
    };
  }, []);

  return { role, setRole };
};
