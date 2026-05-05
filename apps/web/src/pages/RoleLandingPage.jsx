// import React, { useState, useEffect } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
// import { motion } from 'framer-motion';
// import { Button } from '@/components/ui/button.jsx';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
// import { Skeleton } from '@/components/ui/skeleton.jsx';
// import { Badge } from '@/components/ui/badge.jsx';
// import { ArrowRight, CheckCircle2, BookOpen, TrendingUp, Users, Award, Building2, AlertCircle, Briefcase, Calculator, Landmark, Calendar, Globe } from 'lucide-react';

// // Hardcoded role data with custom hero content
// const rolesData = {
//   financier: {
//     name: 'Funder',
//     icon: TrendingUp,
//     courseCount: 14,
//     heroHeadline: 'Build a World-Class Lending Portfolio. Reduce Risk. Grow Revenue.',
//     heroSubheading: 'Most equipment leasing lenders struggle with rising default rates, competitive pressure, and underwriting complexity. Velocity teaches your credit team how to identify quality borrowers, reduce default rates by 20–30%, accelerate underwriting by 50%, and grow origination volume by 40%—while improving risk-adjusted returns.',
//     ctaText: 'Get Your Portfolio Quality Assessment',
//     description: 'Master the financial mechanics of equipment leasing. You will study advanced financial modeling, Net Present Value (NPV), Internal Rate of Return (IRR), and comprehensive risk assessment strategies tailored for the leasing industry.',
//     topic: 'Topic 4: Financier / Advanced Strategies and Managed Services',
//     keyOfferings: [
//       { title: 'Introduction to Managed Services' },
//       { title: 'Comprehensive Risk Analysis' },
//       { title: 'Strategic Funding Options for Managed Services' },
//       { title: 'Legal, Operational, and Asset Readiness' },
//       { title: 'Go-to-Market Strategy' }
//     ]
//   },
//   sales: {
//     name: 'Sales Professional',
//     icon: Users,
//     courseCount: 18,
//     heroHeadline: 'Accelerate Your Pipeline. Dominate Your Market.',
//     heroSubheading: 'Equipment leasing sales cycles are long. Velocity teaches your team how to close deals 40% faster and increase win rate by 20%—without sacrificing margins.',
//     ctaText: 'Get Your Sales Velocity Assessment',
//     description: 'Learn how to effectively sell leasing solutions. This track focuses on understanding customer financial needs, overcoming objections, and using leasing as a strategic tool to close larger deals faster.',
//     keyOfferings: [
//       { title: 'Consultative Selling Techniques', description: 'Shift from selling equipment to selling comprehensive financial solutions.' },
//       { title: 'Overcoming Financial Objections', description: 'Master the responses to common pushbacks regarding rates, terms, and total cost.' },
//       { title: 'Structuring Winning Proposals', description: 'Create compelling lease proposals that highlight ROI and cash flow benefits.' },
//       { title: 'Building Client Relationships', description: 'Foster long-term partnerships that lead to repeat business and upgrades.' }
//     ]
//   },
//   business_owner: {
//     name: 'Business Owner',
//     icon: Briefcase,
//     courseCount: 10,
//     heroHeadline: 'Stop Margin Compression. Start Strategic Profitability.',
//     heroSubheading: 'Most equipment leasing CFOs see margins shrink 1–2% annually. Velocity shows you how to reverse that trend and improve EBITDA by 2–3% in 90 days.',
//     ctaText: 'Get Your Profitability Audit',
//     description: 'Understand how equipment leasing can preserve your capital, offer significant tax advantages, and fuel your business growth without over-leveraging your balance sheet.',
//     keyOfferings: [
//       { title: 'Lease vs. Buy Analysis', description: 'Make informed decisions on whether to purchase or lease your next major asset.' },
//       { title: 'Cash Flow Management', description: 'Learn how leasing can improve liquidity and keep credit lines open for operations.' },
//       { title: 'Understanding Lease Agreements', description: 'Navigate the fine print of lease contracts, end-of-term options, and hidden fees.' },
//       { title: 'Strategic Growth Financing', description: 'Use equipment finance to scale operations rapidly while minimizing upfront costs.' }
//     ]
//   },
//   vendor: {
//     name: 'Vendor',
//     icon: Award,
//     courseCount: 12,
//     heroHeadline: 'Turn One-Time Deals Into Lifetime Partnerships.',
//     heroSubheading: 'Most equipment vendors work deal-to-deal with razor-thin margins. Velocity teaches you how to build lasting relationships with leasing companies, secure repeat business, and improve margins by 15%.',
//     ctaText: 'Get Your Vendor Profitability Strategy',
//     description: 'Leverage leasing as a powerful sales enablement tool. You will study how to integrate finance into your sales process to increase average order value and speed up the sales cycle.',
//     topic: 'Vendor Leasing',
//     keyOfferings: [
//       { title: 'Foundations of Vendor Leasing' },
//       { title: 'Profit Dynamics in Vendor Leasing' },
//       { title: 'A Taxonomy of Vendor Leasing Programs' },
//       { title: 'Strategic Program Selection' }
//     ]
//   },
//   lessor: {
//     name: 'Leasing Company',
//     icon: Building2,
//     courseCount: 22,
//     heroHeadline: 'Build a World-Class Portfolio. Reduce Risk. Maximize ROI.',
//     heroSubheading: 'Most lessors struggle with portfolio quality and default rates. Velocity teaches your team how to identify high-quality deals, manage risk effectively, and build a portfolio that delivers consistent ROI.',
//     ctaText: 'Get Your Portfolio Quality Assessment',
//     description: 'Deep dive into the operations, legalities, and strategic management of a leasing enterprise. This track covers everything from origination and underwriting to asset management and remarketing.',
//     topic: 'The Leasing Company (Lessor)',
//     keyOfferings: [
//       { title: 'Measuring Financial Performance' },
//       { title: 'Key Financial Ratios for Lessors' },
//       { title: 'Funding the Leasing Company' },
//       { title: 'Advanced Funding Sources and Structures' }
//     ]
//   },
//   tax_accountant: {
//     name: 'Tax Accountant',
//     icon: Landmark,
//     courseCount: 15,
//     heroHeadline: 'Become the Tax Expert Your Leasing Clients Trust.',
//     heroSubheading: 'Most CPAs don\'t specialize in equipment leasing tax strategy. Velocity teaches you how to identify $100K+ in tax savings per client and become the go-to tax advisor for leasing companies.',
//     ctaText: 'Get Your Tax Strategy Audit',
//     description: 'Navigate the complex tax implications and accounting standards of equipment leases. You will study ASC 842, IFRS 16, deferred taxes, and strategies for structuring tax-efficient leases.',
//     topic: 'Tax and Accounting (Lessor & Lessee)',
//     keyOfferings: [
//       { title: 'Introduction to IFRS 16' },
//       { title: 'Lessee Accounting under IFRS 16' },
//       { title: 'Lessor Accounting under IFRS 16' },
//       { title: 'Transition and Impact Analysis' }
//     ]
//   },
//   esg: {
//   name: 'ESG and Sustainable Finance Programme',
//   icon: Globe,
//   courseCount: 20,
//   heroHeadline: 'Finance the Net Zero Transition. Mitigate Climate Risk. Generate Sustainable Returns.',
//   // heroSubheading: 'Most financiers lack the ESG tools to evaluate clean asset portfolios, carbon credits, and green leasing opportunities. Velocity teaches your credit and investment teams how to identify high-quality sustainable assets, reduce climate-related credit risk, structure green finance products, and build a future-proof lending portfolio aligned with global net zero commitments.',
//   ctaText: 'Get Your ESG Portfolio Assessment',
//   description: 'Master the intersection of ESG and equipment finance. You will learn how to integrate climate risk into credit assessment, structure green leases and PPAs, value carbon credits under IFRS, and build sustainable lending portfolios that deliver competitive risk-adjusted returns while meeting evolving regulatory and investor expectations.',
//   topic: ' ESG-Integrated Lending & Sustainable Asset Finance',
//   keyOfferings: [
//     // Beginner Level
//     { title: 'ESG and the Financial System' },
//     { title: 'Introduction to Carbon Markets' },
//     { title: 'Introduction to Green Finance & Sustainable Lending' },
//     { title: 'Introduction to Solar Energy & Clean Assets' },
    
//     // Intermediate Level
//     { title: 'ESG Due Diligence & Risk Assessment' },
//     { title: 'Solar Asset Leasing — Applied Finance' },
//     { title: 'Carbon Credits — Applied Finance & Accounting' },
//     { title: 'Greenwashing — Identification & Risk' },
    
//     // Mastery Level
//     { title: 'Sustainable Finance Product Design' },
//     { title: 'Advanced Solar Leasing — Deal Structuring & Project Finance' },
//     { title: 'Advanced Carbon Markets — Trading, Strategy & Portfolio Management' },
//     { title: 'ESG Strategy for Corporates & Financial Institutions' }
//   ]
// }
// };

// const RoleLandingPage = () => {
//   const { roleId } = useParams();
//   const navigate = useNavigate();
//   const [roleData, setRoleData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Simulate a brief network request to maintain the loading state experience
//     setLoading(true);
//     setError(null);

//     const timer = setTimeout(() => {
//       const data = rolesData[roleId];
//       if (data) {
//         setRoleData(data);
//       } else {
//         setError("The role you're looking for doesn't exist or has been moved.");
//       }
//       setLoading(false);
//     }, 600);

//     return () => clearTimeout(timer);
//   }, [roleId]);

