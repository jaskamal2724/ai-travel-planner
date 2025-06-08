'use client';

import { MapPin, Calendar, DollarSign, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="text-center py-12 mb-8">
      <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-6">
        <Sparkles className="h-4 w-4 text-blue-600" />
        <span className="text-sm font-medium text-blue-800">AI-Powered Travel Planning</span>
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Plan Your Perfect
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
          Adventure
        </span>
      </h1>
      
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Let our AI create personalized travel itineraries tailored to your budget, 
        preferences, and timeline. Discover amazing destinations and hidden gems.
      </p>

      <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
        <div className="flex items-center space-x-2">
          <MapPin className="h-4 w-4 text-blue-500" />
          <span>1000+ Destinations</span>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4 text-purple-500" />
          <span>Flexible Planning</span>
        </div>
        <div className="flex items-center space-x-2">
          <DollarSign className="h-4 w-4 text-green-500" />
          <span>Budget Optimization</span>
        </div>
      </div>
    </div>
  );
}