import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  BookOpen, 
  TrendingUp, 
  Users, 
  Award, 
  CheckCircle2, 
  Crown, 
  Shield, 
  Star, 
  Wrench
} from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';
import LeaseVsBuyCalculator from '@/components/LeaseVsBuyCalculator.jsx';
import SkillsAssessmentGapTest from '@/components/SkillsAssessmentGapTest.jsx';
import RolesSection from '@/components/RolesSection.jsx';

const HomePage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      <Helmet>
        <title>Velocity Global Leasing</title>
        <meta name="description" content="Elevate your career with expert-led courses in equipment leasing and finance." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-slate-950 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900/80 to-slate-950 z-0" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay z-0 pointer-events-none" />
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="container px-4 mx-auto relative z-10 text-center max-w-5xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold tracking-wide uppercase mb-8">
              <Award className="w-4 h-4" />
              The Industry Standard in Leasing Training
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white tracking-tight text-balance leading-[1.1]">
              Master the Art of <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Equipment Leasing</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light text-balance mb-10">
              Accelerate your expertise with comprehensive courses designed for financiers, sales professionals, and business owners.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/courses">
                <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1">
                  Explore Courses <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/membership">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300">
                  View Memberships
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roles Section (New) */}
      <RolesSection />

      {/* Why Choose Us (Features) */}
      <section className="py-24 bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Velocity Global</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              We bridge the gap between theoretical finance and real-world application.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            <motion.div variants={fadeIn}>
              <Card className="bg-slate-900/50 border-slate-800 h-full hover:bg-slate-800/50 transition-colors">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                    <BookOpen className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Expert-Led Curriculum</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Learn from industry veterans who have structured billions in equipment finance deals across global markets.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="bg-slate-900/50 border-slate-800 h-full hover:bg-slate-800/50 transition-colors">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-indigo-900/30 rounded-xl flex items-center justify-center mb-6">
                    <TrendingUp className="w-7 h-7 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Practical Application</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Move beyond theory with real-world case studies, financial modeling templates, and actionable strategies.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="bg-slate-900/50 border-slate-800 h-full hover:bg-slate-800/50 transition-colors">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-emerald-900/30 rounded-xl flex items-center justify-center mb-6">
                    <Users className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Role-Specific Tracks</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Tailored learning paths for sales professionals, credit analysts, vendors, and business owners.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industry Tools Intro */}
      {/* <section className="py-20 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-2xl mb-6 border border-blue-500/20">
              <Wrench className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Assessments</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Leverage our proprietary diagnostic tools to make data-driven decisions and identify your learning opportunities.
            </p>
          </div>
        </div>
      </section> */}

      {/* Lease vs Buy Calculator */}
      {/* <section className="py-12 bg-slate-950">
        <div className="container mx-auto px-4">
          <LeaseVsBuyCalculator />
        </div>
      </section> */}

      {/* Skills Gap Test */}
      <section className="py-12 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-4">
          <SkillsAssessmentGapTest />
        </div>
      </section>

      {/* Membership Showcase Section */}
      <section className="py-24 bg-slate-950 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Join the Elite Network</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Unlock exclusive seminars, private community access, and premium resources with a Velocity Global Membership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* Standard */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/30 transition-colors"
            >
              <Shield className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Standard</h3>
              <p className="text-slate-400 mb-6">Essential access for growing professionals.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" /> 4 virtual seminars/year</li>
                <li className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" /> Community forum access</li>
              </ul>
            </motion.div>

            {/* Premium */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-800 border border-purple-500/50 rounded-2xl p-8 shadow-[0_0_30px_-10px_rgba(168,85,247,0.2)] transform md:-translate-y-4"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* <span className="bg-purple-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">Recommended</span> */}
              </div>
              <Star className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
              <p className="text-slate-400 mb-6">Advanced resources for serious practitioners.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" /> Seminar recordings archive</li>
                <li className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" /> Private Slack community</li>
                <li className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" /> Market benchmarking reports</li>
              </ul>
            </motion.div>

            {/* Elite */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 hover:border-amber-500/30 transition-colors"
            >
              <Crown className="w-10 h-10 text-amber-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Elite</h3>
              <p className="text-slate-400 mb-6">The ultimate package for industry leaders.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" /> 1-on-1 strategy sessions</li>
                <li className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" /> Priority support</li>
                <li className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" /> VIP networking events</li>
              </ul>
            </motion.div>
          </div>

          <div className="text-center">
            <Link to="/membership">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-200 px-8 py-6 text-lg rounded-full font-semibold">
                Explore Membership Options <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 bg-blue-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Accelerate Your Career?</h2>
          <p className="text-xl text-slate-300 mb-10">
            Join hundreds of professionals who have transformed their understanding of equipment finance.
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-7 text-lg rounded-full shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_-5px_rgba(59,130,246,0.6)] transition-all duration-300">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;