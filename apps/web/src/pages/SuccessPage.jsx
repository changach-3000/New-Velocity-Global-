// import React, { useEffect, useState } from 'react';
// import { Helmet } from 'react-helmet';
// import { useSearchParams, Link, useNavigate } from 'react-router-dom';
// import PocketBase from 'pocketbase';
// import { useAuth } from '@/contexts/AuthContext';
// import { useCart } from '@/contexts/CartContext';
// import { motion } from 'framer-motion';
// import { CheckCircle, Loader2, ArrowRight, BookOpen, AlertCircle, RefreshCw, Home } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const pb = new PocketBase('https://velocity-global-db-v2.onrender.com');
// pb.autoCancellation(false);
// const API_BASE_URL = 'https://velocity-global-express.onrender.com/api';

// const SuccessPage = () => {
//   const [searchParams] = useSearchParams();
//   // Paystack returns 'reference' in the URL
//   const reference = searchParams.get('reference');
//   const navigate = useNavigate();
//   const { currentUser, isAuthenticated } = useAuth();
//   const { clearCart } = useCart();

//   const [loading, setLoading] = useState(true);
//   const [statusMessage, setStatusMessage] = useState('Initializing payment verification...');
//   const [enrolledCourses, setEnrolledCourses] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // 1. Validate Reference existence immediately
//     if (!reference) {
//       console.error('[SuccessPage] No reference found in URL');
//       setError("Invalid Request: No payment reference found.");
//       setLoading(false);
//       return;
//     }

//     // Wait for auth to be ready
//     if (isAuthenticated && currentUser) {
//       verifyAndEnroll();
//     } else if (isAuthenticated === false) {
//       // Handle case where user might have lost session during redirect
//       setLoading(false);
//       setError("Please log in to complete your enrollment verification.");
//     }
//   }, [reference, isAuthenticated, currentUser]);

//   // const verifyAndEnroll = async () => {
//   //   try {
//   //     setLoading(true);
//   //     setError(null);

//   //     console.log('[SuccessPage] Starting verification for reference:', reference);

//   //     // 2. Verify Payment with Paystack via API
//   //     setStatusMessage('Verifying payment status with Paystack...');

//   //      const apiBaseUrl = 'https://velocity-global-express.onrender.com/api';
//   //     if (!apiBaseUrl) {
//   //       throw new Error("API Server URL is not configured.");
//   //     }

//   //     let verifyData;
//   //     try {
//   //       const response = await fetch(`${apiBaseUrl}/paystack/verify`, {
//   //         method: 'POST',
//   //         headers: { 'Content-Type': 'application/json' },
//   //         body: JSON.stringify({ reference })
//   //       });

//   //       if (!response.ok) {
//   //         const errData = await response.json().catch(() => ({}));
//   //         throw new Error(errData.error || 'Failed to verify payment');
//   //       }

//   //       verifyData = await response.json();
//   //     } catch (apiErr) {
//   //       console.error('[SuccessPage] API Verification Failed:', apiErr);
//   //       throw new Error(`Payment verification failed: ${apiErr.message}`);
//   //     }

//   //     console.log('[SuccessPage] Paystack Verification Status:', verifyData.success);

//   //     // 3. Validate Payment Status
//   //     if (!verifyData.success) {
//   //       console.warn('[SuccessPage] Payment not successful.');
//   //       navigate(`/cancel?reference=${reference}`);
//   //       return;
//   //     }

//   //     // 4. Process enrollments returned from backend
//   //     const enrollments = verifyData.enrollments || [];

//   //     if (enrollments.length === 0) {
//   //       // Fallback: check if we can find course info in metadata if backend didn't return enrollments
//   //       // This is a safety net, usually backend handles it.
//   //       console.warn('[SuccessPage] No enrollments returned from verification API.');
//   //     }

//   //     setStatusMessage('Finalizing your enrollment...');
//   //     const enrolledList = [];

//   //     // 5. Fetch Course Details for Display
//   //     // We use the course IDs from the verification response
//   //     for (const enrollment of enrollments) {
//   //       try {
//   //         const courseId = enrollment.courseId;
//   //         const course = await pb.collection('courses').getOne(courseId, { $autoCancel: false });
//   //         enrolledList.push(course);
//   //       } catch (err) {
//   //         console.error(`[SuccessPage] Failed to fetch details for course ${enrollment.courseId}:`, err);
//   //       }
//   //     }

