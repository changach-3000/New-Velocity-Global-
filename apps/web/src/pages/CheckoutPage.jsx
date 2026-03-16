import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, Link, useParams, useSearchParams } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
// import pb from '@/lib/pocketbaseClient';
import PocketBase from 'pocketbase';
const POCKETBASE_URL = 'https://velocity-global-db-v2.onrender.com';
const pb = new PocketBase(POCKETBASE_URL);
import { motion } from 'framer-motion';
import { Lock, ShoppingBag, ArrowRight, AlertCircle, RefreshCw, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const CheckoutPage = () => {
  const { cartItems, cartTotal } = useCart();
  const { currentUser, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Support both route params and query params for single course checkout
  const { courseId: paramCourseId } = useParams();
  const [searchParams] = useSearchParams();
  const queryCourseId = searchParams.get('courseId');
  const singleCourseId = paramCourseId || queryCourseId;

  const [singleCourse, setSingleCourse] = useState(null);
  const [fetchingCourse, setFetchingCourse] = useState(!!singleCourseId);

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      const redirectUrl = singleCourseId ? `/checkout?courseId=${singleCourseId}` : '/checkout';
      navigate(`/login?redirect=${encodeURIComponent(redirectUrl)}`);
    }
  }, [isAuthenticated, navigate, singleCourseId]);

  // Fetch single course details if courseId is present
  useEffect(() => {
    const fetchCourse = async () => {
      if (!singleCourseId) return;

      try {
        setFetchingCourse(true);
        const record = await pb.collection('courses').getOne(singleCourseId, { $autoCancel: false });
        setSingleCourse(record);
      } catch (err) {
        console.error("Failed to fetch course for checkout:", err);
        setError("Failed to load course details. Please try again.");
      } finally {
        setFetchingCourse(false);
      }
    };

    fetchCourse();
  }, [singleCourseId]);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);

    try {
      if (!currentUser) {
        navigate('/login');
        return;
      }

      const userId = currentUser.id;
      const userEmail = currentUser.email;
      const apiBaseUrl = 'https://velocity-global-express.onrender.com/api';

      if (!apiBaseUrl) {
        throw new Error("API Server URL is not configured.");
      }

      let payload = {};

      if (singleCourseId) {
        // Single Course Checkout
        if (!singleCourse) {
          throw new Error("Course details not loaded.");
        }

        payload = {
          amount: singleCourse.price,
          productName: singleCourse.title,
          userEmail: userEmail,
          courseId: singleCourseId,
          userId: userId
        };

      } else {
        // Cart Checkout
        if (cartItems.length === 0) {
          throw new Error("Your cart is empty.");
        }

        // For cart, we send the list of IDs as a JSON string in courseId field
        // The backend will store this in metadata
        const courseIds = cartItems.map(item => item.id);

        payload = {
          amount: cartTotal,
          userEmail: userEmail,
          userId: userId,
          cartItems: courseIds   // ← only this needed
        };
      }

      // Call Paystack Initialize Endpoint using standard fetch
      const response = await fetch(`${apiBaseUrl}/paystack/initialize`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Payment service is temporarily unavailable. Please try again.');
      }

      const data = await response.json();

      if (data.authorization_url) {
        window.location.href = data.authorization_url;
      } else {
        throw new Error("No payment URL returned from server");
      }

    } catch (error) {
      console.error('[Checkout] Error:', error);
      setError(error.message || 'Failed to initiate checkout. Please try again.');
      toast({
        title: 'Checkout failed',
        description: error.message || 'Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) return null;

  if (fetchingCourse) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
      </div>
    );
  }

  // If no single course and empty cart
  if (!singleCourseId && cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center bg-white p-12 rounded-xl shadow-lg max-w-md w-full">
          <ShoppingBag className="w-20 h-20 text-gray-300 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any courses yet.
          </p>
          <Link to="/courses">
            <Button className="w-full bg-[#3b82f6] hover:bg-[#1e3a8a]">
              Browse Courses
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const displayItems = singleCourse ? [singleCourse] : cartItems;
  const totalAmount = singleCourse ? singleCourse.price : cartTotal;

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Checkout - Master the Art of Leasing</title>
        <meta name="description" content="Complete your purchase securely with Paystack." />
      </Helmet>

      <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Checkout</h1>
          <p className="text-xl text-blue-100">Secure payment powered by Paystack</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {displayItems.map((course) => (
                <div key={course.id} className="flex justify-between items-start border-b border-gray-100 pb-4 last:border-0">
                  <div className="flex-1 pr-4">
                    <h3 className="font-semibold text-gray-900">{course.title}</h3>
                    <p className="text-sm text-gray-600">{course.instructor_name}</p>
                  </div>
                  <div className="font-semibold text-[#1e3a8a]">
                    ${course.price?.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t-2 border-gray-100 pt-4">
              <div className="flex justify-between text-xl font-bold text-[#1e3a8a]">
                <span>Total</span>
                <span>${totalAmount?.toFixed(2)}</span>
              </div>
            </div>
          </motion.div>

          {/* Payment Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6">Payment</h2>

            <div className="mb-6">
              <div className="flex items-center gap-2 text-gray-600 mb-4 bg-green-50 p-3 rounded-lg border border-green-100">
                <Lock className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium">Secure SSL Encrypted Payment</span>
              </div>
              <p className="text-gray-600 mb-4">
                You will be redirected to Paystack's secure checkout page to complete your payment. No card information is stored on our servers.
              </p>
            </div>

            {error && (
              <div className="mb-6 bg-red-50 border border-red-100 text-red-600 p-4 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-medium">Checkout Error</p>
                  <p className="text-sm">{error}</p>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-red-700 underline mt-1"
                    onClick={handleCheckout}
                  >
                    Try Again
                  </Button>
                </div>
              </div>
            )}

            <Button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full h-14 text-lg font-bold bg-[#3b82f6] hover:bg-[#1e3a8a] shadow-lg hover:shadow-xl transition-all"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  Processing...
                </>
              ) : (
                <>
                  {error ? (
                    <>
                      <RefreshCw className="w-5 h-5 mr-2" />
                      Retry Checkout
                    </>
                  ) : (
                    <>
                      Proceed to Checkout
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </>
              )}
            </Button>

            <p className="text-xs text-gray-500 text-center mt-4">
              By completing this purchase, you agree to our Terms of Service and Refund Policy.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;