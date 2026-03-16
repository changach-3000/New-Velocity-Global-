import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AuditHistory = ({ history = [] }) => {
  const chartData = {
    labels: history.map(h => h.date),
    datasets: [
      {
        label: 'Consistency Score',
        data: history.map(h => h.score),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.3,
      },
      {
        label: 'Issues Found',
        data: history.map(h => h.issues),
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.5)',
        tension: 0.3,
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
        text: 'Audit Performance Over Time',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-end gap-2">
        <Button variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" /> Export PDF
        </Button>
        <Button variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" /> Export JSON
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Trend Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] w-full">
            <Line options={options} data={chartData} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Previous Audits</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {history.slice().reverse().map((record, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div>
                  <p className="font-medium">{new Date(record.date).toLocaleDateString()}</p>
                  <p className="text-sm text-gray-500">Automated Scan</p>
                </div>
                <div className="flex gap-8 text-right">
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Score</p>
                    <p className="font-bold text-lg">{record.score}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Issues</p>
                    <p className="font-bold text-lg text-red-500">{record.issues}</p>
                  </div>
                  <Button variant="ghost" size="sm">View Report</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuditHistory;