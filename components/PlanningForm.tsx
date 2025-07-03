"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Sparkles, Loader2, User2 } from "lucide-react";
import { useRouter } from "next/navigation";

export function PlanningForm() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [people, setpeople] = useState([1]);
  const [days, setDays] = useState([7]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedTripType, setSelectedTripType] = useState("leisure");

  const [loading, setloading] = useState(false);

  const tripTypes = [
    { id: "leisure", label: "Leisure", icon: "🏖️" },
    { id: "adventure", label: "Adventure", icon: "🏔️" },
    { id: "cultural", label: "Cultural", icon: "🏛️" },
    { id: "business", label: "Business", icon: "💼" },
    { id: "romantic", label: "Romantic", icon: "💕" },
    { id: "family", label: "Family", icon: "👨‍👩‍👧‍👦" },
  ];

  const popularDestinations = [
    "Paris, France",
    "Tokyo, Japan",
    "New York, USA",
    "London, UK",
    "Barcelona, Spain",
    "Dubai, UAE",
    "Sydney, Australia",
    "Rome, Italy",
  ];

  const handleGeneratePlan = async () => {
    setIsGenerating(true)

    if (!destination.trim()) return;
    const data = {
      destination,
      people: people[0],
      days: days[0],
      selectedTripType,
    };

    try {
  
      const queryParams = new URLSearchParams({
        data: JSON.stringify(data),
      });
  
      router.push(`/travel-result?${queryParams}`);

    } 
    catch (error) {
      setIsGenerating(false);
    }
  };

  return (
    <>
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/60 backdrop-blur-md border-white/20 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-900">
                Create Your Dream Trip
              </CardTitle>
              <p className="text-gray-600">
                Tell us your preferences and let AI do the magic
              </p>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Destination Input */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <Label
                    htmlFor="destination"
                    className="text-lg font-semibold"
                  >
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
                <Label className="text-lg font-semibold">
                  What type of trip?
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {tripTypes.map((type) => (
                    <Card
                      key={type.id}
                      className={`cursor-pointer transition-all hover:scale-105 ${
                        selectedTripType === type.id
                          ? "ring-2 ring-blue-500 bg-blue-50"
                          : "hover:bg-gray-50"
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

              {/* people Slider */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-2">
                  <User2 className="h-5 w-5 text-green-600" />
                  <Label className="text-lg font-semibold">
                    Person <span>{people}</span>
                  </Label>
                </div>
                <Slider
                  value={people}
                  onValueChange={setpeople}
                  max={100}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>👤1</span>
                  <span>👥100</span>
                </div>
              </div>

              {/* Days Slider */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="h-5 w-5 text-purple-600" />
                  <Label className="text-lg font-semibold">
                    Duration: {days[0]} {days[0] === 1 ? "day" : "days"}
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

      
    </>
  );
}
