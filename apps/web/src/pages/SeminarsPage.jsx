import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  Calendar,
  Video,
  Lock,
  ArrowRight,
  PlayCircle,
  Clock,
  Users,
  Crown,
  Star,
  Shield,
  Wrench,
  ExternalLink,
  BookOpen,
  Headphones
} from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import { Card, CardContent } from "@/components/ui/card.jsx";
import { useAuth } from "@/contexts/AuthContext.jsx";
import apiServerClient from "@/lib/apiServerClient.js";

// ─── Data: what each tier sees ────────────────────────────────────────────────

// const VIDEOS_BY_TIER = {
//   Standard: [
//     {
//       title: "Introduction to Equipment Leasing",
//       quarter: "Q1 2025",
//       duration: "38:00",
//       description:
//         "Foundations of equipment finance: structures, parties, and core concepts.",
//     },
//     {
//       title: "Understanding Lease vs Loan",
//       quarter: "Q2 2025",
//       duration: "41:00",
//       description:
//         "How to position leasing against traditional debt financing for clients.",
//     },
//   ],
//   Premium: [
//     {
//       title: "Introduction to Equipment Leasing",
//       quarter: "Q1 2025",
//       duration: "38:00",
//       description:
//         "Foundations of equipment finance: structures, parties, and core concepts.",
//     },
//     {
//       title: "Understanding Lease vs Loan",
//       quarter: "Q2 2025",
//       duration: "41:00",
//       description:
//         "How to position leasing against traditional debt financing for clients.",
//     },
//     {
//       title: "Advanced Deal Structuring",
//       quarter: "Q3 2025",
//       duration: "52:00",
//       description:
//         "Complex multi-asset structures, residual value strategies and risk mitigation.",
//     },
//     {
//       title: "Credit Analysis Deep Dive",
//       quarter: "Q4 2025",
//       duration: "47:00",
//       description:
//         "Reading financials, assessing creditworthiness, and pricing risk into deals.",
//     },
//   ],
//   Elite: [
//     {
//       title: "Introduction to Equipment Leasing",
//       quarter: "Q1 2025",
//       duration: "38:00",
//       description:
//         "Foundations of equipment finance: structures, parties, and core concepts.",
//     },
//     {
//       title: "Understanding Lease vs Loan",
//       quarter: "Q2 2025",
//       duration: "41:00",
//       description:
//         "How to position leasing against traditional debt financing for clients.",
//     },
//     {
//       title: "Advanced Deal Structuring",
//       quarter: "Q3 2025",
//       duration: "52:00",
//       description:
//         "Complex multi-asset structures, residual value strategies and risk mitigation.",
//     },
//     {
//       title: "Credit Analysis Deep Dive",
//       quarter: "Q4 2025",
//       duration: "47:00",
//       description:
//         "Reading financials, assessing creditworthiness, and pricing risk into deals.",
//     },
//     {
//       title: "IFRS 16 Masterclass",
//       quarter: "Q1 2026",
//       duration: "65:00",
//       description:
//         "Comprehensive walkthrough of lessee and lessor accounting under IFRS 16.",
//     },
//     {
//       title: "VIP: Market Outlook & Deal Flow",
//       quarter: "Q2 2026",
//       duration: "58:00",
//       description:
//         "Elite-only session: industry leaders discuss 2026 market conditions and opportunities.",
//     },
//   ],
// };

const PODCAST_EPISODES = [
  {
    title: "Why Mature Markets Embrace leasing",
    episode: "Ep 1",
    duration: "15 min",
    // description:
    //   "We break down real-world scenarios where leasing beats financing — and when it doesn't. First episode in our Equipment Finance Deep Dive series.",
    spotifyEmbedUrl:
      "https://open.spotify.com/embed/episode/1TYqN8pMzDc35SDpuPIMuY",
    releaseDate: "April 2026",
  },
  // {
  //   title: "Residual Value Risks Uncovered",
  //   episode: "Ep 2",
  //   duration: "38 min",
  //   description:
  //     "How to stress-test RV assumptions and protect your portfolio from market volatility.",
  //   spotifyEmbedUrl: "", // add future episode link here
  //   releaseDate: "May 2026",
  // },
  // {
  //   title: "IFRS 16 for Lessors (Made Simple)",
  //   episode: "Ep 3",
  //   duration: "51 min",
  //   description:
  //     "Practical walkthrough of lease classification, P&L impact, and disclosure tricks.",
  //   spotifyEmbedUrl: "",
  //   releaseDate: "June 2026",
  // },
];

