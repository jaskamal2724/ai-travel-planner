'use client';

import {Search, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SignedIn, UserButton } from '@clerk/nextjs';

export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
           
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              WanderWise ✈️
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search destinations..." 
                className="pl-10 bg-white/60 border-white/20 focus:bg-white"
              />
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="hover:bg-white/60">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-white/60">
              {/* <User className="h-5 w-5" /> */}
              <SignedIn>
                <UserButton/>
              </SignedIn>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}