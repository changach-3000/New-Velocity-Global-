import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Skeleton } from '@/components/ui/skeleton.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { ArrowRight, CheckCircle2, BookOpen, TrendingUp, Users, Award, Building2, AlertCircle, Briefcase, Calculator, Landmark, Calendar } from 'lucide-react';

// Hardcoded role data with custom hero content
const rolesData = {
  financier: {
    name: 'Financier',
    icon: TrendingUp,
    courseCount: 14,
    heroHeadline: 'Maximize Yield in Equipment Finance',
    heroSubheading: 'Master advanced financial modeling, risk assessment, and managed services strategies to build a resilient, high-performing portfolio.',
    ctaText: 'Get Your Risk & Yield Analysis',
    description: 'Master the financial mechanics of equipment leasing. You will study advanced financial modeling, Net Present Value (NPV), Internal Rate of Return (IRR), and comprehensive risk assessment strategies tailored for the leasing industry.',
    topic: 'Topic 4: Financier / Advanced Strategies and Managed Services',
    keyOfferings: [
      { title: 'Introduction to Managed Services' },
      { title: 'Comprehensive Risk Analysis' },
      { title: 'Strategic Funding Options for Managed Services' },
      { title: 'Legal, Operational, and Asset Readiness' },
      { title: 'Go-to-Market Strategy' }
    ]
  },
  sales: {
    name: 'Sales Professional',
    icon: Users,
    courseCount: 18,
    heroHeadline: 'Close Bigger Deals, Faster',
    heroSubheading: 'Shift from selling equipment to selling comprehensive financial solutions. Overcome price objections and increase your win rate by leading with ROI.',
    ctaText: 'Get Your Sales Velocity Assessment',
    description: 'Learn how to effectively sell leasing solutions. This track focuses on understanding customer financial needs, overcoming objections, and using leasing as a strategic tool to close larger deals faster.',
    keyOfferings: [
      { title: 'Consultative Selling Techniques', description: 'Shift from selling equipment to selling comprehensive financial solutions.' },
      { title: 'Overcoming Financial Objections', description: 'Master the responses to common pushbacks regarding rates, terms, and total cost.' },
      { title: 'Structuring Winning Proposals', description: 'Create compelling lease proposals that highlight ROI and cash flow benefits.' },
      { title: 'Building Client Relationships', description: 'Foster long-term partnerships that lead to repeat business and upgrades.' }
    ]
  },
  business_owner: {
    name: 'Business Owner',
    icon: Briefcase,
    courseCount: 10,
    heroHeadline: 'Stop Draining Cash on Depreciating Assets',
    heroSubheading: 'Learn how strategic equipment leasing preserves capital, maximizes tax benefits, and fuels sustainable growth without over-leveraging your balance sheet.',
    ctaText: 'Get Your Profitability Audit',
    description: 'Understand how equipment leasing can preserve your capital, offer significant tax advantages, and fuel your business growth without over-leveraging your balance sheet.',
    keyOfferings: [
      { title: 'Lease vs. Buy Analysis', description: 'Make informed decisions on whether to purchase or lease your next major asset.' },
      { title: 'Cash Flow Management', description: 'Learn how leasing can improve liquidity and keep credit lines open for operations.' },
      { title: 'Understanding Lease Agreements', description: 'Navigate the fine print of lease contracts, end-of-term options, and hidden fees.' },
      { title: 'Strategic Growth Financing', description: 'Use equipment finance to scale operations rapidly while minimizing upfront costs.' }
    ]
  },
  vendor: {
    name: 'Vendor',
    icon: Award,
    courseCount: 12,
    heroHeadline: 'Turn Financing into Your Competitive Advantage',
    heroSubheading: 'Integrate seamless leasing options into your sales process to increase average order value, eliminate sticker shock, and accelerate closing times.',
    ctaText: 'Get Your Vendor Program Review',
    description: 'Leverage leasing as a powerful sales enablement tool. You will study how to integrate finance into your sales process to increase average order value and speed up the sales cycle.',
    topic: 'Vendor Leasing',
    keyOfferings: [
      { title: 'Foundations of Vendor Leasing' },
      { title: 'Profit Dynamics in Vendor Leasing' },
      { title: 'A Taxonomy of Vendor Leasing Programs' },
      { title: 'Strategic Program Selection' }
    ]
  },
  lessor: {
    name: 'Leasing Company',
    icon: Building2,
    courseCount: 22,
    heroHeadline: 'Scale Your Leasing Enterprise Profitably',
    heroSubheading: 'Optimize origination, underwriting, and asset management. Discover advanced funding structures to maximize your portfolio yield and operational efficiency.',
    ctaText: 'Get Your Portfolio Optimization Review',
    description: 'Deep dive into the operations, legalities, and strategic management of a leasing enterprise. This track covers everything from origination and underwriting to asset management and remarketing.',
    topic: 'The Leasing Company (Lessor)',
    keyOfferings: [
      { title: 'Measuring Financial Performance' },
      { title: 'Key Financial Ratios for Lessors' },
      { title: 'Funding the Leasing Company' },
      { title: 'Advanced Funding Sources and Structures' }
    ]
  },
  tax_accountant: {
    name: 'Tax Accountant',
    icon: Landmark,
    courseCount: 15,
    heroHeadline: 'Master the Complexities of Lease Accounting',
    heroSubheading: 'Navigate ASC 842 and IFRS 16 with absolute confidence. Structure tax-efficient leases and ensure flawless compliance for your clients or organization.',
    ctaText: 'Get Your Compliance Strategy Session',
    description: 'Navigate the complex tax implications and accounting standards of equipment leases. You will study ASC 842, IFRS 16, deferred taxes, and strategies for structuring tax-efficient leases.',
    topic: 'Tax and Accounting (Lessor & Lessee)',
    keyOfferings: [
      { title: 'Introduction to IFRS 16' },
      { title: 'Lessee Accounting under IFRS 16' },
      { title: 'Lessor Accounting under IFRS 16' },
      { title: 'Transition and Impact Analysis' }
    ]
  }
};

