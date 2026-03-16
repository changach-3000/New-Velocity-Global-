import React, { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table'; // Assuming standard shadcn table structure or similar
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Filter, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  BarChart3,
  Eye
} from 'lucide-react';

const CourseConsistencyAudit = ({ data, stats, onViewDetails }) => {
  const [filter, setFilter] = useState('All'); // All, Complete, Incomplete, At Risk
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('completion'); // completion, name, issues

  const filteredCourses = data
    .filter(course => {
      if (filter === 'All') return true;
      return course.status === filter;
    })
    .filter(course => 
      course.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === 'completion') return a.completionPercentage - b.completionPercentage;
      if (sort === 'name') return a.title.localeCompare(b.title);
      if (sort === 'issues') return b.missingComponents.length - a.missingComponents.length;
      return 0;
    });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Complete': return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'Incomplete': return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
      case 'At Risk': return 'bg-red-100 text-red-800 hover:bg-red-200';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Courses</p>
              <h3 className="text-2xl font-bold">{stats.total}</h3>
            </div>
            <BarChart3 className="h-8 w-8 text-blue-500 opacity-50" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Complete</p>
              <h3 className="text-2xl font-bold text-green-600">{stats.complete}</h3>
            </div>
            <CheckCircle2 className="h-8 w-8 text-green-500 opacity-50" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">At Risk</p>
              <h3 className="text-2xl font-bold text-red-600">{stats.atRisk}</h3>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-500 opacity-50" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Avg. Completion</p>
              <h3 className="text-2xl font-bold text-blue-600">{stats.avgCompletion}%</h3>
            </div>
            <div className="h-8 w-8 rounded-full border-4 border-blue-200 border-t-blue-600" />
          </CardContent>
        </Card>
      </div>

      {/* Filters and Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-lg border shadow-sm">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search courses..." 
              className="pl-8" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          {['All', 'Complete', 'Incomplete', 'At Risk'].map((f) => (
            <Button 
              key={f} 
              variant={filter === f ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter(f)}
              className="whitespace-nowrap"
            >
              {f}
            </Button>
          ))}
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-500 uppercase">
              <tr>
                <th className="px-6 py-3 font-medium cursor-pointer hover:text-gray-700" onClick={() => setSort('name')}>Course Name</th>
                <th className="px-6 py-3 font-medium text-center cursor-pointer hover:text-gray-700" onClick={() => setSort('completion')}>Completion</th>
                <th className="px-6 py-3 font-medium text-center">Status</th>
                <th className="px-6 py-3 font-medium text-center cursor-pointer hover:text-gray-700" onClick={() => setSort('issues')}>Missing Items</th>
                <th className="px-6 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredCourses.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                    No courses found matching your filters.
                  </td>
                </tr>
              ) : (
                filteredCourses.map((course) => (
                  <tr key={course.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {course.title}
                      <div className="text-xs text-gray-500 font-normal">{course.lessonCount} Lessons</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <span className="font-bold">{course.completionPercentage}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Badge className={getStatusColor(course.status)} variant="secondary">
                        {course.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-center">
                      {course.missingComponents.length > 0 ? (
                        <span className="text-red-600 font-bold">{course.missingComponents.length}</span>
                      ) : (
                        <span className="text-green-500"><CheckCircle2 className="h-4 w-4 inline" /></span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => onViewDetails(course)}
                        className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                      >
                        <Eye className="h-4 w-4 mr-1" /> View Details
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CourseConsistencyAudit;