'use client';

import { useState } from 'react';
import { PlanningForm } from '@/components/PlanningForm';
import { TravelResults } from '@/components/TravelResults';
import { Header } from '@/components/Headers';
import { HeroSection } from '@/components/HeroSection';

export default function Home() {
  const [showResults, setShowResults] = useState(false);
  const [travelData, setTravelData] = useState(null);

  const handlePlanGenerated = (data: any) => {
    setTravelData(data);
    setShowResults(true);
  };

  const handleBackToPlanning = () => {
    setShowResults(false);
    setTravelData(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      {!showResults ? (
        <div className="container mx-auto px-4 py-8">
          <HeroSection />
          <PlanningForm onPlanGenerated={handlePlanGenerated} />
        </div>
      ) : (
        <TravelResults 
          data={travelData} 
          onBackToPlanning={handleBackToPlanning}
        />
      )}
    </div>
  );
}