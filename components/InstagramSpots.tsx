'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronLeft, 
  ChevronRight, 
  Camera, 
  MapPin, 
  Heart,
  Share2,
  Clock,
  Star,
  Instagram,
  Bookmark
} from 'lucide-react';

interface InstagramSpotsProps {
  destination: string;
}

export function InstagramSpots({ destination }: InstagramSpotsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedSpots, setLikedSpots] = useState<Set<number>>(new Set());

  // Mock data for Instagram-worthy spots based on destination
  const instagramSpots = [
    {
      id: 1,
      name: "Golden Hour Viewpoint",
      image: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      description: "Perfect sunset shots with panoramic city views",
      bestTime: "6:00 PM - 7:30 PM",
      tags: ["#GoldenHour", "#CityViews", "#Sunset"],
      difficulty: "Easy",
      likes: 2847,
      category: "Scenic Views"
    },
    {
      id: 2,
      name: "Historic Architecture District",
      image: "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      description: "Stunning colonial buildings and cobblestone streets",
      bestTime: "9:00 AM - 11:00 AM",
      tags: ["#Architecture", "#Historic", "#Streets"],
      difficulty: "Easy",
      likes: 1923,
      category: "Architecture"
    },
    {
      id: 3,
      name: "Rooftop Garden Cafe",
      image: "https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      description: "Lush greenery with city skyline backdrop",
      bestTime: "2:00 PM - 4:00 PM",
      tags: ["#Rooftop", "#Garden", "#Cafe"],
      difficulty: "Medium",
      likes: 3156,
      category: "Food & Drink"
    },
    {
      id: 4,
      name: "Waterfront Promenade",
      image: "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      description: "Reflective water shots and modern bridges",
      bestTime: "7:00 AM - 9:00 AM",
      tags: ["#Waterfront", "#Reflections", "#Bridge"],
      difficulty: "Easy",
      likes: 2634,
      category: "Nature"
    },
    {
      id: 5,
      name: "Street Art Alley",
      image: "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      description: "Vibrant murals and colorful graffiti walls",
      bestTime: "10:00 AM - 12:00 PM",
      tags: ["#StreetArt", "#Murals", "#Urban"],
      difficulty: "Easy",
      likes: 4521,
      category: "Art & Culture"
    },
    {
      id: 6,
      name: "Local Market Square",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      description: "Authentic local life and colorful produce",
      bestTime: "8:00 AM - 10:00 AM",
      tags: ["#LocalLife", "#Market", "#Authentic"],
      difficulty: "Medium",
      likes: 1876,
      category: "Culture"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(instagramSpots.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(instagramSpots.length / 3)) % Math.ceil(instagramSpots.length / 3));
  };

  const toggleLike = (spotId: number) => {
    setLikedSpots(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(spotId)) {
        newLiked.delete(spotId);
      } else {
        newLiked.add(spotId);
      }
      return newLiked;
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-700';
      case 'Medium': return 'bg-yellow-100 text-yellow-700';
      case 'Hard': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const visibleSpots = instagramSpots.slice(currentIndex * 3, (currentIndex + 1) * 3);

  return (
    <div className="relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 flex items-center">
            <Camera className="h-6 w-6 text-pink-500 mr-2" />
            Instagram-Worthy Spots
          </h3>
          <p className="text-gray-600 mt-1">
            Capture unforgettable moments at these photogenic locations
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="bg-white/80 hover:bg-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            disabled={currentIndex >= Math.ceil(instagramSpots.length / 3) - 1}
            className="bg-white/80 hover:bg-white"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Carousel */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleSpots.map((spot) => (
          <Card key={spot.id} className=" group overflow-hidden bg-white/90 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <img
                src={spot.image}
                alt={spot.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Overlay with actions */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/20 backdrop-blur-sm text-white border-white/20 hover:bg-white/30"
                      onClick={() => toggleLike(spot.id)}
                    >
                      <Heart 
                        className={`h-4 w-4 mr-1 ${
                          likedSpots.has(spot.id) ? 'fill-red-500 text-red-500' : ''
                        }`} 
                      />
                      {likedSpots.has(spot.id) ? spot.likes + 1 : spot.likes}
                    </Button>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="bg-white/20 backdrop-blur-sm text-white border-white/20 hover:bg-white/30 h-8 w-8"
                    >
                      <Share2 className="h-3 w-3" />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="bg-white/20 backdrop-blur-sm text-white border-white/20 hover:bg-white/30 h-8 w-8"
                    >
                      <Bookmark className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Category badge */}
              <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800 backdrop-blur-sm">
                {spot.category}
              </Badge>

              {/* Difficulty badge */}
              <Badge className={`absolute top-3 right-3 ${getDifficultyColor(spot.difficulty)}`}>
                {spot.difficulty}
              </Badge>
            </div>

            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                  {spot.name}
                </h4>
                <div className="flex items-center text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">4.8</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {spot.description}
              </p>

              {/* Best time */}
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Clock className="h-4 w-4 mr-1" />
                <span>Best time: {spot.bestTime}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-3">
                {spot.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs bg-blue-50 text-blue-600 hover:bg-blue-100"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
                >
                  <MapPin className="h-3 w-3" />
                  <span>Get Directions</span>
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
                >
                  <Instagram className="h-3 w-3 mr-1" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(instagramSpots.length / 3) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-blue-500 w-6' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Pro tip */}
      <div className="mt-6 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border border-pink-200">
        <div className="flex items-start space-x-3">
          <div className="bg-pink-100 p-2 rounded-full">
            <Camera className="h-5 w-5 text-pink-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">📸 Pro Photography Tips</h4>
            <p className="text-sm text-gray-600">
              Visit during golden hour (1 hour before sunset) for the best lighting. 
              Don't forget to check the weather and arrive early to avoid crowds!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}