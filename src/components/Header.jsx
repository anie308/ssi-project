import React from 'react'
import { Shield, Key, Lock, CheckCircle, ArrowRight, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

function Header() {

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
    <header className="bg-white shadow border-b inset-x-0 top-0 z-50">
    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <Link href="/" className="-m-1.5 p-1.5 flex items-center">
          <Shield className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-xl font-semibold text-gray-900">SSI System</span>
        </Link>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.solutions.map((item) => (
          <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
            {item.name}
          </a>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <Link href="/auth" className="text-sm font-semibold leading-6 text-gray-900">
          Log in <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </nav>
  </header>
  )
}

export default Header
