import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Filter, AlertTriangle, AlertCircle, Info, CheckCircle } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const AuditIssuesPanel = ({ issues = [] }) => {
  const [searchTerm, setSearchQuery] = useState('');
  const [severityFilter, setSeverityFilter] = useState('all');

  const filteredIssues = issues.filter(issue => {
    const matchesSearch = issue.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          issue.component.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeverity = severityFilter === 'all' || issue.severity.toLowerCase() === severityFilter.toLowerCase();
    return matchesSearch && matchesSeverity;
  });

  const getSeverityIcon = (severity) => {
    switch (severity.toLowerCase()) {
      case 'critical': return <AlertCircle className="w-5 h-5 text-red-500" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'info': return <Info className="w-5 h-5 text-blue-500" />;
      default: return <CheckCircle className="w-5 h-5 text-green-500" />;
    }
  };

  const getSeverityBadge = (severity) => {
    switch (severity.toLowerCase()) {
      case 'critical': return <Badge variant="destructive">Critical</Badge>;
      case 'warning': return <Badge className="bg-yellow-500 hover:bg-yellow-600">Warning</Badge>;
      case 'info': return <Badge className="bg-blue-500 hover:bg-blue-600">Info</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search issues..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Select value={severityFilter} onValueChange={setSeverityFilter}>
            <SelectTrigger className="w-[180px]">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Filter by Severity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Severities</SelectItem>
              <SelectItem value="critical">Critical</SelectItem>
              <SelectItem value="warning">Warning</SelectItem>
              <SelectItem value="info">Info</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4">
        {filteredIssues.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed">
            <p className="text-gray-500">No issues found matching your criteria.</p>
          </div>
        ) : (
          filteredIssues.map((issue) => (
            <Card key={issue.id} className="overflow-hidden border-l-4 border-l-transparent hover:border-l-blue-500 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1">{getSeverityIcon(issue.severity)}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{issue.title}</h3>
                        <p className="text-sm text-gray-500">Component: <span className="font-mono text-xs bg-gray-100 px-1 py-0.5 rounded">{issue.component}</span></p>
                      </div>
                      {getSeverityBadge(issue.severity)}
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-md border border-red-100 dark:border-red-900/30">
                        <span className="text-xs font-bold text-red-600 uppercase tracking-wider">Current</span>
                        <p className="font-mono text-sm mt-1 text-red-800 dark:text-red-200">{issue.current}</p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-md border border-green-100 dark:border-green-900/30">
                        <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Recommended</span>
                        <p className="font-mono text-sm mt-1 text-green-800 dark:text-green-200">{issue.recommended}</p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Fix Suggestion:</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{issue.fix}</p>
                      {issue.code && (
                        <div className="bg-gray-900 text-gray-100 p-3 rounded-md font-mono text-xs overflow-x-auto">
                          <code>{issue.code}</code>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default AuditIssuesPanel;