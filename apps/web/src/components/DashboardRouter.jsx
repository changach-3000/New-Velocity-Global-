import React from 'react';
import { useAuth } from '@/contexts/AuthContext.jsx';
import FinancierDashboard from '@/components/FinancierDashboard.jsx';
import SalesPersonDashboard from '@/components/SalesPersonDashboard.jsx';
import CustomerDashboard from '@/components/CustomerDashboard.jsx';
import { Loader2 } from 'lucide-react';

const DashboardRouter = () => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#4f7ba7]" />
      </div>
    );
  }

  if (!currentUser) {
    return null; // ProtectedRoute will handle redirect
  }

  // Normalize role to handle case sensitivity or missing values
  const role = currentUser.role || 'Customer';

  switch (role) {
    case 'Financier':
      return <FinancierDashboard />;
    case 'Sales':
      return <SalesPersonDashboard />;
    case 'Customer':
    default:
      return <CustomerDashboard />;
  }
};

export default DashboardRouter;