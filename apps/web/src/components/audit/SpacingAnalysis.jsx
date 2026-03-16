import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SpacingAnalysis = ({ spacing = [] }) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Spacing System</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {spacing.map((space, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-24 font-mono text-sm text-gray-600">{space.name}</div>
                <div className="w-16 text-xs text-gray-400">{space.px}</div>
                <div className="flex-1 flex items-center">
                  <div 
                    className="bg-blue-200 dark:bg-blue-800 h-8 rounded relative"
                    style={{ width: space.value }}
                  >
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] text-blue-800 dark:text-blue-200 font-bold">
                      {space.value}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Inconsistent Spacing Detection</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">The following arbitrary values were found and should be replaced with standard Tailwind classes:</p>
            <ul className="list-disc list-inside text-sm text-red-500 font-mono bg-red-50 p-4 rounded-md">
              <li>margin-top: 13px (Use mt-3 or mt-4)</li>
              <li>padding: 27px (Use p-6 or p-8)</li>
              <li>gap: 5px (Use gap-1 or gap-2)</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SpacingAnalysis;