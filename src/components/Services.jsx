import React from 'react';
import { useTranslation } from 'react-i18next';

const servicesData = [
  {
    id: 1,
    title: 'Premium Residence',
    size: '120 m²',
    image: '/public/service1.png',
  },
  {
    id: 2,
    title: 'Elite Tower',
    size: '95 m²',
    image: 'https://images.pexels.com/photos/373584/pexels-photo-373584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    title: 'Smart Villa',
    size: '150 m²',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    title: 'Sunset Apartments',
    size: '110 m²',
    image: 'https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  }
];

const Services = () => {
  const { t } = useTranslation();

  return (
    <section className="px-6 md:px-16 py-20 bg-gray-50" id="services">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12" data-aos="fade-up">
        {t('servicesTit') || 'Bizning Loyihalar'}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all"
            data-aos="fade-up"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6 space-y-2">
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-sm text-gray-500">{t('area') || 'Maydon'}: {project.size}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Block */}
      <div className="mt-16 text-center" data-aos="fade-up">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          {t('moreInfo') || 'Ko‘proq ma’lumotga ega bo‘lishni xohlaysizmi?'}
        </h3>
        <p className="text-gray-600 mb-6">
          {t('callUsNow') || 'Hoziroq biz bilan bog‘laning va barcha savollaringizga javob oling!'}
        </p>
        <a
          href="tel:+998910007777"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition"
        >
          📞 91 000 77 77
        </a>
      </div>
    </section>
  );
};

export default Services;