//   // Loading State
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-slate-950 pt-24 pb-16">
//         <div className="container px-6 mx-auto max-w-6xl">
//           <div className="space-y-8 flex flex-col items-center justify-center min-h-[60vh]">
//             <Skeleton className="h-20 w-3/4 bg-slate-800/50 rounded-2xl" />
//             <Skeleton className="h-24 w-full max-w-3xl bg-slate-800/50 rounded-2xl" />
//             <Skeleton className="h-14 w-64 bg-slate-800/50 rounded-full mt-8" />
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Error State
//   if (error) {
//     return (
//       <div className="min-h-screen bg-slate-950 pt-24 pb-16 flex items-center">
//         <div className="container px-6 mx-auto max-w-2xl">
//           <Card className="bg-slate-900/80 border-red-900/50 shadow-2xl shadow-red-900/10 backdrop-blur-sm">
//             <CardHeader className="text-center pb-2">
//               <div className="mx-auto w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-4">
//                 <AlertCircle className="w-8 h-8 text-red-400" />
//               </div>
//               <CardTitle className="text-3xl text-white">Role Not Found</CardTitle>
//             </CardHeader>
//             <CardContent className="text-center">
//               <p className="text-slate-400 mb-8 text-lg">{error}</p>
//               <Button 
//                 onClick={() => navigate('/courses')}
//                 size="lg"
//                 className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8"
//               >
//                 Browse All Courses
//                 <ArrowRight className="ml-2 w-4 h-4" />
//               </Button>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     );
//   }

//   if (!roleData) return null;

//   const RoleIcon = roleData.icon || BookOpen;

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500/30 font-sans">
//       <Helmet>
//         <title>{`${roleData.name} - Equipment Leasing Courses`}</title>
//         <meta name="description" content={roleData.heroSubheading} />
//       </Helmet>

//       {/* Custom Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
//         {/* Deep Blue & Slate Background with Overlay */}
//         <div className="absolute inset-0 bg-slate-950 z-0" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1e3a8a]/40 via-slate-900/80 to-slate-950 z-0" />
//         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay z-0 pointer-events-none" />
        
//         {/* Subtle glowing orbs for depth */}
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none z-0" />
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none z-0" />

//         <div className="container px-6 mx-auto max-w-5xl relative z-10 flex flex-col items-center text-center mt-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="w-full flex flex-col items-center"
//           >
//             <motion.div 
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//               className="inline-flex items-center justify-center w-20 h-20 bg-slate-800/50 rounded-2xl mb-8 border border-slate-700/50 shadow-lg backdrop-blur-md"
//             >
//               <RoleIcon className="w-10 h-10 text-blue-400" />
//             </motion.div>
            
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white tracking-tight text-balance leading-[1.1]">
//               {roleData.heroHeadline}
//             </h1>
            
//             <p className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light text-balance mb-12">
//               {roleData.heroSubheading}
//             </p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4, duration: 0.5 }}
//               className="flex flex-col items-center w-full"
//             >
//               <a 
//                 href="https://calendly.com/velocitygloballeasing-info/book-consultation" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="inline-block"
//               >
//                 <Button 
//                   size="lg" 
//                   className="bg-emerald-600 hover:bg-emerald-500 text-white text-lg px-10 py-7 rounded-full shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.5)] transition-all duration-300 transform hover:-translate-y-1 font-semibold flex items-center gap-3"
//                 >
//                   <Calendar className="w-5 h-5" />
//                   {roleData.ctaText}
//                 </Button>
//               </a>
//               <p className="text-sm text-slate-400 mt-5 italic max-w-md text-center">
//                *Free 15-minute call with our lending expert. Extended strategy sessions available for $200.*
//               </p>
//             </motion.div>
//           </motion.div>
//         </div>
        
       
//       </section>

//       {/* Key Offerings Section */}
//       <section className="py-24 md:py-32 relative z-20 bg-slate-950 border-t border-slate-900">
//         <div className="container px-6 mx-auto max-w-6xl">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="text-center mb-16">
//               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
//                 What you'll learn
//               </h2>
//               {roleData.topic && (
//                 <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-900/30 border border-blue-800/50 text-blue-300 text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
//                   {roleData.topic}
//                 </div>
//               )}
//               <p className="text-slate-400 text-lg max-w-2xl mx-auto">
//                 Core competencies and skills specifically curated for the {roleData.name.toLowerCase()} track.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
//               {roleData.keyOfferings.map((offering, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <Card className="bg-slate-900/40 border-slate-800/60 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-300 h-full rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 group">
//                     <CardContent className="p-8 h-full flex flex-col justify-center">
//                       <div className={`flex gap-5 ${!offering.description ? 'items-center' : 'items-start'}`}>
//                         <div className="shrink-0 w-12 h-12 bg-blue-900/20 rounded-xl flex items-center justify-center border border-blue-800/30 group-hover:scale-110 group-hover:bg-blue-800/30 transition-all duration-300">
//                           <CheckCircle2 className="w-6 h-6 text-blue-400" />
//                         </div>
//                         <div>
//                           <h3 className={`text-xl font-semibold text-slate-100 group-hover:text-blue-300 transition-colors ${offering.description ? 'mb-3' : 'mb-0'}`}>
//                             {offering.title}
//                           </h3>
//                           {offering.description && (
//                             <p className="text-slate-400 leading-relaxed text-base">
//                               {offering.description}
//                             </p>
//                           )}
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Secondary CTA Section */}
//       <section className="py-24 md:py-32 relative overflow-hidden bg-slate-900">
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-900 to-slate-900" />
//         <div className="container px-6 mx-auto max-w-4xl relative z-10">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <Card className="bg-slate-800/50 border-slate-700/50 shadow-2xl rounded-3xl overflow-hidden backdrop-blur-sm">
//               <CardHeader className="pb-6 pt-12 px-8 md:px-12 text-center relative z-10">
//                 <CardTitle className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
//                   Ready to advance your career?
//                 </CardTitle>
//                 <CardDescription className="text-lg text-slate-300 max-w-2xl mx-auto">
//                   Explore our curated courses designed specifically for {roleData.name.toLowerCase()}s and start learning today.
//                 </CardDescription>
//               </CardHeader>
              
//               <CardContent className="pb-12 px-8 md:px-12 text-center relative z-10">
//                 <Link to={`/courses?role=${roleId}`}>
//                   <Button
//                     size="lg"
//                     variant="outline"
//                     className="bg-transparent hover:bg-slate-700 text-white border-slate-600 px-8 py-6 text-lg font-medium rounded-full transition-all duration-300"
//                   >
//                     View recommended courses
//                     <ArrowRight className="ml-3 w-5 h-5" />
//                   </Button>
//                 </Link>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default RoleLandingPage;


import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Skeleton } from '@/components/ui/skeleton.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Progress } from '@/components/ui/progress.jsx';
import { 
  ArrowRight, CheckCircle2, BookOpen, TrendingUp, Users, Award, Building2, 
  AlertCircle, Briefcase, Calculator, Landmark, Calendar, Globe, Target, 
  ChevronRight, ChevronLeft, RotateCcw, XCircle 
} from 'lucide-react';

// Hardcoded role data with custom hero content
const rolesData = {
  financier: {
    name: 'Funder',
    icon: TrendingUp,
    courseCount: 14,
    heroHeadline: 'Build a World-Class Lending Portfolio. Reduce Risk. Grow Revenue.',
    heroSubheading: 'Most equipment leasing lenders struggle with rising default rates, competitive pressure, and underwriting complexity. Velocity teaches your credit team how to identify quality borrowers, reduce default rates by 20–30%, accelerate underwriting by 50%, and grow origination volume by 40%—while improving risk-adjusted returns.',
    ctaText: 'Get Your Portfolio Quality Assessment',
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
    heroHeadline: 'Accelerate Your Pipeline. Dominate Your Market.',
    heroSubheading: 'Equipment leasing sales cycles are long. Velocity teaches your team how to close deals 40% faster and increase win rate by 20%—without sacrificing margins.',
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
    heroHeadline: 'Stop Margin Compression. Start Strategic Profitability.',
    heroSubheading: 'Most equipment leasing CFOs see margins shrink 1–2% annually. Velocity shows you how to reverse that trend and improve EBITDA by 2–3% in 90 days.',
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
    heroHeadline: 'Turn One-Time Deals Into Lifetime Partnerships.',
    heroSubheading: 'Most equipment vendors work deal-to-deal with razor-thin margins. Velocity teaches you how to build lasting relationships with leasing companies, secure repeat business, and improve margins by 15%.',
    ctaText: 'Get Your Vendor Profitability Strategy',
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
    heroHeadline: 'Build a World-Class Portfolio. Reduce Risk. Maximize ROI.',
    heroSubheading: 'Most lessors struggle with portfolio quality and default rates. Velocity teaches your team how to identify high-quality deals, manage risk effectively, and build a portfolio that delivers consistent ROI.',
    ctaText: 'Get Your Portfolio Quality Assessment',
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
    heroHeadline: 'Become the Tax Expert Your Leasing Clients Trust.',
    heroSubheading: 'Most CPAs don\'t specialize in equipment leasing tax strategy. Velocity teaches you how to identify $100K+ in tax savings per client and become the go-to tax advisor for leasing companies.',
    ctaText: 'Get Your Tax Strategy Audit',
    description: 'Navigate the complex tax implications and accounting standards of equipment leases. You will study ASC 842, IFRS 16, deferred taxes, and strategies for structuring tax-efficient leases.',
    topic: 'Tax and Accounting (Lessor & Lessee)',
    keyOfferings: [
      { title: 'Introduction to IFRS 16' },
      { title: 'Lessee Accounting under IFRS 16' },
      { title: 'Lessor Accounting under IFRS 16' },
      { title: 'Transition and Impact Analysis' }
    ]
  },
  esg: {
    name: 'ESG and Sustainable Finance Programme',
    icon: Globe,
    courseCount: 20,
    heroHeadline: 'Finance the Net Zero Transition. Mitigate Climate Risk. Generate Sustainable Returns.',
    ctaText: 'Get Your ESG Portfolio Assessment',
    description: 'Master the intersection of ESG and equipment finance. You will learn how to integrate climate risk into credit assessment, structure green leases and PPAs, value carbon credits under IFRS, and build sustainable lending portfolios that deliver competitive risk-adjusted returns while meeting evolving regulatory and investor expectations.',
    topic: 'ESG-Integrated Lending & Sustainable Asset Finance',
    keyOfferings: [
      { title: 'ESG and the Financial System' },
      { title: 'Introduction to Carbon Markets' },
      { title: 'Introduction to Green Finance & Sustainable Lending' },
      { title: 'Introduction to Solar Energy & Clean Assets' },
      { title: 'ESG Due Diligence & Risk Assessment' },
      { title: 'Carbon Credits — Applied Finance & Accounting' },
      { title: 'Greenwashing — Identification & Risk' },
      { title: 'Sustainable Finance Product Design' },
      { title: 'Advanced Solar Leasing — Deal Structuring & Project Finance' },
      { title: 'Advanced Carbon Markets — Trading, Strategy & Portfolio Management' },
      { title: 'ESG Strategy for Corporates & Financial Institutions' }
    ]
  }
};

