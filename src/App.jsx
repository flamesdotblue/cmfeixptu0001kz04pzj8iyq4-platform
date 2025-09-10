import React from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import RecruitersAndCompanies from './components/RecruitersAndCompanies';
import ExperienceAndCTA from './components/ExperienceAndCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Hero />
      <HowItWorks />
      <RecruitersAndCompanies />
      <ExperienceAndCTA />
      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} AlgoUniversity. All rights reserved.
      </footer>
    </div>
  );
}
