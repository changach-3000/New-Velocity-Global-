import React, { useState } from 'react';
import { useAuditData } from '@/hooks/useAuditData';
import CircularProgress from '@/components/ui/circular-progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RefreshCw, TrendingUp, TrendingDown, Minus } from 'lucide-react';

// Sub-components
import AuditIssuesPanel from './AuditIssuesPanel';
import ComponentInventory from './ComponentInventory';
import ColorPaletteAnalysis from './ColorPaletteAnalysis';
import TypographyAnalysis from './TypographyAnalysis';
import SpacingAnalysis from './SpacingAnalysis';
import AuditHistory from './AuditHistory';

const AuditDashboard = () => {
  const { data, loading, runAudit } = useAuditData();
  const [activeTab, setActiveTab] = useState('issues');

  if (loading && !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700">Running System Audit...</h2>
          <p className="text-gray-500">Scanning components, styles, and accessibility.</p>
        </div>
      </div>
    );
  }

  if (!data) return null;

  const getTrendIcon = (trend) => {
    if (trend === 'up') return <TrendingUp className="w-5 h-5 text-green-500" />;
    if (trend === 'down') return <TrendingDown className="w-5 h-5 text-red-500" />;
    return <Minus className="w-5 h-5 text-gray-500" />;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">System Audit Dashboard</h1>
            <p className="text-gray-500 dark:text-gray-400">Comprehensive analysis of codebase consistency and quality.</p>
          </div>
          <Button onClick={runAudit} disabled={loading} className="bg-blue-600 hover:bg-blue-700">
            <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            {loading ? 'Scanning...' : 'Run New Audit'}
          </Button>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Score Card */}
          <Card className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 border-none shadow-lg">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Overall Score</p>
                <div className="flex items-center gap-2 mt-2">
                  {getTrendIcon(data.trend)}
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {data.trend === 'up' ? '+' : ''}{data.trendValue}% from last week
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-4">Last updated: {new Date(data.lastAuditDate).toLocaleDateString()}</p>
              </div>
              <CircularProgress value={data.consistencyScore} size={100} strokeWidth={8} />
            </CardContent>
          </Card>

          {/* Issues Summary */}
          <Card className="bg-white dark:bg-gray-800 border-none shadow-lg">
            <CardContent className="p-6">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Issues Found</p>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-red-500 font-medium">Critical</span>
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    {data.issues.filter(i => i.severity === 'Critical').length}
                  </span>
                </div>
                <Progress value={data.issues.filter(i => i.severity === 'Critical').length * 5} className="h-2 bg-red-100 [&>div]:bg-red-500" />
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-yellow-500 font-medium">Warning</span>
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    {data.issues.filter(i => i.severity === 'Warning').length}
                  </span>
                </div>
                <Progress value={data.issues.filter(i => i.severity === 'Warning').length * 2} className="h-2 bg-yellow-100 [&>div]:bg-yellow-500" />
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="bg-white dark:bg-gray-800 border-none shadow-lg">
            <CardContent className="p-6 grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">{data.components.length}</p>
                <p className="text-xs text-gray-500 uppercase mt-1">Components</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <p className="text-2xl font-bold text-purple-600">{data.colors.length}</p>
                <p className="text-xs text-gray-500 uppercase mt-1">Colors Used</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <p className="text-2xl font-bold text-indigo-600">{data.typography.length}</p>
                <p className="text-xs text-gray-500 uppercase mt-1">Font Sizes</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <p className="text-2xl font-bold text-teal-600">{data.spacing.length}</p>
                <p className="text-xs text-gray-500 uppercase mt-1">Spacing Values</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Category Breakdown */}
        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Category Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.categories.map((cat, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{cat.name}</span>
                    <span className="font-bold text-gray-900 dark:text-white">{cat.score}%</span>
                  </div>
                  <Progress value={cat.score} className={`h-2 bg-gray-100 [&>div]:${cat.color}`} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Detailed Tabs */}
        <Tabs defaultValue="issues" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 bg-white dark:bg-gray-800 p-1 rounded-lg shadow-sm">
            <TabsTrigger value="issues">Issues</TabsTrigger>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
            <TabsTrigger value="spacing">Spacing</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <div className="mt-6">
            <TabsContent value="issues">
              <AuditIssuesPanel issues={data.issues} />
            </TabsContent>
            <TabsContent value="inventory">
              <ComponentInventory components={data.components} />
            </TabsContent>
            <TabsContent value="colors">
              <ColorPaletteAnalysis colors={data.colors} />
            </TabsContent>
            <TabsContent value="typography">
              <TypographyAnalysis typography={data.typography} />
            </TabsContent>
            <TabsContent value="spacing">
              <SpacingAnalysis spacing={data.spacing} />
            </TabsContent>
            <TabsContent value="history">
              <AuditHistory history={data.history} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default AuditDashboard;