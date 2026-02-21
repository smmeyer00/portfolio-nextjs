'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  navItems: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <nav className='fixed w-full bg-background-900/95 backdrop-blur-sm z-50'>
      <a
        href='#main-content'
        className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-accent-500 focus:text-foreground focus:px-4 focus:py-2 focus:rounded-lg'
      >
        Skip to main content
      </a>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          <Link href='/' className='text-foreground font-bold text-xl'>
            {"</>"}
            <span className='text-accent-500'>.</span>
          </Link>

          <div className='hidden md:flex space-x-8'>
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className='text-background-300 hover:text-accent-500 transition-colors duration-300 font-semibold'>
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(true)}
            aria-expanded={isOpen}
            aria-label='Open navigation menu'
            className='md:hidden text-background-300 hover:text-accent-500'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>

        <div
          className='md:hidden overflow-hidden bg-background-800 fixed top-0 left-0 w-full transition-[height] duration-300 ease-in-out z-50'
          style={{ height: isOpen ? "100vh" : "0px" }}>
          <div className='px-4 py-4 relative'>
            <button
              onClick={() => setIsOpen(false)}
              aria-label='Close navigation menu'
              className='absolute top-4 right-4 text-background-300 hover:text-accent-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>

            <Link
              href='/'
              className='text-foreground font-bold text-xl mb-8 mt-2 block'>
              {"</>"}
              <span className='text-accent-500'>.</span>
            </Link>

            <div className='text-center font-bold'>
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className='block py-3 text-background-300 hover:text-accent-500 transition-colors duration-300 text-lg'
                  onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
