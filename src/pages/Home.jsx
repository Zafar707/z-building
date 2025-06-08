import React from 'react';
import Hero from '../components/Intro';
import Features from '../components/Services';
import MarqueeSection from '../components/MarqueeSection';
import Stats from '../components/Stats';

const Home = () => {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section data-aos="fade-up">
        <Hero />
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-100" data-aos="fade-up" data-aos-delay="100">
        <Features />
      </section>

      {/* Marquee */}
      <section className="py-10 bg-white" data-aos="fade-up" data-aos-delay="200">
        <MarqueeSection />
      </section>

      {/* Stats */}
      <section className="py-20 bg-blue-50" data-aos="fade-up" data-aos-delay="300">
        <Stats />
      </section>


    </main>
  );
};

export default Home;
