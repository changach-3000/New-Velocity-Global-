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
  },

  // ─── NEW COURSES ────────────────────────────────────────────────────────────

  {
    id: "c17",
    title: "Legal, Operational, and Asset Readiness",
    description: "Understand the legal, operational, and asset readiness requirements for launching and managing a leasing operation.",
    questions: [
      {
        id: "q1",
        text: "What does 'asset readiness' mean before a lease commences?",
        options: {
          a: "Confirming the equipment is manufactured",
          b: "Ensuring the leased asset is fully delivered, installed, tested, and accepted by the lessee as fit for purpose before the lease financial obligations begin",
          c: "Confirming the lessor has title to the equipment",
          d: "Verifying the asset's insurance coverage"
        },
        correctAnswer: "b"
      },
      {
        id: "q2",
        text: "What is a 'certificate of acceptance' in a lease transaction?",
        options: {
          a: "A document signed by the lessee confirming the equipment has been received and is in satisfactory condition, triggering the start of the lease",
          b: "A regulatory licence to operate as a lessor",
          c: "A manufacturer's warranty document",
          d: "A certificate confirming the lease is legally binding"
        },
        correctAnswer: "a"
      },
      {
        id: "q3",
        text: "Which legal entity structure is most commonly used by independent leasing companies and why?",
        options: {
          a: "Sole trader, for simplicity",
          b: "Partnership, to share risk",
          c: "Limited liability company or corporation, to separate personal and business liability and attract institutional funding",
          d: "Trust structure, for tax benefits only"
        },
        correctAnswer: "c"
      },
      {
        id: "q4",
        text: "What is an 'equipment schedule' in a master lease agreement?",
        options: {
          a: "A maintenance timetable for the equipment",
          b: "A separate document that incorporates specific lease terms for each piece of equipment under the master agreement",
          c: "A delivery schedule provided by the manufacturer",
          d: "A list of approved equipment types"
        },
        correctAnswer: "b"
      },
      {
        id: "q5",
        text: "What operational readiness element must a leasing company establish before originating leases?",
        options: {
          a: "A customer loyalty programme",
          b: "Credit underwriting policies, documentation standards, and collections procedures",
          c: "A fleet of replacement equipment",
          d: "A social media presence"
        },
        correctAnswer: "b"
      },
      {
        id: "q6",
        text: "Why is title verification critical for the lessor before funding a lease?",
        options: {
          a: "To determine the monthly lease payment",
          b: "To confirm no third party has a prior security interest in the asset that could undermine the lessor's ownership rights",
          c: "To calculate depreciation",
          d: "To set the residual value"
        },
        correctAnswer: "b"
      },
      {
        id: "q7",
        text: "What is 'know your customer' (KYC) compliance in a leasing context?",
        options: {
          a: "A sales technique for understanding client needs",
          b: "A process of verifying the identity, legal status, and business legitimacy of lessees to comply with anti-money laundering regulations",
          c: "A credit scoring model",
          d: "A customer satisfaction survey process"
        },
        correctAnswer: "b"
      },
      {
        id: "q8",
        text: "What is the purpose of an 'insurance assignment' clause in a lease?",
        options: {
          a: "To require the lessee to obtain life insurance",
          b: "To assign the lessee's equipment insurance proceeds to the lessor in the event of total loss, protecting the lessor's financial interest",
          c: "To transfer the lessor's insurance obligations to the lessee",
          d: "To lower the lessee's insurance premium"
        },
        correctAnswer: "b"
      },
      {
        id: "q9",
        text: "What does 'lien search' mean and why is it performed before a lease is funded?",
        options: {
          a: "A search of the lessee's social media profiles",
          b: "A credit bureau inquiry",
          c: "A search of public registries to identify any existing claims or security interests against the lessee or the asset",
          d: "A search for comparable equipment prices"
        },
        correctAnswer: "c"
      },
      {
        id: "q10",
        text: "What is a 'guaranty' in a lease transaction and when is it typically required?",
        options: {
          a: "A warranty provided by the equipment manufacturer",
          b: "A personal or corporate commitment by a third party to fulfil the lessee's obligations if the lessee defaults; typically required when the lessee's credit is insufficient on its own",
          c: "An insurance policy covering equipment breakdown",
          d: "A government-backed credit facility"
        },
        correctAnswer: "b"
      }
    ]
  },

  {
    id: "c18",
    title: "Advanced Funding Sources and Structures",
    description: "Explore advanced funding sources and capital structures available to leasing companies.",
    questions: [
      {
        id: "q1",
        text: "What is a 'warehouse line of credit' and how do leasing companies use it?",
        options: {
          a: "A credit line for purchasing warehouse storage space",
          b: "A short-term revolving credit facility used to fund lease originations until they are sold or securitised",
          c: "A government credit facility for equipment manufacturers",
          d: "A long-term bond issued by a leasing company"
        },
        correctAnswer: "b"
      },
      {
        id: "q2",
        text: "What is 'asset-backed lending' (ABL) in the context of a leasing company's funding?",
        options: {
          a: "Lending secured by the leasing company's physical office",
          b: "A form of borrowing where the leasing company pledges its lease receivables as collateral to obtain funding",
          c: "Loans made by the leasing company to its clients",
          d: "Equity funding from asset management firms"
        },
        correctAnswer: "b"
      },
      {
        id: "q3",
        text: "What is the difference between 'recourse' and 'non-recourse' funding in leasing?",
        options: {
          a: "Recourse funding allows the funder to claim against the leasing company if the lessee defaults; non-recourse funding limits recovery to the underlying assets only",
          b: "Non-recourse funding is always more expensive than recourse",
          c: "Recourse funding is only available to banks",
          d: "There is no practical difference"
        },
        correctAnswer: "a"
      },
      {
        id: "q4",
        text: "What is a 'co-investment structure' in leasing fund arrangements?",
        options: {
          a: "A structure where two lessees share a single lease",
          b: "A structure where the leasing company retains a portion of each deal alongside an institutional investor, aligning incentives",
          c: "A government grant co-funded by private investors",
          d: "A joint venture between two equipment manufacturers"
        },
        correctAnswer: "b"
      },
      {
        id: "q5",
        text: "What is 'leverage' in the context of a leasing company's capital structure?",
        options: {
          a: "The negotiating power of the leasing company",
          b: "The ratio of debt to equity used to fund the lease portfolio; higher leverage amplifies returns but increases financial risk",
          c: "The interest rate charged to lessees",
          d: "The depreciation applied to leased assets"
        },
        correctAnswer: "b"
      },
      {
        id: "q6",
        text: "What is a 'term loan' and how does it differ from a revolving credit facility for a leasing company?",
        options: {
          a: "A term loan is disbursed once and repaid over a fixed schedule; a revolving facility can be drawn, repaid, and redrawn repeatedly",
          b: "A revolving facility is always cheaper than a term loan",
          c: "Term loans are only available to banks",
          d: "There is no difference"
        },
        correctAnswer: "a"
      },
      {
        id: "q7",
        text: "What role do insurance companies and pension funds play as funding sources for leasing?",
        options: {
          a: "They provide short-term bridge loans only",
          b: "They act as long-term institutional investors seeking stable, asset-backed returns that match their liability profiles, funding lease portfolios directly or through securitisation",
          c: "They only fund government-backed leasing programmes",
          d: "They provide grants to leasing companies"
        },
        correctAnswer: "b"
      },
      {
        id: "q8",
        text: "What is 'cost of funds' and why is it central to lease pricing strategy?",
        options: {
          a: "The cost of administering the leasing company's operations",
          b: "The rate at which the leasing company borrows money to fund leases; it forms the floor for lease pricing and directly determines the spread and profitability",
          c: "The depreciation cost of leased assets",
          d: "The legal cost of preparing lease agreements"
        },
        correctAnswer: "b"
      },
      {
        id: "q9",
        text: "What is a 'private placement' as a funding mechanism for a leasing company?",
        options: {
          a: "Raising capital by selling securities directly to a small number of institutional investors rather than through a public offering",
          b: "Placing equipment with private clients only",
          c: "A government placement of surplus equipment",
          d: "A private sale of leased equipment at end of term"
        },
        correctAnswer: "a"
      },
      {
        id: "q10",
        text: "How does a leasing company manage interest rate mismatches between its fixed-rate lease assets and floating-rate funding?",
        options: {
          a: "By only offering floating-rate leases",
          b: "By avoiding long-term leases",
          c: "Through hedging instruments such as interest rate swaps that convert floating-rate liabilities to fixed, aligning asset and liability cash flows",
          d: "By holding excess cash reserves"
        },
        correctAnswer: "c"
      }
    ]
  },

  {
    id: "c19",
    title: "Comprehensive Risk Analysis",
    description: "Master the frameworks and techniques used to analyse risk across a leasing portfolio.",
    questions: [
      {
        id: "q1",
        text: "What are the four primary risk categories a leasing company must analyse?",
        options: {
          a: "Sales, marketing, HR, and IT risk",
          b: "Credit risk, asset/residual value risk, interest rate risk, and operational risk",
          c: "Equipment, insurance, legal, and tax risk",
          d: "Liquidity, currency, reputational, and weather risk"
        },
        correctAnswer: "b"
      },
      {
        id: "q2",
        text: "What is 'counterparty risk' in a lease transaction?",
        options: {
          a: "The risk of equipment failure",
          b: "The risk that the other party to the transaction — typically the lessee — fails to fulfil its contractual obligations",
          c: "The risk of a competitor undercutting rates",
          d: "The risk of interest rate changes"
        },
        correctAnswer: "b"
      },
      {
        id: "q3",
        text: "How is 'asset liquidity risk' relevant to a leasing company?",
        options: {
          a: "The risk that the lessee cannot pay for liquidity reasons",
          b: "The risk that upon default or end of term, the leased equipment cannot be quickly sold or re-leased at an acceptable value",
          c: "The risk that the lessor runs out of cash",
          d: "The risk of equipment being damaged by liquid spills"
        },
        correctAnswer: "b"
      },
      {
        id: "q4",
        text: "What is 'operational risk' in a leasing company context?",
        options: {
          a: "The risk of equipment becoming operationally obsolete",
          b: "The risk of losses from inadequate or failed internal processes, people, systems, or external events",
          c: "The risk of operating in multiple countries",
          d: "The risk of changes to operating lease accounting standards"
        },
        correctAnswer: "b"
      },
      {
        id: "q5",
        text: "What does a 'risk matrix' help a leasing company to do?",
        options: {
          a: "Calculate the monthly lease payment",
          b: "Identify the most creditworthy lessees",
          c: "Visualise and prioritise risks by mapping their likelihood against their potential impact, enabling focused risk management",
          d: "Set the interest rate for new leases"
        },
        correctAnswer: "c"
      },
      {
        id: "q6",
        text: "What is 'concentration risk' at the portfolio level and why must it be actively monitored?",
        options: {
          a: "The risk that a single asset type dominates sales volumes",
          b: "Over-exposure to a single lessee, industry, geography, or asset class — amplifying losses if that segment deteriorates",
          c: "The risk of having too few lessees",
          d: "The administrative burden of complex leases"
        },
        correctAnswer: "b"
      },
      {
        id: "q7",
        text: "What is 'sensitivity analysis' and how is it applied in lease portfolio risk management?",
        options: {
          a: "Analysing how sensitive lessees are to price increases",
          b: "Testing how changes in a single variable — such as default rate or residual value — affect portfolio performance, isolating the impact of each risk factor",
          c: "Evaluating the sensitivity of equipment to environmental conditions",
          d: "Measuring the sensitivity of investors to yield changes"
        },
        correctAnswer: "b"
      },
      {
        id: "q8",
        text: "What is 'scenario analysis' in lease risk management?",
        options: {
          a: "Analysing different sales scenarios to forecast revenue",
          b: "Modelling portfolio performance under specific hypothetical economic or market conditions, such as a recession, rising interest rates, or a sector downturn",
          c: "Analysing the lessee's different use scenarios for the equipment",
          d: "Evaluating different lease structures for a single client"
        },
        correctAnswer: "b"
      },
      {
        id: "q9",
        text: "What does 'early warning indicator' mean in a lease portfolio risk context?",
        options: {
          a: "A notification that a lease is about to expire",
          b: "A metric or behavioural signal — such as payment delays or covenant breaches — that identifies a lessee at elevated risk of default before it occurs",
          c: "An alert that interest rates are rising",
          d: "A signal that equipment maintenance is overdue"
        },
        correctAnswer: "b"
      },
      {
        id: "q10",
        text: "What is the purpose of a 'risk appetite statement' for a leasing company?",
        options: {
          a: "To describe the types of equipment the company prefers to lease",
          b: "To formally define the level and type of risk the company is willing to accept in pursuit of its strategic objectives, guiding underwriting and portfolio decisions",
          c: "To set the minimum deal size the company will accept",
          d: "To document the company's preferred funding sources"
        },
        correctAnswer: "b"
      }
    ]
  },

  {
    id: "c20",
    title: "Measuring Financial Performance",
    description: "Learn to measure, interpret, and improve the financial performance of a leasing business.",
    questions: [
      {
        id: "q1",
        text: "What is 'net interest margin' (NIM) and why is it a core performance metric for a leasing company?",
        options: {
          a: "The total revenue from lease originations in a year",
          b: "The difference between the yield earned on lease assets and the cost of funds used to finance them, expressed as a percentage — the primary driver of leasing profitability",
          c: "The margin between the equipment purchase price and the monthly payment",
          d: "The profit margin on equipment sales at end of lease"
        },
        correctAnswer: "b"
      },
      {
        id: "q2",
        text: "What does 'return on equity' (ROE) measure in a leasing business?",
        options: {
          a: "The return generated on total assets",
          b: "The profitability of the lease portfolio before tax",
          c: "The net profit generated relative to shareholders' equity, indicating how effectively the company uses shareholder capital",
          d: "The return on equipment sold at end of lease"
        },
        correctAnswer: "c"
      },
      {
        id: "q3",
        text: "What is the 'efficiency ratio' in financial services and what does it indicate for a leasing company?",
        options: {
          a: "The ratio of equipment uptime to total lease term",
          b: "Operating expenses divided by net revenue — a lower ratio indicates a more cost-efficient operation",
          c: "The ratio of fixed to variable lease payments in the portfolio",
          d: "The ratio of new originations to existing portfolio size"
        },
        correctAnswer: "b"
      },
      {
        id: "q4",
        text: "What is 'origination volume' and why is it tracked as a leading indicator?",
        options: {
          a: "The total number of employees in the originations team",
          b: "The value of new leases written in a period — a leading indicator of future portfolio growth, revenue, and profitability",
          c: "The number of lease renewals in a period",
          d: "The volume of equipment returned at end of term"
        },
        correctAnswer: "b"
      },
      {
        id: "q5",
        text: "What is 'return on assets' (ROA) and how does it differ from ROE?",
        options: {
          a: "ROA and ROE are the same metric",
          b: "ROA measures net income relative to total assets, reflecting how efficiently assets generate profit; ROE measures returns relative to equity, reflecting leverage impact",
          c: "ROA measures the return on individual leased assets; ROE measures return on the entire portfolio",
          d: "ROE is a better metric than ROA in all circumstances"
        },
        correctAnswer: "b"
      },
      {
        id: "q6",
        text: "What is 'provision for credit losses' and how does it affect a leasing company's reported profitability?",
        options: {
          a: "A reserve set aside for future equipment purchases",
          b: "A charge to the income statement reflecting estimated future credit losses on the portfolio; higher provisions reduce reported net income",
          c: "A regulatory fee paid to licensing authorities",
          d: "Insurance premium expenses for the lease portfolio"
        },
        correctAnswer: "b"
      },
      {
        id: "q7",
        text: "What does 'portfolio yield' measure?",
        options: {
          a: "The percentage of leases that renew at end of term",
          b: "The total annualised income generated from the lease portfolio as a percentage of the average outstanding balance",
          c: "The depreciation rate of assets in the portfolio",
          d: "The interest rate charged on new originations only"
        },
        correctAnswer: "b"
      },
      {
        id: "q8",
        text: "What is 'cost per originated dollar' and why is it useful for a leasing company?",
        options: {
          a: "The equipment cost per lease dollar outstanding",
          b: "The total origination and sales cost incurred to generate each dollar of new lease volume, used to assess sales efficiency and pricing adequacy",
          c: "The administrative cost of managing each dollar of the portfolio",
          d: "The interest cost per dollar of funding"
        },
        correctAnswer: "b"
      },
      {
        id: "q9",
        text: "How does 'leverage ratio' affect the risk-return profile of a leasing company?",
        options: {
          a: "Higher leverage reduces both risk and return",
          b: "Leverage has no impact on risk",
          c: "Higher leverage amplifies both returns on equity and financial risk; a highly leveraged company is more sensitive to portfolio losses",
          d: "Lower leverage always indicates better performance"
        },
        correctAnswer: "c"
      },
      {
        id: "q10",
        text: "What is 'economic value added' (EVA) and how can it be applied to lease portfolio performance?",
        options: {
          a: "The market value of equipment in the portfolio",
          b: "A measure of the profit generated above the cost of capital employed; positive EVA indicates the portfolio is creating, not destroying, shareholder value",
          c: "The value added by equipment maintenance programmes",
          d: "The incremental revenue from upselling bundled services"
        },
        correctAnswer: "b"
      }
    ]
  },

  {
    id: "c21",
    title: "Introduction to Managed Services",
    description: "Understand the fundamentals of managed services and how they intersect with equipment leasing.",
    questions: [
      {
        id: "q1",
        text: "What is a 'managed service' in the context of equipment and technology?",
        options: {
          a: "A government-managed equipment procurement programme",
          b: "A comprehensive offering where a provider takes responsibility for delivering and managing a specified outcome — such as uptime or print volume — rather than just supplying equipment",
          c: "An equipment rental with no service component",
          d: "A maintenance contract purchased separately from the equipment"
        },
        correctAnswer: "b"
      },
      {
        id: "q2",
        text: "How does a managed service model differ from a traditional equipment lease?",
        options: {
          a: "A managed service includes only financing; a lease includes only services",
          b: "A managed service bundles equipment, maintenance, software, consumables, and support into a single outcome-based contract, whereas a traditional lease typically covers financing only",
          c: "Managed services are always more expensive than leases",
          d: "There is no difference"
        },
        correctAnswer: "b"
      },
      {
        id: "q3",
        text: "What is an 'outcome-based' managed service contract?",
        options: {
          a: "A contract where payment is tied to sales outcomes of the lessee",
          b: "A contract structured around delivering a measurable result — such as a cost-per-page or uptime guarantee — rather than simply providing equipment",
          c: "A contract with a fixed outcome at end of term",
          d: "A contract that guarantees equipment purchase at end of term"
        },
        correctAnswer: "b"
      },
      {
        id: "q4",
        text: "What is a 'managed print service' (MPS) and what does it typically include?",
        options: {
          a: "A service for printing marketing materials",
          b: "A comprehensive print management contract covering printers, toner, maintenance, and support, often priced per page printed",
          c: "A leasing programme for printing presses only",
          d: "Software for managing print job queues"
        },
        correctAnswer: "b"
      },
      {
        id: "q5",
        text: "What is a 'service level agreement' (SLA) in a managed service context?",
        options: {
          a: "A legal clause protecting the provider from liability",
          b: "A contractual commitment specifying the performance standards, response times, and remedies that the managed service provider must meet",
          c: "A pricing schedule for additional services",
          d: "A customer satisfaction survey framework"
        },
        correctAnswer: "b"
      },
      {
        id: "q6",
        text: "Why do businesses prefer managed services over owning equipment outright in technology-intensive sectors?",
        options: {
          a: "Because managed services are always the cheapest option",
          b: "To convert capital expenditure to predictable operating expenditure, eliminate technology obsolescence risk, and outsource management complexity",
          c: "Because ownership of technology equipment is illegal",
          d: "Because managed service contracts are easier to cancel"
        },
        correctAnswer: "b"
      },
      {
        id: "q7",
        text: "What is the role of a 'managed service provider' (MSP) in an equipment financing transaction?",
        options: {
          a: "The MSP acts as the lessor providing funding",
          b: "The MSP delivers and manages the service, while a separate finance company provides the underlying equipment funding — creating a three-party structure",
          c: "The MSP purchases equipment on behalf of the lessee",
          d: "The MSP provides insurance for the leased equipment"
        },
        correctAnswer: "b"
      },
      {
        id: "q8",
        text: "What is a 'consumption-based' or 'pay-per-use' model in managed services?",
        options: {
          a: "A model where clients pay only when they use the equipment, based on actual measured consumption rather than a fixed monthly fee",
          b: "A model where the provider pays for equipment usage",
          c: "A model where all costs are paid upfront",
          d: "A model limited to utility services"
        },
        correctAnswer: "a"
      },
      {
        id: "q9",
        text: "What is 'refresh management' in a managed services context?",
        options: {
          a: "Cleaning and refurbishing equipment mid-contract",
          b: "The planned replacement of equipment at the end of its useful life within the managed service contract, ensuring the client always has current technology",
          c: "Software updates provided by the MSP",
          d: "Replacing consumables such as toner"
        },
        correctAnswer: "b"
      },
      {
        id: "q10",
        text: "What is the primary challenge for a leasing company entering the managed services space?",
        options: {
          a: "Finding equipment to lease",
          b: "Competing on interest rates",
          c: "Transitioning from a transaction-focused finance model to an ongoing service delivery model, requiring new capabilities in operations, technology, and customer management",
          d: "Obtaining regulatory approval"
        },
        correctAnswer: "c"
      }
    ]
  },

  {
    id: "c22",
    title: "Strategic Funding Options for Managed Services",
    description: "Explore funding strategies and capital structures specifically designed for managed service programmes.",
    questions: [
      {
        id: "q1",
        text: "Why does funding a managed services contract present different challenges compared to funding a straightforward equipment lease?",
        options: {
          a: "Managed services are always funded by government grants",
          b: "The revenue stream is tied to service performance and consumption rather than fixed equipment lease payments, making cash flow less predictable for funders",
          c: "Managed services do not require funding",
          d: "Funders prefer managed services because of their simplicity"
        },
        correctAnswer: "b"
      },
      {
        id: "q2",
        text: "What is a 'blended rate' in the context of funding a managed service contract?",
        options: {
          a: "A rate that blends multiple currencies",
          b: "A single all-inclusive rate that covers both the equipment financing cost and the service component, simplifying billing for the customer",
          c: "A variable rate that blends fixed and floating interest",
          d: "A rate that blends costs across multiple clients"
        },
        correctAnswer: "b"
      },
      {
        id: "q3",
        text: "How can a leasing company 'unbundle' a managed service for funding purposes?",
        options: {
          a: "By splitting the equipment financing from the service components and funding only the hard asset finance element",
          b: "By selling the equipment to the lessee and separately providing maintenance",
          c: "By offering the service for free and charging only for equipment",
          d: "By unbundling the lease payments into quarterly instalments"
        },
        correctAnswer: "a"
      },
      {
        id: "q4",
        text: "What is 'vendor recourse' in a managed services funding arrangement?",
        options: {
          a: "The funder's right to recover equipment from the lessee upon default",
          b: "An arrangement where the vendor or MSP agrees to buy back or replace contracts that default, reducing the funder's credit risk",
          c: "Legal recourse available to the vendor against the funder",
          d: "The vendor's right to increase prices mid-contract"
        },
        correctAnswer: "b"
      },
      {
        id: "q5",
        text: "What funding structure is most appropriate for a large, multi-year managed IT services contract with predictable monthly fees?",
        options: {
          a: "A short-term revolving credit facility",
          b: "A term note or lease facility matched to the contract duration, providing stable long-term funding aligned with the contract's cash flows",
          c: "Equity funding from the MSP's shareholders",
          d: "An overdraft facility"
        },
        correctAnswer: "b"
      },
      {
        id: "q6",
        text: "What is a 'first-loss piece' in a managed services funding structure?",
        options: {
          a: "The first payment made under the managed service contract",
          b: "A credit enhancement mechanism where the MSP or originator absorbs the first tranche of credit losses, reducing risk to the senior funder",
          c: "The first piece of equipment delivered under the contract",
          d: "The insurance excess paid in the event of equipment loss"
        },
        correctAnswer: "b"
      },
      {
        id: "q7",
        text: "How does a funder assess the credit quality of a managed services receivable compared to a traditional lease receivable?",
        options: {
          a: "They are assessed identically",
          b: "Managed services receivables require analysis of service performance risk, customer concentration, contract termination clauses, and the MSP's ability to deliver — in addition to standard credit analysis",
          c: "Managed services receivables are always lower risk",
          d: "Funders only assess the equipment value"
        },
        correctAnswer: "b"
      },
      {
        id: "q8",
        text: "What is a 'back-to-back' funding structure in vendor-managed services?",
        options: {
          a: "A structure where two funders share a single contract equally",
          b: "A structure where the funder provides finance to the MSP against specific customer contracts, with the MSP acting as both originator and servicer",
          c: "A structure where funding terms mirror the vendor's supply terms exactly",
          d: "A structure where the lessee funds the MSP directly"
        },
        correctAnswer: "b"
      },
      {
        id: "q9",
        text: "What covenant is most commonly required by funders of managed service programmes?",
        options: {
          a: "A minimum equipment age covenant",
          b: "A minimum service quality covenant",
          c: "A portfolio performance covenant — such as minimum portfolio yield, maximum delinquency, or minimum advance rate — triggering remedies if breached",
          d: "A covenant restricting the MSP from acquiring new clients"
        },
        correctAnswer: "c"
      },
      {
        id: "q10",
        text: "What is the significance of 'contract stickiness' when a funder evaluates a managed services portfolio?",
        options: {
          a: "It refers to whether the contracts are legally adhesive to the equipment",
          b: "High contract stickiness — where customers rarely cancel — reduces prepayment and attrition risk, making the receivables more attractive to funders",
          c: "It refers to contracts that are difficult to administer",
          d: "It measures how quickly new contracts are signed"
        },
        correctAnswer: "b"
      }
    ]
  },

  {
    id: "c23",
    title: "Transition and Impact Analysis",
    description: "Analyse the transition to new lease accounting standards and their financial impact on organisations.",
    questions: [
      {
        id: "q1",
        text: "What is 'transition date' in the context of adopting IFRS 16?",
        options: {
          a: "The date a new lease is signed",
          b: "The date on which an entity first applies IFRS 16 and must recognise existing lease obligations on the balance sheet",
          c: "The date the lessee returns equipment at end of lease",
          d: "The date the lessor transfers title to the lessee"
        },
        correctAnswer: "b"
      },
      {
        id: "q2",
        text: "What are the two transition approaches permitted under IFRS 16 on adoption?",
        options: {
          a: "Full retrospective and modified retrospective approaches",
          b: "Operating lease method and finance lease method",
          c: "On-balance-sheet and off-balance-sheet approaches",
          d: "Annual and quarterly transition approaches"
        },
        correctAnswer: "a"
      },
      {
        id: "q3",
        text: "Under the modified retrospective approach for IFRS 16 transition, how is the right-of-use asset typically measured?",
        options: {
          a: "At the fair value of the underlying asset",
          b: "At an amount equal to the lease liability, adjusted for any prepaid or accrued lease payments",
          c: "At the historical cost of the equipment",
          d: "At zero, with no asset recognised"
        },
        correctAnswer: "b"
      },
      {
        id: "q4",
        text: "What is the impact of IFRS 16 adoption on a lessee's EBITDA?",
        options: {
          a: "EBITDA decreases because lease costs are now higher",
          b: "EBITDA increases because operating lease expenses are replaced by depreciation and interest, which are excluded from EBITDA",
          c: "EBITDA is unaffected by IFRS 16",
          d: "EBITDA decreases because more depreciation is charged"
        },
        correctAnswer: "b"
      },
      {
        id: "q5",
        text: "How does IFRS 16 adoption affect a company's reported net debt?",
        options: {
          a: "Net debt decreases because leases are now assets",
          b: "Net debt increases because lease liabilities are now recognised on the balance sheet",
          c: "Net debt is unaffected",
          d: "Net debt decreases because operating leases were previously included"
        },
        correctAnswer: "b"
      },
      {
        id: "q6",
        text: "What is a 'lease inventory exercise' and why is it a critical first step in IFRS 16 transition?",
        options: {
          a: "A physical count of all equipment under lease",
          b: "A systematic identification and cataloguing of all contracts containing a lease to ensure complete and accurate recognition under the new standard",
          c: "An audit of lease payment schedules",
          d: "A review of all lease contracts for early termination clauses"
        },
        correctAnswer: "b"
      },
      {
        id: "q7",
        text: "What is the impact of IFRS 16 on a lessee's operating cash flow?",
        options: {
          a: "Operating cash flow decreases because lease payments are now higher",
          b: "Operating cash flow improves because the principal portion of lease payments is reclassified from operating to financing activities",
          c: "Operating cash flow is unaffected",
          d: "Operating cash flow decreases because depreciation increases"
        },
        correctAnswer: "b"
      },
      {
        id: "q8",
        text: "Which key assumption most significantly affects the lease liability recognised at transition?",
        options: {
          a: "The equipment's market value",
          b: "The incremental borrowing rate used to discount future lease payments — a lower IBR results in a higher liability",
          c: "The frequency of lease payments",
          d: "The maintenance obligations of the lessee"
        },
        correctAnswer: "b"
      },
      {
        id: "q9",
        text: "How should a company communicate the impact of IFRS 16 adoption to its lenders and investors?",
        options: {
          a: "By restating all prior period financials silently",
          b: "By providing clear quantitative disclosure of the transition adjustment, the key assumptions used, and the impact on reported financial metrics and loan covenants",
          c: "By waiting until the first full-year report after adoption",
          d: "By only disclosing if the impact exceeds a materiality threshold"
        },
        correctAnswer: "b"
      },
      {
        id: "q10",
        text: "How may IFRS 16 affect a company's existing loan covenants?",
        options: {
          a: "Loan covenants are unaffected because funders ignore accounting changes",
          b: "IFRS 16 can cause covenant breaches if debt-to-equity, interest cover, or leverage ratios are defined using reported balance sheet figures that now include lease liabilities",
          c: "IFRS 16 always improves covenant compliance",
          d: "Only new loans entered after IFRS 16 adoption are affected"
        },
        correctAnswer: "b"
      }
    ]
  },

  {
    id: "c24",
    title: "Key Financial Ratios for Lessors",
    description: "Master the financial ratios used to evaluate, manage, and benchmark a leasing company's performance.",
    questions: [
      {
        id: "q1",
        text: "What does the 'debt-to-equity ratio' indicate for a leasing company?",
        options: {
          a: "The proportion of the portfolio that is in arrears",
          b: "The ratio of borrowed funds to shareholder equity, indicating the company's financial leverage and the relative contribution of debt versus equity in funding the business",
          c: "The ratio of operating leases to finance leases in the portfolio",
          d: "The proportion of the portfolio funded by securitisation"
        },
        correctAnswer: "b"
      },
      {
        id: "q2",
        text: "What is the 'net interest margin' (NIM) and why is it a core profitability metric?",
        options: {
          a: "The difference between the largest and smallest lease in the portfolio",
          b: "The spread between the yield earned on the lease portfolio and the cost of funds, expressed as a percentage of average earning assets — the primary driver of a lessor's financial performance",
          c: "The margin between equipment purchase cost and residual value",
          d: "The interest rate charged to the highest-risk lessees"
        },
        correctAnswer: "b"
      },
      {
        id: "q3",
        text: "What does a high 'delinquency ratio' signal about a lease portfolio?",
        options: {
          a: "Strong portfolio growth",
          b: "Deteriorating credit quality — a high proportion of lessees are behind on payments, signalling elevated credit risk and potential future charge-offs",
          c: "Aggressive origination strategy",
          d: "High residual value exposure"
        },
        correctAnswer: "b"
      },
      {
        id: "q4",
        text: "What does the 'leverage ratio' measure for a lessor and what is its significance?",
        options: {
          a: "The ratio of equipment age to lease term",
          b: "The ratio of total assets to equity — a higher ratio means the company is more leveraged, amplifying returns but increasing vulnerability to losses",
          c: "The ratio of fixed to variable rate leases",
          d: "The ratio of leases originated to leases renewed"
        },
        correctAnswer: "b"
      },
      {
        id: "q5",
        text: "What does 'return on average assets' (ROAA) measure for a leasing company?",
        options: {
          a: "The return earned on equity investments",
          b: "The net income generated per dollar of average total assets, reflecting operational efficiency and asset productivity",
          c: "The appreciation in value of leased assets",
          d: "The return earned on assets sold at end of lease"
        },
        correctAnswer: "b"
      },
      {
        id: "q6",
        text: "What is the 'net charge-off ratio' and what does it reveal?",
        options: {
          a: "The ratio of new originations to total portfolio",
          b: "Annualised lease receivables written off as uncollectable (net of recoveries) as a percentage of average portfolio balance — measuring realised credit losses",
          c: "The ratio of operating costs to total income",
          d: "The ratio of equipment depreciation to original cost"
        },
        correctAnswer: "b"
      },
      {
        id: "q7",
        text: "What is the 'cost of funds ratio' and how does it affect lease pricing decisions?",
        options: {
          a: "The cost of administering the lease portfolio",
          b: "The blended rate at which the leasing company borrows to fund its portfolio — it sets the floor for lease rates and determines the achievable spread",
          c: "The cost of originating new leases",
          d: "The total cost of equipment acquisitions"
        },
        correctAnswer: "b"
      },
      {
        id: "q8",
        text: "What does the 'equity multiplier' reveal about a leasing company's financial structure?",
        options: {
          a: "How many times equity has been issued",
          b: "The extent to which assets are financed by equity versus debt — a higher multiplier indicates greater leverage",
          c: "The return on equity relative to industry peers",
          d: "The number of equity investors in the business"
        },
        correctAnswer: "b"
      },
      {
        id: "q9",
        text: "How is 'portfolio yield' calculated and what does it measure?",
        options: {
          a: "Total lease payments divided by number of leases",
          b: "Total annualised lease income divided by average outstanding portfolio balance — measuring the income-generating efficiency of the portfolio",
          c: "Residual value divided by original equipment cost",
          d: "New originations divided by total portfolio"
        },
        correctAnswer: "b"
      },
      {
        id: "q10",
        text: "What is the 'provision coverage ratio' and why is it important?",
        options: {
          a: "The ratio of insurance premiums to total lease payments",
          b: "The ratio of loan loss provisions to non-performing or delinquent receivables — indicating whether provisions are sufficient to absorb expected losses",
          c: "The ratio of fixed costs to variable costs",
          d: "The ratio of secured to unsecured leases"
        },
        correctAnswer: "b"
      }
    ]
  },

  {
    id: "c25",
    title: "Funding the Leasing Company",
    description: "Understand how leasing companies source, structure, and manage their funding to support portfolio growth.",
    questions: [
      {
        id: "q1",
        text: "What is the primary funding challenge unique to a leasing company compared to a traditional bank?",
        options: {
          a: "Leasing companies cannot borrow money",
          b: "Leasing companies cannot accept deposits and must raise all funding from wholesale markets, institutional investors, or securitisation — making funding cost and availability more variable",
          c: "Leasing companies are prohibited from issuing bonds",
          d: "Leasing companies must fund all leases from equity"
        },
        correctAnswer: "b"
      },
      {
        id: "q2",
        text: "What is a 'credit facility' and how does a leasing company typically use one?",
        options: {
          a: "A facility for providing credit to lessees",
          b: "A committed borrowing arrangement with a bank or group of banks that the leasing company draws on to fund new lease originations",
          c: "A government programme for subsidising lease rates",
          d: "A facility for managing lease collections"
        },
        correctAnswer: "b"
      },
      {
        id: "q3",
        text: "What is 'asset-liability management' (ALM) for a leasing company?",
        options: {
          a: "Managing equipment purchases and sales",
          b: "Managing the match between the duration, interest rate, and currency characteristics of lease assets and the funding liabilities that finance them, to control liquidity and rate risk",
          c: "Managing the company's physical assets and employee liabilities",
          d: "Managing the residual value of assets against lease liabilities"
        },
        correctAnswer: "b"
      },
      {
        id: "q4",
        text: "What is a 'committed' versus an 'uncommitted' funding facility?",
        options: {
          a: "A committed facility is guaranteed by the government; an uncommitted facility is not",
          b: "A committed facility is a legally binding obligation by the lender to provide funds up to a limit; an uncommitted facility can be withdrawn at the lender's discretion",
          c: "A committed facility has a fixed interest rate; an uncommitted facility has a variable rate",
          d: "There is no practical difference"
        },
        correctAnswer: "b"
      },
      {
        id: "q5",
        text: "What is 'diversification of funding sources' and why is it a best practice for leasing companies?",
        options: {
          a: "Originating leases across multiple industry sectors",
          b: "Using multiple funding channels — bank lines, securitisation, bonds, equity — to reduce dependence on any single source and ensure resilience if one source becomes unavailable",
          c: "Offering leases in multiple currencies",
          d: "Working with multiple equipment vendors"
        },
        correctAnswer: "b"
      },
      {
        id: "q6",
        text: "What does 'funding tenor' refer to and why does it matter?",
        options: {
          a: "The tone used in funding agreements",
          b: "The duration of the funding facility — matching funding tenor to lease asset duration is critical to avoid maturity mismatches and refinancing risk",
          c: "The interest rate tenor used for pricing",
          d: "The number of funding tranches in a securitisation"
        },
        correctAnswer: "b"
      },
      {
        id: "q7",
        text: "What is 'equity capital' and what role does it play in funding a leasing company?",
        options: {
          a: "Equity is borrowed from shareholders and must be repaid",
          b: "Equity provides the foundational permanent capital base that absorbs losses, supports leverage, and gives lenders and investors confidence in the company's financial stability",
          c: "Equity is only used to fund the company's operating costs",
          d: "Equity and debt play identical roles in funding a leasing company"
        },
        correctAnswer: "b"
      },
      {
        id: "q8",
        text: "What is a 'rating agency' and why do larger leasing companies seek a credit rating?",
        options: {
          a: "An agency that rates lease agreements for legal quality",
          b: "An independent organisation that assesses creditworthiness; a credit rating enables the leasing company to access public debt markets and lower its cost of funds",
          c: "A government body that regulates leasing companies",
          d: "An agency that rates the condition of returned equipment"
        },
        correctAnswer: "b"
      },
      {
        id: "q9",
        text: "What is 'liquidity risk' for a leasing company and how is it managed?",
        options: {
          a: "The risk that equipment cannot be liquidated",
          b: "The risk of being unable to meet financial obligations as they fall due; managed through committed credit facilities, liquidity buffers, and staggered maturity profiles",
          c: "The risk that lease payments are made irregularly",
          d: "The risk of interest rate fluctuations"
        },
        correctAnswer: "b"
      },
      {
        id: "q10",
        text: "What is a 'securitisation programme' and how does it benefit a leasing company's funding strategy?",
        options: {
          a: "A government programme securing equipment against theft",
          b: "A structured finance programme that pools lease receivables and issues rated securities to investors, providing access to lower-cost, long-term capital and freeing up the company's balance sheet",
          c: "A programme for securing IT equipment against data breaches",
          d: "A legal programme for registering security interests in leased assets"
        },
        correctAnswer: "b"
      }
    ]
  },

  {
    id: "c26",
    title: "Strategic Program Selection",
    description: "Learn how to evaluate, select, and position leasing programmes strategically for maximum business impact.",
    questions: [
      {
        id: "q1",
        text: "What is the primary criterion for selecting a leasing programme to offer?",
        options: {
          a: "Choosing the programme with the lowest interest rate",
          b: "Aligning the programme structure with the target client's financial needs, equipment type, transaction size, and risk profile",
          c: "Offering the most complex programme available",
          d: "Copying the programme offered by the market leader"
        },
        correctAnswer: "b"
      },
      {
        id: "q2",
        text: "What is a 'captive finance programme' and when is it the right strategic choice?",
        options: {
          a: "A programme that captures the highest-risk lessees",
          b: "A financing programme owned and operated by an equipment manufacturer or vendor to support sales of its own products, ideal when the manufacturer wants to control the financing experience",
          c: "A programme that captures government contracts",
          d: "A programme that only funds captive equipment types"
        },
        correctAnswer: "b"
      },
      {
        id: "q3",
        text: "What factors should a leasing company assess when selecting which asset classes to specialise in?",
        options: {
          a: "Only the current market interest rate",
          b: "Asset liquidity, depreciation profile, market demand, the company's ability to manage and remarketed the asset, and the competitive landscape",
          c: "Only the size of the available market",
          d: "The preferences of the largest single investor"
        },
        correctAnswer: "b"
      },
      {
        id: "q4",
        text: "What is a 'white label' leasing programme and when is it strategically advantageous?",
        options: {
          a: "A programme for leasing white goods only",
          b: "A programme where a leasing company provides financing under a partner's brand, allowing the partner to offer financing without building their own capabilities",
          c: "A programme that offers the lowest possible rates",
          d: "A programme that is not publicly marketed"
        },
        correctAnswer: "b"
      },
      {
        id: "q5",
        text: "How should a leasing company assess the strategic fit of a new programme before launch?",
        options: {
          a: "By launching immediately and adjusting based on results",
          b: "Through a structured analysis of market size, target client segment, competitive differentiation, risk profile, required capabilities, and projected return on capital",
          c: "By asking the largest existing client whether they would use it",
          d: "By copying an existing competitor's programme"
        },
        correctAnswer: "b"
      },
      {
        id: "q6",
        text: "What is 'channel strategy' in the context of leasing programme selection?",
        options: {
          a: "The television channels used for marketing",
          b: "The decision about how to reach target clients — directly, through vendors, brokers, or digital platforms — and aligning the programme structure to the chosen channel",
          c: "The internal communication channels between departments",
          d: "The sequence in which programme features are introduced"
        },
        correctAnswer: "b"
      },
      {
        id: "q7",
        text: "Why is 'scalability' an important criterion when selecting a leasing programme?",
        options: {
          a: "To ensure the programme can be cancelled easily",
          b: "The programme must be capable of growing transaction volume without proportional increases in cost or risk, ensuring long-term profitability",
          c: "To ensure the programme covers all equipment sizes",
          d: "To allow the programme to scale to international markets immediately"
        },
        correctAnswer: "b"
      },
      {
        id: "q8",
        text: "What is a 'niche programme' strategy in leasing and what are its advantages?",
        options: {
          a: "Offering the broadest possible range of lease products",
          b: "Focusing on a specific industry, asset type, or client segment where the leasing company can develop specialised expertise, build deeper relationships, and achieve pricing power",
          c: "Offering the lowest rates in a narrow geographic area",
          d: "Targeting only the largest enterprises"
        },
        correctAnswer: "b"
      },
      {
        id: "q9",
        text: "What is the role of 'pilot programme' testing in strategic programme selection?",
        options: {
          a: "Programmes for pilots and aviation equipment",
          b: "Running a controlled, limited launch to test market response, operational feasibility, and risk metrics before committing to full rollout",
          c: "Testing the sales team's knowledge before launch",
          d: "Offering the programme to pilot clients at no cost"
        },
        correctAnswer: "b"
      },
      {
        id: "q10",
        text: "How does a leasing company use competitive intelligence when selecting a programme strategy?",
        options: {
          a: "By copying competitor programmes exactly",
          b: "By analysing competitor offerings, pricing, target segments, and gaps in the market to identify differentiated positions and underserved opportunities",
          c: "By avoiding all markets where competitors are active",
          d: "By using lower rates as the only point of differentiation"
        },
        correctAnswer: "b"
      }
    ]
  },

  {
    id: "c27",
    title: "A Taxonomy of Vendor Leasing Programs",
    description: "Understand the different types of vendor leasing programmes and how to structure and position each effectively.",
    questions: [
      {
        id: "q1",
        text: "What is a 'vendor leasing programme' in its broadest definition?",
        options: {
          a: "A leasing programme exclusively for government vendors",
          b: "A structured arrangement between a leasing company and an equipment vendor or manufacturer that enables the vendor to offer financing to its customers, typically increasing sales and customer retention",
          c: "A discount programme offered by equipment vendors to leasing companies",
          d: "A leasing programme limited to vendor-owned equipment"
        },
        correctAnswer: "b"
      },
      {
        id: "q2",
        text: "What is a 'captive' vendor leasing programme?",
        options: {
          a: "A programme that captures government contracts",
          b: "A financing programme wholly owned and operated by the equipment manufacturer itself, such as Caterpillar Financial Products or John Deere Financial",
          c: "A programme that captures only the highest-risk customers",
          d: "A programme operated by a bank on behalf of a vendor"
        },
        correctAnswer: "b"
      },
      {
        id: "q3",
        text: "What is a 'preferred lender' or 'endorsed' vendor programme?",
        options: {
          a: "A programme where the vendor provides the financing directly",
          b: "An arrangement where the vendor endorses one or more external leasing companies as preferred financing partners, directing customers to those funders",
          c: "A programme limited to vendors with investment-grade ratings",
          d: "A government-backed vendor lending scheme"
        },
        correctAnswer: "b"
      },
      {
        id: "q4",
        text: "What is a 'private label' or 'white label' vendor programme?",
        options: {
          a: "A programme for leasing privately-labelled equipment brands",
          b: "A programme where the leasing company provides financing under the vendor's brand name, giving the appearance of an in-house financing solution without the vendor building its own capability",
          c: "A confidential programme not disclosed to customers",
          d: "A programme restricted to private companies"
        },
        correctAnswer: "b"
      },
      {
        id: "q5",
        text: "What is a 'dealer finance' programme in the context of vendor leasing?",
        options: {
          a: "A programme for financing card dealer businesses",
          b: "A programme where a leasing company provides funding through a network of authorised dealers who originate transactions with end customers on behalf of the manufacturer or leasing company",
          c: "A programme where dealers provide their own funding",
          d: "A programme for financing dealer inventory"
        },
        correctAnswer: "b"
      },
      {
        id: "q6",
        text: "What is a 'floor plan' or 'inventory finance' programme and how does it differ from a customer lease programme?",
        options: {
          a: "They are identical programmes",
          b: "Floor plan finance funds the vendor's or dealer's inventory of equipment before it is sold; a customer lease programme funds the end customer's use of equipment after the sale",
          c: "Floor plan finance is only available for vehicles",
          d: "Customer lease programmes always include floor plan elements"
        },
        correctAnswer: "b"
      },
      {
        id: "q7",
        text: "What is a 'recourse' vendor programme and what is the vendor's obligation?",
        options: {
          a: "The vendor has no obligations once the sale is made",
          b: "The vendor agrees to repurchase or replace equipment or contracts that default, providing the leasing company with credit support",
          c: "The leasing company has recourse to the equipment only",
          d: "Recourse runs from the vendor to the lessee"
        },
        correctAnswer: "b"
      },
      {
        id: "q8",
        text: "What is a 'non-recourse' vendor programme and why would a vendor prefer it?",
        options: {
          a: "A programme where the vendor bears all credit losses",
          b: "A programme where the leasing company bears the full credit risk and the vendor has no obligation beyond the sale; the vendor prefers this as it eliminates credit liability from its balance sheet",
          c: "A programme where neither party bears credit risk",
          d: "A programme limited to government customers"
        },
        correctAnswer: "b"
      },
      {
        id: "q9",
        text: "What is a 'vendor subsidy' or 'rate buy-down' programme?",
        options: {
          a: "A programme where the government subsidises vendor lease rates",
          b: "An arrangement where the vendor uses a portion of its profit margin to reduce the customer's lease rate, making the financing more attractive and driving higher equipment sales",
          c: "A programme where the leasing company subsidises its own rates",
          d: "A loyalty discount programme for long-term vendors"
        },
        correctAnswer: "b"
      },
      {
        id: "q10",
        text: "What makes a vendor leasing programme strategically valuable to both the equipment vendor and the leasing company?",
        options: {
          a: "It only benefits the leasing company",
          b: "The vendor gains a financing tool that accelerates sales, improves customer retention, and provides end-of-term refresh opportunities; the leasing company gains a consistent, low-cost deal flow through the vendor's sales network",
          c: "It only benefits the vendor",
          d: "It is only valuable for large enterprises"
        },
        correctAnswer: "b"
      }
    ]
  },

  {
    id: "c28",
    title: "Go-to-Market Strategy",
    description: "Develop and execute effective go-to-market strategies for leasing products and programmes.",
    questions: [
      {
        id: "q1",
        text: "What is a 'go-to-market strategy' (GTM) in the context of a leasing company?",
        options: {
          a: "A strategy for taking the company public",
          b: "A plan that defines how the company will reach its target customers, deliver its value proposition, and achieve competitive advantage through its chosen distribution channels and marketing approach",
          c: "A strategy for entering new geographic markets only",
          d: "A product launch timeline"
        },
        correctAnswer: "b"
      },
      {
        id: "q2",
        text: "What is 'target market segmentation' and why is it the foundation of a GTM strategy?",
        options: {
          a: "Setting sales targets for each market",
          b: "Dividing the total addressable market into distinct groups by industry, size, equipment type, or need so that the value proposition and sales approach can be precisely tailored to each segment",
          c: "Segmenting the sales team by territory",
          d: "Identifying competitors in each market"
        },
        correctAnswer: "b"
      },
      {
        id: "q3",
        text: "What is a 'total addressable market' (TAM) and how is it used in GTM planning?",
        options: {
          a: "The total number of employees in the leasing company",
          b: "The total revenue opportunity available if the company captured 100% of its target market; used to size the opportunity and prioritise resource allocation",
          c: "The total value of leases currently on the company's books",
          d: "The total number of lessees in the company's existing portfolio"
        },
        correctAnswer: "b"
      },
      {
        id: "q4",
        text: "What is a 'distribution channel strategy' in leasing GTM?",
        options: {
          a: "The strategy for distributing equipment to clients",
          b: "The plan for how the leasing company will reach and serve customers — directly, through brokers, through vendor partnerships, or via digital platforms",
          c: "The strategy for distributing lease payments to investors",
          d: "The internal distribution of sales leads"
        },
        correctAnswer: "b"
      },
      {
        id: "q5",
        text: "What is 'competitive positioning' and how does it shape a leasing GTM strategy?",
        options: {
          a: "Positioning the company as the only provider in the market",
          b: "Defining how the leasing company's offering differs from competitors in ways that are meaningful to target customers — such as speed, specialisation, service, or pricing — to create a defensible market position",
          c: "Monitoring competitor pricing on a weekly basis",
          d: "Positioning for competitive tender processes only"
        },
        correctAnswer: "b"
      },
      {
        id: "q6",
        text: "What is the role of 'digital channels' in a modern leasing GTM strategy?",
        options: {
          a: "Digital channels are irrelevant for B2B leasing",
          b: "Digital channels — including websites, online application portals, CRM systems, and social media — enable the leasing company to generate leads, streamline originations, and build brand awareness cost-effectively",
          c: "Digital channels only support consumer leasing programmes",
          d: "Digital channels replace all human sales roles"
        },
        correctAnswer: "b"
      },
      {
        id: "q7",
        text: "What does 'sales enablement' mean in a leasing GTM context?",
        options: {
          a: "Enabling the sales team to work remotely",
          b: "Providing the sales team with the tools, training, content, and processes they need to effectively communicate the value proposition and convert prospects to clients",
          c: "Enabling the sales team to set their own targets",
          d: "Automating the entire sales process"
        },
        correctAnswer: "b"
      },
      {
        id: "q8",
        text: "What is a 'launch plan' in a leasing GTM strategy and what should it include?",
        options: {
          a: "A plan for launching new equipment models",
          b: "A phased plan covering target segment selection, value proposition, sales training, marketing collateral, channel activation, pricing, and success metrics for bringing a new programme to market",
          c: "A plan for launching the company's IPO",
          d: "A plan for launching a new office location"
        },
        correctAnswer: "b"
      },
      {
        id: "q9",
        text: "What is 'key account management' (KAM) and why is it important in a leasing GTM strategy?",
        options: {
          a: "Managing the company's bank accounts",
          b: "A structured approach to building deep, strategic relationships with the most valuable clients or vendor partners, maximising long-term revenue and retention",
          c: "Managing the accounts receivable ledger",
          d: "A programme for new client acquisition only"
        },
        correctAnswer: "b"
      },
      {
        id: "q10",
        text: "How do 'success metrics' and 'KPIs' function within a leasing GTM plan?",
        options: {
          a: "They are optional additions to a GTM plan",
          b: "They define measurable targets — such as origination volume, conversion rates, cost of acquisition, and customer retention — against which the effectiveness of the GTM strategy is tracked and optimised",
          c: "They are used only for internal reporting to shareholders",
          d: "They replace the need for a marketing budget"
        },
        correctAnswer: "b"
      }
    ]
  },

  {
    id: "c29",
    title: "Profit Dynamics in Vendor Leasing",
    description: "Understand the profit drivers, cost structures, and optimisation strategies in vendor leasing programmes.",
    questions: [
      {
        id: "q1",
        text: "What is the primary source of profit in a vendor leasing programme for the leasing company?",
        options: {
          a: "Equipment sales commissions",
          b: "The spread between the lease rate charged to the customer and the leasing company's cost of funds, plus income from fees and residual value realisation",
          c: "Insurance premiums collected from lessees",
          d: "Late payment penalty income"
        },
        correctAnswer: "b"
      },
      {
        id: "q2",
        text: "What is 'deal economics' in the context of a vendor lease transaction?",
        options: {
          a: "The macroeconomic environment affecting lease demand",
          b: "The analysis of the revenue, cost of funds, credit losses, servicing costs, and residual value to determine the net profit contribution of an individual lease transaction",
          c: "The economics of the vendor's own business",
          d: "The total economic value of leased equipment"
        },
        correctAnswer: "b"
      },
      {
        id: "q3",
        text: "How does 'volume' affect profitability in a vendor leasing programme?",
        options: {
          a: "Higher volume always reduces profitability",
          b: "Higher volume spreads fixed operational costs over more transactions, improving the cost per deal and overall programme profitability — provided credit quality is maintained",
          c: "Volume has no impact on fixed costs",
          d: "Lower volume always results in higher profit margins"
        },
        correctAnswer: "b"
      },
      {
        id: "q4",
        text: "What is 'residual value income' and how does it contribute to vendor leasing profitability?",
        options: {
          a: "Income from charging residual value fees to lessees",
          b: "The profit realised when equipment returned at end of lease is sold or re-leased at a price exceeding the lessor's book value — a key upside in well-managed operating lease programmes",
          c: "The income from residual value insurance premiums",
          d: "The income from the final lease payment"
        },
        correctAnswer: "b"
      },
      {
        id: "q5",
        text: "What is 'fee income' in vendor leasing and how does it enhance programme profitability?",
        options: {
          a: "Fees charged by the vendor to the leasing company",
          b: "Income from documentation fees, origination fees, and ancillary charges that supplement the interest spread and improve the overall economics of each transaction",
          c: "Fees earned from managing equipment maintenance",
          d: "Regulatory fees charged to lessees"
        },
        correctAnswer: "b"
      },
      {
        id: "q6",
        text: "How does credit loss impact vendor leasing programme profitability?",
        options: {
          a: "Credit losses have no impact on profitability",
          b: "Credit losses directly reduce net income and, if unexpected, erode or eliminate the interest spread; pricing must adequately anticipate expected losses to maintain target returns",
          c: "Credit losses are always covered by insurance",
          d: "Credit losses only affect the vendor, not the leasing company"
        },
        correctAnswer: "b"
      },
      {
        id: "q7",
        text: "What is 'cost of origination' and how should it be managed in a vendor programme?",
        options: {
          a: "The cost of manufacturing the leased equipment",
          b: "The total cost to source, underwrite, and document a new lease transaction; it must be managed against deal size and margin to ensure each transaction is economically viable",
          c: "The origination fee charged to the lessee",
          d: "The cost of the vendor's sales force"
        },
        correctAnswer: "b"
      },
      {
        id: "q8",
        text: "What is 'cross-sell and upsell' income in a vendor leasing context?",
        options: {
          a: "Income from selling equipment across different vendors",
          b: "Revenue generated by offering complementary products — such as insurance, maintenance, or extended terms — to existing clients, improving lifetime value per customer",
          c: "Income from upselling more expensive equipment",
          d: "Revenue from selling the lease portfolio to another funder"
        },
        correctAnswer: "b"
      },
      {
        id: "q9",
        text: "What is 'portfolio run-off' and how does it affect profitability planning?",
        options: {
          a: "Equipment running off the end of the production line",
          b: "The natural decline in the outstanding portfolio balance as leases mature and are not replaced; without sufficient new originations, income declines and fixed costs represent a larger proportion of revenue",
          c: "Customers running off to competitors",
          d: "The decline in residual values over time"
        },
        correctAnswer: "b"
      },
      {
        id: "q10",
        text: "What is the 'profitability per deal' metric and why is it important for vendor programme management?",
        options: {
          a: "The total revenue generated by a vendor programme",
          b: "The net income contribution per lease transaction after all costs (funding, credit losses, origination, servicing, and tax); it reveals whether the programme is generating adequate returns at the transaction level",
          c: "The profit shared with the vendor per deal",
          d: "The gross profit from equipment sales per deal"
        },
        correctAnswer: "b"
      }
    ]
  },

  {
    id: "c30",
    title: "Foundations of Vendor Leasing",
    description: "Build a solid understanding of the fundamentals of vendor leasing and how it creates value for all parties.",
    questions: [
      {
        id: "q1",
        text: "What is 'vendor leasing' and how does it differ from direct leasing?",
        options: {
          a: "Vendor leasing is only available for vehicle fleets",
          b: "Vendor leasing is a financing arrangement where a leasing company partners with an equipment vendor to offer financing at the point of sale; in direct leasing, the lessor approaches the end customer independently without a vendor intermediary",
          c: "Vendor leasing is always provided by banks, not leasing companies",
          d: "There is no difference between vendor and direct leasing"
        },
        correctAnswer: "b"
      },
      {
        id: "q2",
        text: "What are the three key parties in a typical vendor leasing transaction?",
        options: {
          a: "The manufacturer, distributor, and retailer",
          b: "The vendor (equipment seller), the lessee (customer), and the lessor (financing company)",
          c: "The bank, the government, and the lessee",
          d: "The insurance company, the vendor, and the bank"
        },
        correctAnswer: "b"
      },
      {
        id: "q3",
        text: "How does vendor leasing benefit the equipment vendor?",
        options: {
          a: "The vendor earns interest income on the lease",
          b: "Vendor leasing removes price as a barrier to the sale by converting the upfront cost to affordable monthly payments, accelerating sales cycles and improving customer retention",
          c: "The vendor retains ownership of the equipment",
          d: "The vendor avoids all credit risk"
        },
        correctAnswer: "b"
      },
      {
        id: "q4",
        text: "How does vendor leasing benefit the lessee (customer)?",
        options: {
          a: "The lessee receives a discount on the equipment purchase price",
          b: "The lessee gains access to equipment with minimal upfront cost, predictable payments, and often a convenient one-stop purchase and finance solution through the vendor",
          c: "The lessee immediately owns the equipment",
          d: "The lessee avoids all maintenance obligations"
        },
        correctAnswer: "b"
      },
      {
        id: "q5",
        text: "What is a 'vendor agreement' or 'programme agreement' in vendor leasing?",
        options: {
          a: "An agreement between the vendor and the equipment manufacturer",
          b: "A formal contract between the leasing company and the vendor defining the terms of their financing partnership — including the programme structure, vendor responsibilities, recourse arrangements, and pricing parameters",
          c: "An agreement between the lessee and the vendor for equipment maintenance",
          d: "A legal agreement governing equipment warranties"
        },
        correctAnswer: "b"
      },
      {
        id: "q6",
        text: "What is 'point of sale financing' in a vendor leasing context?",
        options: {
          a: "Financing provided at the point of equipment sale, allowing the customer to apply for and receive a lease decision immediately — removing friction from the purchase process",
          b: "Financing for the vendor's own purchases",
          c: "A cash discount offered at the point of sale",
          d: "Financing for the vendor's retail outlet"
        },
        correctAnswer: "a"
      },
      {
        id: "q7",
        text: "What is the 'end-of-term refresh cycle' and why is it valuable in vendor leasing?",
        options: {
          a: "The process of cleaning equipment at end of lease",
          b: "The natural cycle where leases expire, equipment is returned, and lessees upgrade to new equipment — creating recurring revenue for the vendor and the leasing company",
          c: "The cycle of refreshing the vendor's product catalogue",
          d: "The annual programme review process"
        },
        correctAnswer: "b"
      },
      {
        id: "q8",
        text: "What is 'application scoring' in a vendor leasing programme?",
        options: {
          a: "Scoring the quality of the vendor's application to join the programme",
          b: "An automated or semi-automated credit evaluation process that quickly assesses a customer's creditworthiness at the point of sale, enabling fast decisions and minimising friction",
          c: "A scoring system for comparing different vendor programmes",
          d: "A method for scoring the condition of equipment"
        },
        correctAnswer: "b"
      },
      {
        id: "q9",
        text: "What is 'vendor training' and why is it essential for a successful vendor leasing programme?",
        options: {
          a: "Training the vendor on equipment operation",
          b: "Educating the vendor's sales staff on how to present, position, and originate lease financing to customers — ensuring high-quality deal flow and reducing errors in applications",
          c: "Training the vendor on accounting standards",
          d: "Training the vendor to underwrite credit independently"
        },
        correctAnswer: "b"
      },
      {
        id: "q10",
        text: "What is a 'programme review' in vendor leasing management and why is it conducted regularly?",
        options: {
          a: "A review of the vendor's equipment catalogue",
          b: "A periodic assessment of the programme's performance covering origination volume, credit quality, profitability, and relationship health — enabling the parties to identify improvements and renegotiate terms if necessary",
          c: "A compliance audit by a regulatory body",
          d: "A review of the lessee's payment history"
        },
        correctAnswer: "b"
      }
    ]
  },

  {
    id: "c31",
    title: "Lessee Accounting under IFRS 16",
    description: "Master the lessee accounting requirements under IFRS 16, from recognition through to disclosure.",
    questions: [
      {
        id: "q1",
        text: "What two items must a lessee recognise on the balance sheet at lease commencement under IFRS 16?",
        options: {
          a: "A lease expense and a lease creditor",
          b: "A right-of-use (ROU) asset and a corresponding lease liability",
          c: "A finance cost and a depreciation charge",
          d: "A prepayment and a deferred tax liability"
        },
        correctAnswer: "b"
      },
      {
        id: "q2",
        text: "How is the lease liability initially measured under IFRS 16?",
        options: {
          a: "At the total undiscounted future lease payments",
          b: "At the present value of future lease payments, discounted at the rate implicit in the lease or the lessee's incremental borrowing rate",
          c: "At the fair value of the underlying asset",
          d: "At the equipment's purchase price less expected residual value"
        },
        correctAnswer: "b"
      },
      {
        id: "q3",
        text: "What costs are included in the initial measurement of the right-of-use asset?",
        options: {
          a: "Only the initial lease liability",
          b: "The initial lease liability, lease payments made at or before commencement, initial direct costs, and estimated dismantling/restoration costs",
          c: "Only the initial direct costs",
          d: "The fair value of the equipment plus transaction costs"
        },
        correctAnswer: "b"
      },
      {
        id: "q4",
        text: "How is the right-of-use asset depreciated under IFRS 16?",
        options: {
          a: "It is not depreciated — it remains at cost",
          b: "On a straight-line basis over the shorter of the lease term and the asset's useful life, unless another systematic method is more appropriate",
          c: "Using the reducing balance method only",
          d: "It is amortised using the effective interest method"
        },
        correctAnswer: "b"
      },
      {
        id: "q5",
        text: "How is the lease liability subsequently measured after initial recognition?",
        options: {
          a: "It remains at the initial measurement throughout the lease",
          b: "The liability is increased by interest accrued (unwinding of discount) and reduced by lease payments made, with reassessment when certain events occur",
          c: "It is reduced on a straight-line basis",
          d: "It is revalued to fair value at each reporting date"
        },
        correctAnswer: "b"
      },
      {
        id: "q6",
        text: "What is the income statement impact of a lease under IFRS 16 lessee accounting?",
        options: {
          a: "A single operating lease expense on a straight-line basis",
          b: "Depreciation of the ROU asset (typically in operating expenses) and interest expense on the lease liability (in finance costs), front-loading total expense compared to straight-line",
          c: "Only a finance cost in the income statement",
          d: "No income statement impact — only balance sheet effects"
        },
        correctAnswer: "b"
      },
      {
        id: "q7",
        text: "Under IFRS 16, where are lease payments presented in the cash flow statement?",
        options: {
          a: "Entirely within operating activities",
          b: "The principal component within financing activities and the interest component within either financing or operating activities per the entity's accounting policy",
          c: "Entirely within investing activities",
          d: "Entirely within financing activities"
        },
        correctAnswer: "b"
      },
      {
        id: "q8",
        text: "What triggers a remeasurement of the lease liability under IFRS 16?",
        options: {
          a: "Every year at the reporting date",
          b: "Changes in the lease term, changes in the assessment of a purchase option, changes in amounts expected to be payable under residual value guarantees, or changes in the index or rate used for variable payments",
          c: "Changes in the market value of the underlying asset",
          d: "Changes in the lessee's incremental borrowing rate only"
        },
        correctAnswer: "b"
      },
      {
        id: "q9",
        text: "What are the two practical expedients available to lessees under IFRS 16?",
        options: {
          a: "Exemption for leases of real estate and exemption for leases of vehicles",
          b: "Exemption for short-term leases (12 months or less at commencement) and exemption for leases of low-value assets",
          c: "Exemption for variable payment leases and exemption for cross-border leases",
          d: "Exemption for operating leases and exemption for finance leases"
        },
        correctAnswer: "b"
      },
      {
        id: "q10",
        text: "What disclosure must a lessee provide in its financial statements under IFRS 16?",
        options: {
          a: "Only the total future minimum lease payments",
          b: "Quantitative and qualitative information enabling users to assess the nature, timing, and amounts of lease transactions — including a maturity analysis of lease liabilities, depreciation charges, interest expense, and total cash outflows",
          c: "Only the carrying value of right-of-use assets",
          d: "Only the lease liability balance at year end"
        },
        correctAnswer: "b"
      }
    ]
  },

  {
    id: "c32",
    title: "Introduction to IFRS 16",
    description: "Gain a clear foundational understanding of IFRS 16 — its scope, objectives, and key concepts.",
    questions: [
      {
        id: "q1",
        text: "What problem did IFRS 16 primarily seek to solve?",
        options: {
          a: "To simplify lease documentation for lessees",
          b: "To bring transparency to lessee financial statements by requiring most leases to be recognised on the balance sheet, eliminating the widespread use of off-balance-sheet operating leases",
          c: "To standardise lease payment terms globally",
          d: "To reduce the cost of leasing for small businesses"
        },
        correctAnswer: "b"
      },
      {
        id: "q2",
        text: "When did IFRS 16 become effective?",
        options: {
          a: "1 January 2013",
          b: "1 January 2019",
          c: "1 January 2021",
          d: "1 January 2025"
        },
        correctAnswer: "b"
      },
      {
        id: "q3",
        text: "Which standard did IFRS 16 replace?",
        options: {
          a: "IAS 17",
          b: "IFRS 9",
          c: "IAS 39",
          d: "IFRS 15"
        },
        correctAnswer: "a"
      },
      {
        id: "q4",
        text: "Under IFRS 16, what is the definition of a lease?",
        options: {
          a: "Any contract involving the payment of a regular fee for the use of an asset",
          b: "A contract, or part of a contract, that conveys the right to control the use of an identified asset for a period of time in exchange for consideration",
          c: "Any contract where title to an asset transfers at the end of the term",
          d: "A contract for the purchase of an asset through instalment payments"
        },
        correctAnswer: "b"
      },
      {
        id: "q5",
        text: "What are the two key elements that determine whether a contract contains a lease under IFRS 16?",
        options: {
          a: "The contract must be in writing and signed by both parties",
          b: "There must be an identified asset and the customer must have the right to control the use of that asset throughout the period of use",
          c: "The contract must specify a fixed term and a fixed payment",
          d: "The asset must be tangible and the payments must be monthly"
        },
        correctAnswer: "b"
      },
      {
        id: "q6",
        text: "Which entities are required to apply IFRS 16?",
        options: {
          a: "All companies globally",
          b: "Entities that prepare financial statements in accordance with IFRS, including both lessees and lessors",
          c: "Only listed companies in the European Union",
          d: "Only lessors — lessees apply ASC 842"
        },
        correctAnswer: "b"
      },
      {
        id: "q7",
        text: "What are the two types of leases recognised under IFRS 16 for lessors?",
        options: {
          a: "Short-term and long-term leases",
          b: "Finance leases and operating leases",
          c: "Recognised and unrecognised leases",
          d: "On-balance-sheet and off-balance-sheet leases"
        },
        correctAnswer: "b"
      },
      {
        id: "q8",
        text: "What is meant by 'right of substitution' and how does it affect the lease assessment?",
        options: {
          a: "The lessee's right to substitute one piece of equipment for another",
          b: "If the supplier has a substantive right to substitute the asset throughout the period of use, the contract does not contain a lease — because the customer does not control a specific identified asset",
          c: "The lessor's right to substitute the lessee",
          d: "The right to substitute cash payments for equipment returns"
        },
        correctAnswer: "b"
      },
      {
        id: "q9",
        text: "What is the scope exclusion for 'low-value assets' under IFRS 16?",
        options: {
          a: "Assets with a cost of less than $1,000",
          b: "Lessees may apply a practical expedient to not recognise leases of underlying assets that are of low value when new (commonly interpreted as below approximately USD 5,000), expensing payments on a straight-line basis instead",
          c: "Assets that depreciate to zero within 12 months",
          d: "All assets under $50,000 original cost"
        },
        correctAnswer: "b"
      },
      {
        id: "q10",
        text: "Why is IFRS 16 considered a significant improvement in transparency over its predecessor IAS 17?",
        options: {
          a: "Because it simplifies lease accounting to a single journal entry",
          b: "Because it ensures that all material lease obligations are visible on the lessee's balance sheet, allowing investors and analysts to see the true extent of a company's financial commitments rather than relying on footnote disclosures",
          c: "Because it eliminates the need for lease disclosures",
          d: "Because it reduces the number of leases companies can enter into"
        },
        correctAnswer: "b"
      }
    ]
  },

  {
    id: "c33",
    title: "Lessor Accounting under IFRS 16",
    description: "Understand how lessors classify and account for leases under IFRS 16.",
    questions: [
      {
        id: "q1",
        text: "How does IFRS 16 lessor accounting differ fundamentally from lessee accounting?",
        options: {
          a: "Lessors apply a single model for all leases, just like lessees",
          b: "IFRS 16 retains the IAS 17 dual classification model for lessors — finance leases and operating leases — with no single on-balance-sheet model, unlike the single lessee model",
          c: "Lessors are exempt from IFRS 16",
          d: "Lessor accounting under IFRS 16 is identical to IAS 17"
        },
        correctAnswer: "b"
      },
      {
        id: "q2",
        text: "How does a lessor classify a lease as a finance lease under IFRS 16?",
        options: {
          a: "When the lease term is more than 12 months",
          b: "When the lease transfers substantially all the risks and rewards incidental to ownership of the underlying asset to the lessee",
          c: "When the lessee has a purchase option",
          d: "When the lease is for equipment with a value above $50,000"
        },
        correctAnswer: "b"
      },
      {
        id: "q3",
        text: "How does a lessor account for a finance lease on initial recognition?",
        options: {
          a: "By keeping the asset on the balance sheet and recognising lease income",
          b: "By derecognising the underlying asset and recognising a net investment in the lease — the present value of future lease payments — as a financial receivable",
          c: "By recognising a right-of-use asset and a lease liability",
          d: "By recording the full lease payments as deferred revenue"
        },
        correctAnswer: "b"
      },
      {
        id: "q4",
        text: "What is the 'net investment in a finance lease' for a lessor?",
        options: {
          a: "The lessor's equity investment in the leasing company",
          b: "The gross investment in the lease (total future lease payments plus unguaranteed residual value) discounted at the rate implicit in the lease",
          c: "The fair value of the underlying asset at commencement",
          d: "The outstanding principal on the lessor's borrowings"
        },
        correctAnswer: "b"
      },
      {
        id: "q5",
        text: "How does a lessor recognise income on a finance lease over the lease term?",
        options: {
          a: "By recognising equal income in each period",
          b: "By recognising finance income using the effective interest method, allocating income over the lease term to produce a constant periodic rate of return on the net investment",
          c: "By recognising all income at commencement",
          d: "By recognising income only when cash is received"
        },
        correctAnswer: "b"
      },
      {
        id: "q6",
        text: "How does a lessor account for an operating lease?",
        options: {
          a: "By derecognising the asset and recognising a receivable",
          b: "By retaining the underlying asset on the balance sheet, continuing to depreciate it, and recognising lease income on a straight-line or other systematic basis over the lease term",
          c: "By recognising the present value of future payments as revenue upfront",
          d: "By recording the equipment at fair value at each reporting date"
        },
        correctAnswer: "b"
      },
      {
        id: "q7",
        text: "What happens when a lessor modifies an operating lease?",
        options: {
          a: "The lease must always be reclassified as a finance lease",
          b: "If the modification expands the scope or extends the term, it is accounted for as a new lease from the effective date of the modification; if not, the lessor adjusts income recognition",
          c: "All modifications are treated as terminations and new leases",
          d: "Modifications have no accounting impact on the lessor"
        },
        correctAnswer: "b"
      },
      {
        id: "q8",
        text: "What is a 'manufacturer or dealer lessor' and how is the profit on sale recognised?",
        options: {
          a: "A lessor that manufactures or sells goods and uses leasing as a promotional tool; under a finance lease, it recognises revenue and cost of goods sold as if an outright sale occurred, plus finance income over the lease term",
          b: "A lessor that only leases to manufacturers",
          c: "A lessor that manufactures its own lease documentation",
          d: "A dealer that acts as an intermediary but never takes title"
        },
        correctAnswer: "a"
      },
      {
        id: "q9",
        text: "How must lessors present finance lease receivables on the balance sheet?",
        options: {
          a: "As a single line item at the gross lease payment amount",
          b: "As the net investment in the lease, typically split between current and non-current portions, reflecting the present value of future cash flows",
          c: "As a tangible fixed asset alongside owned equipment",
          d: "Off-balance-sheet in footnote disclosures only"
        },
        correctAnswer: "b"
      },
      {
        id: "q10",
        text: "What key disclosure must a lessor provide under IFRS 16?",
        options: {
          a: "Only the total lease income received in the period",
          b: "Qualitative and quantitative disclosures enabling users to assess the lessor's risk exposure — including a maturity analysis of lease receivables (finance leases) or undiscounted future payments (operating leases), significant judgements, and risk management information",
          c: "Only the carrying value of assets under operating leases",
          d: "Only the identity of major lessees"
        },
        correctAnswer: "b"
      }
    ]
  }
];