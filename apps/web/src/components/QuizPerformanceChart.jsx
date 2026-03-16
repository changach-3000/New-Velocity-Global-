import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const QuizPerformanceChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => `L${d.lesson}`),
    datasets: [
      {
        type: 'bar',
        label: 'Your Score',
        data: data.map(d => d.score),
        backgroundColor: data.map(d => d.score >= 70 ? 'rgba(34, 197, 94, 0.6)' : 'rgba(239, 68, 68, 0.6)'),
        borderColor: data.map(d => d.score >= 70 ? 'rgb(34, 197, 94)' : 'rgb(239, 68, 68)'),
        borderWidth: 1,
        borderRadius: 4,
      },
      {
        type: 'line',
        label: 'Class Average',
        data: data.map(d => d.average),
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 2,
        tension: 0.3,
        pointRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.dataset.label}: ${context.raw}%`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        }
      },
      x: {
        grid: {
          display: false,
        }
      }
    },
  };

  return (
    <Card className="h-full shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-800">Quiz Performance History</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <Bar data={chartData} options={options} />
      </CardContent>
    </Card>
  );
};

export default QuizPerformanceChart;