import React from 'react';
import { useTranslation } from 'react-i18next';
import introImage from '/hero.png'; // Rasmingizni shu joyga qo'ying

const Intro = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col-reverse md:flex-row items-center gap-10 px-6 md:px-16 py-20 bg-white" data-aos="fade-up">
      {/* Left Text Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          {t('introTitle') || 'Z-Buildings — Zamonaviy qurilish yechimlari'}
        </h1>
        <p className="text-lg text-gray-600">
          {t('introSubtitle') || 'Biz siz uchun eng sifatli, zamonaviy va qulay uylarni barpo qilamiz.'}
        </p>
        <a
          href="#contact"
          className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
        >
          {t('introButton') || 'Bog‘lanish'}
        </a>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2" data-aos="zoom-in">
        <img
          src={introImage}
          alt="Intro"
          className="rounded-3xl shadow-lg object-cover w-full h-full max-h-[400px]"
        />
      </div>
    </section>
  );
};

export default Intro;