//   //     if (enrolledList.length > 0) {
//   //       setEnrolledCourses(enrolledList);
//   //       clearCart(); // Clear cart only after successful enrollment
//   //       setLoading(false);
//   //     } else {
//   //       // If we couldn't fetch details but verification was success, show generic success
//   //       setLoading(false);
//   //       setEnrolledCourses([{ id: 'unknown', title: 'Course Enrollment', description: 'Access granted successfully.' }]);
//   //     }

//   //   } catch (err) {
//   //     console.error('[SuccessPage] Critical Error:', err);
//   //     setError(err.message || 'An unexpected error occurred during enrollment.');
//   //     setLoading(false);
//   //   }
//   // };
//   // AFTER
//   const verifyAndEnroll = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       console.log('[SuccessPage] Starting verification for reference:', reference);
//       setStatusMessage('Verifying payment with Paystack...');

//       const response = await fetch(`${API_BASE_URL}/paystack/verify`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ reference }),
//       });

//       const verifyData = await response.json();

//       if (!response.ok) {
//         // Surface the real error message from the server for easier debugging
//         throw new Error(verifyData.message || verifyData.error || 'Failed to verify payment');
//       }

//       console.log('[SuccessPage] Verify response:', verifyData);

//       if (!verifyData.success) {
//         navigate(`/cancel?reference=${reference}`);
//         return;
//       }

//       setStatusMessage('Finalizing your enrollment...');
//       const enrollments = verifyData.enrollments || [];
//       const enrolledList = [];

//       for (const enrollment of enrollments) {
//         try {
//           const course = await pb.collection('courses').getOne(enrollment.courseId, { $autoCancel: false });
//           enrolledList.push(course);
//         } catch (err) {
//           console.error(`[SuccessPage] Could not fetch course ${enrollment.courseId}:`, err);
//         }
//       }

//       // If course fetch failed but enrollment was created, show a generic success
//       if (enrolledList.length === 0 && enrollments.length > 0) {
//         enrolledList.push({
//           id: 'unknown',
//           title: 'Your Course',
//           description: 'Enrollment confirmed. Check your dashboard to start learning.',
//         });
//       }

//       clearCart();
//       setEnrolledCourses(enrolledList);
//       setLoading(false);

//     } catch (err) {
//       console.error('[SuccessPage] Critical Error:', err);
//       setError(err.message || 'An unexpected error occurred during enrollment.');
//       setLoading(false);
//     }
//   };

//   // Loading State
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center p-8 bg-white rounded-xl shadow-sm max-w-md w-full">
//           <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
//           <h2 className="text-xl font-semibold text-gray-900 mb-2">{statusMessage}</h2>
//           <p className="text-sm text-gray-500">Please do not close this window or refresh.</p>
//         </div>
//       </div>
//     );
//   }

//   // Error State
//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//         <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center border-t-4 border-red-500">
//           <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
//             <AlertCircle className="w-8 h-8 text-red-600" />
//           </div>
//           <h2 className="text-xl font-bold text-gray-900 mb-2">Enrollment Verification Failed</h2>
//           <p className="text-gray-600 mb-6 text-sm">{error}</p>

//           <div className="flex flex-col gap-3">
//             <Button onClick={() => window.location.reload()} className="w-full gap-2 bg-blue-600 hover:bg-blue-700">
//               <RefreshCw className="w-4 h-4" />
//               Retry Verification
//             </Button>

//             <div className="flex gap-3">
//               <Link to="/contact-us" className="flex-1">
//                 <Button variant="outline" className="w-full">Contact Support</Button>
//               </Link>
//               <Link to="/dashboard" className="flex-1">
//                 <Button variant="outline" className="w-full">Dashboard</Button>
//               </Link>
//             </div>
//           </div>

//           {reference && (
//             <div className="mt-6 pt-4 border-t border-gray-100">
//               <p className="text-xs text-gray-400 font-mono">Ref: {reference.slice(-8)}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }

//   // Success State
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Helmet>
//         <title>Enrollment Successful - Master the Art of Leasing</title>
//       </Helmet>

//       <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="bg-white rounded-2xl shadow-xl overflow-hidden"
//         >
//           <div className="bg-green-600 p-8 text-center">
//             <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
//               <CheckCircle className="w-10 h-10 text-white" />
//             </div>
//             <h1 className="text-3xl font-bold text-white mb-2">You're In!</h1>
//             <p className="text-green-100 text-lg">
//               Your enrollment has been confirmed successfully.
//             </p>
//           </div>

