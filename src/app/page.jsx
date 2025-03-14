'use client'

import React from 'react'
import { Shield, Key, Lock, CheckCircle, ArrowRight, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '../components/Button';
import { useAuth } from '../lib/utils';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  const auth = useAuth();
  console.log(auth)
  const features = [
    {
      icon: Shield,
      title: 'Self-Sovereign Identity',
      description: 'Own and control your digital identity without relying on centralized authorities'
    },
    {
      icon: Key,
      title: 'Verifiable Credentials',
      description: 'Receive and manage digital credentials from trusted institutions'
    },
    {
      icon: Lock,
      title: 'Privacy by Design',
      description: 'Share only what you want, with whom you want, when you want'
    }
  ];

  const benefits = [
    'Full control over your digital identity',
    'Secure credential storage',
    'Easy verification process',
    'Privacy-preserving sharing',
    'Institutional integration',
    'Cross-platform compatibility'
  ];



  const navigation = {
    solutions: [
      { name: 'For Individuals', href: '#' },
      { name: 'For Businesses', href: '#' },
      { name: 'For Institutions', href: '#' },
      { name: 'Integration', href: '#' }
    ],
    support: [
      { name: 'Documentation', href: '#' },
      { name: 'Guides', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Support', href: '#' }
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' }
    ],
    legal: [
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'Cookie Policy', href: '#' }
    ],
    social: [
      {
        name: 'Twitter',
        href: '#',
        icon: Twitter
      },
      {
        name: 'GitHub',
        href: '#',
        icon: Github
      },
      {
        name: 'LinkedIn',
        href: '#',
        icon: Linkedin
      }
    ]
  };


  return (
    <div className="relative bg-white overflow-hidden">
      {/* Hero Section */}
    
    <Header/>

      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-[30px] tracking-tight font-extrabold text-gray-900 sm:text-[14px] md:text-[30px]">
                <span className="block">Your Identity, Your Control</span>
                <span className="block text-blue-600">Secure. Verifiable. Portable.</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Take control of your digital identity with our cutting-edge Self-Sovereign Identity system.
                Secure, verifiable, and always under your control.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
            >
              <div className="">
                <Link href="/auth">
                  <Button size="lg" className="w-[70%] lg:w-full">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </main>
      </div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Why Choose Our SSI System?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Experience the future of digital identity management
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index }}
                    className="pt-6"
                  >
                    <div className="flow-root bg-white rounded-lg px-6 pb-8">
                      <div className="-mt-6">
                        <div className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                          {feature.title}
                        </h3>
                        <p className="mt-5 text-base text-gray-500">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Everything You Need for Digital Identity
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Our SSI system provides all the tools and features you need to manage your digital identity effectively.
              </p>
              <div className="mt-8 space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 * index }}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="ml-3 text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:pl-8">
              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-blue-700 mb-6">
                  Join thousands of users who trust our platform for their digital identity needs.
                </p>
                <Link href="/auth">
                  <Button size="lg">
                    Create Your Identity
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

     <Footer/>
    </div>
  )
}

export default Home
