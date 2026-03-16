import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  UserCircle,
  Briefcase,
  Calculator,
  Building2,
  ArrowRight,
} from "lucide-react";

const roles = [
  {
    title: "Funder",
    slug: "financier",
    icon: TrendingUp,
    colorTheme: {
      iconBg: "bg-blue-500/10",
      iconText: "text-blue-400",
      borderHover: "hover:border-blue-500/30",
      shadowHover: "hover:shadow-blue-900/20",
    },
    description: "Master risk, return metrics, and complex lease accounting.",
  },
  {
    title: "Sales",
    slug: "sales",
    icon: Users,
    colorTheme: {
      iconBg: "bg-emerald-500/10",
      iconText: "text-emerald-400",
      borderHover: "hover:border-emerald-500/30",
      shadowHover: "hover:shadow-emerald-900/20",
    },
    description: "Close more deals with structured financing solutions.",
  },
  {
    title: "Vendor",
    slug: "vendor",
    icon: Award,
    colorTheme: {
      iconBg: "bg-rose-500/10",
      iconText: "text-rose-400",
      borderHover: "hover:border-rose-500/30",
      shadowHover: "hover:shadow-rose-900/20",
    },
    description:
      "Integrate financing into your sales process to increase deal size.",
  },
  {
    title: "Business Owner",
    slug: "business_owner",
    icon: Briefcase,
    colorTheme: {
      iconBg: "bg-amber-500/10",
      iconText: "text-amber-400",
      borderHover: "hover:border-amber-500/30",
      shadowHover: "hover:shadow-amber-900/20",
    },
    description: "Optimize your capital stack and preserve cash flow.",
  },
  {
    title: "Tax Accountant",
    slug: "tax_accountant",
    icon: Calculator,
    colorTheme: {
      iconBg: "bg-indigo-500/10",
      iconText: "text-indigo-400",
      borderHover: "hover:border-indigo-500/30",
      shadowHover: "hover:shadow-indigo-900/20",
    },
    description: "Navigate ASC 842, IFRS 16, and tax implications.",
  },
  {
    title: "Leasing Company (Lessor)",
    slug: "lessor",
    icon: Building2,
    colorTheme: {
      iconBg: "bg-cyan-500/10",
      iconText: "text-cyan-400",
      borderHover: "hover:border-cyan-500/30",
      shadowHover: "hover:shadow-cyan-900/20",
    },
    description: "Scale your operations and manage portfolio risk.",
  },
];

const RolesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 px-4 bg-slate-950 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/50 via-slate-950 to-slate-950 pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight text-balance">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-white to-slate-400">
              Trusted by 500+ leasing and finance professionals
            </span>
          </h2>
          <p className="text-slate-400 text-lg font-light">
            Select your role to discover tailored learning pathways designed for
            your specific career goals.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="h-full"
              >
                <Link
                  to={`/roles/${role.slug}`}
                  className="block h-full group outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
                >
                  <div
                    className={`
                    relative h-full flex flex-col p-8 rounded-2xl
                    bg-gradient-to-b from-slate-800/40 to-slate-900/40 backdrop-blur-sm
                    border border-slate-800/60
                    transition-all duration-300 ease-out
                    hover:scale-[1.02] hover:bg-slate-800/60 hover:shadow-xl
                    ${role.colorTheme.borderHover} ${role.colorTheme.shadowHover}
                  `}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${role.colorTheme.iconBg}`}
                      >
                        <Icon
                          className={`w-6 h-6 ${role.colorTheme.iconText}`}
                          strokeWidth={2}
                        />
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-slate-300 transition-colors duration-300 transform group-hover:translate-x-1" />
                    </div>

                    <div className="mt-auto">
                      <h3 className="text-xl font-semibold text-white mb-2 tracking-wide">
                        I'm a {role.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed font-light">
                        {role.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default RolesSection;
