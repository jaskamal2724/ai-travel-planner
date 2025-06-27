'use client';

import { PlanningForm } from '@/components/PlanningForm';
import { Header } from '@/components/Headers';
import { HeroSection } from '@/components/HeroSection';
import { Footer } from '@/components/Footer';

export default function Home() {
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      <HeroSection/>

      <PlanningForm/>
      <Footer/>
    </div>
  );
}