//           <div className="p-8 sm:p-12">
//             <div className="mb-8">
//               <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
//                 Ready to Start Learning
//               </h3>
//               <div className="space-y-3">
//                 {enrolledCourses.map(course => (
//                   <motion.div
//                     key={course.id}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:border-blue-100 hover:bg-blue-50/50 transition-colors"
//                   >
//                     <div className="bg-white p-2 rounded-lg shadow-sm">
//                       <BookOpen className="w-6 h-6 text-blue-600" />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-gray-900">{course.title}</h4>
//                       <p className="text-sm text-gray-500 line-clamp-1">{course.description}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 border-t border-gray-100">
//               <Link to="/dashboard" className="flex-1">
//                 <Button className="w-full h-12 text-lg gap-2 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-900/20">
//                   Go to Dashboard
//                   <ArrowRight className="w-5 h-5" />
//                 </Button>
//               </Link>

//               <Link to="/courses" className="flex-1">
//                 <Button variant="outline" className="w-full h-12 text-lg gap-2 border-gray-300 text-black hover:text-black">
//                   <Home className="w-5 h-5" />
//                   Browse More
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default SuccessPage;

// import React, { useEffect, useState } from 'react';
// import { Helmet } from 'react-helmet';
// import { useSearchParams, Link, useNavigate } from 'react-router-dom';
// import PocketBase from 'pocketbase';
// import { useAuth } from '@/contexts/AuthContext';
// import { useCart } from '@/contexts/CartContext';
// import { motion } from 'framer-motion';
// import { CheckCircle, Loader2, ArrowRight, BookOpen, AlertCircle, RefreshCw, Home } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const pb = new PocketBase('https://velocity-global-db-v2.onrender.com');
// pb.autoCancellation(false);
// const API_BASE_URL = 'https://velocity-global-express.onrender.com/api';

// const SuccessPage = () => {
//   const [searchParams] = useSearchParams();
//   const reference = searchParams.get('reference');
//   const navigate = useNavigate();
//   const { currentUser, isAuthenticated } = useAuth();
//   const { clearCart } = useCart();

//   const [loading, setLoading] = useState(true);
//   const [statusMessage, setStatusMessage] = useState('Initializing payment verification...');
//   const [enrolledCourses, setEnrolledCourses] = useState([]);
//   const [error, setError] = useState(null);
//   const [verifyStarted, setVerifyStarted] = useState(false);

//   useEffect(() => {
//     // No reference in URL — bail immediately
//     if (!reference) {
//       console.error('[SuccessPage] No reference found in URL');
//       setError("Invalid Request: No payment reference found.");
//       setLoading(false);
//       return;
//     }

//     // Auth is still loading (isAuthenticated is null/undefined) — wait
//     if (isAuthenticated === null || isAuthenticated === undefined) {
//       console.log('[SuccessPage] Auth still loading, waiting...');
//       return;
//     }

//     // Auth resolved but user is not logged in
//     if (isAuthenticated === false) {
//       console.warn('[SuccessPage] User not authenticated, redirecting to login');
//       navigate(`/login?redirect=${encodeURIComponent(`/success?reference=${reference}`)}`);
//       return;
//     }

//     // Auth is ready and user is logged in — run verify once only
//     if (isAuthenticated && currentUser && !verifyStarted) {
//       setVerifyStarted(true);
//       verifyAndEnroll();
//     }
//   }, [reference, isAuthenticated, currentUser]);

//   const verifyAndEnroll = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       console.log('[SuccessPage] Starting verification for reference:', reference);
//       setStatusMessage('Verifying payment with Paystack...');

//       const response = await fetch(`${API_BASE_URL}/paystack/verify`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ reference }),
//       });

//       const verifyData = await response.json();

//       console.log('[SuccessPage] Verify response:', verifyData);

//       if (!response.ok) {
//         throw new Error(verifyData.message || verifyData.error || 'Failed to verify payment');
//       }

//       if (!verifyData.success) {
//         navigate(`/cancel?reference=${reference}`);
//         return;
//       }

//       setStatusMessage('Finalizing your enrollment...');
//       const enrollments = verifyData.enrollments || [];
//       const enrolledList = [];

//       for (const enrollment of enrollments) {
//         try {
//           const course = await pb.collection('courses').getOne(enrollment.courseId, { $autoCancel: false });
//           enrolledList.push(course);
//         } catch (err) {
//           console.error(`[SuccessPage] Could not fetch course ${enrollment.courseId}:`, err);
//         }
//       }

//       // If course fetch failed but enrollment was created, show generic success
//       if (enrolledList.length === 0 && enrollments.length > 0) {
//         enrolledList.push({
//           id: 'unknown',
//           title: 'Your Course',
//           description: 'Enrollment confirmed. Check your dashboard to start learning.',
//         });
//       }

