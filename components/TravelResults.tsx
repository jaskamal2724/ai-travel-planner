"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Clock,
  Star,
  Heart,
  Share2,
  Download,
  CheckCircle,
  IndianRupee,
} from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";
import { InstagramSpots } from "./InstagramSpots";

// const data = {
//   destination: "Manali, Himachal Pradesh",
//   days: 5,
//   budget: 50000,
//   tripType: "adventure",
//   itinerary: [
//     {
//       day: 1,
//       title: "Arrival & Local Exploration",
//       budget: 8000,
//       activities: [
//         "Check-in at hotel",
//         "Visit Hadimba Temple",
//         "Explore Mall Road",
//       ],
//     },
//     {
//       day: 2,
//       title: "Solang Valley Adventure",
//       budget: 12000,
//       activities: [
//         "Drive to Solang Valley",
//         "Paragliding & Ziplining",
//         "Visit Anjani Mahadev",
//       ],
//     },
//     {
//       day: 3,
//       title: "Rohtang Pass Excursion",
//       budget: 11000,
//       activities: [
//         "Early morning trip to Rohtang Pass",
//         "Snow activities & photography",
//         "Back to hotel & relax",
//       ],
//     },
//     {
//       day: 4,
//       title: "Cultural & Scenic Sights",
//       budget: 9000,
//       activities: [
//         "Naggar Castle visit",
//         "River rafting in Beas River",
//         "Try local Himachali cuisine",
//       ],
//     },
//     {
//       day: 5,
//       title: "Departure",
//       budget: 1000,
//       activities: [
//         "Check-out from hotel",
//         "Last-minute shopping",
//         "Drive back to Chandigarh",
//       ],
//     },
//   ],
//   alternatives: [
//     {
//       city: "Kasol",
//       reason: "Perfect for nature lovers and peaceful getaways",
//     },
//     {
//       city: "Dharamshala",
//       reason: "Great blend of Tibetan culture and scenic views",
//     },
//     {
//       city: "Rishikesh",
//       reason: "Adventure-packed and spiritually enriching",
//     },
//   ],
// };

interface ItineraryDay {
  day: number;
  title: string;
  budget: number;
  activities: string[];
}

interface AlternativeCity {
  city: string;
  reason: string;
}

interface InstaSpots {
  name: string;
  description: string;
  best_time: string;
  difficulty: string;
  tags: string;
  likes: string;
  category: string;
  image:string;
}

interface TravelResultData {
  destination: string;
  days: number;
  budget: number;
  tripType: string;
  itinerary: ItineraryDay[];
  alternatives: AlternativeCity[];
  best_time_to_visit_destination: string;
  best_time_to_book_flights: string;
  people: string;
  instagram_worthy_spots: InstaSpots[];
}

export function TravelResults({ result }: { result: TravelResultData }) {
  const router = useRouter();

  const mockTravelData = result;
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            className="cursor-pointer flex items-center space-x-2 hover:bg-white/60"
          >
            <ArrowLeft className="h-4 w-4" />
            <span onClick={() => router.push("/dashboard")}>
              Back to Planning
            </span>
          </Button>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="bg-white/60">
              <Heart className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button variant="outline" size="sm" className="bg-white/60">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm" className="bg-white/60">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Trip Overview */}
        <Card className="bg-white/80 backdrop-blur-md border-white/20 shadow-xl mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                  {mockTravelData.destination}
                </CardTitle>
                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{mockTravelData.days} days</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <IndianRupee className="h-4 w-4" />
                    <span>{mockTravelData.budget.toLocaleString()}</span>
                  </div>
                  <Badge variant="secondary" className="capitalize">
                    {mockTravelData.tripType}
                  </Badge>

                  <Badge variant="secondary" className="capitalize">
                    👤{mockTravelData.people}
                  </Badge>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-600">
                  ₹ {mockTravelData.budget}
                </div>
                <div className="text-sm text-gray-500">Estimated Total</div>
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Itinerary */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Your Personalized Itinerary
            </h2>

            {mockTravelData.itinerary.map((day: ItineraryDay, index: number) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-md border-white/20 shadow-lg"
              >
                <CardHeader className="pb-1">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-gray-900">
                      Day {day.day}: {day.title}
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700"
                    >
                      ₹ {day.budget}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {day.activities.map(
                      (activity: string, actIndex: number) => (
                        <div
                          key={actIndex}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                            <Clock className="h-3 w-3 text-blue-600" />
                          </div>
                          <span className="text-gray-700">{activity}</span>
                        </div>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Budget Breakdown */}
            <Card className="bg-white/80 backdrop-blur-md border-white/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">
                  Budget Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Accommodation</span>
                    <span className="font-semibold">
                      ₹{" "}
                      {Math.round(mockTravelData.budget * 0.4).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Activities</span>
                    <span className="font-semibold">
                      ₹{" "}
                      {Math.round(mockTravelData.budget * 0.3).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Food & Dining</span>
                    <span className="font-semibold">
                      ₹{" "}
                      {Math.round(mockTravelData.budget * 0.2).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Transportation</span>
                    <span className="font-semibold">
                      ₹{" "}
                      {Math.round(mockTravelData.budget * 0.1).toLocaleString()}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>₹ {mockTravelData.budget.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Insights */}
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-2" />
                  AI Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm text-gray-700">
                    Best time to visit :{" "}
                    {mockTravelData.best_time_to_visit_destination}
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm text-gray-700">
                    Your budget allows for premium experiences
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm text-gray-700">
                    Flights Booking : {mockTravelData.best_time_to_book_flights}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Alternative Destinations */}
            <Card className="bg-white/80 backdrop-blur-md border-white/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">
                  Alternative Suggestions
                </CardTitle>
                <p className="text-sm text-gray-600">
                  Similar destinations you might love
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockTravelData.alternatives.map((alt: AlternativeCity, index: number) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <MapPin className="h-4 w-4 text-blue-500" />
                      <span className="font-semibold text-gray-900">
                        {alt.city}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{alt.reason}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Instagram Spots Section */}
        <Card className="mt-10 bg-white/80 backdrop-blur-md border-white/20 shadow-lg">
          <CardContent className="p-6">
            <InstagramSpots
              spots={result.instagram_worthy_spots}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