const SEMINARS_BY_TIER = {
  Standard: [
    {
      title: "Leasing Fundamentals Bootcamp",
      date: "TBD",
      time: "TBD",
      description:
        "Live virtual session covering the core mechanics of equipment leasing.",
      status: "upcoming",
    },
  ],
  Premium: [
    {
      title: "Leasing Fundamentals Bootcamp",
      date: "TBD",
      time: "TBD",
      description:
        "Live virtual session covering the core mechanics of equipment leasing.",
      status: "upcoming",
    },
    {
      title: "Advanced Structuring Workshop",
      date: "TBD",
      time: "TBD",
      description:
        "Premium members get an extra deep-dive session on complex deal structures.",
      status: "upcoming",
    },
  ],
  Elite: [
    {
      title: "Leasing Fundamentals Bootcamp",
      date: "TBD",
      time: "TBD",
      description:
        "Live virtual session covering the core mechanics of equipment leasing.",
      status: "upcoming",
    },
    {
      title: "Advanced Structuring Workshop",
      date: "TBD",
      time: "TBD",
      description:
        "Premium members get an extra deep-dive session on complex deal structures.",
      status: "upcoming",
    },
    {
      title: "Elite Strategy Round-Table",
      date: "TBD",
      time: "TBD",
      description:
        "Closed-door session with industry leaders. Elite members only.",
      status: "upcoming",
    },
  ],
};

const ELITE_TOOLS = [
  {
    title: "IFRS 16 Lease Calculator",
    description:
      "Calculate right-of-use assets, lease liabilities, and amortization schedules under IFRS 16.",
    file: "VGL_IFRS16_Calculator.html",
    icon: "📊",
  },
  {
    title: "Lease vs Buy Analyser",
    description:
      "Compare the total cost of leasing versus buying equipment with NPV analysis.",
    file: "VGL_LeasevsBuy_Analyser.html",
    icon: "⚖️",
  },
  {
    title: "IFRS 16 Classification Tree",
    description:
      "Interactive decision tree to classify leases correctly under IFRS 16.",
    file: "VGL_IFRS16_Classification_Tree.html",
    icon: "🌿",
  },
  {
    title: "Deal ROI Calculator",
    description:
      "Assess deal profitability, yield, and return on investment for equipment finance deals.",
    file: "VGL_Deal_ROI_Calculator.html",
    icon: "💹",
  },
  {
    title: "Lease Modification Calculator",
    description:
      "Model the impact of lease modifications on liability and ROU asset under IFRS 16.",
    file: "lease-modification-calculator.html",
    icon: "🔧",
  },
  {
    title: "GLI Learner Toolkit",
    description:
      "A comprehensive learning resource toolkit for equipment finance professionals.",
    file: "GLI_Learner_Toolkit.html",
    icon: "📚",
  },
  {
    title: "Lease vs Loan Comparator",
    description:
      "A comprehensive learning resource toolkit for determining a lease v",
    file: "GLI_Learner_Toolkit.html",
    icon: "📚",
  },
  {
    title: "Lease vs Loan Comparator (Tool 1)",
    description:
      "Interactive tool to compare leasing versus financing scenarios, highlighting cash flow and ownership impacts.",
    file: "VGL_Tool1_LeaseVsLoanComparator.html",
    icon: "⚖️",
  },
  {
    title: "Lease Credit Appraisal Template",
    description:
      "Structured template for assessing lessee creditworthiness, including financial ratios and risk scoring.",
    file: "VGL_Tool2_LeaseCreditAppraisalTemplate.html",
    icon: "📊",
  },
  {
    title: "RV Stress Test Calculator",
    description:
      "Tool for stress testing residual values under different market scenarios to evaluate lease-end risk exposure.",
    file: "VGL_Tool3_RVStressTestCalculator.html",
    icon: "📉",
  },
  {
    title: "Lease Portfolio Dashboard",
    description:
      "Visual dashboard to monitor key portfolio metrics, concentration risks, and lease performance trends.",
    file: "VGL_Tool4_LeasePortfolioDashboard.html",
    icon: "📈",
  },
  {
    title: "Documentation Checklist",
    description:
      "Comprehensive lease documentation checklist to ensure compliance and completeness throughout the lease lifecycle.",
    file: "VGL_Tool5_DocumentationChecklist.html",
    icon: "✅",
  },
  {
    title: "DFI ESG Assessment",
    description:
      "Tool for integrating ESG criteria into lease and equipment financing decisions aligned with DFI standards.",
    file: "VGL_Tool6_DFI_ESG_Assessment.html",
    icon: "🌱",
  },
];