// ─── Enhanced Course Database ─────────────────────────────────────────────────

const COURSES = {
  'Sales Professional': {
    beginner: [
      "Introduction to Equipment Leasing",
      "Understanding Lease vs. Buy Fundamentals",
      "The Basics of Consultative Selling"
    ],
    intermediate: [
      "Structuring Winning Lease Proposals",
      "Overcoming Financial Objections",
      "Master Lease Agreements and Documentation"
    ],
    advanced: [
      "Advanced Deal Structuring and Yield Management",
      "Sale-Leaseback and Complex Transaction Strategies",
      "Building and Managing a Lease Sales Pipeline"
    ]
  },
  'Tax Accountant': {
    beginner: [
      "Introduction to IFRS 16 and ASC 842",
      "Lease Classification Fundamentals",
      "Tax Ownership in Equipment Leasing"
    ],
    intermediate: [
      "Lessee Accounting under IFRS 16",
      "Lessor Accounting under IFRS 16",
      "Section 179 and Bonus Depreciation Strategies"
    ],
    advanced: [
      "Deferred Tax Accounting in Leasing",
      "Transition and Impact Analysis (IFRS 16)",
      "Structuring Tax-Efficient Leases for Clients",
      "Tax Treatment of Leases in Kenya",
      "Capital Allowances and Lease Deductibility",
      "IFRS 16 vs IAS 17 — Transition and Ongoing Impact",
      "VAT on Leasing — Rentals, Import Duties and Tax Efficiency",
      "Advising Clients on Lease vs Buy"
    ]
  },
  'Leasing Company': {
    beginner: [
      "Introduction to Leasing Company Operations",
      "Key Financial Ratios for Lessors",
      "Measuring Financial Performance"
    ],
    intermediate: [
      "Funding the Leasing Company",
      "Vendor Programs and Recourse Structures",
      "Portfolio Risk Management Basics"
    ],
    advanced: [
      "Advanced Funding Sources and Structures",
      "Securitization for Leasing Companies",
      "Building a High-Performance Lease Portfolio",
      "Collections, Recoveries and Distressed Assets",
      "Pricing a Lease — IRR, Yield and Margin",
      "Vendor and Supplier Relationships"
    ]
  },
  'Business Owner': {
    beginner: [
      "Understanding Equipment Leasing Basics",
      "Lease vs. Buy: Making the Right Decision",
      "Understanding Your Lease Agreement"
    ],
    intermediate: [
      "Operating vs. Capital Leases: What It Means for Your Business",
      "Cash Flow Planning with Equipment Finance",
      "End-of-Lease Options and Strategies",
      "Leasing as a Business Growth Tool"
    ],
    advanced: [
      "Sale-Leaseback as a Capital Strategy",
      "Advanced Lease Negotiation for Business Owners",
      "Managing Lease Obligations on Your Balance Sheet",
      "IFRS 16 for Corporate Finance Teams",
      "Fleet Leasing for Growing Businesses",
      "Medical Equipment Leasing for Healthcare Providers",
      "ICT and Technology Leasing",
      "Construction and Heavy Equipment Leasing",
      "Agricultural Equipment Leasing",
      "Negotiating Lease Terms with Your Lessor",
      "Loan vs Lease — Making the Right Call"
    ]
  },
  'Vendor': {
    beginner: [
      "Foundations of Vendor Leasing",
      "How Vendor Programs Work",
      "Profit Dynamics in Vendor Leasing"
    ],
    intermediate: [
      "A Taxonomy of Vendor Leasing Programs",
      "Managing Recourse and Portfolio Risk",
      "Lease Penetration: Tracking and Growing Your Program"
    ],
    advanced: [
      "Strategic Program Selection for Vendors",
      "Building a Private Label Leasing Program",
      "Bundled and Managed Services Strategies",
      "Vendor and Supplier Relationships"
    ]
  },
  'Funder': {
    beginner: [
      "Introduction to Managed Services",
      "Comprehensive Risk Analysis Fundamentals",
      "Credit Evaluation and DSCR"
    ],
    intermediate: [
      "Strategic Funding Options for Managed Services",
      "Legal, Operational, and Asset Readiness",
      "Pricing Strategies and Cost of Funds",
      "Introduction to Equipment Leasing for Banks",
      "Regulatory Compliance in Lease Finance",
      "Loan vs Lease — A Banker's Comparative Guide"
    ],
    advanced: [
      "Advanced Securitization Structures",
      "Portfolio Risk Modeling: LGD and PD",
      "Go-to-Market Strategy for Funders",
      "Structuring Complex Lease Deals",
      "Measuring Financial Performance",
      "Key Financial Ratios for Lessors",
      "Funding the Leasing Company",
      "Advanced Funding Sources and Structures"
    ]
  },
  'ESG and Sustainable Finance Programme': {
    beginner: [
      "Introduction to ESG",
      "ESG and the Financial System",
      "Climate Science for Finance Professionals",
      "Introduction to Carbon Markets",
      "Introduction to Green Finance & Sustainable Lending",
      "Introduction to Solar Energy & Clean Assets",
      "ESG Reporting Frameworks"
    ],
    intermediate: [
      "Greenwashing — Identification & Risk",
      "ESG Due Diligence & Risk Assessment",
      "Solar Asset Leasing — Applied Finance",
      "Carbon Credits — Applied Finance & Accounting",
      "ESG and Corporate Governance",
      "Social Impact Measurement & Reporting"
    ],
    advanced: [
      "ESG Strategy for Corporates & Financial Institutions",
      "Advanced Solar Leasing — Deal Structuring & Project Finance",
      "Advanced Carbon Markets — Trading, Strategy & Portfolio Management",
      "ESG Audit, Assurance & Advisory",
      "Sustainable Finance Product Design",
      "ESG and Institutional Investors",
      "ESG Advisory Simulation"
    ]
  }
};

// ─── Question Bank ───────────────────────────────────────────────────────────

