
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Star, Crown, ArrowRight } from 'lucide-react';
import MembershipPaymentHandler from '@/components/MembershipPaymentHandler.jsx';

const MembershipPage = () => {
  const tiers = [
    {
      id: 'Standard',
      name: 'Standard',
      price: 500,
      monthlyEquivalent: 41.67,
      icon: Shield,
      color: 'blue',
      description: 'Essential access for growing professionals.',
      features: [
        'Access to 4 virtual seminars per year',
        'Standard community forum access',
        'Monthly industry newsletter',
      ]
    },
    {
      id: 'Premium',
      name: 'Premium',
      price: 999,
      monthlyEquivalent: 83.25,
      icon: Star,
      color: 'purple',
      isPopular: true,
      description: 'Advanced resources for serious practitioners.',
      features: [
        'Everything in Standard',
        'Access to seminar recordings archive',
        'Quarterly market benchmarking reports',
      ]
    },
    {
      id: 'Elite',
      name: 'Elite',
      price: 1499,
      monthlyEquivalent: 124.92,
      icon: Crown,
      color: 'amber',
      description: 'The ultimate package for industry leaders.',
      features: [
        'Everything in Premium',
        '1-on-1 annual strategy session (60 min)',
        'Access to Digital Tools',
        'Exclusive VIP networking events',
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white pb-24">
      <Helmet>
        <title>Membership Plans - Velocity Global Leasing</title>
        <meta name="description" content="Join our exclusive membership program for equipment leasing professionals." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1623295080944-9ba74d587748?q=80&w=2500&auto=format&fit=crop" 
            alt="Professional networking" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/95 to-slate-950"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold tracking-wide uppercase mb-6">
              <Crown className="w-4 h-4" />
              Velocity Global Network
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-balance">
              Elevate Your Expertise with Our Exclusive Membership
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed text-balance mx-auto max-w-2xl">
              Join a community of elite equipment finance professionals. Gain access to proprietary seminars, expert networks, and tools that accelerate your career.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="container mx-auto px-4 relative z-20 -mt-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center"
        >
          {tiers.map((tier) => {
            const Icon = tier.icon;
            const isPremium = tier.id === 'Premium';
            const isElite = tier.id === 'Elite';
            
            let cardClass = "membership-card ";
            let btnClass = "w-full h-12 text-lg font-semibold transition-all duration-300 ";
            let iconBgClass = "";
            let iconColorClass = "";

            if (isPremium) {
              cardClass += "membership-card-premium scale-100 md:scale-105 z-10 bg-slate-900";
              btnClass += "bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_20px_-5px_rgba(168,85,247,0.5)]";
              iconBgClass = "bg-purple-500/20";
              iconColorClass = "text-purple-400";
            } else if (isElite) {
              cardClass += "membership-card-elite";
              btnClass += "bg-amber-600 hover:bg-amber-500 text-white shadow-[0_0_20px_-5px_rgba(245,158,11,0.5)]";
              iconBgClass = "bg-amber-500/20";
              iconColorClass = "text-amber-400";
            } else {
              btnClass += "bg-blue-600 hover:bg-blue-500 text-white";
              iconBgClass = "bg-blue-500/20";
              iconColorClass = "text-blue-400";
            }

            return (
              <motion.div key={tier.id} variants={itemVariants} className={cardClass}>
                {tier.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${iconBgClass}`}>
                    <Icon className={`w-8 h-8 ${iconColorClass}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-slate-300">$</span>
                    <span className="text-5xl font-extrabold text-white tracking-tight">{tier.price}</span>
                    <span className="text-slate-400 ml-2 font-medium">/ year</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-2 font-medium">
                    Equivalent to ${tier.monthlyEquivalent}/mo
                  </p>
                </div>

                <p className="text-slate-300 mb-8 min-h-[48px]">
                  {tier.description}
                </p>

                <div className="space-y-4 mb-8 flex-grow">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${iconColorClass}`} />
                      <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-slate-800/50">
                  <MembershipPaymentHandler 
                    tier={tier.id} 
                    price={tier.price} 
                    className={btnClass}
                  />
                  <p className="text-center text-xs text-slate-500 mt-4">
                    7-day money-back guarantee. Cancel anytime.
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="container mx-auto px-4 mt-32 max-w-4xl">
        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Have questions about membership?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Our team is ready to help you choose the right tier for your career goals or discuss enterprise options for your entire team.
          </p>
          <a href="/contact-us" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors border border-slate-700">
            Contact Support <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default MembershipPage;
