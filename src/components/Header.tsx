"use client";

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="font-playfair text-xl font-bold text-gray-900">Luxe Parfums</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
              Products
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            {isSearchOpen ? (
              <div className="hidden sm:flex items-center space-x-2">
                <Input
                  placeholder="Search fragrances..."
                  className="w-64"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsSearchOpen(false)}
                >
                  ✕
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(true)}
                className="hidden sm:flex text-gray-600 hover:text-rose-600"
              >
                🔍
              </Button>
            )}

            {/* Cart */}
            <Button variant="ghost" size="sm" className="relative text-gray-600 hover:text-rose-600">
              🛍️
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  ☰
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link 
                    href="/" 
                    className="text-lg font-medium hover:text-rose-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/products" 
                    className="text-lg font-medium hover:text-rose-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Products
                  </Link>
                  <Link 
                    href="/about" 
                    className="text-lg font-medium hover:text-rose-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    href="/contact" 
                    className="text-lg font-medium hover:text-rose-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <div className="pt-4 border-t border-gray-200">
                    <Input placeholder="Search fragrances..." className="mb-4" />
                    <Button className="w-full bg-rose-600 hover:bg-rose-700">
                      Search
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}