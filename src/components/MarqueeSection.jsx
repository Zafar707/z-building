import React from 'react';
import Marquee from 'react-fast-marquee';

const clients = [
  'Murad Buildings',
  'Toshkent Shahar Qurilish',
  'Uzbekiston Arxitektura',
  'Innovatsiya Bank',
  'Global Tech',
  'EcoBuild',
  'Smart City',
];

const MarqueeSection = () => {
  return (
    <section className="bg-gray-100 py-6">
      <Marquee gradient={false} speed={50} pauseOnHover={true} className="text-gray-700 font-semibold text-lg">
        {clients.map((client, idx) => (
          <span key={idx} className="mx-8 whitespace-nowrap">
            {client}
          </span>
        ))}
      </Marquee>
    </section>
  );
};

export default MarqueeSection;
