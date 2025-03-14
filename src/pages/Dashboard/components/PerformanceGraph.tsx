import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface PerformanceGraphProps {
  loading?: boolean;
  data?: any;
}

const PerformanceGraph: React.FC<PerformanceGraphProps> = ({ loading }) => {
  // Données factices pour le graphique
  const labels = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Engagement',
        data: [65, 78, 90, 85, 95, 110, 108, 120, 115, 130, 125, 140],
        borderColor: '#6B5DFF',
        backgroundColor: 'rgba(107, 93, 255, 0.1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Conversions',
        data: [30, 35, 40, 45, 48, 50, 55, 58, 62, 65, 70, 75],
        borderColor: '#1DD098',
        backgroundColor: 'rgba(29, 208, 152, 0.1)',
        fill: true,
        tension: 0.4,
      }
    ],
  };

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
        text: 'Performance Annuelle',
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
    <div className="h-[400px]">
      <Line data={data} options={options} />
    </div>
  );
};

export default PerformanceGraph;