import React from 'react'
import { Shield, Key, Lock, CheckCircle, ArrowRight, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';



function Footer() {
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
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
    <h2 id="footer-heading" className="sr-only">Footer</h2>
    <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <div className="xl:grid xl:grid-cols-3 xl:gap-8">
        <div className="space-y-8">
          <Link href="/" className="flex items-center">
            <Shield className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold text-white">SSI System</span>
          </Link>
          <p className="text-sm leading-6 text-gray-300">
            Empowering individuals and organizations with secure, verifiable digital identities.
          </p>
          <div className="flex space-x-6">
            {navigation.social.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">{item.name}</span>
                  <Icon className="h-6 w-6" />
                </a>
              );
            })}
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
        <p className="text-xs leading-5 text-gray-400">&copy; 2024 SSI System. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer
