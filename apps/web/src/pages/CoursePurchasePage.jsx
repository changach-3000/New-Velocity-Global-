import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useAuth } from '@/contexts/AuthContext';
import PocketBase from 'pocketbase';
const POCKETBASE_URL = 'https://velocity-global-db-v2.onrender.com';
const pb = new PocketBase(POCKETBASE_URL);
import apiServerClient from '@/lib/apiServerClient';
import { Loader2, CheckCircle, AlertCircle, Lock, CreditCard, RefreshCw, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

// Loading Skeleton Component
const LoadingState = () => (
  <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <div className="h-64 bg-gray-200 rounded-xl animate-pulse" />
        <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse" />
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
        </div>
      </div>
      <div className="lg:col-span-1">
        <div className="h-64 bg-gray-200 rounded-xl animate-pulse" />
      </div>
    </div>
  </div>
);

// Error State Component
const ErrorState = ({ message, onRetry }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
    <Card className="w-full max-w-md border-red-100 shadow-lg">
      <CardContent className="pt-8 text-center space-y-4">
        <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
          <AlertCircle className="w-8 h-8 text-red-500" />
        </div>
        <h2 className="text-xl font-bold text-gray-900">Unable to Load Course</h2>
        <p className="text-gray-600">{message || "We couldn't retrieve the course details. Please try again."}</p>
        <div className="flex gap-3 justify-center pt-2">
          <Button variant="outline" onClick={() => window.history.back()}>
            Go Back
          </Button>
          <Button onClick={onRetry} className="gap-2">
            <RefreshCw className="w-4 h-4" />
            Retry
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
);

const CoursePurchasePage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { currentUser, isAuthenticated } = useAuth();
  const { toast } = useToast();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [purchasing, setPurchasing] = useState(false);
  const [error, setError] = useState(null);
  const [purchaseError, setPurchaseError] = useState(null);

  const fetchCourse = async () => {
    if (!courseId) return;
    
    console.log(`[CoursePurchase] Fetching course details for ID: ${courseId}`);
    setLoading(true);
    setError(null);

    try {
      const record = await pb.collection('courses').getOne(courseId, { $autoCancel: false });
      console.log('[CoursePurchase] Course fetched successfully:', record);
      setCourse(record);
    } catch (err) {
      console.error("[CoursePurchase] Error fetching course:", err);
      setError("Failed to load course details. The course may not exist or is temporarily unavailable.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourse();
  }, [courseId]);

  const handleBuyNow = async () => {
    // 1. Auth Check
    if (!isAuthenticated) {
      console.log('[CoursePurchase] User not authenticated, redirecting to login');
      navigate(`/login?redirect=/course/${courseId}/purchase`);
      return;
    }

    // Extract userId from currentUser
    const userId = currentUser?.id;

    // Validation to check if userId exists
    if (!userId) {
      console.error('[CoursePurchase] User ID missing from currentUser context');
      toast({
        title: "Authentication Error",
        description: "Could not verify user identity. Please log in again.",
        variant: "destructive",
      });
      return;
    }

    // Log userId for debugging
    console.log('[CoursePurchase] Proceeding with checkout for User ID:', userId);

    if (!course) {
      console.error('[CoursePurchase] Cannot purchase: Course data missing');
      return;
    }

    try {
      setPurchasing(true);
      setPurchaseError(null);
      console.log('[CoursePurchase] Initiating checkout process...');

      // 2. Prepare Payload
      const payload = {
        courseId: course.id,
        courseName: course.title,
        amount: course.price,
        userId: userId,
        successUrl: window.location.origin + '/success?session_id={CHECKOUT_SESSION_ID}',
        cancelUrl: window.location.origin + '/cancel',
      };

      console.log('[CoursePurchase] Sending payload to API:', payload);

      // 3. Call Backend API
      const response = await apiServerClient.fetch('/stripe/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Payment service is temporarily unavailable. Please try again.');
      }

      const data = await response.json();
      console.log('[CoursePurchase] Checkout session created:', data);
      
      // 4. Redirect to Stripe
      if (data.url) {
        console.log('[CoursePurchase] Redirecting to Stripe URL:', data.url);
        // Use window.location.href to ensure top-level navigation, bypassing any potential iframe issues
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL returned from server");
      }

    } catch (err) {
      console.error("[CoursePurchase] Purchase error:", err);
      setPurchaseError(err.message || "Something went wrong connecting to payment provider.");
      toast({
        title: "Checkout Failed",
        description: err.message || "Something went wrong connecting to payment provider. Please try again.",
        variant: "destructive",
      });
      setPurchasing(false);
    }
  };

  if (loading) {
    return <LoadingState />;
  }

  if (error || !course) {
    return <ErrorState message={error} onRetry={fetchCourse} />;
  }

  const learningOutcomes = course.learning_outcomes
    ? course.learning_outcomes.split('\n').filter(item => item.trim())
    : [];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>{`Purchase ${course.title} - Master the Art of Leasing`}</title>
      </Helmet>

      <div className="max-w-5xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={() => navigate(`/course/${courseId}`)}
          className="mb-6 pl-0 hover:pl-2 transition-all gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Course Overview
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Details Column */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-56 bg-gradient-to-r from-blue-700 to-blue-900 relative">
                {course.image_url && (
                  <img 
                    src={course.image_url} 
                    alt={course.title} 
                    className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                  />
                )}
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/60 to-transparent">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 shadow-sm">{course.title}</h1>
                  <p className="text-blue-100 font-medium flex items-center gap-2">
                    <span className="bg-blue-600/80 px-2 py-0.5 rounded text-sm">Course</span>
                    {course.duration_hours && <span>• {course.duration_hours} Hours</span>}
                  </p>
                </div>
              </div>
              
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                  <p className="leading-relaxed">{course.description}</p>
                </div>

                {learningOutcomes.length > 0 && (
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                    <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      What You'll Learn
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {learningOutcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                          <span className="text-gray-700">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Instructor</h3>
                  <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl font-bold text-blue-600 flex-shrink-0">
                      {course.instructor_name?.charAt(0) || 'I'}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{course.instructor_name}</p>
                      <p className="text-sm text-gray-600 mt-1 leading-relaxed">{course.instructor_bio}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Purchase Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-xl sticky top-8 overflow-hidden">
              <div className="bg-gray-900 p-6 text-white text-center">
                <p className="text-blue-200 text-sm font-medium uppercase tracking-wider mb-1">One-time payment</p>
                <div className="text-5xl font-bold">
                  ${course.price?.toFixed(2)}
                </div>
              </div>
              
              <CardContent className="p-6 space-y-6">
                {purchaseError && (
                  <div className="bg-red-50 border border-red-100 text-red-600 p-3 rounded-lg text-sm flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{purchaseError}</span>
                  </div>
                )}

                <Button 
                  onClick={handleBuyNow} 
                  disabled={purchasing}
                  className="w-full h-14 text-lg font-bold bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  {purchasing ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      {purchaseError ? (
                        <>
                          <RefreshCw className="w-5 h-5 mr-2" />
                          Retry Purchase
                        </>
                      ) : (
                        <>
                          Buy Now
                          <CreditCard className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </>
                  )}
                </Button>

                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="bg-green-100 p-1 rounded-full">
                      <Lock className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Secure SSL Encrypted Payment</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="bg-green-100 p-1 rounded-full">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Instant Access to All Lessons</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="bg-green-100 p-1 rounded-full">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Certificate of Completion</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="bg-gray-50 border-t border-gray-100 p-4 text-center">
                <p className="text-xs text-gray-500 w-full">
                  30-Day Money-Back Guarantee. <br/>
                  By purchasing, you agree to our Terms of Service.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePurchasePage;