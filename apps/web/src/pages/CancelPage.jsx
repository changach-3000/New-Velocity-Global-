import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { XCircle, RefreshCw, ArrowLeft, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CancelPage = () => {
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get('course_id');
  const sessionId = searchParams.get('session_id');

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Helmet>
        <title>Payment Cancelled - Master the Art of Leasing</title>
        <meta name="description" content="Your payment was cancelled. You can try again anytime." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-2xl shadow-xl max-w-lg w-full overflow-hidden"
      >
        <div className="bg-gray-50 p-8 text-center border-b border-gray-100">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <XCircle className="w-10 h-10 text-red-500" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Cancelled</h1>
          <p className="text-gray-600">
            The transaction was not completed. No charges were made to your account.
          </p>
        </div>

        <div className="p-8">
          <div className="space-y-3 mb-8">
            {courseId ? (
              <Link to={`/course/${courseId}/purchase`}>
                <Button className="w-full h-12 text-lg gap-2 bg-blue-600 hover:bg-blue-700 shadow-md">
                  <RefreshCw className="w-5 h-5" />
                  Try Payment Again
                </Button>
              </Link>
            ) : (
              <Link to="/cart">
                <Button className="w-full h-12 text-lg gap-2 bg-blue-600 hover:bg-blue-700 shadow-md">
                  <RefreshCw className="w-5 h-5" />
                  Return to Cart
                </Button>
              </Link>
            )}
            
            <Link to={courseId ? `/course/${courseId}` : "/courses"}>
              <Button variant="outline" className="w-full h-12 text-lg gap-2 border-gray-300 hover:bg-gray-50">
                <ArrowLeft className="w-5 h-5" />
                {courseId ? "Back to Course Details" : "Continue Shopping"}
              </Button>
            </Link>
          </div>

          <div className="bg-blue-50 rounded-xl p-4 flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-blue-900 text-sm">Having trouble?</h4>
              <p className="text-sm text-blue-700/80 mt-1">
                If you continue to experience issues with payment, please check your card details or contact our support team for assistance.
              </p>
              <Link to="/contact-us" className="text-sm font-medium text-blue-600 hover:text-blue-800 mt-2 inline-block">
                Contact Support &rarr;
              </Link>
            </div>
          </div>
          
          {sessionId && (
            <p className="mt-6 text-center text-xs text-gray-400 font-mono">
              Session Ref: {sessionId.slice(-8)}
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default CancelPage;