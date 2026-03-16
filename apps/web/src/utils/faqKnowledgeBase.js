export const faqs = [
  // --- Platform & Course FAQs ---
  {
    id: 'platform-certificates',
    question: "Do you offer certificates?",
    phrasings: [
      "Will I get a certificate?",
      "Is there a certificate of completion?",
      "Do I get certified?",
      "Certificate offered",
      "Course certification"
    ],
    answer: "Yes, we offer certificates upon course completion! You can download them directly from your dashboard once you finish all lessons and assessments.",
    detailedAnswer: "Yes! Every course on our platform includes a verifiable certificate of completion. Once you finish all lessons and pass the final assessment, a 'Download Certificate' button will appear on your course dashboard. You can share this on LinkedIn or print it for your records.",
    keywords: ["certificate", "certification", "diploma", "completion", "certified", "document"],
    intent: "platform_certificates",
    tags: ["features", "certificates"],
    relatedIds: ["platform-features", "available-courses"]
  },
  {
    id: 'beginner-courses',
    question: "Do you have beginner-friendly courses?",
    phrasings: [
      "I am a beginner",
      "Start from scratch",
      "Introductory courses",
      "New to leasing",
      "Where to start"
    ],
    answer: "Absolutely! We recommend starting with 'Leasing 101' or 'Introduction to Finance'. These are designed specifically for those new to the industry.",
    detailedAnswer: "We have several courses tailored for beginners. 'Leasing 101' covers the fundamentals of equipment leasing, while 'Introduction to Finance' helps you understand the basic financial concepts. No prior experience is required for these introductory tracks.",
    keywords: ["beginner", "start", "intro", "introduction", "new", "basic", "101"],
    intent: "platform_beginner",
    tags: ["courses", "beginner"],
    relatedIds: ["available-courses", "enrollment-process"]
  },
  {
    id: 'available-courses',
    question: "What courses are available?",
    phrasings: [
      "List of courses",
      "Course catalog",
      "What can I learn?",
      "Show me the courses",
      "Topics covered"
    ],
    answer: "We offer a wide range of courses in Equipment Leasing, Financial Analysis, and Sales Strategies. Check out our Course Catalog for the full list!",
    detailedAnswer: "Our curriculum is divided into three main pillars: \n1. **Leasing Fundamentals** (Operations, Lifecycle)\n2. **Financial Analysis** (Credit, Risk, Rates)\n3. **Sales Mastery** (Negotiation, Vendor Relations)\n\nVisit the 'Courses' page to browse our full catalog.",
    keywords: ["courses", "catalog", "available", "list", "topics", "learn", "subjects"],
    intent: "platform_courses",
    tags: ["courses", "catalog"],
    relatedIds: ["beginner-courses", "pricing-info"]
  },
  {
    id: 'pricing-info',
    question: "How much do courses cost?",
    phrasings: [
      "Course pricing",
      "Is it free?",
      "Cost of enrollment",
      "Tuition fees",
      "Price list"
    ],
    answer: "Our courses are priced individually, ranging from free introductory modules to premium advanced certifications. Check specific course pages for exact pricing.",
    detailedAnswer: "We offer flexible pricing options. Many introductory modules are free to help you get started. Advanced certification tracks and specialized masterclasses are paid courses. You can view the price of each course clearly listed on its enrollment card in the catalog.",
    keywords: ["price", "cost", "fee", "tuition", "free", "payment", "expensive"],
    intent: "platform_features",
    tags: ["pricing", "cost"],
    relatedIds: ["enrollment-process", "available-courses"]
  },
  {
    id: 'enrollment-process',
    question: "How do I enroll in a course?",
    phrasings: [
      "Sign up for a course",
      "Join a class",
      "Registration process",
      "How to buy a course",
      "Start learning"
    ],
    answer: "Enrolling is easy! Just navigate to the Course Catalog, click on the course you're interested in, and hit the 'Enroll Now' button.",
    detailedAnswer: "To enroll:\n1. Go to the **Course Catalog**.\n2. Click on a course card to view details.\n3. Click the **Enroll Now** button.\n4. If it's a paid course, you'll be guided through a secure checkout. If it's free, you'll get instant access!",
    keywords: ["enroll", "register", "sign up", "join", "buy", "start"],
    intent: "platform_features",
    tags: ["enrollment", "process"],
    relatedIds: ["available-courses", "pricing-info"]
  },
  {
    id: 'platform-features',
    question: "What features does the platform offer?",
    phrasings: [
      "Platform capabilities",
      "What can I do here?",
      "Dashboard features",
      "Tools available",
      "Badges and tracking"
    ],
    answer: "Our platform features real-time progress tracking, interactive quizzes, achievement badges, and a comprehensive resource library to support your learning journey.",
    detailedAnswer: "We've built a comprehensive learning environment including:\n- **Progress Tracking:** See exactly where you left off.\n- **Badges & Gamification:** Earn rewards for completing milestones.\n- **Resource Library:** Download templates, guides, and glossaries.\n- **Interactive Quizzes:** Test your knowledge as you go.",
    keywords: ["features", "platform", "dashboard", "tools", "badges", "tracking", "progress"],
    intent: "platform_features",
    tags: ["features", "platform"],
    relatedIds: ["available-courses", "platform-certificates"]
  },

  // --- Existing Leasing FAQs ---
  {
    id: 'leasing-definition',
    question: "What is equipment leasing?",
    phrasings: [
      "What does equipment leasing mean?",
      "Explain equipment leasing",
      "How does leasing work?",
      "Definition of equipment leasing",
      "What is the concept of leasing equipment?"
    ],
    answer: "Equipment leasing is a financing option where you rent equipment for a specific period instead of buying it upfront. This allows you to preserve capital while accessing the latest technology.",
    detailedAnswer: "Equipment leasing is essentially a rental agreement for business assets. Instead of paying the full cost of equipment upfront, you pay a monthly fee to use it. At the end of the lease term, you may have the option to buy the equipment, return it, or upgrade to newer models. This is popular for businesses that need to manage cash flow or use equipment that depreciates quickly.",
    keywords: ["what", "is", "leasing", "definition", "explain", "meaning", "concept"],
    intent: "educational",
    tags: ["basics", "definition"],
    relatedIds: ["apply-process", "lease-vs-buy", "lease-terms"]
  },
  {
    id: 'apply-process',
    question: "How do I apply for a lease?",
    phrasings: [
      "Where can I start an application?",
      "What is the application process?",
      "I want to apply for financing",
      "How to get started with a lease?",
      "Steps to apply"
    ],
    answer: "You can apply directly through our website by clicking the 'Apply Now' button. The process takes about 10 minutes and requires basic business and financial information.",
    detailedAnswer: "Our application process is fully digital and streamlined:\n1. Click 'Apply Now' on our dashboard.\n2. Fill out your business details and equipment needs.\n3. Upload basic financial documents (if requested).\n4. Submit for instant review.\n\nMost applications under $150k receive a decision within minutes.",
    keywords: ["apply", "application", "start", "process", "how", "to", "steps", "sign up"],
    intent: "action",
    tags: ["application", "onboarding"],
    relatedIds: ["approval-time", "credit-score", "documents-needed"]
  },
  {
    id: 'interest-rates',
    question: "What are the interest rates?",
    phrasings: [
      "How much is the interest?",
      "What is the APR?",
      "Are the rates competitive?",
      "Tell me about the costs",
      "What percentage will I pay?"
    ],
    answer: "Interest rates vary based on your credit score, business history, and the equipment type. Typically, rates range from 5% to 15%. We offer competitive rates tailored to your profile.",
    detailedAnswer: "While we can't give an exact rate without an application, our rates generally fall between 5% and 15%. Factors influencing your specific rate include:\n- Business credit history\n- Time in business\n- Type of equipment\n- Lease term length\n\nWe always strive to offer the most competitive rates in the market.",
    keywords: ["interest", "rate", "rates", "cost", "percentage", "apr", "price", "pricing"],
    intent: "pricing",
    tags: ["cost", "financials"],
    relatedIds: ["down-payment", "lease-terms", "credit-score"]
  },
  {
    id: 'used-equipment',
    question: "Can I lease used equipment?",
    phrasings: [
      "Do you finance second-hand items?",
      "Is used equipment eligible?",
      "Can I buy pre-owned machinery?",
      "Financing for old equipment",
      "Used equipment leasing rules"
    ],
    answer: "Yes, we finance both new and used equipment. The equipment must be in good working condition and typically not older than 10 years, depending on the asset type.",
    detailedAnswer: "Absolutely. We understand that used equipment can be a smart financial choice. We finance used equipment provided it is:\n- Sold by a reputable vendor or dealer\n- In good working condition\n- Generally less than 10 years old (though exceptions exist for long-life assets like yellow iron).",
    keywords: ["used", "old", "pre-owned", "second-hand", "equipment", "machinery"],
    intent: "eligibility",
    tags: ["equipment-type", "eligibility"],
    relatedIds: ["leasing-definition", "lease-terms"]
  },
  {
    id: 'lease-terms',
    question: "What are the typical lease terms?",
    phrasings: [
      "How long is the lease?",
      "What are the duration options?",
      "Can I get a 5 year lease?",
      "Length of contract",
      "Term lengths available"
    ],
    answer: "Our lease terms generally range from 24 to 60 months (2 to 5 years). We can customize the term length to match your budget and the equipment's useful life.",
    detailedAnswer: "We offer flexible terms to suit your cash flow:\n- Short-term: 24-36 months (higher payments, pay off faster)\n- Medium-term: 48 months\n- Long-term: 60 months (lower monthly payments)\n\nWe can also structure seasonal payments for businesses with fluctuating revenue.",
    keywords: ["term", "length", "duration", "months", "years", "long", "contract", "period"],
    intent: "pricing",
    tags: ["terms", "contract"],
    relatedIds: ["end-of-lease", "early-payoff"]
  },
  {
    id: 'down-payment',
    question: "Is a down payment required?",
    phrasings: [
      "Do I need to pay upfront?",
      "What is the initial deposit?",
      "Is there a down payment?",
      "How much cash do I need to start?",
      "Upfront costs"
    ],
    answer: "In many cases, little to no down payment is required. We often require just the first and last month's payments upfront. Specific requirements depend on your credit profile.",
    detailedAnswer: "One of the main benefits of leasing is preserving capital. Typically, we only require the first and last month's payments in advance. For highly qualified applicants, we may offer $0 down programs. Lower credit profiles might require a slightly larger security deposit.",
    keywords: ["down", "payment", "upfront", "deposit", "initial", "cash", "start"],
    intent: "pricing",
    tags: ["cost", "requirements"],
    relatedIds: ["interest-rates", "credit-score"]
  },
  {
    id: 'end-of-lease',
    question: "What happens at the end of the lease?",
    phrasings: [
      "Do I own the equipment at the end?",
      "What are my options when the lease finishes?",
      "Can I buy the equipment later?",
      "End of term options",
      "Lease maturity"
    ],
    answer: "At the end of the lease, you typically have three options: return the equipment, purchase it for a predetermined amount (like $1 or Fair Market Value), or renew the lease.",
    detailedAnswer: "Your end-of-lease options depend on the lease structure you choose:\n- **$1 Buyout:** You own the equipment for $1.\n- **Fair Market Value (FMV):** You can buy it for its current value, return it, or continue renting.\n- **10% PUT:** You purchase it for 10% of the original cost.\n\nCheck your specific agreement for details.",
    keywords: ["end", "lease", "finish", "options", "purchase", "buy", "return", "own", "ownership"],
    intent: "educational",
    tags: ["contract", "ownership"],
    relatedIds: ["lease-terms", "leasing-definition"]
  },
  {
    id: 'early-payoff',
    question: "Can I pay off my lease early?",
    phrasings: [
      "Is there a penalty for early payment?",
      "Can I cancel the lease early?",
      "Early termination options",
      "Pay off balance",
      "Prepayment penalty"
    ],
    answer: "Yes, early payoff options are available. However, some leases may have prepayment penalties or require the remaining payments to be made in full. Check your specific agreement terms.",
    detailedAnswer: "You can always pay off your lease early. However, because leasing is a fixed-term contract, you are typically responsible for the sum of the remaining payments. In some cases, we offer a discount on the remaining interest for early payoff after a certain period (e.g., 12 months).",
    keywords: ["early", "payoff", "pay", "off", "prepayment", "cancel", "terminate", "penalty"],
    intent: "technical",
    tags: ["contract", "payment"],
    relatedIds: ["lease-terms", "end-of-lease"]
  },
  {
    id: 'credit-score',
    question: "What credit score do I need?",
    phrasings: [
      "Do you accept bad credit?",
      "Minimum credit score requirements",
      "Is my credit good enough?",
      "Credit qualifications",
      "FICO score needed"
    ],
    answer: "We work with a wide range of credit profiles. While a score above 650 is preferred for the best rates, we have programs for newer businesses and those with challenging credit histories.",
    detailedAnswer: "We take a holistic view of your business, not just your personal credit score. \n- **700+:** Qualifies for our lowest 'A-tier' rates.\n- **600-700:** Standard rates, very high approval chance.\n- **Below 600:** We have specialized programs, though rates may be higher or require a down payment.\n\nTime in business and revenue also play a big role.",
    keywords: ["credit", "score", "requirements", "qualify", "bad", "good", "fico", "history"],
    intent: "eligibility",
    tags: ["requirements", "eligibility"],
    relatedIds: ["apply-process", "interest-rates"]
  },
  {
    id: 'approval-time',
    question: "How long does approval take?",
    phrasings: [
      "When will I get a decision?",
      "Is approval instant?",
      "Wait time for approval",
      "How fast is the process?",
      "Turnaround time"
    ],
    answer: "For most applications under $150,000, we offer instant or same-day approval. Larger or more complex transactions typically receive a decision within 24-48 hours.",
    detailedAnswer: "Speed is our priority.\n- **App-only (under $150k):** Decisions often in 2-4 hours.\n- **Mid-ticket ($150k - $500k):** Typically 24 hours.\n- **Large ticket ($500k+):** 2-3 business days as it requires fuller financial review.",
    keywords: ["long", "time", "approval", "decision", "wait", "fast", "quick", "speed", "when"],
    intent: "technical",
    tags: ["process", "timing"],
    relatedIds: ["apply-process", "documents-needed"]
  }
];