const QUESTION_BANK = {
  'Sales Professional': [
    {
      id: 'sp1',
      text: "When pitching a lease to a client, what is the most effective value proposition?",
      options: [
        { text: "Focusing solely on having the lowest interest rate", isCorrect: false, gap: "Value-based selling vs. rate-based selling" },
        { text: "Highlighting cash flow preservation, tax benefits, and lifecycle management", isCorrect: true, gap: null },
        { text: "Explaining the complex accounting rules of ASC 842", isCorrect: false, gap: "Value-based selling vs. rate-based selling" },
        { text: "Promising guaranteed approval regardless of credit", isCorrect: false, gap: "Value-based selling vs. rate-based selling" }
      ]
    },
    {
      id: 'sp2',
      text: "If a client is concerned about technology obsolescence, which product should you recommend?",
      options: [
        { text: "A 10-year Capital Lease", isCorrect: false, gap: "Matching lease products to customer needs" },
        { text: "A Fair Market Value (FMV) Operating Lease", isCorrect: true, gap: null },
        { text: "A cash purchase", isCorrect: false, gap: "Matching lease products to customer needs" },
        { text: "A Sale-Leaseback", isCorrect: false, gap: "Matching lease products to customer needs" }
      ]
    },
    {
      id: 'sp3',
      text: "What is a Sale-Leaseback transaction?",
      options: [
        { text: "Selling equipment to a vendor and leasing it to a third party", isCorrect: false, gap: "Understanding specialized lease structures" },
        { text: "A company sells its owned asset to a lessor and immediately leases it back to free up capital", isCorrect: true, gap: null },
        { text: "Returning leased equipment early to buy a new one", isCorrect: false, gap: "Understanding specialized lease structures" },
        { text: "A lease that automatically converts to a sale at the end", isCorrect: false, gap: "Understanding specialized lease structures" }
      ]
    },
    {
      id: 'sp4',
      text: "During negotiations, the client wants a lower monthly payment. What is a structural way to achieve this without cutting your yield?",
      options: [
        { text: "Reduce the equipment cost", isCorrect: false, gap: "Lease structuring and negotiation tactics" },
        { text: "Extend the lease term or increase the assumed residual value", isCorrect: true, gap: null },
        { text: "Waive the documentation fee", isCorrect: false, gap: "Lease structuring and negotiation tactics" },
        { text: "Change it to a daily payment schedule", isCorrect: false, gap: "Lease structuring and negotiation tactics" }
      ]
    },
    {
      id: 'sp5',
      text: "What is the primary purpose of a Master Lease Agreement (MLA)?",
      options: [
        { text: "To lease multiple properties in different countries", isCorrect: false, gap: "Knowledge of lease documentation" },
        { text: "To establish overarching terms so future equipment schedules can be added without renegotiating legal terms", isCorrect: true, gap: null },
        { text: "To guarantee the lowest possible interest rate for life", isCorrect: false, gap: "Knowledge of lease documentation" },
        { text: "To allow the lessee to cancel at any time without penalty", isCorrect: false, gap: "Knowledge of lease documentation" }
      ]
    },
    {
      id: 'sp6',
      text: "What does 'consultative selling' mean in the context of equipment leasing?",
      options: [
        { text: "Offering the lowest monthly payment regardless of structure", isCorrect: false, gap: "Consultative selling techniques" },
        { text: "Understanding the customer's business needs and tailoring a financial solution accordingly", isCorrect: true, gap: null },
        { text: "Always recommending a capital lease", isCorrect: false, gap: "Consultative selling techniques" },
        { text: "Consulting with the lender before quoting the client", isCorrect: false, gap: "Consultative selling techniques" }
      ]
    },
    {
      id: 'sp7',
      text: "A prospect says 'Your rate is too high.' What is the best response?",
      options: [
        { text: "Immediately lower the rate to match the competitor", isCorrect: false, gap: "Handling objections and rate conversations" },
        { text: "Shift the conversation from rate to total cost of ownership and ROI", isCorrect: true, gap: null },
        { text: "Tell them the rate is non-negotiable", isCorrect: false, gap: "Handling objections and rate conversations" },
        { text: "Offer to remove fees to make up for it", isCorrect: false, gap: "Handling objections and rate conversations" }
      ]
    },
    {
      id: 'sp8',
      text: "Which end-of-lease option gives the lessee the right to buy the equipment for $1?",
      options: [
        { text: "FMV (Fair Market Value) option", isCorrect: false, gap: "End-of-lease options and structures" },
        { text: "$1 buyout (Finance/Capital Lease)", isCorrect: true, gap: null },
        { text: "Early termination clause", isCorrect: false, gap: "End-of-lease options and structures" },
        { text: "Operating lease renewal", isCorrect: false, gap: "End-of-lease options and structures" }
      ]
    },
    {
      id: 'sp9',
      text: "What does an 'evergreen clause' mean in a lease?",
      options: [
        { text: "A clause that allows early equipment upgrades for free", isCorrect: false, gap: "Advanced lease contract knowledge" },
        { text: "A clause where the lease automatically renews if neither party sends a notice of termination", isCorrect: true, gap: null },
        { text: "A renewable energy discount on leased solar equipment", isCorrect: false, gap: "Advanced lease contract knowledge" },
        { text: "A clause that adjusts the rate based on inflation annually", isCorrect: false, gap: "Advanced lease contract knowledge" }
      ]
    },
    {
      id: 'sp10',
      text: "When building a leasing proposal for a CFO, what financial metric should you always include?",
      options: [
        { text: "The brand reputation of the leasing company", isCorrect: false, gap: "Financial proposal best practices" },
        { text: "After-tax cash flow impact and ROI of the lease vs. buy decision", isCorrect: true, gap: null },
        { text: "Number of payments only", isCorrect: false, gap: "Financial proposal best practices" },
        { text: "A list of other clients using the same equipment", isCorrect: false, gap: "Financial proposal best practices" }
      ]
    }
  ],

  'Tax Accountant': [
    {
      id: 'ta1',
      text: "Under IFRS 16, what must a lessee recognize on the balance sheet for virtually all leases?",
      options: [
        { text: "Only the annual lease expense in the income statement", isCorrect: false, gap: "Lessee accounting under IFRS 16" },
        { text: "A right-of-use (ROU) asset and a corresponding lease liability", isCorrect: true, gap: null },
        { text: "The equipment at cost plus depreciation", isCorrect: false, gap: "Lessee accounting under IFRS 16" },
        { text: "Nothing — short-term leases are fully off-balance sheet", isCorrect: false, gap: "Lessee accounting under IFRS 16" }
      ]
    },
    {
      id: 'ta2',
      text: "How does a lessor classify leases under IFRS 16?",
      options: [
        { text: "As capital leases or operating leases", isCorrect: false, gap: "Lessor accounting classifications under IFRS 16" },
        { text: "As finance leases or operating leases", isCorrect: true, gap: null },
        { text: "All leases are classified as finance leases", isCorrect: false, gap: "Lessor accounting classifications under IFRS 16" },
        { text: "Lessor classification is optional under IFRS 16", isCorrect: false, gap: "Lessor accounting classifications under IFRS 16" }
      ]
    },
    {
      id: 'ta3',
      text: "Under Section 179 of the US Tax Code, what is the primary benefit for a lessee using a capital lease?",
      options: [
        { text: "Deducting the full lease payment as an operating expense", isCorrect: false, gap: "Tax code and depreciation strategies" },
        { text: "Immediately expensing the full cost of qualifying equipment in the year of purchase", isCorrect: true, gap: null },
        { text: "Avoiding all state sales taxes on leased equipment", isCorrect: false, gap: "Tax code and depreciation strategies" },
        { text: "Deferring all taxes to the end of the lease term", isCorrect: false, gap: "Tax code and depreciation strategies" }
      ]
    },
    {
      id: 'ta4',
      text: "In a true (operating) lease, who is entitled to claim depreciation for tax purposes?",
      options: [
        { text: "The lessee, since they use the asset", isCorrect: false, gap: "Tax ownership and depreciation rights" },
        { text: "The lessor, who retains tax ownership of the asset", isCorrect: true, gap: null },
        { text: "Both the lessor and lessee split it 50/50", isCorrect: false, gap: "Tax ownership and depreciation rights" },
        { text: "Neither party — it is handled by a government body", isCorrect: false, gap: "Tax ownership and depreciation rights" }
      ]
    },
    {
      id: 'ta5',
      text: "What is the key accounting difference between an operating lease and a finance lease for a lessee post-IFRS 16?",
      options: [
        { text: "Operating leases remain fully off-balance sheet", isCorrect: false, gap: "IFRS 16 transition and impact analysis" },
        { text: "Both are on balance sheet, but expense recognition differs: straight-line for operating vs. front-loaded for finance leases", isCorrect: true, gap: null },
        { text: "Finance leases are now treated as rentals", isCorrect: false, gap: "IFRS 16 transition and impact analysis" },
        { text: "There is no difference post-IFRS 16", isCorrect: false, gap: "IFRS 16 transition and impact analysis" }
      ]
    },
    {
      id: 'ta6',
      text: "What is the 'implicit rate' in a lease?",
      options: [
        { text: "The interest rate published by the central bank", isCorrect: false, gap: "Lease rate and discount rate calculations" },
        { text: "The rate that causes the present value of lease payments and residual value to equal the asset's fair value", isCorrect: true, gap: null },
        { text: "The inflation-adjusted cost of the lease", isCorrect: false, gap: "Lease rate and discount rate calculations" },
        { text: "The penalty rate applied when a lessee defaults", isCorrect: false, gap: "Lease rate and discount rate calculations" }
      ]
    },
    {
      id: 'ta7',
      text: "Under IFRS 16, what is an 'incremental borrowing rate' (IBR) used for?",
      options: [
        { text: "It is the lessee's average interest rate across all their loans", isCorrect: false, gap: "Practical expedients and IBR under IFRS 16" },
        { text: "The rate a lessee would pay to borrow funds to buy a similar asset over a similar term — used when the implicit rate is not determinable", isCorrect: true, gap: null },
        { text: "The rate set by the lessor for credit-impaired lessees", isCorrect: false, gap: "Practical expedients and IBR under IFRS 16" },
        { text: "It applies only to short-term leases under 12 months", isCorrect: false, gap: "Practical expedients and IBR under IFRS 16" }
      ]
    },
    {
      id: 'ta8',
      text: "A client wants to structure a lease as a true lease for tax benefits. Which factor is critical to maintain that classification?",
      options: [
        { text: "The lessee must have a fixed-price purchase option at any time", isCorrect: false, gap: "True lease vs. conditional sale structuring" },
        { text: "The lessor must retain meaningful residual interest (at least 20% of original cost) and tax ownership", isCorrect: true, gap: null },
        { text: "The lease term must exceed 80% of the asset's useful life", isCorrect: false, gap: "True lease vs. conditional sale structuring" },
        { text: "Monthly payments must equal the full asset cost over the term", isCorrect: false, gap: "True lease vs. conditional sale structuring" }
      ]
    },
    {
      id: 'ta9',
      text: "What is a 'deferred tax liability' in equipment leasing for a lessor?",
      options: [
        { text: "A tax owed on equipment bought in a prior year", isCorrect: false, gap: "Deferred tax accounting in leasing" },
        { text: "The tax effect of temporary differences between book income and taxable income — typically from accelerated depreciation", isCorrect: true, gap: null },
        { text: "A penalty for late tax filing", isCorrect: false, gap: "Deferred tax accounting in leasing" },
        { text: "A credit applied when a lessee fails to pay", isCorrect: false, gap: "Deferred tax accounting in leasing" }
      ]
    },
    {
      id: 'ta10',
      text: "Which of the following qualifies for the short-term lease exemption under IFRS 16?",
      options: [
        { text: "Leases with a term between 13 and 24 months", isCorrect: false, gap: "IFRS 16 exemptions and practical expedients" },
        { text: "Leases with a term of 12 months or less at commencement, with no purchase option", isCorrect: true, gap: null },
        { text: "Leases on assets valued below $100,000", isCorrect: false, gap: "IFRS 16 exemptions and practical expedients" },
        { text: "Any lease where payments are variable", isCorrect: false, gap: "IFRS 16 exemptions and practical expedients" }
      ]
    }
  ],

  'Leasing Company': [
    {
      id: 'lc1',
      text: "Which financial ratio is most critical for evaluating a leasing company's leverage?",
      options: [
        { text: "Return on Assets (ROA)", isCorrect: false, gap: "Key financial ratios for lessors" },
        { text: "Debt-to-Equity Ratio", isCorrect: true, gap: null },
        { text: "Current Ratio", isCorrect: false, gap: "Key financial ratios for lessors" },
        { text: "Inventory Turnover", isCorrect: false, gap: "Key financial ratios for lessors" }
      ]
    },
    {
      id: 'lc2',
      text: "What is the primary purpose of securitization for a leasing company?",
      options: [
        { text: "To increase the residual value of assets", isCorrect: false, gap: "Advanced funding sources and structures" },
        { text: "To convert illiquid lease receivables into tradable securities for funding", isCorrect: true, gap: null },
        { text: "To avoid paying corporate taxes", isCorrect: false, gap: "Advanced funding sources and structures" },
        { text: "To transfer maintenance responsibilities to the lessee", isCorrect: false, gap: "Advanced funding sources and structures" }
      ]
    },
    {
      id: 'lc3',
      text: "How is residual value risk typically mitigated by a lessor?",
      options: [
        { text: "By offering only short-term leases", isCorrect: false, gap: "Asset management and residual risk" },
        { text: "Through conservative forecasting, insurance, and secondary market planning", isCorrect: true, gap: null },
        { text: "By charging higher interest rates", isCorrect: false, gap: "Asset management and residual risk" },
        { text: "By ignoring it until the end of the lease", isCorrect: false, gap: "Asset management and residual risk" }
      ]
    },
    {
      id: 'lc4',
      text: "Under ASC 842 / IFRS 16, how does a lessor account for a sales-type lease?",
      options: [
        { text: "Keep the asset on the balance sheet and recognize rental income straight-line", isCorrect: false, gap: "Lessor accounting standards" },
        { text: "Derecognize the asset and record a net investment in the lease", isCorrect: true, gap: null },
        { text: "Record it as an off-balance sheet transaction", isCorrect: false, gap: "Lessor accounting standards" },
        { text: "Only record the interest portion of the payments", isCorrect: false, gap: "Lessor accounting standards" }
      ]
    },
    {
      id: 'lc5',
      text: "What is 'net investment in a lease' from a lessor's perspective?",
      options: [
        { text: "The gross cost of the leased asset", isCorrect: false, gap: "Financial performance measurement" },
        { text: "The present value of future lease payments plus the unguaranteed residual value", isCorrect: true, gap: null },
        { text: "The total cash collected minus operating costs", isCorrect: false, gap: "Financial performance measurement" },
        { text: "The market value of the equipment at lease inception", isCorrect: false, gap: "Financial performance measurement" }
      ]
    },
    {
      id: 'lc6',
      text: "Which funding source typically provides a leasing company with the lowest cost of capital?",
      options: [
        { text: "Equity financing", isCorrect: false, gap: "Funding the leasing company" },
        { text: "Senior secured debt / warehouse lines of credit", isCorrect: true, gap: null },
        { text: "Subordinated debt", isCorrect: false, gap: "Funding the leasing company" },
        { text: "Vendor recourse programs", isCorrect: false, gap: "Funding the leasing company" }
      ]
    },
    {
      id: 'lc7',
      text: "What is 'portfolio yield' in the context of a leasing company?",
      options: [
        { text: "The percentage of leases that are current (not delinquent)", isCorrect: false, gap: "Portfolio performance metrics" },
        { text: "The average rate of return earned across all leases in the portfolio", isCorrect: true, gap: null },
        { text: "The total revenue from equipment sales at lease end", isCorrect: false, gap: "Portfolio performance metrics" },
        { text: "The equity return on the leasing company as a whole", isCorrect: false, gap: "Portfolio performance metrics" }
      ]
    },
    {
      id: 'lc8',
      text: "What does 'recourse' mean in a vendor-leasing program?",
      options: [
        { text: "The vendor receives a commission on each lease funded", isCorrect: false, gap: "Vendor programs and recourse structures" },
        { text: "The vendor agrees to buy back or be liable for a defaulted lease from the funder", isCorrect: true, gap: null },
        { text: "The lessor can repossess equipment without notice", isCorrect: false, gap: "Vendor programs and recourse structures" },
        { text: "The lessee has the right to return equipment early for free", isCorrect: false, gap: "Vendor programs and recourse structures" }
      ]
    },
    {
      id: 'lc9',
      text: "What is the purpose of a 'security deposit' or 'advance rental' in a lease?",
      options: [
        { text: "To reduce the equipment cost for the lessor", isCorrect: false, gap: "Lease structuring and risk management" },
        { text: "To reduce lessor credit risk and lower the funded amount or monthly payment", isCorrect: true, gap: null },
        { text: "To cover the lessor's cost of funds", isCorrect: false, gap: "Lease structuring and risk management" },
        { text: "It is a mandatory requirement under IFRS 16", isCorrect: false, gap: "Lease structuring and risk management" }
      ]
    },
    {
      id: 'lc10',
      text: "What is the role of an 'originator' in a lease securitization?",
      options: [
        { text: "The entity that rates the quality of the lease pool", isCorrect: false, gap: "Securitization and capital markets" },
        { text: "The leasing company that creates the lease receivables that are pooled and sold to investors", isCorrect: true, gap: null },
        { text: "The investor who purchases the lease-backed securities", isCorrect: false, gap: "Securitization and capital markets" },
        { text: "The trustee that manages the SPV", isCorrect: false, gap: "Securitization and capital markets" }
      ]
    }
  ],

  'Business Owner': [
    {
      id: 'bo1',
      text: "What is the main difference between a Capital Lease and an Operating Lease for a business?",
      options: [
        { text: "Capital leases are only for real estate", isCorrect: false, gap: "Understanding lease classifications" },
        { text: "A capital lease transfers ownership risks/rewards to the lessee, while an operating lease is treated more like a rental", isCorrect: true, gap: null },
        { text: "Operating leases always have higher interest rates", isCorrect: false, gap: "Understanding lease classifications" },
        { text: "Capital leases do not require monthly payments", isCorrect: false, gap: "Understanding lease classifications" }
      ]
    },
    {
      id: 'bo2',
      text: "How does leasing typically impact a company's cash flow compared to a cash purchase?",
      options: [
        { text: "It drains cash reserves immediately", isCorrect: false, gap: "Cash flow management and capital preservation" },
        { text: "It preserves working capital by spreading the cost over time", isCorrect: true, gap: null },
        { text: "It has no impact on cash flow", isCorrect: false, gap: "Cash flow management and capital preservation" },
        { text: "It increases the total cash available on day one", isCorrect: false, gap: "Cash flow management and capital preservation" }
      ]
    },
    {
      id: 'bo3',
      text: "Under ASC 842, how must a lessee report an operating lease?",
      options: [
        { text: "Only in the footnotes of the financial statements", isCorrect: false, gap: "Lessee accounting standards (ASC 842)" },
        { text: "By recognizing a Right-of-Use (ROU) asset and a corresponding lease liability on the balance sheet", isCorrect: true, gap: null },
        { text: "As a direct reduction of equity", isCorrect: false, gap: "Lessee accounting standards (ASC 842)" },
        { text: "Operating leases are exempt from reporting", isCorrect: false, gap: "Lessee accounting standards (ASC 842)" }
      ]
    },
    {
      id: 'bo4',
      text: "What happens at the end of a Fair Market Value (FMV) lease?",
      options: [
        { text: "The lessee automatically owns the equipment for $1", isCorrect: false, gap: "End-of-lease options and obligations" },
        { text: "The lessee can return the equipment, renew the lease, or purchase it at its current market value", isCorrect: true, gap: null },
        { text: "The equipment must be destroyed", isCorrect: false, gap: "End-of-lease options and obligations" },
        { text: "The lessor pays the lessee a bonus", isCorrect: false, gap: "End-of-lease options and obligations" }
      ]
    },
    {
      id: 'bo5',
      text: "Which of the following is a 'soft cost' that can often be included in an equipment lease?",
      options: [
        { text: "The raw materials used to build the equipment", isCorrect: false, gap: "Understanding total cost of ownership and inclusions" },
        { text: "Software, installation, and training fees", isCorrect: true, gap: null },
        { text: "The CEO's salary", isCorrect: false, gap: "Understanding total cost of ownership and inclusions" },
        { text: "Real estate taxes", isCorrect: false, gap: "Understanding total cost of ownership and inclusions" }
      ]
    },
    {
      id: 'bo6',
      text: "What does it mean if a lease has a '10% Purchase Option'?",
      options: [
        { text: "The lessee pays 10% less on every monthly payment", isCorrect: false, gap: "Lease structures and purchase options" },
        { text: "The lessee has the right to buy the equipment at the end of the term for 10% of its original cost", isCorrect: true, gap: null },
        { text: "10% of the lease is tax deductible", isCorrect: false, gap: "Lease structures and purchase options" },
        { text: "The lessee must put down a 10% deposit upfront", isCorrect: false, gap: "Lease structures and purchase options" }
      ]
    },
    {
      id: 'bo7',
      text: "Why might a business choose leasing over a bank loan for equipment?",
      options: [
        { text: "Bank loans are always more expensive", isCorrect: false, gap: "Lease vs. buy financial analysis" },
        { text: "Leasing often requires no large down payment and may preserve existing credit lines", isCorrect: true, gap: null },
        { text: "Leasing eliminates all maintenance costs", isCorrect: false, gap: "Lease vs. buy financial analysis" },
        { text: "Bank loans cannot finance equipment", isCorrect: false, gap: "Lease vs. buy financial analysis" }
      ]
    },
    {
      id: 'bo8',
      text: "What is a 'hell or high water' clause in a lease contract?",
      options: [
        { text: "It requires the lessee to buy flood insurance for leased equipment", isCorrect: false, gap: "Understanding lease contract terms" },
        { text: "It mandates that the lessee must make all payments regardless of equipment performance or disputes", isCorrect: true, gap: null },
        { text: "It allows the lessee to return the equipment if it breaks", isCorrect: false, gap: "Understanding lease contract terms" },
        { text: "It limits the lessor's liability for environmental damage", isCorrect: false, gap: "Understanding lease contract terms" }
      ]
    },
    {
      id: 'bo9',
      text: "How can a Sale-Leaseback benefit a business owner?",
      options: [
        { text: "It allows the business to buy equipment at a discount", isCorrect: false, gap: "Strategic financing with sale-leaseback" },
        { text: "It converts owned equipment into immediate cash while retaining use of the asset", isCorrect: true, gap: null },
        { text: "It removes all lease liabilities from the balance sheet instantly", isCorrect: false, gap: "Strategic financing with sale-leaseback" },
        { text: "It guarantees a fixed interest rate for life", isCorrect: false, gap: "Strategic financing with sale-leaseback" }
      ]
    },
    {
      id: 'bo10',
      text: "What is the key risk a business owner should evaluate before signing a long-term lease?",
      options: [
        { text: "Whether the lessor's office is nearby", isCorrect: false, gap: "Risk assessment in lease decisions" },
        { text: "Technology obsolescence, early termination penalties, and the total cost over the lease term", isCorrect: true, gap: null },
        { text: "The color and brand of the equipment", isCorrect: false, gap: "Risk assessment in lease decisions" },
        { text: "Whether the lease is reported in the footnotes only", isCorrect: false, gap: "Risk assessment in lease decisions" }
      ]
    }
  ],

  'Vendor': [
    {
      id: 'v1',
      text: "What is the primary benefit of a vendor leasing program for an equipment seller?",
      options: [
        { text: "The vendor earns interest income on every lease", isCorrect: false, gap: "Foundations of vendor leasing" },
        { text: "It removes price as the main buying objection by converting equipment cost into affordable monthly payments", isCorrect: true, gap: null },
        { text: "The vendor retains tax ownership of all equipment", isCorrect: false, gap: "Foundations of vendor leasing" },
        { text: "The vendor avoids all recourse liability", isCorrect: false, gap: "Foundations of vendor leasing" }
      ]
    },
    {
      id: 'v2',
      text: "What is a 'captive finance company' in vendor leasing?",
      options: [
        { text: "A third-party lender that finances any vendor's equipment", isCorrect: false, gap: "Vendor leasing program types" },
        { text: "A finance subsidiary owned by a manufacturer or vendor to finance its own equipment sales", isCorrect: true, gap: null },
        { text: "A bank that specializes in government-only contracts", isCorrect: false, gap: "Vendor leasing program types" },
        { text: "A factoring company that buys invoices from vendors", isCorrect: false, gap: "Vendor leasing program types" }
      ]
    },
    {
      id: 'v3',
      text: "What is 'recourse' in a vendor-leasing arrangement?",
      options: [
        { text: "The vendor receives a referral fee for each deal", isCorrect: false, gap: "Recourse and risk in vendor programs" },
        { text: "The vendor is liable to the funder if the lessee defaults, often required to buy back the lease", isCorrect: true, gap: null },
        { text: "The lessee can return the equipment to the vendor at any time", isCorrect: false, gap: "Recourse and risk in vendor programs" },
        { text: "The funder provides the vendor with marketing support", isCorrect: false, gap: "Recourse and risk in vendor programs" }
      ]
    },
    {
      id: 'v4',
      text: "How does a vendor typically profit from a leasing program beyond the equipment sale?",
      options: [
        { text: "By claiming depreciation on the leased equipment", isCorrect: false, gap: "Profit dynamics in vendor leasing" },
        { text: "Through dealer markup (yield spread), finance reserve income, and increased deal volume", isCorrect: true, gap: null },
        { text: "By retaining the monthly lease payments from the customer", isCorrect: false, gap: "Profit dynamics in vendor leasing" },
        { text: "By buying out all leases at a discount", isCorrect: false, gap: "Profit dynamics in vendor leasing" }
      ]
    },
    {
      id: 'v5',
      text: "What is a 'private label' vendor leasing program?",
      options: [
        { text: "A program where only private companies can lease equipment", isCorrect: false, gap: "Types of vendor leasing programs" },
        { text: "A financing program branded under the vendor's name but funded by a third-party leasing company", isCorrect: true, gap: null },
        { text: "A lease exclusively for luxury or premium equipment", isCorrect: false, gap: "Types of vendor leasing programs" },
        { text: "A government-sponsored financing initiative", isCorrect: false, gap: "Types of vendor leasing programs" }
      ]
    },
    {
      id: 'v6',
      text: "What does it mean if a vendor 'retains recourse' on a portfolio?",
      options: [
        { text: "The vendor keeps all lease payments for themselves", isCorrect: false, gap: "Portfolio risk management for vendors" },
        { text: "The vendor remains responsible for credit losses if lessees default — essentially guaranteeing the paper", isCorrect: true, gap: null },
        { text: "The vendor can repossess the equipment directly without involving the funder", isCorrect: false, gap: "Portfolio risk management for vendors" },
        { text: "The funder allows the vendor to renegotiate terms at any time", isCorrect: false, gap: "Portfolio risk management for vendors" }
      ]
    },
    {
      id: 'v7',
      text: "Which metric should a vendor track to measure the health of their leasing program?",
      options: [
        { text: "Number of brochures printed", isCorrect: false, gap: "Vendor program performance tracking" },
        { text: "Lease penetration rate — the percentage of equipment sales financed through the leasing program", isCorrect: true, gap: null },
        { text: "Total square footage of the vendor's showroom", isCorrect: false, gap: "Vendor program performance tracking" },
        { text: "Average age of the vendor's sales staff", isCorrect: false, gap: "Vendor program performance tracking" }
      ]
    },
    {
      id: 'v8',
      text: "What type of transaction allows a vendor to sell equipment to a leasing company, which then leases it to the end user?",
      options: [
        { text: "A direct finance lease", isCorrect: false, gap: "Vendor transaction structures" },
        { text: "An indirect or broker-origination model", isCorrect: true, gap: null },
        { text: "A syndication agreement", isCorrect: false, gap: "Vendor transaction structures" },
        { text: "A fractional ownership deal", isCorrect: false, gap: "Vendor transaction structures" }
      ]
    },
    {
      id: 'v9',
      text: "Why is bundling maintenance and services into a lease attractive for a vendor?",
      options: [
        { text: "It reduces the vendor's tax liability", isCorrect: false, gap: "Managed services and bundled leasing" },
        { text: "It creates recurring revenue, increases stickiness, and improves margin over the customer lifecycle", isCorrect: true, gap: null },
        { text: "It allows the vendor to depreciate the service cost", isCorrect: false, gap: "Managed services and bundled leasing" },
        { text: "It exempts the vendor from recourse obligations", isCorrect: false, gap: "Managed services and bundled leasing" }
      ]
    },
    {
      id: 'v10',
      text: "What is the main strategic advantage of a vendor working with multiple funding sources?",
      options: [
        { text: "It eliminates all paperwork for the vendor", isCorrect: false, gap: "Strategic program selection and funder relationships" },
        { text: "It allows the vendor to shop deals to the best-fit funder based on credit profile and equipment type", isCorrect: true, gap: null },
        { text: "It guarantees automatic approval for all customers", isCorrect: false, gap: "Strategic program selection and funder relationships" },
        { text: "It removes the need for a credit application", isCorrect: false, gap: "Strategic program selection and funder relationships" }
      ]
    }
  ],

  'Funder': [
    {
      id: 'f1',
      text: "When evaluating a lessee's creditworthiness, which metric best indicates their ability to service debt?",
      options: [
        { text: "Return on Equity (ROE)", isCorrect: false, gap: "Credit analysis and risk assessment" },
        { text: "Debt Service Coverage Ratio (DSCR)", isCorrect: true, gap: null },
        { text: "Gross Profit Margin", isCorrect: false, gap: "Credit analysis and risk assessment" },
        { text: "Days Sales Outstanding (DSO)", isCorrect: false, gap: "Credit analysis and risk assessment" }
      ]
    },
    {
      id: 'f2',
      text: "What does the Internal Rate of Return (IRR) of a lease represent?",
      options: [
        { text: "The total cash collected over the term", isCorrect: false, gap: "Financial modeling and yield calculation" },
        { text: "The annualized effective compounded return earned on the invested capital", isCorrect: true, gap: null },
        { text: "The depreciation rate of the asset", isCorrect: false, gap: "Financial modeling and yield calculation" },
        { text: "The central bank's base interest rate", isCorrect: false, gap: "Financial modeling and yield calculation" }
      ]
    },
    {
      id: 'f3',
      text: "In lease pricing, what is a 'spread'?",
      options: [
        { text: "The difference between the asset cost and residual value", isCorrect: false, gap: "Pricing strategies and cost of funds" },
        { text: "The difference between the yield charged to the customer and the funder's cost of funds", isCorrect: true, gap: null },
        { text: "The physical distance between the funder and borrower", isCorrect: false, gap: "Pricing strategies and cost of funds" },
        { text: "The time between lease approval and funding", isCorrect: false, gap: "Pricing strategies and cost of funds" }
      ]
    },
    {
      id: 'f4',
      text: "Why is collateral valuation critical in equipment finance?",
      options: [
        { text: "It determines the color of the equipment", isCorrect: false, gap: "Asset valuation and collateral risk" },
        { text: "It establishes recovery value in case of default and supports residual assumptions", isCorrect: true, gap: null },
        { text: "It is required by the marketing department", isCorrect: false, gap: "Asset valuation and collateral risk" },
        { text: "It dictates the lessee's tax rate", isCorrect: false, gap: "Asset valuation and collateral risk" }
      ]
    },
    {
      id: 'f5',
      text: "What is the impact of a 'hell or high water' clause in a lease contract for a funder?",
      options: [
        { text: "It requires the lessee to buy flood insurance", isCorrect: false, gap: "Legal compliance and contract structuring" },
        { text: "It mandates that the lessee must make payments regardless of equipment performance or disputes — protecting the funder's income stream", isCorrect: true, gap: null },
        { text: "It allows the funder to repossess at any time", isCorrect: false, gap: "Legal compliance and contract structuring" },
        { text: "It limits the funder's liability for environmental damage", isCorrect: false, gap: "Legal compliance and contract structuring" }
      ]
    },
    {
      id: 'f6',
      text: "What is a 'managed services' lease structure?",
      options: [
        { text: "A lease managed entirely by the vendor without funder involvement", isCorrect: false, gap: "Managed services and advanced strategies" },
        { text: "A bundled financing solution that includes equipment, maintenance, software, and services in a single monthly payment", isCorrect: true, gap: null },
        { text: "A service the funder provides to manage the lessee's entire balance sheet", isCorrect: false, gap: "Managed services and advanced strategies" },
        { text: "A government-regulated lending program", isCorrect: false, gap: "Managed services and advanced strategies" }
      ]
    },
    {
      id: 'f7',
      text: "What is 'advance rate' in asset-based lending or securitization?",
      options: [
        { text: "How quickly the funder approves credit applications", isCorrect: false, gap: "Securitization and portfolio funding" },
        { text: "The percentage of an asset's value that a lender will finance against as collateral", isCorrect: true, gap: null },
        { text: "The number of advance payments required at lease signing", isCorrect: false, gap: "Securitization and portfolio funding" },
        { text: "The early payment discount offered to lessees", isCorrect: false, gap: "Securitization and portfolio funding" }
      ]
    },
    {
      id: 'f8',
      text: "What does 'loss given default' (LGD) measure?",
      options: [
        { text: "How often a lessee defaults over the term of the lease", isCorrect: false, gap: "Portfolio risk and credit modeling" },
        { text: "The percentage of exposure a funder loses when a lease goes into default, after recoveries", isCorrect: true, gap: null },
        { text: "The total number of defaults in a quarter", isCorrect: false, gap: "Portfolio risk and credit modeling" },
        { text: "The credit score threshold for approving new deals", isCorrect: false, gap: "Portfolio risk and credit modeling" }
      ]
    },
    {
      id: 'f9',
      text: "What is the purpose of a 'personal guarantee' in a small-ticket equipment lease?",
      options: [
        { text: "To allow the business owner to avoid paying taxes", isCorrect: false, gap: "Credit risk mitigation strategies" },
        { text: "To hold the business owner personally liable if the business defaults, giving the funder an additional recovery path", isCorrect: true, gap: null },
        { text: "To allow the funder to charge a higher interest rate", isCorrect: false, gap: "Credit risk mitigation strategies" },
        { text: "To replace the need for a credit application", isCorrect: false, gap: "Credit risk mitigation strategies" }
      ]
    },
    {
      id: 'f10',
      text: "Which of the following best describes a comprehensive risk analysis in equipment leasing?",
      options: [
        { text: "Reviewing the lessee's website and social media presence", isCorrect: false, gap: "Comprehensive risk analysis" },
        { text: "Evaluating credit risk, collateral value, market risk, concentration risk, and legal enforceability together", isCorrect: true, gap: null },
        { text: "Checking only the business's annual revenue", isCorrect: false, gap: "Comprehensive risk analysis" },
        { text: "Relying solely on the vendor's recommendation", isCorrect: false, gap: "Comprehensive risk analysis" }
      ]
    }
  ],

  'ESG and Sustainable Finance Programme': [
    {
      id: 'esg1',
      text: "What does 'ESG' stand for in sustainable finance?",
      options: [
        { text: "Economic Stability & Growth", isCorrect: false, gap: "ESG fundamentals" },
        { text: "Environmental, Social, and Governance", isCorrect: true, gap: null },
        { text: "Energy, Sustainability & Green", isCorrect: false, gap: "ESG fundamentals" },
        { text: "Ethical Standards & Guidelines", isCorrect: false, gap: "ESG fundamentals" }
      ]
    },
    {
      id: 'esg2',
      text: "What is a carbon credit?",
      options: [
        { text: "A tax credit for using renewable energy", isCorrect: false, gap: "Carbon markets fundamentals" },
        { text: "A tradable permit representing one tonne of CO2 emissions reduced or removed from the atmosphere", isCorrect: true, gap: null },
        { text: "A loan for purchasing electric vehicles", isCorrect: false, gap: "Carbon markets fundamentals" },
        { text: "A discount on carbon-intensive equipment", isCorrect: false, gap: "Carbon markets fundamentals" }
      ]
    },
    {
      id: 'esg3',
      text: "What is 'greenwashing' in sustainable finance?",
      options: [
        { text: "Washing equipment with eco-friendly chemicals", isCorrect: false, gap: "Greenwashing identification" },
        { text: "Making misleading or unsubstantiated claims about the environmental benefits of a product or investment", isCorrect: true, gap: null },
        { text: "A regulatory requirement for green bonds", isCorrect: false, gap: "Greenwashing identification" },
        { text: "The process of cleaning renewable energy assets", isCorrect: false, gap: "Greenwashing identification" }
      ]
    },
    {
      id: 'esg4',
      text: "Which of the following is a green lease provision?",
      options: [
        { text: "A clause requiring the lessee to pay higher rent", isCorrect: false, gap: "Green leasing structures" },
        { text: "Energy efficiency obligations and sustainability reporting requirements for the leased asset", isCorrect: true, gap: null },
        { text: "A mandate to use only fossil fuel energy", isCorrect: false, gap: "Green leasing structures" },
        { text: "A clause restricting equipment upgrades", isCorrect: false, gap: "Green leasing structures" }
      ]
    },
    {
      id: 'esg5',
      text: "What is the primary purpose of ESG due diligence in equipment finance?",
      options: [
        { text: "To increase the equipment's resale value", isCorrect: false, gap: "ESG due diligence" },
        { text: "To identify environmental, social, and governance risks that could affect credit quality or regulatory compliance", isCorrect: true, gap: null },
        { text: "To reduce the interest rate on the lease", isCorrect: false, gap: "ESG due diligence" },
        { text: "To promote the lessor's brand image", isCorrect: false, gap: "ESG due diligence" }
      ]
    },
    {
      id: 'esg6',
      text: "Under IFRS, how are carbon credits typically accounted for?",
      options: [
        { text: "As intangible assets when purchased and inventory when held for trading", isCorrect: true, gap: null },
        { text: "As property, plant, and equipment", isCorrect: false, gap: "Carbon credits accounting" },
        { text: "As a liability until sold", isCorrect: false, gap: "Carbon credits accounting" },
        { text: "They are not recognized on the balance sheet", isCorrect: false, gap: "Carbon credits accounting" }
      ]
    },
    {
      id: 'esg7',
      text: "What is a Power Purchase Agreement (PPA) in the context of solar leasing?",
      options: [
        { text: "A lease for solar panel manufacturing equipment", isCorrect: false, gap: "Solar asset leasing" },
        { text: "A contract where a customer agrees to buy electricity from a solar generator at a fixed price over a long term", isCorrect: true, gap: null },
        { text: "A government subsidy for solar installations", isCorrect: false, gap: "Solar asset leasing" },
        { text: "A loan for purchasing solar panels", isCorrect: false, gap: "Solar asset leasing" }
      ]
    },
    {
      id: 'esg8',
      text: "What does 'climate risk' mean for a leasing company's portfolio?",
      options: [
        { text: "The risk of weather damage to leased equipment only", isCorrect: false, gap: "Climate risk assessment" },
        { text: "Physical risks (e.g., floods, fires damaging assets) and transition risks (e.g., carbon taxes reducing lessee profitability)", isCorrect: true, gap: null },
        { text: "The risk of solar panels overheating", isCorrect: false, gap: "Climate risk assessment" },
        { text: "A marketing term with no financial impact", isCorrect: false, gap: "Climate risk assessment" }
      ]
    },
    {
      id: 'esg9',
      text: "What is a 'sustainability-linked loan'?",
      options: [
        { text: "A loan that can never default", isCorrect: false, gap: "Sustainable finance products" },
        { text: "A loan where the interest rate is tied to the borrower's achievement of ESG performance targets", isCorrect: true, gap: null },
        { text: "A loan that only finances green buildings", isCorrect: false, gap: "Sustainable finance products" },
        { text: "A loan with a 100-year term", isCorrect: false, gap: "Sustainable finance products" }
      ]
    },
    {
      id: 'esg10',
      text: "Which of the following is a key ESG reporting framework?",
      options: [
        { text: "GAAP (Generally Accepted Accounting Principles)", isCorrect: false, gap: "ESG reporting frameworks" },
        { text: "TCFD (Task Force on Climate-related Financial Disclosures)", isCorrect: true, gap: null },
        { text: "SWIFT (Society for Worldwide Interbank Financial Telecommunication)", isCorrect: false, gap: "ESG reporting frameworks" },
        { text: "FIFO (First-In-First-Out)", isCorrect: false, gap: "ESG reporting frameworks" }
      ]
    }
  ]
};

