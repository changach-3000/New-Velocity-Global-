
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Target, 
  Zap, 
  Brain, 
  TrendingUp, 
  Users, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight,
  Crown
} from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
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
        <title>About Us - Velocity Global Leasing</title>
        <meta name="description" content="Mastering the Art of Equipment Leasing. Learn about our story, our approach, and how we accelerate expertise in the world of assets." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold tracking-wide uppercase">
              Our Mission
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-slate-400">
              Mastering the Art of <br className="hidden md:block" />
              Equipment Leasing: Our Story
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Accelerating Expertise in the World of Assets
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-slate-900/50 border-y border-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                More Than Just a <span className="text-blue-500">Training Ground</span>
              </h2>
              <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                <p>
                  Velocity Global Leasing was founded on a simple yet powerful premise: the equipment finance industry needed a new standard of excellence. We saw a gap between traditional financial training and the dynamic, real-world demands of modern leasing.
                </p>
                <p>
                  We are a collective of industry veterans, financial analysts, and strategic thinkers dedicated to elevating the profession. Our platform isn't just about transferring knowledge; it's about instilling a mindset of precision, agility, and strategic foresight.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl transform rotate-3 opacity-20 blur-lg"></div>
              <div className="relative bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Market Leadership</h3>
                    <p className="text-slate-400 mt-1">Setting benchmarks for industry performance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-indigo-500/20 rounded-lg">
                    <Users className="w-8 h-8 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Community Driven</h3>
                    <p className="text-slate-400 mt-1">Building a network of elite professionals.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-500/20 rounded-lg">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Proven Results</h3>
                    <p className="text-slate-400 mt-1">Curriculum backed by real-world success.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Membership & Community Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950 to-slate-950"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-2xl mb-6 border border-purple-500/30">
                <Crown className="w-8 h-8 text-purple-400" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Membership & Community</h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Education is just the beginning. True mastery comes from continuous engagement with peers and industry leaders. Our membership program is designed to keep you at the forefront of equipment finance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-white mb-2">Quarterly Seminars</h3>
                  <p className="text-slate-400">Exclusive virtual sessions diving deep into current market trends, regulatory shifts, and complex deal structuring.</p>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-white mb-2">Private Network</h3>
                  <p className="text-slate-400">Access our dedicated Slack community to discuss deals, share insights, and network with top-tier professionals globally.</p>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-white mb-2">Premium Resources</h3>
                  <p className="text-slate-400">Receive proprietary industry reports, benchmarking data, and significant discounts on new courses and consulting.</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8 md:p-10 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Choose Your Tier</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between p-4 bg-slate-950/50 rounded-xl border border-slate-800">
                    <span className="font-semibold text-blue-400">Standard</span>
                    <span className="text-slate-300 text-sm">Essential Access</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-purple-900/20 rounded-xl border border-purple-500/30">
                    <span className="font-semibold text-purple-400">Premium</span>
                    <span className="text-slate-300 text-sm">Advanced Resources</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-amber-900/20 rounded-xl border border-amber-500/30">
                    <span className="font-semibold text-amber-400">Elite</span>
                    <span className="text-slate-300 text-sm">VIP Networking & Strategy</span>
                  </div>
                </div>
                <Link to="/membership" className="block">
                  <Button className="w-full bg-purple-600 hover:bg-purple-500 text-white py-6 text-lg rounded-xl shadow-lg shadow-purple-900/20">
                    Join Our Community
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach - Pillars */}
      <section className="py-20 bg-slate-900 relative border-t border-slate-800">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Approach</h2>
            <p className="text-slate-400 text-lg">Built on three fundamental pillars of excellence</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {/* Pillar 1 */}
            <motion.div variants={fadeIn} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-colors duration-300 group">
              <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Precision Intelligence</h3>
              <p className="text-slate-400 leading-relaxed">
                We believe in data-driven decision making. Our curriculum teaches you to analyze deals with surgical precision, uncovering value where others see risk.
              </p>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div variants={fadeIn} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-colors duration-300 group">
              <div className="w-14 h-14 bg-indigo-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-7 h-7 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Strategic Agility</h3>
              <p className="text-slate-400 leading-relaxed">
                Markets change. Rates fluctuate. We equip you with the mental frameworks to adapt instantly, structuring deals that remain profitable in any economic climate.
              </p>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div variants={fadeIn} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-colors duration-300 group">
              <div className="w-14 h-14 bg-amber-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">The Velocity Mindset</h3>
              <p className="text-slate-400 leading-relaxed">
                Speed matters, but not at the cost of accuracy. We train you to be proactive rather than reactive, anticipating client needs before they are spoken.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Best Practices & Benchmarking */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Best Practices & Benchmarking</h2>
            <p className="text-slate-400 text-lg">We don't just teach theory; we teach the gold standard.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Benchmarking Analysis</h3>
              <p className="text-slate-400">
                We constantly analyze top performers in the industry to update our curriculum. You learn what is working <em>now</em>, not what worked ten years ago. Our benchmarking reports give you a competitive advantage in understanding market rates and terms.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-indigo-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Operational Excellence</h3>
              <p className="text-slate-400">
                Efficiency is the key to profitability. We share best practices for workflow automation, documentation management, and client communication that reduce friction and accelerate deal closure.
              </p>
            </motion.div>
          </div>

          <div className="mt-16 text-center">
            <Link to="/courses">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-blue-900/20">
                Explore Our Courses <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
