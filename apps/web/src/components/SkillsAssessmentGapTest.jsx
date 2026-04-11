import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Target, CheckCircle2, RotateCcw, BookOpen, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

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
  ]
};

// ─── Course Recommendations ──────────────────────────────────────────────────

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
      "Structuring Tax-Efficient Leases for Clients"
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
      "Building a High-Performance Lease Portfolio"
    ]
  },
  'Business Owner': {
    beginner: [
      "Lease vs. Buy: Making the Right Decision",
      "Understanding Your Lease Agreement",
      "Cash Flow Planning with Equipment Finance"
    ],
    intermediate: [
      "Operating vs. Capital Leases: What It Means for Your Business",
      "End-of-Lease Options and Strategies",
      "Using Leasing for Strategic Growth"
    ],
    advanced: [
      "Sale-Leaseback as a Capital Strategy",
      "Advanced Lease Negotiation for Business Owners",
      "Managing Lease Obligations on Your Balance Sheet"
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
      "Bundled and Managed Services Strategies"
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
      "Pricing Strategies and Cost of Funds"
    ],
    advanced: [
      "Advanced Securitization Structures",
      "Portfolio Risk Modeling: LGD and PD",
      "Go-to-Market Strategy for Funders"
    ]
  }
};

// ─── Results Component ───────────────────────────────────────────────────────

const AssessmentResults = ({ score, role, gaps, correctCount, totalCount, onRetake }) => {
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
  const roleCourses = COURSES[role];

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
      className="space-y-8"
    >
      {/* Score */}
      <div className="text-center">
        <div className={`inline-flex flex-col items-center justify-center w-32 h-32 rounded-full ${levelBg} border ${levelBorder} mb-4`}>
          <span className={`text-4xl font-bold ${levelColor}`}>{score}%</span>
          <span className="text-xs text-slate-400 mt-1">{correctCount}/{totalCount} correct</span>
        </div>
        <div className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${levelBg} ${levelColor} border ${levelBorder} mb-3`}>
          {level} Level
        </div>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          {score >= 80
            ? `Strong performance. Your ${role.toLowerCase()} leasing knowledge is well-developed. Focus on the advanced courses to sharpen specialist skills.`
            : score >= 50
            ? `Good foundation. A few knowledge gaps remain — the recommended courses below will help you level up.`
            : `This assessment has identified areas to focus on. Start with the beginner courses to build a solid foundation.`}
        </p>
      </div>

      {/* Gaps */}
      {uniqueGaps.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-400" />
            Knowledge gaps identified
          </h3>
          <div className="space-y-2">
            {uniqueGaps.map((gap, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/10">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                <span className="text-sm text-slate-300">{gap}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Course Recommendations */}
      <div>
        <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-blue-400" />
          Recommended courses for you
        </h3>
        <div className="space-y-2">
          {recommendedLevels.map(lvl =>
            roleCourses[lvl].map((course, i) => (
              <div key={`${lvl}-${i}`} className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ${tagStyles[lvl]}`}>
                  {lvl.charAt(0).toUpperCase() + lvl.slice(1)}
                </span>
                <span className="text-sm text-slate-200">{course}</span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Retake */}
      <div className="text-center pt-2">
        <Button
          variant="ghost"
          onClick={onRetake}
          className="text-slate-400 hover:text-white hover:bg-slate-800"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Take another assessment
        </Button>
      </div>
    </motion.div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const SkillsAssessmentGapTest = () => {
  const [role, setRole] = useState(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isComplete, setIsComplete] = useState(false);

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setCurrentIdx(0);
    setAnswers({});
    setIsComplete(false);
  };

  const handleAnswer = (optionIdx) => {
    setAnswers(prev => ({ ...prev, [currentIdx]: optionIdx }));
  };

  const handleNext = () => {
    if (currentIdx < QUESTION_BANK[role].length - 1) {
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
    setRole(null);
    setCurrentIdx(0);
    setAnswers({});
    setIsComplete(false);
  };

  // ── Results ──
  if (isComplete) {
    const questions = QUESTION_BANK[role];
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

    return (
      <AssessmentResults
        score={score}
        role={role}
        gaps={gaps}
        correctCount={correctCount}
        totalCount={questions.length}
        onRetake={resetTest}
      />
    );
  }

  // ── Role Selection ──
  if (!role) {
    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <Target className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Skills Gap Assessment</h2>
          <p className="text-slate-400">Select your role to begin a tailored 10-question evaluation of your leasing knowledge.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.keys(QUESTION_BANK).map((r) => (
            <motion.div
              key={r}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card
                className="glass-panel cursor-pointer hover:border-blue-500/50 transition-colors h-full"
                onClick={() => handleRoleSelect(r)}
              >
                <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                  <h3 className="text-xl font-semibold text-slate-200">{r}</h3>
                  <p className="text-sm text-slate-500">10-question {r.toLowerCase()} assessment</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // ── Quiz ──
  const questions = QUESTION_BANK[role];
  const currentQuestion = questions[currentIdx];
  const progress = (currentIdx / questions.length) * 100;
  const hasAnsweredCurrent = answers[currentIdx] !== undefined;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">{role} Assessment</span>
        <span className="text-sm font-medium text-blue-400">Question {currentIdx + 1} of {questions.length}</span>
      </div>

      <Progress value={progress} className="h-2 bg-slate-800" indicatorClassName="bg-blue-500" />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="min-h-[300px]"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 leading-snug">
            {currentQuestion.text}
          </h3>

          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = answers[currentIdx] === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-blue-600/20 border-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.15)]'
                      : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600'
                  }`}
                >
                  <span className="text-base pr-4">{option.text}</span>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                    isSelected ? 'border-blue-400 bg-blue-500' : 'border-slate-600 group-hover:border-slate-500'
                  }`}>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-white" />}
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-between pt-6 border-t border-slate-800">
        <Button
          variant="ghost"
          onClick={handlePrev}
          disabled={currentIdx === 0}
          className="text-slate-400 hover:text-white hover:bg-slate-800"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>

        <Button
          onClick={handleNext}
          disabled={!hasAnsweredCurrent}
          className="bg-blue-600 hover:bg-blue-500 text-white px-8"
        >
          {currentIdx === questions.length - 1 ? 'Submit Assessment' : 'Next Question'}
          {currentIdx !== questions.length - 1 && <ChevronRight className="w-4 h-4 ml-2" />}
        </Button>
      </div>
    </div>
  );
};

export default SkillsAssessmentGapTest;