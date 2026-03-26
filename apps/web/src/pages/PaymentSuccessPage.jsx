import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Loader2,
  ArrowRight,
  Calendar,
  AlertCircle,
  RefreshCw,
  Crown,
} from "lucide-react";
import { Button } from "@/components/ui/button.jsx";

const API_BASE_URL = "https://velocity-global-express.onrender.com/api";

const PaymentSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const reference = searchParams.get("reference");
  const navigate = useNavigate();
  const { currentUser, isAuthenticated } = useAuth();

  const [loading, setLoading] = useState(true);
  const [statusMessage, setStatusMessage] = useState(
    "Verifying your membership payment...",
  );
  const [membershipData, setMembershipData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!reference) {
      console.error("[PaymentSuccess] No reference found in URL");
      setError("Invalid Request: No payment reference found.");
      setLoading(false);
      return;
    }

    if (isAuthenticated && currentUser) {
      verifyMembership();
    } else if (isAuthenticated === false) {
      setLoading(false);
      setError("Please log in to verify your membership.");
    }
  }, [reference, isAuthenticated, currentUser]);

  const verifyMembership = async () => {
    try {
      setLoading(true);
      setError(null);
      setStatusMessage("Verifying payment with Paystack...");

      const response = await fetch(`${API_BASE_URL}/membership/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reference }),
      });

      const verifyData = await response.json();

      if (!response.ok) {
        throw new Error(
          verifyData.message || verifyData.error || "Failed to verify payment",
        );
      }

      console.log("[PaymentSuccess] Verify response:", verifyData);

      if (!verifyData.success) {
        navigate(`/membership/cancel?reference=${reference}`);
        return;
      }

      setStatusMessage("Finalizing your membership activation...");

      // Store membership data
      if (verifyData.data?.membership) {
        setMembershipData(verifyData.data.membership);
      } else if (verifyData.data?.pending) {
        // Still pending, but payment was successful
        setMembershipData({
          tier: verifyData.data.tier || "Member",
          status: "pending",
          pending: true,
        });
      } else {
        setMembershipData({
          tier: "Member",
          status: "active",
        });
      }

      setLoading(false);
    } catch (err) {
      console.error("[PaymentSuccess] Critical Error:", err);
      setError(
        err.message ||
          "An unexpected error occurred during membership activation.",
      );
      setLoading(false);
    }
  };

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center p-8 bg-slate-900/80 rounded-xl shadow-sm max-w-md w-full backdrop-blur-xl border border-slate-800">
          <Loader2 className="w-12 h-12 text-emerald-500 animate-spin mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">
            {statusMessage}
          </h2>
          <p className="text-sm text-slate-400">
            Please do not close this window or refresh.
          </p>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <div className="bg-slate-900/80 rounded-xl shadow-lg p-8 max-w-md w-full text-center border-t-4 border-red-500 backdrop-blur-xl">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-8 h-8 text-red-400" />
          </div>
          <h2 className="text-xl font-bold text-white mb-2">
            Membership Activation Failed
          </h2>
          <p className="text-slate-400 mb-6 text-sm">{error}</p>

          <div className="flex flex-col gap-3">
            <Button
              onClick={() => window.location.reload()}
              className="w-full gap-2 bg-emerald-600 hover:bg-emerald-500"
            >
              <RefreshCw className="w-4 h-4" />
              Retry Verification
            </Button>

            <div className="flex gap-3">
              <Link to="/contact-us" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full border-slate-700 text-slate-300 hover:bg-slate-800"
                >
                  Contact Support
                </Button>
              </Link>
              <Link to="/membership" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full border-slate-700 text-slate-300 hover:bg-slate-800"
                >
                  Back to Membership
                </Button>
              </Link>
            </div>
          </div>

          {reference && (
            <div className="mt-6 pt-4 border-t border-slate-800">
              <p className="text-xs text-slate-500 font-mono">
                Ref: {reference.slice(-8)}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Success State
  return (
    <div className="min-h-screen bg-slate-950">
      <Helmet>
        <title>Membership Activated - Velocity Global Leasing</title>
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/80 rounded-2xl shadow-xl overflow-hidden backdrop-blur-xl border border-slate-800"
        >
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 p-8 text-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Welcome to the Community!
            </h1>
            <p className="text-emerald-100 text-lg">
              Your {membershipData?.tier || "Standard"} membership is now
              active.
            </p>
            {membershipData?.pending && (
              <p className="text-emerald-100 text-sm mt-2">
                Your membership is being activated. You'll receive a
                confirmation email shortly.
              </p>
            )}
          </div>

          <div className="p-8 sm:p-12">
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4">
                What's Next?
              </h3>
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-start gap-4 p-4 rounded-xl border border-slate-800 bg-slate-800/50 hover:border-emerald-500/30 transition-colors"
                >
                  <div className="bg-emerald-500/20 p-2 rounded-lg">
                    <Calendar className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Upcoming Seminars</h4>
                    <p className="text-sm text-slate-400">
                      Check the schedule for our next virtual seminar sessions.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl border border-slate-800 bg-slate-800/50 hover:border-emerald-500/30 transition-colors"
                >
                  <div className="bg-emerald-500/20 p-2 rounded-lg">
                    <Crown className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Member Benefits</h4>
                    <p className="text-sm text-slate-400">
                      Access exclusive resources, community forums, and more.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 border-t border-slate-800">
              <Link to="/seminars" className="flex-1">
                <Button className="w-full h-12 text-lg gap-2 bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-900/20">
                  View Seminars
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>

              <Link to="/dashboard" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full h-12 text-lg gap-2 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  Go to Dashboard
                </Button>
              </Link>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-slate-500">
                A confirmation email has been sent to your inbox with all the
                details.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
