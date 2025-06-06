import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu'; // Adjust import path to your shadcn ui setup

const navItems = [
  { name: "Home", path: "/" },
  { name: "Training", path: "/training" },
  { name: "Courses", path: "/courses" },
  { name: "Location", path: "/location" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  return (
    <header className="bg-white border-b border-green-700 shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Left: Logo and Title */}
        <div className="flex items-center space-x-3">
          <Image 
            src="/logo.png" 
            alt="Niazi Forces Academy Logo"
            width={48}
            height={48}
            priority
            quality={100}
            className="rounded-full object-contain"
          />
          <h1 className="text-green-900 font-serif text-xl sm:text-2xl lg:text-3xl font-semibold">
            Niazi Forces Academy
          </h1>
        </div>

        {/* Desktop Navigation - visible on md+ */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4 sm:space-x-6 lg:space-x-8 text-sm sm:text-base lg:text-lg text-slate-800 font-medium">
            {navItems.map(item => (
              <li key={item.name}>
                <Link href={item.path}>
                  <div className="group flex items-center gap-2 hover:text-slate-950 transition-colors cursor-pointer">
                    <span className="w-[2px] h-5 bg-orange-500 hidden group-hover:inline-block transition-all"></span>
                    {item.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger Dropdown - visible on md- */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="p-2 rounded-md hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500">
              {/* Hamburger icon (simple SVG) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="bottom" align="end" className="bg-white border border-green-700 rounded-md shadow-md">
              {navItems.map(item => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link href={item.path} className="block w-full px-4 py-2 hover:bg-green-50">
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

      </div>
    </header>
  );
};

export default Header;