// ─── Skills Assessment Component ─────────────────────────────────────────────

const SkillsAssessment = ({ roleId, roleDisplayName, onClose }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isComplete, setIsComplete] = useState(false);

  const questions = QUESTION_BANK[roleDisplayName];
  
  if (!questions) {
    return (
      <div className="text-center py-12">
        <AlertCircle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
        <p className="text-slate-300">Assessment not available for this role yet.</p>
        <Button onClick={onClose} variant="outline" className="mt-4">Close</Button>
      </div>
    );
  }

  const handleAnswer = (optionIdx) => {
    setAnswers(prev => ({ ...prev, [currentIdx]: optionIdx }));
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(prev => prev - 1);
    }
  };

  const resetTest = () => {
    setCurrentIdx(0);
    setAnswers({});
    setIsComplete(false);
  };

  // Results view
  if (isComplete) {
    let correctCount = 0;
    const gaps = [];

    questions.forEach((q, idx) => {
      const selectedOptionIdx = answers[idx];
      if (selectedOptionIdx !== undefined) {
        const option = q.options[selectedOptionIdx];
        if (option.isCorrect) {
          correctCount++;
        } else if (option.gap) {
          gaps.push(option.gap);
        }
      }
    });

    const score = Math.round((correctCount / questions.length) * 100);
    let level, levelColor, levelBg, levelBorder;
    let recommendedLevels;

    if (score >= 80) {
      level = 'Advanced';
      levelColor = 'text-orange-300';
      levelBg = 'bg-orange-500/10';
      levelBorder = 'border-orange-500/30';
      recommendedLevels = ['beginner', 'intermediate', 'advanced'];
    } else if (score >= 50) {
      level = 'Intermediate';
      levelColor = 'text-yellow-300';
      levelBg = 'bg-yellow-500/10';
      levelBorder = 'border-yellow-500/30';
      recommendedLevels = ['beginner', 'intermediate'];
    } else {
      level = 'Beginner';
      levelColor = 'text-emerald-300';
      levelBg = 'bg-emerald-500/10';
      levelBorder = 'border-emerald-500/30';
      recommendedLevels = ['beginner'];
    }

    const uniqueGaps = [...new Set(gaps)].slice(0, 5);
    const roleCourses = COURSES[roleDisplayName];

    const tagStyles = {
      beginner: 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20',
      intermediate: 'bg-yellow-500/10 text-yellow-300 border border-yellow-500/20',
      advanced: 'bg-orange-500/10 text-orange-300 border border-orange-500/20'
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        {/* Score */}
        <div className="text-center">
          <div className={`inline-flex flex-col items-center justify-center w-28 h-28 rounded-full ${levelBg} border ${levelBorder} mb-3`}>
            <span className={`text-3xl font-bold ${levelColor}`}>{score}%</span>
            <span className="text-xs text-slate-400 mt-0.5">{correctCount}/{questions.length} correct</span>
          </div>
          <div className={`inline-block px-3 py-0.5 rounded-full text-xs font-semibold ${levelBg} ${levelColor} border ${levelBorder} mb-2`}>
            {level} Level
          </div>
          <p className="text-slate-400 text-xs max-w-md mx-auto">
            {score >= 80
              ? `Strong ${roleDisplayName} knowledge. Focus on advanced courses.`
              : score >= 50
              ? `Good foundation. A few knowledge gaps remain.`
              : `Start with beginner courses to build a solid foundation.`}
          </p>
        </div>

        {/* Gaps */}
        {uniqueGaps.length > 0 && (
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <AlertCircle className="w-3 h-3 text-red-400" />
              Knowledge Gaps
            </h3>
            <div className="space-y-1.5">
              {uniqueGaps.map((gap, i) => (
                <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-red-500/5 border border-red-500/10">
                  <div className="w-1 h-1 rounded-full bg-red-400 mt-1.5 shrink-0" />
                  <span className="text-xs text-slate-300">{gap}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Course Recommendations */}
        {roleCourses && (
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <BookOpen className="w-3 h-3 text-blue-400" />
              Recommended Courses
            </h3>
            <div className="space-y-1.5 max-h-64 overflow-y-auto custom-scrollbar">
              {recommendedLevels.map(lvl =>
                roleCourses[lvl]?.map((course, i) => (
                  <div key={`${lvl}-${i}`} className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/50 border border-slate-700/50">
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium shrink-0 ${tagStyles[lvl]}`}>
                      {lvl.charAt(0).toUpperCase() + lvl.slice(1, 4)}
                    </span>
                    <span className="text-xs text-slate-200 truncate">{course}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-2">
          <Button
            variant="ghost"
            onClick={resetTest}
            size="sm"
            className="text-slate-400 hover:text-white text-xs h-8"
          >
            <RotateCcw className="w-3 h-3 mr-1" />
            Retake
          </Button>
          <Button
            onClick={onClose}
            size="sm"
            className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs h-8"
          >
            Done
          </Button>
        </div>
      </motion.div>
    );
  }

  // Quiz view
  const currentQuestion = questions[currentIdx];
  const progress = ((currentIdx + 1) / questions.length) * 100;
  const hasAnsweredCurrent = answers[currentIdx] !== undefined;

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{roleDisplayName}</span>
        <span className="text-xs font-medium text-blue-400">Q{currentIdx + 1}/{questions.length}</span>
      </div>

      <Progress value={progress} className="h-1 bg-slate-800" />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.25 }}
        >
          <h3 className="text-base font-semibold text-white mb-4 leading-relaxed">
            {currentQuestion.text}
          </h3>

          <div className="space-y-2">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = answers[currentIdx] === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className={`w-full text-left p-3 rounded-lg border transition-all duration-200 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-blue-600/20 border-blue-500 text-white'
                      : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600'
                  }`}
                >
                  <span className="text-sm pr-3">{option.text}</span>
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                    isSelected ? 'border-blue-400 bg-blue-500' : 'border-slate-600 group-hover:border-slate-500'
                  }`}>
                    {isSelected && <CheckCircle2 className="w-2.5 h-2.5 text-white" />}
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-between pt-3 border-t border-slate-800">
        <Button
          variant="ghost"
          onClick={handlePrev}
          disabled={currentIdx === 0}
          size="sm"
          className="text-slate-400 hover:text-white text-xs h-8"
        >
          <ChevronLeft className="w-3 h-3 mr-1" />
          Prev
        </Button>

        <Button
          onClick={handleNext}
          disabled={!hasAnsweredCurrent}
          size="sm"
          className="bg-blue-600 hover:bg-blue-500 text-white text-xs h-8 px-4"
        >
          {currentIdx === questions.length - 1 ? 'Submit' : 'Next'}
          {currentIdx !== questions.length - 1 && <ChevronRight className="w-3 h-3 ml-1" />}
        </Button>
      </div>
    </div>
  );
};

// ─── Main RoleLandingPage Component ──────────────────────────────────────────

const RoleLandingPage = () => {
  const { roleId } = useParams();
  const navigate = useNavigate();
  const [roleData, setRoleData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAssessment, setShowAssessment] = useState(false);

  // Map roleId to display name for assessment
  const roleDisplayNameMap = {
    financier: 'Funder',
    sales: 'Sales Professional',
    business_owner: 'Business Owner',
    vendor: 'Vendor',
    lessor: 'Leasing Company',
    tax_accountant: 'Tax Accountant',
    esg: 'ESG and Sustainable Finance Programme'
  };

  useEffect(() => {
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
  const assessmentRoleName = roleDisplayNameMap[roleId];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500/30 font-sans">
      <Helmet>
        <title>{`${roleData.name} - Equipment Leasing Courses`}</title>
        <meta name="description" content={roleData.heroSubheading} />
      </Helmet>

      {/* Custom Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-slate-950 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1e3a8a]/40 via-slate-900/80 to-slate-950 z-0" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay z-0 pointer-events-none" />
        
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
              className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
            >
              <a 
                href="https://calendly.com/velocitygloballeasing-info/book-consultation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button 
                  size="lg" 
                  className="bg-emerald-600 hover:bg-emerald-500 text-white text-base px-8 py-6 rounded-full shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.5)] transition-all duration-300 transform hover:-translate-y-1 font-semibold flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  {roleData.ctaText}
                </Button>
              </a>
              
              <Button 
                onClick={() => setShowAssessment(true)}
                size="lg"
                variant="outline"
                className="bg-transparent hover:bg-blue-600/20 text-white border-blue-500/50 hover:border-blue-400 rounded-full px-8 py-6 text-base font-semibold flex items-center gap-2 transition-all duration-300"
              >
                <Target className="w-4 h-4" />
                Skills Gap Assessment
              </Button>
            </motion.div>
            <p className="text-xs text-slate-500 mt-4 italic max-w-md text-center">
              *Free 15-minute call with our lending expert. Extended strategy sessions available for $200.*
            </p>
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

      {/* Skills Gap Assessment Modal */}
      <AnimatePresence>
        {showAssessment && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowAssessment(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 p-5 flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-blue-400" />
                  <h2 className="text-xl font-semibold text-white">Skills Gap Assessment</h2>
                  <Badge className="bg-blue-600/30 text-blue-300 border border-blue-500/30 text-xs">
                    {roleData.name}
                  </Badge>
                </div>
                <button
                  onClick={() => setShowAssessment(false)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <XCircle className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6">
                <SkillsAssessment 
                  roleId={roleId}
                  roleDisplayName={assessmentRoleName}
                  onClose={() => setShowAssessment(false)}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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