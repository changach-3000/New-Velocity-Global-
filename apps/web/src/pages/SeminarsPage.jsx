
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, Video, Lock, ArrowRight, PlayCircle, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { useAuth } from '@/contexts/AuthContext.jsx';
import apiServerClient from '@/lib/apiServerClient.js';

const SeminarsPage = () => {
  const { currentUser, isAuthenticated } = useAuth();
  const [isMember, setIsMember] = useState(false);
  const [loading, setLoading] = useState(true);
  const [membershipTier, setMembershipTier] = useState(null);

  useEffect(() => {
    const checkMembership = async () => {
      if (!isAuthenticated || !currentUser) {
        setLoading(false);
        return;
      }

      try {
        const response = await apiServerClient.fetch(`/membership/status?userId=${currentUser.id}`);
        if (response.ok) {
          const data = await response.json();
          if (data.status === 'active') {
            setIsMember(true);
            setMembershipTier(data.tier);
          }
        }
      } catch (error) {
        console.error('Error checking membership:', error);
      } finally {
        setLoading(false);
      }
    };

    checkMembership();
  }, [currentUser, isAuthenticated]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white pb-24">
      <Helmet>
        <title>Exclusive Seminars - Velocity Global Leasing</title>
        <meta name="description" content="Quarterly virtual seminars for equipment leasing professionals." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1702389159527-39270023a337?q=80&w=2500&auto=format&fit=crop" 
            alt="Virtual seminar presentation" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/95 to-slate-950"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {isMember && membershipTier && (
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold tracking-wide uppercase mb-6">
                <CheckCircle2 className="w-4 h-4" />
                {membershipTier} Member Access
              </div>
            )}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-balance">
              Quarterly Expert Seminars
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed text-balance mx-auto max-w-3xl mb-10">
              Recorded video sessions held virtually, 4 times per year. Deep dives into market trends, complex deal structuring, and regulatory updates.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-slate-300">
              <div className="flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-lg border border-slate-800 backdrop-blur-sm">
                <Video className="w-5 h-5 text-blue-400" />
                <span>Virtual Sessions</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-lg border border-slate-800 backdrop-blur-sm">
                <Calendar className="w-5 h-5 text-purple-400" />
                <span>4x Per Year</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-lg border border-slate-800 backdrop-blur-sm">
                <Users className="w-5 h-5 text-amber-400" />
                <span>Expert Led</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-5xl">
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : isMember ? (
          /* Member View */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-blue-900/20 to-slate-900 border border-blue-800/30 rounded-2xl p-8 md:p-12 text-center mb-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
              
              <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                <Calendar className="w-10 h-10 text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Next seminar will be announced soon</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto relative z-10">
                We are currently finalizing the schedule and speakers for our upcoming Q3 session. You will receive an email notification as soon as registration opens.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mb-6">Seminar Archive</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Placeholder for future videos */}
              {[1, 2].map((i) => (
                <Card key={i} className="bg-slate-900/50 border-slate-800 overflow-hidden group">
                  <div className="aspect-video bg-slate-800 relative flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-slate-600 group-hover:text-blue-500 transition-colors duration-300" />
                    <div className="absolute bottom-3 right-3 bg-black/70 px-2 py-1 rounded text-xs font-medium text-white flex items-center gap-1">
                      <Clock className="w-3 h-3" /> 45:00
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-xs text-blue-400 font-bold uppercase tracking-wider mb-2">Q{i} 2025</div>
                    <h4 className="text-lg font-bold text-white mb-2">Advanced Structuring Techniques</h4>
                    <p className="text-sm text-slate-400">
                      Coming soon to the archive. This session will cover complex lease structures and tax implications.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        ) : (
          /* Non-Member View (Gated) */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="bg-slate-900/80 border-slate-800 shadow-2xl backdrop-blur-xl overflow-hidden text-center p-8 md:p-16">
              <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-8 border border-slate-700">
                <Lock className="w-10 h-10 text-slate-400" />
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4">Members-Only Content</h2>
              <p className="text-xl text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
                Our quarterly seminars feature deep dives into advanced leasing strategies, market analysis, and exclusive Q&A sessions with industry leaders.
              </p>

              <div className="bg-slate-950/50 rounded-2xl p-6 mb-10 border border-slate-800/50 text-left max-w-lg mx-auto">
                <h3 className="font-semibold text-white mb-4 text-center">What you're missing:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>Live virtual attendance to 4 annual seminars</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>Access to the complete video recording archive</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>Downloadable presentation decks and resources</span>
                  </li>
                </ul>
              </div>

              <Link to="/membership">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-6 text-lg rounded-full shadow-lg shadow-blue-900/20">
                  Upgrade to Membership
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              
              {!isAuthenticated && (
                <p className="mt-6 text-sm text-slate-500">
                  Already a member? <Link to="/login" className="text-blue-400 hover:underline">Log in here</Link>
                </p>
              )}
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};

// Helper component for the check icon
const CheckCircle2 = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default SeminarsPage;
