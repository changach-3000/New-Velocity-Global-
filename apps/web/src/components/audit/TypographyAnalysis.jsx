import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const TypographyAnalysis = ({ typography = [] }) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Typography Scale</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Class Name</TableHead>
                <TableHead>Size / Line Height</TableHead>
                <TableHead>Weight</TableHead>
                <TableHead>Preview</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {typography.map((type, index) => (
                <TableRow key={index}>
                  <TableCell className="font-mono text-sm text-blue-600">{type.size}</TableCell>
                  <TableCell className="text-sm text-gray-500">
                    {type.size === 'text-xs' && '12px / 16px'}
                    {type.size === 'text-sm' && '14px / 20px'}
                    {type.size === 'text-base' && '16px / 24px'}
                    {type.size === 'text-lg' && '18px / 28px'}
                    {type.size === 'text-xl' && '20px / 28px'}
                    {type.size === 'text-2xl' && '24px / 32px'}
                  </TableCell>
                  <TableCell className="text-sm">{type.weight}</TableCell>
                  <TableCell>
                    <p className={`${type.size} font-[${type.weight}] text-gray-900 dark:text-gray-100 truncate max-w-md`}>
                      {type.sample}
                    </p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Heading Hierarchy Check</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50 dark:bg-green-900/10">
              <h3 className="font-bold text-green-800 dark:text-green-200">H1 Usage</h3>
              <p className="text-sm text-green-700 dark:text-green-300">Correctly used once per page in 95% of pages.</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50 dark:bg-yellow-900/10">
              <h3 className="font-bold text-yellow-800 dark:text-yellow-200">Skipped Levels</h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">Found 3 instances of H2 followed immediately by H4.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TypographyAnalysis;