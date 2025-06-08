'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, DollarSign, Sparkles, Loader2 } from 'lucide-react';

interface PlanningFormProps {
  onPlanGenerated: (data: any) => void;
}

export function PlanningForm({ onPlanGenerated }: PlanningFormProps) {
  const [destination, setDestination] = useState('');
  const [budget, setBudget] = useState([2000]);
  const [days, setDays] = useState([7]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedTripType, setSelectedTripType] = useState('leisure');

  const tripTypes = [
    { id: 'leisure', label: 'Leisure', icon: '🏖️' },
    { id: 'adventure', label: 'Adventure', icon: '🏔️' },
    { id: 'cultural', label: 'Cultural', icon: '🏛️' },
    { id: 'business', label: 'Business', icon: '💼' },
    { id: 'romantic', label: 'Romantic', icon: '💕' },
    { id: 'family', label: 'Family', icon: '👨‍👩‍👧‍👦' },
  ];

  const popularDestinations = [
    'Paris, France', 'Tokyo, Japan', 'New York, USA', 'London, UK',
    'Barcelona, Spain', 'Dubai, UAE', 'Sydney, Australia', 'Rome, Italy'
  ];

  const handleGeneratePlan = async () => {
    if (!destination.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const mockData = {
      destination,
      budget: budget[0],
      days: days[0],
      tripType: selectedTripType,
      itinerary: [
        {
          day: 1,
          title: 'Arrival & City Center Exploration',
          activities: [
            'Arrive at destination',
            'Check into hotel',
            'Explore city center',
            'Welcome dinner at local restaurant'
          ],
          budget: Math.round(budget[0] / days[0] * 0.8)
        },
        {
          day: 2,
          title: 'Cultural Immersion',
          activities: [
            'Visit main attractions',
            'Local museum tour',
            'Traditional lunch',
            'Shopping district walk'
          ],
          budget: Math.round(budget[0] / days[0] * 1.2)
        },
        {
          day: 3,
          title: 'Adventure Day',
          activities: [
            'Outdoor activity',
            'Local experience',
            'Scenic viewpoint',
            'Evening entertainment'
          ],
          budget: Math.round(budget[0] / days[0])
        }
      ],
      alternatives: [
        { city: 'Alternative City 1', reason: 'Similar culture, 20% less expensive' },
        { city: 'Alternative City 2', reason: 'Same region, more attractions' }
      ]
    };
    
    setIsGenerating(false);
    onPlanGenerated(mockData);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-white/60 backdrop-blur-md border-white/20 shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-900">
            Create Your Dream Trip
          </CardTitle>
          <p className="text-gray-600">Tell us your preferences and let AI do the magic</p>
        </CardHeader>
        
        <CardContent className="space-y-8">
          {/* Destination Input */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-2">
              <MapPin className="h-5 w-5 text-blue-600" />
              <Label htmlFor="destination" className="text-lg font-semibold">
                Where do you want to go?
              </Label>
            </div>
            <Input
              id="destination"
              placeholder="Enter your dream destination..."
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="text-lg p-6 bg-white/80 border-2 focus:border-blue-500"
            />
            <div className="flex flex-wrap gap-2">
              {popularDestinations.map((dest) => (
                <Badge
                  key={dest}
                  variant="secondary"
                  className="cursor-pointer hover:bg-blue-100 transition-colors"
                  onClick={() => setDestination(dest)}
                >
                  {dest}
                </Badge>
              ))}
            </div>
          </div>

          {/* Trip Type Selection */}
          <div className="space-y-4">
            <Label className="text-lg font-semibold">What type of trip?</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {tripTypes.map((type) => (
                <Card
                  key={type.id}
                  className={`cursor-pointer transition-all hover:scale-105 ${
                    selectedTripType === type.id
                      ? 'ring-2 ring-blue-500 bg-blue-50'
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedTripType(type.id)}
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl mb-2">{type.icon}</div>
                    <div className="text-sm font-medium">{type.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Budget Slider */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-2">
              <DollarSign className="h-5 w-5 text-green-600" />
              <Label className="text-lg font-semibold">
                Budget: ${budget[0].toLocaleString()}
              </Label>
            </div>
            <Slider
              value={budget}
              onValueChange={setBudget}
              max={10000}
              min={500}
              step={100}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>$500</span>
              <span>$10,000+</span>
            </div>
          </div>

          {/* Days Slider */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-2">
              <Calendar className="h-5 w-5 text-purple-600" />
              <Label className="text-lg font-semibold">
                Duration: {days[0]} {days[0] === 1 ? 'day' : 'days'}
              </Label>
            </div>
            <Slider
              value={days}
              onValueChange={setDays}
              max={30}
              min={1}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>1 day</span>
              <span>30+ days</span>
            </div>
          </div>

          {/* Generate Button */}
          <Button
            onClick={handleGeneratePlan}
            disabled={!destination.trim() || isGenerating}
            className="w-full py-6 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Creating Your Perfect Trip...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-5 w-5" />
                Generate My Dream Trip
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}