const RoleLandingPage = () => {
  const { roleId } = useParams();
  const navigate = useNavigate();
  const [roleData, setRoleData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate a brief network request to maintain the loading state experience
    setLoading(true);
    setError(null);

    const timer = setTimeout(() => {
      const data = rolesData[roleId];
      if (data) {
        setRoleData(data);
      } else {
        setError("The role you're looking for doesn't exist or has been moved.");
      }
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [roleId]);

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 pt-24 pb-16">
        <div className="container px-6 mx-auto max-w-6xl">
          <div className="space-y-8 flex flex-col items-center justify-center min-h-[60vh]">
            <Skeleton className="h-20 w-3/4 bg-slate-800/50 rounded-2xl" />
            <Skeleton className="h-24 w-full max-w-3xl bg-slate-800/50 rounded-2xl" />
            <Skeleton className="h-14 w-64 bg-slate-800/50 rounded-full mt-8" />
          </div>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-slate-950 pt-24 pb-16 flex items-center">
        <div className="container px-6 mx-auto max-w-2xl">
          <Card className="bg-slate-900/80 border-red-900/50 shadow-2xl shadow-red-900/10 backdrop-blur-sm">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="w-8 h-8 text-red-400" />
              </div>
              <CardTitle className="text-3xl text-white">Role Not Found</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-400 mb-8 text-lg">{error}</p>
              <Button 
                onClick={() => navigate('/courses')}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8"
              >
                Browse All Courses
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (!roleData) return null;

  const RoleIcon = roleData.icon || BookOpen;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500/30 font-sans">
      <Helmet>
        <title>{`${roleData.name} - Equipment Leasing Courses`}</title>
        <meta name="description" content={roleData.heroSubheading} />
      </Helmet>

      {/* Custom Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
        {/* Deep Blue & Slate Background with Overlay */}
        <div className="absolute inset-0 bg-slate-950 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1e3a8a]/40 via-slate-900/80 to-slate-950 z-0" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay z-0 pointer-events-none" />
        
        {/* Subtle glowing orbs for depth */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none z-0" />

        <div className="container px-6 mx-auto max-w-5xl relative z-10 flex flex-col items-center text-center mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full flex flex-col items-center"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-slate-800/50 rounded-2xl mb-8 border border-slate-700/50 shadow-lg backdrop-blur-md"
            >
              <RoleIcon className="w-10 h-10 text-blue-400" />
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white tracking-tight text-balance leading-[1.1]">
              {roleData.heroHeadline}
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light text-balance mb-12">
              {roleData.heroSubheading}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col items-center w-full"
            >
              <a 
                href="https://calendly.com/velocitygloballeasing-info/book-consultation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button 
                  size="lg" 
                  className="bg-emerald-600 hover:bg-emerald-500 text-white text-lg px-10 py-7 rounded-full shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.5)] transition-all duration-300 transform hover:-translate-y-1 font-semibold flex items-center gap-3"
                >
                  <Calendar className="w-5 h-5" />
                  {roleData.ctaText}
                </Button>
              </a>
              <p className="text-sm text-slate-400 mt-5 italic max-w-md text-center">
                *Free 15-minute consultation. Extended 60-minute strategy sessions available for $200.*
              </p>
            </motion.div>
          </motion.div>
        </div>
        
       
      </section>

      {/* Key Offerings Section */}
      <section className="py-24 md:py-32 relative z-20 bg-slate-950 border-t border-slate-900">
        <div className="container px-6 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                What you'll learn
              </h2>
              {roleData.topic && (
                <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-900/30 border border-blue-800/50 text-blue-300 text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
                  {roleData.topic}
                </div>
              )}
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Core competencies and skills specifically curated for the {roleData.name.toLowerCase()} track.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {roleData.keyOfferings.map((offering, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-slate-900/40 border-slate-800/60 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-300 h-full rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 group">
                    <CardContent className="p-8 h-full flex flex-col justify-center">
                      <div className={`flex gap-5 ${!offering.description ? 'items-center' : 'items-start'}`}>
                        <div className="shrink-0 w-12 h-12 bg-blue-900/20 rounded-xl flex items-center justify-center border border-blue-800/30 group-hover:scale-110 group-hover:bg-blue-800/30 transition-all duration-300">
                          <CheckCircle2 className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className={`text-xl font-semibold text-slate-100 group-hover:text-blue-300 transition-colors ${offering.description ? 'mb-3' : 'mb-0'}`}>
                            {offering.title}
                          </h3>
                          {offering.description && (
                            <p className="text-slate-400 leading-relaxed text-base">
                              {offering.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Secondary CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-900 to-slate-900" />
        <div className="container px-6 mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-slate-800/50 border-slate-700/50 shadow-2xl rounded-3xl overflow-hidden backdrop-blur-sm">
              <CardHeader className="pb-6 pt-12 px-8 md:px-12 text-center relative z-10">
                <CardTitle className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                  Ready to advance your career?
                </CardTitle>
                <CardDescription className="text-lg text-slate-300 max-w-2xl mx-auto">
                  Explore our curated courses designed specifically for {roleData.name.toLowerCase()}s and start learning today.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pb-12 px-8 md:px-12 text-center relative z-10">
                <Link to={`/courses?role=${roleId}`}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent hover:bg-slate-700 text-white border-slate-600 px-8 py-6 text-lg font-medium rounded-full transition-all duration-300"
                  >
                    View recommended courses
                    <ArrowRight className="ml-3 w-5 h-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RoleLandingPage;