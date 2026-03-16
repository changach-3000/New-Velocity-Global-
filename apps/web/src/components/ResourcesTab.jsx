import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, FileText, CheckSquare, Layout, FileSpreadsheet, Book } from 'lucide-react';
import ResourceDownloadButton from './ResourceDownloadButton';

const getResourceIcon = (type) => {
  switch (type) {
    case 'study_guide': return <Book className="h-5 w-5 text-blue-500" />;
    case 'checklist': return <CheckSquare className="h-5 w-5 text-green-500" />;
    case 'template': return <Layout className="h-5 w-5 text-purple-500" />;
    case 'worksheet': return <FileSpreadsheet className="h-5 w-5 text-orange-500" />;
    case 'reference': return <FileText className="h-5 w-5 text-gray-500" />;
    default: return <FileText className="h-5 w-5 text-gray-500" />;
  }
};

const getResourceBadgeColor = (type) => {
  switch (type) {
    case 'study_guide': return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
    case 'checklist': return 'bg-green-100 text-green-800 hover:bg-green-200';
    case 'template': return 'bg-purple-100 text-purple-800 hover:bg-purple-200';
    case 'worksheet': return 'bg-orange-100 text-orange-800 hover:bg-orange-200';
    case 'reference': return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const formatResourceType = (type) => {
  return type.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

const ResourcesTab = ({ resources = [] }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          resource.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'all' || resource.resourceType === selectedType;
    return matchesSearch && matchesType;
  });

  const resourceTypes = ['all', ...new Set(resources.map(r => r.resourceType))];

  if (resources.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed">
        <FileText className="h-12 w-12 text-gray-300 mx-auto mb-3" />
        <h3 className="text-lg font-medium text-gray-900">No resources available</h3>
        <p className="text-gray-500">There are no downloadable resources for this lesson yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {resourceTypes.map(type => (
            <Badge
              key={type}
              variant={selectedType === type ? "default" : "outline"}
              className="cursor-pointer capitalize whitespace-nowrap"
              onClick={() => setSelectedType(type)}
            >
              {type === 'all' ? 'All Types' : formatResourceType(type)}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filteredResources.map((resource) => (
          <Card key={resource.id} className="hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-5 flex items-start gap-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                {getResourceIcon(resource.resourceType)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h4 className="font-semibold text-gray-900 truncate pr-2" title={resource.title}>
                    {resource.title}
                  </h4>
                  <Badge className={getResourceBadgeColor(resource.resourceType)}>
                    {formatResourceType(resource.resourceType)}
                  </Badge>
                </div>
                <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                  {resource.description || "No description available."}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-gray-400 font-mono">
                    {resource.fileName}
                  </span>
                  <ResourceDownloadButton 
                    resource={resource} 
                    variant="outline" 
                    size="sm" 
                    className="h-8"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No resources found matching your criteria.</p>
          <Button 
            variant="link" 
            onClick={() => { setSearchQuery(''); setSelectedType('all'); }}
          >
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default ResourcesTab;