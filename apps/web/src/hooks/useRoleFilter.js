import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useRoleFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [role, setRoleState] = useState(() => {
    // Check URL param first, then fall back to localStorage
    const urlRole = new URLSearchParams(window.location.search).get('role');
    if (urlRole) return urlRole;
    try {
      return localStorage.getItem('userRole') || null;
    } catch (e) {
      return null;
    }
  });

  // Sync from URL on mount and when URL changes
  useEffect(() => {
    const urlRole = searchParams.get('role');
    if (urlRole) {
      setRoleState(urlRole);
      try { localStorage.setItem('userRole', urlRole); } catch (e) {}
    }
  }, [searchParams]);

  const setRole = useCallback((newRole) => {
    try {
      if (newRole) {
        localStorage.setItem('userRole', newRole);
      } else {
        localStorage.removeItem('userRole');
      }
      setRoleState(newRole);
      window.dispatchEvent(new CustomEvent('role_updated', { detail: newRole }));
    } catch (e) {
      console.error('Error saving userRole to localStorage', e);
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'userRole') setRoleState(e.newValue);
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