//       clearCart();
//       setEnrolledCourses(enrolledList);
//       setLoading(false);

//     } catch (err) {
//       console.error('[SuccessPage] Critical Error:', err);
//       setError(err.message || 'An unexpected error occurred during enrollment.');
//       setLoading(false);
//     }
//   };

//   // Loading State
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center p-8 bg-white rounded-xl shadow-sm max-w-md w-full">
//           <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
//           <h2 className="text-xl font-semibold text-gray-900 mb-2">{statusMessage}</h2>
//           <p className="text-sm text-gray-500">Please do not close this window or refresh.</p>
//         </div>
//       </div>
//     );
//   }

//   // Error State
//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//         <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center border-t-4 border-red-500">
//           <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
//             <AlertCircle className="w-8 h-8 text-red-600" />
//           </div>
//           <h2 className="text-xl font-bold text-gray-900 mb-2">Enrollment Verification Failed</h2>
//           <p className="text-gray-600 mb-6 text-sm">{error}</p>

//           <div className="flex flex-col gap-3">
//             <Button
//               onClick={() => {
//                 setVerifyStarted(false);
//                 setError(null);
//                 setLoading(true);
//               }}
//               className="w-full gap-2 bg-blue-600 hover:bg-blue-700"
//             >
//               <RefreshCw className="w-4 h-4" />
//               Retry Verification
//             </Button>

//             <div className="flex gap-3">
//               <Link to="/contact-us" className="flex-1">
//                 <Button variant="outline" className="w-full">Contact Support</Button>
//               </Link>
//               <Link to="/dashboard" className="flex-1">
//                 <Button variant="outline" className="w-full">Dashboard</Button>
//               </Link>
//             </div>
//           </div>

//           {reference && (
//             <div className="mt-6 pt-4 border-t border-gray-100">
//               <p className="text-xs text-gray-400 font-mono">Ref: {reference.slice(-8)}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }

//   // Success State
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Helmet>
//         <title>Enrollment Successful - Master the Art of Leasing</title>
//       </Helmet>

//       <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="bg-white rounded-2xl shadow-xl overflow-hidden"
//         >
//           <div className="bg-green-600 p-8 text-center">
//             <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
//               <CheckCircle className="w-10 h-10 text-white" />
//             </div>
//             <h1 className="text-3xl font-bold text-white mb-2">You're In!</h1>
//             <p className="text-green-100 text-lg">
//               Your enrollment has been confirmed successfully.
//             </p>
//           </div>

//           <div className="p-8 sm:p-12">
//             <div className="mb-8">
//               <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
//                 Ready to Start Learning
//               </h3>
//               <div className="space-y-3">
//                 {enrolledCourses.map(course => (
//                   <motion.div
//                     key={course.id}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:border-blue-100 hover:bg-blue-50/50 transition-colors"
//                   >
//                     <div className="bg-white p-2 rounded-lg shadow-sm">
//                       <BookOpen className="w-6 h-6 text-blue-600" />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-gray-900">{course.title}</h4>
//                       <p className="text-sm text-gray-500 line-clamp-1">{course.description}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 border-t border-gray-100">
//               <Link to="/dashboard" className="flex-1">
//                 <Button className="w-full h-12 text-lg gap-2 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-900/20">
//                   Go to Dashboard
//                   <ArrowRight className="w-5 h-5" />
//                 </Button>
//               </Link>

//               <Link to="/courses" className="flex-1">
//                 <Button variant="outline" className="w-full h-12 text-lg gap-2 border-gray-300 text-black hover:text-black">
//                   <Home className="w-5 h-5" />
//                   Browse More
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default SuccessPage;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const SuccessPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const reference = query.get('reference');
    if (!reference) {
      toast({ title: 'Error', description: 'No payment reference found', variant: 'destructive' });
      navigate('/checkout');
      return;
    }

    const verifyPayment = async () => {
      try {
        const res = await fetch(`${process.env.VITE_API_SERVER_URL}/paystack/verify`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ reference }),
        });
        const data = await res.json();
        if (data.success) {
          toast({ title: 'Payment Successful', description: 'Your enrollment is complete' });
        } else {
          toast({ title: 'Payment Failed', description: data.message || 'Verification failed', variant: 'destructive' });
        }
      } catch (err) {
        toast({ title: 'Error', description: err.message, variant: 'destructive' });
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [navigate, toast]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {loading ? <p className="text-lg font-medium">Verifying payment...</p> : <p className="text-lg font-medium">Payment verification complete</p>}
    </div>
  );
};

export default SuccessPage;