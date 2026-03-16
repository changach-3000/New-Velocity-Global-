import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card.jsx';
import { Users, Zap, Shield, CheckCircle2, ArrowRight, Mail, Building2, Briefcase } from 'lucide-react';

const ForTeamsPage = () => {
  const mailtoLink = "mailto:info@velocitygloballeasing.com?subject=Team%20Plan%20Enquiry%20%E2%80%94%20Velocity%20Global%20Leasing&body=Hi%2C%20I'm%20interested%20in%20a%20team%20plan%20for%20my%20company.%20We%20have%20approximately%20X%20employees%20who%20need%20access.%20Please%20send%20us%20a%20quote.";

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
        <title>For Teams - Velocity Global Leasing</title>
        <meta name="description" content="Train your entire team in equipment leasing with our comprehensive corporate plans." />
      </Helmet>

      {/* ─── HERO SECTION ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-slate-950 to-slate-950" />
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10 px-4 mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
              <Building2 className="w-4 h-4" />
              Corporate Training Solutions
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-slate-400">
              Train Your Entire Team in Equipment Leasing
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Empower your workforce with industry-leading education. One plan, one payment, unlimited potential for your entire organization.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href={mailtoLink}>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 transition-all duration-300 w-full sm:w-auto"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Get a Quote
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── HOW IT WORKS SECTION ─────────────────────────────────────── */}
      <section className="py-24 bg-slate-900 relative border-y border-slate-800">
        <div className="container px-4 mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">How It Works</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Getting your team onboarded is simple, fast, and hassle-free.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative"
          >
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 z-0" />

            {[
              {
                step: "01",
                title: "You choose your seat count",
                description: "Tell us how many employees need access. We offer flexible tiers that scale with your business.",
                icon: Users
              },
              {
                step: "02",
                title: "We activate your team account",
                description: "Once approved, we set up a dedicated corporate portal and provide access links for your staff.",
                icon: Zap
              },
              {
                step: "03",
                title: "Your team starts learning",
                description: "Employees get immediate access to all courses, resources, and certification pathways.",
                icon: Shield
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="relative z-10 flex flex-col items-center text-center p-6 rounded-2xl bg-slate-950/50 border border-slate-800 backdrop-blur-sm"
              >
                <div className="w-16 h-16 bg-blue-900/50 border border-blue-500/30 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(37,99,235,0.2)]">
                  <item.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-blue-500 font-bold text-sm tracking-widest mb-2 uppercase">Step {item.step}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── PRICING TIERS SECTION ────────────────────────────────────── */}
      <section className="py-24 relative">
        <div className="container px-4 mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Corporate Plans</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Choose the perfect plan for your organization's size and needs.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {/* Starter Plan */}
            <motion.div variants={fadeIn}>
              <Card className="bg-slate-900 border-slate-800 h-full flex flex-col hover:border-blue-500/30 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Starter</CardTitle>
                  <CardDescription className="text-slate-400">Perfect for small teams and startups.</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">Custom</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">Up to 10 seats</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {['Full course catalog access', 'Basic progress reporting', 'Standard support', 'Digital certificates'].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <a href={mailtoLink} className="w-full">
                    <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white border border-slate-700">
                      Get a Quote
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Growth Plan */}
            <motion.div variants={fadeIn}>
              <Card className="bg-slate-900 border-blue-500/50 h-full flex flex-col relative shadow-[0_0_40px_rgba(37,99,235,0.1)] transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                  MOST POPULAR
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Growth</CardTitle>
                  <CardDescription className="text-slate-400">Ideal for growing departments.</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">Custom</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">11 - 50 seats</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {['Everything in Starter', 'Advanced analytics dashboard', 'Priority email support', 'Team management tools', 'Quarterly review sessions'].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <a href={mailtoLink} className="w-full">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Get a Quote
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div variants={fadeIn}>
              <Card className="bg-slate-900 border-slate-800 h-full flex flex-col hover:border-blue-500/30 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Enterprise</CardTitle>
                  <CardDescription className="text-slate-400">For large organizations.</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">Custom</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">50+ seats</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {['Everything in Growth', 'Dedicated account manager', 'Custom learning pathways', 'API & SSO integration', 'White-labeling options'].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <a href={mailtoLink} className="w-full">
                    <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white border border-slate-700">
                      Get a Quote
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ SECTION ──────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="container px-4 mx-auto max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                q: "Can we add more seats later?",
                a: "Absolutely. You can scale your team plan at any time. Just contact your account manager, and we'll prorate the additional seats for the remainder of your billing cycle."
              },
              {
                q: "Do you offer progress tracking for managers?",
                a: "Yes, our Growth and Enterprise plans include a dedicated manager dashboard where you can track course completion, quiz scores, and overall engagement for your entire team."
              },
              {
                q: "How long does it take to set up a team account?",
                a: "Once we finalize the agreement, your team account can be activated within 24-48 hours. We'll provide you with a simple onboarding guide to share with your employees."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-slate-950/50 border border-slate-800 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-blue-500 mt-1">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-slate-400 leading-relaxed pl-7">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ───────────────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20" />
        <div className="container px-4 mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to upskill your workforce?</h2>
            <p className="text-blue-200 mb-8 text-lg">
              Contact our sales team today to discuss a tailored solution for your business.
            </p>
            <a href={mailtoLink}>
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg rounded-full font-bold shadow-xl">
                Contact Sales <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ForTeamsPage;