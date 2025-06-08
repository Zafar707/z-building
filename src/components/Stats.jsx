import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';

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

const Stats = () => {
  const { t } = useTranslation();

  const data = {
    labels: [t('stat1'), t('stat2'), t('stat3'), t('stat4')],
    datasets: [
      {
        label: t('statsLabel'),
        data: [85, 90, 75, 95],
        backgroundColor: 'rgba(37, 99, 235, 0.7)', // blue-600
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: t('statsTitle') },
    },
  };

  return (
    <section className="max-w-6xl mx-auto py-12 px-6 sm:px-12">
      <Bar data={data} options={options} />
    </section>
  );
};

export default Stats;
