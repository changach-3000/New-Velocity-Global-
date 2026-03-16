import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const BreadcrumbNavigation = ({ breadcrumbs = [] }) => {
  return (
    <nav className="flex items-center text-sm text-gray-500 mb-6 overflow-x-auto whitespace-nowrap pb-2">
      <Link 
        to="/" 
        className="flex items-center hover:text-blue-600 transition-colors flex-shrink-0"
      >
        <Home className="w-4 h-4 mr-1" />
        Home
      </Link>
      
      {breadcrumbs.map((crumb, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400 flex-shrink-0" />
          {crumb.path ? (
            <Link 
              to={crumb.path}
              className="hover:text-blue-600 transition-colors truncate max-w-[200px]"
              title={crumb.label}
            >
              {crumb.label}
            </Link>
          ) : (
            <span 
              className="font-medium text-gray-900 truncate max-w-[200px]"
              title={crumb.label}
            >
              {crumb.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default BreadcrumbNavigation;