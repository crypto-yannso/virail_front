import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ContentTypeChartProps {
  loading?: boolean;
}

const ContentTypeChart: React.FC<ContentTypeChartProps> = ({ loading }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
            family: "'Inter', sans-serif",
          },
        },
      },
      title: {
        display: true,
        text: 'Distribution par Type de Contenu',
        font: {
          size: 16,
          family: "'Inter', sans-serif",
          weight: '600',
        },
        padding: {
          bottom: 30
        }
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#1F1F1F',
        bodyColor: '#1F1F1F',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        padding: 12,
        bodyFont: {
          size: 13,
          family: "'Inter', sans-serif",
        },
        titleFont: {
          size: 13,
          family: "'Inter', sans-serif",
          weight: '600',
        },
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          font: {
            size: 12,
            family: "'Inter', sans-serif",
          },
        }
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
            family: "'Inter', sans-serif",
          },
        }
      },
    },
  };

  const data = {
    labels: ['Articles', 'Vidéos', 'Infographies', 'Podcasts', 'Newsletters'],
    datasets: [
      {
        label: 'Nombre de Publications',
        data: [45, 32, 28, 15, 20],
        backgroundColor: [
          'rgba(107, 93, 255, 0.8)',  // Violet
          'rgba(29, 208, 152, 0.8)',  // Vert
          'rgba(255, 159, 64, 0.8)',  // Orange
          'rgba(255, 99, 132, 0.8)',  // Rose
          'rgba(54, 162, 235, 0.8)',  // Bleu
        ],
        borderColor: [
          'rgba(107, 93, 255, 1)',
          'rgba(29, 208, 152, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
        borderRadius: 6,
      },
      {
        label: 'Engagement Moyen',
        data: [85, 65, 55, 40, 35],
        backgroundColor: [
          'rgba(107, 93, 255, 0.4)',
          'rgba(29, 208, 152, 0.4)',
          'rgba(255, 159, 64, 0.4)',
          'rgba(255, 99, 132, 0.4)',
          'rgba(54, 162, 235, 0.4)',
        ],
        borderColor: [
          'rgba(107, 93, 255, 0.6)',
          'rgba(29, 208, 152, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
        ],
        borderWidth: 1,
        borderRadius: 6,
      }
    ],
  };

  if (loading) {
    return (
      <div className="h-[400px] flex items-center justify-center">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-48"></div>
          <div className="h-[300px] bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-card p-6">
      <div className="h-[400px]">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default ContentTypeChart; 