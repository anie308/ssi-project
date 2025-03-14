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
  const [walletInfo, setWalletInfo] = useState(null);
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

        const savedWallet = Cookies.get('wallet');
        if (savedWallet) {
          setWalletInfo(JSON.parse(savedWallet));
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

        const accounts = await web3auth.provider.request({
          method: "eth_accounts"
        });
        
        const walletAddress = accounts[0];
        
        // Optional: Get private key (be careful with this!)
        // const privateKey = await web3auth.provider.request({
        //   method: "eth_private_key"
        // });
        
        const wallet = {
          address: walletAddress,
          provider: web3authProvider
        };


        setUser(user);
        setIsAuthenticated(true);
        setWalletInfo(wallet);


        // Save user and wallet info to cookies
        Cookies.set('user', JSON.stringify(user), { expires: 7 });
        Cookies.set('wallet', JSON.stringify({ address: walletAddress }), { expires: 7 });


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
      setWalletInfo(null);
      setIsAuthenticated(false);

      // Remove user and wallet info from cookies
      Cookies.remove('user');
      Cookies.remove('wallet');
      router.push('/');
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };


  const getBalance = async () => {
    if (!isAuthenticated || !web3auth.provider) {
      throw new Error("Not authenticated");
    }
    
    try {
      const accounts = await web3auth.provider.request({
        method: "eth_accounts"
      });
      
      const balance = await web3auth.provider.request({
        method: "eth_getBalance",
        params: [accounts[0], "latest"],
      });
      
      // Convert from wei (hex) to ETH
      const ethBalance = parseInt(balance, 16) / 1e18;
      return ethBalance;
    } catch (error) {
      console.error("Failed to get balance:", error);
      throw error;
    }
  };


  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, user, login, getBalance,  wallet: walletInfo, logout }}>
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