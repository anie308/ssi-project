'use client'
import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wallet, Loader2 } from 'lucide-react';
import { useAuth } from '../../lib/utils';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useRouter } from 'next/navigation';

function Auth() {
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter()

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await login();
      router.push('/dashboard');
    } catch (error) {
      console.error('Authentication error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Header />
      <div className="p-[20px] lg:p-[100px]  flex items-center bg-white w-full justify-center ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow rounded-lg p-6"
        >
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome to SSI System
            </h1>
            <p className="text-gray-600 mt-2">
              Sign in with your Web3 wallet to manage your digital identity
            </p>
          </div>

          <div className="space-y-6">
            <Button
              onClick={handleLogin}
              className="w-full flex justify-center items-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  <Wallet className="h-5 w-5 mr-2" />
                  Connect Wallet
                </>
              )}
            </Button>

            <p className="text-sm text-gray-500 text-center">
              By connecting your wallet, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </>

  )
}

export default Auth
