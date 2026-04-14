import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Crown, Star, AlertCircle, Clock, CheckCircle2, XCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { useToast } from '@/hooks/use-toast.js';

const API_BASE_URL = 'https://velocity-global-express.onrender.com/api';

const MembershipDashboardWidget = () => {
  const { currentUser } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [cancelling, setCancelling] = useState(false);
  const [membershipData, setMembershipData] = useState(null);

  useEffect(() => {
    const fetchMembershipStatus = async () => {
  if (!currentUser?.id) return;

  try {    
    const response = await fetch(`${API_BASE_URL}/membership/status?userId=${currentUser.id}`);
    const data = await response.json();
    
    setMembershipData(data);
  } catch (error) {
    console.error('Error fetching membership status:', error);
  } finally {
    setLoading(false);
  }
};
    fetchMembershipStatus();
  }, [currentUser]);

  const handleCancelMembership = async () => {
    if (!window.confirm('Are you sure you want to cancel your membership? If you are within the 7-day window, you will be refunded.')) {
      return;
    }

    setCancelling(true);
    try {
      const response = await fetch(`${API_BASE_URL}/membership/cancel`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: currentUser.id,
          userEmail: currentUser.email,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.message || 'Failed to cancel membership');
      }

      toast({
        title: 'Membership Cancelled',
        description: data.message || 'Your membership has been successfully cancelled.',
      });

      // Refresh status
      const statusRes = await fetch(`${API_BASE_URL}/membership/status?userId=${currentUser.id}`);
      if (statusRes.ok) {
        setMembershipData(await statusRes.json());
      }
    } catch (error) {
      toast({
        title: 'Cancellation Failed',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setCancelling(false);
    }
  };

  if (loading) {
    return (
      <Card className="bg-slate-900/50 border-slate-800 mb-8">
        <CardContent className="p-8 flex justify-center items-center">
          <Loader2 className="w-6 h-6 animate-spin text-blue-500" />
        </CardContent>
      </Card>
    );
  }

  // ── The fix: check hasMembership AND status === 'active' ──────────────────
  // The API returns { hasMembership: true/false, status: 'active'/'cancelled' }
  // Both must be true for the user to be considered an active member.
  const isActive = membershipData?.hasMembership === true && membershipData?.status === 'active';
  const tier = membershipData?.tier || 'None';

  const getTierIcon = () => {
    switch (tier) {
      case 'Elite': return <Crown className="w-6 h-6 text-amber-400" />;
      case 'Premium': return <Star className="w-6 h-6 text-purple-400" />;
      case 'Standard': return <Shield className="w-6 h-6 text-blue-400" />;
      default: return <Shield className="w-6 h-6 text-slate-400" />;
    }
  };

  const getTierColor = () => {
  switch (tier) {
    case 'Elite': return 'from-slate-900 to-slate-900 border-amber-500/30';
    case 'Premium': return 'from-slate-900 to-slate-900 border-purple-500/50';
    case 'Standard': return 'from-slate-900 to-slate-900 border-slate-800';
    default: return 'from-slate-900 to-slate-900 border-slate-700';
  }
};

  if (!isActive) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Card className="bg-gradient-to-r from-slate-900 to-blue-950/40 border-blue-900/50 overflow-hidden relative">
          <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
          <CardContent className="p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/20 rounded-xl shrink-0">
                <Crown className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Elevate Your Career with Membership</h3>
                <p className="text-slate-300 max-w-2xl">
                  Join our exclusive community to access quarterly virtual seminars, industry reports, and expert networking.
                  Memberships start at just $500/year with a 7-day money-back guarantee.
                </p>
              </div>
            </div>
            <Link to="/membership" className="shrink-0 w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20">
                Upgrade to Membership
              </Button>
            </Link>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <Card className={`bg-gradient-to-br ${getTierColor()} border overflow-hidden relative`}>
        <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

        <CardContent className="p-6 sm:p-8 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between gap-8">

            {/* Left Column: Status & Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-slate-950/50 rounded-lg backdrop-blur-sm">
                  {getTierIcon()}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold text-white">{tier} Member</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/20">
                      Active
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 mt-1">
                    Member since {new Date(membershipData.purchase_date).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-950/40 rounded-xl p-4 border border-white/5">
                  <div className="flex items-center gap-2 text-slate-300 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="font-medium">Quarterly Seminars</span>
                  </div>
                  <p className="text-sm text-slate-400">Access to all virtual sessions</p>
                </div>
                <div className="bg-slate-950/40 rounded-xl p-4 border border-white/5">
                  <div className="flex items-center gap-2 text-slate-300 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="font-medium">Community Access</span>
                  </div>
                  <p className="text-sm text-slate-400">Private networking group</p>
                </div>
              </div>
            </div>

            {/* Right Column: Actions & Refund Status */}
            <div className="lg:w-72 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
              {membershipData.refund_eligible ? (
                <div className="bg-slate-950/50 rounded-xl p-4 border border-blue-500/20 mb-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-white mb-1">Refund Guarantee Active</p>
                      <p className="text-xs text-slate-400">
                        {membershipData.days_remaining} days remaining to cancel for a full refund.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-950/50 rounded-xl p-4 border border-white/5 mb-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-white mb-1">Refund Period Ended</p>
                      <p className="text-xs text-slate-400">
                        Your 7-day refund window has closed.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <Link to="/seminars" className="block">
                  <Button className="w-full bg-white text-slate-900 hover:bg-slate-200 font-semibold">
                    Access Member Tools
                  </Button>
                </Link>

                {membershipData.refund_eligible && (
                  <Button
                    variant="outline"
                    className="w-full border-red-500/30 text-red-400 hover:bg-red-500/10 hover:text-red-300"
                    onClick={handleCancelMembership}
                    disabled={cancelling}
                  >
                    {cancelling ? (
                      <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Cancelling...</>
                    ) : (
                      <><XCircle className="w-4 h-4 mr-2" /> Cancel & Refund</>
                    )}
                  </Button>
                )}
              </div>
            </div>

          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MembershipDashboardWidget;
