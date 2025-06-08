import React from 'react';
import { useTranslation } from 'react-i18next';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['2021', '2022', '2023', '2024'],
  datasets: [
    {
      label: 'Completed Projects',
      data: [10, 15, 20, 30],
      backgroundColor: '#2563eb',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Project Statistics',
    },
  },
};

const ChartSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">{t('chartTitle')}</h2>
        <Bar data={data} options={options} />
      </div>
    </section>
  );
};

export default ChartSection;