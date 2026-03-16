import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import { Clock } from 'lucide-react';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TimeSpentTracker = ({ timeData = [] }) => {
  const totalMinutes = timeData.reduce((acc, curr) => acc + (curr.timeSpentMinutes || 0), 0);
  const totalHours = Math.floor(totalMinutes / 60);
  const remainingMinutes = totalMinutes % 60;

  // Estimated completion (assuming 2 hours per lesson for 8 lessons = 16 hours total)
  const estimatedTotalMinutes = 8 * 120; 
  const percentComplete = Math.min(100, Math.round((totalMinutes / estimatedTotalMinutes) * 100));

  const chartData = {
    labels: timeData.map(d => `L${d.lessonNumber}`),
    datasets: [
      {
        label: 'Minutes Spent',
        data: timeData.map(d => d.timeSpentMinutes || 0),
        backgroundColor: 'rgba(168, 85, 247, 0.6)', // Purple-500
        borderColor: 'rgba(168, 85, 247, 1)',
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Minutes' }
      }
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card className="md:col-span-1 bg-purple-50 border-purple-100">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-purple-800">
            <Clock className="w-5 h-5" />
            Total Time
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <span className="text-4xl font-bold text-gray-900">{totalHours}h {remainingMinutes}m</span>
            <p className="text-sm text-gray-500 mt-1">Invested in learning</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-medium text-gray-600">
              <span>Estimated Course Time</span>
              <span>16h 00m</span>
            </div>
            <div className="h-2 bg-purple-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-purple-600 rounded-full" 
                style={{ width: `${percentComplete}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 text-right">{percentComplete}% of estimated time</p>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Time per Module
          </CardTitle>
        </CardHeader>
        <CardContent className="h-[200px]">
          <Bar data={chartData} options={chartOptions} />
        </CardContent>
      </Card>
    </div>
  );
};

export default TimeSpentTracker;