import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import pb from '@/lib/pocketbaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronLeft, Search, Download, Loader2, FileText } from 'lucide-react';
import ResourcesSection from '@/components/ResourcesSection';

const ResourceLibrary = () => {
  const [resources, setResources] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resourcesData, lessonsData] = await Promise.all([
          pb.collection('vendor_leasing_resources').getFullList({
            sort: '-created',
            $autoCancel: false,
          }),
          pb.collection('vendor_leasing_lessons').getFullList({
            sort: 'lessonNumber',
            $autoCancel: false,
          })
        ]);
        setResources(resourcesData);
        setLessons(lessonsData);
      } catch (err) {
        console.error("Error fetching library data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredResources = resources.filter(r => 
    r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <Link to="/vendor-leasing-course" className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 mb-2">
              <ChevronLeft className="h-4 w-4 mr-1" /> Back to Course
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Resource Library</h1>
            <p className="text-gray-600 mt-1">
              Access all downloadable materials, templates, and guides for the Vendor Leasing course.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2" onClick={() => window.print()}>
              <Download className="h-4 w-4" /> Export List
            </Button>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white p-4 rounded-xl shadow-sm border">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search library..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        {/* Content */}
        <ResourcesSection resources={filteredResources} lessons={lessons} />
      </div>
    </div>
  );
};

export default ResourceLibrary;