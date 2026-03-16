import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Star, Clock } from 'lucide-react';

const ResourcesScreen = () => {
  const ResourceCard = ({ title, type, size }) => (
    <Card className="mb-3">
      <CardContent className="p-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
          <FileText className="w-5 h-5 text-blue-600" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-sm truncate">{title}</h4>
          <p className="text-xs text-gray-500">{type} • {size}</p>
        </div>
        <Button variant="ghost" size="icon">
          <Download className="w-5 h-5 text-gray-400" />
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white p-4 sticky top-0 z-10 border-b">
        <h1 className="font-bold text-xl">Resources</h1>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full justify-start overflow-x-auto rounded-none border-b bg-white p-0 h-12">
          <TabsTrigger value="all" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent px-6">All</TabsTrigger>
          <TabsTrigger value="guides" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent px-6">Guides</TabsTrigger>
          <TabsTrigger value="templates" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent px-6">Templates</TabsTrigger>
          <TabsTrigger value="saved" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent px-6">Saved</TabsTrigger>
        </TabsList>

        <div className="p-4">
          <TabsContent value="all" className="mt-0">
            <h3 className="font-bold text-sm text-gray-500 mb-3 uppercase tracking-wider">Recent</h3>
            <ResourceCard title="Master Study Guide" type="PDF" size="5.2 MB" />
            <ResourceCard title="Lease vs. Buy Calculator" type="XLSX" size="1.1 MB" />
            
            <h3 className="font-bold text-sm text-gray-500 mb-3 mt-6 uppercase tracking-wider">Lesson 1</h3>
            <ResourceCard title="Lesson 1 Slides" type="PDF" size="2.4 MB" />
            <ResourceCard title="Terminology Cheat Sheet" type="PDF" size="0.5 MB" />
          </TabsContent>
          
          <TabsContent value="saved" className="mt-0">
            <div className="text-center py-10 text-gray-500">
              <Star className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p>No saved resources yet</p>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default ResourcesScreen;