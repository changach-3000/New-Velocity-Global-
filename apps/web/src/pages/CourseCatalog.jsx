import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useCourseData } from "@/contexts/CourseDataContext";
import { useRoleFilter } from "@/hooks/useRoleFilter";
import CourseCard from "@/components/CourseCard";
import { motion } from "framer-motion";
import { Filter, Loader2, RefreshCw, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const CourseCatalog = () => {
  // Use deduplicated courses from context with robust error handling
  const { courses, loading, error, refreshCourses } = useCourseData();
  const [sortBy, setSortBy] = useState("title");
  const [filterInstructor, setFilterInstructor] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const { role, setRole } = useRoleFilter();

  // NEW: Normalize instructor names helper
  const normalizeInstructorName = (name) => {
    if (!name) return "";
    return name
      .toLowerCase()
      .replace(/[^\w\s]/g, "") // Remove punctuation (., -, etc.)
      .replace(/\s+/g, " ") // Normalize multiple spaces
      .trim();
  };

  // Get unique instructors for filter
  // const instructors = [
  //   "all",
  //   ...new Set(courses.map((c) => c.instructor_name).filter(Boolean)),
  // ];

  // UPDATED: Get unique normalized instructors
  const instructors = [
    "all",
    ...Array.from(
      new Set(
        courses
          .map((c) => normalizeInstructorName(c.instructor_name))
          .filter(Boolean),
      ),
    ).map((normalized) => {
      // Find original display name (take first match)
      const original = courses.find(
        (c) => normalizeInstructorName(c.instructor_name) === normalized,
      )?.instructor_name;
      return original || normalized;
    }),
  ];

  const roleDisplayNames = {
    financier: "Financier",
    sales: "Sales",
    business_owner: "Business Owner",
    vendor: "Vendor",
    tax_accountant: "Tax Accountant",
    lessor: "Leasing Company (Lessor)",
    esg: "ESG and Sustainable Finance Programme",
  };

  const roleKeywords = {
    financier: [
      "lease securitization",
      "structured finance",
      "credit evaluation",
      "portfolio management",
      "financier",
      "Measuring Financial Performance",
      "Introduction to Managed Services",
      "Comprehensive Risk Analysis",
      "Strategic Funding Options for Managed Services",
      "Legal, Operational, and Asset Readiness",
      "Go-to-Market Strategy",
      "Introduction to Equipment Leasing for Banks	Banking",
      "Regulatory Compliance in Kenyan Lease Finance	Banking",
      "Structuring Complex Lease Deals	Banking",
      "Loan vs Lease — A Banker's Comparative Guide",
    ],
    sales: [
      "closing techniques",
      "negotiation",
      "value propositions",
      "deal management",
      "sales",
    ],
    business_owner: [
      "Understanding Equipment Leasing Basics",
      "portfolio management",
      "Maximizing Value from Equipment Leasing",
      "Managing Your Leased Equipment",
      "Leasing as a Business Growth Tool Business Owner",
      "Understanding Your Lease Agreement",
      "Lease vs Buy vs Loan — Making the Right Call",
      "IFRS 16 for Corporate Finance Teams",
      "Negotiating Lease Terms with Your Lessor",
      "Fleet Leasing for Growing Businesses",
      "Medical Equipment Leasing for Healthcare Providers",
      "ICT and Technology Leasing",
      "Construction and Heavy Equipment Leasing",
      "Agricultural Equipment Leasing",
    ],
    vendor: [
      "vendor leasing programs",
      "equipment financing",
      "vendor relationships",
      "vendor",
      "Foundations of Vendor Leasing",
      "Strategic Program Selection",
    ],
    tax_accountant: [
      "tax optimization",
      "lease accounting",
      "deductions",
      "financial strategies",
      "tax accountant",
      "Lessee Accounting under IFRS 16 ",
      "Lessor Accounting under IFRS 16",
      "Introduction to IFRS 16",
      "Lessee Accounting under IFRS 16",
      "Lessor Accounting under IFRS 16",
      "Transition and Impact Analysis",
      "Tax Treatment of Leases in Kenya",
      "Capital Allowances and Lease Deductibility",
      "IFRS 16 vs IAS 17 — Transition and Ongoing Impact",
      "VAT on Leasing — Rentals, Import Duties and Tax Efficiency",
      "Advising Clients on Lease vs Buy",
    ],
    esg: [
      // Beginner Level (Modules 01-07)
      "Introduction to ESG",
      "ESG and the Financial System",
      "Climate Science for Finance Professionals",
      "Introduction to Carbon Markets",
      "Introduction to Green Finance & Sustainable Lending",
      "Introduction to Solar Energy & Clean Assets",
      "ESG Reporting Frameworks",

      // Intermediate Level (Modules 08-13)
      "Greenwashing — Identification & Risk",
      "ESG Due Diligence & Risk Assessment",
      "Solar Asset Leasing — Applied Finance",
      "Carbon Credits — Applied Finance & Accounting",
      "ESG and Corporate Governance",
      "Social Impact Measurement & Reporting",

      // Mastery Level (Modules 14-20)
      "ESG Strategy for Corporates & Financial Institutions",
      "Advanced Solar Leasing — Deal Structuring & Project Finance",
      "Advanced Carbon Markets — Trading, Strategy & Portfolio Management",
      "ESG Audit, Assurance & Advisory",
      "Sustainable Finance Product Design",
      "ESG and Institutional Investors",
      "ESG Advisory Simulation",
    ],
  };

  const lessorSpecificCourses = [
    "measuring financial performance",
    "key financial ratios for lessors",
    "funding the leasing company",
    "advanced funding sources and structures",
    "Collections, Recoveries and Distressed Assets",
    "Pricing a Lease — IRR, Yield and Margin",
    "Vendor and Supplier Relationships",
  ];

  // Filter and sort courses
  const filteredCourses = courses
    .filter((course) => {
      // NEW SEARCH FILTER - add this first
      if (searchQuery) {
        const searchableText =
          `${course.title || ""} ${course.description || ""} ${course.learning_outcomes || ""}`.toLowerCase();
        if (!searchableText.includes(searchQuery.toLowerCase())) {
          return false;
        }
      }

      // Instructor filter
      if (
        filterInstructor !== "all" &&
        normalizeInstructorName(course.instructor_name) !==
          normalizeInstructorName(filterInstructor)
      ) {
        return false;
      }

      // Role filter
      if (role) {
        if (role === "lessor") {
          // Strict filtering for lessor role
          const courseTitleLower = (course.title || "").toLowerCase();
          const matchesLessor = lessorSpecificCourses.some((title) =>
            courseTitleLower.includes(title),
          );
          if (!matchesLessor) return false;
        } else if (roleKeywords[role]) {
          // Keyword filtering for other roles
          const keywords = roleKeywords[role];
          const searchableText =
            `${course.title || ""} ${course.description || ""} ${course.learning_outcomes || ""}`.toLowerCase();
          const matchesRole = keywords.some((kw) =>
            searchableText.includes(kw.toLowerCase()),
          );
          if (!matchesRole) return false;
        }
      }

      return true;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return (a.price || 0) - (b.price || 0);
      if (sortBy === "price-high") return (b.price || 0) - (a.price || 0);
      if (sortBy === "duration")
        return (b.duration_hours || 0) - (a.duration_hours || 0);
      return (a.title || "").localeCompare(b.title || "");
    });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-[#3b82f6] animate-spin mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading courses...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-xl shadow-lg max-w-md">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <p className="text-red-600 text-lg font-semibold mb-2">
            Error loading courses
          </p>
          <p className="text-gray-600 mb-6">{error}</p>
          <Button onClick={refreshCourses} className="gap-2">
            <RefreshCw className="w-4 h-4" /> Retry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Course Catalog - Master the Art of Leasing</title>
        <meta
          name="description"
          content="Browse our comprehensive catalog of leasing courses taught by industry experts."
        />
      </Helmet>

      <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] py-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Course Catalog
          </motion.h1>
          <p className="text-xl text-blue-100">
            Explore {courses.length} expert-led courses to advance your career
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 pb-12">
        {/* Role Indicator & Controls */}
        {role && roleDisplayNames[role] && (
          <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <Badge className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-sm">
                  Viewing {roleDisplayNames[role]} Courses
                </Badge>
              </div>
              <p className="text-sm text-blue-800">
                Found {filteredCourses.length} course
                {filteredCourses.length !== 1 ? "s" : ""} tailored for your
                role.
              </p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button
                variant="outline"
                onClick={() => setRole(null)}
                className="flex-1 sm:flex-none border-blue-200 text-blue-700 hover:bg-blue-100 bg-white"
              >
                View All Courses
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-700 text-white">
                    Switch Role
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {Object.entries(roleDisplayNames).map(([key, name]) => (
                    <DropdownMenuItem
                      key={key}
                      onClick={() => setRole(key)}
                      className={
                        role === key
                          ? "bg-blue-50 font-medium text-blue-700"
                          : "cursor-pointer"
                      }
                    >
                      {name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        )}

        {/* Filters */}
        {/* <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-[#1e3a8a]" />
            <h2 className="text-lg font-semibold text-[#1e3a8a]">
              Filter & Sort
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent text-gray-900"
              >
                <option value="title">Title (A-Z)</option>
                <option value="price-low">Price (Low to High)</option>
                <option value="price-high">Price (High to Low)</option>
                <option value="duration">Duration (Longest First)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Instructor
              </label>
              <select
                value={filterInstructor}
                onChange={(e) => setFilterInstructor(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent text-gray-900"
              >
                {instructors.map((instructor) => (
                  <option key={instructor} value={instructor}>
                    {instructor === "all" ? "All Instructors" : instructor}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div> */}

        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-[#1e3a8a]" />
            <h2 className="text-lg font-semibold text-[#1e3a8a]">
              Filter & Sort
            </h2>
          </div>

          {/* NEW SEARCH BAR */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Courses
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search by title, description, or outcomes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent text-gray-900"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Existing grid stays the same */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent text-gray-900"
              >
                <option value="title">Title (A-Z)</option>
                <option value="price-low">Price (Low to High)</option>
                <option value="price-high">Price (High to Low)</option>
                <option value="duration">Duration (Longest First)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Instructor
              </label>
              <select
                value={filterInstructor}
                onChange={(e) => setFilterInstructor(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent text-gray-900"
              >
                {instructors.map((instructor) => (
                  <option key={instructor} value={instructor}>
                    {instructor === "all" ? "All Instructors" : instructor}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow-sm">
            <p className="text-gray-600 text-lg mb-4">
              No courses found matching your filters.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setFilterInstructor("all");
                setSortBy("title");
                setRole(null);
                setSearchQuery("");
              }}
            >
              Clear All Filters
            </Button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CourseCatalog;
