import React from 'react';
import { useTranslation } from 'react-i18next';

const Mission = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-blue-50 mt-16 p-8 rounded-xl" data-aos="fade-up">
      <h3 className="text-2xl font-bold text-blue-700 mb-4">{t('missionTitle')}</h3>
      <p className="text-gray-700">{t('missionText')}</p>
    </div>
  );
};

export default Mission;