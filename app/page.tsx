"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  MapPin,
  DollarSign,
  Sparkles,
  Star,
  Users,
  Globe,
  Clock,
  Shield,
  Zap,
  Heart,
  ArrowRight,
  Play,
  CheckCircle,
  Award,
  MessageSquare,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function MarketingPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const [video, setVideo] = useState(false);

  const features = [
    {
      icon: <Sparkles className="h-8 w-8 text-blue-500" />,
      title: "AI-Powered Planning",
      description:
        "Our advanced AI analyzes millions of travel data points to create your perfect itinerary in seconds.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-green-500" />,
      title: "Budget Optimization",
      description:
        "Get maximum value from your budget with smart recommendations and cost-saving alternatives.",
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-500" />,
      title: "Global Coverage",
      description:
        "Access to 1000+ destinations worldwide with local insights and hidden gems.",
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: "Instant Results",
      description:
        "Generate comprehensive travel plans in under 30 seconds, not hours of research.",
    },
    {
      icon: <Shield className="h-8 w-8 text-red-500" />,
      title: "Trusted & Secure",
      description:
        "Your data is protected with enterprise-grade security and privacy measures.",
    },
    {
      icon: <Heart className="h-8 w-8 text-pink-500" />,
      title: "Personalized Experience",
      description:
        "Every recommendation is tailored to your preferences, style, and travel goals.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Digital Nomad",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content:
        "This AI planner saved me 20+ hours of research. My Tokyo trip was absolutely perfect!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Business Traveler",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content:
        "The budget optimization feature helped me save $800 on my European business trip.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Family Vacation Planner",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content:
        "Planning our family vacation to Bali was stress-free and the kids loved every activity!",
      rating: 5,
    },
  ];

  const stats = [
    { number: "50K+", label: "Happy Travelers" },
    { number: "1000+", label: "Destinations" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "30s", label: "Average Plan Time" },
  ];

  const handledemo = () => {
    setVideo(true);

    setTimeout(() => {
      setVideo(false)
    }, 19000);
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  WanderWise ✈️
                </span>
              </div>

              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="#features"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  How it Works
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Reviews
                </a>
                {/* <a
                  href="#pricing"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Pricing
                </a> */}
              </div>

              <div className="flex items-center space-x-4">
                <Button onClick={() => router.push("/dashboard")} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-full blur-2xl animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

            {/* Floating travel icons */}
            <div className="absolute top-32 right-1/4 text-6xl opacity-10 animate-float">
              ✈️
            </div>
            <div className="absolute top-60 left-1/3 text-5xl opacity-10 animate-float delay-1000">
              🗺️
            </div>
            <div className="absolute bottom-40 right-1/3 text-5xl opacity-10 animate-float delay-500">
              🏖️
            </div>
          </div>

          {!video && (
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
                <Award className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium text-gray-700">
                  #1 AI Travel Planning Platform
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Plan Your Dream Trip
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  in 30 Seconds
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Let our AI create personalized travel itineraries that match
                your budget, preferences, and timeline. No more hours of
                research – just perfect trips.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Button
                  onClick={() => router.push("/dashboard")}
                  size="lg"
                  className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 h-auto"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Start Planning
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="cursor-pointer text-lg px-8 py-4 h-auto bg-white/80 backdrop-blur-sm border-white/20"
                  onClick={handledemo}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Intro
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {video && (
            <div className="h-[800px] w-[400px] max-w-3xl mx-auto">
              <video
                autoPlay
                playsInline
                className=" rounded-lg shadow-lg"
              >
                <source src="/intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">
                <Zap className="h-4 w-4 mr-2" />
                Powerful Features
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Our AI Planner?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experience the future of travel planning with cutting-edge AI
                technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50"
                >
                  <CardContent className="p-8">
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section
          id="how-it-works"
          className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">
                <Clock className="h-4 w-4 mr-2" />
                Simple Process
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Three simple steps to your perfect vacation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  1. Tell Us Your Preferences
                </h3>
                <p className="text-gray-600">
                  Share your destination, budget, dates, and travel style
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  2. AI Creates Your Plan
                </h3>
                <p className="text-gray-600">
                  Our AI analyzes millions of options to craft your perfect
                  itinerary
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  3. Book & Enjoy
                </h3>
                <p className="text-gray-600">
                  Review, customize, and book your personalized travel plan
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">
                <MessageSquare className="h-4 w-4 mr-2" />
                Customer Stories
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What Our Travelers Say
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join thousands of satisfied travelers who&apos;ve discovered
                their perfect trips
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      &quot;{testimonial.content}&quot;
                    </p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Plan Your Next Adventure?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join over 50,000 travelers who&apos;ve discovered their perfect
              trips with our AI planner
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Input
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="max-w-sm bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <p className="text-sm opacity-75">
              No credit card required • Free forever plan available
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xl font-bold">WanderWise ✈️</span>
                </div>
                <p className="text-gray-400 mb-4">
                  The world&apos;s most advanced AI-powered travel planning
                  platform.
                </p>
                <div className="flex space-x-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-white"
                  >
                    <Users className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-white"
                  >
                    <MessageSquare className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-white"
                  >
                    <Globe className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Product</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      API
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Mobile App
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Status
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
              <p>&copy; 2024 AI Travel Planner. All rights reserved.</p>
            </div>
          </div>
        </footer>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(5deg);
            }
          }
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
        `}</style>
      </div>
    </>
  );
}
