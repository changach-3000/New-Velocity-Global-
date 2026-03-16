import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FileText, Download, Filter, FolderOpen } from 'lucide-react';
import ResourceDownloadButton from './ResourceDownloadButton';

const ResourcesSection = ({ resources = [], lessons = [] }) => {
  const [filterType, setFilterType] = useState('all');

  // Group resources by lessonId
  const resourcesByLesson = lessons.reduce((acc, lesson) => {
    const lessonResources = resources.filter(r => 
      r.lessonId === lesson.id && (filterType === 'all' || r.resourceType === filterType)
    );
    if (lessonResources.length > 0) {
      acc.push({
        lesson,
        resources: lessonResources
      });
    }
    return acc;
  }, []);

  const resourceTypes = ['all', ...new Set(resources.map(r => r.resourceType))];

  const formatResourceType = (type) => {
    return type.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-500" />
          <span className="text-sm font-medium text-gray-700">Filter by Type:</span>
          <div className="flex gap-2 flex-wrap">
            {resourceTypes.map(type => (
              <Badge
                key={type}
                variant={filterType === type ? "default" : "outline"}
                className="cursor-pointer capitalize"
                onClick={() => setFilterType(type)}
              >
                {type === 'all' ? 'All' : formatResourceType(type)}
              </Badge>
            ))}
          </div>
        </div>
        <div className="text-sm text-gray-500">
          Showing {resourcesByLesson.reduce((acc, group) => acc + group.resources.length, 0)} resources
        </div>
      </div>

      {resourcesByLesson.length === 0 ? (
        <Card className="bg-gray-50 border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <FolderOpen className="h-12 w-12 text-gray-300 mb-3" />
            <p className="text-gray-500 font-medium">No resources found</p>
          </CardContent>
        </Card>
      ) : (
        <Accordion type="multiple" defaultValue={resourcesByLesson.map(g => g.lesson.id)} className="space-y-4">
          {resourcesByLesson.map(({ lesson, resources }) => (
            <AccordionItem key={lesson.id} value={lesson.id} className="border rounded-lg bg-white px-4">
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3 text-left">
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                    Lesson {lesson.lessonNumber}
                  </Badge>
                  <span className="font-semibold text-gray-900">{lesson.title}</span>
                  <Badge variant="outline" className="ml-2">
                    {resources.length} files
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-2">
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {resources.map(resource => (
                    <div key={resource.id} className="flex items-start gap-3 p-3 rounded-md border bg-gray-50/50 hover:bg-gray-50 transition-colors">
                      <div className="mt-1">
                        <FileText className="h-5 w-5 text-blue-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate" title={resource.title}>
                          {resource.title}
                        </p>
                        <p className="text-xs text-gray-500 mb-2 capitalize">
                          {formatResourceType(resource.resourceType)}
                        </p>
                        <ResourceDownloadButton 
                          resource={resource} 
                          variant="secondary" 
                          size="sm" 
                          className="w-full h-7 text-xs"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default ResourcesSection;