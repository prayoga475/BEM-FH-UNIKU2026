import React from 'react';
import HeroBanner from '../Home/HeroBanner';
import AboutSection from '../Home/AboutSection';
import ProkerSection from '../Home/ProkerSection';
import AspirasiSection from '../Home/AspirasiSection';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <ProkerSection />
      <AspirasiSection />
    </>
  );
}