// ─── Helper components ────────────────────────────────────────────────────────

const CheckCircle2 = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const TierBadge = ({ tier }) => {
  const config = {
    Elite: {
      icon: Crown,
      color: "text-amber-400",
      bg: "bg-amber-500/10 border-amber-500/20",
    },
    Premium: {
      icon: Star,
      color: "text-purple-400",
      bg: "bg-purple-500/10 border-purple-500/20",
    },
    Standard: {
      icon: Shield,
      color: "text-blue-400",
      bg: "bg-blue-500/10 border-blue-500/20",
    },
  };
  const { icon: Icon, color, bg } = config[tier] || config.Standard;
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-bold uppercase tracking-wide ${color} ${bg}`}
    >
      <Icon className="w-4 h-4" /> {tier} Member Access
    </div>
  );
};

// ─── Tab definitions ──────────────────────────────────────────────────────────

const TABS = [
  { id: "videos", label: "Podcast Series", icon: Headphones },
  { id: "seminars", label: "Seminars", icon: Calendar },
  { id: "tools", label: "Industry Tools", icon: Wrench, eliteOnly: true },
];

// ─── Main Page ────────────────────────────────────────────────────────────────

const SeminarsPage = () => {
  const { currentUser, isAuthenticated } = useAuth();
  const [isMember, setIsMember] = useState(false);
  const [loading, setLoading] = useState(true);
  const [membershipTier, setMembershipTier] = useState(null);
  const [activeTab, setActiveTab] = useState("videos");
  const [activeToolIndex, setActiveToolIndex] = useState(null);

  useEffect(() => {
    const checkMembership = async () => {
      if (!isAuthenticated || !currentUser) {
        setLoading(false);
        return;
      }
      try {
        const response = await apiServerClient.fetch(
          `/membership/status?userId=${currentUser.id}`,
        );
        if (response.ok) {
          const data = await response.json();
          if (data.hasMembership && data.status === "active") {
            setIsMember(true);
            setMembershipTier(data.tier);
          }
        }
      } catch (error) {
        console.error("Error checking membership:", error);
      } finally {
        setLoading(false);
      }
    };
    checkMembership();
  }, [currentUser, isAuthenticated]);

  const isElite = membershipTier === "Elite";
  const videos = PODCAST_EPISODES[membershipTier] || [];
  const seminars = SEMINARS_BY_TIER[membershipTier] || [];
  const visibleTabs = TABS.filter((t) => !t.eliteOnly || isElite);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white pb-24">
      <Helmet>
        <title>Member Hub - Velocity Global Leasing</title>
        <meta
          name="description"
          content="Exclusive content for Velocity Global Leasing members."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1702389159527-39270023a337?q=80&w=2500&auto=format&fit=crop"
            alt="Virtual seminar"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/95 to-slate-950" />
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {isMember && membershipTier && (
              <div className="flex justify-center mb-6">
                <TierBadge tier={membershipTier} />
              </div>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Member Hub
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mx-auto max-w-3xl mb-10">
              Your exclusive access to video content, live seminars
              {isElite ? ", and industry-grade financial tools." : "."}
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-slate-300">
              <div className="flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-lg border border-slate-800">
                <Video className="w-5 h-5 text-blue-400" /> Video Library
              </div>
              <div className="flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-lg border border-slate-800">
                <Calendar className="w-5 h-5 text-purple-400" /> Live Seminars
              </div>
              {isElite && (
                <div className="flex items-center gap-2 bg-amber-500/10 px-4 py-2 rounded-lg border border-amber-500/20">
                  <Wrench className="w-5 h-5 text-amber-400" /> Industry Tools
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-12 max-w-5xl">
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
          </div>
        ) : isMember ? (
          <>
            {/* Tab Nav */}
            <div className="flex gap-2 mb-10 border-b border-slate-800 pb-0">
              {visibleTabs.map(({ id, label, icon: Icon, eliteOnly }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-t-lg border-b-2 transition-colors ${
                    activeTab === id
                      ? eliteOnly
                        ? "border-amber-400 text-amber-400"
                        : "border-blue-500 text-white"
                      : "border-transparent text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                  {eliteOnly && (
                    <span className="px-1.5 py-0.5 rounded text-xs bg-amber-500/20 text-amber-400 font-bold">
                      ELITE
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* ── Video Library Tab ── */}
            {/* {activeTab === "videos" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      Video Library
                    </h2>
                    <p className="text-slate-400 mt-1">
                      {videos.length} videos available on your {membershipTier}{" "}
                      plan
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {videos.map((v, i) => (
                    <Card
                      key={i}
                      className="bg-slate-900/50 border-slate-800 overflow-hidden group"
                    >
                      <div className="aspect-video bg-slate-800 relative flex items-center justify-center">
                        <PlayCircle className="w-16 h-16 text-slate-600 group-hover:text-blue-500 transition-colors duration-300" />
                        <div className="absolute bottom-3 right-3 bg-black/70 px-2 py-1 rounded text-xs font-medium text-white flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {v.duration}
                        </div>
                        <div className="absolute top-3 left-3 bg-blue-600/80 px-2 py-1 rounded text-xs font-bold text-white">
                          {v.quarter}
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h4 className="text-lg font-bold text-white mb-2">
                          {v.title}
                        </h4>
                        <p className="text-sm text-slate-400">
                          {v.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )} */}

            {activeTab === "videos" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      🎙️ Podcast Series
                    </h2>
                    <p className="text-slate-400 mt-1">
                      Equipment finance insights — listen directly on the page
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {PODCAST_EPISODES.map((ep, i) => (
                    <Card
                      key={i}
                      className="bg-slate-900/50 border-slate-800 overflow-hidden group"
                    >
                      {/* Podcast card header with audio wave icon */}
                      <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 relative flex flex-col items-center justify-center">
                        {/* <div className="text-6xl mb-3">🎧</div> */}
                        <div className="flex gap-1 items-center">
                          <div className="w-2 h-8 bg-emerald-400 rounded-full animate-pulse" />
                          <div className="w-2 h-5 bg-emerald-400 rounded-full animate-pulse delay-75" />
                          <div className="w-2 h-10 bg-emerald-400 rounded-full animate-pulse delay-150" />
                        </div>
                        <div className="absolute bottom-3 right-3 bg-black/70 px-2 py-1 rounded text-xs font-medium text-white flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {ep.duration}
                        </div>
                        <div className="absolute top-3 left-3 bg-emerald-600 px-2 py-1 rounded text-xs font-bold text-white">
                          {ep.episode}
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <h4 className="text-lg font-bold text-white mb-2">
                          {ep.title}
                        </h4>
                        <p className="text-sm text-slate-400 mb-4">
                          {ep.description}
                        </p>
                        <div className="text-xs text-slate-500 mb-4">
                          📅 Released: {ep.releaseDate}
                        </div>

                        {/* Spotify embed - only shown if URL exists */}
                        {ep.spotifyEmbedUrl ? (
                          <iframe
                            src={ep.spotifyEmbedUrl}
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl"
                            title={`Listen to ${ep.title}`}
                          />
                        ) : (
                          <div className="bg-slate-800/50 rounded-xl p-4 text-center text-slate-400 text-sm">
                            🎧 Episode coming soon
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── Seminars Tab ── */}
            {activeTab === "seminars" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white">
                    Upcoming Seminars
                  </h2>
                  <p className="text-slate-400 mt-1">
                    {seminars.length} seminars on your {membershipTier} plan
                  </p>
                </div>

                {/* Next seminar notice */}
                <div className="bg-gradient-to-br from-blue-900/20 to-slate-900 border border-blue-800/30 rounded-2xl p-8 text-center mb-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                  <Calendar className="w-10 h-10 text-blue-400 mx-auto mb-4 relative z-10" />
                  <h3 className="text-xl font-bold text-white mb-2 relative z-10">
                    Registration opening soon
                  </h3>
                  <p className="text-slate-400 max-w-xl mx-auto relative z-10">
                    You'll receive an email as soon as registration opens for
                    each session below.
                  </p>
                </div>

                <div className="space-y-4">
                  {seminars.map((s, i) => (
                    <Card key={i} className="bg-slate-900/50 border-slate-800">
                      <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 shrink-0">
                            <Calendar className="w-5 h-5 text-blue-400" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-white mb-1">
                              {s.title}
                            </h4>
                            <p className="text-sm text-slate-400 mb-2">
                              {s.description}
                            </p>
                            <div className="flex items-center gap-3 text-xs text-slate-500">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" /> {s.date}
                              </span>
                              <span>{s.time}</span>
                            </div>
                          </div>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase border border-emerald-500/20 shrink-0">
                          Upcoming
                        </span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── Industry Tools Tab (Elite only) ── */}
            {activeTab === "tools" && isElite && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white">
                    Industry Tools
                  </h2>
                  <p className="text-slate-400 mt-1">
                    Proprietary calculators and decision tools — Elite members
                    only
                  </p>
                </div>

                {activeToolIndex !== null ? (
                  // ── Tool iframe viewer ──
                  <div>
                    <button
                      onClick={() => setActiveToolIndex(null)}
                      className="flex items-center gap-2 text-slate-400 hover:text-white mb-6 text-sm font-medium transition-colors"
                    >
                      ← Back to tools
                    </button>
                    <div className="rounded-2xl overflow-hidden border border-amber-500/20 bg-slate-900">
                      <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
                        <h3 className="font-bold text-white">
                          {ELITE_TOOLS[activeToolIndex].title}
                        </h3>

                        <a
                          href={`/tools/${ELITE_TOOLS[activeToolIndex].file}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300"
                        >
                          Open in new tab <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                      <iframe
                        src={`/tools/${ELITE_TOOLS[activeToolIndex].file}`}
                        className="w-full"
                        style={{ height: "80vh" }}
                        title={ELITE_TOOLS[activeToolIndex].title}
                      />
                    </div>
                  </div>
                ) : (
                  // ── Tool cards grid ──
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ELITE_TOOLS.map((tool, i) => (
                      <Card
                        key={i}
                        className="bg-slate-900/50 border-slate-800 hover:border-amber-500/30 transition-colors cursor-pointer group"
                        onClick={() => setActiveToolIndex(i)}
                      >
                        <CardContent className="p-6">
                          <div className="text-4xl mb-4">{tool.icon}</div>
                          <h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                            {tool.title}
                          </h4>
                          <p className="text-sm text-slate-400 leading-relaxed mb-4">
                            {tool.description}
                          </p>
                          <div className="flex items-center gap-1 text-amber-400 text-sm font-medium">
                            Launch tool <ArrowRight className="w-4 h-4" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </>
        ) : (
          /* Non-member gated view */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="bg-slate-900/80 border-slate-800 shadow-2xl text-center p-8 md:p-16">
              <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-8 border border-slate-700">
                <Lock className="w-10 h-10 text-slate-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Members-Only Content
              </h2>
              <p className="text-xl text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
                Get access to exclusive video content, live seminars, and
                industry-grade financial tools.
              </p>
              <div className="bg-slate-950/50 rounded-2xl p-6 mb-10 border border-slate-800/50 text-left max-w-lg mx-auto">
                <h3 className="font-semibold text-white mb-4 text-center">
                  What's included:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Video library (tier-based access)",
                    "Live virtual seminars 4x per year",
                    "Proprietary financial calculators (Elite)",
                    "1-on-1 strategy sessions (Elite)",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/membership">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-6 text-lg rounded-full"
                >
                  Upgrade to Membership <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              {!isAuthenticated && (
                <p className="mt-6 text-sm text-slate-500">
                  Already a member?{" "}
                  <Link to="/login" className="text-blue-400 hover:underline">
                    Log in here
                  </Link>
                </p>
              )}
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SeminarsPage;
