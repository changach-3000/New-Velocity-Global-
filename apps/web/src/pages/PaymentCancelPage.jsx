
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { XCircle, ArrowLeft, RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';

const PaymentCancelPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <Helmet>
        <title>Payment Cancelled - Velocity Global Leasing</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="bg-slate-900/80 border-slate-800 shadow-2xl backdrop-blur-xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-slate-600 to-slate-500 w-full"></div>
          <CardContent className="p-8 text-center">
            <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <XCircle className="w-10 h-10 text-slate-400" />
            </div>

            <h1 className="text-2xl font-bold text-white mb-2">Payment Cancelled</h1>
            <p className="text-slate-400 mb-8">
              Your transaction was cancelled and you have not been charged.
            </p>

            <div className="space-y-3">
              <Link to="/membership" className="block">
                <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white h-12">
                  <RefreshCcw className="w-4 h-4 mr-2" />
                  Try Again
                </Button>
              </Link>
              <Link to="/dashboard" className="block">
                <Button variant="outline" className="w-full border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white h-12">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Return to Dashboard
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default PaymentCancelPage;
