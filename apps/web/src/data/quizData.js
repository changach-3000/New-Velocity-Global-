// Comprehensive Quiz Data for Velocity Global Leasing Courses

export const quizData = [
  {
    id: "c1",
    title: "Understanding Equipment Leasing Basics",
    description: "Test your knowledge on the core concepts of equipment leasing.",
    questions: [
      {
        id: "q1",
        text: "What is equipment leasing?",
        options: {
          a: "The outright purchase of equipment with a loan",
          b: "A government grant for acquiring business equipment",
          c: "A contractual arrangement where a lessor provides use of equipment to a lessee for a specified term in exchange for regular payments",
          d: "A rental arrangement with no formal contract"
        },
        correctAnswer: "c"
      },
      {
        id: "q2",
        text: "Who is the 'lessor' in a lease agreement?",
        options: {
          a: "The party that owns the equipment and provides it for use in exchange for lease payments",
          b: "The business using the equipment",
          c: "The equipment manufacturer",
          d: "The bank financing the transaction"
        },
        correctAnswer: "a"
      },
      {
        id: "q3",
        text: "What is the difference between an operating lease and a finance lease?",
        options: {
          a: "An operating lease always leads to ownership; a finance lease does not",
          b: "Finance leases are only used for vehicles",
          c: "There is no practical difference between the two",
          d: "An operating lease is shorter-term and does not transfer ownership risks; a finance lease transfers substantially all risks and rewards of ownership to the lessee"
        },
        correctAnswer: "d"
      },
      {
        id: "q4",
        text: "What is a 'residual value' in an equipment lease?",
        options: {
          a: "The monthly lease payment amount",
          b: "The estimated value of the equipment at the end of the lease term",
          c: "The deposit paid at the start of the lease",
          d: "The amount still owed after the first payment"
        },
        correctAnswer: "b"
      },
      {
        id: "q5",
        text: "What does 'lessee' mean?",
        options: {
          a: "The bank providing the lease funding",
          b: "The company that manufactures the equipment",
          c: "The insurance company covering the equipment",
          d: "The party that receives the right to use the equipment under the lease agreement"
        },
        correctAnswer: "d"
      },
      {
        id: "q6",
        text: "What is the main advantage of equipment leasing for a small business?",
        options: {
          a: "The business immediately owns the equipment",
          b: "Leasing is always cheaper than buying",
          c: "Access to equipment without a large upfront capital outlay, preserving cashflow for operations",
          d: "The business has no obligations at end of lease"
        },
        correctAnswer: "c"
      },
      {
        id: "q7",
        text: "What does 'end-of-term options' typically refer to in a lease agreement?",
        options: {
          a: "The date the final payment is due",
          b: "The choices available to the lessee at the conclusion of the lease, such as returning the equipment, renewing the lease, or purchasing the asset",
          c: "The option to add more equipment mid-lease",
          d: "The interest rate adjustment at end of term"
        },
        correctAnswer: "b"
      },
      {
        id: "q8",
        text: "What is a 'lease term'?",
        options: {
          a: "The agreed duration of the lease during which the lessee makes regular payments",
          b: "The interest rate applied to the lease",
          c: "A legal clause in the lease agreement",
          d: "The type of equipment being leased"
        },
        correctAnswer: "a"
      },
      {
        id: "q9",
        text: "Why might a business choose leasing over a traditional bank loan to acquire equipment?",
        options: {
          a: "Leases always have lower interest rates than bank loans",
          b: "Banks do not finance equipment purchases",
          c: "Leases are not subject to credit approval",
          d: "Leases often require less security, are faster to arrange, and can be structured to match cashflow more flexibly than traditional loans"
        },
        correctAnswer: "d"
      },
      {
        id: "q10",
        text: "What is 'equipment finance' as a broader category that includes leasing?",
        options: {
          a: "Any form of government funding for equipment",
          b: "Insurance products covering equipment breakdown",
          c: "Financial products that enable businesses to acquire and use equipment, including leasing, hire purchase, chattel mortgage, and equipment loans",
          d: "Tax deductions available for equipment purchases"
        },
        correctAnswer: "c"
      }
    ]
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
          d: "As finance leases only if the asset is owned at end of term"
        },
        correctAnswer: "c"
      },
      {
        id: "q2",
        text: "What is the key difference between IFRS 16 and ASC 842 lessee accounting?",
        options: {
          a: "ASC 842 maintains a dual model (operating and finance leases); IFRS 16 uses a single lessee model",
          b: "IFRS 16 allows all leases off-balance-sheet; ASC 842 does not",
          c: "ASC 842 applies globally; IFRS 16 only applies in Europe",
          d: "There is no difference between the two standards"
        },
        correctAnswer: "a"
      },
      {
        id: "q3",
        text: "What does the 'right-of-use asset' represent under IFRS 16?",
        options: {
          a: "The fair value of the leased equipment",
          b: "The lessor's ownership interest in the asset",
          c: "The residual value of the equipment",
          d: "The lessee's right to use the underlying asset for the lease term"
        },
        correctAnswer: "d"
      },
      {
        id: "q4",
        text: "Which of the following is a practical expedient available under both IFRS 16 and ASC 842?",
        options: {
          a: "Exemption for leases with terms of 12 months or less",
          b: "Exemption for all equipment leases",
          c: "Exemption for leases with variable payments only",
          d: "Exemption for international leases"
        },
        correctAnswer: "a"
      },
      {
        id: "q5",
        text: "How is the lease liability initially measured under IFRS 16?",
        options: {
          a: "At the fair value of the underlying asset",
          b: "At the total undiscounted lease payments",
          c: "At the present value of future lease payments discounted at the incremental borrowing rate",
          d: "At the equipment's purchase price"
        },
        correctAnswer: "c"
      },
      {
        id: "q6",
        text: "Under ASC 842, how is an operating lease reported on the income statement?",
        options: {
          a: "As a single straight-line lease expense",
          b: "As depreciation and interest expense separately",
          c: "As a capital expenditure",
          d: "As a financing activity only"
        },
        correctAnswer: "a"
      },
      {
        id: "q7",
        text: "What discount rate is used when the rate implicit in the lease is not readily determinable?",
        options: {
          a: "The prime lending rate",
          b: "The central bank base rate",
          c: "Zero percent",
          d: "The lessee's incremental borrowing rate"
        },
        correctAnswer: "d"
      },
      {
        id: "q8",
        text: "Which of the following would NOT be included in lease payments under IFRS 16?",
        options: {
          a: "Fixed payments less lease incentives",
          b: "Variable payments based on an index",
          c: "Variable payments based on actual usage (e.g., per kilometre)",
          d: "Residual value guarantees by the lessee"
        },
        correctAnswer: "c"
      },
      {
        id: "q9",
        text: "What is the primary impact of IFRS 16 adoption on a lessee's financial ratios?",
        options: {
          a: "Improved current ratio and reduced debt",
          b: "No impact on financial ratios",
          c: "Reduced revenue recognition",
          d: "Increased assets and liabilities, higher EBITDA, and increased leverage ratios"
        },
        correctAnswer: "d"
      },
      {
        id: "q10",
        text: "Under ASC 842, are variable lease payments based on an index or rate included in the initial measurement of the lease liability?",
        options: {
          a: "Yes, measured using the index or rate at the commencement date",
          b: "No, they are never included",
          c: "Yes, but estimated for future changes",
          d: "Only if they decrease the liability"
        },
        correctAnswer: "a"
      }
    ]
  },

  {
    id: "c3",
    title: "Equipment Leasing Sales Fundamentals",
    description: "Test your knowledge of essential sales techniques for equipment leasing professionals.",
    questions: [
      {
        id: "q1",
        text: "What is the first step in an effective equipment leasing sales process?",
        options: {
          a: "Presenting lease rate factors",
          b: "Sending a proposal immediately",
          c: "Conducting a thorough needs discovery with the prospect",
          d: "Discussing residual values"
        },
        correctAnswer: "c"
      },
      {
        id: "q2",
        text: "Which of the following best describes a 'lease rate factor'?",
        options: {
          a: "A multiplier applied to equipment cost to determine the monthly lease payment",
          b: "The percentage of equipment value paid as a deposit",
          c: "The interest rate charged on a finance lease",
          d: "The fee for early termination of a lease"
        },
        correctAnswer: "a"
      },
      {
        id: "q3",
        text: "When prospecting for equipment leasing clients, which approach is most effective?",
        options: {
          a: "Cold calling every business in a directory",
          b: "Only pursuing referrals from existing clients",
          c: "Waiting for inbound enquiries",
          d: "Targeting businesses in growth phases that are likely acquiring new equipment"
        },
        correctAnswer: "d"
      },
      {
        id: "q4",
        text: "What does 'pipeline management' mean in a leasing sales context?",
        options: {
          a: "Managing equipment maintenance schedules",
          b: "Tracking and nurturing all active opportunities through each stage of the sales process",
          c: "Managing the legal pipeline of lease agreements",
          d: "Scheduling equipment delivery timelines"
        },
        correctAnswer: "b"
      },
      {
        id: "q5",
        text: "What is a 'vendor leasing program' and why is it valuable to a sales professional?",
        options: {
          a: "A program where vendors buy back leased equipment",
          b: "A leasing arrangement exclusively for government vendors",
          c: "A discount program offered to long-term clients",
          d: "A partnership where the leasing company finances equipment sold by a specific vendor, creating a recurring deal flow"
        },
        correctAnswer: "d"
      },
      {
        id: "q6",
        text: "Which financial statement is most relevant when assessing a prospect's ability to support a lease?",
        options: {
          a: "The vendor invoice only",
          b: "The equipment appraisal report",
          c: "The income statement and balance sheet to assess cashflow and creditworthiness",
          d: "The prospect's marketing budget"
        },
        correctAnswer: "c"
      },
      {
        id: "q7",
        text: "What is the purpose of a 'lease vs. buy' analysis in a sales conversation?",
        options: {
          a: "To convince every client that leasing is always better",
          b: "To help the client make an informed decision by comparing total costs and financial impacts",
          c: "To delay the sales process",
          d: "To demonstrate the leasing company's credit requirements"
        },
        correctAnswer: "b"
      },
      {
        id: "q8",
        text: "In equipment leasing sales, what does 'closing' refer to?",
        options: {
          a: "Securing the client's commitment to proceed with the lease transaction",
          b: "Terminating a lease agreement",
          c: "Closing the client's account at end of lease",
          d: "Finalising equipment delivery"
        },
        correctAnswer: "a"
      },
      {
        id: "q9",
        text: "Which objection is most common in equipment leasing sales?",
        options: {
          a: "The equipment is too large",
          b: "We already have too many vendors",
          c: "We don't need equipment",
          d: "We prefer to buy rather than lease"
        },
        correctAnswer: "d"
      },
      {
        id: "q10",
        text: "What is the most important factor in building long-term client relationships in leasing sales?",
        options: {
          a: "Always offering the lowest rate",
          b: "Sending regular product brochures",
          c: "Consistent follow-up, delivering on promises, and proactively managing renewals",
          d: "Only contacting clients when a new deal is available"
        },
        correctAnswer: "c"
      }
    ]
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
          d: "A method of securing physical equipment against theft"
        },
        correctAnswer: "c"
      },
      {
        id: "q2",
        text: "What is a Special Purpose Vehicle (SPV) in the context of lease securitization?",
        options: {
          a: "A bankruptcy-remote legal entity created to hold lease assets and issue securities",
          b: "A vehicle used to transport leased equipment",
          c: "A government body that regulates lease securitization",
          d: "A type of insurance policy for lease portfolios"
        },
        correctAnswer: "a"
      },
      {
        id: "q3",
        text: "What does 'credit enhancement' mean in a structured finance transaction?",
        options: {
          a: "Improving the credit score of the lessee",
          b: "Reducing the interest rate on a lease",
          c: "Adding more lessees to a portfolio",
          d: "Mechanisms used to improve the credit quality of the securities issued, such as overcollateralisation or reserve funds"
        },
        correctAnswer: "d"
      },
      {
        id: "q4",
        text: "What is 'overcollateralisation' in lease securitization?",
        options: {
          a: "Issuing more securities than there are underlying assets",
          b: "Placing more lease assets in the pool than the value of securities issued, providing a buffer against losses",
          c: "Using more collateral than required by the lender to secure a loan",
          d: "Collateralising equipment twice"
        },
        correctAnswer: "b"
      },
      {
        id: "q5",
        text: "What is a 'waterfall' in a structured finance transaction?",
        options: {
          a: "A risk model for predicting lease defaults",
          b: "A method of depreciating lease assets",
          c: "A due diligence checklist for lease securitizations",
          d: "The priority order in which cash flows are distributed to different tranches of investors"
        },
        correctAnswer: "d"
      },
      {
        id: "q6",
        text: "What are 'tranches' in a securitization structure?",
        options: {
          a: "Individual lease agreements in a portfolio",
          b: "Different classes of securities with varying risk and return profiles issued from the same asset pool",
          c: "The different types of equipment in a lease portfolio",
          d: "Separate legal entities in a securitization structure"
        },
        correctAnswer: "b"
      },
      {
        id: "q7",
        text: "What is 'prepayment risk' in lease securitization?",
        options: {
          a: "The risk that lessees pay off leases early, reducing expected cash flows to investors",
          b: "The risk that lessees will not pay their lease obligations",
          c: "The risk of equipment being damaged before delivery",
          d: "The risk of rising interest rates"
        },
        correctAnswer: "a"
      },
      {
        id: "q8",
        text: "Why do leasing companies use securitization as a funding strategy?",
        options: {
          a: "To avoid regulatory oversight",
          b: "To transfer all credit risk to lessees",
          c: "To eliminate the need for credit underwriting",
          d: "To access lower-cost capital, free up their balance sheet, and fund new originations"
        },
        correctAnswer: "d"
      },
      {
        id: "q9",
        text: "What is the role of a servicer in a lease securitization transaction?",
        options: {
          a: "To provide insurance for the leased assets",
          b: "To collect lease payments from lessees and remit them to the SPV for distribution to investors",
          c: "To originate new leases for the portfolio",
          d: "To rate the securities issued by the SPV"
        },
        correctAnswer: "b"
      },
      {
        id: "q10",
        text: "Which metric is most important when assessing a securitization's senior tranche?",
        options: {
          a: "The equipment depreciation rate",
          b: "The lessor's market share",
          c: "Yield to maturity",
          d: "Credit rating, which reflects the likelihood of timely payment of principal and interest"
        },
        correctAnswer: "d"
      }
    ]
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
          d: "Leasing always provides better tax benefits than buying"
        },
        correctAnswer: "b"
      },
      {
        id: "q2",
        text: "When does buying equipment outright typically make more financial sense than leasing?",
        options: {
          a: "When the asset has a long useful life, retains residual value, and the business has surplus capital",
          b: "When the business has no credit history",
          c: "When the business needs the equipment immediately",
          d: "When interest rates are rising"
        },
        correctAnswer: "a"
      },
      {
        id: "q3",
        text: "What is 'net present value' (NPV) and how is it used in a lease vs. buy decision?",
        options: {
          a: "The total undiscounted cash outflows of an option",
          b: "The remaining balance on a lease liability",
          c: "The market value of the equipment today",
          d: "The present value of all future cash flows discounted at an appropriate rate, used to compare the true cost of each option"
        },
        correctAnswer: "d"
      },
      {
        id: "q4",
        text: "Which factor most strongly favours leasing for technology equipment specifically?",
        options: {
          a: "Technology equipment has high residual values",
          b: "Technology equipment is ineligible for purchase financing",
          c: "Technology becomes obsolete quickly, making lease flexibility and refresh cycles valuable",
          d: "Technology leases always come with maintenance included"
        },
        correctAnswer: "c"
      },
      {
        id: "q5",
        text: "What is the 'opportunity cost' consideration in a lease vs. buy decision?",
        options: {
          a: "The cost of missing a lease payment",
          b: "The penalty for returning equipment early",
          c: "The cost of equipment downtime",
          d: "The return that could be generated if capital used to buy equipment were deployed elsewhere in the business"
        },
        correctAnswer: "d"
      },
      {
        id: "q6",
        text: "Which type of business would most benefit from leasing rather than buying?",
        options: {
          a: "A business with large cash reserves and stable, long-term equipment needs",
          b: "A fast-growing business that needs to preserve capital and maintain equipment flexibility",
          c: "A business that only needs equipment for a single project",
          d: "A business with no credit history and poor cashflow"
        },
        correctAnswer: "b"
      },
      {
        id: "q7",
        text: "What tax advantage does purchasing equipment often provide that leasing does not?",
        options: {
          a: "Elimination of sales tax on the purchase",
          b: "Reduced corporate tax rate",
          c: "Ability to deduct lease payments as an operating expense",
          d: "Depreciation deductions and potential Section 179 or bonus depreciation claims on the full purchase price"
        },
        correctAnswer: "d"
      },
      {
        id: "q8",
        text: "In a lease vs. buy framework, what does 'residual value risk' refer to?",
        options: {
          a: "The risk that lease payments increase over time",
          b: "The uncertainty about what the equipment will be worth at the end of its useful life",
          c: "The risk that the lessee defaults on payments",
          d: "The risk of equipment being stolen"
        },
        correctAnswer: "b"
      },
      {
        id: "q9",
        text: "How does an operating lease affect a company's balance sheet compared to an outright purchase?",
        options: {
          a: "Under older standards, an operating lease kept debt off the balance sheet; under IFRS 16/ASC 842 both create assets and liabilities",
          b: "Both have identical balance sheet impacts",
          c: "An operating lease always improves debt ratios",
          d: "A purchase never appears on the balance sheet"
        },
        correctAnswer: "a"
      },
      {
        id: "q10",
        text: "What is the most important qualitative factor in a lease vs. buy decision beyond the numbers?",
        options: {
          a: "The colour and brand of the equipment",
          b: "The vendor's reputation",
          c: "Strategic flexibility — whether the business needs the ability to upgrade, return, or scale equipment without long-term commitment",
          d: "The length of the sales cycle"
        },
        correctAnswer: "c"
      }
    ]
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
          d: "To set the interest rate for all lease transactions"
        },
        correctAnswer: "c"
      },
      {
        id: "q2",
        text: "What does 'hell or high water' mean in a lease agreement?",
        options: {
          a: "The lessee's obligation to make payments is absolute and unconditional regardless of equipment issues",
          b: "The lessor can terminate the lease in any circumstance",
          c: "The lease can be cancelled during extreme weather events",
          d: "The lessee must insure the equipment against natural disasters"
        },
        correctAnswer: "a"
      },
      {
        id: "q3",
        text: "What is a UCC filing (Article 9) and why is it important in equipment leasing?",
        options: {
          a: "A tax filing required for all lease transactions",
          b: "A credit check required before approving a lease",
          c: "A government certificate confirming the lease is legally valid",
          d: "A public notice that perfects the lessor's security interest in the leased equipment"
        },
        correctAnswer: "d"
      },
      {
        id: "q4",
        text: "What is the difference between a 'true lease' and a 'finance lease' from a legal perspective?",
        options: {
          a: "There is no legal difference",
          b: "A true lease transfers ownership at end of term; a finance lease does not",
          c: "A true lease is structured so the lessor retains ownership and the lessee has no equity buildup; a finance lease is essentially a loan disguised as a lease",
          d: "A finance lease is always shorter in term than a true lease"
        },
        correctAnswer: "c"
      },
      {
        id: "q5",
        text: "What does 'indemnification' mean in a lease agreement?",
        options: {
          a: "The lessee's right to terminate the lease early",
          b: "The process of returning equipment at end of lease",
          c: "The lessor's obligation to maintain the equipment",
          d: "A clause where one party agrees to compensate the other for losses, damages, or legal costs arising from specified events"
        },
        correctAnswer: "d"
      },
      {
        id: "q6",
        text: "What is an 'event of default' in a lease agreement?",
        options: {
          a: "A scheduled lease payment date",
          b: "A specific condition, such as missed payment or insolvency, that allows the lessor to accelerate obligations or repossess equipment",
          c: "The end of the lease term",
          d: "A change in equipment ownership"
        },
        correctAnswer: "b"
      },
      {
        id: "q7",
        text: "Why is it important to include a 'quiet enjoyment' clause in a lease agreement?",
        options: {
          a: "To guarantee the lessee's right to use the equipment without interference from the lessor as long as obligations are met",
          b: "To ensure the leased equipment operates quietly",
          c: "To prevent the lessee from subleasing the equipment",
          d: "To limit the lessee's liability for equipment damage"
        },
        correctAnswer: "a"
      },
      {
        id: "q8",
        text: "What does 'lessee's end-of-term options' typically include in a well-drafted lease?",
        options: {
          a: "Only the option to return the equipment",
          b: "Automatic rollover into a new lease",
          c: "Only the option to purchase the equipment",
          d: "Return the equipment, renew the lease, or purchase the equipment at fair market value or a fixed price"
        },
        correctAnswer: "d"
      },
      {
        id: "q9",
        text: "What is the purpose of a 'representations and warranties' section in a lease agreement?",
        options: {
          a: "To describe the equipment being leased",
          b: "To document factual statements each party makes about itself and the transaction that the other party relies upon",
          c: "To set out the payment schedule",
          d: "To define the governing law of the agreement"
        },
        correctAnswer: "b"
      },
      {
        id: "q10",
        text: "Which regulatory requirement must leasing companies comply with when dealing with individual consumers?",
        options: {
          a: "Consumer protection laws including truth-in-lending and disclosure requirements on total cost, fees, and terms",
          b: "UCC Article 9 only",
          c: "Only corporate tax regulations",
          d: "International trade regulations"
        },
        correctAnswer: "a"
      }
    ]
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
          d: "A centralised record tracking all leased assets, their location, condition, lease terms, and renewal dates"
        },
        correctAnswer: "d"
      },
      {
        id: "q2",
        text: "What does 'fair wear and tear' mean in the context of returning leased equipment?",
        options: {
          a: "Normal deterioration from ordinary use that the lessee is not liable for, as opposed to damage from misuse or neglect",
          b: "Any damage to the equipment is the lessor's responsibility",
          c: "The cost of replacing worn parts during the lease",
          d: "The depreciation schedule applied to the equipment"
        },
        correctAnswer: "a"
      },
      {
        id: "q3",
        text: "Why is it important to track lease renewal and end-of-term dates proactively?",
        options: {
          a: "To ensure the lessor receives payment on time",
          b: "Because the law requires notification 30 days before end of term",
          c: "To avoid auto-renewal into unfavourable terms and to allow time to negotiate, return, or upgrade equipment",
          d: "To qualify for early termination discounts"
        },
        correctAnswer: "c"
      },
      {
        id: "q4",
        text: "What should a lessee do before returning equipment at end of lease?",
        options: {
          a: "Nothing — simply return the equipment",
          b: "Review the return conditions in the lease, document the equipment's condition with photos, and arrange compliant packaging and transport",
          c: "Have the equipment appraised for purchase",
          d: "Notify the manufacturer"
        },
        correctAnswer: "b"
      },
      {
        id: "q5",
        text: "What is 'equipment refresh' in a leasing context?",
        options: {
          a: "Cleaning and servicing equipment mid-lease",
          b: "The process of transferring a lease to a new lessee",
          c: "Repainting or rebranding leased equipment",
          d: "Replacing aging leased equipment with newer models at end of term or through a mid-term upgrade, often built into the lease structure"
        },
        correctAnswer: "d"
      },
      {
        id: "q6",
        text: "How should a business manage multiple leases with different end dates?",
        options: {
          a: "Wait until each lease expires naturally",
          b: "Use a lease management system or calendar to track all obligations, renewal windows, and end dates centrally",
          c: "Consolidate all leases into one agreement immediately",
          d: "Assign one employee to memorise all lease terms"
        },
        correctAnswer: "b"
      },
      {
        id: "q7",
        text: "What is 'data sanitisation' and why is it critical when returning leased IT equipment?",
        options: {
          a: "Securely wiping all company data from devices before return to prevent data breaches",
          b: "Cleaning the physical surface of the equipment",
          c: "Updating the equipment's software before return",
          d: "Checking the equipment for viruses"
        },
        correctAnswer: "a"
      },
      {
        id: "q8",
        text: "When should a business consider exercising a purchase option on leased equipment?",
        options: {
          a: "Always, at the end of every lease",
          b: "Only when the lessor offers a discount",
          c: "Never — leasing is always better than owning",
          d: "When the equipment's market value exceeds the purchase option price and the asset remains strategically useful"
        },
        correctAnswer: "d"
      },
      {
        id: "q9",
        text: "What is the risk of not maintaining leased equipment to the lessor's standards?",
        options: {
          a: "The lease automatically terminates",
          b: "The lessor can increase the monthly payment",
          c: "The lessee may face end-of-term charges for damage beyond fair wear and tear",
          d: "The lessee loses tax deductions on lease payments"
        },
        correctAnswer: "c"
      },
      {
        id: "q10",
        text: "What is the best practice for managing maintenance responsibilities on an operating lease?",
        options: {
          a: "Ignore maintenance as it is always the lessor's responsibility",
          b: "Always hire a third-party maintenance company",
          c: "Only maintain equipment in the final month of the lease",
          d: "Clarify in the lease agreement which party is responsible for maintenance and adhere strictly to those obligations to avoid end-of-term charges"
        },
        correctAnswer: "d"
      }
    ]
  },

  {
    id: "c8",
    title: "Mastering Creative Financing to Close Bigger Deals",
    description: "Learn creative financing techniques to close larger deals and expand your business.",
    questions: [
      {
        id: "q1",
        text: "What is a 'sale-leaseback' transaction?",
        options: {
          a: "Buying equipment and leasing it to a competitor",
          b: "Leasing equipment with an option to buy it back at end of term",
          c: "A business sells equipment it owns to a lessor and simultaneously leases it back, freeing up capital while retaining use",
          d: "Selling a lease portfolio to another lender"
        },
        correctAnswer: "c"
      },
      {
        id: "q2",
        text: "What is a 'step-up' payment structure in a lease?",
        options: {
          a: "Payments that start lower and increase over the lease term, aligned to anticipated revenue growth",
          b: "Payments that decrease over time as the asset depreciates",
          c: "A one-time step payment made at signing",
          d: "Payments that change based on equipment usage"
        },
        correctAnswer: "a"
      },
      {
        id: "q3",
        text: "How can 'bundling' services into a lease help close a larger deal?",
        options: {
          a: "It confuses the client about the true cost",
          b: "It reduces the lessor's profit margin",
          c: "It wraps maintenance, software, insurance, and support into one payment, simplifying the decision and increasing deal size",
          d: "It is only available for real estate leases"
        },
        correctAnswer: "c"
      },
      {
        id: "q4",
        text: "What is a 'deferred payment' structure and when is it most useful?",
        options: {
          a: "A structure where payments are delayed for 60-90 days to help a client acquire equipment before cash is available, useful for seasonal businesses",
          b: "A structure where all payments are made at the end of the lease",
          c: "A structure where payments are reduced in the first year",
          d: "A penalty structure for late payments"
        },
        correctAnswer: "a"
      },
      {
        id: "q5",
        text: "What does '100% financing' mean in equipment leasing?",
        options: {
          a: "The lessee pays no interest",
          b: "The lessor finances 100 different lessees",
          c: "The equipment is 100% owned by the lessor",
          d: "The full cost of the equipment including soft costs like installation and training is financed with no down payment required"
        },
        correctAnswer: "d"
      },
      {
        id: "q6",
        text: "What is a 'master lease' structure and how does it help close bigger deals?",
        options: {
          a: "A lease that covers only the most expensive equipment",
          b: "A single agreement that governs multiple equipment schedules, allowing clients to add assets quickly without renegotiating terms each time",
          c: "A lease that requires no credit approval",
          d: "A lease exclusively for large enterprises"
        },
        correctAnswer: "b"
      },
      {
        id: "q7",
        text: "How can a lease professional use a 'seasonal payment' structure to close a deal with a retail client?",
        options: {
          a: "By charging higher payments during busy months",
          b: "By offering a discount in December",
          c: "By structuring payments to be higher during the client's peak revenue months and lower during off-peak periods, matching cashflow",
          d: "By deferring all payments to after the holiday season"
        },
        correctAnswer: "c"
      },
      {
        id: "q8",
        text: "What is a 'progress payment' structure and when is it appropriate?",
        options: {
          a: "Payments made when the lessee meets performance targets",
          b: "Graduated payments that increase with inflation",
          c: "Payments made to the manufacturer during equipment construction or delivery, used for long lead-time assets like aircraft or custom machinery",
          d: "Payments tied to the lessee's revenue growth"
        },
        correctAnswer: "c"
      },
      {
        id: "q9",
        text: "What is a 'synthetic lease' and what is its primary purpose?",
        options: {
          a: "A lease of synthetic or artificial equipment",
          b: "A lease structure used exclusively in the technology sector",
          c: "A lease with variable rate payments",
          d: "A structure that allows a company to control an asset and receive ownership tax benefits while keeping the asset off the balance sheet for accounting purposes"
        },
        correctAnswer: "d"
      },
      {
        id: "q10",
        text: "How does offering a '$1 buyout' lease differ from a fair market value lease?",
        options: {
          a: "A $1 buyout lease has no residual value and functions like a loan, giving the lessee full ownership for $1 at end of term; an FMV lease has a residual and the lessee decides at end of term",
          b: "A $1 buyout is only available for equipment under $10,000",
          c: "An FMV lease always results in lower monthly payments than a $1 buyout",
          d: "There is no practical difference between the two structures"
        },
        correctAnswer: "a"
      }
    ]
  },

  {
    id: "c9",
    title: "Maximizing Value from Equipment Leasing",
    description: "Strategies for optimizing lease benefits, managing costs, and leveraging leasing for business growth.",
    questions: [
      {
        id: "q1",
        text: "What does 'total cost of leasing' include beyond the monthly payment?",
        options: {
          a: "Only the monthly lease payment",
          b: "Only the interest component of the lease",
          c: "Monthly payments, documentation fees, insurance, maintenance obligations, and end-of-term costs",
          d: "Only the equipment purchase price"
        },
        correctAnswer: "c"
      },
      {
        id: "q2",
        text: "How can a business maximise the tax benefits of an operating lease?",
        options: {
          a: "By structuring leases so payments are fully deductible as operating expenses, reducing taxable income",
          b: "By capitalising lease payments as an asset",
          c: "By converting the lease to a finance lease",
          d: "By paying all lease costs upfront"
        },
        correctAnswer: "a"
      },
      {
        id: "q3",
        text: "What is 'technology refresh risk' and how does leasing mitigate it?",
        options: {
          a: "The risk of equipment being stolen; leasing provides insurance",
          b: "The risk of interest rate increases; leasing fixes the rate",
          c: "The risk of vendor insolvency; leasing transfers this risk",
          d: "The risk that equipment becomes obsolete; leasing allows regular upgrades at end of term without owning depreciating assets"
        },
        correctAnswer: "d"
      },
      {
        id: "q4",
        text: "How does leasing help a business manage its working capital more effectively?",
        options: {
          a: "Leasing provides access to cash grants",
          b: "By replacing large capital expenditures with predictable monthly payments, freeing working capital for operations and growth",
          c: "Leasing eliminates all financial risk",
          d: "Leasing reduces the need for financial planning"
        },
        correctAnswer: "b"
      },
      {
        id: "q5",
        text: "What strategy can a business use to reduce lease costs on equipment renewals?",
        options: {
          a: "Always accept the auto-renewal rate",
          b: "Always return equipment and sign a new lease elsewhere",
          c: "Start renewal negotiations 6-12 months before end of term, benchmark rates, and use competitive bids to negotiate better terms",
          d: "Delay renewals to create urgency with the lessor"
        },
        correctAnswer: "c"
      },
      {
        id: "q6",
        text: "What is the benefit of negotiating a 'master lease agreement' with a single lessor?",
        options: {
          a: "It locks in the highest possible interest rate",
          b: "It requires no credit approval for future leases",
          c: "It eliminates the need for end-of-term decisions",
          d: "It establishes pre-agreed terms allowing faster, cheaper addition of new equipment schedules without renegotiating each time"
        },
        correctAnswer: "d"
      },
      {
        id: "q7",
        text: "What is 'off-balance-sheet financing' and why has its appeal changed under IFRS 16?",
        options: {
          a: "It has no relevance to equipment leasing",
          b: "Previously, operating leases kept debt off the balance sheet; IFRS 16 now requires most leases to be recognised on-balance-sheet, reducing this advantage",
          c: "IFRS 16 increased off-balance-sheet opportunities",
          d: "Off-balance-sheet financing was always required to be disclosed"
        },
        correctAnswer: "b"
      },
      {
        id: "q8",
        text: "What does 'fleet management' mean in the context of equipment leasing?",
        options: {
          a: "Strategically managing a portfolio of leased assets across their lifecycle — acquisition, utilisation, maintenance, and disposal",
          b: "Managing a fleet of delivery trucks only",
          c: "Managing the lessor's portfolio of clients",
          d: "Scheduling equipment delivery dates"
        },
        correctAnswer: "a"
      },
      {
        id: "q9",
        text: "What is the most effective way to maximise residual value at end of lease?",
        options: {
          a: "Use the equipment as heavily as possible",
          b: "Return the equipment without inspection",
          c: "Exercise the purchase option on all leased assets",
          d: "Maintain equipment to the lessor's standards, keep accurate service records, and negotiate favourable return conditions upfront"
        },
        correctAnswer: "d"
      },
      {
        id: "q10",
        text: "Which approach best maximises long-term value from a leasing programme?",
        options: {
          a: "Using a different lessor for every transaction to get the lowest rate",
          b: "Always choosing the shortest possible lease term",
          c: "Building a strategic relationship with preferred lessors who understand the business, enabling better terms, faster approvals, and tailored solutions over time",
          d: "Avoiding leasing for high-value assets"
        },
        correctAnswer: "c"
      }
    ]
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
          d: "Best Alternative To a Negotiated Agreement — knowing your walkaway point gives leverage and prevents accepting a bad deal"
        },
        correctAnswer: "d"
      },
      {
        id: "q2",
        text: "What does 'anchoring' mean in a negotiation context?",
        options: {
          a: "Setting the first number or offer, which influences the range of the subsequent discussion",
          b: "Refusing to change your position throughout the negotiation",
          c: "Tying the negotiation outcome to an external benchmark",
          d: "Using a fixed rate as the basis for all lease calculations"
        },
        correctAnswer: "a"
      },
      {
        id: "q3",
        text: "How should a lease professional respond when a client says 'your competitor offers a lower rate'?",
        options: {
          a: "Immediately match the competitor's rate",
          b: "Dismiss the competitor's offer as unreliable",
          c: "Acknowledge the information, ask for specifics, and reframe the conversation around total value rather than rate alone",
          d: "End the negotiation"
        },
        correctAnswer: "c"
      },
      {
        id: "q4",
        text: "What is 'interest-based negotiation' as opposed to 'position-based negotiation'?",
        options: {
          a: "Negotiating only the interest rate component of a lease",
          b: "Focusing on the underlying needs and motivations of both parties rather than fixed positions, enabling creative solutions",
          c: "A negotiation approach used only in financial services",
          d: "A strategy where both parties refuse to move from their opening positions"
        },
        correctAnswer: "b"
      },
      {
        id: "q5",
        text: "What non-price terms can a lease professional negotiate to add value without reducing margin?",
        options: {
          a: "Only the lease term length",
          b: "Only the deposit amount",
          c: "Payment timing, end-of-term options, upgrade rights, bundled services, and maintenance terms",
          d: "The colour and specification of the equipment"
        },
        correctAnswer: "c"
      },
      {
        id: "q6",
        text: "What is the role of silence in a negotiation?",
        options: {
          a: "Silence signals agreement and should be avoided",
          b: "Strategic silence after making an offer creates pressure on the other party to respond, often resulting in concessions",
          c: "Silence is unprofessional in lease negotiations",
          d: "Silence should only be used when you have nothing to say"
        },
        correctAnswer: "b"
      },
      {
        id: "q7",
        text: "What is a 'concession strategy' in lease deal negotiation?",
        options: {
          a: "Giving the client everything they ask for to close quickly",
          b: "A list of discounts available at each deal size",
          c: "A strategy to delay the deal until the client concedes",
          d: "Planned giving and taking of concessions in a deliberate sequence to move towards a mutually acceptable outcome while protecting key terms"
        },
        correctAnswer: "d"
      },
      {
        id: "q8",
        text: "How does understanding the client's budget cycle improve lease negotiation outcomes?",
        options: {
          a: "It helps time proposals when client budgets are approved and creates urgency aligned with the client's fiscal calendar",
          b: "It allows the lessor to increase rates at year-end",
          c: "Budget cycles are irrelevant to lease negotiations",
          d: "It allows the client to delay payment indefinitely"
        },
        correctAnswer: "a"
      },
      {
        id: "q9",
        text: "What is the most effective opening strategy in a lease negotiation?",
        options: {
          a: "Open with your final offer to show strength",
          b: "Open by agreeing to the other party's terms to build trust",
          c: "Open by presenting your BATNA immediately",
          d: "Open with a position that leaves room to make concessions while still achieving your target outcome"
        },
        correctAnswer: "d"
      },
      {
        id: "q10",
        text: "When should a lease professional walk away from a deal?",
        options: {
          a: "As soon as any objection is raised",
          b: "When the client asks for a lower rate",
          c: "When the deal falls below the BATNA — when accepting would be worse than the best available alternative",
          d: "When the negotiation takes longer than one meeting"
        },
        correctAnswer: "c"
      }
    ]
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
          d: "The lease term must equal the useful life of the asset"
        },
        correctAnswer: "c"
      },
      {
        id: "q2",
        text: "How does operational leasing support business scalability?",
        options: {
          a: "It allows businesses to acquire more equipment without large capital outlays, preserving cash for growth initiatives",
          b: "It locks businesses into fixed equipment for long periods",
          c: "It requires businesses to maintain a minimum fleet size",
          d: "It eliminates the need for equipment planning"
        },
        correctAnswer: "a"
      },
      {
        id: "q3",
        text: "How does an operational lease handle residual value risk compared to a finance lease?",
        options: {
          a: "The lessee bears all residual value risk in both types",
          b: "Both lease types transfer residual value risk to the lessee equally",
          c: "Residual value is irrelevant in operational leasing",
          d: "In an operational lease, the lessor retains residual value risk; in a finance lease, the risk transfers to the lessee"
        },
        correctAnswer: "d"
      },
      {
        id: "q4",
        text: "What is a 'full-service' or 'all-inclusive' operational lease?",
        options: {
          a: "A lease with no end-of-term conditions",
          b: "A lease that bundles maintenance, insurance, tyres, and other services into the monthly payment alongside the financing cost",
          c: "A lease that covers all types of equipment",
          d: "A lease available to all business sizes"
        },
        correctAnswer: "b"
      },
      {
        id: "q5",
        text: "What is 'fleet optimisation' in an operational leasing context?",
        options: {
          a: "Maximising the number of vehicles in a fleet",
          b: "Buying out the entire fleet at end of lease",
          c: "Regularly reviewing fleet size, utilisation, and lease terms to ensure the right assets are deployed at the right cost",
          d: "Minimising the number of leases to reduce administration"
        },
        correctAnswer: "c"
      },
      {
        id: "q6",
        text: "What advantage does operational leasing offer for businesses in rapidly growing markets?",
        options: {
          a: "It locks in equipment at current prices permanently",
          b: "Flexible lease terms allow businesses to scale up or change equipment types quickly without being tied to owned assets",
          c: "It provides guaranteed equipment delivery within 24 hours",
          d: "It eliminates regulatory compliance requirements"
        },
        correctAnswer: "b"
      },
      {
        id: "q7",
        text: "How does VAT treatment typically differ between buying and operationally leasing equipment?",
        options: {
          a: "When leasing, VAT is typically spread across lease payments rather than paid in full upfront, improving cashflow",
          b: "There is no tax difference between buying and leasing",
          c: "Operational leases are always tax-exempt",
          d: "Buying always results in lower tax costs than leasing"
        },
        correctAnswer: "a"
      },
      {
        id: "q8",
        text: "How can operational leasing improve a company's return on assets (ROA)?",
        options: {
          a: "By increasing the total asset base",
          b: "By increasing depreciation charges",
          c: "ROA is not affected by leasing decisions",
          d: "By keeping assets off the balance sheet (under older standards) or reducing owned asset values, which can improve ROA when earnings are strong"
        },
        correctAnswer: "d"
      },
      {
        id: "q9",
        text: "What is 'total cost of mobility' in the context of vehicle fleet operational leasing?",
        options: {
          a: "The full cost of running a fleet including lease payments, fuel, insurance, maintenance, tyres, and administration",
          b: "The cost of fuel only",
          c: "The monthly lease payment per vehicle",
          d: "The driver's salary and benefits"
        },
        correctAnswer: "a"
      },
      {
        id: "q10",
        text: "What is the key business case for choosing operational leasing over purchasing for IT infrastructure?",
        options: {
          a: "IT equipment always has high residual values",
          b: "IT equipment is ineligible for purchase financing",
          c: "Operational leasing allows regular technology refresh, eliminates disposal headaches, and converts capital expenditure to predictable operating expenditure",
          d: "Operational leasing provides better warranty coverage than buying"
        },
        correctAnswer: "c"
      }
    ]
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
          d: "The administrative burden of managing a large number of leases"
        },
        correctAnswer: "a"
      },
      {
        id: "q2",
        text: "What is 'yield' in the context of a lease portfolio and how is it measured?",
        options: {
          a: "The total number of leases originated in a year",
          b: "The residual value of assets at end of lease",
          c: "The number of renewals in the portfolio",
          d: "The return generated by the portfolio, measured as the annualised income relative to the outstanding portfolio balance"
        },
        correctAnswer: "d"
      },
      {
        id: "q3",
        text: "What is 'delinquency rate' and why is it a key portfolio health metric?",
        options: {
          a: "The rate at which new leases are originated",
          b: "The percentage of outstanding balance where payments are overdue, indicating credit quality and collection effectiveness",
          c: "The rate of equipment returns before end of term",
          d: "The rate of early lease terminations"
        },
        correctAnswer: "b"
      },
      {
        id: "q4",
        text: "What is 'net charge-off rate' in lease portfolio management?",
        options: {
          a: "The annualised amount of lease receivables written off as uncollectable less any recoveries, expressed as a percentage of average outstanding balance",
          b: "The profit margin on new lease originations",
          c: "The rate at which equipment is depreciated",
          d: "The percentage of leases that are renewed"
        },
        correctAnswer: "a"
      },
      {
        id: "q5",
        text: "How does diversification reduce risk in a lease portfolio?",
        options: {
          a: "By offering leases in only one asset class",
          b: "By reducing the number of active leases",
          c: "By focusing only on investment-grade lessees",
          d: "By spreading exposure across multiple industries, geographies, asset types, and lessee sizes so that losses in one segment are offset by performance in others"
        },
        correctAnswer: "d"
      },
      {
        id: "q6",
        text: "What is 'residual value management' in portfolio optimisation?",
        options: {
          a: "Collecting final lease payments",
          b: "Calculating the remaining lease payments due",
          c: "Monitoring and managing the estimated value of equipment at end of lease term to minimise losses and maximise recovery",
          d: "Managing equipment that has been returned early"
        },
        correctAnswer: "c"
      },
      {
        id: "q7",
        text: "What does 'vintage analysis' reveal about a lease portfolio?",
        options: {
          a: "The age of the equipment in the portfolio",
          b: "The performance of lease cohorts originated in specific time periods, revealing underwriting quality trends over time",
          c: "The dates when leases were signed",
          d: "The historical interest rates applied to leases"
        },
        correctAnswer: "b"
      },
      {
        id: "q8",
        text: "What is the purpose of 'stress testing' a lease portfolio?",
        options: {
          a: "To identify which leases need renegotiation",
          b: "To test the performance of the portfolio management software",
          c: "To audit all leases for compliance",
          d: "To model how the portfolio would perform under adverse economic scenarios, such as a recession or interest rate spike, to assess resilience"
        },
        correctAnswer: "d"
      },
      {
        id: "q9",
        text: "What does 'portfolio seasoning' mean and why does it matter for risk assessment?",
        options: {
          a: "Adding new leases to the portfolio regularly",
          b: "The ageing of a portfolio over time — seasoned portfolios have established payment histories, making risk assessment more reliable than newer portfolios",
          c: "The process of renewing maturing leases",
          d: "Adjusting lease rates based on market conditions"
        },
        correctAnswer: "b"
      },
      {
        id: "q10",
        text: "What is a lease portfolio and what does managing it involve?",
        options: {
          a: "A collection of lease brochures used for marketing",
          b: "A list of available equipment for lease",
          c: "The total book of active lease agreements held by a lessor, managed to optimise risk, return, and capital efficiency",
          d: "The lessor's marketing strategy for acquiring new clients"
        },
        correctAnswer: "c"
      }
    ]
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
          d: "The rate used to calculate late payment penalties"
        },
        correctAnswer: "c"
      },
      {
        id: "q2",
        text: "What is 'lessee incremental borrowing rate' (IBR) and when is it used?",
        options: {
          a: "The rate a lessee would pay to borrow funds to purchase the equivalent asset over a similar term; used when the implicit rate is not readily determinable",
          b: "The rate a lessor charges above prime rate",
          c: "The central bank's base interest rate",
          d: "A penalty rate for defaulting on lease payments"
        },
        correctAnswer: "a"
      },
      {
        id: "q3",
        text: "Under IFRS 16, how does a finance professional determine whether a contract contains a lease?",
        options: {
          a: "By checking if the word 'lease' appears in the contract",
          b: "By checking if the contract is registered with a government body",
          c: "By whether the contract includes a purchase option",
          d: "By assessing whether the contract conveys the right to control the use of an identified asset for a period of time in exchange for consideration"
        },
        correctAnswer: "d"
      },
      {
        id: "q4",
        text: "What is the effective interest method used for in lease accounting?",
        options: {
          a: "To calculate the equipment's depreciation",
          b: "To amortise the lease liability by allocating each payment between interest expense and principal reduction",
          c: "To determine the fair market value of the leased asset",
          d: "To calculate the monthly payment amount"
        },
        correctAnswer: "b"
      },
      {
        id: "q5",
        text: "How should a finance professional account for lease modifications under IFRS 16?",
        options: {
          a: "Ignore modifications and continue with original terms",
          b: "Expense the modification cost immediately",
          c: "Reclassify the lease as an operating lease",
          d: "Assess whether the modification is a separate lease or a modification of the existing lease, and remeasure the ROU asset and liability accordingly"
        },
        correctAnswer: "d"
      },
      {
        id: "q6",
        text: "What is the practical expedient for short-term leases under IFRS 16?",
        options: {
          a: "Leases with a term of 12 months or less at commencement can be treated as off-balance-sheet and expensed on a straight-line basis",
          b: "All leases under 5 years can be expensed",
          c: "Short-term leases must always be capitalised",
          d: "Short-term leases do not require disclosure"
        },
        correctAnswer: "a"
      },
      {
        id: "q7",
        text: "What financial ratio is most negatively impacted by the capitalisation of operating leases under IFRS 16?",
        options: {
          a: "Gross margin",
          b: "Revenue growth rate",
          c: "Debt-to-equity ratio, as previously off-balance-sheet lease liabilities now appear as debt",
          d: "Inventory turnover"
        },
        correctAnswer: "c"
      },
      {
        id: "q8",
        text: "How should variable lease payments based on performance or usage be treated under IFRS 16?",
        options: {
          a: "Included in the lease liability at commencement",
          b: "Capitalised as part of the right-of-use asset",
          c: "Treated as a lease modification",
          d: "Excluded from the lease liability and expensed in the period they are incurred"
        },
        correctAnswer: "d"
      },
      {
        id: "q9",
        text: "What is the significance of the 'commencement date' in lease accounting?",
        options: {
          a: "The date the lease agreement is signed",
          b: "The date on which the lessor makes the underlying asset available to the lessee, which is when initial recognition and measurement occurs",
          c: "The date the first payment is made",
          d: "The date the lease is registered for tax purposes"
        },
        correctAnswer: "b"
      },
      {
        id: "q10",
        text: "How does a finance professional calculate the present value of lease payments?",
        options: {
          a: "By multiplying monthly payments by the number of months",
          b: "By dividing the total payments by the equipment value",
          c: "By using the equipment's depreciation schedule",
          d: "By discounting each future payment at the appropriate discount rate and summing the results"
        },
        correctAnswer: "d"
      }
    ]
  },

  {
    id: "c14",
    title: "Risk Pricing Models for Lease Portfolios",
    description: "Develop sophisticated risk pricing models for lease portfolios.",
    questions: [
      {
        id: "q1",
        text: "What is 'credit risk' in the context of lease portfolio pricing?",
        options: {
          a: "The risk that the leased equipment depreciates faster than expected",
          b: "The risk of rising interest rates",
          c: "The risk that a lessee will fail to meet their payment obligations, resulting in a loss for the lessor",
          d: "The risk of equipment theft or damage"
        },
        correctAnswer: "c"
      },
      {
        id: "q2",
        text: "What is a 'probability of default' (PD) model used for in lease pricing?",
        options: {
          a: "To estimate the resale value of equipment",
          b: "To estimate the likelihood that a lessee will fail to repay their obligations, informing the risk premium in the lease rate",
          c: "To calculate the lease payment amount",
          d: "To assess the quality of collateral"
        },
        correctAnswer: "b"
      },
      {
        id: "q3",
        text: "What is 'loss given default' (LGD) and how does it affect lease pricing?",
        options: {
          a: "The percentage of exposure that is expected to be lost if a lessee defaults, after accounting for collateral recovery; higher LGD means higher pricing",
          b: "The total amount owed at default",
          c: "The probability that a default will occur",
          d: "The legal cost of pursuing a defaulting lessee"
        },
        correctAnswer: "a"
      },
      {
        id: "q4",
        text: "What is 'expected loss' (EL) and how is it calculated?",
        options: {
          a: "The maximum possible loss on a lease portfolio",
          b: "The loss incurred on defaulted leases in the prior year",
          c: "The difference between the lease rate and the cost of funds",
          d: "EL = PD x LGD x EAD — the statistical average loss anticipated from the portfolio, used to set pricing and provisions"
        },
        correctAnswer: "d"
      },
      {
        id: "q5",
        text: "What is 'residual value risk' in lease pricing and how is it modelled?",
        options: {
          a: "The risk of the lessee defaulting on the final payment",
          b: "The risk that equipment's end-of-term market value is lower than the forecast, modelled using historical depreciation data and market trends",
          c: "The risk that equipment is returned in poor condition",
          d: "The risk that maintenance costs exceed estimates"
        },
        correctAnswer: "b"
      },
      {
        id: "q6",
        text: "What is a 'risk-adjusted return on capital' (RAROC) and why is it used in lease pricing?",
        options: {
          a: "A marketing metric for lease products",
          b: "The total return on a lease portfolio before expenses",
          c: "A regulatory capital requirement",
          d: "A measure of profitability that accounts for risk, helping allocate capital to transactions that generate adequate return relative to the risk assumed"
        },
        correctAnswer: "d"
      },
      {
        id: "q7",
        text: "What is 'interest rate risk' in a lease portfolio and how can it be managed?",
        options: {
          a: "The risk that market interest rates move adversely relative to the portfolio's fixed lease rates; managed through hedging instruments like interest rate swaps",
          b: "The risk that lessees complain about interest rates",
          c: "The risk of setting lease rates too high",
          d: "The risk that central banks change monetary policy"
        },
        correctAnswer: "a"
      },
      {
        id: "q8",
        text: "What is a 'scorecard model' in lease credit underwriting?",
        options: {
          a: "A model that tracks lessee satisfaction scores",
          b: "A performance review tool for lease sales professionals",
          c: "A quantitative tool that assigns weighted scores to credit factors (financials, payment history, industry) to produce a composite credit score guiding approval decisions",
          d: "A model for scoring the condition of returned equipment"
        },
        correctAnswer: "c"
      },
      {
        id: "q9",
        text: "What is 'exposure at default' (EAD) in lease portfolio risk management?",
        options: {
          a: "The amount of equipment in the portfolio",
          b: "The total value of all leases originated in a year",
          c: "The credit limit extended to a single lessee",
          d: "The outstanding lease receivable balance expected at the time of default, used to calculate expected loss"
        },
        correctAnswer: "d"
      },
      {
        id: "q10",
        text: "What does 'vintage analysis' reveal in risk pricing models?",
        options: {
          a: "Which equipment types have the highest default rates",
          b: "The age profile of equipment in the portfolio",
          c: "How lease cohorts originated in specific periods perform over time, revealing whether underwriting standards and pricing have been adequate",
          d: "Which lessees have been clients the longest"
        },
        correctAnswer: "c"
      }
    ]
  },

  {
    id: "c15",
    title: "Sales Closing Techniques & Deal Management",
    description: "Proven closing techniques, objection handling, and deal management strategies.",
    questions: [
      {
        id: "q1",
        text: "What is the 'assumptive close' technique in lease sales?",
        options: {
          a: "Proceeding as though the client has already decided to proceed, using language like 'when we set up the lease' rather than 'if you decide to go ahead'",
          b: "Assuming the client will never buy and ending the meeting",
          c: "Assuming the client's budget without asking",
          d: "Closing without discussing terms"
        },
        correctAnswer: "a"
      },
      {
        id: "q2",
        text: "What is the 'summary close' and when is it most effective?",
        options: {
          a: "Summarising competing offers to confuse the client",
          b: "Providing a written summary and asking for a decision in 30 days",
          c: "Summarising only the price and payment terms",
          d: "Recapping all agreed benefits and value points just before asking for commitment, reinforcing why the decision makes sense"
        },
        correctAnswer: "d"
      },
      {
        id: "q3",
        text: "How should a sales professional handle a prospect who says 'I need to think about it'?",
        options: {
          a: "Leave immediately and wait for them to call back",
          b: "Acknowledge the response, ask what specifically they need to consider, and address the underlying concern rather than accepting the delay",
          c: "Reduce the price immediately",
          d: "Send a follow-up email in 30 days"
        },
        correctAnswer: "b"
      },
      {
        id: "q4",
        text: "What is 'pipeline velocity' and why does it matter in deal management?",
        options: {
          a: "The speed at which equipment is delivered",
          b: "The rate at which new prospects enter the pipeline",
          c: "The time taken to process a lease application",
          d: "The speed at which deals move through the sales pipeline; higher velocity means faster revenue recognition and better forecasting"
        },
        correctAnswer: "d"
      },
      {
        id: "q5",
        text: "What is the purpose of a 'follow-up cadence' in deal management?",
        options: {
          a: "To remind clients of overdue payments",
          b: "A schedule for delivering equipment",
          c: "A planned, consistent sequence of touchpoints that keeps the deal moving forward without being perceived as pushy",
          d: "A process for escalating deals to senior management"
        },
        correctAnswer: "c"
      },
      {
        id: "q6",
        text: "What does effective 'objection handling' in lease sales involve?",
        options: {
          a: "Ignoring objections and continuing the pitch",
          b: "Offering a discount every time an objection is raised",
          c: "Redirecting to a different product",
          d: "Listening fully to the objection, acknowledging it, clarifying the underlying concern, and responding with a relevant, value-focused answer"
        },
        correctAnswer: "d"
      },
      {
        id: "q7",
        text: "What is 'deal staging' in CRM-based deal management?",
        options: {
          a: "Setting up the stage for a product demonstration",
          b: "Defining clear stages in the sales process and tracking each deal's position, enabling accurate forecasting and identifying where deals stall",
          c: "Staging a deal for a specific financial quarter only",
          d: "Managing the physical staging of leased equipment"
        },
        correctAnswer: "b"
      },
      {
        id: "q8",
        text: "What is the most common reason lease deals stall after the proposal stage?",
        options: {
          a: "The proposal did not clearly connect the lease solution to the client's specific business needs and decision criteria",
          b: "The client loses their budget unexpectedly",
          c: "The equipment delivery was delayed",
          d: "The sales professional was too aggressive"
        },
        correctAnswer: "a"
      },
      {
        id: "q9",
        text: "What is the 'alternative choice close' and how is it used?",
        options: {
          a: "Offering two completely different products",
          b: "Presenting alternative financing options only",
          c: "Giving the client the choice to end the meeting",
          d: "Offering two versions of moving forward (e.g., '24-month or 36-month term?') rather than asking 'do you want to proceed?', making the decision about how rather than whether"
        },
        correctAnswer: "d"
      },
      {
        id: "q10",
        text: "What is the 'urgency close' and what is the ethical consideration when using it?",
        options: {
          a: "A technique where the salesperson creates false scarcity",
          b: "A technique using genuine time-limited incentives or deadlines to prompt timely decisions; it must be based on real constraints, not manufactured pressure",
          c: "A technique where the salesperson pressures the client to sign immediately",
          d: "A technique used only for large enterprise deals"
        },
        correctAnswer: "b"
      }
    ]
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
          d: "To clearly communicate the specific benefits a client receives from leasing"
        },
        correctAnswer: "d"
      },
      {
        id: "q2",
        text: "When building a value proposition for a CFO, which benefit is most compelling?",
        options: {
          a: "Off-balance-sheet treatment and cashflow preservation",
          b: "Fast delivery of equipment",
          c: "Access to the latest equipment models",
          d: "Simplified maintenance scheduling"
        },
        correctAnswer: "a"
      },
      {
        id: "q3",
        text: "What does 'total cost of ownership' (TCO) analysis help a leasing professional demonstrate?",
        options: {
          a: "The resale value of equipment",
          b: "Why leasing is always cheaper than buying",
          c: "The full financial impact of owning vs leasing over the asset's life",
          d: "The credit risk of the lessee"
        },
        correctAnswer: "c"
      },
      {
        id: "q4",
        text: "Which of the following is a key element of a strong value proposition?",
        options: {
          a: "Technical jargon that demonstrates expertise",
          b: "A specific, measurable outcome relevant to the client",
          c: "A lengthy explanation of all lease structures",
          d: "Generic benefits applicable to all industries"
        },
        correctAnswer: "b"
      },
      {
        id: "q5",
        text: "How should a value proposition differ between a small business owner and a large enterprise?",
        options: {
          a: "It should not differ — one message fits all clients",
          b: "Enterprise clients only care about price",
          c: "Small businesses only care about equipment delivery speed",
          d: "Small business propositions should focus on flexibility and cashflow; enterprise on scale and reporting"
        },
        correctAnswer: "d"
      },
      {
        id: "q6",
        text: "What is the role of storytelling in a leasing value proposition?",
        options: {
          a: "It helps clients emotionally connect with outcomes through relatable examples and case studies",
          b: "It is irrelevant in financial services",
          c: "It replaces the need for financial data",
          d: "It is only useful for marketing materials"
        },
        correctAnswer: "a"
      },
      {
        id: "q7",
        text: "A client objects that leasing is more expensive than buying. The best response is to:",
        options: {
          a: "Agree and offer a discount",
          b: "Redirect to the monthly payment amount only",
          c: "End the conversation and move on",
          d: "Demonstrate TCO showing leasing's cashflow and tax advantages over the full term"
        },
        correctAnswer: "d"
      },
      {
        id: "q8",
        text: "Which metric is most useful when presenting a leasing value proposition to an operations manager?",
        options: {
          a: "EBITDA impact",
          b: "Weighted average cost of capital",
          c: "Uptime, maintenance coverage, and equipment refresh cycles",
          d: "Debt-to-equity ratio"
        },
        correctAnswer: "c"
      },
      {
        id: "q9",
        text: "Which of the following best describes a client-centric value proposition?",
        options: {
          a: "One that focuses on the leasing company's product features",
          b: "One that lists all available lease types",
          c: "One that highlights the leasing company's market share",
          d: "One that emphasises the client's specific pain points and how leasing solves them"
        },
        correctAnswer: "d"
      },
      {
        id: "q10",
        text: "What is the most effective way to validate your value proposition before a client pitch?",
        options: {
          a: "Send it by email without a follow-up",
          b: "Test it with a discovery call to understand the client's actual priorities first",
          c: "Use the same proposition that worked for a previous client",
          d: "Focus only on price competitiveness"
        },
        correctAnswer: "b"
      }
    ]
  }
];