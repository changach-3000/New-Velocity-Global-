import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, FileCode, Layout, Box, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

const ComponentInventory = ({ components = [] }) => {
  const [searchTerm, setSearchQuery] = useState('');

  const filteredComponents = components.filter(comp => 
    comp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    comp.path.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getTypeIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'page': return <Layout className="w-4 h-4 text-purple-500" />;
      case 'ui component': return <Box className="w-4 h-4 text-blue-500" />;
      default: return <FileCode className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case 'pass': return <Badge className="bg-green-500"><CheckCircle className="w-3 h-3 mr-1" /> Pass</Badge>;
      case 'warning': return <Badge className="bg-yellow-500"><AlertTriangle className="w-3 h-3 mr-1" /> Warning</Badge>;
      case 'fail': return <Badge variant="destructive"><XCircle className="w-3 h-3 mr-1" /> Fail</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Component Inventory ({components.length})</CardTitle>
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search components..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Path</TableHead>
                <TableHead className="text-center">Issues</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredComponents.map((comp) => (
                <TableRow key={comp.id}>
                  <TableCell className="font-medium flex items-center gap-2">
                    {getTypeIcon(comp.type)}
                    {comp.name}
                  </TableCell>
                  <TableCell>{comp.type}</TableCell>
                  <TableCell className="font-mono text-xs text-gray-500">{comp.path}</TableCell>
                  <TableCell className="text-center">
                    {comp.issuesCount > 0 ? (
                      <span className="text-red-500 font-bold">{comp.issuesCount}</span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right">{getStatusBadge(comp.status)}</TableCell>
                </TableRow>
              ))}
              {filteredComponents.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                    No components found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComponentInventory;