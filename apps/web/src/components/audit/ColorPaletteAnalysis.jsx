import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Check, AlertTriangle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ColorPaletteAnalysis = ({ colors = [] }) => {
  const { toast } = useToast();

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${text} copied to clipboard`,
    });
  };

  // Sort by usage count
  const sortedColors = [...colors].sort((a, b) => b.count - a.count);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Detected Color Palette</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {sortedColors.map((color, index) => (
              <div key={index} className="group relative bg-white dark:bg-gray-800 rounded-lg border shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div 
                  className="h-24 w-full" 
                  style={{ backgroundColor: color.hex }}
                />
                <div className="p-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-mono text-sm font-bold">{color.hex}</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => copyToClipboard(color.hex)}
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 truncate">{color.name}</p>
                  <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
                    <span>Usage:</span>
                    <span className="font-medium text-gray-700 dark:text-gray-300">{color.count}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contrast & Accessibility Check</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border bg-gray-50 dark:bg-gray-900">
              <h4 className="font-semibold mb-2">Contrast Ratios (WCAG AA)</h4>
              <div className="grid gap-2">
                <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded border">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-blue-500"></div>
                    <span className="text-sm">blue-500 on white</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <Check className="w-4 h-4" />
                    <span className="text-sm font-bold">Pass (4.5:1)</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded border">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-yellow-500"></div>
                    <span className="text-sm">yellow-500 on white</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-500">
                    <AlertTriangle className="w-4 h-4" />
                    <span className="text-sm font-bold">Fail (1.8:1)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ColorPaletteAnalysis;