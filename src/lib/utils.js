'use client'

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { web3auth, initWeb3Auth } from './web3auth';
import Cookies from 'js-cookie';
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const AuthContext = createContext(null);


export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const initAuth = async () => {
      try {
        await initWeb3Auth();
        
        // Check for existing session in cookies
        const savedUser = Cookies.get('user');
        if (savedUser) {
          const parsedUser = JSON.parse(savedUser);
          setUser(parsedUser);
          setIsAuthenticated(true);
        }
        // router.push('/dashboard');
      } catch (error) {
        console.error("Error initializing Web3Auth:", error);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async () => {
    try {
      const web3authProvider = await web3auth.connect();
      if (web3authProvider) {
        const user = await web3auth.getUserInfo();
        setUser(user);
        setIsAuthenticated(true);
        router.push('/dashboard');
      }
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await web3auth.logout();
      setUser(null);
      setIsAuthenticated(false);
      router.push('/');
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );}


  export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  }