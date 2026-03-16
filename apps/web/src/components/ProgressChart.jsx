import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
} from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Register ChartJS components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const ProgressChart = ({ overallProgress = 0, lessonCompletionRates = [] }) => {
  // Doughnut Chart Data (Overall Progress)
  const doughnutData = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        data: [overallProgress, 100 - overallProgress],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)', // Blue-500
          'rgba(229, 231, 235, 0.5)', // Gray-200
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(229, 231, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const doughnutOptions = {
    cutout: '75%',
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  // Bar Chart Data (Lesson Progress)
  const barData = {
    labels: lessonCompletionRates.map(l => `L${l.lessonNumber}`),
    datasets: [
      {
        label: 'Completion %',
        data: lessonCompletionRates.map(l => l.completionPercentage),
        backgroundColor: lessonCompletionRates.map(l => 
          l.completionPercentage === 100 ? 'rgba(34, 197, 94, 0.7)' : 'rgba(59, 130, 246, 0.7)'
        ),
        borderRadius: 4,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: { color: 'rgba(0, 0, 0, 0.05)' },
        ticks: { font: { size: 10 } }
      },
      x: {
        grid: { display: false },
        ticks: { font: { size: 10 } }
      }
    },
  };

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {/* Overall Progress Doughnut */}
      <Card className="md:col-span-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Overall Completion
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center relative py-6">
          <div className="w-40 h-40 relative">
            <Doughnut data={doughnutData} options={doughnutOptions} />
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-3xl font-bold text-blue-600">{Math.round(overallProgress)}%</span>
              <span className="text-xs text-gray-400 font-medium uppercase">Complete</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lesson Breakdown Bar Chart */}
      <Card className="md:col-span-2">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Lesson Breakdown
          </CardTitle>
        </CardHeader>
        <CardContent className="h-[200px]">
          <Bar data={barData} options={barOptions} />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressChart;