// Comprehensive Quiz Data for Velocity Global Leasing Courses

export const quizData = [
  {
    id: "c1",
    title: "Understanding Equipment Leasing Basics",
    description:
      "Test your knowledge on the core concepts of equipment leasing.",
    questions: [
      {
        id: "q1",
        text: "What is equipment leasing?",
        options: {
          a: "The outright purchase of equipment with a loan",
          b: "A government grant for acquiring business equipment",
          c: "A contractual arrangement where a lessor provides use of equipment to a lessee for a specified term in exchange for regular payments",
          d: "A rental arrangement with no formal contract",
        },
        correctAnswer: "c",
      },
      {
        id: "q2",
        text: "Who is the 'lessor' in a lease agreement?",
        options: {
          a: "The party that owns the equipment and provides it for use in exchange for lease payments",
          b: "The business using the equipment",
          c: "The equipment manufacturer",
          d: "The bank financing the transaction",
        },
        correctAnswer: "a",
      },
      {
        id: "q3",
        text: "What is the difference between an operating lease and a finance lease?",
        options: {
          a: "An operating lease always leads to ownership; a finance lease does not",
          b: "Finance leases are only used for vehicles",
          c: "There is no practical difference between the two",
          d: "An operating lease is shorter-term and does not transfer ownership risks; a finance lease transfers substantially all risks and rewards of ownership to the lessee",
        },
        correctAnswer: "d",
      },
      {
        id: "q4",
        text: "What is a 'residual value' in an equipment lease?",
        options: {
          a: "The monthly lease payment amount",
          b: "The estimated value of the equipment at the end of the lease term",
          c: "The deposit paid at the start of the lease",
          d: "The amount still owed after the first payment",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "What does 'lessee' mean?",
        options: {
          a: "The bank providing the lease funding",
          b: "The company that manufactures the equipment",
          c: "The insurance company covering the equipment",
          d: "The party that receives the right to use the equipment under the lease agreement",
        },
        correctAnswer: "d",
      },
      {
        id: "q6",
        text: "What is the main advantage of equipment leasing for a small business?",
        options: {
          a: "The business immediately owns the equipment",
          b: "Leasing is always cheaper than buying",
          c: "Access to equipment without a large upfront capital outlay, preserving cashflow for operations",
          d: "The business has no obligations at end of lease",
        },
        correctAnswer: "c",
      },
      {
        id: "q7",
        text: "What does 'end-of-term options' typically refer to in a lease agreement?",
        options: {
          a: "The date the final payment is due",
          b: "The choices available to the lessee at the conclusion of the lease, such as returning the equipment, renewing the lease, or purchasing the asset",
          c: "The option to add more equipment mid-lease",
          d: "The interest rate adjustment at end of term",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "What is a 'lease term'?",
        options: {
          a: "The agreed duration of the lease during which the lessee makes regular payments",
          b: "The interest rate applied to the lease",
          c: "A legal clause in the lease agreement",
          d: "The type of equipment being leased",
        },
        correctAnswer: "a",
      },
      {
        id: "q9",
        text: "Why might a business choose leasing over a traditional bank loan to acquire equipment?",
        options: {
          a: "Leases always have lower interest rates than bank loans",
          b: "Banks do not finance equipment purchases",
          c: "Leases are not subject to credit approval",
          d: "Leases often require less security, are faster to arrange, and can be structured to match cashflow more flexibly than traditional loans",
        },
        correctAnswer: "d",
      },
      {
        id: "q10",
        text: "What is 'equipment finance' as a broader category that includes leasing?",
        options: {
          a: "Any form of government funding for equipment",
          b: "Insurance products covering equipment breakdown",
          c: "Financial products that enable businesses to acquire and use equipment, including leasing, hire purchase, chattel mortgage, and equipment loans",
          d: "Tax deductions available for equipment purchases",
        },
        correctAnswer: "c",
      },
    ],
  },

  {
    id: "c2",
    title: "Lease Accounting Standards (IFRS 16 & ASC 842)",
    description: "Assess your mastery of modern lease accounting standards.",
    questions: [
      {
        id: "q1",
        text: "Under IFRS 16, how must lessees account for most leases?",
        options: {
          a: "As operating expenses only",
          b: "By disclosing them only in footnotes",
          c: "By recognising a right-of-use asset and a lease liability on the balance sheet",
          d: "As finance leases only if the asset is owned at end of term",
        },
        correctAnswer: "c",
      },
      {
        id: "q2",
        text: "What is the key difference between IFRS 16 and ASC 842 lessee accounting?",
        options: {
          a: "ASC 842 maintains a dual model (operating and finance leases); IFRS 16 uses a single lessee model",
          b: "IFRS 16 allows all leases off-balance-sheet; ASC 842 does not",
          c: "ASC 842 applies globally; IFRS 16 only applies in Europe",
          d: "There is no difference between the two standards",
        },
        correctAnswer: "a",
      },
      {
        id: "q3",
        text: "What does the 'right-of-use asset' represent under IFRS 16?",
        options: {
          a: "The fair value of the leased equipment",
          b: "The lessor's ownership interest in the asset",
          c: "The residual value of the equipment",
          d: "The lessee's right to use the underlying asset for the lease term",
        },
        correctAnswer: "d",
      },
      {
        id: "q4",
        text: "Which of the following is a practical expedient available under both IFRS 16 and ASC 842?",
        options: {
          a: "Exemption for leases with terms of 12 months or less",
          b: "Exemption for all equipment leases",
          c: "Exemption for leases with variable payments only",
          d: "Exemption for international leases",
        },
        correctAnswer: "a",
      },
      {
        id: "q5",
        text: "How is the lease liability initially measured under IFRS 16?",
        options: {
          a: "At the fair value of the underlying asset",
          b: "At the total undiscounted lease payments",
          c: "At the present value of future lease payments discounted at the incremental borrowing rate",
          d: "At the equipment's purchase price",
        },
        correctAnswer: "c",
      },
      {
        id: "q6",
        text: "Under ASC 842, how is an operating lease reported on the income statement?",
        options: {
          a: "As a single straight-line lease expense",
          b: "As depreciation and interest expense separately",
          c: "As a capital expenditure",
          d: "As a financing activity only",
        },
        correctAnswer: "a",
      },
      {
        id: "q7",
        text: "What discount rate is used when the rate implicit in the lease is not readily determinable?",
        options: {
          a: "The prime lending rate",
          b: "The central bank base rate",
          c: "Zero percent",
          d: "The lessee's incremental borrowing rate",
        },
        correctAnswer: "d",
      },
      {
        id: "q8",
        text: "Which of the following would NOT be included in lease payments under IFRS 16?",
        options: {
          a: "Fixed payments less lease incentives",
          b: "Variable payments based on an index",
          c: "Variable payments based on actual usage (e.g., per kilometre)",
          d: "Residual value guarantees by the lessee",
        },
        correctAnswer: "c",
      },
      {
        id: "q9",
        text: "What is the primary impact of IFRS 16 adoption on a lessee's financial ratios?",
        options: {
          a: "Improved current ratio and reduced debt",
          b: "No impact on financial ratios",
          c: "Reduced revenue recognition",
          d: "Increased assets and liabilities, higher EBITDA, and increased leverage ratios",
        },
        correctAnswer: "d",
      },
      {
        id: "q10",
        text: "Under ASC 842, are variable lease payments based on an index or rate included in the initial measurement of the lease liability?",
        options: {
          a: "Yes, measured using the index or rate at the commencement date",
          b: "No, they are never included",
          c: "Yes, but estimated for future changes",
          d: "Only if they decrease the liability",
        },
        correctAnswer: "a",
      },
    ],
  },

  {
    id: "c3",
    title: "Equipment Leasing Sales Fundamentals",
    description:
      "Test your knowledge of essential sales techniques for equipment leasing professionals.",
    questions: [
      {
        id: "q1",
        text: "What is the first step in an effective equipment leasing sales process?",
        options: {
          a: "Presenting lease rate factors",
          b: "Sending a proposal immediately",
          c: "Conducting a thorough needs discovery with the prospect",
          d: "Discussing residual values",
        },
        correctAnswer: "c",
      },
      {
        id: "q2",
        text: "Which of the following best describes a 'lease rate factor'?",
        options: {
          a: "A multiplier applied to equipment cost to determine the monthly lease payment",
          b: "The percentage of equipment value paid as a deposit",
          c: "The interest rate charged on a finance lease",
          d: "The fee for early termination of a lease",
        },
        correctAnswer: "a",
      },
      {
        id: "q3",
        text: "When prospecting for equipment leasing clients, which approach is most effective?",
        options: {
          a: "Cold calling every business in a directory",
          b: "Only pursuing referrals from existing clients",
          c: "Waiting for inbound enquiries",
          d: "Targeting businesses in growth phases that are likely acquiring new equipment",
        },
        correctAnswer: "d",
      },
      {
        id: "q4",
        text: "What does 'pipeline management' mean in a leasing sales context?",
        options: {
          a: "Managing equipment maintenance schedules",
          b: "Tracking and nurturing all active opportunities through each stage of the sales process",
          c: "Managing the legal pipeline of lease agreements",
          d: "Scheduling equipment delivery timelines",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "What is a 'vendor leasing program' and why is it valuable to a sales professional?",
        options: {
          a: "A program where vendors buy back leased equipment",
          b: "A leasing arrangement exclusively for government vendors",
          c: "A discount program offered to long-term clients",
          d: "A partnership where the leasing company finances equipment sold by a specific vendor, creating a recurring deal flow",
        },
        correctAnswer: "d",
      },
      {
        id: "q6",
        text: "Which financial statement is most relevant when assessing a prospect's ability to support a lease?",
        options: {
          a: "The vendor invoice only",
          b: "The equipment appraisal report",
          c: "The income statement and balance sheet to assess cashflow and creditworthiness",
          d: "The prospect's marketing budget",
        },
        correctAnswer: "c",
      },
      {
        id: "q7",
        text: "What is the purpose of a 'lease vs. buy' analysis in a sales conversation?",
        options: {
          a: "To convince every client that leasing is always better",
          b: "To help the client make an informed decision by comparing total costs and financial impacts",
          c: "To delay the sales process",
          d: "To demonstrate the leasing company's credit requirements",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "In equipment leasing sales, what does 'closing' refer to?",
        options: {
          a: "Securing the client's commitment to proceed with the lease transaction",
          b: "Terminating a lease agreement",
          c: "Closing the client's account at end of lease",
          d: "Finalising equipment delivery",
        },
        correctAnswer: "a",
      },
      {
        id: "q9",
        text: "Which objection is most common in equipment leasing sales?",
        options: {
          a: "The equipment is too large",
          b: "We already have too many vendors",
          c: "We don't need equipment",
          d: "We prefer to buy rather than lease",
        },
        correctAnswer: "d",
      },
      {
        id: "q10",
        text: "What is the most important factor in building long-term client relationships in leasing sales?",
        options: {
          a: "Always offering the lowest rate",
          b: "Sending regular product brochures",
          c: "Consistent follow-up, delivering on promises, and proactively managing renewals",
          d: "Only contacting clients when a new deal is available",
        },
        correctAnswer: "c",
      },
    ],
  },

  {
    id: "c4",
    title: "Lease Securitization & Structured Finance",
    description: "Understand lease securitization and structured finance.",
    questions: [
      {
        id: "q1",
        text: "What is lease securitization?",
        options: {
          a: "A process of insuring lease agreements against default",
          b: "Converting operating leases into finance leases",
          c: "Pooling lease receivables and selling them as securities to investors to raise capital",
          d: "A method of securing physical equipment against theft",
        },
        correctAnswer: "c",
      },
      {
        id: "q2",
        text: "What is a Special Purpose Vehicle (SPV) in the context of lease securitization?",
        options: {
          a: "A bankruptcy-remote legal entity created to hold lease assets and issue securities",
          b: "A vehicle used to transport leased equipment",
          c: "A government body that regulates lease securitization",
          d: "A type of insurance policy for lease portfolios",
        },
        correctAnswer: "a",
      },
      {
        id: "q3",
        text: "What does 'credit enhancement' mean in a structured finance transaction?",
        options: {
          a: "Improving the credit score of the lessee",
          b: "Reducing the interest rate on a lease",
          c: "Adding more lessees to a portfolio",
          d: "Mechanisms used to improve the credit quality of the securities issued, such as overcollateralisation or reserve funds",
        },
        correctAnswer: "d",
      },
      {
        id: "q4",
        text: "What is 'overcollateralisation' in lease securitization?",
        options: {
          a: "Issuing more securities than there are underlying assets",
          b: "Placing more lease assets in the pool than the value of securities issued, providing a buffer against losses",
          c: "Using more collateral than required by the lender to secure a loan",
          d: "Collateralising equipment twice",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "What is a 'waterfall' in a structured finance transaction?",
        options: {
          a: "A risk model for predicting lease defaults",
          b: "A method of depreciating lease assets",
          c: "A due diligence checklist for lease securitizations",
          d: "The priority order in which cash flows are distributed to different tranches of investors",
        },
        correctAnswer: "d",
      },
      {
        id: "q6",
        text: "What are 'tranches' in a securitization structure?",
        options: {
          a: "Individual lease agreements in a portfolio",
          b: "Different classes of securities with varying risk and return profiles issued from the same asset pool",
          c: "The different types of equipment in a lease portfolio",
          d: "Separate legal entities in a securitization structure",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "What is 'prepayment risk' in lease securitization?",
        options: {
          a: "The risk that lessees pay off leases early, reducing expected cash flows to investors",
          b: "The risk that lessees will not pay their lease obligations",
          c: "The risk of equipment being damaged before delivery",
          d: "The risk of rising interest rates",
        },
        correctAnswer: "a",
      },
      {
        id: "q8",
        text: "Why do leasing companies use securitization as a funding strategy?",
        options: {
          a: "To avoid regulatory oversight",
          b: "To transfer all credit risk to lessees",
          c: "To eliminate the need for credit underwriting",
          d: "To access lower-cost capital, free up their balance sheet, and fund new originations",
        },
        correctAnswer: "d",
      },
      {
        id: "q9",
        text: "What is the role of a servicer in a lease securitization transaction?",
        options: {
          a: "To provide insurance for the leased assets",
          b: "To collect lease payments from lessees and remit them to the SPV for distribution to investors",
          c: "To originate new leases for the portfolio",
          d: "To rate the securities issued by the SPV",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "Which metric is most important when assessing a securitization's senior tranche?",
        options: {
          a: "The equipment depreciation rate",
          b: "The lessor's market share",
          c: "Yield to maturity",
          d: "Credit rating, which reflects the likelihood of timely payment of principal and interest",
        },
        correctAnswer: "d",
      },
    ],
  },

  {
    id: "c5",
    title: "Lease vs. Buy: Strategic Decision Framework",
    description: "Make strategic lease vs. buy decisions.",
    questions: [
      {
        id: "q1",
        text: "What is the primary financial advantage of leasing over buying for most businesses?",
        options: {
          a: "Leasing always results in lower total payments",
          b: "Leasing preserves capital and improves cashflow by spreading costs over time",
          c: "Leasing eliminates all maintenance costs",
          d: "Leasing always provides better tax benefits than buying",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "When does buying equipment outright typically make more financial sense than leasing?",
        options: {
          a: "When the asset has a long useful life, retains residual value, and the business has surplus capital",
          b: "When the business has no credit history",
          c: "When the business needs the equipment immediately",
          d: "When interest rates are rising",
        },
        correctAnswer: "a",
      },
      {
        id: "q3",
        text: "What is 'net present value' (NPV) and how is it used in a lease vs. buy decision?",
        options: {
          a: "The total undiscounted cash outflows of an option",
          b: "The remaining balance on a lease liability",
          c: "The market value of the equipment today",
          d: "The present value of all future cash flows discounted at an appropriate rate, used to compare the true cost of each option",
        },
        correctAnswer: "d",
      },
      {
        id: "q4",
        text: "Which factor most strongly favours leasing for technology equipment specifically?",
        options: {
          a: "Technology equipment has high residual values",
          b: "Technology equipment is ineligible for purchase financing",
          c: "Technology becomes obsolete quickly, making lease flexibility and refresh cycles valuable",
          d: "Technology leases always come with maintenance included",
        },
        correctAnswer: "c",
      },
      {
        id: "q5",
        text: "What is the 'opportunity cost' consideration in a lease vs. buy decision?",
        options: {
          a: "The cost of missing a lease payment",
          b: "The penalty for returning equipment early",
          c: "The cost of equipment downtime",
          d: "The return that could be generated if capital used to buy equipment were deployed elsewhere in the business",
        },
        correctAnswer: "d",
      },
      {
        id: "q6",
        text: "Which type of business would most benefit from leasing rather than buying?",
        options: {
          a: "A business with large cash reserves and stable, long-term equipment needs",
          b: "A fast-growing business that needs to preserve capital and maintain equipment flexibility",
          c: "A business that only needs equipment for a single project",
          d: "A business with no credit history and poor cashflow",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "What tax advantage does purchasing equipment often provide that leasing does not?",
        options: {
          a: "Elimination of sales tax on the purchase",
          b: "Reduced corporate tax rate",
          c: "Ability to deduct lease payments as an operating expense",
          d: "Depreciation deductions and potential Section 179 or bonus depreciation claims on the full purchase price",
        },
        correctAnswer: "d",
      },
      {
        id: "q8",
        text: "In a lease vs. buy framework, what does 'residual value risk' refer to?",
        options: {
          a: "The risk that lease payments increase over time",
          b: "The uncertainty about what the equipment will be worth at the end of its useful life",
          c: "The risk that the lessee defaults on payments",
          d: "The risk of equipment being stolen",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "How does an operating lease affect a company's balance sheet compared to an outright purchase?",
        options: {
          a: "Under older standards, an operating lease kept debt off the balance sheet; under IFRS 16/ASC 842 both create assets and liabilities",
          b: "Both have identical balance sheet impacts",
          c: "An operating lease always improves debt ratios",
          d: "A purchase never appears on the balance sheet",
        },
        correctAnswer: "a",
      },
      {
        id: "q10",
        text: "What is the most important qualitative factor in a lease vs. buy decision beyond the numbers?",
        options: {
          a: "The colour and brand of the equipment",
          b: "The vendor's reputation",
          c: "Strategic flexibility — whether the business needs the ability to upgrade, return, or scale equipment without long-term commitment",
          d: "The length of the sales cycle",
        },
        correctAnswer: "c",
      },
    ],
  },

  {
    id: "c6",
    title: "Legal Compliance in Lease Agreements",
    description: "Ensure legal compliance in all lease agreements.",
    questions: [
      {
        id: "q1",
        text: "What is the primary purpose of a master lease agreement?",
        options: {
          a: "To list all available equipment for lease",
          b: "To provide insurance coverage for leased equipment",
          c: "To establish standard terms and conditions that govern all future lease schedules between two parties",
          d: "To set the interest rate for all lease transactions",
        },
        correctAnswer: "c",
      },
      {
        id: "q2",
        text: "What does 'hell or high water' mean in a lease agreement?",
        options: {
          a: "The lessee's obligation to make payments is absolute and unconditional regardless of equipment issues",
          b: "The lessor can terminate the lease in any circumstance",
          c: "The lease can be cancelled during extreme weather events",
          d: "The lessee must insure the equipment against natural disasters",
        },
        correctAnswer: "a",
      },
      {
        id: "q3",
        text: "What is a UCC filing (Article 9) and why is it important in equipment leasing?",
        options: {
          a: "A tax filing required for all lease transactions",
          b: "A credit check required before approving a lease",
          c: "A government certificate confirming the lease is legally valid",
          d: "A public notice that perfects the lessor's security interest in the leased equipment",
        },
        correctAnswer: "d",
      },
      {
        id: "q4",
        text: "What is the difference between a 'true lease' and a 'finance lease' from a legal perspective?",
        options: {
          a: "There is no legal difference",
          b: "A true lease transfers ownership at end of term; a finance lease does not",
          c: "A true lease is structured so the lessor retains ownership and the lessee has no equity buildup; a finance lease is essentially a loan disguised as a lease",
          d: "A finance lease is always shorter in term than a true lease",
        },
        correctAnswer: "c",
      },
      {
        id: "q5",
        text: "What does 'indemnification' mean in a lease agreement?",
        options: {
          a: "The lessee's right to terminate the lease early",
          b: "The process of returning equipment at end of lease",
          c: "The lessor's obligation to maintain the equipment",
          d: "A clause where one party agrees to compensate the other for losses, damages, or legal costs arising from specified events",
        },
        correctAnswer: "d",
      },
      {
        id: "q6",
        text: "What is an 'event of default' in a lease agreement?",
        options: {
          a: "A scheduled lease payment date",
          b: "A specific condition, such as missed payment or insolvency, that allows the lessor to accelerate obligations or repossess equipment",
          c: "The end of the lease term",
          d: "A change in equipment ownership",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "Why is it important to include a 'quiet enjoyment' clause in a lease agreement?",
        options: {
          a: "To guarantee the lessee's right to use the equipment without interference from the lessor as long as obligations are met",
          b: "To ensure the leased equipment operates quietly",
          c: "To prevent the lessee from subleasing the equipment",
          d: "To limit the lessee's liability for equipment damage",
        },
        correctAnswer: "a",
      },
      {
        id: "q8",
        text: "What does 'lessee's end-of-term options' typically include in a well-drafted lease?",
        options: {
          a: "Only the option to return the equipment",
          b: "Automatic rollover into a new lease",
          c: "Only the option to purchase the equipment",
          d: "Return the equipment, renew the lease, or purchase the equipment at fair market value or a fixed price",
        },
        correctAnswer: "d",
      },
      {
        id: "q9",
        text: "What is the purpose of a 'representations and warranties' section in a lease agreement?",
        options: {
          a: "To describe the equipment being leased",
          b: "To document factual statements each party makes about itself and the transaction that the other party relies upon",
          c: "To set out the payment schedule",
          d: "To define the governing law of the agreement",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "Which regulatory requirement must leasing companies comply with when dealing with individual consumers?",
        options: {
          a: "Consumer protection laws including truth-in-lending and disclosure requirements on total cost, fees, and terms",
          b: "UCC Article 9 only",
          c: "Only corporate tax regulations",
          d: "International trade regulations",
        },
        correctAnswer: "a",
      },
    ],
  },

  {
    id: "c7",
    title: "Managing Your Leased Equipment",
    description: "Best practices for managing leased equipment.",
    questions: [
      {
        id: "q1",
        text: "What is an asset register and why is it important for leased equipment?",
        options: {
          a: "A list of all employees authorised to use equipment",
          b: "A document listing equipment purchase prices",
          c: "A maintenance log kept by the lessor",
          d: "A centralised record tracking all leased assets, their location, condition, lease terms, and renewal dates",
        },
        correctAnswer: "d",
      },
      {
        id: "q2",
        text: "What does 'fair wear and tear' mean in the context of returning leased equipment?",
        options: {
          a: "Normal deterioration from ordinary use that the lessee is not liable for, as opposed to damage from misuse or neglect",
          b: "Any damage to the equipment is the lessor's responsibility",
          c: "The cost of replacing worn parts during the lease",
          d: "The depreciation schedule applied to the equipment",
        },
        correctAnswer: "a",
      },
      {
        id: "q3",
        text: "Why is it important to track lease renewal and end-of-term dates proactively?",
        options: {
          a: "To ensure the lessor receives payment on time",
          b: "Because the law requires notification 30 days before end of term",
          c: "To avoid auto-renewal into unfavourable terms and to allow time to negotiate, return, or upgrade equipment",
          d: "To qualify for early termination discounts",
        },
        correctAnswer: "c",
      },
      {
        id: "q4",
        text: "What should a lessee do before returning equipment at end of lease?",
        options: {
          a: "Nothing — simply return the equipment",
          b: "Review the return conditions in the lease, document the equipment's condition with photos, and arrange compliant packaging and transport",
          c: "Have the equipment appraised for purchase",
          d: "Notify the manufacturer",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "What is 'equipment refresh' in a leasing context?",
        options: {
          a: "Cleaning and servicing equipment mid-lease",
          b: "The process of transferring a lease to a new lessee",
          c: "Repainting or rebranding leased equipment",
          d: "Replacing aging leased equipment with newer models at end of term or through a mid-term upgrade, often built into the lease structure",
        },
        correctAnswer: "d",
      },
      {
        id: "q6",
        text: "How should a business manage multiple leases with different end dates?",
        options: {
          a: "Wait until each lease expires naturally",
          b: "Use a lease management system or calendar to track all obligations, renewal windows, and end dates centrally",
          c: "Consolidate all leases into one agreement immediately",
          d: "Assign one employee to memorise all lease terms",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "What is 'data sanitisation' and why is it critical when returning leased IT equipment?",
        options: {
          a: "Securely wiping all company data from devices before return to prevent data breaches",
          b: "Cleaning the physical surface of the equipment",
          c: "Updating the equipment's software before return",
          d: "Checking the equipment for viruses",
        },
        correctAnswer: "a",
      },
      {
        id: "q8",
        text: "When should a business consider exercising a purchase option on leased equipment?",
        options: {
          a: "Always, at the end of every lease",
          b: "Only when the lessor offers a discount",
          c: "Never — leasing is always better than owning",
          d: "When the equipment's market value exceeds the purchase option price and the asset remains strategically useful",
        },
        correctAnswer: "d",
      },
      {
        id: "q9",
        text: "What is the risk of not maintaining leased equipment to the lessor's standards?",
        options: {
          a: "The lease automatically terminates",
          b: "The lessor can increase the monthly payment",
          c: "The lessee may face end-of-term charges for damage beyond fair wear and tear",
          d: "The lessee loses tax deductions on lease payments",
        },
        correctAnswer: "c",
      },
      {
        id: "q10",
        text: "What is the best practice for managing maintenance responsibilities on an operating lease?",
        options: {
          a: "Ignore maintenance as it is always the lessor's responsibility",
          b: "Always hire a third-party maintenance company",
          c: "Only maintain equipment in the final month of the lease",
          d: "Clarify in the lease agreement which party is responsible for maintenance and adhere strictly to those obligations to avoid end-of-term charges",
        },
        correctAnswer: "d",
      },
    ],
  },

  {
    id: "c8",
    title: "Mastering Creative Financing to Close Bigger Deals",
    description:
      "Learn creative financing techniques to close larger deals and expand your business.",
    questions: [
      {
        id: "q1",
        text: "What is a 'sale-leaseback' transaction?",
        options: {
          a: "Buying equipment and leasing it to a competitor",
          b: "Leasing equipment with an option to buy it back at end of term",
          c: "A business sells equipment it owns to a lessor and simultaneously leases it back, freeing up capital while retaining use",
          d: "Selling a lease portfolio to another lender",
        },
        correctAnswer: "c",
      },
      {
        id: "q2",
        text: "What is a 'step-up' payment structure in a lease?",
        options: {
          a: "Payments that start lower and increase over the lease term, aligned to anticipated revenue growth",
          b: "Payments that decrease over time as the asset depreciates",
          c: "A one-time step payment made at signing",
          d: "Payments that change based on equipment usage",
        },
        correctAnswer: "a",
      },
      {
        id: "q3",
        text: "How can 'bundling' services into a lease help close a larger deal?",
        options: {
          a: "It confuses the client about the true cost",
          b: "It reduces the lessor's profit margin",
          c: "It wraps maintenance, software, insurance, and support into one payment, simplifying the decision and increasing deal size",
          d: "It is only available for real estate leases",
        },
        correctAnswer: "c",
      },
      {
        id: "q4",
        text: "What is a 'deferred payment' structure and when is it most useful?",
        options: {
          a: "A structure where payments are delayed for 60-90 days to help a client acquire equipment before cash is available, useful for seasonal businesses",
          b: "A structure where all payments are made at the end of the lease",
          c: "A structure where payments are reduced in the first year",
          d: "A penalty structure for late payments",
        },
        correctAnswer: "a",
      },
      {
        id: "q5",
        text: "What does '100% financing' mean in equipment leasing?",
        options: {
          a: "The lessee pays no interest",
          b: "The lessor finances 100 different lessees",
          c: "The equipment is 100% owned by the lessor",
          d: "The full cost of the equipment including soft costs like installation and training is financed with no down payment required",
        },
        correctAnswer: "d",
      },
      {
        id: "q6",
        text: "What is a 'master lease' structure and how does it help close bigger deals?",
        options: {
          a: "A lease that covers only the most expensive equipment",
          b: "A single agreement that governs multiple equipment schedules, allowing clients to add assets quickly without renegotiating terms each time",
          c: "A lease that requires no credit approval",
          d: "A lease exclusively for large enterprises",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "How can a lease professional use a 'seasonal payment' structure to close a deal with a retail client?",
        options: {
          a: "By charging higher payments during busy months",
          b: "By offering a discount in December",
          c: "By structuring payments to be higher during the client's peak revenue months and lower during off-peak periods, matching cashflow",
          d: "By deferring all payments to after the holiday season",
        },
        correctAnswer: "c",
      },
      {
        id: "q8",
        text: "What is a 'progress payment' structure and when is it appropriate?",
        options: {
          a: "Payments made when the lessee meets performance targets",
          b: "Graduated payments that increase with inflation",
          c: "Payments made to the manufacturer during equipment construction or delivery, used for long lead-time assets like aircraft or custom machinery",
          d: "Payments tied to the lessee's revenue growth",
        },
        correctAnswer: "c",
      },
      {
        id: "q9",
        text: "What is a 'synthetic lease' and what is its primary purpose?",
        options: {
          a: "A lease of synthetic or artificial equipment",
          b: "A lease structure used exclusively in the technology sector",
          c: "A lease with variable rate payments",
          d: "A structure that allows a company to control an asset and receive ownership tax benefits while keeping the asset off the balance sheet for accounting purposes",
        },
        correctAnswer: "d",
      },
      {
        id: "q10",
        text: "How does offering a '$1 buyout' lease differ from a fair market value lease?",
        options: {
          a: "A $1 buyout lease has no residual value and functions like a loan, giving the lessee full ownership for $1 at end of term; an FMV lease has a residual and the lessee decides at end of term",
          b: "A $1 buyout is only available for equipment under $10,000",
          c: "An FMV lease always results in lower monthly payments than a $1 buyout",
          d: "There is no practical difference between the two structures",
        },
        correctAnswer: "a",
      },
    ],
  },

  {
    id: "c9",
    title: "Maximizing Value from Equipment Leasing",
    description:
      "Strategies for optimizing lease benefits, managing costs, and leveraging leasing for business growth.",
    questions: [
      {
        id: "q1",
        text: "What does 'total cost of leasing' include beyond the monthly payment?",
        options: {
          a: "Only the monthly lease payment",
          b: "Only the interest component of the lease",
          c: "Monthly payments, documentation fees, insurance, maintenance obligations, and end-of-term costs",
          d: "Only the equipment purchase price",
        },
        correctAnswer: "c",
      },
      {
        id: "q2",
        text: "How can a business maximise the tax benefits of an operating lease?",
        options: {
          a: "By structuring leases so payments are fully deductible as operating expenses, reducing taxable income",
          b: "By capitalising lease payments as an asset",
          c: "By converting the lease to a finance lease",
          d: "By paying all lease costs upfront",
        },
        correctAnswer: "a",
      },
      {
        id: "q3",
        text: "What is 'technology refresh risk' and how does leasing mitigate it?",
        options: {
          a: "The risk of equipment being stolen; leasing provides insurance",
          b: "The risk of interest rate increases; leasing fixes the rate",
          c: "The risk of vendor insolvency; leasing transfers this risk",
          d: "The risk that equipment becomes obsolete; leasing allows regular upgrades at end of term without owning depreciating assets",
        },
        correctAnswer: "d",
      },
      {
        id: "q4",
        text: "How does leasing help a business manage its working capital more effectively?",
        options: {
          a: "Leasing provides access to cash grants",
          b: "By replacing large capital expenditures with predictable monthly payments, freeing working capital for operations and growth",
          c: "Leasing eliminates all financial risk",
          d: "Leasing reduces the need for financial planning",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "What strategy can a business use to reduce lease costs on equipment renewals?",
        options: {
          a: "Always accept the auto-renewal rate",
          b: "Always return equipment and sign a new lease elsewhere",
          c: "Start renewal negotiations 6-12 months before end of term, benchmark rates, and use competitive bids to negotiate better terms",
          d: "Delay renewals to create urgency with the lessor",
        },
        correctAnswer: "c",
      },
      {
        id: "q6",
        text: "What is the benefit of negotiating a 'master lease agreement' with a single lessor?",
        options: {
          a: "It locks in the highest possible interest rate",
          b: "It requires no credit approval for future leases",
          c: "It eliminates the need for end-of-term decisions",
          d: "It establishes pre-agreed terms allowing faster, cheaper addition of new equipment schedules without renegotiating each time",
        },
        correctAnswer: "d",
      },
      {
        id: "q7",
        text: "What is 'off-balance-sheet financing' and why has its appeal changed under IFRS 16?",
        options: {
          a: "It has no relevance to equipment leasing",
          b: "Previously, operating leases kept debt off the balance sheet; IFRS 16 now requires most leases to be recognised on-balance-sheet, reducing this advantage",
          c: "IFRS 16 increased off-balance-sheet opportunities",
          d: "Off-balance-sheet financing was always required to be disclosed",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "What does 'fleet management' mean in the context of equipment leasing?",
        options: {
          a: "Strategically managing a portfolio of leased assets across their lifecycle — acquisition, utilisation, maintenance, and disposal",
          b: "Managing a fleet of delivery trucks only",
          c: "Managing the lessor's portfolio of clients",
          d: "Scheduling equipment delivery dates",
        },
        correctAnswer: "a",
      },
      {
        id: "q9",
        text: "What is the most effective way to maximise residual value at end of lease?",
        options: {
          a: "Use the equipment as heavily as possible",
          b: "Return the equipment without inspection",
          c: "Exercise the purchase option on all leased assets",
          d: "Maintain equipment to the lessor's standards, keep accurate service records, and negotiate favourable return conditions upfront",
        },
        correctAnswer: "d",
      },
      {
        id: "q10",
        text: "Which approach best maximises long-term value from a leasing programme?",
        options: {
          a: "Using a different lessor for every transaction to get the lowest rate",
          b: "Always choosing the shortest possible lease term",
          c: "Building a strategic relationship with preferred lessors who understand the business, enabling better terms, faster approvals, and tailored solutions over time",
          d: "Avoiding leasing for high-value assets",
        },
        correctAnswer: "c",
      },
    ],
  },

  {
    id: "c10",
    title: "Negotiation Strategies for Lease Deals",
    description: "Advanced negotiation techniques for lease transactions.",
    questions: [
      {
        id: "q1",
        text: "What is BATNA and why is it critical in lease negotiations?",
        options: {
          a: "Best Accounting Terms and Net Amortisation — a financial model",
          b: "Budgeted Annual Transaction and Net Adjustment — a pricing tool",
          c: "Baseline Assessment of Terms and Needs Analysis — a discovery tool",
          d: "Best Alternative To a Negotiated Agreement — knowing your walkaway point gives leverage and prevents accepting a bad deal",
        },
        correctAnswer: "d",
      },
      {
        id: "q2",
        text: "What does 'anchoring' mean in a negotiation context?",
        options: {
          a: "Setting the first number or offer, which influences the range of the subsequent discussion",
          b: "Refusing to change your position throughout the negotiation",
          c: "Tying the negotiation outcome to an external benchmark",
          d: "Using a fixed rate as the basis for all lease calculations",
        },
        correctAnswer: "a",
      },
      {
        id: "q3",
        text: "How should a lease professional respond when a client says 'your competitor offers a lower rate'?",
        options: {
          a: "Immediately match the competitor's rate",
          b: "Dismiss the competitor's offer as unreliable",
          c: "Acknowledge the information, ask for specifics, and reframe the conversation around total value rather than rate alone",
          d: "End the negotiation",
        },
        correctAnswer: "c",
      },
      {
        id: "q4",
        text: "What is 'interest-based negotiation' as opposed to 'position-based negotiation'?",
        options: {
          a: "Negotiating only the interest rate component of a lease",
          b: "Focusing on the underlying needs and motivations of both parties rather than fixed positions, enabling creative solutions",
          c: "A negotiation approach used only in financial services",
          d: "A strategy where both parties refuse to move from their opening positions",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "What non-price terms can a lease professional negotiate to add value without reducing margin?",
        options: {
          a: "Only the lease term length",
          b: "Only the deposit amount",
          c: "Payment timing, end-of-term options, upgrade rights, bundled services, and maintenance terms",
          d: "The colour and specification of the equipment",
        },
        correctAnswer: "c",
      },
      {
        id: "q6",
        text: "What is the role of silence in a negotiation?",
        options: {
          a: "Silence signals agreement and should be avoided",
          b: "Strategic silence after making an offer creates pressure on the other party to respond, often resulting in concessions",
          c: "Silence is unprofessional in lease negotiations",
          d: "Silence should only be used when you have nothing to say",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "What is a 'concession strategy' in lease deal negotiation?",
        options: {
          a: "Giving the client everything they ask for to close quickly",
          b: "A list of discounts available at each deal size",
          c: "A strategy to delay the deal until the client concedes",
          d: "Planned giving and taking of concessions in a deliberate sequence to move towards a mutually acceptable outcome while protecting key terms",
        },
        correctAnswer: "d",
      },
      {
        id: "q8",
        text: "How does understanding the client's budget cycle improve lease negotiation outcomes?",
        options: {
          a: "It helps time proposals when client budgets are approved and creates urgency aligned with the client's fiscal calendar",
          b: "It allows the lessor to increase rates at year-end",
          c: "Budget cycles are irrelevant to lease negotiations",
          d: "It allows the client to delay payment indefinitely",
        },
        correctAnswer: "a",
      },
      {
        id: "q9",
        text: "What is the most effective opening strategy in a lease negotiation?",
        options: {
          a: "Open with your final offer to show strength",
          b: "Open by agreeing to the other party's terms to build trust",
          c: "Open by presenting your BATNA immediately",
          d: "Open with a position that leaves room to make concessions while still achieving your target outcome",
        },
        correctAnswer: "d",
      },
      {
        id: "q10",
        text: "When should a lease professional walk away from a deal?",
        options: {
          a: "As soon as any objection is raised",
          b: "When the client asks for a lower rate",
          c: "When the deal falls below the BATNA — when accepting would be worse than the best available alternative",
          d: "When the negotiation takes longer than one meeting",
        },
        correctAnswer: "c",
      },
    ],
  },

  {
    id: "c11",
    title: "Operational Leasing for Business Growth",
    description: "Leverage operational leasing for business expansion.",
    questions: [
      {
        id: "q1",
        text: "What is the defining characteristic of an operational (operating) lease?",
        options: {
          a: "The lessee owns the asset at end of term",
          b: "The lessee must purchase the asset at fair market value at end of term",
          c: "The lease does not transfer substantially all risks and rewards of ownership to the lessee; the lessor retains residual value risk",
          d: "The lease term must equal the useful life of the asset",
        },
        correctAnswer: "c",
      },
      {
        id: "q2",
        text: "How does operational leasing support business scalability?",
        options: {
          a: "It allows businesses to acquire more equipment without large capital outlays, preserving cash for growth initiatives",
          b: "It locks businesses into fixed equipment for long periods",
          c: "It requires businesses to maintain a minimum fleet size",
          d: "It eliminates the need for equipment planning",
        },
        correctAnswer: "a",
      },
      {
        id: "q3",
        text: "How does an operational lease handle residual value risk compared to a finance lease?",
        options: {
          a: "The lessee bears all residual value risk in both types",
          b: "Both lease types transfer residual value risk to the lessee equally",
          c: "Residual value is irrelevant in operational leasing",
          d: "In an operational lease, the lessor retains residual value risk; in a finance lease, the risk transfers to the lessee",
        },
        correctAnswer: "d",
      },
      {
        id: "q4",
        text: "What is a 'full-service' or 'all-inclusive' operational lease?",
        options: {
          a: "A lease with no end-of-term conditions",
          b: "A lease that bundles maintenance, insurance, tyres, and other services into the monthly payment alongside the financing cost",
          c: "A lease that covers all types of equipment",
          d: "A lease available to all business sizes",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "What is 'fleet optimisation' in an operational leasing context?",
        options: {
          a: "Maximising the number of vehicles in a fleet",
          b: "Buying out the entire fleet at end of lease",
          c: "Regularly reviewing fleet size, utilisation, and lease terms to ensure the right assets are deployed at the right cost",
          d: "Minimising the number of leases to reduce administration",
        },
        correctAnswer: "c",
      },
      {
        id: "q6",
        text: "What advantage does operational leasing offer for businesses in rapidly growing markets?",
        options: {
          a: "It locks in equipment at current prices permanently",
          b: "Flexible lease terms allow businesses to scale up or change equipment types quickly without being tied to owned assets",
          c: "It provides guaranteed equipment delivery within 24 hours",
          d: "It eliminates regulatory compliance requirements",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "How does VAT treatment typically differ between buying and operationally leasing equipment?",
        options: {
          a: "When leasing, VAT is typically spread across lease payments rather than paid in full upfront, improving cashflow",
          b: "There is no tax difference between buying and leasing",
          c: "Operational leases are always tax-exempt",
          d: "Buying always results in lower tax costs than leasing",
        },
        correctAnswer: "a",
      },
      {
        id: "q8",
        text: "How can operational leasing improve a company's return on assets (ROA)?",
        options: {
          a: "By increasing the total asset base",
          b: "By increasing depreciation charges",
          c: "ROA is not affected by leasing decisions",
          d: "By keeping assets off the balance sheet (under older standards) or reducing owned asset values, which can improve ROA when earnings are strong",
        },
        correctAnswer: "d",
      },
      {
        id: "q9",
        text: "What is 'total cost of mobility' in the context of vehicle fleet operational leasing?",
        options: {
          a: "The full cost of running a fleet including lease payments, fuel, insurance, maintenance, tyres, and administration",
          b: "The cost of fuel only",
          c: "The monthly lease payment per vehicle",
          d: "The driver's salary and benefits",
        },
        correctAnswer: "a",
      },
      {
        id: "q10",
        text: "What is the key business case for choosing operational leasing over purchasing for IT infrastructure?",
        options: {
          a: "IT equipment always has high residual values",
          b: "IT equipment is ineligible for purchase financing",
          c: "Operational leasing allows regular technology refresh, eliminates disposal headaches, and converts capital expenditure to predictable operating expenditure",
          d: "Operational leasing provides better warranty coverage than buying",
        },
        correctAnswer: "c",
      },
    ],
  },

  {
    id: "c12",
    title: "Portfolio Management & Optimization",
    description: "Optimize and manage lease portfolios effectively.",
    questions: [
      {
        id: "q1",
        text: "What does 'concentration risk' mean in a lease portfolio context?",
        options: {
          a: "Over-exposure to a single lessee, industry, geography, or asset type, which amplifies losses if that segment underperforms",
          b: "The risk of having too many small leases",
          c: "The risk of concentrating on low-risk lessees only",
          d: "The administrative burden of managing a large number of leases",
        },
        correctAnswer: "a",
      },
      {
        id: "q2",
        text: "What is 'yield' in the context of a lease portfolio and how is it measured?",
        options: {
          a: "The total number of leases originated in a year",
          b: "The residual value of assets at end of lease",
          c: "The number of renewals in the portfolio",
          d: "The return generated by the portfolio, measured as the annualised income relative to the outstanding portfolio balance",
        },
        correctAnswer: "d",
      },
      {
        id: "q3",
        text: "What is 'delinquency rate' and why is it a key portfolio health metric?",
        options: {
          a: "The rate at which new leases are originated",
          b: "The percentage of outstanding balance where payments are overdue, indicating credit quality and collection effectiveness",
          c: "The rate of equipment returns before end of term",
          d: "The rate of early lease terminations",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "What is 'net charge-off rate' in lease portfolio management?",
        options: {
          a: "The annualised amount of lease receivables written off as uncollectable less any recoveries, expressed as a percentage of average outstanding balance",
          b: "The profit margin on new lease originations",
          c: "The rate at which equipment is depreciated",
          d: "The percentage of leases that are renewed",
        },
        correctAnswer: "a",
      },
      {
        id: "q5",
        text: "How does diversification reduce risk in a lease portfolio?",
        options: {
          a: "By offering leases in only one asset class",
          b: "By reducing the number of active leases",
          c: "By focusing only on investment-grade lessees",
          d: "By spreading exposure across multiple industries, geographies, asset types, and lessee sizes so that losses in one segment are offset by performance in others",
        },
        correctAnswer: "d",
      },
      {
        id: "q6",
        text: "What is 'residual value management' in portfolio optimisation?",
        options: {
          a: "Collecting final lease payments",
          b: "Calculating the remaining lease payments due",
          c: "Monitoring and managing the estimated value of equipment at end of lease term to minimise losses and maximise recovery",
          d: "Managing equipment that has been returned early",
        },
        correctAnswer: "c",
      },
      {
        id: "q7",
        text: "What does 'vintage analysis' reveal about a lease portfolio?",
        options: {
          a: "The age of the equipment in the portfolio",
          b: "The performance of lease cohorts originated in specific time periods, revealing underwriting quality trends over time",
          c: "The dates when leases were signed",
          d: "The historical interest rates applied to leases",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "What is the purpose of 'stress testing' a lease portfolio?",
        options: {
          a: "To identify which leases need renegotiation",
          b: "To test the performance of the portfolio management software",
          c: "To audit all leases for compliance",
          d: "To model how the portfolio would perform under adverse economic scenarios, such as a recession or interest rate spike, to assess resilience",
        },
        correctAnswer: "d",
      },
      {
        id: "q9",
        text: "What does 'portfolio seasoning' mean and why does it matter for risk assessment?",
        options: {
          a: "Adding new leases to the portfolio regularly",
          b: "The ageing of a portfolio over time — seasoned portfolios have established payment histories, making risk assessment more reliable than newer portfolios",
          c: "The process of renewing maturing leases",
          d: "Adjusting lease rates based on market conditions",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "What is a lease portfolio and what does managing it involve?",
        options: {
          a: "A collection of lease brochures used for marketing",
          b: "A list of available equipment for lease",
          c: "The total book of active lease agreements held by a lessor, managed to optimise risk, return, and capital efficiency",
          d: "The lessor's marketing strategy for acquiring new clients",
        },
        correctAnswer: "c",
      },
    ],
  },

  {
    id: "c13",
    title: "Practical Leasing for Finance Professionals",
    description: "Comprehensive guide to leasing for finance professionals.",
    questions: [
      {
        id: "q1",
        text: "What is the implicit rate of a lease and how does it affect lease accounting?",
        options: {
          a: "The rate set by the lessor's bank",
          b: "The market interest rate at the time of signing",
          c: "The rate that causes the present value of lease payments and unguaranteed residual value to equal the fair value of the asset; used to discount lease payments in accounting",
          d: "The rate used to calculate late payment penalties",
        },
        correctAnswer: "c",
      },
      {
        id: "q2",
        text: "What is 'lessee incremental borrowing rate' (IBR) and when is it used?",
        options: {
          a: "The rate a lessee would pay to borrow funds to purchase the equivalent asset over a similar term; used when the implicit rate is not readily determinable",
          b: "The rate a lessor charges above prime rate",
          c: "The central bank's base interest rate",
          d: "A penalty rate for defaulting on lease payments",
        },
        correctAnswer: "a",
      },
      {
        id: "q3",
        text: "Under IFRS 16, how does a finance professional determine whether a contract contains a lease?",
        options: {
          a: "By checking if the word 'lease' appears in the contract",
          b: "By checking if the contract is registered with a government body",
          c: "By whether the contract includes a purchase option",
          d: "By assessing whether the contract conveys the right to control the use of an identified asset for a period of time in exchange for consideration",
        },
        correctAnswer: "d",
      },
      {
        id: "q4",
        text: "What is the effective interest method used for in lease accounting?",
        options: {
          a: "To calculate the equipment's depreciation",
          b: "To amortise the lease liability by allocating each payment between interest expense and principal reduction",
          c: "To determine the fair market value of the leased asset",
          d: "To calculate the monthly payment amount",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "How should a finance professional account for lease modifications under IFRS 16?",
        options: {
          a: "Ignore modifications and continue with original terms",
          b: "Expense the modification cost immediately",
          c: "Reclassify the lease as an operating lease",
          d: "Assess whether the modification is a separate lease or a modification of the existing lease, and remeasure the ROU asset and liability accordingly",
        },
        correctAnswer: "d",
      },
      {
        id: "q6",
        text: "What is the practical expedient for short-term leases under IFRS 16?",
        options: {
          a: "Leases with a term of 12 months or less at commencement can be treated as off-balance-sheet and expensed on a straight-line basis",
          b: "All leases under 5 years can be expensed",
          c: "Short-term leases must always be capitalised",
          d: "Short-term leases do not require disclosure",
        },
        correctAnswer: "a",
      },
      {
        id: "q7",
        text: "What financial ratio is most negatively impacted by the capitalisation of operating leases under IFRS 16?",
        options: {
          a: "Gross margin",
          b: "Revenue growth rate",
          c: "Debt-to-equity ratio, as previously off-balance-sheet lease liabilities now appear as debt",
          d: "Inventory turnover",
        },
        correctAnswer: "c",
      },
      {
        id: "q8",
        text: "How should variable lease payments based on performance or usage be treated under IFRS 16?",
        options: {
          a: "Included in the lease liability at commencement",
          b: "Capitalised as part of the right-of-use asset",
          c: "Treated as a lease modification",
          d: "Excluded from the lease liability and expensed in the period they are incurred",
        },
        correctAnswer: "d",
      },
      {
        id: "q9",
        text: "What is the significance of the 'commencement date' in lease accounting?",
        options: {
          a: "The date the lease agreement is signed",
          b: "The date on which the lessor makes the underlying asset available to the lessee, which is when initial recognition and measurement occurs",
          c: "The date the first payment is made",
          d: "The date the lease is registered for tax purposes",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "How does a finance professional calculate the present value of lease payments?",
        options: {
          a: "By multiplying monthly payments by the number of months",
          b: "By dividing the total payments by the equipment value",
          c: "By using the equipment's depreciation schedule",
          d: "By discounting each future payment at the appropriate discount rate and summing the results",
        },
        correctAnswer: "d",
      },
    ],
  },

  {
    id: "c14",
    title: "Risk Pricing Models for Lease Portfolios",
    description:
      "Develop sophisticated risk pricing models for lease portfolios.",
    questions: [
      {
        id: "q1",
        text: "What is 'credit risk' in the context of lease portfolio pricing?",
        options: {
          a: "The risk that the leased equipment depreciates faster than expected",
          b: "The risk of rising interest rates",
          c: "The risk that a lessee will fail to meet their payment obligations, resulting in a loss for the lessor",
          d: "The risk of equipment theft or damage",
        },
        correctAnswer: "c",
      },
      {
        id: "q2",
        text: "What is a 'probability of default' (PD) model used for in lease pricing?",
        options: {
          a: "To estimate the resale value of equipment",
          b: "To estimate the likelihood that a lessee will fail to repay their obligations, informing the risk premium in the lease rate",
          c: "To calculate the lease payment amount",
          d: "To assess the quality of collateral",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "What is 'loss given default' (LGD) and how does it affect lease pricing?",
        options: {
          a: "The percentage of exposure that is expected to be lost if a lessee defaults, after accounting for collateral recovery; higher LGD means higher pricing",
          b: "The total amount owed at default",
          c: "The probability that a default will occur",
          d: "The legal cost of pursuing a defaulting lessee",
        },
        correctAnswer: "a",
      },
      {
        id: "q4",
        text: "What is 'expected loss' (EL) and how is it calculated?",
        options: {
          a: "The maximum possible loss on a lease portfolio",
          b: "The loss incurred on defaulted leases in the prior year",
          c: "The difference between the lease rate and the cost of funds",
          d: "EL = PD x LGD x EAD — the statistical average loss anticipated from the portfolio, used to set pricing and provisions",
        },
        correctAnswer: "d",
      },
      {
        id: "q5",
        text: "What is 'residual value risk' in lease pricing and how is it modelled?",
        options: {
          a: "The risk of the lessee defaulting on the final payment",
          b: "The risk that equipment's end-of-term market value is lower than the forecast, modelled using historical depreciation data and market trends",
          c: "The risk that equipment is returned in poor condition",
          d: "The risk that maintenance costs exceed estimates",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "What is a 'risk-adjusted return on capital' (RAROC) and why is it used in lease pricing?",
        options: {
          a: "A marketing metric for lease products",
          b: "The total return on a lease portfolio before expenses",
          c: "A regulatory capital requirement",
          d: "A measure of profitability that accounts for risk, helping allocate capital to transactions that generate adequate return relative to the risk assumed",
        },
        correctAnswer: "d",
      },
      {
        id: "q7",
        text: "What is 'interest rate risk' in a lease portfolio and how can it be managed?",
        options: {
          a: "The risk that market interest rates move adversely relative to the portfolio's fixed lease rates; managed through hedging instruments like interest rate swaps",
          b: "The risk that lessees complain about interest rates",
          c: "The risk of setting lease rates too high",
          d: "The risk that central banks change monetary policy",
        },
        correctAnswer: "a",
      },
      {
        id: "q8",
        text: "What is a 'scorecard model' in lease credit underwriting?",
        options: {
          a: "A model that tracks lessee satisfaction scores",
          b: "A performance review tool for lease sales professionals",
          c: "A quantitative tool that assigns weighted scores to credit factors (financials, payment history, industry) to produce a composite credit score guiding approval decisions",
          d: "A model for scoring the condition of returned equipment",
        },
        correctAnswer: "c",
      },
      {
        id: "q9",
        text: "What is 'exposure at default' (EAD) in lease portfolio risk management?",
        options: {
          a: "The amount of equipment in the portfolio",
          b: "The total value of all leases originated in a year",
          c: "The credit limit extended to a single lessee",
          d: "The outstanding lease receivable balance expected at the time of default, used to calculate expected loss",
        },
        correctAnswer: "d",
      },
      {
        id: "q10",
        text: "What does 'vintage analysis' reveal in risk pricing models?",
        options: {
          a: "Which equipment types have the highest default rates",
          b: "The age profile of equipment in the portfolio",
          c: "How lease cohorts originated in specific periods perform over time, revealing whether underwriting standards and pricing have been adequate",
          d: "Which lessees have been clients the longest",
        },
        correctAnswer: "c",
      },
    ],
  },

  {
    id: "c15",
    title: "Sales Closing Techniques & Deal Management",
    description:
      "Proven closing techniques, objection handling, and deal management strategies.",
    questions: [
      {
        id: "q1",
        text: "What is the 'assumptive close' technique in lease sales?",
        options: {
          a: "Proceeding as though the client has already decided to proceed, using language like 'when we set up the lease' rather than 'if you decide to go ahead'",
          b: "Assuming the client will never buy and ending the meeting",
          c: "Assuming the client's budget without asking",
          d: "Closing without discussing terms",
        },
        correctAnswer: "a",
      },
      {
        id: "q2",
        text: "What is the 'summary close' and when is it most effective?",
        options: {
          a: "Summarising competing offers to confuse the client",
          b: "Providing a written summary and asking for a decision in 30 days",
          c: "Summarising only the price and payment terms",
          d: "Recapping all agreed benefits and value points just before asking for commitment, reinforcing why the decision makes sense",
        },
        correctAnswer: "d",
      },
      {
        id: "q3",
        text: "How should a sales professional handle a prospect who says 'I need to think about it'?",
        options: {
          a: "Leave immediately and wait for them to call back",
          b: "Acknowledge the response, ask what specifically they need to consider, and address the underlying concern rather than accepting the delay",
          c: "Reduce the price immediately",
          d: "Send a follow-up email in 30 days",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "What is 'pipeline velocity' and why does it matter in deal management?",
        options: {
          a: "The speed at which equipment is delivered",
          b: "The rate at which new prospects enter the pipeline",
          c: "The time taken to process a lease application",
          d: "The speed at which deals move through the sales pipeline; higher velocity means faster revenue recognition and better forecasting",
        },
        correctAnswer: "d",
      },
      {
        id: "q5",
        text: "What is the purpose of a 'follow-up cadence' in deal management?",
        options: {
          a: "To remind clients of overdue payments",
          b: "A schedule for delivering equipment",
          c: "A planned, consistent sequence of touchpoints that keeps the deal moving forward without being perceived as pushy",
          d: "A process for escalating deals to senior management",
        },
        correctAnswer: "c",
      },
      {
        id: "q6",
        text: "What does effective 'objection handling' in lease sales involve?",
        options: {
          a: "Ignoring objections and continuing the pitch",
          b: "Offering a discount every time an objection is raised",
          c: "Redirecting to a different product",
          d: "Listening fully to the objection, acknowledging it, clarifying the underlying concern, and responding with a relevant, value-focused answer",
        },
        correctAnswer: "d",
      },
      {
        id: "q7",
        text: "What is 'deal staging' in CRM-based deal management?",
        options: {
          a: "Setting up the stage for a product demonstration",
          b: "Defining clear stages in the sales process and tracking each deal's position, enabling accurate forecasting and identifying where deals stall",
          c: "Staging a deal for a specific financial quarter only",
          d: "Managing the physical staging of leased equipment",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "What is the most common reason lease deals stall after the proposal stage?",
        options: {
          a: "The proposal did not clearly connect the lease solution to the client's specific business needs and decision criteria",
          b: "The client loses their budget unexpectedly",
          c: "The equipment delivery was delayed",
          d: "The sales professional was too aggressive",
        },
        correctAnswer: "a",
      },
      {
        id: "q9",
        text: "What is the 'alternative choice close' and how is it used?",
        options: {
          a: "Offering two completely different products",
          b: "Presenting alternative financing options only",
          c: "Giving the client the choice to end the meeting",
          d: "Offering two versions of moving forward (e.g., '24-month or 36-month term?') rather than asking 'do you want to proceed?', making the decision about how rather than whether",
        },
        correctAnswer: "d",
      },
      {
        id: "q10",
        text: "What is the 'urgency close' and what is the ethical consideration when using it?",
        options: {
          a: "A technique where the salesperson creates false scarcity",
          b: "A technique using genuine time-limited incentives or deadlines to prompt timely decisions; it must be based on real constraints, not manufactured pressure",
          c: "A technique where the salesperson pressures the client to sign immediately",
          d: "A technique used only for large enterprise deals",
        },
        correctAnswer: "b",
      },
    ],
  },

  {
    id: "c16",
    title: "Building Client Value Propositions in Leasing",
    description: "Create compelling value propositions for leasing clients.",
    questions: [
      {
        id: "q1",
        text: "What is the primary purpose of a value proposition in leasing?",
        options: {
          a: "To describe the leasing company's history",
          b: "To outline the legal terms of a lease agreement",
          c: "To compare interest rates across lenders",
          d: "To clearly communicate the specific benefits a client receives from leasing",
        },
        correctAnswer: "d",
      },
      {
        id: "q2",
        text: "When building a value proposition for a CFO, which benefit is most compelling?",
        options: {
          a: "Off-balance-sheet treatment and cashflow preservation",
          b: "Fast delivery of equipment",
          c: "Access to the latest equipment models",
          d: "Simplified maintenance scheduling",
        },
        correctAnswer: "a",
      },
      {
        id: "q3",
        text: "What does 'total cost of ownership' (TCO) analysis help a leasing professional demonstrate?",
        options: {
          a: "The resale value of equipment",
          b: "Why leasing is always cheaper than buying",
          c: "The full financial impact of owning vs leasing over the asset's life",
          d: "The credit risk of the lessee",
        },
        correctAnswer: "c",
      },
      {
        id: "q4",
        text: "Which of the following is a key element of a strong value proposition?",
        options: {
          a: "Technical jargon that demonstrates expertise",
          b: "A specific, measurable outcome relevant to the client",
          c: "A lengthy explanation of all lease structures",
          d: "Generic benefits applicable to all industries",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "How should a value proposition differ between a small business owner and a large enterprise?",
        options: {
          a: "It should not differ — one message fits all clients",
          b: "Enterprise clients only care about price",
          c: "Small businesses only care about equipment delivery speed",
          d: "Small business propositions should focus on flexibility and cashflow; enterprise on scale and reporting",
        },
        correctAnswer: "d",
      },
      {
        id: "q6",
        text: "What is the role of storytelling in a leasing value proposition?",
        options: {
          a: "It helps clients emotionally connect with outcomes through relatable examples and case studies",
          b: "It is irrelevant in financial services",
          c: "It replaces the need for financial data",
          d: "It is only useful for marketing materials",
        },
        correctAnswer: "a",
      },
      {
        id: "q7",
        text: "A client objects that leasing is more expensive than buying. The best response is to:",
        options: {
          a: "Agree and offer a discount",
          b: "Redirect to the monthly payment amount only",
          c: "End the conversation and move on",
          d: "Demonstrate TCO showing leasing's cashflow and tax advantages over the full term",
        },
        correctAnswer: "d",
      },
      {
        id: "q8",
        text: "Which metric is most useful when presenting a leasing value proposition to an operations manager?",
        options: {
          a: "EBITDA impact",
          b: "Weighted average cost of capital",
          c: "Uptime, maintenance coverage, and equipment refresh cycles",
          d: "Debt-to-equity ratio",
        },
        correctAnswer: "c",
      },
      {
        id: "q9",
        text: "Which of the following best describes a client-centric value proposition?",
        options: {
          a: "One that focuses on the leasing company's product features",
          b: "One that lists all available lease types",
          c: "One that highlights the leasing company's market share",
          d: "One that emphasises the client's specific pain points and how leasing solves them",
        },
        correctAnswer: "d",
      },
      {
        id: "q10",
        text: "What is the most effective way to validate your value proposition before a client pitch?",
        options: {
          a: "Send it by email without a follow-up",
          b: "Test it with a discovery call to understand the client's actual priorities first",
          c: "Use the same proposition that worked for a previous client",
          d: "Focus only on price competitiveness",
        },
        correctAnswer: "b",
      },
    ],
  },

  // ─── NEW COURSES ────────────────────────────────────────────────────────────

  {
    id: "c17",
    title: "Legal, Operational, and Asset Readiness",
    description:
      "Understand the legal, operational, and asset readiness requirements for launching and managing a leasing operation.",
    questions: [
      {
        id: "q1",
        text: "What does 'asset readiness' mean before a lease commences?",
        options: {
          a: "Confirming the equipment is manufactured",
          b: "Ensuring the leased asset is fully delivered, installed, tested, and accepted by the lessee as fit for purpose before the lease financial obligations begin",
          c: "Confirming the lessor has title to the equipment",
          d: "Verifying the asset's insurance coverage",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "What is a 'certificate of acceptance' in a lease transaction?",
        options: {
          a: "A document signed by the lessee confirming the equipment has been received and is in satisfactory condition, triggering the start of the lease",
          b: "A regulatory licence to operate as a lessor",
          c: "A manufacturer's warranty document",
          d: "A certificate confirming the lease is legally binding",
        },
        correctAnswer: "a",
      },
      {
        id: "q3",
        text: "Which legal entity structure is most commonly used by independent leasing companies and why?",
        options: {
          a: "Sole trader, for simplicity",
          b: "Partnership, to share risk",
          c: "Limited liability company or corporation, to separate personal and business liability and attract institutional funding",
          d: "Trust structure, for tax benefits only",
        },
        correctAnswer: "c",
      },
      {
        id: "q4",
        text: "What is an 'equipment schedule' in a master lease agreement?",
        options: {
          a: "A maintenance timetable for the equipment",
          b: "A separate document that incorporates specific lease terms for each piece of equipment under the master agreement",
          c: "A delivery schedule provided by the manufacturer",
          d: "A list of approved equipment types",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "What operational readiness element must a leasing company establish before originating leases?",
        options: {
          a: "A customer loyalty programme",
          b: "Credit underwriting policies, documentation standards, and collections procedures",
          c: "A fleet of replacement equipment",
          d: "A social media presence",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "Why is title verification critical for the lessor before funding a lease?",
        options: {
          a: "To determine the monthly lease payment",
          b: "To confirm no third party has a prior security interest in the asset that could undermine the lessor's ownership rights",
          c: "To calculate depreciation",
          d: "To set the residual value",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "What is 'know your customer' (KYC) compliance in a leasing context?",
        options: {
          a: "A sales technique for understanding client needs",
          b: "A process of verifying the identity, legal status, and business legitimacy of lessees to comply with anti-money laundering regulations",
          c: "A credit scoring model",
          d: "A customer satisfaction survey process",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "What is the purpose of an 'insurance assignment' clause in a lease?",
        options: {
          a: "To require the lessee to obtain life insurance",
          b: "To assign the lessee's equipment insurance proceeds to the lessor in the event of total loss, protecting the lessor's financial interest",
          c: "To transfer the lessor's insurance obligations to the lessee",
          d: "To lower the lessee's insurance premium",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "What does 'lien search' mean and why is it performed before a lease is funded?",
        options: {
          a: "A search of the lessee's social media profiles",
          b: "A credit bureau inquiry",
          c: "A search of public registries to identify any existing claims or security interests against the lessee or the asset",
          d: "A search for comparable equipment prices",
        },
        correctAnswer: "c",
      },
      {
        id: "q10",
        text: "What is a 'guaranty' in a lease transaction and when is it typically required?",
        options: {
          a: "A warranty provided by the equipment manufacturer",
          b: "A personal or corporate commitment by a third party to fulfil the lessee's obligations if the lessee defaults; typically required when the lessee's credit is insufficient on its own",
          c: "An insurance policy covering equipment breakdown",
          d: "A government-backed credit facility",
        },
        correctAnswer: "b",
      },
    ],
  },

  {
    id: "c18",
    title: "Advanced Funding Sources and Structures",
    description:
      "Explore advanced funding sources and capital structures available to leasing companies.",
    questions: [
      {
        id: "q1",
        text: "What is a 'warehouse line of credit' and how do leasing companies use it?",
        options: {
          a: "A credit line for purchasing warehouse storage space",
          b: "A short-term revolving credit facility used to fund lease originations until they are sold or securitised",
          c: "A government credit facility for equipment manufacturers",
          d: "A long-term bond issued by a leasing company",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "What is 'asset-backed lending' (ABL) in the context of a leasing company's funding?",
        options: {
          a: "Lending secured by the leasing company's physical office",
          b: "A form of borrowing where the leasing company pledges its lease receivables as collateral to obtain funding",
          c: "Loans made by the leasing company to its clients",
          d: "Equity funding from asset management firms",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "What is the difference between 'recourse' and 'non-recourse' funding in leasing?",
        options: {
          a: "Recourse funding allows the funder to claim against the leasing company if the lessee defaults; non-recourse funding limits recovery to the underlying assets only",
          b: "Non-recourse funding is always more expensive than recourse",
          c: "Recourse funding is only available to banks",
          d: "There is no practical difference",
        },
        correctAnswer: "a",
      },
      {
        id: "q4",
        text: "What is a 'co-investment structure' in leasing fund arrangements?",
        options: {
          a: "A structure where two lessees share a single lease",
          b: "A structure where the leasing company retains a portion of each deal alongside an institutional investor, aligning incentives",
          c: "A government grant co-funded by private investors",
          d: "A joint venture between two equipment manufacturers",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "What is 'leverage' in the context of a leasing company's capital structure?",
        options: {
          a: "The negotiating power of the leasing company",
          b: "The ratio of debt to equity used to fund the lease portfolio; higher leverage amplifies returns but increases financial risk",
          c: "The interest rate charged to lessees",
          d: "The depreciation applied to leased assets",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "What is a 'term loan' and how does it differ from a revolving credit facility for a leasing company?",
        options: {
          a: "A term loan is disbursed once and repaid over a fixed schedule; a revolving facility can be drawn, repaid, and redrawn repeatedly",
          b: "A revolving facility is always cheaper than a term loan",
          c: "Term loans are only available to banks",
          d: "There is no difference",
        },
        correctAnswer: "a",
      },
      {
        id: "q7",
        text: "What role do insurance companies and pension funds play as funding sources for leasing?",
        options: {
          a: "They provide short-term bridge loans only",
          b: "They act as long-term institutional investors seeking stable, asset-backed returns that match their liability profiles, funding lease portfolios directly or through securitisation",
          c: "They only fund government-backed leasing programmes",
          d: "They provide grants to leasing companies",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "What is 'cost of funds' and why is it central to lease pricing strategy?",
        options: {
          a: "The cost of administering the leasing company's operations",
          b: "The rate at which the leasing company borrows money to fund leases; it forms the floor for lease pricing and directly determines the spread and profitability",
          c: "The depreciation cost of leased assets",
          d: "The legal cost of preparing lease agreements",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "What is a 'private placement' as a funding mechanism for a leasing company?",
        options: {
          a: "Raising capital by selling securities directly to a small number of institutional investors rather than through a public offering",
          b: "Placing equipment with private clients only",
          c: "A government placement of surplus equipment",
          d: "A private sale of leased equipment at end of term",
        },
        correctAnswer: "a",
      },
      {
        id: "q10",
        text: "How does a leasing company manage interest rate mismatches between its fixed-rate lease assets and floating-rate funding?",
        options: {
          a: "By only offering floating-rate leases",
          b: "By avoiding long-term leases",
          c: "Through hedging instruments such as interest rate swaps that convert floating-rate liabilities to fixed, aligning asset and liability cash flows",
          d: "By holding excess cash reserves",
        },
        correctAnswer: "c",
      },
    ],
  },

  {
    id: "c19",
    title: "Comprehensive Risk Analysis",
    description:
      "Master the frameworks and techniques used to analyse risk across a leasing portfolio.",
    questions: [
      {
        id: "q1",
        text: "What are the four primary risk categories a leasing company must analyse?",
        options: {
          a: "Sales, marketing, HR, and IT risk",
          b: "Credit risk, asset/residual value risk, interest rate risk, and operational risk",
          c: "Equipment, insurance, legal, and tax risk",
          d: "Liquidity, currency, reputational, and weather risk",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "What is 'counterparty risk' in a lease transaction?",
        options: {
          a: "The risk of equipment failure",
          b: "The risk that the other party to the transaction — typically the lessee — fails to fulfil its contractual obligations",
          c: "The risk of a competitor undercutting rates",
          d: "The risk of interest rate changes",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "How is 'asset liquidity risk' relevant to a leasing company?",
        options: {
          a: "The risk that the lessee cannot pay for liquidity reasons",
          b: "The risk that upon default or end of term, the leased equipment cannot be quickly sold or re-leased at an acceptable value",
          c: "The risk that the lessor runs out of cash",
          d: "The risk of equipment being damaged by liquid spills",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "What is 'operational risk' in a leasing company context?",
        options: {
          a: "The risk of equipment becoming operationally obsolete",
          b: "The risk of losses from inadequate or failed internal processes, people, systems, or external events",
          c: "The risk of operating in multiple countries",
          d: "The risk of changes to operating lease accounting standards",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "What does a 'risk matrix' help a leasing company to do?",
        options: {
          a: "Calculate the monthly lease payment",
          b: "Identify the most creditworthy lessees",
          c: "Visualise and prioritise risks by mapping their likelihood against their potential impact, enabling focused risk management",
          d: "Set the interest rate for new leases",
        },
        correctAnswer: "c",
      },
      {
        id: "q6",
        text: "What is 'concentration risk' at the portfolio level and why must it be actively monitored?",
        options: {
          a: "The risk that a single asset type dominates sales volumes",
          b: "Over-exposure to a single lessee, industry, geography, or asset class — amplifying losses if that segment deteriorates",
          c: "The risk of having too few lessees",
          d: "The administrative burden of complex leases",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "What is 'sensitivity analysis' and how is it applied in lease portfolio risk management?",
        options: {
          a: "Analysing how sensitive lessees are to price increases",
          b: "Testing how changes in a single variable — such as default rate or residual value — affect portfolio performance, isolating the impact of each risk factor",
          c: "Evaluating the sensitivity of equipment to environmental conditions",
          d: "Measuring the sensitivity of investors to yield changes",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "What is 'scenario analysis' in lease risk management?",
        options: {
          a: "Analysing different sales scenarios to forecast revenue",
          b: "Modelling portfolio performance under specific hypothetical economic or market conditions, such as a recession, rising interest rates, or a sector downturn",
          c: "Analysing the lessee's different use scenarios for the equipment",
          d: "Evaluating different lease structures for a single client",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "What does 'early warning indicator' mean in a lease portfolio risk context?",
        options: {
          a: "A notification that a lease is about to expire",
          b: "A metric or behavioural signal — such as payment delays or covenant breaches — that identifies a lessee at elevated risk of default before it occurs",
          c: "An alert that interest rates are rising",
          d: "A signal that equipment maintenance is overdue",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "What is the purpose of a 'risk appetite statement' for a leasing company?",
        options: {
          a: "To describe the types of equipment the company prefers to lease",
          b: "To formally define the level and type of risk the company is willing to accept in pursuit of its strategic objectives, guiding underwriting and portfolio decisions",
          c: "To set the minimum deal size the company will accept",
          d: "To document the company's preferred funding sources",
        },
        correctAnswer: "b",
      },
    ],
  },

  {
    id: "c20",
    title: "Measuring Financial Performance",
    description:
      "Learn to measure, interpret, and improve the financial performance of a leasing business.",
    questions: [
      {
        id: "q1",
        text: "What is 'net interest margin' (NIM) and why is it a core performance metric for a leasing company?",
        options: {
          a: "The total revenue from lease originations in a year",
          b: "The difference between the yield earned on lease assets and the cost of funds used to finance them, expressed as a percentage — the primary driver of leasing profitability",
          c: "The margin between the equipment purchase price and the monthly payment",
          d: "The profit margin on equipment sales at end of lease",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "What does 'return on equity' (ROE) measure in a leasing business?",
        options: {
          a: "The return generated on total assets",
          b: "The profitability of the lease portfolio before tax",
          c: "The net profit generated relative to shareholders' equity, indicating how effectively the company uses shareholder capital",
          d: "The return on equipment sold at end of lease",
        },
        correctAnswer: "c",
      },
      {
        id: "q3",
        text: "What is the 'efficiency ratio' in financial services and what does it indicate for a leasing company?",
        options: {
          a: "The ratio of equipment uptime to total lease term",
          b: "Operating expenses divided by net revenue — a lower ratio indicates a more cost-efficient operation",
          c: "The ratio of fixed to variable lease payments in the portfolio",
          d: "The ratio of new originations to existing portfolio size",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "What is 'origination volume' and why is it tracked as a leading indicator?",
        options: {
          a: "The total number of employees in the originations team",
          b: "The value of new leases written in a period — a leading indicator of future portfolio growth, revenue, and profitability",
          c: "The number of lease renewals in a period",
          d: "The volume of equipment returned at end of term",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "What is 'return on assets' (ROA) and how does it differ from ROE?",
        options: {
          a: "ROA and ROE are the same metric",
          b: "ROA measures net income relative to total assets, reflecting how efficiently assets generate profit; ROE measures returns relative to equity, reflecting leverage impact",
          c: "ROA measures the return on individual leased assets; ROE measures return on the entire portfolio",
          d: "ROE is a better metric than ROA in all circumstances",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "What is 'provision for credit losses' and how does it affect a leasing company's reported profitability?",
        options: {
          a: "A reserve set aside for future equipment purchases",
          b: "A charge to the income statement reflecting estimated future credit losses on the portfolio; higher provisions reduce reported net income",
          c: "A regulatory fee paid to licensing authorities",
          d: "Insurance premium expenses for the lease portfolio",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "What does 'portfolio yield' measure?",
        options: {
          a: "The percentage of leases that renew at end of term",
          b: "The total annualised income generated from the lease portfolio as a percentage of the average outstanding balance",
          c: "The depreciation rate of assets in the portfolio",
          d: "The interest rate charged on new originations only",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "What is 'cost per originated dollar' and why is it useful for a leasing company?",
        options: {
          a: "The equipment cost per lease dollar outstanding",
          b: "The total origination and sales cost incurred to generate each dollar of new lease volume, used to assess sales efficiency and pricing adequacy",
          c: "The administrative cost of managing each dollar of the portfolio",
          d: "The interest cost per dollar of funding",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "How does 'leverage ratio' affect the risk-return profile of a leasing company?",
        options: {
          a: "Higher leverage reduces both risk and return",
          b: "Leverage has no impact on risk",
          c: "Higher leverage amplifies both returns on equity and financial risk; a highly leveraged company is more sensitive to portfolio losses",
          d: "Lower leverage always indicates better performance",
        },
        correctAnswer: "c",
      },
      {
        id: "q10",
        text: "What is 'economic value added' (EVA) and how can it be applied to lease portfolio performance?",
        options: {
          a: "The market value of equipment in the portfolio",
          b: "A measure of the profit generated above the cost of capital employed; positive EVA indicates the portfolio is creating, not destroying, shareholder value",
          c: "The value added by equipment maintenance programmes",
          d: "The incremental revenue from upselling bundled services",
        },
        correctAnswer: "b",
      },
    ],
  },

  {
    id: "c21",
    title: "Introduction to Managed Services",
    description:
      "Understand the fundamentals of managed services and how they intersect with equipment leasing.",
    questions: [
      {
        id: "q1",
        text: "What is a 'managed service' in the context of equipment and technology?",
        options: {
          a: "A government-managed equipment procurement programme",
          b: "A comprehensive offering where a provider takes responsibility for delivering and managing a specified outcome — such as uptime or print volume — rather than just supplying equipment",
          c: "An equipment rental with no service component",
          d: "A maintenance contract purchased separately from the equipment",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "How does a managed service model differ from a traditional equipment lease?",
        options: {
          a: "A managed service includes only financing; a lease includes only services",
          b: "A managed service bundles equipment, maintenance, software, consumables, and support into a single outcome-based contract, whereas a traditional lease typically covers financing only",
          c: "Managed services are always more expensive than leases",
          d: "There is no difference",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "What is an 'outcome-based' managed service contract?",
        options: {
          a: "A contract where payment is tied to sales outcomes of the lessee",
          b: "A contract structured around delivering a measurable result — such as a cost-per-page or uptime guarantee — rather than simply providing equipment",
          c: "A contract with a fixed outcome at end of term",
          d: "A contract that guarantees equipment purchase at end of term",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "What is a 'managed print service' (MPS) and what does it typically include?",
        options: {
          a: "A service for printing marketing materials",
          b: "A comprehensive print management contract covering printers, toner, maintenance, and support, often priced per page printed",
          c: "A leasing programme for printing presses only",
          d: "Software for managing print job queues",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "What is a 'service level agreement' (SLA) in a managed service context?",
        options: {
          a: "A legal clause protecting the provider from liability",
          b: "A contractual commitment specifying the performance standards, response times, and remedies that the managed service provider must meet",
          c: "A pricing schedule for additional services",
          d: "A customer satisfaction survey framework",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "Why do businesses prefer managed services over owning equipment outright in technology-intensive sectors?",
        options: {
          a: "Because managed services are always the cheapest option",
          b: "To convert capital expenditure to predictable operating expenditure, eliminate technology obsolescence risk, and outsource management complexity",
          c: "Because ownership of technology equipment is illegal",
          d: "Because managed service contracts are easier to cancel",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "What is the role of a 'managed service provider' (MSP) in an equipment financing transaction?",
        options: {
          a: "The MSP acts as the lessor providing funding",
          b: "The MSP delivers and manages the service, while a separate finance company provides the underlying equipment funding — creating a three-party structure",
          c: "The MSP purchases equipment on behalf of the lessee",
          d: "The MSP provides insurance for the leased equipment",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "What is a 'consumption-based' or 'pay-per-use' model in managed services?",
        options: {
          a: "A model where clients pay only when they use the equipment, based on actual measured consumption rather than a fixed monthly fee",
          b: "A model where the provider pays for equipment usage",
          c: "A model where all costs are paid upfront",
          d: "A model limited to utility services",
        },
        correctAnswer: "a",
      },
      {
        id: "q9",
        text: "What is 'refresh management' in a managed services context?",
        options: {
          a: "Cleaning and refurbishing equipment mid-contract",
          b: "The planned replacement of equipment at the end of its useful life within the managed service contract, ensuring the client always has current technology",
          c: "Software updates provided by the MSP",
          d: "Replacing consumables such as toner",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "What is the primary challenge for a leasing company entering the managed services space?",
        options: {
          a: "Finding equipment to lease",
          b: "Competing on interest rates",
          c: "Transitioning from a transaction-focused finance model to an ongoing service delivery model, requiring new capabilities in operations, technology, and customer management",
          d: "Obtaining regulatory approval",
        },
        correctAnswer: "c",
      },
    ],
  },

  {
    id: "c22",
    title: "Strategic Funding Options for Managed Services",
    description:
      "Explore funding strategies and capital structures specifically designed for managed service programmes.",
    questions: [
      {
        id: "q1",
        text: "Why does funding a managed services contract present different challenges compared to funding a straightforward equipment lease?",
        options: {
          a: "Managed services are always funded by government grants",
          b: "The revenue stream is tied to service performance and consumption rather than fixed equipment lease payments, making cash flow less predictable for funders",
          c: "Managed services do not require funding",
          d: "Funders prefer managed services because of their simplicity",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "What is a 'blended rate' in the context of funding a managed service contract?",
        options: {
          a: "A rate that blends multiple currencies",
          b: "A single all-inclusive rate that covers both the equipment financing cost and the service component, simplifying billing for the customer",
          c: "A variable rate that blends fixed and floating interest",
          d: "A rate that blends costs across multiple clients",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "How can a leasing company 'unbundle' a managed service for funding purposes?",
        options: {
          a: "By splitting the equipment financing from the service components and funding only the hard asset finance element",
          b: "By selling the equipment to the lessee and separately providing maintenance",
          c: "By offering the service for free and charging only for equipment",
          d: "By unbundling the lease payments into quarterly instalments",
        },
        correctAnswer: "a",
      },
      {
        id: "q4",
        text: "What is 'vendor recourse' in a managed services funding arrangement?",
        options: {
          a: "The funder's right to recover equipment from the lessee upon default",
          b: "An arrangement where the vendor or MSP agrees to buy back or replace contracts that default, reducing the funder's credit risk",
          c: "Legal recourse available to the vendor against the funder",
          d: "The vendor's right to increase prices mid-contract",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "What funding structure is most appropriate for a large, multi-year managed IT services contract with predictable monthly fees?",
        options: {
          a: "A short-term revolving credit facility",
          b: "A term note or lease facility matched to the contract duration, providing stable long-term funding aligned with the contract's cash flows",
          c: "Equity funding from the MSP's shareholders",
          d: "An overdraft facility",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "What is a 'first-loss piece' in a managed services funding structure?",
        options: {
          a: "The first payment made under the managed service contract",
          b: "A credit enhancement mechanism where the MSP or originator absorbs the first tranche of credit losses, reducing risk to the senior funder",
          c: "The first piece of equipment delivered under the contract",
          d: "The insurance excess paid in the event of equipment loss",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "How does a funder assess the credit quality of a managed services receivable compared to a traditional lease receivable?",
        options: {
          a: "They are assessed identically",
          b: "Managed services receivables require analysis of service performance risk, customer concentration, contract termination clauses, and the MSP's ability to deliver — in addition to standard credit analysis",
          c: "Managed services receivables are always lower risk",
          d: "Funders only assess the equipment value",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "What is a 'back-to-back' funding structure in vendor-managed services?",
        options: {
          a: "A structure where two funders share a single contract equally",
          b: "A structure where the funder provides finance to the MSP against specific customer contracts, with the MSP acting as both originator and servicer",
          c: "A structure where funding terms mirror the vendor's supply terms exactly",
          d: "A structure where the lessee funds the MSP directly",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "What covenant is most commonly required by funders of managed service programmes?",
        options: {
          a: "A minimum equipment age covenant",
          b: "A minimum service quality covenant",
          c: "A portfolio performance covenant — such as minimum portfolio yield, maximum delinquency, or minimum advance rate — triggering remedies if breached",
          d: "A covenant restricting the MSP from acquiring new clients",
        },
        correctAnswer: "c",
      },
      {
        id: "q10",
        text: "What is the significance of 'contract stickiness' when a funder evaluates a managed services portfolio?",
        options: {
          a: "It refers to whether the contracts are legally adhesive to the equipment",
          b: "High contract stickiness — where customers rarely cancel — reduces prepayment and attrition risk, making the receivables more attractive to funders",
          c: "It refers to contracts that are difficult to administer",
          d: "It measures how quickly new contracts are signed",
        },
        correctAnswer: "b",
      },
    ],
  },

  {
    id: "c23",
    title: "Transition and Impact Analysis",
    description:
      "Analyse the transition to new lease accounting standards and their financial impact on organisations.",
    questions: [
      {
        id: "q1",
        text: "What is 'transition date' in the context of adopting IFRS 16?",
        options: {
          a: "The date a new lease is signed",
          b: "The date on which an entity first applies IFRS 16 and must recognise existing lease obligations on the balance sheet",
          c: "The date the lessee returns equipment at end of lease",
          d: "The date the lessor transfers title to the lessee",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "What are the two transition approaches permitted under IFRS 16 on adoption?",
        options: {
          a: "Full retrospective and modified retrospective approaches",
          b: "Operating lease method and finance lease method",
          c: "On-balance-sheet and off-balance-sheet approaches",
          d: "Annual and quarterly transition approaches",
        },
        correctAnswer: "a",
      },
      {
        id: "q3",
        text: "Under the modified retrospective approach for IFRS 16 transition, how is the right-of-use asset typically measured?",
        options: {
          a: "At the fair value of the underlying asset",
          b: "At an amount equal to the lease liability, adjusted for any prepaid or accrued lease payments",
          c: "At the historical cost of the equipment",
          d: "At zero, with no asset recognised",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "What is the impact of IFRS 16 adoption on a lessee's EBITDA?",
        options: {
          a: "EBITDA decreases because lease costs are now higher",
          b: "EBITDA increases because operating lease expenses are replaced by depreciation and interest, which are excluded from EBITDA",
          c: "EBITDA is unaffected by IFRS 16",
          d: "EBITDA decreases because more depreciation is charged",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "How does IFRS 16 adoption affect a company's reported net debt?",
        options: {
          a: "Net debt decreases because leases are now assets",
          b: "Net debt increases because lease liabilities are now recognised on the balance sheet",
          c: "Net debt is unaffected",
          d: "Net debt decreases because operating leases were previously included",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "What is a 'lease inventory exercise' and why is it a critical first step in IFRS 16 transition?",
        options: {
          a: "A physical count of all equipment under lease",
          b: "A systematic identification and cataloguing of all contracts containing a lease to ensure complete and accurate recognition under the new standard",
          c: "An audit of lease payment schedules",
          d: "A review of all lease contracts for early termination clauses",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "What is the impact of IFRS 16 on a lessee's operating cash flow?",
        options: {
          a: "Operating cash flow decreases because lease payments are now higher",
          b: "Operating cash flow improves because the principal portion of lease payments is reclassified from operating to financing activities",
          c: "Operating cash flow is unaffected",
          d: "Operating cash flow decreases because depreciation increases",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "Which key assumption most significantly affects the lease liability recognised at transition?",
        options: {
          a: "The equipment's market value",
          b: "The incremental borrowing rate used to discount future lease payments — a lower IBR results in a higher liability",
          c: "The frequency of lease payments",
          d: "The maintenance obligations of the lessee",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "How should a company communicate the impact of IFRS 16 adoption to its lenders and investors?",
        options: {
          a: "By restating all prior period financials silently",
          b: "By providing clear quantitative disclosure of the transition adjustment, the key assumptions used, and the impact on reported financial metrics and loan covenants",
          c: "By waiting until the first full-year report after adoption",
          d: "By only disclosing if the impact exceeds a materiality threshold",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "How may IFRS 16 affect a company's existing loan covenants?",
        options: {
          a: "Loan covenants are unaffected because funders ignore accounting changes",
          b: "IFRS 16 can cause covenant breaches if debt-to-equity, interest cover, or leverage ratios are defined using reported balance sheet figures that now include lease liabilities",
          c: "IFRS 16 always improves covenant compliance",
          d: "Only new loans entered after IFRS 16 adoption are affected",
        },
        correctAnswer: "b",
      },
    ],
  },

  {
    id: "c24",
    title: "Key Financial Ratios for Lessors",
    description:
      "Master the financial ratios used to evaluate, manage, and benchmark a leasing company's performance.",
    questions: [
      {
        id: "q1",
        text: "What does the 'debt-to-equity ratio' indicate for a leasing company?",
        options: {
          a: "The proportion of the portfolio that is in arrears",
          b: "The ratio of borrowed funds to shareholder equity, indicating the company's financial leverage and the relative contribution of debt versus equity in funding the business",
          c: "The ratio of operating leases to finance leases in the portfolio",
          d: "The proportion of the portfolio funded by securitisation",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "What is the 'net interest margin' (NIM) and why is it a core profitability metric?",
        options: {
          a: "The difference between the largest and smallest lease in the portfolio",
          b: "The spread between the yield earned on the lease portfolio and the cost of funds, expressed as a percentage of average earning assets — the primary driver of a lessor's financial performance",
          c: "The margin between equipment purchase cost and residual value",
          d: "The interest rate charged to the highest-risk lessees",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "What does a high 'delinquency ratio' signal about a lease portfolio?",
        options: {
          a: "Strong portfolio growth",
          b: "Deteriorating credit quality — a high proportion of lessees are behind on payments, signalling elevated credit risk and potential future charge-offs",
          c: "Aggressive origination strategy",
          d: "High residual value exposure",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "What does the 'leverage ratio' measure for a lessor and what is its significance?",
        options: {
          a: "The ratio of equipment age to lease term",
          b: "The ratio of total assets to equity — a higher ratio means the company is more leveraged, amplifying returns but increasing vulnerability to losses",
          c: "The ratio of fixed to variable rate leases",
          d: "The ratio of leases originated to leases renewed",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "What does 'return on average assets' (ROAA) measure for a leasing company?",
        options: {
          a: "The return earned on equity investments",
          b: "The net income generated per dollar of average total assets, reflecting operational efficiency and asset productivity",
          c: "The appreciation in value of leased assets",
          d: "The return earned on assets sold at end of lease",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "What is the 'net charge-off ratio' and what does it reveal?",
        options: {
          a: "The ratio of new originations to total portfolio",
          b: "Annualised lease receivables written off as uncollectable (net of recoveries) as a percentage of average portfolio balance — measuring realised credit losses",
          c: "The ratio of operating costs to total income",
          d: "The ratio of equipment depreciation to original cost",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "What is the 'cost of funds ratio' and how does it affect lease pricing decisions?",
        options: {
          a: "The cost of administering the lease portfolio",
          b: "The blended rate at which the leasing company borrows to fund its portfolio — it sets the floor for lease rates and determines the achievable spread",
          c: "The cost of originating new leases",
          d: "The total cost of equipment acquisitions",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "What does the 'equity multiplier' reveal about a leasing company's financial structure?",
        options: {
          a: "How many times equity has been issued",
          b: "The extent to which assets are financed by equity versus debt — a higher multiplier indicates greater leverage",
          c: "The return on equity relative to industry peers",
          d: "The number of equity investors in the business",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "How is 'portfolio yield' calculated and what does it measure?",
        options: {
          a: "Total lease payments divided by number of leases",
          b: "Total annualised lease income divided by average outstanding portfolio balance — measuring the income-generating efficiency of the portfolio",
          c: "Residual value divided by original equipment cost",
          d: "New originations divided by total portfolio",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "What is the 'provision coverage ratio' and why is it important?",
        options: {
          a: "The ratio of insurance premiums to total lease payments",
          b: "The ratio of loan loss provisions to non-performing or delinquent receivables — indicating whether provisions are sufficient to absorb expected losses",
          c: "The ratio of fixed costs to variable costs",
          d: "The ratio of secured to unsecured leases",
        },
        correctAnswer: "b",
      },
    ],
  },

  {
    id: "c25",
    title: "Funding the Leasing Company",
    description:
      "Understand how leasing companies source, structure, and manage their funding to support portfolio growth.",
    questions: [
      {
        id: "q1",
        text: "What is the primary funding challenge unique to a leasing company compared to a traditional bank?",
        options: {
          a: "Leasing companies cannot borrow money",
          b: "Leasing companies cannot accept deposits and must raise all funding from wholesale markets, institutional investors, or securitisation — making funding cost and availability more variable",
          c: "Leasing companies are prohibited from issuing bonds",
          d: "Leasing companies must fund all leases from equity",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "What is a 'credit facility' and how does a leasing company typically use one?",
        options: {
          a: "A facility for providing credit to lessees",
          b: "A committed borrowing arrangement with a bank or group of banks that the leasing company draws on to fund new lease originations",
          c: "A government programme for subsidising lease rates",
          d: "A facility for managing lease collections",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "What is 'asset-liability management' (ALM) for a leasing company?",
        options: {
          a: "Managing equipment purchases and sales",
          b: "Managing the match between the duration, interest rate, and currency characteristics of lease assets and the funding liabilities that finance them, to control liquidity and rate risk",
          c: "Managing the company's physical assets and employee liabilities",
          d: "Managing the residual value of assets against lease liabilities",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "What is a 'committed' versus an 'uncommitted' funding facility?",
        options: {
          a: "A committed facility is guaranteed by the government; an uncommitted facility is not",
          b: "A committed facility is a legally binding obligation by the lender to provide funds up to a limit; an uncommitted facility can be withdrawn at the lender's discretion",
          c: "A committed facility has a fixed interest rate; an uncommitted facility has a variable rate",
          d: "There is no practical difference",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "What is 'diversification of funding sources' and why is it a best practice for leasing companies?",
        options: {
          a: "Originating leases across multiple industry sectors",
          b: "Using multiple funding channels — bank lines, securitisation, bonds, equity — to reduce dependence on any single source and ensure resilience if one source becomes unavailable",
          c: "Offering leases in multiple currencies",
          d: "Working with multiple equipment vendors",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "What does 'funding tenor' refer to and why does it matter?",
        options: {
          a: "The tone used in funding agreements",
          b: "The duration of the funding facility — matching funding tenor to lease asset duration is critical to avoid maturity mismatches and refinancing risk",
          c: "The interest rate tenor used for pricing",
          d: "The number of funding tranches in a securitisation",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "What is 'equity capital' and what role does it play in funding a leasing company?",
        options: {
          a: "Equity is borrowed from shareholders and must be repaid",
          b: "Equity provides the foundational permanent capital base that absorbs losses, supports leverage, and gives lenders and investors confidence in the company's financial stability",
          c: "Equity is only used to fund the company's operating costs",
          d: "Equity and debt play identical roles in funding a leasing company",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "What is a 'rating agency' and why do larger leasing companies seek a credit rating?",
        options: {
          a: "An agency that rates lease agreements for legal quality",
          b: "An independent organisation that assesses creditworthiness; a credit rating enables the leasing company to access public debt markets and lower its cost of funds",
          c: "A government body that regulates leasing companies",
          d: "An agency that rates the condition of returned equipment",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "What is 'liquidity risk' for a leasing company and how is it managed?",
        options: {
          a: "The risk that equipment cannot be liquidated",
          b: "The risk of being unable to meet financial obligations as they fall due; managed through committed credit facilities, liquidity buffers, and staggered maturity profiles",
          c: "The risk that lease payments are made irregularly",
          d: "The risk of interest rate fluctuations",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "What is a 'securitisation programme' and how does it benefit a leasing company's funding strategy?",
        options: {
          a: "A government programme securing equipment against theft",
          b: "A structured finance programme that pools lease receivables and issues rated securities to investors, providing access to lower-cost, long-term capital and freeing up the company's balance sheet",
          c: "A programme for securing IT equipment against data breaches",
          d: "A legal programme for registering security interests in leased assets",
        },
        correctAnswer: "b",
      },
    ],
  },

  {
    id: "c26",
    title: "Strategic Program Selection",
    description:
      "Learn how to evaluate, select, and position leasing programmes strategically for maximum business impact.",
    questions: [
      {
        id: "q1",
        text: "What is the primary criterion for selecting a leasing programme to offer?",
        options: {
          a: "Choosing the programme with the lowest interest rate",
          b: "Aligning the programme structure with the target client's financial needs, equipment type, transaction size, and risk profile",
          c: "Offering the most complex programme available",
          d: "Copying the programme offered by the market leader",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "What is a 'captive finance programme' and when is it the right strategic choice?",
        options: {
          a: "A programme that captures the highest-risk lessees",
          b: "A financing programme owned and operated by an equipment manufacturer or vendor to support sales of its own products, ideal when the manufacturer wants to control the financing experience",
          c: "A programme that captures government contracts",
          d: "A programme that only funds captive equipment types",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "What factors should a leasing company assess when selecting which asset classes to specialise in?",
        options: {
          a: "Only the current market interest rate",
          b: "Asset liquidity, depreciation profile, market demand, the company's ability to manage and remarketed the asset, and the competitive landscape",
          c: "Only the size of the available market",
          d: "The preferences of the largest single investor",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "What is a 'white label' leasing programme and when is it strategically advantageous?",
        options: {
          a: "A programme for leasing white goods only",
          b: "A programme where a leasing company provides financing under a partner's brand, allowing the partner to offer financing without building their own capabilities",
          c: "A programme that offers the lowest possible rates",
          d: "A programme that is not publicly marketed",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "How should a leasing company assess the strategic fit of a new programme before launch?",
        options: {
          a: "By launching immediately and adjusting based on results",
          b: "Through a structured analysis of market size, target client segment, competitive differentiation, risk profile, required capabilities, and projected return on capital",
          c: "By asking the largest existing client whether they would use it",
          d: "By copying an existing competitor's programme",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "What is 'channel strategy' in the context of leasing programme selection?",
        options: {
          a: "The television channels used for marketing",
          b: "The decision about how to reach target clients — directly, through vendors, brokers, or digital platforms — and aligning the programme structure to the chosen channel",
          c: "The internal communication channels between departments",
          d: "The sequence in which programme features are introduced",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "Why is 'scalability' an important criterion when selecting a leasing programme?",
        options: {
          a: "To ensure the programme can be cancelled easily",
          b: "The programme must be capable of growing transaction volume without proportional increases in cost or risk, ensuring long-term profitability",
          c: "To ensure the programme covers all equipment sizes",
          d: "To allow the programme to scale to international markets immediately",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "What is a 'niche programme' strategy in leasing and what are its advantages?",
        options: {
          a: "Offering the broadest possible range of lease products",
          b: "Focusing on a specific industry, asset type, or client segment where the leasing company can develop specialised expertise, build deeper relationships, and achieve pricing power",
          c: "Offering the lowest rates in a narrow geographic area",
          d: "Targeting only the largest enterprises",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "What is the role of 'pilot programme' testing in strategic programme selection?",
        options: {
          a: "Programmes for pilots and aviation equipment",
          b: "Running a controlled, limited launch to test market response, operational feasibility, and risk metrics before committing to full rollout",
          c: "Testing the sales team's knowledge before launch",
          d: "Offering the programme to pilot clients at no cost",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "How does a leasing company use competitive intelligence when selecting a programme strategy?",
        options: {
          a: "By copying competitor programmes exactly",
          b: "By analysing competitor offerings, pricing, target segments, and gaps in the market to identify differentiated positions and underserved opportunities",
          c: "By avoiding all markets where competitors are active",
          d: "By using lower rates as the only point of differentiation",
        },
        correctAnswer: "b",
      },
    ],
  },

  {
    id: "c27",
    title: "A Taxonomy of Vendor Leasing Programs",
    description:
      "Understand the different types of vendor leasing programmes and how to structure and position each effectively.",
    questions: [
      {
        id: "q1",
        text: "What is a 'vendor leasing programme' in its broadest definition?",
        options: {
          a: "A leasing programme exclusively for government vendors",
          b: "A structured arrangement between a leasing company and an equipment vendor or manufacturer that enables the vendor to offer financing to its customers, typically increasing sales and customer retention",
          c: "A discount programme offered by equipment vendors to leasing companies",
          d: "A leasing programme limited to vendor-owned equipment",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "What is a 'captive' vendor leasing programme?",
        options: {
          a: "A programme that captures government contracts",
          b: "A financing programme wholly owned and operated by the equipment manufacturer itself, such as Caterpillar Financial Products or John Deere Financial",
          c: "A programme that captures only the highest-risk customers",
          d: "A programme operated by a bank on behalf of a vendor",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "What is a 'preferred lender' or 'endorsed' vendor programme?",
        options: {
          a: "A programme where the vendor provides the financing directly",
          b: "An arrangement where the vendor endorses one or more external leasing companies as preferred financing partners, directing customers to those funders",
          c: "A programme limited to vendors with investment-grade ratings",
          d: "A government-backed vendor lending scheme",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "What is a 'private label' or 'white label' vendor programme?",
        options: {
          a: "A programme for leasing privately-labelled equipment brands",
          b: "A programme where the leasing company provides financing under the vendor's brand name, giving the appearance of an in-house financing solution without the vendor building its own capability",
          c: "A confidential programme not disclosed to customers",
          d: "A programme restricted to private companies",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "What is a 'dealer finance' programme in the context of vendor leasing?",
        options: {
          a: "A programme for financing card dealer businesses",
          b: "A programme where a leasing company provides funding through a network of authorised dealers who originate transactions with end customers on behalf of the manufacturer or leasing company",
          c: "A programme where dealers provide their own funding",
          d: "A programme for financing dealer inventory",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "What is a 'floor plan' or 'inventory finance' programme and how does it differ from a customer lease programme?",
        options: {
          a: "They are identical programmes",
          b: "Floor plan finance funds the vendor's or dealer's inventory of equipment before it is sold; a customer lease programme funds the end customer's use of equipment after the sale",
          c: "Floor plan finance is only available for vehicles",
          d: "Customer lease programmes always include floor plan elements",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "What is a 'recourse' vendor programme and what is the vendor's obligation?",
        options: {
          a: "The vendor has no obligations once the sale is made",
          b: "The vendor agrees to repurchase or replace equipment or contracts that default, providing the leasing company with credit support",
          c: "The leasing company has recourse to the equipment only",
          d: "Recourse runs from the vendor to the lessee",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "What is a 'non-recourse' vendor programme and why would a vendor prefer it?",
        options: {
          a: "A programme where the vendor bears all credit losses",
          b: "A programme where the leasing company bears the full credit risk and the vendor has no obligation beyond the sale; the vendor prefers this as it eliminates credit liability from its balance sheet",
          c: "A programme where neither party bears credit risk",
          d: "A programme limited to government customers",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "What is a 'vendor subsidy' or 'rate buy-down' programme?",
        options: {
          a: "A programme where the government subsidises vendor lease rates",
          b: "An arrangement where the vendor uses a portion of its profit margin to reduce the customer's lease rate, making the financing more attractive and driving higher equipment sales",
          c: "A programme where the leasing company subsidises its own rates",
          d: "A loyalty discount programme for long-term vendors",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "What makes a vendor leasing programme strategically valuable to both the equipment vendor and the leasing company?",
        options: {
          a: "It only benefits the leasing company",
          b: "The vendor gains a financing tool that accelerates sales, improves customer retention, and provides end-of-term refresh opportunities; the leasing company gains a consistent, low-cost deal flow through the vendor's sales network",
          c: "It only benefits the vendor",
          d: "It is only valuable for large enterprises",
        },
        correctAnswer: "b",
      },
    ],
  },

  {
    id: "c28",
    title: "Go-to-Market Strategy",
    description:
      "Develop and execute effective go-to-market strategies for leasing products and programmes.",
    questions: [
      {
        id: "q1",
        text: "What is a 'go-to-market strategy' (GTM) in the context of a leasing company?",
        options: {
          a: "A strategy for taking the company public",
          b: "A plan that defines how the company will reach its target customers, deliver its value proposition, and achieve competitive advantage through its chosen distribution channels and marketing approach",
          c: "A strategy for entering new geographic markets only",
          d: "A product launch timeline",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "What is 'target market segmentation' and why is it the foundation of a GTM strategy?",
        options: {
          a: "Setting sales targets for each market",
          b: "Dividing the total addressable market into distinct groups by industry, size, equipment type, or need so that the value proposition and sales approach can be precisely tailored to each segment",
          c: "Segmenting the sales team by territory",
          d: "Identifying competitors in each market",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "What is a 'total addressable market' (TAM) and how is it used in GTM planning?",
        options: {
          a: "The total number of employees in the leasing company",
          b: "The total revenue opportunity available if the company captured 100% of its target market; used to size the opportunity and prioritise resource allocation",
          c: "The total value of leases currently on the company's books",
          d: "The total number of lessees in the company's existing portfolio",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "What is a 'distribution channel strategy' in leasing GTM?",
        options: {
          a: "The strategy for distributing equipment to clients",
          b: "The plan for how the leasing company will reach and serve customers — directly, through brokers, through vendor partnerships, or via digital platforms",
          c: "The strategy for distributing lease payments to investors",
          d: "The internal distribution of sales leads",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "What is 'competitive positioning' and how does it shape a leasing GTM strategy?",
        options: {
          a: "Positioning the company as the only provider in the market",
          b: "Defining how the leasing company's offering differs from competitors in ways that are meaningful to target customers — such as speed, specialisation, service, or pricing — to create a defensible market position",
          c: "Monitoring competitor pricing on a weekly basis",
          d: "Positioning for competitive tender processes only",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "What is the role of 'digital channels' in a modern leasing GTM strategy?",
        options: {
          a: "Digital channels are irrelevant for B2B leasing",
          b: "Digital channels — including websites, online application portals, CRM systems, and social media — enable the leasing company to generate leads, streamline originations, and build brand awareness cost-effectively",
          c: "Digital channels only support consumer leasing programmes",
          d: "Digital channels replace all human sales roles",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "What does 'sales enablement' mean in a leasing GTM context?",
        options: {
          a: "Enabling the sales team to work remotely",
          b: "Providing the sales team with the tools, training, content, and processes they need to effectively communicate the value proposition and convert prospects to clients",
          c: "Enabling the sales team to set their own targets",
          d: "Automating the entire sales process",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "What is a 'launch plan' in a leasing GTM strategy and what should it include?",
        options: {
          a: "A plan for launching new equipment models",
          b: "A phased plan covering target segment selection, value proposition, sales training, marketing collateral, channel activation, pricing, and success metrics for bringing a new programme to market",
          c: "A plan for launching the company's IPO",
          d: "A plan for launching a new office location",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "What is 'key account management' (KAM) and why is it important in a leasing GTM strategy?",
        options: {
          a: "Managing the company's bank accounts",
          b: "A structured approach to building deep, strategic relationships with the most valuable clients or vendor partners, maximising long-term revenue and retention",
          c: "Managing the accounts receivable ledger",
          d: "A programme for new client acquisition only",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "How do 'success metrics' and 'KPIs' function within a leasing GTM plan?",
        options: {
          a: "They are optional additions to a GTM plan",
          b: "They define measurable targets — such as origination volume, conversion rates, cost of acquisition, and customer retention — against which the effectiveness of the GTM strategy is tracked and optimised",
          c: "They are used only for internal reporting to shareholders",
          d: "They replace the need for a marketing budget",
        },
        correctAnswer: "b",
      },
    ],
  },

  {
    id: "c29",
    title: "Profit Dynamics in Vendor Leasing",
    description:
      "Understand the profit drivers, cost structures, and optimisation strategies in vendor leasing programmes.",
    questions: [
      {
        id: "q1",
        text: "What is the primary source of profit in a vendor leasing programme for the leasing company?",
        options: {
          a: "Equipment sales commissions",
          b: "The spread between the lease rate charged to the customer and the leasing company's cost of funds, plus income from fees and residual value realisation",
          c: "Insurance premiums collected from lessees",
          d: "Late payment penalty income",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "What is 'deal economics' in the context of a vendor lease transaction?",
        options: {
          a: "The macroeconomic environment affecting lease demand",
          b: "The analysis of the revenue, cost of funds, credit losses, servicing costs, and residual value to determine the net profit contribution of an individual lease transaction",
          c: "The economics of the vendor's own business",
          d: "The total economic value of leased equipment",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "How does 'volume' affect profitability in a vendor leasing programme?",
        options: {
          a: "Higher volume always reduces profitability",
          b: "Higher volume spreads fixed operational costs over more transactions, improving the cost per deal and overall programme profitability — provided credit quality is maintained",
          c: "Volume has no impact on fixed costs",
          d: "Lower volume always results in higher profit margins",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "What is 'residual value income' and how does it contribute to vendor leasing profitability?",
        options: {
          a: "Income from charging residual value fees to lessees",
          b: "The profit realised when equipment returned at end of lease is sold or re-leased at a price exceeding the lessor's book value — a key upside in well-managed operating lease programmes",
          c: "The income from residual value insurance premiums",
          d: "The income from the final lease payment",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "What is 'fee income' in vendor leasing and how does it enhance programme profitability?",
        options: {
          a: "Fees charged by the vendor to the leasing company",
          b: "Income from documentation fees, origination fees, and ancillary charges that supplement the interest spread and improve the overall economics of each transaction",
          c: "Fees earned from managing equipment maintenance",
          d: "Regulatory fees charged to lessees",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "How does credit loss impact vendor leasing programme profitability?",
        options: {
          a: "Credit losses have no impact on profitability",
          b: "Credit losses directly reduce net income and, if unexpected, erode or eliminate the interest spread; pricing must adequately anticipate expected losses to maintain target returns",
          c: "Credit losses are always covered by insurance",
          d: "Credit losses only affect the vendor, not the leasing company",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "What is 'cost of origination' and how should it be managed in a vendor programme?",
        options: {
          a: "The cost of manufacturing the leased equipment",
          b: "The total cost to source, underwrite, and document a new lease transaction; it must be managed against deal size and margin to ensure each transaction is economically viable",
          c: "The origination fee charged to the lessee",
          d: "The cost of the vendor's sales force",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "What is 'cross-sell and upsell' income in a vendor leasing context?",
        options: {
          a: "Income from selling equipment across different vendors",
          b: "Revenue generated by offering complementary products — such as insurance, maintenance, or extended terms — to existing clients, improving lifetime value per customer",
          c: "Income from upselling more expensive equipment",
          d: "Revenue from selling the lease portfolio to another funder",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "What is 'portfolio run-off' and how does it affect profitability planning?",
        options: {
          a: "Equipment running off the end of the production line",
          b: "The natural decline in the outstanding portfolio balance as leases mature and are not replaced; without sufficient new originations, income declines and fixed costs represent a larger proportion of revenue",
          c: "Customers running off to competitors",
          d: "The decline in residual values over time",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "What is the 'profitability per deal' metric and why is it important for vendor programme management?",
        options: {
          a: "The total revenue generated by a vendor programme",
          b: "The net income contribution per lease transaction after all costs (funding, credit losses, origination, servicing, and tax); it reveals whether the programme is generating adequate returns at the transaction level",
          c: "The profit shared with the vendor per deal",
          d: "The gross profit from equipment sales per deal",
        },
        correctAnswer: "b",
      },
    ],
  },

  {
    id: "c30",
    title: "Foundations of Vendor Leasing",
    description:
      "Build a solid understanding of the fundamentals of vendor leasing and how it creates value for all parties.",
    questions: [
      {
        id: "q1",
        text: "What is 'vendor leasing' and how does it differ from direct leasing?",
        options: {
          a: "Vendor leasing is only available for vehicle fleets",
          b: "Vendor leasing is a financing arrangement where a leasing company partners with an equipment vendor to offer financing at the point of sale; in direct leasing, the lessor approaches the end customer independently without a vendor intermediary",
          c: "Vendor leasing is always provided by banks, not leasing companies",
          d: "There is no difference between vendor and direct leasing",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "What are the three key parties in a typical vendor leasing transaction?",
        options: {
          a: "The manufacturer, distributor, and retailer",
          b: "The vendor (equipment seller), the lessee (customer), and the lessor (financing company)",
          c: "The bank, the government, and the lessee",
          d: "The insurance company, the vendor, and the bank",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "How does vendor leasing benefit the equipment vendor?",
        options: {
          a: "The vendor earns interest income on the lease",
          b: "Vendor leasing removes price as a barrier to the sale by converting the upfront cost to affordable monthly payments, accelerating sales cycles and improving customer retention",
          c: "The vendor retains ownership of the equipment",
          d: "The vendor avoids all credit risk",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "How does vendor leasing benefit the lessee (customer)?",
        options: {
          a: "The lessee receives a discount on the equipment purchase price",
          b: "The lessee gains access to equipment with minimal upfront cost, predictable payments, and often a convenient one-stop purchase and finance solution through the vendor",
          c: "The lessee immediately owns the equipment",
          d: "The lessee avoids all maintenance obligations",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "What is a 'vendor agreement' or 'programme agreement' in vendor leasing?",
        options: {
          a: "An agreement between the vendor and the equipment manufacturer",
          b: "A formal contract between the leasing company and the vendor defining the terms of their financing partnership — including the programme structure, vendor responsibilities, recourse arrangements, and pricing parameters",
          c: "An agreement between the lessee and the vendor for equipment maintenance",
          d: "A legal agreement governing equipment warranties",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "What is 'point of sale financing' in a vendor leasing context?",
        options: {
          a: "Financing provided at the point of equipment sale, allowing the customer to apply for and receive a lease decision immediately — removing friction from the purchase process",
          b: "Financing for the vendor's own purchases",
          c: "A cash discount offered at the point of sale",
          d: "Financing for the vendor's retail outlet",
        },
        correctAnswer: "a",
      },
      {
        id: "q7",
        text: "What is the 'end-of-term refresh cycle' and why is it valuable in vendor leasing?",
        options: {
          a: "The process of cleaning equipment at end of lease",
          b: "The natural cycle where leases expire, equipment is returned, and lessees upgrade to new equipment — creating recurring revenue for the vendor and the leasing company",
          c: "The cycle of refreshing the vendor's product catalogue",
          d: "The annual programme review process",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "What is 'application scoring' in a vendor leasing programme?",
        options: {
          a: "Scoring the quality of the vendor's application to join the programme",
          b: "An automated or semi-automated credit evaluation process that quickly assesses a customer's creditworthiness at the point of sale, enabling fast decisions and minimising friction",
          c: "A scoring system for comparing different vendor programmes",
          d: "A method for scoring the condition of equipment",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "What is 'vendor training' and why is it essential for a successful vendor leasing programme?",
        options: {
          a: "Training the vendor on equipment operation",
          b: "Educating the vendor's sales staff on how to present, position, and originate lease financing to customers — ensuring high-quality deal flow and reducing errors in applications",
          c: "Training the vendor on accounting standards",
          d: "Training the vendor to underwrite credit independently",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "What is a 'programme review' in vendor leasing management and why is it conducted regularly?",
        options: {
          a: "A review of the vendor's equipment catalogue",
          b: "A periodic assessment of the programme's performance covering origination volume, credit quality, profitability, and relationship health — enabling the parties to identify improvements and renegotiate terms if necessary",
          c: "A compliance audit by a regulatory body",
          d: "A review of the lessee's payment history",
        },
        correctAnswer: "b",
      },
    ],
  },

  {
    id: "c31",
    title: "Lessee Accounting under IFRS 16",
    description:
      "Master the lessee accounting requirements under IFRS 16, from recognition through to disclosure.",
    questions: [
      {
        id: "q1",
        text: "What two items must a lessee recognise on the balance sheet at lease commencement under IFRS 16?",
        options: {
          a: "A lease expense and a lease creditor",
          b: "A right-of-use (ROU) asset and a corresponding lease liability",
          c: "A finance cost and a depreciation charge",
          d: "A prepayment and a deferred tax liability",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "How is the lease liability initially measured under IFRS 16?",
        options: {
          a: "At the total undiscounted future lease payments",
          b: "At the present value of future lease payments, discounted at the rate implicit in the lease or the lessee's incremental borrowing rate",
          c: "At the fair value of the underlying asset",
          d: "At the equipment's purchase price less expected residual value",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "What costs are included in the initial measurement of the right-of-use asset?",
        options: {
          a: "Only the initial lease liability",
          b: "The initial lease liability, lease payments made at or before commencement, initial direct costs, and estimated dismantling/restoration costs",
          c: "Only the initial direct costs",
          d: "The fair value of the equipment plus transaction costs",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "How is the right-of-use asset depreciated under IFRS 16?",
        options: {
          a: "It is not depreciated — it remains at cost",
          b: "On a straight-line basis over the shorter of the lease term and the asset's useful life, unless another systematic method is more appropriate",
          c: "Using the reducing balance method only",
          d: "It is amortised using the effective interest method",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "How is the lease liability subsequently measured after initial recognition?",
        options: {
          a: "It remains at the initial measurement throughout the lease",
          b: "The liability is increased by interest accrued (unwinding of discount) and reduced by lease payments made, with reassessment when certain events occur",
          c: "It is reduced on a straight-line basis",
          d: "It is revalued to fair value at each reporting date",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "What is the income statement impact of a lease under IFRS 16 lessee accounting?",
        options: {
          a: "A single operating lease expense on a straight-line basis",
          b: "Depreciation of the ROU asset (typically in operating expenses) and interest expense on the lease liability (in finance costs), front-loading total expense compared to straight-line",
          c: "Only a finance cost in the income statement",
          d: "No income statement impact — only balance sheet effects",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "Under IFRS 16, where are lease payments presented in the cash flow statement?",
        options: {
          a: "Entirely within operating activities",
          b: "The principal component within financing activities and the interest component within either financing or operating activities per the entity's accounting policy",
          c: "Entirely within investing activities",
          d: "Entirely within financing activities",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "What triggers a remeasurement of the lease liability under IFRS 16?",
        options: {
          a: "Every year at the reporting date",
          b: "Changes in the lease term, changes in the assessment of a purchase option, changes in amounts expected to be payable under residual value guarantees, or changes in the index or rate used for variable payments",
          c: "Changes in the market value of the underlying asset",
          d: "Changes in the lessee's incremental borrowing rate only",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "What are the two practical expedients available to lessees under IFRS 16?",
        options: {
          a: "Exemption for leases of real estate and exemption for leases of vehicles",
          b: "Exemption for short-term leases (12 months or less at commencement) and exemption for leases of low-value assets",
          c: "Exemption for variable payment leases and exemption for cross-border leases",
          d: "Exemption for operating leases and exemption for finance leases",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "What disclosure must a lessee provide in its financial statements under IFRS 16?",
        options: {
          a: "Only the total future minimum lease payments",
          b: "Quantitative and qualitative information enabling users to assess the nature, timing, and amounts of lease transactions — including a maturity analysis of lease liabilities, depreciation charges, interest expense, and total cash outflows",
          c: "Only the carrying value of right-of-use assets",
          d: "Only the lease liability balance at year end",
        },
        correctAnswer: "b",
      },
    ],
  },

  // {
  //   id: "c32",
  //   title: "Introduction to IFRS 16",
  //   description:
  //     "Gain a clear foundational understanding of IFRS 16 — its scope, objectives, and key concepts.",
  //   questions: [
  //     {
  //       id: "q1",
  //       text: "What problem did IFRS 16 primarily seek to solve?",
  //       options: {
  //         a: "To simplify lease documentation for lessees",
  //         b: "To bring transparency to lessee financial statements by requiring most leases to be recognised on the balance sheet, eliminating the widespread use of off-balance-sheet operating leases",
  //         c: "To standardise lease payment terms globally",
  //         d: "To reduce the cost of leasing for small businesses",
  //       },
  //       correctAnswer: "b",
  //     },
  //     {
  //       id: "q2",
  //       text: "When did IFRS 16 become effective?",
  //       options: {
  //         a: "1 January 2013",
  //         b: "1 January 2019",
  //         c: "1 January 2021",
  //         d: "1 January 2025",
  //       },
  //       correctAnswer: "b",
  //     },
  //     {
  //       id: "q3",
  //       text: "Which standard did IFRS 16 replace?",
  //       options: {
  //         a: "IAS 17",
  //         b: "IFRS 9",
  //         c: "IAS 39",
  //         d: "IFRS 15",
  //       },
  //       correctAnswer: "a",
  //     },
  //     {
  //       id: "q4",
  //       text: "Under IFRS 16, what is the definition of a lease?",
  //       options: {
  //         a: "Any contract involving the payment of a regular fee for the use of an asset",
  //         b: "A contract, or part of a contract, that conveys the right to control the use of an identified asset for a period of time in exchange for consideration",
  //         c: "Any contract where title to an asset transfers at the end of the term",
  //         d: "A contract for the purchase of an asset through instalment payments",
  //       },
  //       correctAnswer: "b",
  //     },
  //     {
  //       id: "q5",
  //       text: "What are the two key elements that determine whether a contract contains a lease under IFRS 16?",
  //       options: {
  //         a: "The contract must be in writing and signed by both parties",
  //         b: "There must be an identified asset and the customer must have the right to control the use of that asset throughout the period of use",
  //         c: "The contract must specify a fixed term and a fixed payment",
  //         d: "The asset must be tangible and the payments must be monthly",
  //       },
  //       correctAnswer: "b",
  //     },
  //     {
  //       id: "q6",
  //       text: "Which entities are required to apply IFRS 16?",
  //       options: {
  //         a: "All companies globally",
  //         b: "Entities that prepare financial statements in accordance with IFRS, including both lessees and lessors",
  //         c: "Only listed companies in the European Union",
  //         d: "Only lessors — lessees apply ASC 842",
  //       },
  //       correctAnswer: "b",
  //     },
  //     {
  //       id: "q7",
  //       text: "What are the two types of leases recognised under IFRS 16 for lessors?",
  //       options: {
  //         a: "Short-term and long-term leases",
  //         b: "Finance leases and operating leases",
  //         c: "Recognised and unrecognised leases",
  //         d: "On-balance-sheet and off-balance-sheet leases",
  //       },
  //       correctAnswer: "b",
  //     },
  //     {
  //       id: "q8",
  //       text: "What is meant by 'right of substitution' and how does it affect the lease assessment?",
  //       options: {
  //         a: "The lessee's right to substitute one piece of equipment for another",
  //         b: "If the supplier has a substantive right to substitute the asset throughout the period of use, the contract does not contain a lease — because the customer does not control a specific identified asset",
  //         c: "The lessor's right to substitute the lessee",
  //         d: "The right to substitute cash payments for equipment returns",
  //       },
  //       correctAnswer: "b",
  //     },
  //     {
  //       id: "q9",
  //       text: "What is the scope exclusion for 'low-value assets' under IFRS 16?",
  //       options: {
  //         a: "Assets with a cost of less than $1,000",
  //         b: "Lessees may apply a practical expedient to not recognise leases of underlying assets that are of low value when new (commonly interpreted as below approximately USD 5,000), expensing payments on a straight-line basis instead",
  //         c: "Assets that depreciate to zero within 12 months",
  //         d: "All assets under $50,000 original cost",
  //       },
  //       correctAnswer: "b",
  //     },
  //     {
  //       id: "q10",
  //       text: "Why is IFRS 16 considered a significant improvement in transparency over its predecessor IAS 17?",
  //       options: {
  //         a: "Because it simplifies lease accounting to a single journal entry",
  //         b: "Because it ensures that all material lease obligations are visible on the lessee's balance sheet, allowing investors and analysts to see the true extent of a company's financial commitments rather than relying on footnote disclosures",
  //         c: "Because it eliminates the need for lease disclosures",
  //         d: "Because it reduces the number of leases companies can enter into",
  //       },
  //       correctAnswer: "b",
  //     },
  //   ],
  // },

  {
    "id": "c32",
    "title": "Introduction to IFRS 16",
    "description": "Gain a clear foundational understanding of IFRS 16 — its scope, objectives, and key concepts.",
    "questions": [
      {
        "id": "q1",
        "text": "What problem did IFRS 16 primarily seek to solve?",
        "options": {
          "a": "To simplify lease documentation for lessees",
          "b": "To standardise lease payment terms globally",
          "c": "To bring transparency to lessee financial statements by requiring most leases to be recognised on the balance sheet, eliminating the widespread use of off-balance-sheet operating leases",
          "d": "To reduce the cost of leasing for small businesses"
        },
        "correctAnswer": "c"
      },
      {
        "id": "q2",
        "text": "When did IFRS 16 become effective?",
        "options": {
          "a": "1 January 2013",
          "b": "1 January 2021",
          "c": "1 January 2019",
          "d": "1 January 2025"
        },
        "correctAnswer": "c"
      },
      {
        "id": "q3",
        "text": "Which standard did IFRS 16 replace?",
        "options": {
          "a": "IFRS 9",
          "b": "IAS 17",
          "c": "IAS 39",
          "d": "IFRS 15"
        },
        "correctAnswer": "b"
      },
      {
        "id": "q4",
        "text": "Under IFRS 16, what is the definition of a lease?",
        "options": {
          "a": "A contract, or part of a contract, that conveys the right to control the use of an identified asset for a period of time in exchange for consideration",
          "b": "Any contract involving the payment of a regular fee for the use of an asset",
          "c": "Any contract where title to an asset transfers at the end of the term",
          "d": "A contract for the purchase of an asset through instalment payments"
        },
        "correctAnswer": "a"
      },
      {
        "id": "q5",
        "text": "What are the two key elements that determine whether a contract contains a lease under IFRS 16?",
        "options": {
          "a": "The contract must be in writing and signed by both parties",
          "b": "There must be an identified asset and the customer must have the right to control the use of that asset throughout the period of use",
          "c": "The contract must specify a fixed term and a fixed payment",
          "d": "The asset must be tangible and the payments must be monthly"
        },
        "correctAnswer": "b"
      },
      {
        "id": "q6",
        "text": "Which entities are required to apply IFRS 16?",
        "options": {
          "a": "Entities that prepare financial statements in accordance with IFRS, including both lessees and lessors",
          "b": "All companies globally",
          "c": "Only listed companies in the European Union",
          "d": "Only lessors — lessees apply ASC 842"
        },
        "correctAnswer": "a"
      },
      {
        "id": "q7",
        "text": "What are the two types of leases recognised under IFRS 16 for lessors?",
        "options": {
          "a": "Short-term and long-term leases",
          "b": "Finance leases and operating leases",
          "c": "Recognised and unrecognised leases",
          "d": "On-balance-sheet and off-balance-sheet leases"
        },
        "correctAnswer": "b"
      },
      {
        "id": "q8",
        "text": "What is meant by 'right of substitution' and how does it affect the lease assessment?",
        "options": {
          "a": "The lessee's right to substitute one piece of equipment for another",
          "b": "If the supplier has a substantive right to substitute the asset throughout the period of use, the contract does not contain a lease — because the customer does not control a specific identified asset",
          "c": "The lessor's right to substitute the lessee",
          "d": "The right to substitute cash payments for equipment returns"
        },
        "correctAnswer": "b"
      },
      {
        "id": "q9",
        "text": "What is the scope exclusion for 'low-value assets' under IFRS 16?",
        "options": {
          "a": "Assets with a cost of less than $1,000",
          "b": "Assets that depreciate to zero within 12 months",
          "c": "Lessees may apply a practical expedient to not recognise leases of underlying assets that are of low value when new (commonly interpreted as below approximately USD 5,000), expensing payments on a straight-line basis instead",
          "d": "All assets under $50,000 original cost"
        },
        "correctAnswer": "c"
      },
      {
        "id": "q10",
        "text": "Why is IFRS 16 considered a significant improvement in transparency over its predecessor IAS 17?",
        "options": {
          "a": "Because it simplifies lease accounting to a single journal entry",
          "b": "Because it ensures that all material lease obligations are visible on the lessee's balance sheet, allowing investors and analysts to see the true extent of a company's financial commitments rather than relying on footnote disclosures",
          "c": "Because it eliminates the need for lease disclosures",
          "d": "Because it reduces the number of leases companies can enter into"
        },
        "correctAnswer": "b"
      },
      {
        "id": "q11",
        "text": "For lessees, how does IFRS 16 initially recognise most leases?",
        "options": {
          "a": "As an expense immediately",
          "b": "As a right-of-use asset and a lease liability",
          "c": "As an off-balance-sheet item",
          "d": "As a contingent liability only"
        },
        "correctAnswer": "b"
      },
      {
        "id": "q12",
        "text": "How is the lease liability initially measured under IFRS 16?",
        "options": {
          "a": "Fair value of the leased asset",
          "b": "Undiscounted future lease payments",
          "c": "Present value of lease payments not yet paid",
          "d": "Carrying amount of the asset in lessor's books"
        },
        "correctAnswer": "c"
      },
      {
        "id": "q13",
        "text": "Which of the following is included in lease payments for lessees under IFRS 16?",
        "options": {
          "a": "Only the base rent",
          "b": "Fixed payments, variable payments linked to an index, purchase option exercise price if reasonably certain, and residual value guarantees",
          "c": "Only payments to the lessor for asset use",
          "d": "Only insurance and maintenance payments"
        },
        "correctAnswer": "b"
      },
      {
        "id": "q14",
        "text": "What discount rate does a lessee typically use for present value calculation under IFRS 16?",
        "options": {
          "a": "Lessor's cost of equity",
          "b": "Risk-free government bond rate",
          "c": "Interest rate implicit in the lease, if practicable; otherwise the lessee's incremental borrowing rate",
          "d": "Central bank base rate"
        },
        "correctAnswer": "c"
      },
      {
        "id": "q15",
        "text": "How does IFRS 16 treat short-term leases (12 months or less, no purchase option)?",
        "options": {
          "a": "Capitalised like all other leases",
          "b": "Disclosed only in footnotes",
          "c": "May be expensed on a straight-line basis as a practical expedient",
          "d": "Prohibited under IFRS 16"
        },
        "correctAnswer": "c"
      },
      {
        "id": "q16",
        "text": "Under IFRS 16, lessees subsequently account for the right-of-use asset using:",
        "options": {
          "a": "Cost model (depreciated cost) unless another standard requires fair value",
          "b": "Fair value model for all assets",
          "c": "Revaluation model only for property",
          "d": "Lower of cost and net realisable value"
        },
        "correctAnswer": "a"
      },
      {
        "id": "q17",
        "text": "A lessee reassesses the lease liability when:",
        "options": {
          "a": "Every reporting period automatically",
          "b": "There is a change in lease term, purchase option assessment, or a modification to payments",
          "c": "Market interest rates change generally",
          "d": "The lessor requests it"
        },
        "correctAnswer": "b"
      },
      {
        "id": "q18",
        "text": "Under IFRS 16, lessor accounting for a finance lease results in:",
        "options": {
          "a": "Asset kept on lessor's balance sheet, rental income recognised",
          "b": "Asset derecognised, lease receivable recognised",
          "c": "No entry until lease ends",
          "d": "Lease treated as an investment property"
        },
        "correctAnswer": "b"
      },
      {
        "id": "q19",
        "text": "For an operating lease under IFRS 16 lessor accounting, lease income is recognised:",
        "options": {
          "a": "On a straight-line basis or another systematic basis",
          "b": "Upfront entirely",
          "c": "Only upon cash receipt",
          "d": "At the end of the lease term"
        },
        "correctAnswer": "a"
      },
      {
        "id": "q20",
        "text": "In a sale and leaseback transaction where the transfer is a sale under IFRS 15, the seller-lessee:",
        "options": {
          "a": "Ignores the leaseback entirely",
          "b": "Recognises the full gain immediately",
          "c": "Recognises only the gain on rights transferred",
          "d": "Defers all gain until lease end"
        },
        "correctAnswer": "c"
      },
      {
        "id": "q21",
        "text": "Which of the following is typically a lessee exemption from capitalising a lease under IFRS 16?",
        "options": {
          "a": "Leases where the lessee expects to renew indefinitely",
          "b": "Short-term leases (12 months or less)",
          "c": "Leases with variable payments only",
          "d": "Leases of land and buildings combined"
        },
        "correctAnswer": "b"
      },
      {
        "id": "q22",
        "text": "Under IFRS 16, the right-of-use asset is initially measured at:",
        "options": {
          "a": "The lease liability amount plus initial direct costs and prepayments, minus lease incentives",
          "b": "Fair value of the leased asset",
          "c": "Undiscounted lease payments",
          "d": "The lessor's carrying amount"
        },
        "correctAnswer": "a"
      },
      {
        "id": "q23",
        "text": "IFRS 16 requires lessees to present right-of-use assets:",
        "options": {
          "a": "As a single line item called 'Lease assets'",
          "b": "Separately or within the same line as PPE (with disclosure)",
          "c": "Only in the notes to the financial statements",
          "d": "As part of goodwill"
        },
        "correctAnswer": "b"
      },
      {
        "id": "q24",
        "text": "What is the effect of IFRS 16 on lessees' operating cash flow classification?",
        "options": {
          "a": "No change from IAS 17",
          "b": "Principal portion of lease payments is financing outflow; interest portion is either operating or financing",
          "c": "All lease payments are operating outflows",
          "d": "All lease payments are financing outflows"
        },
        "correctAnswer": "b"
      },
      {
        "id": "q25",
        "text": "Under IFRS 16, variable lease payments not linked to an index or rate are:",
        "options": {
          "a": "Excluded from the lease liability and expensed as incurred",
          "b": "Capitalised and amortised over the lease term",
          "c": "Included in the initial measurement of the lease liability",
          "d": "Disclosed as a contingent liability only"
        },
        "correctAnswer": "a"
      }
    ]
}

  {
    id: "c33",
    title: "Lessor Accounting under IFRS 16",
    description:
      "Understand how lessors classify and account for leases under IFRS 16.",
    questions: [
      {
        id: "q1",
        text: "How does IFRS 16 lessor accounting differ fundamentally from lessee accounting?",
        options: {
          a: "Lessors apply a single model for all leases, just like lessees",
          b: "IFRS 16 retains the IAS 17 dual classification model for lessors — finance leases and operating leases — with no single on-balance-sheet model, unlike the single lessee model",
          c: "Lessors are exempt from IFRS 16",
          d: "Lessor accounting under IFRS 16 is identical to IAS 17",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "How does a lessor classify a lease as a finance lease under IFRS 16?",
        options: {
          a: "When the lease term is more than 12 months",
          b: "When the lease transfers substantially all the risks and rewards incidental to ownership of the underlying asset to the lessee",
          c: "When the lessee has a purchase option",
          d: "When the lease is for equipment with a value above $50,000",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "How does a lessor account for a finance lease on initial recognition?",
        options: {
          a: "By keeping the asset on the balance sheet and recognising lease income",
          b: "By derecognising the underlying asset and recognising a net investment in the lease — the present value of future lease payments — as a financial receivable",
          c: "By recognising a right-of-use asset and a lease liability",
          d: "By recording the full lease payments as deferred revenue",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "What is the 'net investment in a finance lease' for a lessor?",
        options: {
          a: "The lessor's equity investment in the leasing company",
          b: "The gross investment in the lease (total future lease payments plus unguaranteed residual value) discounted at the rate implicit in the lease",
          c: "The fair value of the underlying asset at commencement",
          d: "The outstanding principal on the lessor's borrowings",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "How does a lessor recognise income on a finance lease over the lease term?",
        options: {
          a: "By recognising equal income in each period",
          b: "By recognising finance income using the effective interest method, allocating income over the lease term to produce a constant periodic rate of return on the net investment",
          c: "By recognising all income at commencement",
          d: "By recognising income only when cash is received",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "How does a lessor account for an operating lease?",
        options: {
          a: "By derecognising the asset and recognising a receivable",
          b: "By retaining the underlying asset on the balance sheet, continuing to depreciate it, and recognising lease income on a straight-line or other systematic basis over the lease term",
          c: "By recognising the present value of future payments as revenue upfront",
          d: "By recording the equipment at fair value at each reporting date",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "What happens when a lessor modifies an operating lease?",
        options: {
          a: "The lease must always be reclassified as a finance lease",
          b: "If the modification expands the scope or extends the term, it is accounted for as a new lease from the effective date of the modification; if not, the lessor adjusts income recognition",
          c: "All modifications are treated as terminations and new leases",
          d: "Modifications have no accounting impact on the lessor",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "What is a 'manufacturer or dealer lessor' and how is the profit on sale recognised?",
        options: {
          a: "A lessor that manufactures or sells goods and uses leasing as a promotional tool; under a finance lease, it recognises revenue and cost of goods sold as if an outright sale occurred, plus finance income over the lease term",
          b: "A lessor that only leases to manufacturers",
          c: "A lessor that manufactures its own lease documentation",
          d: "A dealer that acts as an intermediary but never takes title",
        },
        correctAnswer: "a",
      },
      {
        id: "q9",
        text: "How must lessors present finance lease receivables on the balance sheet?",
        options: {
          a: "As a single line item at the gross lease payment amount",
          b: "As the net investment in the lease, typically split between current and non-current portions, reflecting the present value of future cash flows",
          c: "As a tangible fixed asset alongside owned equipment",
          d: "Off-balance-sheet in footnote disclosures only",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "What key disclosure must a lessor provide under IFRS 16?",
        options: {
          a: "Only the total lease income received in the period",
          b: "Qualitative and quantitative disclosures enabling users to assess the lessor's risk exposure — including a maturity analysis of lease receivables (finance leases) or undiscounted future payments (operating leases), significant judgements, and risk management information",
          c: "Only the carrying value of assets under operating leases",
          d: "Only the identity of major lessees",
        },
        correctAnswer: "b",
      },
    ],
  },
  {
    id: "c34",
    title: "Introduction to ESG",
    description:
      "Test your foundational knowledge of the Environmental, Social, and Governance (ESG) framework.",
    questions: [
      {
        id: "q1",
        text: "What does the 'Governance' (G) pillar in ESG primarily cover?",
        options: {
          a: "A company's carbon emissions and water usage",
          b: "A company's relationships with its employees and communities",
          c: "How a company is directed and controlled, including board composition and executive pay",
          d: "The company's marketing and branding strategy",
        },
        correctAnswer: "c",
      },
      {
        id: "q2",
        text: "Why is ESG considered a risk management framework, not just an ethical choice?",
        options: {
          a: "Because ethical choices are never profitable",
          b: "Because ESG factors like climate risk and governance failures can materially affect a company's financial performance",
          c: "Because the government mandates it for all public companies",
          d: "Because it is a new accounting standard",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "What is a 'material ESG factor'?",
        options: {
          a: "An ESG issue that is popular in the media",
          b: "An ESG issue that is easy to measure and report",
          c: "An ESG issue significant enough to affect a company's financial performance, valuation, or risk profile",
          d: "Any factor listed in the GRI standards",
        },
        correctAnswer: "c",
      },
      {
        id: "q4",
        text: "Which of the following is an example of a metric for the 'Social' (S) pillar?",
        options: {
          a: "Tonnes of CO₂ emitted",
          b: "Board independence percentage",
          c: "Employee turnover rate",
          d: "Energy consumption per unit of production",
        },
        correctAnswer: "c",
      },
      {
        id: "q5",
        text: "The term 'ESG' in its current form was first formally coined in which landmark report?",
        options: {
          a: "The Brundtland Report (1987)",
          b: "The Who Cares Wins report (2004)",
          c: "The Paris Agreement (2015)",
          d: "The TCFD Final Report (2017)",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "What is a 'stakeholder' in the context of ESG?",
        options: {
          a: "Only the shareholders of a company",
          b: "Only the employees and management",
          c: "Only the government regulators",
          d: "Any individual or group affected by or able to influence a company's activities",
        },
        correctAnswer: "d",
      },
      {
        id: "q7",
        text: "A company that scores well on Environmental metrics but has a weak, non-independent board is at high risk of what?",
        options: {
          a: "Good overall ESG performance",
          b: "High credit ratings",
          c: "Greenwashing, as its environmental claims may lack credible governance oversight",
          d: "Increased biodiversity",
        },
        correctAnswer: "c",
      },
      {
        id: "q8",
        text: "Which of the following is an example of a 'non-financial risk' that ESG helps to manage?",
        options: {
          a: "Interest rate fluctuation",
          b: "Reputational damage from a labour strike",
          c: "Foreign exchange risk",
          d: "Raw material commodity prices",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "How do commercial banks typically use ESG frameworks in their business?",
        options: {
          a: "To set their own internal carbon reduction targets",
          b: "To design green loan products and assess a borrower's credit risk exposure to ESG factors",
          c: "To exclusively fund renewable energy projects",
          d: "To calculate their weekly liquidity coverage ratio",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "According to the lesson, what is the primary difference between ESG and general sustainability?",
        options: {
          a: "ESG is a broader philosophical concept; sustainability is a structured framework",
          b: "ESG is for investors; sustainability is for corporations",
          c: "ESG is a structured, measurable framework; sustainability is a broader concept about meeting present needs without compromising future generations",
          d: "There is no difference; they are synonyms",
        },
        correctAnswer: "c",
      },
    ],
  },
  {
    id: "c35",
    title: "ESG and the Financial System",
    description:
      "Test your understanding of how ESG factors are integrated into investment decisions, credit risk, and sustainable finance.",
    questions: [
      {
        id: "q1",
        text: "What is the primary difference between 'negative screening' and 'ESG integration' as investment approaches?",
        options: {
          a: "Negative screening is for retail investors; integration is for institutional investors",
          b: "Negative screening excludes entire sectors based on values; ESG integration systematically includes ESG factors in financial analysis alongside traditional metrics",
          c: "ESG integration is a legal requirement; negative screening is voluntary",
          d: "There is no difference; they are the same",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "A company's MSCI ESG Rating is a 'AAA'. What does this rating primarily indicate?",
        options: {
          a: "The company has a net zero carbon footprint",
          b: "The company has the highest possible ESG risk rating",
          c: "The agency's assessment that the company is an ESG leader relative to its peers, managing its most significant risks well",
          d: "The company is guaranteed to outperform the market financially",
        },
        correctAnswer: "c",
      },
      {
        id: "q3",
        text: "What is a key reason ESG ratings from different agencies (e.g., MSCI vs. Sustainalytics) often diverge for the same company?",
        options: {
          a: "Agencies rarely disagree; the data is standardized",
          b: "Because of different underlying methodologies, weightings, and data sources, leading to different assessments of materiality",
          c: "Because ESG is not a material factor for financial performance",
          d: "Because companies are not required to disclose ESG data",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "How can a bank's loan portfolio be exposed to 'transition risk' from climate change?",
        options: {
          a: "If the bank's own office building is flooded",
          b: "If a borrower in a carbon-intensive sector faces higher costs due to new carbon pricing regulations, impairing its ability to repay",
          c: "If the bank's ATMs are struck by lightning",
          d: "If the bank invests too heavily in green bonds",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "What is the defining feature of a 'Sustainability-Linked Loan' (SLL)?",
        options: {
          a: "Its proceeds are ring-fenced for a specific green project",
          b: "Its interest rate (margin) is tied to the borrower's achievement of pre-agreed Sustainability Performance Targets (SPTs)",
          c: "It can only be issued by a 'green' bank",
          d: "It has a fixed interest rate that never changes",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "What is 'active ownership' in the context of institutional investing?",
        options: {
          a: "Actively buying and selling shares to beat the market",
          b: "Using shareholder rights, such as voting and engagement, to influence corporate ESG behaviour",
          c: "Owning a large, controlling stake in a company",
          d: "Starting a new company from scratch",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "Under Kenya's NSE ESG Disclosure Guidance, which approach do listed companies follow?",
        options: {
          a: "Mandatory prescription, where all indicators must be reported without exception",
          b: "A voluntary 'opt-in' system",
          c: "'Comply or explain', requiring disclosure of core indicators or a credible explanation for non-disclosure",
          d: "A complete exemption for all non-financial companies",
        },
        correctAnswer: "c",
      },
      {
        id: "q8",
        text: "Which of the following is a common sector exclusion policy implemented by leading Kenyan banks?",
        options: {
          a: "Exclusion of all renewable energy projects due to high risk",
          b: "Exclusion of for-profit enterprises from lending",
          c: "Exclusion of coal mining and coal-fired power projects",
          d: "Exclusion of all agricultural lending",
        },
        correctAnswer: "c",
      },
      {
        id: "q9",
        text: "What is the purpose of the 'margin ratchet' in a Sustainability-Linked Loan (SLL)?",
        options: {
          a: "To increase the loan's tenor if targets are met",
          b: "A mechanism that increases the interest margin (penalty) if SPTs are missed or decreases it (discount) if they are achieved",
          c: "To automatically convert the loan into a grant",
          d: "To re-allocate the loan proceeds to a different department",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "What does the CBK's Environmental and Social Risk Management (ESRM) Framework require licensed banks to do?",
        options: {
          a: "Become carbon neutral in their own operations",
          b: "Integrate environmental and social risk assessment into their lending and investment activities",
          c: "Only lend to companies with an ESG rating of 'AA' or higher",
          d: "Hire a Chief Sustainability Officer for every branch",
        },
        correctAnswer: "b",
      },
    ],
  },
  {
    id: "c36",
    title: "Climate Science for Finance Professionals",
    description:
      "Evaluate your knowledge of climate change mechanics, physical vs. transition risks, and the financial implications of a warming planet.",
    questions: [
      {
        id: "q1",
        text: "What is the primary reason the greenhouse effect is considered a problem for the planet's climate?",
        options: {
          a: "It is a new phenomenon caused by industrial pollution",
          b: "Human activities have intensified it by increasing the concentration of greenhouse gases, trapping more heat and causing global temperatures to rise",
          c: "It has completely blocked all sunlight from reaching the Earth's surface",
          d: "It has caused the Earth's core to cool down",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "Why is 'CO₂e' (Carbon Dioxide Equivalent) a standard unit for measuring greenhouse gas emissions?",
        options: {
          a: "It is the only gas that contributes to climate change",
          b: "It expresses the warming impact of any greenhouse gas in terms of the amount of CO₂ that would have the same effect",
          c: "It is the unit required by the Paris Agreement",
          d: "It measures the economic cost of carbon emissions",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "Which type of climate risk is exemplified by a company's assets becoming worthless because of new, stringent government policies on fossil fuels?",
        options: {
          a: "Acute physical risk",
          b: "Chronic physical risk",
          c: "Transition risk (specifically policy risk)",
          d: "Transition risk (reputational risk)",
        },
        correctAnswer: "c",
      },
      {
        id: "q4",
        text: "What is a 'stranded asset'?",
        options: {
          a: "An asset that has been lost or stolen",
          b: "An asset that loses significant value before the end of its expected economic life due to changes in climate policy, technology, or markets",
          c: "An asset that is located in a remote area",
          d: "An asset that is fully depreciated on a company's books",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "Under a credible net zero strategy (e.g., SBTi), what is the primary role of carbon offsets?",
        options: {
          a: "To be the first and main method of achieving the target",
          b: "To be used for residual emissions only, after a company has made deep reductions (90-95%) to its own emissions",
          c: "To be used for Scope 1 and 2 emissions, but not Scope 3",
          d: "To be avoided entirely",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "A prolonged drought in East Africa is an example of which type of climate risk, and how might it affect a bank?",
        options: {
          a: "Transition risk, by increasing the cost of the bank's own energy",
          b: "Acute physical risk, by causing direct damage to the bank's headquarters",
          c: "Chronic physical risk, by increasing loan defaults in its agricultural portfolio",
          d: "Liability risk, by exposing the bank to lawsuits from farmers",
        },
        correctAnswer: "c",
      },
      {
        id: "q7",
        text: "What is the 'remaining carbon budget' for limiting global warming to 1.5°C?",
        options: {
          a: "The total amount of CO₂ currently in the atmosphere",
          b: "The maximum amount of CO₂ that can still be emitted for a likely chance of staying below 1.5°C",
          c: "The amount of carbon that needs to be removed from the atmosphere each year",
          d: "The budget the UN has for climate change negotiations",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "Why is methane (CH₄) considered a potent greenhouse gas despite having a shorter atmospheric lifetime than CO₂?",
        options: {
          a: "Because it contributes heavily to ozone depletion",
          b: "Because it has a much higher Global Warming Potential (GWP), meaning it traps significantly more heat per tonne over a 100-year period",
          c: "Because it is artificially produced by industrial processes",
          d: "Because it is odourless and colourless",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "For most large companies, which category of emissions is the largest and often accounts for 70-90% of their total carbon footprint?",
        options: {
          a: "Scope 1 (Direct)",
          b: "Scope 2 (Energy indirect)",
          c: "Scope 3 (Value chain)",
          d: "Scope 4 (Avoided emissions)",
        },
        correctAnswer: "c",
      },
      {
        id: "q10",
        text: "What is the primary financial risk for Kenyan financial institutions from the operation of a cement manufacturer in their loan portfolio?",
        options: {
          a: "Lack of available limestone for production",
          b: "Transition risk, as a carbon tax or emissions regulation would directly increase the manufacturer's operating costs",
          c: "Physical risk, as cement plants are highly vulnerable to sea level rise",
          d: "Reputational risk, as cement is an 'unethical' product",
        },
        correctAnswer: "b",
      },
    ],
  },
  {
    id: "c37",
    title: "Introduction to Carbon Markets",
    description:
      "Test your basic knowledge of carbon credits, market types, and verification standards.",
    questions: [
      {
        id: "q1",
        text: "What is the most critical quality test for a carbon credit to ensure it represents a real climate benefit?",
        options: {
          a: "Permanence",
          b: "Vintage",
          c: "Verification standard",
          d: "Additionality",
        },
        correctAnswer: "d",
      },
      {
        id: "q2",
        text: "Which market is created by a government's legal requirement, such as a cap-and-trade system?",
        options: {
          a: "The Voluntary Carbon Market (VCM)",
          b: "The Compliance Carbon Market",
          c: "The Secondary Market",
          d: "The Forward Market",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "A project developer plants a forest to generate carbon credits. The risk that this forest might be burned down in a wildfire, releasing the stored carbon back into the atmosphere, is known as:",
        options: {
          a: "Additionality risk",
          b: "Leakage risk",
          c: "Permanence risk",
          d: "Verification risk",
        },
        correctAnswer: "c",
      },
      {
        id: "q4",
        text: "Which carbon standard is known for its specific focus on community and smallholder agriculture and forestry projects?",
        options: {
          a: "Verra (VCS)",
          b: "Gold Standard",
          c: "Plan Vivo",
          d: "ACR (American Carbon Registry)",
        },
        correctAnswer: "c",
      },
      {
        id: "q5",
        text: "What is the final step in the lifecycle of a carbon credit, where it is permanently cancelled to prevent double-counting?",
        options: {
          a: "Issuance",
          b: "Verification",
          c: "Trading",
          d: "Retirement",
        },
        correctAnswer: "d",
      },
      {
        id: "q6",
        text: "Under the Paris Agreement's Article 6, what is a 'Corresponding Adjustment'?",
        options: {
          a: "A fee charged by the host country for exporting carbon credits",
          b: "An adjustment to a host country's NDC to prevent the double-counting of emission reductions when an ITMO is transferred to another country",
          c: "A change in the methodology for calculating a project's baseline",
          d: "The process of adjusting the price of a carbon credit for inflation",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "Which role in the carbon market ecosystem is responsible for the independent, third-party assessment of a project's actual emissions reductions?",
        options: {
          a: "Project Developer",
          b: "Carbon Broker",
          c: "Validation/Verification Body (VVB)",
          d: "Carbon Fund",
        },
        correctAnswer: "c",
      },
      {
        id: "q8",
        text: "Kenya's Climate Change (Amendment) Act 2023 introduced a revenue split for carbon credit projects of:",
        options: {
          a: "100% to the national government",
          b: "50% to the project developer, 25% to the community, and 25% to the county government",
          c: "100% to the project developer",
          d: "75% to the international buyer and 25% to the project developer",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "CORSIA is a unique carbon market because it is a:",
        options: {
          a: "Voluntary market for the tech sector",
          b: "Mandatory compliance market for international aviation that uses eligible voluntary carbon credits",
          c: "A new carbon standard for forestry projects",
          d: "An exchange for trading futures contracts",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "What is the purpose of a carbon registry?",
        options: {
          a: "To buy and sell carbon credits on behalf of clients",
          b: "To develop new methodologies for carbon projects",
          c: "To provide a digital platform that issues, holds, transfers, and retires carbon credits to ensure each credit is unique and retired only once",
          d: "To lobby governments for stronger climate policies",
        },
        correctAnswer: "c",
      },
    ],
  },
  // ESG & SUSTAINABLE FINANCE PROGRAMME (continued)

  // MODULE 5: Introduction to Green Finance & Sustainable Lending (Beginner)
  {
    id: "c38",
    title: "Introduction to Green Finance & Sustainable Lending",
    description:
      "Test your knowledge of green financial products, their principles, and the Kenyan market landscape.",
    questions: [
      {
        id: "q1",
        text: "What is the fundamental difference between a green bond and a sustainability-linked loan (SLL)?",
        options: {
          a: "Green bonds pay a higher coupon than SLLs",
          b: "Green bond proceeds are restricted to specific green projects; SLL proceeds are unrestricted, but the margin is tied to ESG targets",
          c: "SLLs can only be used by financial institutions; green bonds can be used by any company",
          d: "There is no difference; they are the same product",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "What does 'greenium' refer to in the green bond market?",
        options: {
          a: "The premium a company pays to have its bond certified as green",
          b: "The higher interest rate on a green bond compared to a conventional bond",
          c: "The price premium (lower yield) that green bonds sometimes achieve compared to conventional bonds from the same issuer",
          d: "The fee charged by the second-party opinion provider",
        },
        correctAnswer: "c",
      },
      {
        id: "q3",
        text: "According to the ICMA Green Bond Principles, what must a 'Use of Proceeds' statement include?",
        options: {
          a: "The names of all board members who approved the bond",
          b: "Details of the external legal counsel",
          c: "The specific eligible green project categories that the bond proceeds will fund",
          d: "The projected share price of the issuer after the bond issuance",
        },
        correctAnswer: "c",
      },
      {
        id: "q4",
        text: "What is the primary role of a Second-Party Opinion (SPO) in a green bond issuance?",
        options: {
          a: "To underwrite the bond and guarantee its sale",
          b: "To provide an independent assessment of the bond's alignment with the Green Bond Principles",
          c: "To audit the issuer's financial statements",
          d: "To certify the carbon credits generated from the green projects",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "Which Development Finance Institution (DFI) is known for its Performance Standards, the world's most widely used ESG framework for project finance?",
        options: {
          a: "AfDB (African Development Bank)",
          b: "Proparco",
          c: "FMO",
          d: "IFC (International Finance Corporation)",
        },
        correctAnswer: "d",
      },
      {
        id: "q6",
        text: "What is 'blended finance' in the context of green projects in Africa?",
        options: {
          a: "Combining different types of renewable energy in one project",
          b: "The strategic use of concessional DFI capital to mobilise private commercial capital for sustainable projects",
          c: "Mixing debt and equity in a single financing structure",
          d: "Blending physical and virtual carbon credits",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "Which Kenyan institution issued Africa's first publicly listed green bond?",
        options: {
          a: "KCB Group",
          b: "The Nairobi Securities Exchange (NSE)",
          c: "Acorn Holdings",
          d: "Kenya Power (KPLC)",
        },
        correctAnswer: "c",
      },
      {
        id: "q8",
        text: "What is the purpose of a 'Green Taxonomy'?",
        options: {
          a: "A classification system that defines which economic activities qualify as environmentally sustainable",
          b: "A list of all the green bonds available for purchase",
          c: "A report on the state of the global environment",
          d: "A tax credit for planting trees",
        },
        correctAnswer: "a",
      },
      {
        id: "q9",
        text: "How do DFIs typically act as 'anchor investors' in local green bonds?",
        options: {
          a: "By providing free legal advice to the issuer",
          b: "By purchasing a significant portion of the bond, thereby building credibility and attracting other (local) investors",
          c: "By insuring the bond against currency fluctuations",
          d: "By marketing the bond to retail investors",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "What is the key difference in VAT treatment for a non-VAT-registered lessee between a finance lease and a hire purchase (HP)?",
        options: {
          a: "There is no difference; both are 16% dead cost",
          b: "The lease has 16% VAT on each rental; HP has 16% VAT on the cash price at inception only (not on instalments)",
          c: "The lease has no VAT; HP has 16% VAT on the full HP price",
          d: "The lease has 8% VAT; HP has 16% VAT",
        },
        correctAnswer: "b",
      },
    ],
  },

  // MODULE 6: Introduction to Solar Energy & Clean Assets (Beginner)
  {
    id: "c39",
    title: "Introduction to Solar Energy & Clean Assets",
    description:
      "Test your knowledge of solar PV systems, key performance metrics, and the clean asset landscape.",
    questions: [
      {
        id: "q1",
        text: "What is the function of an inverter in a solar PV system?",
        options: {
          a: "To store excess electricity for later use",
          b: "To convert Direct Current (DC) from the panels into Alternating Current (AC) for use in buildings",
          c: "To convert Alternating Current (AC) from the grid into Direct Current (DC) for the panels",
          d: "To secure the panels to the roof",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "A solar system is rated at 100 kWp. What does 'kWp' stand for and represent?",
        options: {
          a: "Kilowatts-per-hour, representing the daily energy output",
          b: "Kilowatts physical, the physical size of the array",
          c: "Kilowatts peak, the maximum power output under standard test conditions",
          d: "Kilowatts practical, the guaranteed output on a cloudy day",
        },
        correctAnswer: "c",
      },
      {
        id: "q3",
        text: "How does the electricity tariff from KPLC influence the business case for C&I solar in Kenya?",
        options: {
          a: "Lower tariffs make solar more attractive",
          b: "It has no influence; solar is always cheaper",
          c: "High tariffs (KES 20-30/kWh) mean solar can offer significant savings at a PPA rate of KES 10-16/kWh",
          d: "The tariff only matters for residential, not commercial, customers",
        },
        correctAnswer: "c",
      },
      {
        id: "q4",
        text: "Which type of solar system is best suited for a customer in an area with frequent grid outages who needs backup power?",
        options: {
          a: "On-grid system only",
          b: "Off-grid (standalone) system",
          c: "Hybrid system with battery storage",
          d: "A diesel generator",
        },
        correctAnswer: "c",
      },
      {
        id: "q5",
        text: "What is the primary reason why solar assets are well-suited to leasing and Power Purchase Agreements (PPAs)?",
        options: {
          a: "They are easily stolen and require high security",
          b: "They require constant, expensive maintenance",
          c: "They provide predictable, long-term cash flows (fuel savings) and have low operating costs",
          d: "They have a very short useful life, forcing quick replacement",
        },
        correctAnswer: "c",
      },
      {
        id: "q6",
        text: "Which of the following is an example of a 'Productive Use Appliance' in the clean asset landscape?",
        options: {
          a: "A 50-inch television for entertainment",
          b: "A solar-powered milling machine for a small business",
          c: "An energy-efficient light bulb",
          d: "A gasoline-powered generator",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "According to the module, what is Africa's 'solar resource potential' relative to the rest of the world?",
        options: {
          a: "One of the lowest due to cloud cover",
          b: "Similar to Europe's potential",
          c: "Among the highest in the world, receiving some of the highest levels of solar radiation",
          d: "Only high in the Sahara Desert, not in East Africa",
        },
        correctAnswer: "c",
      },
      {
        id: "q8",
        text: "What does the 'degradation rate' of a solar panel refer to?",
        options: {
          a: "The rate at which dust and dirt accumulate on its surface",
          b: "The speed at which it converts sunlight to electricity",
          c: "The annual percentage decline in the panel's power output over its lifetime",
          d: "The rate at which it heats up under sunlight",
        },
        correctAnswer: "c",
      },
      {
        id: "q9",
        text: "In a typical PAYG (Pay-As-You-Go) solar model, what enables the system to be deactivated if a customer misses a payment?",
        options: {
          a: "A physical key that the agent takes away",
          b: "The system requires a special fuel that the provider stops selling",
          c: "Remote monitoring and control technology allows the provider to deactivate the system",
          d: "The battery is designed to run out after 30 days",
        },
        correctAnswer: "c",
      },
      {
        id: "q10",
        text: "What is the approximate size of the energy access gap in Africa that solar solutions aim to address?",
        options: {
          a: "6 million people without electricity",
          b: "60 million people without electricity",
          c: "600 million people without reliable electricity access",
          d: "Africa has no energy access gap; it is fully electrified",
        },
        correctAnswer: "c",
      },
    ],
  },

  // MODULE 7: ESG Reporting Frameworks (Intermediate)
  {
    id: "c40",
    title: "ESG Reporting Frameworks",
    description:
      "Assess your ability to navigate the complex landscape of ESG reporting standards and frameworks.",
    questions: [
      {
        id: "q1",
        text: "What is the primary difference between the GRI Standards and the SASB Standards?",
        options: {
          a: "GRI is for European companies; SASB is for American companies",
          b: "GRI focuses on impact materiality (company's impact on the world); SASB focuses on financial materiality (world's impact on company value)",
          c: "GRI is mandatory; SASB is voluntary",
          d: "GRI is for climate issues; SASB is for social issues",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "What are the four thematic pillars of the TCFD (Task Force on Climate-related Financial Disclosures) framework?",
        options: {
          a: "Emissions, Energy, Water, Waste",
          b: "Governance, Strategy, Risk Management, and Metrics & Targets",
          c: "Scopes 1, 2, 3, and 4",
          d: "Planning, Organizing, Leading, and Controlling",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "The ISSB's IFRS S2 (Climate-related Disclosures) is designed to be used as...",
        options: {
          a: "A replacement for the GRI Standards",
          b: "A voluntary framework for marketing purposes",
          c: "A global baseline for climate-related financial disclosures, to be adopted by jurisdictions worldwide",
          d: "A certification for carbon-neutral products",
        },
        correctAnswer: "c",
      },
      {
        id: "q4",
        text: "What is 'double materiality' as defined by the EU's CSRD?",
        options: {
          a: "The requirement to report both Scope 1 and Scope 2 emissions",
          b: "The concept that companies should disclose both how ESG risks affect their financial performance (outside-in) AND how their activities affect society and the environment (inside-out)",
          c: "The need to have two second-party opinions for a green bond",
          d: "Reporting both historical and forward-looking data",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "Under the EU's CSRD, which assurance level is initially required for ESG disclosures?",
        options: {
          a: "Reasonable assurance (positive opinion)",
          b: "No assurance is required",
          c: "Limited assurance (negative opinion), with a planned move to reasonable assurance over time",
          d: "Assurance can be performed by any unqualified employee",
        },
        correctAnswer: "c",
      },
      {
        id: "q6",
        text: "What is the key requirement of the 'Management of Proceeds' component of the ICMA Green Bond Principles?",
        options: {
          a: "Proceeds must be managed by an external, independent fund manager",
          b: "Proceeds must be converted into a foreign currency to hedge risk",
          c: "Proceeds must be tracked, ring-fenced, or allocated to a sub-portfolio, and unallocated proceeds disclosed",
          d: "Proceeds must be fully invested within 30 days of issuance",
        },
        correctAnswer: "c",
      },
      {
        id: "q7",
        text: "Which framework uses the 'Six Capitals' model (financial, manufactured, intellectual, human, social & relationship, natural) to connect financial and non-financial information?",
        options: {
          a: "GRI Standards",
          b: "SASB Standards",
          c: "Integrated Reporting (IR) Framework",
          d: "TCFD Recommendations",
        },
        correctAnswer: "c",
      },
      {
        id: "q8",
        text: "According to the NSE ESG Disclosure Guidance, a company that cannot disclose a specific core indicator must:",
        options: {
          a: "Falsify the data to avoid penalties",
          b: "State that the indicator is not applicable and explain why",
          c: "Pay a fine to the NSE",
          d: "Delist from the exchange immediately",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "Which of the following is a Core Social Indicator under the NSE ESG Disclosure Guidance?",
        options: {
          a: "Board diversity (women on board)",
          b: "GHG emissions (Scope 1 and 2)",
          c: "Lost Time Injury Frequency Rate (LTIFR)",
          d: "Anti-corruption incidents",
        },
        correctAnswer: "c",
      },
      {
        id: "q10",
        text: "Under the TCFD framework, what is the most challenging requirement for most organisations to implement?",
        options: {
          a: "Disclosing board oversight of climate risk",
          b: "Reporting Scope 1 emissions",
          c: "Performing and disclosing scenario analysis to assess the company's strategic resilience",
          d: "Reporting metrics and targets",
        },
        correctAnswer: "c",
      },
    ],
  },

  // MODULE 8: Greenwashing — Identification & Risk (Intermediate)
  {
    id: "c41",
    title: "Greenwashing — Identification & Risk",
    description:
      "Assess your ability to detect greenwashing tactics and understand the regulatory and professional risks involved.",
    questions: [
      {
        id: "q1",
        text: "Which greenwashing tactic is a company using if it highlights one small positive ESG attribute while ignoring its other, significantly negative, environmental impacts?",
        options: {
          a: "Vagueness",
          b: "Irrelevance",
          c: "Lesser of Two Evils",
          d: "Hidden Trade-Off",
        },
        correctAnswer: "d",
      },
      {
        id: "q2",
        text: "A company claims its operations are 'eco-friendly'. What is the primary problem with this claim?",
        options: {
          a: "It is mathematically incorrect",
          b: "It promotes a 'Lesser of Two Evils'",
          c: "It is vague (not specific, measurable, or verifiable)",
          d: "It is a hidden trade-off",
        },
        correctAnswer: "c",
      },
      {
        id: "q3",
        text: "What is the second step in the practical five-step greenwashing detection framework, after Specificity Testing?",
        options: {
          a: "Materiality Assessment",
          b: "Boundary and Scope Review",
          c: "Evidence Verification",
          d: "Independent Certification Check",
        },
        correctAnswer: "c",
      },
      {
        id: "q4",
        text: "Which Kenyan regulator has the authority to act on misleading environmental claims under consumer protection law?",
        options: {
          a: "CMA (Capital Markets Authority)",
          b: "CBK (Central Bank of Kenya)",
          c: "NSE (Nairobi Securities Exchange)",
          d: "CAK (Competition Authority of Kenya)",
        },
        correctAnswer: "d",
      },
      {
        id: "q5",
        text: "What is a key greenwashing risk specific to the African carbon market that finance professionals must be aware of?",
        options: {
          a: "All carbon credits in Africa have high integrity",
          b: "The price of carbon credits is not volatile",
          c: "Double-counting of the same carbon credit by the host country and the buyer, which can be mitigated by a corresponding adjustment under Article 6",
          d: "There is a shortage of carbon credit projects in Africa",
        },
        correctAnswer: "c",
      },
      {
        id: "q6",
        text: "What is 'impact washing'?",
        options: {
          a: "Overstating the environmental impact of a product",
          b: "The social equivalent of greenwashing, overstating positive social outcomes while downplaying negative ones",
          c: "A clean-up operation after an environmental disaster",
          d: "The process of certifying a carbon credit",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "According to the module, which two greenwashing tactics represent deliberate deception and carry the highest legal risk?",
        options: {
          a: "Vagueness and Irrelevance",
          b: "Hidden Trade-off and Lesser of Two Evils",
          c: "Fibbing and False Labels",
          d: "No Proof and Vagueness",
        },
        correctAnswer: "c",
      },
      {
        id: "q8",
        text: "What does the 'reversal test' in greenwashing detection ask the professional to consider?",
        options: {
          a: "Whether a company's CEO has reversed their position on climate change",
          b: "Whether the physical reverse of the product is green",
          c: "If an ESG claim were false, would it matter to an investor or lender?",
          d: "Whether the company has an independent ethics hotline",
        },
        correctAnswer: "c",
      },
      {
        id: "q9",
        text: "What is the potential personal liability for a Kenyan accountant who signs off on a materially misleading ESG disclosure?",
        options: {
          a: "There is no personal liability; only the company can be fined",
          b: "Personal liability is limited to a formal warning from ICPAK",
          c: "Potential legal liability under professional standards (ICPAK Code of Ethics), regulatory sanction, and possibly shareholder litigation",
          d: "Only criminal charges, not financial penalties",
        },
        correctAnswer: "c",
      },
      {
        id: "q10",
        text: "If a company's ESG report is assured by a third party, what is the minimal level of confidence stakeholders can typically expect?",
        options: {
          a: "Absolute certainty in every data point",
          b: "A 'reasonable assurance' positive opinion that the report is fairly stated",
          c: "A 'limited assurance' negative opinion that nothing has come to the assurer's attention to suggest material misstatement",
          d: "No confidence; assurance is a marketing exercise",
        },
        correctAnswer: "c",
      },
    ],
  },

  // MODULE 9: ESG Due Diligence & Risk Assessment (Intermediate)
  {
    id: "c42",
    title: "ESG Due Diligence & Risk Assessment",
    description:
      "Test your ability to apply a structured framework for ESG risk assessment in financial transactions.",
    questions: [
      {
        id: "q1",
        text: "What is the difference between 'inherent risk' and 'residual risk' in an ESG risk scoring framework?",
        options: {
          a: "Inherent risk is based on geography; residual risk is based on sector",
          b: "Inherent risk is the base risk from sector/location; residual risk is inherent risk after considering the quality of management systems",
          c: "Inherent risk is historical; residual risk is forward-looking",
          d: "There is no difference; the terms are interchangeable",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "When reviewing financial statements for ESG red flags, where would you primarily look for evidence of a pending environmental lawsuit?",
        options: {
          a: "In the income statement as an operating expense",
          b: "In the balance sheet under property, plant & equipment",
          c: "In the notes to the financial statements as a contingent liability",
          d: "In the cash flow statement as a financing activity",
        },
        correctAnswer: "c",
      },
      {
        id: "q3",
        text: "Under the CBK's ESRM Framework, a transaction classified as 'High Risk' due to its potential E&S impacts would typically require:",
        options: {
          a: "No special due diligence",
          b: "Full due diligence including a site visit and stakeholder consultation",
          c: "Only a desktop review of company policies",
          d: "The transaction to be declined immediately",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "What is the primary purpose of a 'negative pledge' covenant in a loan or lease agreement?",
        options: {
          a: "To reduce the interest rate for the borrower",
          b: "To prevent the borrower from granting a security interest (like a charge) over the leased asset or other assets without the bank's consent",
          c: "To force the borrower to make early repayments",
          d: "To guarantee a minimum residual value for the asset",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "Which of the following is an example of an ESG 'red flag' in a company's financial statements?",
        options: {
          a: "A consistent history of on-time supplier payments",
          b: "A large and sudden increase in environmental remediation provisions without clear explanation",
          c: "A stable and diverse board of directors",
          d: "Low employee turnover disclosed in the notes",
        },
        correctAnswer: "b",
      },
      // ESG & SUSTAINABLE FINANCE PROGRAMME (continued)

      // MODULE 9: ESG Due Diligence & Risk Assessment (Intermediate) - continued
      {
        id: "q6",
        text: "Which sector typically has the highest weighting for the 'Environmental' (E) pillar in an ESG risk scoring framework?",
        options: {
          a: "Banking and Finance",
          b: "Technology",
          c: "Mining and Oil & Gas",
          d: "Retail",
        },
        correctAnswer: "c",
      },
      {
        id: "q7",
        text: "What is the primary goal of the 'Rental Coverage Ratio' in a lease credit appraisal?",
        options: {
          a: "To confirm the lessor's profit margin",
          b: "To assess the lessee's ability to cover annual lease rentals from its EBITDA, with a target of >1.5x",
          c: "To calculate the interest rate for the lease",
          d: "To determine the asset's residual value",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "When building an ESG due diligence checklist, why should it be 'tiered' (Basic, Standard, Enhanced)?",
        options: {
          a: "To increase the cost of due diligence for all clients",
          b: "To match the level of due diligence to the transaction's risk classification (Low, Medium, High), saving time and resources on low-risk deals",
          c: "To confuse the client about the bank's requirements",
          d: "To comply with international ISO standards",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "What is the key difference between a 'Condition Precedent' and a 'Covenant' in a loan or lease agreement?",
        options: {
          a: "A condition precedent must be satisfied before the deal is funded; a covenant is an ongoing obligation that must be maintained after funding",
          b: "There is no difference; they are the same thing",
          c: "A covenant is a one-time requirement; a condition precedent is ongoing",
          d: "Conditions precedent are for borrowers; covenants are for lenders",
        },
        correctAnswer: "a",
      },
      {
        id: "q10",
        text: "According to the module, what is a key ESG due diligence risk for a bank lending to a construction company that is outsourcing work to third-party contractors?",
        options: {
          a: "The construction company may use better technology",
          b: "The supply chain (contractors) may have unmanaged labour or human rights risks",
          c: "The construction project may be completed early",
          d: "The construction company may have too much cash on its balance sheet",
        },
        correctAnswer: "b",
      },
    ],
  },

  // MODULE 10: Solar Asset Leasing — Applied Finance (Intermediate)
  {
    id: "c43",
    title: "Solar Asset Leasing — Applied Finance",
    description:
      "Assess your practical knowledge of modeling, accounting, and structuring solar asset leases.",
    questions: [
      {
        id: "q1",
        text: "What is the primary reason a C&I customer in Kenya would choose a solar PPA (Power Purchase Agreement) over a direct solar lease?",
        options: {
          a: "A PPA is always cheaper than a lease",
          b: "A PPA allows the customer to own the asset at the end of the term",
          c: "A PPA's payments are based on actual electricity generated (volumetric), which aligns better with variable business consumption patterns",
          d: "A PPA requires no credit check",
        },
        correctAnswer: "c",
      },
      {
        id: "q2",
        text: "In a solar lease financial model, what is the impact of a lower 'Specific Yield' (kWh/kWp) assumption?",
        options: {
          a: "It has no impact on project finances",
          b: "It increases the project's Internal Rate of Return (IRR)",
          c: "It decreases the system's annual electricity generation, reducing revenue and potentially lowering the IRR",
          d: "It only affects the physical size of the panels, not the finances",
        },
        correctAnswer: "c",
      },
      {
        id: "q3",
        text: "Under IFRS 16, a corporate customer signing a fixed monthly lease payment for a solar panel system (where they have the right to control the use of the asset) would most likely:",
        options: {
          a: "Treat it as an operating lease and keep it off-balance-sheet",
          b: "Recognise a right-of-use (ROU) asset and a lease liability on its balance sheet",
          c: "Record the full value of the lease as an immediate expense",
          d: "Account for the lease payments as a capital transaction in equity",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "What is a key tax advantage for a bank acting as a lessor for solar equipment in Kenya?",
        options: {
          a: "Solar equipment is exempt from import duty",
          b: "The lessor can charge a higher VAT rate on solar rentals",
          c: "The lessor can claim a 100% investment deduction (capital allowance) on the solar asset in the first year",
          d: "Solar lease income is tax-free",
        },
        correctAnswer: "c",
      },
      {
        id: "q5",
        text: "In the 'Savannah Foods' case study, why did the advisor recommend a solar PPA over a direct lease?",
        options: {
          a: "The PPA had a lower implicit interest rate",
          b: "The PPA structure would likely be treated as a service contract under IFRS 16, avoiding balance sheet recognition of a large lease liability, which was a client preference",
          c: "A direct lease was not legally available for solar assets in Kenya",
          d: "The PPA contract was for a shorter term, reducing the client's commitment",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "What is the primary risk for a C&I solar developer acting as a lessor under a fixed-rate, 20-year PPA?",
        options: {
          a: "The risk of a nuclear accident at the power plant",
          b: "The risk that the customer's energy consumption drops significantly, leading to lower revenue (volume risk)",
          c: "The risk that the customer wants to buy the asset at the end of the term",
          d: "The risk that the sun stops shining",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "According to the module, why is Kenya's solar resource a world-class advantage for project financiers?",
        options: {
          a: "Because Kenya has temperate summers and mild winters",
          b: "Because the specific yield (kWh/kWp) is 60-100% higher than in Europe, leading to more predictable and higher energy output per installed kW",
          c: "Because land for solar farms is free in Kenya",
          d: "Because solar panels are manufactured in Kenya",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "What is the purpose of a 'performance guarantee' clause in a C&I solar PPA?",
        options: {
          a: "To guarantee the customer's payment performance",
          b: "To guarantee that the solar developer's shareholders will receive a dividend",
          c: "To protect the customer, as the developer guarantees a minimum annual electricity generation and compensates for any shortfall",
          d: "To guarantee that the grid will buy all excess power",
        },
        correctAnswer: "c",
      },
      {
        id: "q9",
        text: "For a VAT-registered lessee, what is the net monthly cost of a solar lease with a rental of KES 500,000 (excl. VAT)?",
        options: {
          a: "KES 500,000 + 16% VAT = KES 580,000, which is the net cost as VAT is dead",
          b: "KES 500,000, as the 16% VAT (KES 80,000) can be claimed back as input tax",
          c: "KES 420,000, as the lessee can deduct a special solar energy tax credit",
          d: "KES 500,000 until the lessee sells the asset, then the cost adjusts",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "Which type of solar system is most commonly used for C&I customers in areas with frequent grid outages?",
        options: {
          a: "Off-grid system with a very large battery",
          b: "On-grid system with no battery",
          c: "On-grid system with a diesel generator as backup",
          d: "A hybrid system, which is grid-tied but includes a battery to provide backup power during outages",
        },
        correctAnswer: "d",
      },
    ],
  },

  // MODULE 11: Carbon Credits — Applied Finance & Accounting (Intermediate)
  {
    id: "c44",
    title: "Carbon Credits — Applied Finance & Accounting",
    description:
      "Test your knowledge of carbon credit valuation, balance sheet treatment, revenue recognition, and tax treatment.",
    questions: [
      {
        id: "q1",
        text: "A carbon credit project developer holds credits for sale to third parties. Under IFRS, how should these assets be classified and measured?",
        options: {
          a: "As property, plant & equipment (PPE) at fair value",
          b: "As an intangible asset (IAS 38) at cost, less amortisation",
          c: "As inventory (IAS 2), initially measured at cost and subject to the lower of cost and net realisable value (LCNRV)",
          d: "As a financial asset at fair value through profit or loss",
        },
        correctAnswer: "c",
      },
      {
        id: "q2",
        text: "A corporate buyer purchases carbon credits to offset its own emissions. Under IFRS, how should these assets be classified?",
        options: {
          a: "As inventory (IAS 2), as it plans to resell them",
          b: "As an intangible asset (IAS 38), as it holds them for use",
          c: "As property, plant & equipment (PPE)",
          d: "As a financial liability",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "Under IFRS 15, a carbon credit developer enters a contract to deliver 100,000 credits at a future date. When should revenue be recognised?",
        options: {
          a: "When the contract is signed",
          b: "When the cash is received",
          c: "When control of the credits (e.g., through registry transfer) passes to the customer",
          d: "When the credits are verified by the carbon standard",
        },
        correctAnswer: "c",
      },
      {
        id: "q4",
        text: "What is the primary valuation methodology for carbon credits when there is an active market with observable prices?",
        options: {
          a: "Income-based valuation (NPV of future cash flows)",
          b: "Cost-based valuation (cost of abatement)",
          c: "Market-based valuation (using observable prices from exchanges or brokers)",
          d: "Residual value method",
        },
        correctAnswer: "c",
      },
      {
        id: "q5",
        text: "Under Kenya's Climate Change (Amendment) Act 2023, how is carbon credit revenue split between parties?",
        options: {
          a: "50% to national government, 50% to project developer",
          b: "50% to project developer, 25% to community, and 25% to county government",
          c: "100% to the landowner",
          d: "100% to the project developer, as they bear all the risk",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "What is the single most important factor determining the 'quality' and price of a carbon credit?",
        options: {
          a: "Its vintage (year of issuance)",
          b: "The country where the project is located",
          c: "Its additionality (the emission reduction would not have occurred without the credit revenue)",
          d: "The brand name of the verification body",
        },
        correctAnswer: "c",
      },
      {
        id: "q7",
        text: "For a Kenyan carbon project developer, how does the presence of a 'Corresponding Adjustment' (CA) affect the value of the credit?",
        options: {
          a: "It decreases the value, as it creates extra paperwork",
          b: "It has no impact on value; all credits are the same",
          c: "It increases the value, as CA credits are Paris-aligned and are eligible for premium markets like CORSIA",
          d: "It makes the credit invalid for international trading",
        },
        correctAnswer: "c",
      },
      {
        id: "q8",
        text: "What is a 'balancing charge' in the context of capital allowances for a leased asset?",
        options: {
          a: "The equal monthly payment for the lease",
          b: "A taxable gain that may arise when an asset is sold and the disposal proceeds exceed its tax written-down value (WDV)",
          c: "A tax deduction for the depreciation of the asset",
          d: "A fee for early termination of the lease",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "How might a corporate buyer account for a forward purchase agreement to buy carbon credits in 18 months at a fixed price?",
        options: {
          a: "Recognise the asset and liability immediately at the fixed price",
          b: "Make no entry until the control of credits transfers, but consider if the derivative needs to be accounted for at fair value",
          c: "Recognise the liability at market value and adjust daily",
          d: "Record the full value as a cash expense today",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "Under the six-point carbon credit quality assessment framework, which factor is most critical for removal projects (e.g., forestry), but not applicable for reduction projects (e.g., renewable energy)?",
        options: {
          a: "Additionality",
          b: "Verification Standard",
          c: "Co-Benefits",
          d: "Permanence",
        },
        correctAnswer: "d",
      },
    ],
  },

  // MODULE 12: ESG and Corporate Governance (Intermediate)
  {
    id: "c45",
    title: "ESG and Corporate Governance",
    description:
      "Test your understanding of why governance is the foundation of ESG, and the key aspects of board oversight and shareholder activism.",
    questions: [
      {
        id: "q1",
        text: "According to the module, why is governance considered the 'foundation' pillar of ESG?",
        options: {
          a: "Because it is the most profitable pillar for investors",
          b: "Because without strong governance (board oversight, accountability), Environmental and Social commitments lack credibility and cannot be enforced",
          c: "Because governance is the only pillar that is legally required",
          d: "Because it is the easiest pillar to measure and report",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "In the board quality assessment framework, what is the maximum tenure after which a director's independence is presumed to be compromised?",
        options: {
          a: "5 years",
          b: "9-12 years",
          c: "2 years",
          d: "20 years",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "What is 'Say on Pay' in the context of corporate governance?",
        options: {
          a: "The CEO's authority to set their own bonus",
          b: "A non-binding shareholder vote on executive remuneration",
          c: "The legal obligation to disclose all employee salaries",
          d: "A government mandate for a universal minimum wage",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "Which scandal was a direct result of a governance failure where the board's oversight of safety was weak and management incentives prioritised cost-cutting?",
        options: {
          a: "The Enron collapse",
          b: "The Carillion collapse",
          c: "The BP Deepwater Horizon oil spill",
          d: "The Volkswagen 'Dieselgate' scandal",
        },
        correctAnswer: "c",
      },
      {
        id: "q5",
        text: "What is the primary tool of 'active ownership' for a large institutional investor engaging with a company on its net-zero transition plan?",
        options: {
          a: "Immediately divesting all shares in the company",
          b: "Filing a shareholder resolution demanding a credible transition plan and engaging in direct dialogue with the board",
          c: "Writing an anonymous blog post about the company",
          d: "Short-selling the company's stock",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "According to the UNEP FI 2019 report 'Fiduciary Duty in the 21st Century', what is the legal obligation of an institutional investor regarding financially material ESG factors?",
        options: {
          a: "They can be ignored if they are not profitable in the short term",
          b: "They can be considered, but only if all beneficiaries agree",
          c: "Ignoring financially material ESG factors may be considered a breach of fiduciary duty",
          d: "They are a matter of personal preference for the fund manager",
        },
        correctAnswer: "c",
      },
      {
        id: "q7",
        text: "Why is a 'whistleblower protection' policy a key indicator of a strong governance culture?",
        options: {
          a: "Because it encourages employees to report misconduct without fear of retaliation, helping to uncover fraud and ethical breaches",
          b: "Because it is a mandatory requirement for all companies in Kenya",
          c: "Because it increases the company's marketing budget",
          d: "Because it allows the CEO to monitor employee communications",
        },
        correctAnswer: "a",
      },
      {
        id: "q8",
        text: "What is the 'Mwongozo Code' and what is its relevance to Kenyan listed companies?",
        options: {
          a: "A code of conduct for bank tellers",
          b: "Kenya's corporate governance code providing best practices for board independence, evaluation, and committees",
          c: "A set of environmental regulations for manufacturers",
          d: "A tax law for equipment leasing",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "Which governance failure was the root cause of the 'Dieselgate' scandal at Volkswagen?",
        options: {
          a: "A failure of the physical security at their factories",
          b: "The board's weak oversight of the compliance function and a corporate culture that prioritised sales volume over ethics",
          c: "A lack of funds for research and development",
          d: "An earthquake destroying their main production facility",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "What is the primary recommendation of this module for a company that wants to link executive pay to ESG performance?",
        options: {
          a: "Make the ESG weighting at least 10-30% of variable pay and use stretch targets",
          b: "Keep the ESG weighting below 5% to avoid upsetting executives",
          c: "Only use ESG metrics for short-term bonuses, not long-term incentives",
          d: "Never link ESG to pay, as it is too difficult to measure",
        },
        correctAnswer: "a",
      },
    ],
  },

  // MODULE 13: Social Impact Measurement & Reporting (Intermediate)
  {
    id: "c46",
    title: "Social Impact Measurement & Reporting",
    description:
      "Test your ability to measure and report on the 'S' in ESG, using frameworks like SROI and the UN SDGs.",
    questions: [
      {
        id: "q1",
        text: "What does a SROI (Social Return on Investment) ratio of 5:1 indicate?",
        options: {
          a: "For every KES 5 invested, KES 1 of social value is created",
          b: "For every KES 1 invested, KES 5 of social value is created",
          c: "The project has a 500% profit margin",
          d: "The project will lose 5 times its investment",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "Which of the following is considered an 'output' in an SROI analysis of a financial literacy training program?",
        options: {
          a: "Increased savings account balances (outcome)",
          b: "The number of people trained (output)",
          c: "Reduced financial stress (outcome)",
          d: "The cost of the training venue (input)",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "A company states it contributes to 'SDG 5: Gender Equality'. What is a specific, measurable target under SDG 5 that a company could report against?",
        options: {
          a: "Planting 1,000 trees",
          b: "Reducing energy consumption by 20%",
          c: "Increasing the proportion of women in senior management positions to 40% by 2028",
          d: "Donating to a local orphanage",
        },
        correctAnswer: "c",
      },
      {
        id: "q4",
        text: "What is the deepest and most resilient level of the 'Social Licence to Operate' (SLO)?",
        options: {
          a: "Credibility (the company is seen as responsive and follows through on promises)",
          b: "Legitimacy (the company has legal permits)",
          c: "Trust (the community has a long-term relationship with the company and shares its values)",
          d: "Coercion (the company is legally protected from community action)",
        },
        correctAnswer: "c",
      },
      {
        id: "q5",
        text: "Why is 'supply chain labour disclosure' a critical part of social reporting for a Kenyan agribusiness exporting to Europe?",
        options: {
          a: "Because European buyers (and new EU regulations like the CSRD) are increasingly demanding proof of no forced labour or child labour in their supply chains",
          b: "Because it is a marketing gimmick",
          c: "Because Kenyan law requires it for all businesses",
          d: "Because it is the only way to get a loan from a local bank",
        },
        correctAnswer: "a",
      },
      {
        id: "q6",
        text: "In the SROI methodology, what do the adjustments for 'deadweight' and 'attribution' account for?",
        options: {
          a: "Deadweight accounts for outcomes that would have happened anyway; attribution accounts for the contribution of other organisations or factors",
          b: "Deadweight is the weight of the report; attribution is the number of authors",
          c: "Both terms refer to the same concept",
          d: "Deadweight accounts for the cost of the analysis; attribution accounts for the cost of the project",
        },
        correctAnswer: "a",
      },
      {
        id: "q7",
        text: "According to the module, what is a key strength of Safaricom's social reporting?",
        options: {
          a: "Using a lot of marketing jargon and vague promises",
          b: "Reporting quantitative metrics, trend data, and linking activities to specific UN SDGs",
          c: "Only reporting positive information and omitting negative incidents",
          d: "Not disclosing any data for competitive reasons",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "What is 'SDG washing'?",
        options: {
          a: "The process of cleaning up an oil spill",
          b: "A new technology for water purification",
          c: "A company making vague, unsubstantiated claims about its contribution to the SDGs for marketing purposes, without providing evidence",
          d: "A UN-led initiative to clean plastic from the ocean",
        },
        correctAnswer: "c",
      },
      {
        id: "q9",
        text: "A farmer's cooperative shares a large tractor. Under the cooperative leasing model, who is legally the lessee?",
        options: {
          a: "The individual farmer doing the most work",
          b: "The bank that financed the tractor",
          c: "The tractor manufacturer",
          d: "The cooperative itself, which signs the lease agreement and collects member contributions",
        },
        correctAnswer: "d",
      },
      {
        id: "q10",
        text: "Why is a credible community grievance mechanism essential for a company's 'Social Licence to Operate'?",
        options: {
          a: "Because it allows the company to spy on community members",
          b: "Because it provides a formal, trusted process for community members to raise concerns, preventing issues from escalating into blockades or protests",
          c: "Because it is a cheap alternative to taxes",
          d: "Because it allows the company to fire employees without cause",
        },
        correctAnswer: "b",
      },
    ],
  },
  // ESG & SUSTAINABLE FINANCE PROGRAMME (continued)

  // MODULE 14: ESG Strategy for Corporates & Financial Institutions (Mastery)
  {
    id: "c47",
    title: "ESG Strategy for Corporates & Financial Institutions",
    description:
      "Test your mastery of designing and executing a comprehensive ESG strategy, including materiality assessments and SBTi targets.",
    questions: [
      {
        id: "q1",
        text: "What is the key difference between an ESG strategy and ESG reporting?",
        options: {
          a: "ESG reporting is for small companies; ESG strategy is for large companies",
          b: "ESG reporting describes past performance; ESG strategy is a future-oriented plan that drives capital allocation, risk management, and operational decisions",
          c: "ESG strategy is voluntary; ESG reporting is mandatory",
          d: "There is no difference; they are the same thing",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "What are the five pillars of the ESG strategy framework presented in the module?",
        options: {
          a: "Environmental, Social, Governance, Reporting, Assurance",
          b: "Governance, Materiality, Targets, Integration, Reporting & Assurance",
          c: "Planning, Organising, Leading, Controlling, Reporting",
          d: "Screening, Integration, Active Ownership, Impact, Thematic",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "In a double materiality matrix, where would a topic that has both high financial materiality (outside-in) and high impact materiality (inside-out) be placed?",
        options: {
          a: "Bottom-right quadrant (Financial material only)",
          b: "Top-left quadrant (Impact material only)",
          c: "Top-right quadrant (Core material)",
          d: "Bottom-left quadrant (Monitor)",
        },
        correctAnswer: "c",
      },
      {
        id: "q4",
        text: "What does SBTi stand for and what is its primary purpose?",
        options: {
          a: "Sustainable Business Tax Initiative; it provides tax breaks for green companies",
          b: "Science Based Targets initiative; it validates corporate emissions reduction targets as being aligned with climate science (e.g., the 1.5°C Paris Agreement goal)",
          c: "Standardised Banking Technology Interface; it governs bank IT systems",
          d: "Solar Battery Technology Institute; it researches solar storage",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "What is an 'internal carbon price' (ICP) and how is it used?",
        options: {
          a: "A government-mandated tax on carbon emissions",
          b: "A hypothetical or actual cost on carbon used internally to inform investment decisions, encouraging low-carbon projects",
          c: "The market price of carbon credits",
          d: "The cost of fuel for company vehicles",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "In the case study comparing Equity Bank Kenya and Barclays UK, what was a key difference in their materiality priorities?",
        options: {
          a: "Equity Bank focused on climate transition, while Barclays focused on charitable donations",
          b: "Equity Bank had a high materiality for Social factors like financial inclusion, while Barclays had high materiality for Environmental factors like financed emissions",
          c: "Barclays had a higher priority on Governance factors",
          d: "Both banks had identical materiality matrices",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "Under the SBTi Net Zero Standard, what is the required level of emissions reduction before using offsets?",
        options: {
          a: "10-20%",
          b: "50%",
          c: "90-95%",
          d: "No reduction is required; offsets can be used from Day 1",
        },
        correctAnswer: "c",
      },
      {
        id: "q8",
        text: "What is the purpose of 'green capex criteria' in an ESG-integrated capital allocation framework?",
        options: {
          a: "To ensure all capital expenditure is approved by the board",
          b: "To define which capital projects qualify as 'green' and are eligible for preferential funding or reporting",
          c: "To reduce the total capital budget of the company",
          d: "To only invest in companies that have green in their logo",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "According to the module, why do most companies fail to have a genuine ESG strategy?",
        options: {
          a: "Because ESG is not profitable",
          b: "Because they confuse ESG reporting with having a strategy, lack board ownership, and have no quantified targets or resource allocation",
          c: "Because ESG is not a legal requirement anywhere",
          d: "Because all ESG data is public and cannot be used for strategy",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "What is the first step in conducting a double materiality assessment?",
        options: {
          a: "Reporting the results to the board",
          b: "Setting science-based targets",
          c: "Identifying a long list of potential ESG topics based on standards, peer benchmarking, and stakeholder input",
          d: "Pricing a green bond",
        },
        correctAnswer: "c",
      },
    ],
  },

  // MODULE 15: Advanced Solar Leasing — Deal Structuring & Project Finance (Mastery)
  {
    id: "c48",
    title: "Advanced Solar Leasing — Deal Structuring & Project Finance",
    description:
      "Test your advanced knowledge of SPVs, capital stacks, PPA risk allocation, and financial modelling for solar projects.",
    questions: [
      {
        id: "q1",
        text: "What is the primary purpose of a Special Purpose Vehicle (SPV) in solar project finance?",
        options: {
          a: "To increase the tax liability of the project",
          b: "To ring-fence the project's assets, liabilities, and cash flows, providing bankruptcy remoteness from the parent company",
          c: "To make the project more complex and difficult to understand",
          d: "To allow the parent company to use the project's losses to offset its own profits",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "In a project finance capital stack, which layer has the highest risk and the highest potential return?",
        options: {
          a: "Senior Debt",
          b: "Mezzanine Debt",
          c: "Equity",
          d: "First-loss (Concessional) Capital",
        },
        correctAnswer: "c",
      },
      {
        id: "q3",
        text: "What is the Debt Service Coverage Ratio (DSCR) and what is a typical minimum covenant level required by lenders?",
        options: {
          a: "Equity divided by total assets; typical minimum 0.5x",
          b: "Net operating cash flow divided by debt service (interest + principal); typical minimum 1.2x",
          c: "Revenue divided by interest expense; typical minimum 10x",
          d: "Total liabilities divided by total equity; typical maximum 2x",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "Which of the following is a key element of a 'bankable' PPA (Power Purchase Agreement)?",
        options: {
          a: "A 'take-or-pay' provision that creates a revenue floor",
          b: "A short, 1-year term",
          c: "A termination payment by the buyer that is less than the outstanding debt",
          d: "No direct agreement between the lender and the off-taker",
        },
        correctAnswer: "a",
      },
      {
        id: "q5",
        text: "In a blended finance structure for a Kenyan solar project, what is the typical role of a DFI's 'first-loss tranche'?",
        options: {
          a: "To be the most expensive layer of capital",
          b: "To absorb the first losses, thereby reducing the risk for commercial lenders",
          c: "To manage the day-to-day operations of the solar plant",
          d: "To replace the need for any equity investment",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "In the 500kWp C&I solar lease financial model, why was a one-year interest-only grace period on debt recommended?",
        options: {
          a: "To increase the total interest paid to the bank",
          b: "To significantly improve the Year 1 DSCR, making the project more bankable",
          c: "To delay the start of the project",
          d: "To give the lessor time to find a new tenant",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "What is 'non-recourse finance' in the context of an SPV?",
        options: {
          a: "A loan that the government guarantees",
          b: "A loan where the lenders have recourse only to the SPV's assets and cash flows, and not to the parent company, isolating the parent's balance sheet from project risk",
          c: "A loan that is not backed by any assets",
          d: "A loan that the borrower is not legally required to repay",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "In a PPA, who typically bears the 'performance risk' that the solar system will generate less electricity than expected?",
        options: {
          a: "The off-taker (customer)",
          b: "The bank",
          c: "The SPV (seller), which provides a performance guarantee",
          d: "The government",
        },
        correctAnswer: "c",
      },
      {
        id: "q9",
        text: "How does a 'Direct Agreement' between the lender and the off-taker enhance the bankability of a solar PPA?",
        options: {
          a: "It allows the off-taker to reduce its payments",
          b: "It prevents the lender from ever taking over the project",
          c: "It grants the lender step-in rights, allowing it to cure a default by the SPV and take over the PPA, protecting the lender's security",
          d: "It reduces the electricity tariff by half",
        },
        correctAnswer: "c",
      },
      {
        id: "q10",
        text: "What is the effect of 'leverage' (debt) on equity IRR (Internal Rate of Return) for a project?",
        options: {
          a: "It has no effect on equity IRR",
          b: "It decreases equity IRR because debt is expensive",
          c: "It can increase equity IRR if the project's return on assets is higher than the cost of debt (positive leverage effect)",
          d: "It only affects project IRR, not equity IRR",
        },
        correctAnswer: "c",
      },
    ],
  },

  // MODULE 16: Advanced Carbon Markets — Trading, Strategy & Portfolio Management (Mastery)
  {
    id: "c49",
    title: "Advanced Carbon Markets — Trading, Strategy & Portfolio Management",
    description:
      "Test your knowledge of carbon market mechanics, portfolio strategies, Article 6, and carbon credit quality.",
    questions: [
      {
        id: "q1",
        text: "What is the key difference between a carbon futures contract traded on an exchange (e.g., CBL) and an OTC forward contract?",
        options: {
          a: "Futures are for smaller volumes; forwards are for larger volumes",
          b: "Futures are standardised and exchange-traded with a clearing house (lower counterparty risk); forwards are customised over-the-counter (higher counterparty risk)",
          c: "Futures are used for compliance markets; forwards are used for voluntary markets",
          d: "There is no difference",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "In a three-tier corporate carbon portfolio strategy, what is the primary purpose of 'Tier 3' (speculative) credits?",
        options: {
          a: "To meet core compliance obligations",
          b: "For optionality and learning, with high risk but potential for high reward or future strategic positioning",
          c: "As a low-cost buffer for voluntary claims",
          d: "To ensure corresponding adjustment on all credits",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "Under Article 6.2 of the Paris Agreement, what is an ITMO (Internationally Transferred Mitigation Outcome)?",
        options: {
          a: "A tax credit for carbon trading",
          b: "A carbon credit transferred between countries with a corresponding adjustment",
          c: "A type of carbon futures contract",
          d: "A new carbon standard for forestry projects",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "Why does a 'Corresponding Adjustment' (CA) under Article 6.2 prevent double-counting?",
        options: {
          a: "It forces the buyer country to pay a higher price",
          b: "It makes the host country adjust its NDC downward for the transferred credits, so the same reduction is only counted by the buyer country",
          c: "It cancels the credit after it is traded",
          d: "It requires a third UN body to verify every transaction",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "According to the four-tier quality framework, which of the following characteristics would classify a carbon credit as 'Tier 1 (Premium)'?",
        options: {
          a: "Older vintage (pre-2015), no corresponding adjustment",
          b: "VCS verified, renewable energy project, no co-benefits",
          c: "Gold Standard certification, corresponding adjustment, recent vintage (e.g., 2023), and strong co-benefits",
          d: "Unverified, from a project with no additionality evidence",
        },
        correctAnswer: "c",
      },
      {
        id: "q6",
        text: "What is the fundamental difference between 'carbon offsetting' and 'carbon insetting'?",
        options: {
          a: "Offsetting is more expensive than insetting",
          b: "Offsetting uses external credits to compensate for emissions; insetting involves direct investment in emission reduction projects within a company's own value chain",
          c: "Offsetting is for Scope 1 emissions; insetting is for Scope 3",
          d: "There is no difference",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "In the East African coffee exporter case study, why did the analysis show that insetting (e.g., agroforestry training) was significantly cheaper per tonne of CO₂ reduced than offsetting?",
        options: {
          a: "Because the project was located in a different country",
          b: "Because insetting avoided the costs of intermediaries (brokers, registries, verification) and yielded direct co-benefits",
          c: "Because international carbon credits are heavily taxed",
          d: "Because agricultural projects always fail",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "What does the 'bid-ask spread' tell you about a carbon market?",
        options: {
          a: "The average price of carbon credits",
          b: "The liquidity of the market; a narrow spread indicates high liquidity, a wide spread indicates low liquidity",
          c: "The carbon credit's vintage",
          d: "The level of the lessor's profit margin",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "For a large corporate buyer that needs to make a credible, Paris-aligned 'net zero' claim, what is the most important requirement for the carbon credits they use to neutralise residual emissions?",
        options: {
          a: "They must be from a renewable energy project",
          b: "They must be from a Blue Carbon project",
          c: "They must be for carbon removals and have a corresponding adjustment (CA)",
          d: "They must have a vintage from 2015 or earlier",
        },
        correctAnswer: "c",
      },
      {
        id: "q10",
        text: "A project's emissions reductions are verified, but the project would have happened anyway because it was already required by law. This project fails which critical quality test?",
        options: {
          a: "Permanence test",
          b: "Leakage test",
          c: "Additionality test",
          d: "Corresponding Adjustment test",
        },
        correctAnswer: "c",
      },
    ],
  },

  // MODULE 17: ESG Audit, Assurance & Advisory (Mastery)
  {
    id: "c50",
    title: "ESG Audit, Assurance & Advisory",
    description:
      "Test your knowledge of ESG assurance levels, professional standards, common audit findings, and the professional opportunity in Kenya.",
    questions: [
      {
        id: "q1",
        text: "What is the key difference in the wording of an opinion between 'limited assurance' and 'reasonable assurance'?",
        options: {
          a: "Limited assurance gives a 'negative' opinion ('nothing came to our attention...'); reasonable assurance gives a 'positive' opinion ('in our opinion, fairly stated')",
          b: "Limited assurance is a verbal opinion; reasonable assurance is written",
          c: "Limited assurance covers 100% of the data; reasonable assurance covers only a sample",
          d: "There is no difference; the wording is the same",
        },
        correctAnswer: "a",
      },
      {
        id: "q2",
        text: "Which international standard is the primary framework for assurance engagements on non-financial information, such as ESG reports?",
        options: {
          a: "ISO 9001",
          b: "ISAE 3000 (Revised)",
          c: "IFRS 16",
          d: "IAS 38",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "Which professional standard focuses on the principles of inclusivity, materiality, and responsiveness for sustainability assurance?",
        options: {
          a: "ISAE 3000",
          b: "AA1000AS (AccountAbility)",
          c: "IFRS S1",
          d: "TCFD",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "What is a key independence requirement for a Big 4 firm's audit practice regarding its advisory clients?",
        options: {
          a: "The audit and advisory teams must share office space",
          b: "The firm cannot provide advisory services to its own audit clients to maintain independence and objectivity",
          c: "Advisory services must be provided for free to audit clients",
          d: "The audit team must also work on the advisory project",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "Which of the following is listed as a 'common ESG audit finding'?",
        options: {
          a: "Having too many internal controls",
          b: "Complete and transparent disclosure of all negative incidents",
          c: "Incomplete scope or boundary, where ESG data excludes material operations or entities",
          d: "Using third-party verification for all key metrics",
        },
        correctAnswer: "c",
      },
      {
        id: "q6",
        text: "What is the typical trajectory for mandatory ESG assurance in jurisdictions like the EU (CSRD) and, as projected, in Kenya?",
        options: {
          a: "It will stay voluntary indefinitely",
          b: "It will move from no assurance to limited assurance first, and then to reasonable assurance over time",
          c: "It will require reasonable assurance from the start",
          d: "It will not require any assurance, only management sign-off",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "What is the primary professional opportunity for Kenyan accountants and auditors in the coming years?",
        options: {
          a: "Traditional financial audits of small businesses",
          b: "Tax preparation for SMEs",
          c: "Building capabilities in ESG assurance and advisory, as mandatory requirements are expected to increase demand",
          d: "Corporate law",
        },
        correctAnswer: "c",
      },
      {
        id: "q8",
        text: "When an ESG auditor finds that a company's sustainability narrative ('We improved our turnover') contradicts its underlying data ('Data shows turnover worsened'), this is an example of what finding?",
        options: {
          a: "Inconsistent methodology",
          b: "Lack of management representation",
          c: "Unsubstantiated claim (greenwashing)",
          d: "Gap in narrative vs data",
        },
        correctAnswer: "d",
      },
      {
        id: "q9",
        text: "What are the two types of AA1000AS assurance?",
        options: {
          a: "Internal and External",
          b: "Full and Partial",
          c: "Type 1 (moderate, on adherence to principles) and Type 2 (high, on principles and specified data)",
          d: "Qualified and Unqualified",
        },
        correctAnswer: "c",
      },
      {
        id: "q10",
        text: "Why is it a critical audit finding if a company's management refuses to provide a formal 'representation letter' on the ESG information?",
        options: {
          a: "Because it is required to get a discount on audit fees",
          b: "Because the assurance provider cannot complete the engagement and provide an opinion without management's formal acknowledgment of responsibility for the information",
          c: "Because it is the only way to get a tax deduction",
          d: "Because it is a legal requirement under the Kenyan Companies Act",
        },
        correctAnswer: "b",
      },
    ],
  },

  // MODULE 18: Sustainable Finance Product Design (Mastery)
  {
    id: "c51",
    title: "Sustainable Finance Product Design",
    description:
      "Test your mastery of designing green bonds, SLLs, green leases, and navigating the Kenyan regulatory approval process.",
    questions: [
      {
        id: "q1",
        text: "What are the four core components of the ICMA Green Bond Principles (GBP)?",
        options: {
          a: "Governance, Strategy, Risk Management, and Metrics",
          b: "Use of Proceeds, Process for Project Evaluation & Selection, Management of Proceeds, and Reporting",
          c: "Principal, Interest, Term, and Amortisation",
          d: "Additionality, Permanence, Leakage, and Verification",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "In a Sustainability-Linked Loan (SLL), what is the key mechanism that incentivises the borrower to meet its ESG targets?",
        options: {
          a: "The 'margin ratchet', which changes the loan's interest rate (margin) based on whether SPTs are met or missed",
          b: "A requirement to plant 1,000 trees",
          c: "A media blackout if targets are missed",
          d: "A mandatory change of CEO if targets are missed",
        },
        correctAnswer: "a",
      },
      {
        id: "q3",
        text: "What is a 'Green Lease'?",
        options: {
          a: "A lease agreement printed on recycled paper",
          b: "A lease where the leased asset meets defined green eligibility criteria, such as a certified solar system or an electric vehicle",
          c: "A lease that has a lower interest rate for environmental reasons",
          d: "Any lease agreement signed with a green pen",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "In the Acorn Holdings green bond case study, what third-party certification was used to verify the 'greenness' of their student accommodation projects?",
        options: {
          a: "LEED Platinum",
          b: "ISO 14001",
          c: "EDGE Certification (Excellence in Design for Greater Efficiencies) from IFC",
          d: "BREEAM Outstanding",
        },
        correctAnswer: "c",
      },
      {
        id: "q5",
        text: "Which entity is the primary regulator for a public green bond issued in Kenya, responsible for approving the Green Bond Framework?",
        options: {
          a: "Central Bank of Kenya (CBK)",
          b: "Nairobi Securities Exchange (NSE)",
          c: "Capital Markets Authority (CMA)",
          d: "National Environment Management Authority (NEMA)",
        },
        correctAnswer: "c",
      },
      {
        id: "q6",
        text: "For a Sustainability-Linked Loan (SLL), what is the most important characteristic of the Sustainability Performance Targets (SPTs)?",
        options: {
          a: "They must be easy to achieve, regardless of ambition",
          b: "They must be ambitious, material, measurable, and require significant effort beyond business-as-usual",
          c: "They must be kept secret from the borrower",
          d: "They must be based on the company's stock price",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "What was the key lesson for future green bond issuers from the Acorn Holdings case study regarding investor uptake?",
        options: {
          a: "Kenyan retail investors will always buy any bond",
          b: "Anchor investment from DFIs (like IFC, FMO) was critical to build credibility and attract local institutional investors",
          c: "No marketing is needed for a green bond",
          d: "The bond should not be listed on the NSE",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "An ESG-Linked Lease is a product where...",
        options: {
          a: "The leased asset is a green building",
          b: "The lease agreement is drawn on recycled paper",
          c: "The lease margin is adjusted based on the lessee's ESG performance (similar to an SLL)",
          d: "The lessee is guaranteed to purchase the asset at the end",
        },
        correctAnswer: "c",
      },
      {
        id: "q9",
        text: "What is a typical condition of CMA approval for a public green bond in Kenya?",
        options: {
          a: "The bond must have a yield of at least 20%",
          b: "The bond must be rated 'AAA' by a global agency",
          c: "The issuer must provide annual allocation and impact reports after issuance",
          d: "The issuer must buy back the bond after one year",
        },
        correctAnswer: "c",
      },
      {
        id: "q10",
        text: "According to the module, what is a key reason a Kenyan issuer would seek CMA approval for a green bond?",
        options: {
          a: "To avoid paying taxes on the bond proceeds",
          b: "It is not required for any green bond in Kenya",
          c: "It is a legal requirement for any public issuance of a green bond, providing regulatory certainty and investor confidence",
          d: "To get a subsidy from the government",
        },
        correctAnswer: "c",
      },
    ],
  },

  // MODULE 19: ESG and Institutional Investors (Mastery)
  {
    id: "c52",
    title: "ESG and Institutional Investors",
    description:
      "Test your understanding of how institutional investors integrate ESG, fiduciary duty, and the Kenyan investment landscape.",
    questions: [
      {
        id: "q1",
        text: "What is the highest ambition approach to ESG investing, where the investor seeks to generate measurable positive social/environmental outcomes alongside a financial return?",
        options: {
          a: "Negative screening",
          b: "ESG Integration",
          c: "Active Ownership",
          d: "Impact Investing",
        },
        correctAnswer: "d",
      },
      {
        id: "q2",
        text: "According to the UNEP FI 2019 report, what is the current interpretation of fiduciary duty concerning ESG factors?",
        options: {
          a: "Ignoring financially material ESG factors is a breach of fiduciary duty",
          b: "ESG factors can never be considered by a fiduciary",
          c: "Fiduciary duty only applies to financial returns, never to ESG",
          d: "Only pension funds, not asset managers, have a fiduciary duty",
        },
        correctAnswer: "a",
      },
      {
        id: "q3",
        text: "Which of the following is a key ESG practice gap for most private pension funds in Kenya?",
        options: {
          a: "They have highly developed active ownership programs with regular AGM voting",
          b: "They have low ESG awareness and no formal ESG integration or reporting processes",
          c: "They are all signatories to the UNPRI",
          d: "They exclusively invest in green bonds",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "What are the six principles of the UNPRI (Principles for Responsible Investment)?",
        options: {
          a: "Profit, People, Planet, Purpose, Prosperity, and Peace",
          b: "Incorporate ESG, Active ownership, Disclosure, Promote acceptance, Collaborate, and Report",
          c: "Buy, Sell, Hold, Diversify, Hedge, and Speculate",
          d: "Integrate, Report, Assure, Engage, Disclose, and Certify",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "What is the primary focus of a 'Stewardship Code' for institutional investors?",
        options: {
          a: "To set environmental targets for portfolio companies",
          b: "To guide investors on how to engage actively with companies, including voting and dialogue on ESG issues",
          c: "To tell investors exactly which stocks to buy",
          d: "To provide tax advice to pension funds",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "In designing an ESG investment policy for a Kenyan pension fund, what is an important first step?",
        options: {
          a: "Immediately divesting from all stocks",
          b: "Investing 100% of the fund in a single green bond",
          c: "Including a clear 'Fiduciary Duty Statement' acknowledging that ESG integration is consistent with the fund's obligation to beneficiaries",
          d: "Outsourcing all decisions to a foreign asset manager",
        },
        correctAnswer: "c",
      },
      {
        id: "q7",
        text: "What is 'Climate Action 100+'?",
        options: {
          a: "A new climate science standard",
          b: "A UN treaty on climate change",
          c: "An investor-led initiative where major institutional investors collaborate to engage with the world's largest corporate greenhouse gas emitters",
          d: "A government subsidy for solar panels",
        },
        correctAnswer: "c",
      },
      {
        id: "q8",
        text: "Which Kenyan pension fund is designated as the mandatory national social security fund?",
        options: {
          a: "NSSF (National Social Security Fund)",
          b: "LAPTRUST",
          c: "Zimele",
          d: "CPF (Civil Servants Pension Fund)",
        },
        correctAnswer: "a",
      },
      {
        id: "q9",
        text: "What is an example of 'collaborative engagement' among institutional investors?",
        options: {
          a: "Competing with each other to get the best price for a stock",
          b: "Working together, such as through Climate Action 100+, to have a more powerful voice when engaging with a high-impact company",
          c: "Sharing a coffee before a shareholder meeting",
          d: "Buying the same stocks at the same time",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "According to the module, what is a key element of an ESG investment policy for a pension fund?",
        options: {
          a: "A promise to never sell any asset",
          b: "A policy on active ownership, including guidelines for proxy voting and engagement on ESG issues",
          c: "A requirement that all investments must be in gold",
          d: "A rule that all portfolio managers must wear green ties",
        },
        correctAnswer: "b",
      },
    ],
  },

  // MODULE 20: Capstone — ESG Advisory Simulation (Mastery)
  {
    id: "c53",
    title: "Capstone — ESG Advisory Simulation",
    description:
      "This comprehensive exam tests your ability to apply all the learnings from the previous 19 modules to a realistic client simulation, Bahari Cement Limited.",
    questions: [
      {
        id: "q1",
        text: "Based on the Bahari Cement Limited client briefing, what is a primary driver for the company to develop an ESG strategy?",
        options: {
          a: "Its desire to be listed on the NSE Main Segment and pressure from an international investor",
          b: "Its CEO retiring next year",
          c: "A sudden drop in cement prices",
          d: "A new marketing campaign",
        },
        correctAnswer: "a",
      },
      {
        id: "q2",
        text: "In the double materiality assessment for Bahari Cement, which topic is most likely to be in the 'Core Material' (top-right) quadrant due to its high financial and high impact materiality?",
        options: {
          a: "Office recycling programs",
          b: "Social media engagement",
          c: "GHG emissions (Scope 1 and 2) from clinker production",
          d: "Charitable donations to a local sports club",
        },
        correctAnswer: "c",
      },
      {
        id: "q3",
        text: "Bahari Cement's current carbon intensity is approximately 1.04 tCO₂/tonne of cement. If it achieves a typical best-practice intensity of 0.5 tCO₂/tonne, what is the total reduction in CO₂ for its 500,000-tonne annual production?",
        options: {
          a: "520,000 tonnes",
          b: "270,000 tonnes",
          c: "104,000 tonnes",
          d: "500,000 tonnes",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "What is a key advantage of the proposed blended finance structure (IFC Green Loan + KCB SLL) for Bahari Cement?",
        options: {
          a: "It has a simpler approval process than a single loan",
          b: "The IFC Green Loan provides a larger amount of funding than the SLL",
          c: "It provides access to concessional capital from the DFI (IFC) and aligns the KCB loan with environmental performance via the SLL's margin ratchet",
          d: "It requires no collateral from the company",
        },
        correctAnswer: "c",
      },
      {
        id: "q5",
        text: "For the KCB Sustainability-Linked Loan (SLL), which is an appropriate Sustainability Performance Target (SPT)?",
        options: {
          a: "The colour of the CEO's new car",
          b: "Reducing the clinker factor from 80% to 65% by 2027",
          c: "Increasing the office coffee budget",
          d: "Planting 50 trees in the office lobby",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "Under the proposed NSE reporting roadmap for Bahari Cement, what is the expected key step for Year 3 (transition to NSE Main Segment)?",
        options: {
          a: "No reporting is required for the Main Segment",
          b: "Mandatory, full ESG disclosure aligned with GRI and TCFD, as per NSE ESG Guidance",
          c: "Only a single-page environmental policy",
          d: "A report on employee satisfaction only",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "What mitigation measure is proposed for the risk that a lender (KCB) could repossess a leased asset, leaving the lessee (Bahari) with no equipment and a potential shortfall claim, under the 'Green Lease' structure?",
        options: {
          a: "The lease agreement gives the bank full rights to shut down the plant immediately",
          b: "The lease agreement is only for one month at a time",
          c: "The lease includes a 'Residual Value Guarantee' from Bahari to cover any shortfall, ensuring the bank is protected",
          d: "There is no need for mitigation as repossession is impossible",
        },
        correctAnswer: "c",
      },
      {
        id: "q8",
        text: "If Bahari Cement were to generate carbon credits by switching to alternative fuels, what would be a key quality test they must ensure to sell them as high-value, Paris-aligned credits?",
        options: {
          a: "The credits are from a renewable energy project",
          b: "The credits have a corresponding adjustment (CA) authorised by Kenya's NDA",
          c: "The credits are from a Blue Carbon project",
          d: "The credits are verified by an internal company team",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "To ensure credible ESG governance, what is the most important structural change proposed for Bahari Cement's board?",
        options: {
          a: "The board should meet more often to discuss sales targets",
          b: "The board should delegate all ESG matters to a junior accountant",
          c: "The board should form a dedicated ESG & Sustainability Committee with oversight of the ESG strategy",
          d: "The board should be composed entirely of external consultants",
        },
        correctAnswer: "c",
      },
      {
        id: "q10",
        text: "If Bahari Cement decides to install a large solar system for its plant under a lease, what is the primary IFRS 16 accounting implication for the company (as the lessee)?",
        options: {
          a: "There is no accounting impact",
          b: "It would likely recognise a right-of-use (ROU) asset and a lease liability on its balance sheet, impacting its reported debt and equity",
          c: "It would record the full value of the solar system as revenue",
          d: "It would record the lease payments as a direct reduction of its equity",
        },
        correctAnswer: "b",
      },
    ],
  },
  // BANKING TRACK (Modules B1-B4)

  // MODULE B1: Introduction to Equipment Leasing for Banks (Beginner)
  {
    id: "c54",
    title: "Introduction to Equipment Leasing for Banks",
    description:
      "Test your foundational knowledge of equipment leasing for Kenyan banks, including product types, cashflow mechanics, and common structural errors.",
    questions: [
      {
        id: "q1",
        text: "What is the single most important structural distinction between a lease and a loan?",
        options: {
          a: "A lease has a higher interest rate than a loan",
          b: "In a lease, the bank owns the asset; in a loan, the bank lends money and takes security over an asset owned by the borrower",
          c: "A lease is always for a longer term than a loan",
          d: "There is no difference; they are the same product",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "Which of the following is a key characteristic of a Finance Lease?",
        options: {
          a: "A short-term rental with no intention of ownership transfer",
          b: "A lease where the lessor retains all risks and rewards of ownership",
          c: "A full-payout lease where the lessee has the option to purchase the asset for a nominal residual value (e.g., KES 100) at the end of the term",
          d: "A lease governed by the Hire Purchase Act Chapter 507",
        },
        correctAnswer: "c",
      },
      {
        id: "q3",
        text: "What are the four inputs required to calculate a lease rental using the annuity formula?",
        options: {
          a: "Asset cost, residual value, term, and implicit interest rate",
          b: "Asset cost, deposit, term, and account number",
          c: "Asset cost, maintenance cost, term, and VAT rate",
          d: "Residual value, insurance cost, term, and interest rate",
        },
        correctAnswer: "a",
      },
      {
        id: "q4",
        text: "When a Kenyan bank RM uses a loan facility letter instead of a lease agreement, what is the primary risk?",
        options: {
          a: "The client might get a better interest rate",
          b: "The document does not reflect the legal reality of ownership, and the lessee could argue the transaction is a loan, jeopardising repossession rights",
          c: "The loan facility letter is more expensive to print",
          d: "There is no risk; the documents are interchangeable",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "What is the repossession advantage of a properly structured Finance Lease over a Hire Purchase agreement?",
        options: {
          a: "Repossession is faster and does not require a court order, as the bank already owns the asset",
          b: "The lessee cannot default on a Finance Lease",
          c: "The HP Act does not apply to any transaction at all",
          d: "There is no advantage; repossession is identical",
        },
        correctAnswer: "a",
      },
      {
        id: "q6",
        text: "What is the primary reason a Kenyan bank would use a 'Hire Purchase' structure instead of a Finance Lease?",
        options: {
          a: "It is a legacy product that some clients or legal teams may be more familiar with, despite its repossession restrictions",
          b: "It always has a lower interest rate",
          c: "It is not regulated by any law",
          d: "It is the only way to finance a vehicle",
        },
        correctAnswer: "a",
      },
      {
        id: "q7",
        text: "Error 1 in the module is 'Charging your own asset as security'. Why is this legally wrong for a lease?",
        options: {
          a: "Because it creates unnecessary paperwork",
          b: "Because the bank already owns the asset; it cannot take a charge over its own property, and doing so could cause a court to recharacterise the transaction as a loan",
          c: "Because the borrower's lawyer will be confused",
          d: "Because it is illegal to take security from a company",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "In the Nile Transport Ltd case study, what was the purpose of the KES 100 residual value?",
        options: {
          a: "To ensure the monthly rentals were as high as possible",
          b: "To represent a 'nominal purchase option' for the lessee, signifying a finance lease structure",
          c: "To pay the bank's administrative fees",
          d: "To be a mandatory donation to a charity",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "Which of the following is NOT a correct role of a bank lessor?",
        options: {
          a: "Asset acquisition (paying the supplier directly)",
          b: "Credit assessment using loan templates without any lease-specific adjustments",
          c: "Asset management (monitoring insurance and condition)",
          d: "Documentation with a lease-specific agreement",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "How does a 'Sale and Leaseback' create value for a corporate client?",
        options: {
          a: "It is a way to dispose of unwanted assets at a loss",
          b: "It allows the company to sell an owned asset to a bank for cash (releasing liquidity), while immediately leasing it back to continue using it",
          c: "It is a method to avoid paying VAT",
          d: "It transfers the asset's ownership to the client's employees",
        },
        correctAnswer: "b",
      },
    ],
  },

  // MODULE B2: Regulatory Compliance in Kenyan Lease Finance (Beginner)
  {
    id: "c55",
    title: "Regulatory Compliance in Kenyan Lease Finance",
    description:
      "Test your knowledge of the Kenyan regulatory framework, including the HP Act, CBK guidelines, and tax implications for leasing.",
    questions: [
      {
        id: "q1",
        text: "Which Kenyan law primarily governs hire purchase agreements and introduces restrictions like the 'one-third rule' for repossession?",
        options: {
          a: "The Central Bank of Kenya Act",
          b: "The Income Tax Act Cap 470",
          c: "The Hire Purchase Act Chapter 507",
          d: "The Companies Act",
        },
        correctAnswer: "c",
      },
      {
        id: "q2",
        text: "Under the Hire Purchase Act, what is the 'one-third rule'?",
        options: {
          a: "The hirer must pay a deposit of at least one-third",
          b: "After the hirer has paid one-third of the HP price, the owner cannot repossess the goods without a court order",
          c: "The interest rate cannot exceed one-third of the principal",
          d: "The agreement must be renewed every third year",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "Under CBK prudential guidelines, a lease asset that is 200 days past due would be classified as:",
        options: {
          a: "Normal",
          b: "Watch",
          c: "Substandard",
          d: "Doubtful",
        },
        correctAnswer: "d",
      },
      {
        id: "q4",
        text: "What is the specific provision rate for a 'Doubtful' credit exposure under CBK guidelines?",
        options: {
          a: "10%",
          b: "20%",
          c: "40%",
          d: "100%",
        },
        correctAnswer: "c",
      },
      {
        id: "q5",
        text: "For a VAT-registered lessee, what is the tax treatment of a finance lease rental?",
        options: {
          a: "There is no VAT on finance lease rentals",
          b: "The lessor charges 16% VAT on each rental, which the lessee can recover as input tax (if used for taxable supplies)",
          c: "The lessee pays VAT only at the beginning of the lease",
          d: "The lessor and lessee split the VAT 50/50",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "What is the tax advantage for a bank lessor on qualifying assets (e.g., solar equipment or manufacturing machinery) under the Income Tax Act?",
        options: {
          a: "A 50% wear and tear allowance in the first year",
          b: "A 100% investment deduction in the first year, significantly reducing taxable income",
          c: "An exemption from corporate tax on all lease income",
          d: "A VAT exemption on the purchase of the asset",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "For a non-VAT-registered client, which structure typically results in a lower total VAT cost?",
        options: {
          a: "A lease (VAT on each rental)",
          b: "A hire purchase (VAT on the cash price only, not on instalments)",
          c: "The VAT cost is identical for both structures",
          d: "There is no VAT on either structure for non-registered clients",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "Why does the module argue that the CBK prudential guidelines are an 'anomaly' for lease assets?",
        options: {
          a: "Because they are stricter than international standards",
          b: "Because they are based on days past due and ignore the realisable value of the underlying asset, which can lead to over-provisioning",
          c: "Because they require 100% provisioning for all leases",
          d: "Because they are not applicable to bank leasing subsidiaries",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "Under the Hire Purchase Act, a 'protected good' (e.g., a farmer's tractor) cannot be repossessed if the total HP price is below which obsolete threshold?",
        options: {
          a: "KES 500,000",
          b: "KES 1,000,000",
          c: "KES 5,000,000",
          d: "KES 10,000,000",
        },
        correctAnswer: "c",
      },
      {
        id: "q10",
        text: "What is the primary risk for a bank that uses loan-drafted security documents (like a charge) for a lease transaction?",
        options: {
          a: "The documents are more expensive to prepare",
          b: "The bank's annual report will be late",
          c: "A court could recharacterise the lease as a loan, potentially voiding the bank's repossession rights and impairing its security",
          d: "The borrower's credit score will automatically go down",
        },
        correctAnswer: "c",
      },
    ],
  },

  // MODULE B3: Structuring Complex Lease Deals (Intermediate)
  {
    id: "c56",
    title: "Structuring Complex Lease Deals",
    description:
      "Test your ability to structure multi-asset portfolios, sale and leaseback transactions, and use residual value stress testing.",
    questions: [
      {
        id: "q1",
        text: "In the Prestige Group multi-asset portfolio case, what structural protection is essential to link the three subsidiary leases into one enforceable portfolio?",
        options: {
          a: "A cross-default clause, so a default by one subsidiary triggers a default across the entire portfolio",
          b: "A separate lease for each subsidiary without any cross-links",
          c: "A clause that allows each subsidiary to sell its asset without permission",
          d: "A guarantee from the subsidiaries to each other",
        },
        correctAnswer: "a",
      },
      {
        id: "q2",
        text: "For a sale and leaseback transaction like the Nakuru Harvest case, what is the most critical appraisal step for the bank before purchasing the asset?",
        options: {
          a: "Sending a congratulatory email to the client",
          b: "Obtaining an independent valuation for both Market Value and Forced Sale Value (FSV)",
          c: "Taking a photo of the asset for the bank's files",
          d: "Checking the CEO's credit score only",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "Under IFRS 16, how does a lessee account for a gain on the sale in a sale and leaseback transaction?",
        options: {
          a: "The entire gain is recognised immediately in the income statement",
          b: "The gain is deferred and amortised over the lease term",
          c: "The gain is recorded as a liability and never amortised",
          d: "The gain is not recorded at all",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "What is the purpose of a 'negative pledge' clause in a complex lease agreement?",
        options: {
          a: "To force the lessee to pledge more assets to the bank",
          b: "To prevent the lessee from granting a security interest over its assets to another creditor without the bank's permission",
          c: "To reduce the lessee's rental payments",
          d: "To allow the lessee to sell the asset to a third party",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "According to Kenyan asset benchmarks, what is a typical residual value for commercial vehicles (e.g., trucks) after a 5-year operating lease?",
        options: {
          a: "5-10%",
          b: "15-25%",
          c: "35-45%",
          d: "70-80%",
        },
        correctAnswer: "c",
      },
      {
        id: "q6",
        text: "In the three-scenario residual value stress test (Base, Adverse -25%, Severe -50%), what action is recommended if the 'Severe' scenario shows a residual value gap of more than 15% of the asset's original cost?",
        options: {
          a: "Ignore it, as it is only a scenario",
          b: "Celebrate the profit from the gap",
          c: "Trigger a repricing, require a cash deposit, or restructure the deal as a finance lease",
          d: "Extend the lease term by 5 years",
        },
        correctAnswer: "c",
      },
      {
        id: "q7",
        text: "What is the 'Rental Coverage Ratio' (RCR) and what is the module's minimum target?",
        options: {
          a: "Rental payments divided by total assets; target >0.5x",
          b: "Lessee's EBITDA divided by annual lease rentals; target >1.5x",
          c: "Lease cost divided by asset cost; target <50%",
          d: "Total debt divided by EBITDA; target <3x",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "What is a key benefit of a 'Master Lease' structure for a multi-asset portfolio?",
        options: {
          a: "It allows for a single cross-default clause, linking all assets and providing stronger protection for the lessor",
          b: "It reduces the total rental by 50%",
          c: "It makes the lease agreement 10 pages longer",
          d: "It allows each asset to be repossessed individually without affecting the others",
        },
        correctAnswer: "a",
      },
      {
        id: "q9",
        text: "In the Nakuru Harvest sale and leaseback case, why was the LTV (Loan to Value) ratio based on Forced Sale Value (FSV) high at 140%?",
        options: {
          a: "Indicating the bank was paying a very high price relative to what it could recover quickly, requiring additional security or a price renegotiation",
          b: "Indicating the asset was undervalued and a great deal",
          c: "It is a standard ratio for all leases in Kenya",
          d: "It triggered an immediate default",
        },
        correctAnswer: "a",
      },
      {
        id: "q10",
        text: "What is the primary recommendation for a bank structuring a lease for a specialised asset like a grain processing plant?",
        options: {
          a: "Make it an operating lease where the bank takes full residual risk",
          b: "Finance lease with a clear repurchase option for the lessee; if the lessee defaults, the bank must have a clear plan for selling a potentially illiquid asset",
          c: "Decline all lease requests for specialised assets",
          d: "Only offer the lease in US Dollars",
        },
        correctAnswer: "b",
      },
    ],
  },

  // MODULE B4: Loan vs Lease — A Banker's Comparative Guide (Intermediate)
  {
    id: "c57",
    title: "Loan vs Lease — A Banker's Comparative Guide",
    description:
      "Test your ability to advise clients on the financial and strategic differences between a loan and a lease.",
    questions: [
      {
        id: "q1",
        text: "What is the primary difference in cashflow profile between a loan and a finance lease in the early years?",
        options: {
          a: "A loan has flat payments, while a lease's payments are higher in early years",
          b: "The cashflow profiles are identical",
          c: "A loan typically has front-loaded payments (higher in early years), while a lease has flat or lower early payments, which can help preserve working capital",
          d: "A loan has no cashflow impact until the final year",
        },
        correctAnswer: "c",
      },
      {
        id: "q2",
        text: "For a VAT-registered client with high taxable income, which option is likely to have the lowest net after-tax cost for a qualifying asset?",
        options: {
          a: "An operating lease",
          b: "A loan or finance lease that allows the client to claim the 100% investment deduction",
          c: "All options have identical after-tax costs",
          d: "Paying cash from retained earnings",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "How does a finance lease typically affect a lessee's reported EBITDA compared to a loan for the same asset?",
        options: {
          a: "EBITDA decreases under a finance lease",
          b: "EBITDA remains unchanged under both structures",
          c: "EBITDA improves (increases) under a finance lease because the rental expense is removed from operating expenses and replaced by depreciation and interest below the EBITDA line",
          d: "EBITDA is only calculated for loans, not leases",
        },
        correctAnswer: "c",
      },
      {
        id: "q4",
        text: "According to the eight-characteristic framework, for which client profile is an operating lease most favourable?",
        options: {
          a: "A high-income, profitable business wanting to own the asset",
          b: "A VAT-registered manufacturer with high capital reserves",
          c: "A start-up or loss-making company that cannot utilise the investment deduction and has tight working capital",
          d: "A company with high share price and strong investor base",
        },
        correctAnswer: "c",
      },
      {
        id: "q5",
        text: "Under IFRS 16, what is the impact on a lessee's balance sheet?",
        options: {
          a: "There is no impact; leases remain off-balance-sheet",
          b: "Most leases are capitalised, resulting in the recognition of a right-of-use (ROU) asset and a corresponding lease liability, increasing both assets and liabilities",
          c: "Only finance leases are capitalised; operating leases are still off-balance-sheet",
          d: "Equity is always reduced to zero",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "A key client objection is 'the lease rate is higher than the loan rate'. What is the best evidence-based response?",
        options: {
          a: "Agree and walk away from the deal",
          b: "Ignore the concern and focus on other benefits",
          c: "Compare the net after-tax total cost of each option, as the investment deduction and interest or rental deductibility significantly affect the final cost",
          d: "State that the rate is non-negotiable",
        },
        correctAnswer: "c",
      },
      {
        id: "q7",
        text: "For a client who insists on owning an asset at the end of the term but wants to preserve upfront working capital, what is the most appropriate structure?",
        options: {
          a: "A cash purchase",
          b: "An operating lease with a return option",
          c: "A finance lease with a KES 100 purchase option",
          d: "A hire purchase agreement without any deposit",
        },
        correctAnswer: "c",
      },
      {
        id: "q8",
        text: "How does the Low-Value Exemption under IFRS 16 affect a client's balance sheet?",
        options: {
          a: "It requires a complex 100-page disclosure",
          b: "It allows a lessee to exempt leases of assets with a value below USD 5,000 (e.g., laptops), keeping them off the balance sheet",
          c: "It bans all leases below USD 5,000",
          d: "It increases the liability to 150% of the asset value",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "For a client with an EBITDA-based banking covenant, which product is likely to produce a better debt/EBITDA ratio?",
        options: {
          a: "A bank loan",
          b: "A finance lease, as it improves EBITDA",
          c: "A cash purchase",
          d: "All products produce the same ratio",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "What is the recommendation for a client with a poor credit rating and limited working capital who needs a vehicle?",
        options: {
          a: "Recommend an unsecured bank loan",
          b: "Recommend a complex finance lease with a high deposit",
          c: "Recommend a hire purchase (HP) structure, as the asset itself serves as security and may be easier to obtain than a loan",
          d: "Recommend buying the asset with a credit card",
        },
        correctAnswer: "c",
      },
    ],
  },

  // INDEPENDENT LESSOR TRACK (Modules IL5-IL7)

  // MODULE IL5: Collections, Recoveries and Distressed Assets (Advanced)
  {
    id: "c58",
    title: "Collections, Recoveries and Distressed Assets",
    description:
      "Test your knowledge of early warning indicators, the dunning process, lease restructuring, repossession, and remarketing for an independent lessor.",
    questions: [
      {
        id: "q1",
        text: "According to the module, what is the single strongest early warning indicator (EWI) predicting a lease default?",
        options: {
          a: "A lessee changes its registered address",
          b: "A returned cheque (R/D) from the lessee. Two or more in 12 months signals high risk",
          c: "The lessee requests a new credit card",
          d: "The lessee's website goes offline",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "According to the dunning process timeline, by which day should a field visit to inspect the asset and meet with the lessee have taken place if default is not cured?",
        options: {
          a: "Day 7",
          b: "Day 15",
          c: "Day 37",
          d: "Day 90",
        },
        correctAnswer: "c",
      },
      {
        id: "q3",
        text: "In a 'Term Extension' restructuring, what is the primary mechanism for reducing the lessee's monthly cash outflow?",
        options: {
          a: "Writing off the entire lease balance",
          b: "Capitalising the arrears into a new principal and extending the lease term, which lowers the recalculated rental",
          c: "Providing a cash gift to the lessee",
          d: "Selling the asset to a third party",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "If a lessor is registered as the owner on the logbook for a vehicle under a finance lease, what is the repossession requirement?",
        options: {
          a: "A court order is required, regardless of the lease type",
          b: "No court order is required, as the lessor is the legal owner and can repossess its own property (subject to a 'breach of peace' clause)",
          c: "Repossession is only possible after 90 days of default",
          d: "Repossession is not allowed under any circumstances",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "Under the refurbishment decision rule, you should refurbish a repossessed asset only if:",
        options: {
          a: "It is a Chinese brand of equipment",
          b: "Its value before refurbishment is already the highest",
          c: "(Post-Refurb FSV − Refurbishment Cost) > As-Found FSV",
          d: "It has been in storage for less than one week",
        },
        correctAnswer: "c",
      },
      {
        id: "q6",
        text: "Which remarketing channel is typically the fastest for selling a common commercial vehicle like an Isuzu truck?",
        options: {
          a: "Direct sale to an end-user from the lessor's network",
          b: "A public auction",
          c: "A dealer trade-in",
          d: "Advertising on social media",
        },
        correctAnswer: "c",
      },
      {
        id: "q7",
        text: "What is the purpose of the '60-day remarketing rule'?",
        options: {
          a: "To ensure the asset is never sold",
          b: "To provide a structured price reduction schedule (reducing price every 30 days unsold) to avoid indefinite storage costs and maximise recovery",
          c: "To give the lessee another 60 days to pay after repossession",
          d: "To allow the lessor 60 days to change its mind about the repossession",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "In a 'Rental Holiday' restructuring, what is the non-negotiable condition for a lessor?",
        options: {
          a: "The lessee must pay a bonus to the lessor",
          b: "The lessee must sell the asset to pay the debt",
          c: "Interest must continue to accrue on the outstanding balance during the holiday",
          d: "The lessee's brother must co-sign the restructure",
        },
        correctAnswer: "c",
      },
      {
        id: "q9",
        text: "What is the 'NPL Ratio' for a lease portfolio?",
        options: {
          a: "Total leases in the portfolio",
          b: "(Outstanding balance for leases with arrears >90 days) ÷ (Total lease portfolio outstanding balance)",
          c: "Total profit from interest payments",
          d: "The number of new leases signed in a quarter",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "When is a 'Step-Down Rental' restructure most useful?",
        options: {
          a: "For a profitable client with no cashflow problems",
          b: "For a client with terminal business failure",
          c: "For a client with seasonal cashflow, such as an agricultural business that has low income during planting and high income at harvest",
          d: "For a client who wants to buy the asset immediately",
        },
        correctAnswer: "c",
      },
    ],
  },

  // MODULE IL6: Pricing a Lease — IRR, Yield and Margin (Advanced)
  {
    id: "c59",
    title: "Pricing a Lease — IRR, Yield and Margin",
    description:
      "Test your mastery of the five cost components of a lease rate, building the minimum rate, calculating IRR, and building a pricing matrix.",
    questions: [
      {
        id: "q1",
        text: "An independent lessor's Weighted Average Cost of Funds (WACF) is 15%. Its annual operating budget is KES 5M and its average portfolio book value is KES 50M. What is its operational cost component?",
        options: {
          a: "2.5%",
          b: "5%",
          c: "8.33%",
          d: "10%",
        },
        correctAnswer: "d",
      },
      {
        id: "q2",
        text: "What is the 'operational cost trap' for a start-up independent lessor?",
        options: {
          a: "Having too many employees",
          b: "A small portfolio book value (e.g., KES 50M) means the operational cost component is a high percentage (e.g., 10%), making its minimum rate uncompetitive",
          c: "Not having an office",
          d: "There is no trap; start-ups are always profitable",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "What is the correct way to calculate a lessor's Net Interest Margin (NIM)?",
        options: {
          a: "Total assets minus total liabilities",
          b: "Portfolio yield (weighted average implicit rate) minus Weighted Average Cost of Funds (WACF)",
          c: "Operating expenses divided by total income",
          d: "Credit loss provision plus equity return",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "For a lessor pricing an operating lease, how should they account for residual value risk (RV risk)?",
        options: {
          a: "Ignore it, as RV risk is the same as for a finance lease",
          b: "Add an RV risk premium to the finance lease floor rate (e.g., 0.5-4.0%), as the lessor will bear the risk of the asset's residual value at the end of term",
          c: "Subtract a premium to make the lease more attractive",
          d: "Charge a massive upfront fee to cover RV risk",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "What is the purpose of a 'Pricing Matrix' for a lessor?",
        options: {
          a: "To confuse clients with complex rates",
          b: "To provide pre-approved rates by asset class, deal size, and credit quality, enabling faster quoting and maintaining pricing discipline",
          c: "To set a single, fixed profit margin for all deals",
          d: "To track the number of employees in the company",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "A lease portfolio has a weighted average implicit rate (portfolio yield) of 22% and a WACF of 15%. What is the Net Interest Margin (NIM) and net interest income on a KES 200M portfolio?",
        options: {
          a: "NIM 7%, Net Interest Income KES 14M",
          b: "NIM 15%, Net Interest Income KES 37M",
          c: "NIM 30%, Net Interest Income KES 60M",
          d: "NIM 2%, Net Interest Income KES 4M",
        },
        correctAnswer: "a",
      },
      {
        id: "q7",
        text: "What is the primary lever for an independent lessor to become more price-competitive?",
        options: {
          a: "Lowering its cost of debt to zero",
          b: "Growing its portfolio book value to reduce the operational cost component as a percentage",
          c: "Increasing its corporate tax rate",
          d: "Hiring more expensive sales staff",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "In the five-component model, how is the 'Target equity return contribution' calculated?",
        options: {
          a: "Net profit × 30%",
          b: "Target ROE × Equity Ratio",
          c: "Total assets × 2%",
          d: "Interest expense × (1 - tax rate)",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "A start-up lessor with a KES 60M book and a KES 5M operational budget quotes a rate of 22% on a deal. According to the module, what is most likely true?",
        options: {
          a: "The lessor is making a very high profit",
          b: "The lessor is likely pricing below its minimum rate (e.g., 33%) and may be loss-making",
          c: "The lessor has the best rates in the market",
          d: "The lessor has zero operational costs",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "What is the typical operating lease premium over a finance lease for high-risk assets like ICT equipment?",
        options: {
          a: "0.5%",
          b: "1.0%",
          c: "3.0-4.0%",
          d: "10.0%",
        },
        correctAnswer: "c",
      },
    ],
  },

  // MODULE IL7: Vendor and Supplier Relationships (Advanced)
  {
    id: "c60",
    title: "Vendor and Supplier Relationships",
    description:
      "Test your knowledge of building and managing a vendor finance programme for an independent lessor.",
    questions: [
      {
        id: "q1",
        text: "What is the primary benefit for a vendor (OEM/distributor) in a vendor finance programme?",
        options: {
          a: "It increases the vendor's cost of sales",
          b: "It helps close deals faster, increases sales volume, and offers a competitive 'one-stop-shop' solution to customers",
          c: "It replaces the need for a sales team",
          d: "It guarantees a fixed profit margin of 50%",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "What is the main risk of an 'Exclusive Programme' for a lessor?",
        options: {
          a: "It is too simple to manage",
          b: "It requires a significant volume commitment (e.g., KES 150M+ per year), and failing to meet it could cause the lessor to lose its exclusivity",
          c: "It has no referral fee",
          d: "It does not provide any qualified leads",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "How can a lessor mitigate the risk of 'dealer fraud' in a vendor programme?",
        options: {
          a: "Pay the equipment supplier directly, not the dealer",
          b: "Trust the dealer completely without verification",
          c: "Only work with one vendor to simplify relationships",
          d: "Accept all applications without any review",
        },
        correctAnswer: "a",
      },
      {
        id: "q4",
        text: "What is the most common Kenyan vendor programme structure between an independent lessor and a major distributor (e.g., Isuzu East Africa)?",
        options: {
          a: "A non-exclusive referral pilot",
          b: "An exclusive programme with a single lessor",
          c: "A 'Preferred Lessor' agreement, where the lessor has first right of refusal on the vendor's customer deals",
          d: "An informal handshake agreement",
        },
        correctAnswer: "c",
      },
      {
        id: "q5",
        text: "According to the 90-day launch timeline, when does the 'soft launch' (processing the first 10 deals) take place?",
        options: {
          a: "Days 1-15",
          b: "Days 31-45",
          c: "Days 46-60",
          d: "After 1 year",
        },
        correctAnswer: "c",
      },
      {
        id: "q6",
        text: "What is the recommended maximum concentration limit for a single vendor programme as a percentage of a lessor's total portfolio?",
        options: {
          a: "10%",
          b: "30%",
          c: "60%",
          d: "90%",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "What is the primary expectation of a vendor from a lessor in terms of turnaround time for credit decisions?",
        options: {
          a: "2-3 weeks",
          b: "48 hours",
          c: "Same day",
          d: "The vendor does not care about speed",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "A lessor pays a 1.25% referral fee on a KES 15,000,000 funded deal. How much is the fee?",
        options: {
          a: "KES 18,750",
          b: "KES 187,500",
          c: "KES 1,875,000",
          d: "KES 15,000,000",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "For a lessor, what is the benefit of using a vendor programme despite a potentially higher cost per deal than direct origination?",
        options: {
          a: "It guarantees a loss on every deal",
          b: "It provides access to a consistent, high-volume stream of qualified leads, enabling the lessor to scale up quickly and reduce its operational cost component",
          c: "It eliminates the need for any legal contracts",
          d: "It is the only way to get leads in Kenya",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "What is the recommended action if a lessor identifies that a single vendor now represents 40% of its annual origination volume?",
        options: {
          a: "Celebrate and increase the concentration to 70%",
          b: "Ignore it, as there is no risk of vendor dependency",
          c: "Actively build other origination channels (e.g., direct sales, other vendor partners) to diversify and reduce dependency",
          d: "Terminate the vendor agreement immediately",
        },
        correctAnswer: "c",
      },
    ],
  },

  // TAX AND ADVISORY TRACK (Modules TA1-TA5)

  // MODULE TA1: Tax Treatment of Leases in Kenya (Intermediate)
  {
    id: "c61",
    title: "Tax Treatment of Leases in Kenya",
    description:
      "Test your knowledge of the Income Tax Act framework, KRA substance test, and tax treatment for lessees and lessors.",
    questions: [
      {
        id: "q1",
        text: "Under the Income Tax Act (ITA Cap 470), how does KRA classify a lease for tax purposes?",
        options: {
          a: "Based strictly on the contract's label (e.g., 'Operating Lease')",
          b: "Based on the economic substance (who bears the risks and rewards of ownership), not the legal form",
          c: "Based on the lessee's preference",
          d: "Based on the asset's colour",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "Which of the following is an indicator that KRA may treat a lease as a finance lease for tax purposes?",
        options: {
          a: "A lease term of 3 years on an asset with a 10-year life",
          b: "A bargain purchase option (e.g., KES 100) at the end of the term",
          c: "The asset is a standard commercial vehicle",
          d: "The lessee has no option to purchase the asset",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "For a lessee under a finance lease (tax classification), which portion of the lease rental is deductible?",
        options: {
          a: "The full rental amount",
          b: "The finance charge component only",
          c: "The capital component only",
          d: "Neither component is deductible",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "For a lessor under a correctly classified finance lease (tax classification), what is the correct tax treatment?",
        options: {
          a: "The lessor claims capital allowances on the asset",
          b: "The lessor does not claim capital allowances (the lessee claims them), and the finance income component is taxed as it accrues",
          c: "The lessor is exempt from all tax on lease income",
          d: "The lessor pays a flat 5% tax on the asset cost",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "What is the 'double deduction' risk that must be avoided in lease tax treatment?",
        options: {
          a: "When a lessee claims the full rental deduction and also claims capital allowances on the same asset",
          b: "When both the lessor and lessee pay VAT on the same transaction",
          c: "When the lessor and lessee both pay stamp duty on the same document",
          d: "When the transaction is structured as a loan and a lease simultaneously",
        },
        correctAnswer: "a",
      },
      {
        id: "q6",
        text: "What is a key tax avoidance structure that KRA scrutinises, involving a related-party lease where the rental is set significantly above the market rate?",
        options: {
          a: "A disguised sale and loan",
          b: "An inflated rental arrangement",
          c: "An operating lease with a finance lease substance",
          d: "A sale and leaseback with no valuation",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "Under the Income Tax Act, what is the tax treatment for a lessee under an operating lease?",
        options: {
          a: "The lessee claims capital allowances",
          b: "The full lease rental is deductible as a revenue expense",
          c: "No deduction is allowed for the rental",
          d: "Only 50% of the rental is deductible",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "What is the tax implication for a captive lessor (e.g., an OEM's finance arm) when it leases its own equipment?",
        options: {
          a: "It is exempt from tax",
          b: "It can claim capital allowances on the equipment and its rental income is taxable",
          c: "It can never claim capital allowances as it is the manufacturer",
          d: "It must charge a 0% VAT rate",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "If KRA reclassifies an 'operating lease' as a 'finance lease' for a past tax year, what is the potential consequence for the lessee?",
        options: {
          a: "No consequence, as the tax rate is the same",
          b: "KRA may disallow the full rental deduction for past years, assess additional tax, plus interest and penalties; the lessee may also have lost the chance to claim capital allowances",
          c: "KRA will give a tax refund",
          d: "The lessee must re-audit its financial statements",
        },
        correctAnswer: "b",
      },
    ],
  },

  // MODULE TA2: Capital Allowances and Lease Deductibility (Intermediate)
  {
    id: "c62",
    title: "Capital Allowances and Lease Deductibility",
    description:
      "Test your understanding of Kenya's three capital allowance categories and their application to lease transactions.",
    questions: [
      {
        id: "q1",
        text: "What is the 100% Investment Deduction?",
        options: {
          a: "A tax credit for investing in stocks",
          b: "A capital allowance that allows a taxpayer to deduct 100% of a qualifying asset's cost in the first year of use",
          c: "A discount offered by equipment suppliers",
          d: "A penalty for importing used machinery",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "A lessee under a properly structured finance lease can claim the 100% investment deduction. When can a finance lease lessee claim this deduction?",
        options: {
          a: "Only if the lessor gives them a certificate",
          b: "In the year the asset is first put into use",
          c: "Over the entire lease term (e.g., 5 years)",
          d: "Never; only the lessor can claim it",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "What is the wear and tear allowance rate for Class 3 assets (general machinery and plant) under the Income Tax Act?",
        options: {
          a: "12.5%",
          b: "25%",
          c: "30%",
          d: "37.5%",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "A finance lease lessee claims a 100% investment deduction on a KES 17.4M fleet. What is the approximate tax saving in Year 1?",
        options: {
          a: "KES 1.74M",
          b: "KES 5.22M",
          c: "KES 17.4M",
          d: "KES 0",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "What is the principal danger of claiming the 100% investment deduction and then selling the asset within a few years?",
        options: {
          a: "There is no danger; the deduction is permanent",
          b: "KRA will reverse the deduction completely",
          c: "The sale proceeds will trigger a 'balancing charge', which is taxable at 30%",
          d: "The asset's resale value will be zero",
        },
        correctAnswer: "c",
      },
      {
        id: "q6",
        text: "Which is typically the better capital allowance election for a start-up with very low taxable income in Year 1?",
        options: {
          a: "The 100% investment deduction",
          b: "Wear and tear allowances, to spread the deduction over several years rather than creating a tax loss that may be carried forward with no present value",
          c: "Both are identical",
          d: "Neither, start-ups should not claim any allowances",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "Under the finance lease deductibility rule, which component of the lease rental is NOT deductible by the lessee?",
        options: {
          a: "The finance charge (interest) component",
          b: "The capital component (principal repayment)",
          c: "The VAT on the rental",
          d: "The entire rental is fully deductible",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "What is the industrial building deduction annual rate for qualifying buildings (e.g., factories, warehouses)?",
        options: {
          a: "30% (reducing balance)",
          b: "50% (straight line)",
          c: "2.5% (straight line)",
          d: "100% in the first year",
        },
        correctAnswer: "c",
      },
      {
        id: "q9",
        text: "If a lessee claims the 100% investment deduction on a tractor, and then 6 years later exercises a KES 100 purchase option and sells the tractor for KES 8M, what is the tax consequence?",
        options: {
          a: "No further tax",
          b: "A KES 2.4M tax from a balancing charge on the sale proceeds",
          c: "A KES 100 tax on the purchase option",
          d: "A refund of the original investment deduction",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "For a client with a qualifying asset but limited Year 1 taxable income, what is the best advisory action regarding the 100% investment deduction?",
        options: {
          a: "Claim it anyway; the loss will be carried forward",
          b: "Elect for wear and tear allowance, spreading the deduction over the asset's useful life to match future income",
          c: "Do not claim any allowance at all",
          d: "Ask the lessor to claim the deduction instead",
        },
        correctAnswer: "b",
      },
    ],
  },

  // MODULE TA3: IFRS 16 vs IAS 17 — Transition and Ongoing Impact (Intermediate)
  {
    id: "c63",
    title: "IFRS 16 vs IAS 17 — Transition and Ongoing Impact",
    description:
      "Test your understanding of the changes from IAS 17 to IFRS 16 and the ongoing impact on financial statements and covenants.",
    questions: [
      {
        id: "q1",
        text: "What is the single biggest change from IAS 17 to IFRS 16 for a lessee?",
        options: {
          a: "No change; off-balance-sheet treatment still applies",
          b: "Most leases (with terms >12 months and not low-value) must be capitalised, bringing both a right-of-use (ROU) asset and a lease liability onto the balance sheet",
          c: "All leases are now treated as a service contract",
          d: "Only vehicles are affected by the new standard",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "Under IFRS 16, how is the initial lease liability measured for a lessee?",
        options: {
          a: "At the total undiscounted sum of all future lease payments",
          b: "At the fair value of the leased asset",
          c: "At the present value of future lease payments, discounted using the lessee's incremental borrowing rate",
          d: "At KES 100, the nominal residual value",
        },
        correctAnswer: "c",
      },
      {
        id: "q3",
        text: "What is the impact of IFRS 16 on a lessee's reported EBITDA?",
        options: {
          a: "EBITDA decreases because total expenses increase",
          b: "EBITDA remains unchanged",
          c: "EBITDA improves (increases) because the lease expense is removed from operating expenses and replaced by depreciation and interest, which are below the EBITDA line",
          d: "EBITDA is no longer a relevant metric",
        },
        correctAnswer: "c",
      },
      {
        id: "q4",
        text: "What is 'front-loading' in the context of IFRS 16?",
        options: {
          a: "The process of loading the asset onto a truck",
          b: "The phenomenon where the combined P&L charge (depreciation + interest) is higher in the early years of a lease than the old straight-line rental expense",
          c: "The prepayment of the first month's rent",
          d: "A truck loaded with cement",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "Which covenant is most likely to be negatively impacted (worsen) by the adoption of IFRS 16?",
        options: {
          a: "Debt-to-equity ratio, as a new lease liability is added to the balance sheet",
          b: "Revenue growth, as sales are not affected by the lease",
          c: "Gross profit margin, as cost of goods sold is unaffected",
          d: "All covenants improve under IFRS 16",
        },
        correctAnswer: "a",
      },
      {
        id: "q6",
        text: "What is a 'Frozen GAAP' covenant amendment?",
        options: {
          a: "A guarantee from the lessor that the asset will not freeze",
          b: "An agreement from a lender to test financial covenants as if IFRS 16 had not been adopted (using the old IAS 17 rules)",
          c: "A tax exemption for companies with leases",
          d: "A new disclosure requirement from the IASB",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "What is the 'Low-Value Exemption' under IFRS 16?",
        options: {
          a: "A rule that says all leases are of low value and can be ignored",
          b: "An exemption that allows a lessee to avoid capitalising leases for assets whose individual value when new is below USD 5,000 (approx. KES 650,000)",
          c: "A rule that only applies to buildings",
          d: "An exemption that applies to all vehicles",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "Under IFRS 16, a lease with a term of 11 months and no purchase option is:",
        options: {
          a: "Capitalised on the balance sheet as a ROU asset",
          b: "Exempt from capitalisation as a short-term lease",
          c: "Classified as a finance lease",
          d: "Not allowed under the standard",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "For the Highland Construction example, what was one of the 'three numbers' defining the IFRS 16 impact?",
        options: {
          a: "A decrease in staff headcount",
          b: "An increase of KES 32.4M per year in EBITDA",
          c: "A reduction in the company's tax rate",
          d: "An increase in the company's inventory value",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "When presenting IFRS 16 to a board of directors, what is the most important message about EBITDA?",
        options: {
          a: "EBITDA will decrease, which is negative",
          b: "EBITDA will increase because the rental expense is no longer an operating expense, which can be positive for EBITDA-based covenants",
          c: "EBITDA is not affected by IFRS 16",
          d: "EBITDA will be replaced by a new metric, EBITDAR",
        },
        correctAnswer: "b",
      },
    ],
  },

  // MODULE TA4: VAT on Leasing — Rentals, Import Duties and Tax Efficiency (Intermediate)
  {
    id: "c64",
    title: "VAT on Leasing — Rentals, Import Duties and Tax Efficiency",
    description:
      "Test your knowledge of VAT on lease rentals, import duties, and cross-border lease mechanics.",
    questions: [
      {
        id: "q1",
        text: "How are finance and operating lease rentals treated for VAT purposes in Kenya?",
        options: {
          a: "Exempt from VAT",
          b: "Zero-rated",
          c: "Standard-rated at 16% VAT as a supply of services",
          d: "Subject to a special 5% VAT rate",
        },
        correctAnswer: "c",
      },
      {
        id: "q2",
        text: "For a non-VAT-registered lessee, what is the net effect of the 16% VAT charged on lease rentals?",
        options: {
          a: "It can be claimed back from KRA, resulting in a net cost of zero",
          b: "It is an irrecoverable dead cost, increasing the total lease expense by 16%",
          c: "It is split 50/50 between the lessor and lessee",
          d: "There is no VAT on rentals for non-registered businesses",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "What is the import duty rate for most agricultural machinery and medical equipment under the EAC Common External Tariff (EAC-CET)?",
        options: {
          a: "25%",
          b: "10%",
          c: "0%",
          d: "16%",
        },
        correctAnswer: "c",
      },
      {
        id: "q4",
        text: "How is Hire Purchase (HP) treated for VAT purposes, different from a finance lease?",
        options: {
          a: "HP is treated the same as a finance lease (VAT on each instalment)",
          b: "VAT is charged on the cash price of the goods at inception, not on each instalment",
          c: "HP is exempt from all VAT",
          d: "HP has a lower VAT rate of 8%",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "In a cross-border lease from a foreign lessor, what is the 'reverse charge mechanism'?",
        options: {
          a: "The foreign lessor charges Kenyan VAT",
          b: "The Kenyan lessee self-accounts for VAT in its own return, simultaneously accounting for output and input tax, resulting in a nil net effect for a fully taxable lessee",
          c: "The transaction is entirely exempt from VAT",
          d: "The lessee must pay a special penalty for importing the service",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "For a non-VAT-registered business, which structure (HP vs Lease) generally results in a lower total VAT cost?",
        options: {
          a: "Lease (VAT is spread over term and is always lower in total)",
          b: "HP (VAT is charged on the cash price only, not on the financing element, leading to a smaller VAT base)",
          c: "The total VAT cost is identical for both",
          d: "There is no VAT on business transactions",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "What is the import duty rate for commercial trucks under the EAC-CET?",
        options: {
          a: "0%",
          b: "5%",
          c: "16%",
          d: "25%",
        },
        correctAnswer: "d",
      },
      {
        id: "q8",
        text: "A Kenyan lessee leases equipment from a foreign lessor. The foreign lessor is not VAT-registered in Kenya. Who is responsible for accounting for the VAT?",
        options: {
          a: "The foreign lessor must register in Kenya and charge VAT",
          b: "No VAT is due on cross-border leases",
          c: "The Kenyan lessee must account for the VAT via the reverse charge mechanism",
          d: "The Kenya Revenue Authority (KRA) will collect the VAT directly from the lessee",
        },
        correctAnswer: "c",
      },
      {
        id: "q9",
        text: "For a Kenyan lessor to be able to recover import VAT on equipment it brings into the country, it must:",
        options: {
          a: "Be a large multinational corporation",
          b: "Register for VAT in Kenya and hold a valid VAT PIN",
          c: "Be owned by a foreign parent company",
          d: "Pay the import duty in cash",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "In a sale-and-leaseback (SAL) transaction between two VAT-registered parties (lessee and lessor), what is the VAT treatment of the 'sale' stage?",
        options: {
          a: "It is exempt from VAT",
          b: "The sale is a supply of goods, and the seller (lessee) must charge output VAT at 16%, which the buyer (lessor) can recover as input VAT",
          c: "It is subject to a reduced VAT rate of 5%",
          d: "There is no VAT on the sale stage of a SAL",
        },
        correctAnswer: "b",
      },
    ],
  },
  {
    id: "c65",
    title: "Advising Clients on Lease vs Buy",
    description:
      "Test your mastery of the five-dimension framework, eight client characteristics, and client misconceptions for the lease vs buy decision.",
    questions: [
      {
        id: "q4",
        text: "A client is a non-VAT-registered business with moderate working capital. According to the module, which financing option might be structurally cheaper due to a smaller VAT base?",
        options: {
          a: "A standard operating lease",
          b: "A finance lease with a high residual value",
          c: "A Hire Purchase (HP) agreement, as VAT is charged only on the cash price at inception, not on the finance charge",
          d: "A bank loan, which has no VAT at all",
        },
        correctAnswer: "c",
      },
      {
        id: "q5",
        text: "A client's accountant says, 'IFRS 16 puts the lease liability on the balance sheet, so there is no advantage anymore.' What is the correct advisor response?",
        options: {
          a: "The accountant is correct; there is no advantage to leasing after IFRS 16",
          b: "The client should switch to buying all assets with cash alternatives off the balance sheet",
          c: "The EBITDA advantage of a lease over a loan still exists, as the rental expense is removed from operating expenses, which can improve EBITDA-based covenants",
          d: "The client should ignore their accountant",
        },
        correctAnswer: "c",
      },
      {
        id: "q6",
        text: "A client says, 'We have the cash to buy. Leasing is for companies with no capital.' What is the best evidence-based response?",
        options: {
          a: "Agree and recommend buying the asset with cash",
          b: "Reframe leasing as a capital preservation strategy: 'Every shilling tied up in an owned asset is a shilling not available for growth. Leasing preserves capital for opportunities that offer a higher return.'",
          c: "Tell the client they are wrong and walk away",
          d: "Offer to finance the asset at a very high rate",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "For a business selling technology assets like laptops and servers, which structure is recommended to avoid the 'balancing charge' upon disposal?",
        options: {
          a: "Outright purchase",
          b: "A finance lease with a nominal purchase option",
          c: "An operating lease, as the client never owns the asset and thus never disposes of it",
          d: "A standard bank loan",
        },
        correctAnswer: "c",
      },
      {
        id: "q8",
        text: "A client believes 'leasing always costs more' because the implicit rate is higher than a loan's interest rate. What is the best first step to counter this misconception?",
        options: {
          a: "Accept that the client is correct and walk away",
          b: "Focus only on the lower monthly payments without discussing total cost",
          c: "Propose to compare the net after-tax total cost of both options, as tax benefits (investment deduction, interest/rental deductibility) can significantly narrow or reverse the cost difference",
          d: "Increase the proposed interest rate to make the loan look better",
        },
        correctAnswer: "c",
      },
      {
        id: "q9",
        text: "Which of the following is NOT a valid dimension in the five-dimension advisory framework?",
        options: {
          a: "Tax",
          b: "Marketing",
          c: "Flexibility",
          d: "Asset Risk",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "For a client with a low taxable income profile, what is the recommended structure to maximise tax benefits?",
        options: {
          a: "A loan to claim the full investment deduction",
          b: "A finance lease to claim the investment deduction",
          c: "An operating lease, as the consistent rental deduction is more valuable than front-loaded capital allowances that would be wasted",
          d: "A cash purchase",
        },
        correctAnswer: "c",
      },
    ],
  },

  // ==============================================
  // BUSINESS OWNER AND CORPORATE CLIENT TRACK (BC1-BC10)
  // ==============================================

  // MODULE BC1: Leasing as a Business Growth Tool (Beginner)
  {
    id: "c66",
    title: "Leasing as a Business Growth Tool",
    description:
      "Test your understanding of the strategic and practical benefits of equipment leasing for business owners.",
    questions: [
      {
        id: "q1",
        text: "What are the three standard end-of-lease options for a business owner?",
        options: {
          a: "Lease, Rent, or Buy",
          b: "Purchase (at a nominal price), Return, or Upgrade",
          c: "Sell, Hold, or Fold",
          d: "Depreciate, Amortise, or Expense",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "A business owner has KES 18M cash. They can either buy 5 trucks for KES 18M or lease them with a KES 850K first rental. What is the key opportunity cost of buying the trucks?",
        options: {
          a: "The business would own the trucks, which is always better",
          b: "The business loses KES 850K in the first month compared to leasing",
          c: "The business ties up its entire KES 18M capital in the trucks, leaving no working capital for other growth opportunities like a new contract requiring a KES 5M mobilisation advance",
          d: "There is no cost; buying is always the best option",
        },
        correctAnswer: "c",
      },
      {
        id: "q3",
        text: "What is a 'Rental Coverage Ratio'?",
        options: {
          a: "The number of times a lessor can re-lease an asset",
          b: "Monthly revenue generated by the equipment divided by the monthly lease rental. A target ratio is >2.0x for safety",
          c: "The down payment percentage required by the lessor",
          d: "The insurance coverage required for the leased asset",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "Why might a business with a 25% return on working capital prefer to lease equipment instead of buying it cash?",
        options: {
          a: "Leasing offers a higher interest rate, which is beneficial",
          b: "The 25M tied up in the equipment would cost the business KES 6.25M per year in foregone profit. Leasing frees up that capital to be deployed in the core business",
          c: "Ownership is always more profitable than leasing",
          d: "Leasing is only for businesses that cannot afford to buy",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "When is an 'Upgrade Option' most valuable as a risk management tool?",
        options: {
          a: "When leasing a building",
          b: "When leasing technology-intensive assets (e.g., ICT, medical imaging) that are prone to rapid obsolescence",
          c: "When leasing a standard commercial vehicle",
          d: "It is never a useful option",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "In the Kapiti Logistics case, what was the key benefit of leasing that allowed the company to bid for a new contract?",
        options: {
          a: "Leasing gave them a tax break",
          b: "Leasing provided a new, more efficient truck",
          c: "Leasing preserved KES 16.3M in working capital, which was used for the contract's KES 5M mobilisation advance",
          d: "The lessor paid the company to bid for the contract",
        },
        correctAnswer: "c",
      },
      {
        id: "q7",
        text: "Which of these equipment types is BEST suited for a finance lease (where the lessee intends to purchase at the end)?",
        options: {
          a: "A fleet of laptops that become obsolete every 3 years",
          b: "A fleet of commercial trucks with a long useful life (8-10 years)",
          c: "An MRI machine with technology changing every 3-5 years",
          d: "Office furniture that is repainted every year",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "A simple explanation of a lease for a business owner is:",
        options: {
          a: "The lessor buys the equipment, and the lessee uses it in exchange for a monthly payment; at the end, the lessee can return, upgrade, or purchase it",
          b: "The lessee takes a loan from the bank to buy the asset",
          c: "The lessor lends the business money to buy equipment",
          d: "The lessor rents the equipment on a day-to-day basis with no contract",
        },
        correctAnswer: "a",
      },
      {
        id: "q9",
        text: "A start-up business with a limited track record may find leasing difficult. What alternative structure might be more accessible?",
        options: {
          a: "A large, unsecured personal loan from a bank",
          b: "Issuing corporate bonds",
          c: "A Hire Purchase (HP) agreement, as it is secured by the asset and may be easier to obtain than an unsecured loan",
          d: "Buying the asset with a credit card",
        },
        correctAnswer: "c",
      },
      {
        id: "q10",
        text: "What is the first of the 'Five Questions Before Any Lease'?",
        options: {
          a: "What is the lessor's share price?",
          b: "What does this equipment generate? (Calculate the rental coverage ratio to ensure it can pay for itself)",
          c: "What is the lessor's favourite colour?",
          d: "How many employees does the lessor have?",
        },
        correctAnswer: "b",
      },
    ],
  },

  // MODULE BC2: Understanding Your Lease Agreement (Intermediate)
  {
    id: "c67",
    title: "Understanding Your Lease Agreement",
    description:
      "Test your ability to identify good versus bad clauses in a lease agreement, including ownership, default, maintenance, and end-of-term options.",
    questions: [
      {
        id: "q1",
        text: "In a finance lease, what does a 'Good' ownership clause state about the purchase option?",
        options: {
          a: "The purchase option is at the asset's 'market value' to be determined at the end of the lease",
          b: "The purchase option is a fixed, nominal amount (e.g., KES 100), providing certainty for the lessee",
          c: "There is no purchase option; the asset must be returned",
          d: "The purchase option is 20% of the original cost of the asset",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "A default clause that has a cure period of _______ days is generally considered fair and workable for a business owner.",
        options: {
          a: "0 days (immediate default)",
          b: "2 days",
          c: "5-7 business days",
          d: "60 days",
        },
        correctAnswer: "c",
      },
      {
        id: "q3",
        text: "In a maintenance clause, what is a 'red flag' for a lessee?",
        options: {
          a: "The lessee may use its own qualified mechanic",
          b: "All maintenance must be performed by the lessor's 'approved service centre', which may be more expensive and inconvenient",
          c: "The lessee must keep maintenance records",
          d: "The return condition includes 'fair wear and tear'",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "What is a 'Good' end-of-term clause that provides maximum flexibility for a lessee?",
        options: {
          a: "The lessee has only one option: to return the asset in 'as new' condition",
          b: "The lessee must purchase the asset at fair market value",
          c: "The lessee has three clear options: purchase for a fixed KES amount, return with 'fair wear and tear', or extend the lease",
          d: "The clause is omitted from the agreement",
        },
        correctAnswer: "c",
      },
      {
        id: "q5",
        text: "An early termination clause that uses the present value (PV) of remaining rentals (discounted at the lease's implicit rate) is considered _______.",
        options: {
          a: "Unfair to the lessor",
          b: "A fair method to calculate the lessee's remaining obligation, as it gives the lessor early access to capital",
          c: "Illegal in Kenya",
          d: "A method that is only used for heavy equipment",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "A dangerous cross-default clause is one that:",
        options: {
          a: "Has a high monetary threshold (e.g., KES 5M) before it is triggered",
          b: "Has no threshold, meaning any default under ANY other agreement with the lessor or an affiliate could trigger a default on this lease",
          c: "Only applies to defaults exceeding KES 1M",
          d: "Is not included in the agreement",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "What is a 'Negative Pledge' clause?",
        options: {
          a: "A promise by the lessee to pay the rent on time",
          b: "An agreement by the lessee not to grant a security interest over the leased asset to another creditor",
          c: "A guarantee from the lessor that the asset will not lose value",
          d: "A clause that allows the lessor to repossess the asset without notice",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "Before signing a lease, a business owner should request all of the following EXCEPT:",
        options: {
          a: "A clear schedule of all costs",
          b: "A one-page plain-language summary of their obligations",
          c: "The lessor's internal credit scoring model",
          d: "Written end-of-lease option prices (e.g., purchase option amount)",
        },
        correctAnswer: "c",
      },
      {
        id: "q9",
        text: "Good insurance clause for a lessee requires that:",
        options: {
          a: "The lessor arranges the insurance and charges the lessee",
          b: "The insurance is for 'market value' and the lessor is not named as a loss payee",
          c: "The lessee can use its own broker for an 'agreed value' policy, with the lessor named as the loss payee",
          d: "No insurance is required",
        },
        correctAnswer: "c",
      },
      {
        id: "q10",
        text: "How many key clauses should you brief your lawyer to focus on when reviewing a lease agreement?",
        options: {
          a: "1 (clause 1)",
          b: "5 (clauses 1-5)",
          c: "6 (critical clauses covering ownership, default, maintenance, end-of-term, early termination, and cross-default/negative pledge)",
          d: "All 20 pages of the agreement",
        },
        correctAnswer: "c",
      },
    ],
  },

  // MODULE BC3: Lease vs Buy vs Loan — Making the Right Call (Intermediate)
  {
    id: "c68",
    title: "Lease vs Buy vs Loan — Making the Right Call",
    description:
      "Test your ability to apply the five-factor framework and recommend the right financing structure to a business owner.",
    questions: [
      {
        id: "q1",
        text: "What are the five factors in the lease vs buy decision framework?",
        options: {
          a: "Price, Product, Promotion, Place, People",
          b: "Taxable income, VAT status, Cashflow, End-of-term preference, and Banking covenants",
          c: "Scope 1, Scope 2, Scope 3, Scope 4, and Scope 5 emissions",
          d: "Assets, Liabilities, Equity, Revenue, and Expenses",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "For a business with a high taxable income, which structure is recommended to maximise tax benefits?",
        options: {
          a: "An operating lease (full rental deduction)",
          b: "A loan or finance lease, allowing the business to claim the 100% investment deduction",
          c: "No financing; cash purchase is always better",
          d: "A sale and leaseback of personal assets",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "In the Nakuru Packaging Company after-tax comparison, which option had the lowest net after-tax cost but the most severe working capital impact?",
        options: {
          a: "Finance Lease",
          b: "Bank Loan",
          c: "Buy Outright (Cash)",
          d: "All options had the same working capital impact",
        },
        correctAnswer: "c",
      },
      {
        id: "q4",
        text: "For a non-VAT-registered business, why might a Hire Purchase (HP) be cheaper than a standard lease?",
        options: {
          a: "HP has a lower interest rate than a lease",
          b: "HP has a 0% VAT rate, while a lease has 16%",
          c: "The VAT base for an HP is the cash price only (smaller), while a lease has 16% VAT on the total rentals (larger), resulting in a smaller total VAT cost for HP",
          d: "HP is not a legal structure in Kenya",
        },
        correctAnswer: "c",
      },
      {
        id: "q5",
        text: "Which client profile is a 'Finance Lease' the most appropriate recommendation for?",
        options: {
          a: "A non-VAT-registered start-up",
          b: "A client with a tight EBITDA covenant that would benefit from an EBITDA improvement",
          c: "A technology company with assets that become obsolete every 3 years",
          d: "A business planning to sell all its assets within 2 years",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "How does a client's working capital position influence the lease vs buy decision?",
        options: {
          a: "A client with tight working capital should buy to reduce ongoing expenses",
          b: "A client with tight working capital should prefer a lease, as it typically requires less upfront cash and spreads VAT over the term",
          c: "Working capital has no relevance to the decision",
          d: "All clients should buy, regardless of working capital",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "A business that wants to own the asset at the end of the financing period should choose:",
        options: {
          a: "An operating lease with a return option",
          b: "A finance lease with a nominal purchase option (KES 100) or a loan",
          c: "A standard rental agreement",
          d: "A donation from a supplier",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "What is the primary reason for a loss-making business to use an operating lease?",
        options: {
          a: "To the full benefit of the 100% investment deduction, which would lower its net loss",
          b: "It cannot qualify for a loan or finance lease",
          c: "The rental deduction provides a consistent annual expense, whereas an investment deduction would create a tax loss that has no immediate benefit and may be carried forward with no present value",
          d: "Operating leases are typically for a shorter term",
        },
        correctAnswer: "c",
      },
      {
        id: "q9",
        text: "A business owner is planning to sell their entire business in 2 years. What structure is recommended for new equipment?",
        options: {
          a: "Buy the equipment to increase the business's asset value for sale",
          b: "Lease the equipment via an operating lease to avoid owning the equipment and the associated balancing charge upon its disposal",
          c: "Do not acquire any new equipment",
          d: "Sell the business immediately and deliver the equipment later",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "A client asks, 'What is the most important factor in the lease vs buy decision?' The best answer is:",
        options: {
          a: "The nominal interest rate of the loan vs the lease's implicit rate",
          b: "The decision depends on five factors specific to the business, and there is no single 'most important' factor",
          c: "The colour of the asset",
          d: "The decision is predetermined: buying is always better",
        },
        correctAnswer: "b",
      },
    ],
  },

  // MODULE BC4: IFRS 16 for Corporate Finance Teams (Intermediate)
  {
    id: "c69",
    title: "IFRS 16 for Corporate Finance Teams",
    description:
      "Test your technical knowledge of IFRS 16's impact on a company's financial statements.",
    questions: [
      {
        id: "q1",
        text: "Under IFRS 16, for a lease that is not exempt, a lessee must initially recognise:",
        options: {
          a: "Only a lease liability",
          b: "Only a right-of-use (ROU) asset",
          c: "Both a right-of-use (ROU) asset and a lease liability",
          d: "Nothing; the asset is consolidated into the lessor's books",
        },
        correctAnswer: "c",
      },
      {
        id: "q2",
        text: "Which of the following is NOT a typical result of applying IFRS 16 to a lessee's financial statements?",
        options: {
          a: "Total assets and total liabilities increase",
          b: "EBITDA improves",
          c: "Net profit margin always increases from Year 1",
          d: "The pattern of profit recognition is front-loaded (lower profit in early years)",
        },
        correctAnswer: "c",
      },
      {
        id: "q3",
        text: "What is the impact of IFRS 16 on a company's reported debt (gearing/leverage) if it had significant operating leases?",
        options: {
          a: "Debt decreases, because the lease expense is no longer recorded",
          b: "Debt increases, because a new 'lease liability' is recognised on the balance sheet",
          c: "Debt remains unchanged",
          d: "It converts debt to equity",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "What is an 'Incremental Borrowing Rate' (IBR) used for in IFRS 16?",
        options: {
          a: "The government's interest rate benchmark",
          b: "The bank's cost of funds",
          c: "The rate of interest a lessee would have to pay to borrow over a similar term, to discount the lease payments",
          d: "The lessor's target profit margin",
        },
        correctAnswer: "c",
      },
      {
        id: "q5",
        text: "A company has an operating lease for 10 laptops, each with a value of KES 120,000. The lease term is 3 years. Can the company use the low-value exemption?",
        options: {
          a: "No, because there are 10 laptops",
          b: "Yes, because the value of each individual asset is below the USD 5,000/KES 650,000 threshold",
          c: "No, because the total value of all laptops exceeds KES 650,000",
          d: "The low-value exemption only applies to assets worth less than KES 50,000",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "A 4-year office lease with monthly payments of KES 500,000. Under IFRS 16, would this lease be capitalised?",
        options: {
          a: "No, it would be exempt as a short-term lease",
          b: "Yes, because the lease term is more than 12 months",
          c: "No, because it is a lease for real estate, not equipment",
          d: "Yes, but only if the lessee chooses to capitalise it",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "If a company breaches its debt covenant due to the new lease liability from IFRS 16, what is the recommended proactive action?",
        options: {
          a: "Do nothing and wait for the bank to declare the breach",
          b: "Immediately sell the company's largest asset to pay off the debt",
          c: "Approach the bank before the financial year-end to request a 'Frozen GAAP' amendment or a revised covenant threshold",
          d: "Fire the CFO and hire a new one",
        },
        correctAnswer: "c",
      },
      {
        id: "q8",
        text: "In the Highland Construction example, what was the total 3-year lease liability added to the balance sheet?",
        options: {
          a: "KES 32.4M",
          b: "KES 60M",
          c: "KES 92M",
          d: "KES 0, as it was an operating lease",
        },
        correctAnswer: "c",
      },
      {
        id: "q9",
        text: "What is the 'front-loading' effect under IFRS 16?",
        options: {
          a: "The interest expense on the lease liability is higher in the later years",
          b: "The total P&L charge (depreciation + interest) is higher in the early years of the lease compared to the old straight-line rental expense",
          c: "The company can front-load its tax deductions",
          d: "The asset is depreciated to zero in the first year",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "Why might a company choose NOT to use the low-value exemption for a large fleet of laptops?",
        options: {
          a: "Because it requires more complex accounting",
          b: "Because the laptops are valued below KES 650,000, they are not eligible for the exemption",
          c: "Because they want to keep the rental expense above EBITDA (which reduces EBITDA) and would prefer to have the lease capitalised to improve their EBITDA for a covenant",
          d: "There is no reason; all companies should use the low-value exemption for laptops",
        },
        correctAnswer: "c",
      },
    ],
  },

  // MODULE BC5: Negotiating Lease Terms with Your Lessor (Advanced)
  {
    id: "c70",
    title: "Negotiating Lease Terms with Your Lessor",
    description:
      "Test your ability to negotiate better lease terms using volume, competing quotes, and an understanding of lessor pushbacks.",
    questions: [
      {
        id: "q1",
        text: "What is the most powerful single negotiating lever for a business owner seeking better lease terms?",
        options: {
          a: "Having a good relationship with the lessor's salesperson",
          b: "Committed volume (current portfolio size or future origination volume)",
          c: "Asking for a discount politely",
          d: "Threatening to take legal action",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "What is the most common and effective way to get a better implicit lease rate?",
        options: {
          a: "Offer to pay a higher advance rental",
          b: "Get a competitive quote from another lessor and use it as leverage",
          c: "Accept the first offer without question",
          d: "Ask for a 'loyalty discount' after 5 years",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "A lessor says, 'Advance rental is policy, we need 3 months.' What is a potential concession to negotiate this down?",
        options: {
          a: "Offer to pay a higher interest rate",
          b: "Offer to buy the asset at the end of the term",
          c: "Offer to set up a direct debit mandate for the lease payments, which reduces the lessor's collection risk",
          d: "There is no way to negotiate; you must pay 3 months",
        },
        correctAnswer: "c",
      },
      {
        id: "q4",
        text: "A lessor says, 'We need a 5% residual value in the finance lease.' How should you respond?",
        options: {
          a: "Agree; 5% is a standard industry practice",
          b: "Say nothing and just sign the lease",
          c: "Request that if there is a meaningful residual, it should be treated as an operating lease with a lower monthly rental. For a full-payout finance lease, the residual should be nominal (KES 100)",
          d: "Offer to pay the 5% as a cash deposit",
        },
        correctAnswer: "c",
      },
      {
        id: "q5",
        text: "Saving 1.5% on the implicit rate of a KES 50M, 48-month lease would result in a total saving of approximately:",
        options: {
          a: "KES 750,000",
          b: "KES 3,000,000",
          c: "KES 7,500,000",
          d: "KES 30,000,000",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "A lessor pushes back on a rate request with, 'We cannot go below 18%; that is our floor.' What is the best follow-up question?",
        options: {
          a: "Is your floor made of wood or concrete?",
          b: "Accept the floor and end the negotiation",
          c: "What would move your floor? For example, additional volume, a parent guarantee, or a shorter term?",
          d: "Ask for the floor manager's phone number",
        },
        correctAnswer: "c",
      },
      {
        id: "q7",
        text: "What is a 'walk-away' indicator in a lease negotiation?",
        options: {
          a: "The lessor offers you a free coffee",
          b: "The lessor agrees to all your requests",
          c: "The lessor does not engage with a credible competing quote, refuses to negotiate on material terms, and cannot explain the basis for its 'floor rate'",
          d: "The lessor sends you a birthday card",
        },
        correctAnswer: "c",
      },
      {
        id: "q8",
        text: "Which of the following is NOT one of the eight negotiable lease terms?",
        options: {
          a: "Implicit rate and advance rental",
          b: "Maintenance obligations and insurance arrangements",
          c: "The lessor's head office location",
          d: "Early termination formula and purchase option amount",
        },
        correctAnswer: "c",
      },
      {
        id: "q9",
        text: "How can volume be used as leverage to negotiate a better rate?",
        options: {
          a: "By leasing a single, low-value asset",
          b: "By paying a higher deposit",
          c: "By consolidating all equipment needs with one lessor and committing to a certain volume of future business",
          d: "Volume is not a negotiating factor",
        },
        correctAnswer: "c",
      },
      {
        id: "q10",
        text: "A lessor's pushback of 'Cross-default is standard' can be countered by:",
        options: {
          a: "Agreeing to unlimited cross-default is fine",
          b: "Requesting a high monetary threshold (e.g., KES 5M) and a cure period (e.g., 30 days) for the cross-default clause",
          c: "Ignoring the clause completely",
          d: "Removing the cross-default clause entirely",
        },
        correctAnswer: "b",
      },
    ],
  },
  // BUSINESS OWNER AND CORPORATE CLIENT TRACK (BC6-BC10) - continued

  // MODULE BC6: Fleet Leasing for Growing Businesses (Intermediate)
  {
    id: "c71",
    title: "Fleet Leasing for Growing Businesses",
    description:
      "Test your knowledge of fleet economics, phased expansion strategies, utilisation rates, and replacement planning.",
    questions: [
      {
        id: "q1",
        text: "For an Isuzu NQR truck with a monthly rental of KES 170,000, fuel costs of KES 32,400, maintenance of KES 28,000, insurance of KES 18,500, and a driver salary of KES 45,000, what is the total monthly cost per truck?",
        options: {
          a: "KES 170,000",
          b: "KES 293,900",
          c: "KES 400,000",
          d: "KES 500,000",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "What is the recommended phased fleet expansion strategy for a growing logistics business?",
        options: {
          a: "Lease all trucks at once to get a volume discount from Day 1",
          b: "Phase 1 (5 trucks on confirmed contracts), Phase 2 (use track record to add 5 more), Phase 3 (expand to full fleet)",
          c: "Buy all trucks cash to avoid lease payments",
          d: "Use a single truck and subcontract all other work",
        },
        correctAnswer: "b",
      },
      {
        id: "q3",
        text: "What is the break-even utilisation rate for the Isuzu NQR truck in the example (fixed costs KES 233,500, variable cost per day KES 2,517, revenue per day KES 60,000)?",
        options: {
          a: "5%",
          b: "13.5%",
          c: "50%",
          d: "100%",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "When should a fleet operator start planning for fleet replacement on a 48-month lease?",
        options: {
          a: "Month 47",
          b: "Month 36 (12 months before the end of the term)",
          c: "Month 12",
          d: "The day the lease is signed",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "What is the typical net margin per truck per month for a Nairobi-Mombasa haulage route with monthly revenue of KES 960,000 and total monthly cost of KES 293,900?",
        options: {
          a: "KES 293,900",
          b: "KES 666,100",
          c: "KES 960,000",
          d: "KES 1,200,000",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "In the phased expansion strategy, what is the primary benefit of successfully completing Phase 1 (6 months of on-time payments for 5 trucks)?",
        options: {
          a: "The lessor will gift you a free truck",
          b: "You have established a payment track record, which you can use as leverage to negotiate a better rate for Phase 2",
          c: "Your tax rate decreases",
          d: "You no longer need to insure the trucks",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "A key rule from the module to avoid over-leveraging is:",
        options: {
          a: "Lease to anticipated contracts, not to confirmed contracts",
          b: "Lease to confirmed contracts, not to anticipated contracts",
          c: "Always lease more trucks than you need, just in case",
          d: "Never lease a truck without a 50% deposit",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "What does 'fleet utilisation rate' measure?",
        options: {
          a: "The number of trucks in the fleet",
          b: "The amount of fuel used per truck",
          c: "Actual revenue-generating days divided by available operating days",
          d: "The number of drivers per truck",
        },
        correctAnswer: "c",
      },
      {
        id: "q9",
        text: "Under the 60-day remarketing rule, what action should be taken if a vehicle is unsold after 60 days?",
        options: {
          a: "Raise the price to increase perceived value",
          b: "Reduce the price to forced sale value and sell via dealer trade-in or auction",
          c: "Donate the vehicle to charity",
          d: "Store it for another year",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "For a fleet of 20 trucks, which end-of-term option has the lowest total cost over 2 years, but carries the highest breakdown risk?",
        options: {
          a: "Upgrade to new trucks",
          b: "Extend the lease at a lower rental",
          c: "Purchase the trucks at the nominal purchase option and keep them",
          d: "Return the trucks and use a competitor's fleet",
        },
        correctAnswer: "c",
      },
    ],
  },

  // MODULE BC7: Medical Equipment Leasing for Healthcare Providers (Intermediate)
  {
    id: "c72",
    title: "Medical Equipment Leasing for Healthcare Providers",
    description:
      "Test your knowledge of leasing for medical imaging equipment, including technology obsolescence, revenue coverage, and VAT considerations.",
    questions: [
      {
        id: "q1",
        text: "What is the primary structural recommendation for leasing high-obsolescence medical imaging equipment like an MRI or CT scanner?",
        options: {
          a: "A finance lease with a KES 100 purchase option",
          b: "An outright cash purchase to avoid ongoing payments",
          c: "An operating lease with an upgrade option, typically for 36-48 months",
          d: "A hire purchase agreement with a balloon payment",
        },
        correctAnswer: "c",
      },
      {
        id: "q2",
        text: "In the Nairobi Diagnostic Centre case, an MRI generates KES 4.5M in monthly revenue and has a KES 900,000 monthly lease rental. What is the revenue coverage ratio?",
        options: {
          a: "0.2x",
          b: "1.0x",
          c: "5.0x",
          d: "10.0x",
        },
        correctAnswer: "c",
      },
      {
        id: "q3",
        text: "What is the import duty rate for most medical equipment (e.g., MRI, CT scanners, X-ray machines) under the EAC Common External Tariff (EAC-CET)?",
        options: {
          a: "25%",
          b: "16%",
          c: "10%",
          d: "0%",
        },
        correctAnswer: "d",
      },
      {
        id: "q4",
        text: "For a non-VAT-registered healthcare provider, what is the net effect of the 16% import VAT on a KES 20M piece of equipment?",
        options: {
          a: "It is fully recoverable, resulting in zero cost",
          b: "It is an irrecoverable dead cost of KES 3.2M",
          c: "It is split 50/50 between the provider and the supplier",
          d: "It can be claimed back as a tax credit",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "A healthcare provider is offered an operating lease for an MRI. Which question is MOST important to ask about the technology lifecycle?",
        options: {
          a: "What colour is the new model?",
          b: "What are the technology upgrade provisions? Can I return and upgrade mid-term if a significantly better model is released?",
          c: "Who is the manufacturer's CEO?",
          d: "How much does the paint cost?",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "Why is the secondary market risk for medical equipment a key factor in favour of leasing?",
        options: {
          a: "Because medical equipment appreciates in value faster than real estate",
          b: "Because there is a very active and liquid secondary market for used medical equipment in Kenya",
          c: "Because the secondary market in Kenya is thin and uncertain; an operating lease transfers this residual value risk to the lessor",
          d: "Because KRA provides a subsidy for buying used medical equipment",
        },
        correctAnswer: "c",
      },
      {
        id: "q7",
        text: "What is 'clinical currency' in the context of medical equipment leasing?",
        options: {
          a: "The amount of cash a clinic has on hand",
          b: "Having the latest, most current technology, which attracts patients and referring physicians",
          c: "The cost of a patient's visit",
          d: "The currency used to pay for clinical trials",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "A healthcare provider is not VAT-registered. How does this affect the lease vs buy decision for a KES 25M MRI?",
        options: {
          a: "The provider can register for VAT just for this transaction",
          b: "The VAT is recoverable regardless of registration status",
          c: "Buying may have a lower total cost, but leasing preserves capital and offers an upgrade option. The 'dead' VAT cost must be factored into both options",
          d: "VAT is not applicable for healthcare providers",
        },
        correctAnswer: "c",
      },
      {
        id: "q9",
        text: "In an operating lease for medical equipment, who typically bears the risk of residual value loss if the equipment is obsolete after 3 years?",
        options: {
          a: "The healthcare provider (lessee)",
          b: "The lessor (bank or finance company)",
          c: "The patient receiving the scan",
          d: "The government",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "What is a critical question regarding the 'return process' clause in a medical equipment lease?",
        options: {
          a: "What is the lessor's favourite colour?",
          b: "What does 'good working order consistent with its age' specifically mean, and who assesses the condition (e.g., an independent third party)?",
          c: "How many people will be needed to lift the asset?",
          d: "The return process is not important",
        },
        correctAnswer: "b",
      },
    ],
  },

  // MODULE BC8: ICT and Technology Leasing (Intermediate)
  {
    id: "c73",
    title: "ICT and Technology Leasing",
    description:
      "Test your knowledge of leasing for ICT assets, including the depreciation curve, IFRS 16 low-value exemption, and ICT-specific lease terms.",
    questions: [
      {
        id: "q1",
        text: "According to the module, what is the ownership problem with buying enterprise laptops?",
        options: {
          a: "They are too expensive to buy",
          b: "They are easy to steal",
          c: "They depreciate rapidly. A KES 120,000 laptop is worth only 15-20% of its original cost after 36 months. You become the owner of a depreciating liability, not an asset",
          d: "There is no problem; buying laptops is always the best strategy",
        },
        correctAnswer: "c",
      },
      {
        id: "q2",
        text: "For a fleet of 50 laptops, what is the approximate total lease cost over 36 months if the monthly rental per laptop is KES 3,800?",
        options: {
          a: "KES 6,840,000",
          b: "KES 6,000,000",
          c: "KES 11,200,000",
          d: "KES 1,200,000",
        },
        correctAnswer: "a",
      },
      {
        id: "q3",
        text: "Under IFRS 16, can a company use the low-value exemption for a fleet of 50 laptops, each with a value of KES 120,000?",
        options: {
          a: "No, because the total value of the fleet exceeds KES 5M",
          b: "Yes, because the low-value exemption is applied per asset (each unit is below the KES 650,000 threshold), not per fleet",
          c: "No, because laptops are not considered 'low-value' assets",
          d: "Yes, but only if the company has a turnover of less than KES 50M",
        },
        correctAnswer: "b",
      },
      {
        id: "q4",
        text: "What is a critical ICT-specific term to negotiate regarding data security at the end of a lease?",
        options: {
          a: "The lessor's right to sell your data",
          b: "A written certification of data destruction (e.g., NIST 800-88 standard) for each returned device",
          c: "A clause that the lessor will keep all old data for future reference",
          d: "Data security is not a concern for ICT leasing",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "What is the recommended lease term and structure for a company's standard laptop fleet?",
        options: {
          a: "60-month finance lease with purchase option",
          b: "24-36 month operating lease, return and upgrade",
          c: "12-month cash purchase",
          d: "48-month hire purchase",
        },
        correctAnswer: "b",
      },
      {
        id: "q6",
        text: "A company with an EBITDA covenant is considering leasing a large laptop fleet. What is a key consideration regarding the low-value exemption?",
        options: {
          a: "Using the exemption will keep the lease off-balance-sheet but will reduce EBITDA (as rental is above EBITDA)",
          b: "Not using the exemption (capitalising the lease) will keep EBITDA the same but add a large liability to the balance sheet",
          c: "Using the exemption will increase EBITDA",
          d: "EBITDA is not affected by the low-value exemption",
        },
        correctAnswer: "a",
      },
      {
        id: "q7",
        text: "Which ICT-specific lease term protects a company from being locked into old, inadequate server capacity as the business grows?",
        options: {
          a: "Software licensing clause",
          b: "Data security on return clause",
          c: "Mid-term upgrade rights",
          d: "Malfunction replacement clause",
        },
        correctAnswer: "c",
      },
      {
        id: "q8",
        text: "What is a key step in transitioning a company from an owned ICT fleet to a leased fleet?",
        options: {
          a: "Throw all old equipment in the trash",
          b: "Data wipe all old devices to a certified standard, then sell or donate them to recover some value",
          c: "Keep the old fleet as a backup and just buy new devices",
          d: "Give the old fleet to employees for free without any data wiping",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "What is a 'Good' ICT lease clause regarding e-waste disposal?",
        options: {
          a: "The lessor has no responsibility for e-waste",
          b: "The lessee must pay an e-waste recycling fee of 50% of the asset's cost",
          c: "The lessor shall dispose of all returned equipment in compliance with environmental laws (e.g., NEMA, Basel Convention) and provide a certificate of responsible disposal",
          d: "E-waste is not a concern for ICT assets",
        },
        correctAnswer: "c",
      },
      {
        id: "q10",
        text: "What is the first step in the transition strategy from owned to leased ICT?",
        options: {
          a: "Immediately lease 100 new laptops",
          b: "Assess the current fleet's age, condition, and data security risk",
          c: "Fire the IT manager",
          d: "Sell the company",
        },
        correctAnswer: "b",
      },
    ],
  },

  // MODULE BC9: Construction and Heavy Equipment Leasing (Intermediate)
  {
    id: "c74",
    title: "Construction and Heavy Equipment Leasing",
    description:
      "Test your knowledge of project-based leasing, residual value dynamics, and bidding advantages for construction companies.",
    questions: [
      {
        id: "q1",
        text: "For a construction company, what is the primary structural advantage of project-based leasing over owning equipment?",
        options: {
          a: "Owning equipment is always cheaper in the long run",
          b: "Leasing preserves capital, allowing the company to bid for multiple contracts simultaneously, while owning ties up capital in idle metal between contracts",
          c: "Leased equipment is more powerful than owned equipment",
          d: "There is no advantage; owning is always better",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "What is the contract coverage ratio for Nakuru Road's KES 180M contract with a total lease cost of KES 39.6M?",
        options: {
          a: "1.5x",
          b: "3.0x",
          c: "4.55x",
          d: "0.5x",
        },
        correctAnswer: "c",
      },
      {
        id: "q3",
        text: "How does the residual value of a Caterpillar excavator (55-70% at 36 months) compare to a Chinese-brand equivalent (38-48%)?",
        options: {
          a: "They are identical",
          b: "The Chinese brand has a 15-20 percentage point higher residual value",
          c: "The Caterpillar has a 15-20 percentage point higher residual value",
          d: "Residual value is not a factor for construction equipment",
        },
        correctAnswer: "c",
      },
      {
        id: "q4",
        text: "If a construction company plans to return an excavator after a 36-month contract (operating lease), which brand is likely to give a lower monthly rental?",
        options: {
          a: "A Chinese brand, due to its lower purchase price",
          b: "A Caterpillar or Komatsu, because its higher residual value reduces the lessor's risk and thus the rental",
          c: "Both brands will have the same rental",
          d: "Neither; operating leases are not available for construction equipment",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "A construction company has KES 50M tied up in idle owned excavators. What is the primary purpose of a sale-and-leaseback?",
        options: {
          a: "To dispose of old, unwanted equipment",
          b: "To write off a loss on the equipment",
          c: "To unlock working capital by selling the equipment to a lessor and leasing it back, freeing up KES 50M to bid for new contracts",
          d: "To avoid paying taxes on the equipment",
        },
        correctAnswer: "c",
      },
      {
        id: "q6",
        text: "In the Nakuru Road case, what was the upfront cash required for leasing vs buying the required equipment?",
        options: {
          a: "Lease required KES 82M upfront; buy required KES 4.4M",
          b: "Lease required KES 4.4M upfront; buy required KES 82M",
          c: "Both required the same upfront cash",
          d: "Leasing required no upfront cash",
        },
        correctAnswer: "b",
      },
      {
        id: "q7",
        text: "Why is the 'lease to contracts, not to anticipated contracts' rule critical for construction companies?",
        options: {
          a: "It ensures the company only buys the most expensive equipment",
          b: "Leasing trucks without a contract risks having idle equipment (and a lease payment) with no revenue to cover it, which could bankrupt the company",
          c: "It is a legal requirement under the CBK guidelines",
          d: "It is a good marketing strategy",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "What is a key lesson from the comparison of the owned-equipment vs leasing construction companies?",
        options: {
          a: "The owned-equipment company can bid for more contracts",
          b: "The leasing company's capital is exhausted after one contract",
          c: "The leasing company, with preserved capital, can bid for and win multiple simultaneous contracts, generating significantly higher revenue and profit",
          d: "Both companies have identical bidding capacity",
        },
        correctAnswer: "c",
      },
      {
        id: "q9",
        text: "If a construction company needs equipment for a one-year project, what is the most appropriate solution?",
        options: {
          a: "A 5-year operating lease",
          b: "A 5-year finance lease",
          c: "A cash purchase",
          d: "A short-term rental or a lease with a term that matches the project duration (e.g., 12 months)",
        },
        correctAnswer: "d",
      },
      {
        id: "q10",
        text: "Before agreeing to a sale and leaseback of its owned excavators, what must a construction company do?",
        options: {
          a: "Get the lessor's agreement to buy the equipment at 200% of its value",
          b: "No special steps are needed",
          c: "Obtain an independent valuation of the equipment for both Market Value and Forced Sale Value (FSV)",
          d: "Hire a public relations firm to announce the transaction",
        },
        correctAnswer: "c",
      },
    ],
  },

  // MODULE BC10: Agricultural Equipment Leasing (Intermediate)
  {
    id: "c75",
    title: "Agricultural Equipment Leasing",
    description:
      "Test your knowledge of seasonal rental structures, cooperative leasing models, import duties, and residual values for agricultural equipment.",
    questions: [
      {
        id: "q1",
        text: "What is the primary cashflow problem that a 'seasonal rental structure' solves for a farmer?",
        options: {
          a: "High cashflow during planting and low cashflow at harvest",
          b: "Flat monthly rentals that ignore the seasonal cashflow cycle, causing payment stress in low-cashflow months (e.g., planting)",
          c: "Low VAT rates in harvest season",
          d: "The farmer has too much cash and wants to spend more",
        },
        correctAnswer: "b",
      },
      {
        id: "q2",
        text: "In the Rift Valley Wheat Farm case, what was the monthly rental during the low-cashflow planting months?",
        options: {
          a: "KES 300,000",
          b: "KES 197,000",
          c: "KES 120,000",
          d: "KES 0",
        },
        correctAnswer: "c",
      },
      {
        id: "q3",
        text: "What is the import duty rate for agricultural tractors and harvesters under the EAC Common External Tariff (EAC-CET)?",
        options: {
          a: "25%",
          b: "16%",
          c: "10%",
          d: "0%",
        },
        correctAnswer: "d",
      },
      {
        id: "q4",
        text: "How does a 'Cooperative Group Leasing' model enable smallholder farmers to access expensive equipment?",
        options: {
          a: "The government provides a 100% subsidy for co-ops",
          b: "The cooperative acts as a single lessee, pooling the resources of many farmers, making the monthly rental per farmer affordable (e.g., KES 7,500 per month vs KES 150,000)",
          c: "It allows each farmer to lease equipment for free",
          d: "It gives farmers access to foreign currency at a discounted rate",
        },
        correctAnswer: "b",
      },
      {
        id: "q5",
        text: "According to the module, what is the single most important factor determining the residual value of a tractor?",
        options: {
          a: "The brand name (John Deere vs Chinese brand)",
          b: "The paint colour",
          c: "Its service record (well-maintained with full records vs poorly maintained)",
          d: "The age of the tractor driver",
        },
        correctAnswer: "c",
      },
      {
        id: "q6",
        text: "For a well-maintained John Deere tractor, what is the typical residual value after 48 months?",
        options: {
          a: "20-30%",
          b: "38-48%",
          c: "55-65%",
          d: "0%",
        },
        correctAnswer: "c",
      },
      {
        id: "q7",
        text: "If a small farm is not VAT-registered, how does it affect the choice between importing a tractor directly (buy) versus leasing from a VAT-registered lessor?",
        options: {
          a: "Leasing is always cheaper because the lessor recovers the VAT",
          b: "Buying direct may have a lower total cost but requires a large upfront cash outlay. Leasing preserves capital but will include irrecoverable VAT on rental payments. The trade-off must be modelled.",
          c: "VAT is not applicable for agricultural equipment",
          d: "Buying direct is the only option for non-VAT-registered farmers",
        },
        correctAnswer: "b",
      },
      {
        id: "q8",
        text: "What is a critical governance requirement for a successful cooperative group lease?",
        options: {
          a: "A secret rotation schedule known only to the chairperson",
          b: "A published equipment rotation schedule, a clear mechanism for collecting member contributions, and a maintenance log",
          c: "All members must be related by blood",
          d: "The equipment must be stored at the chairperson's home",
        },
        correctAnswer: "b",
      },
      {
        id: "q9",
        text: "For a farmer who will return a tractor after a 48-month operating lease, which brand is likely to result in a lower monthly rental?",
        options: {
          a: "A lower-priced Chinese brand",
          b: "A well-maintained John Deere, as its higher residual value lowers the lessor's risk",
          c: "Both will have the same rental",
          d: "Neither; operating leases are not available for tractors",
        },
        correctAnswer: "b",
      },
      {
        id: "q10",
        text: "A farmer wants to structure a lease with lower payments from January-July and higher payments from August-December. What is this called, and how should they approach a lessor?",
        options: {
          a: "A standard flat lease; all lessors offer this",
          b: "A seasonal rental structure; they should explicitly request it, as many lessors will accommodate this for agricultural clients",
          c: "A step-down lease; it is the only option",
          d: "This structure is illegal in Kenya",
        },
        correctAnswer: "b",
      },
    ],
  },
];
