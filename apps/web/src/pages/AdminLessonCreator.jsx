import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import pb from '@/lib/pocketbaseClient';
import { Button } from '@/components/ui/button';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const AdminLessonCreator = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      const allCourses = await pb.collection('courses').getFullList({
        sort: 'title',
        $autoCancel: false
      });
      setCourses(allCourses);
      
      // Auto-select "Advanced Lease Structuring" if found
      const targetCourse = allCourses.find(c => c.title.includes('Advanced Lease Structuring'));
      if (targetCourse) {
        setSelectedCourseId(targetCourse.id);
      }
    } catch (error) {
      console.error('Error loading courses:', error);
      toast({
        title: 'Error',
        description: 'Failed to load courses',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const createLessons = async () => {
    if (!selectedCourseId) {
      toast({
        title: 'Error',
        description: 'Please select a course first',
        variant: 'destructive'
      });
      return;
    }

    setCreating(true);
    try {
      const course = courses.find(c => c.id === selectedCourseId);
      
      // Get existing lessons to determine next order number
      const existingLessons = await pb.collection('lessons').getFullList({
        filter: `course_id = "${selectedCourseId}"`,
        sort: '-order',
        $autoCancel: false
      });
      
      const nextOrder = existingLessons.length > 0 ? existingLessons[0].order + 1 : 1;

      // Lesson 3.1: Sale-Leaseback Transactions
      const lesson31 = await pb.collection('lessons').create({
        course_id: selectedCourseId,
        title: 'Sale-Leaseback Transactions',
        description: 'Master the fundamentals of sale-leaseback transactions, including structure, advantages, considerations, and real-world applications.',
        order: nextOrder,
        duration: 60,
        content_type: 'text'
      }, { $autoCancel: false });

      await pb.collection('lesson_content').create({
        lesson_id: lesson31.id,
        content_body: `# Lesson 3.1: Sale-Leaseback Transactions

## Learning Objectives
By the end of this lesson, you will be able to:
- Understand the fundamentals and mechanics of sale-leaseback transactions
- Identify the four key phases of a sale-leaseback structure
- Evaluate the five primary advantages of sale-leaseback arrangements
- Assess the five critical considerations before entering a sale-leaseback
- Recognize and mitigate the five major risks associated with sale-leasebacks
- Apply sale-leaseback concepts through a detailed real-world case study

---

## 1. Fundamentals of Sale-Leaseback Transactions

A **sale-leaseback** (also called a leaseback) is a financial transaction where an asset owner sells the asset to a buyer and immediately leases it back from the new owner. This arrangement allows the original owner to continue using the asset while converting the asset's equity into cash.

### Key Characteristics:
- **Seller becomes Lessee**: The original owner sells the asset but retains operational use
- **Buyer becomes Lessor**: The purchaser owns the asset and leases it back
- **Immediate Liquidity**: Converts illiquid assets into working capital
- **Operational Continuity**: No disruption to business operations
- **Off-Balance Sheet Financing**: Can improve financial ratios (depending on accounting treatment)

### Common Asset Types:
- Real estate (corporate headquarters, retail locations, warehouses)
- Manufacturing equipment and machinery
- Aircraft and transportation equipment
- Technology infrastructure and data centers

---

## 2. Sale-Leaseback Structure: Four Key Phases

### Phase 1: Asset Valuation and Sale Agreement
- Independent appraisal of the asset's fair market value
- Negotiation of sale price (typically at or near market value)
- Due diligence on asset condition and title
- Execution of purchase and sale agreement

### Phase 2: Lease Negotiation
- Determination of lease term (often 10-25 years for real estate)
- Calculation of lease payments based on:
  - Purchase price
  - Desired return on investment for lessor
  - Market lease rates
  - Credit quality of lessee
- Definition of maintenance and operating responsibilities
- Establishment of renewal and purchase options

### Phase 3: Transaction Closing
- Transfer of legal title to the buyer/lessor
- Simultaneous execution of the leaseback agreement
- Payment of sale proceeds to the seller/lessee
- Recording of the transaction with appropriate authorities

### Phase 4: Ongoing Lease Administration
- Regular lease payment schedule
- Compliance with lease covenants and conditions
- Asset maintenance and insurance obligations
- Exercise of renewal or purchase options at lease end

---

## 3. Five Advantages of Sale-Leaseback Transactions

### Advantage 1: Immediate Capital Access
- Unlocks equity tied up in owned assets
- Provides substantial cash infusion without traditional debt
- Enables funding for growth, acquisitions, or debt reduction
- **Example**: A retail chain sells 50 store locations for $100M and leases them back, using proceeds to expand into new markets

### Advantage 2: Improved Financial Ratios
- Reduces total assets on balance sheet
- Can improve return on assets (ROA) and return on equity (ROE)
- May enhance debt-to-equity ratios
- Potentially improves credit metrics and borrowing capacity

### Advantage 3: Operational Flexibility
- Maintains full operational control of the asset
- No disruption to business operations
- Converts fixed costs (ownership) to predictable operating expenses
- Allows focus on core business rather than asset management

### Advantage 4: Tax Benefits
- Lease payments are typically fully tax-deductible as operating expenses
- Avoids depreciation recapture taxes on asset sale
- Can accelerate tax deductions compared to depreciation schedules
- **Note**: Tax treatment varies by jurisdiction and transaction structure

### Advantage 5: Risk Transfer
- Transfers residual value risk to the lessor
- Shifts obsolescence risk (especially for technology assets)
- Reduces exposure to asset value fluctuations
- Lessor assumes certain property management responsibilities

---

## 4. Five Critical Considerations

### Consideration 1: Long-Term Cost Analysis
- Compare total lease payments over the lease term to:
  - Current asset carrying value
  - Alternative financing costs
  - Opportunity cost of capital
- **Calculation**: Total lease payments may exceed asset value by 20-40% over a 15-year term

### Consideration 2: Loss of Asset Appreciation
- Seller forfeits future appreciation in asset value
- Particularly significant for real estate in appreciating markets
- Must weigh immediate liquidity needs against long-term value growth
- **Example**: A property worth $10M today might appreciate to $15M in 10 years

### Consideration 3: Lease Terms and Flexibility
- Long-term commitment to lease payments (often 10-25 years)
- Limited ability to relocate or modify operations
- Renewal and purchase option terms
- Early termination penalties and conditions

### Consideration 4: Accounting and Financial Reporting Impact
- Under ASC 842 (US GAAP) and IFRS 16, most leases appear on balance sheet
- Classification as operating vs. finance lease affects financial statements
- Impact on debt covenants and financial ratios
- Disclosure requirements for investors and stakeholders

### Consideration 5: Creditworthiness and Lease Pricing
- Lessee's credit rating significantly impacts lease rates
- Stronger credit = lower lease payments
- May require corporate guarantees or additional security
- Market conditions and investor appetite affect pricing

---

## 5. Five Major Risks

### Risk 1: Lease Payment Obligation Risk
- **Description**: Long-term commitment to fixed lease payments regardless of business performance
- **Impact**: Payments continue even if asset becomes underutilized or obsolete
- **Mitigation**: 
  - Negotiate sublease rights
  - Include performance-based payment adjustments
  - Maintain adequate cash reserves

### Risk 2: Loss of Control and Ownership Rights
- **Description**: Lessor owns the asset and may impose restrictions
- **Impact**: Limited ability to modify, improve, or dispose of the asset
- **Mitigation**:
  - Negotiate favorable use and modification rights in lease
  - Secure purchase options at predetermined prices
  - Include renewal rights at market rates

### Risk 3: Residual Value and End-of-Lease Risk
- **Description**: Uncertainty about asset condition and value at lease expiration
- **Impact**: May face high purchase price or need to vacate/replace asset
- **Mitigation**:
  - Negotiate fair market value purchase options
  - Include renewal options at favorable terms
  - Plan for asset replacement or relocation well in advance

### Risk 4: Counterparty and Lessor Default Risk
- **Description**: Lessor financial distress could complicate lease administration
- **Impact**: Potential disruption if lessor sells asset or enters bankruptcy
- **Mitigation**:
  - Conduct thorough due diligence on lessor financial strength
  - Negotiate non-disturbance agreements
  - Secure rights of first refusal if lessor sells the asset

### Risk 5: Market and Economic Risk
- **Description**: Changes in market conditions may make lease terms unfavorable
- **Impact**: Locked into above-market lease rates if market rates decline
- **Mitigation**:
  - Include market rate adjustment clauses
  - Negotiate periodic rent reviews
  - Maintain flexibility through shorter initial terms with renewal options

---

## 6. Case Study: SaleLeaseCorp Manufacturing Facility

### Background
**SaleLeaseCorp** is a mid-sized manufacturing company that owns a 200,000 sq ft production facility valued at $25 million. The company needs $20 million in capital to fund a major expansion into new product lines but wants to avoid traditional debt financing that would strain its debt-to-equity ratio.

### Transaction Structure

**Asset Details:**
- Property: 200,000 sq ft manufacturing facility
- Location: Industrial park with good transportation access
- Current Market Value: $25,000,000
- Age: 8 years old, well-maintained
- Remaining Useful Life: 30+ years

**Sale Terms:**
- Sale Price: $25,000,000 (at appraised fair market value)
- Buyer/Lessor: Institutional real estate investor
- Closing Date: January 1, 2026

**Leaseback Terms:**
- Lease Type: Triple Net (NNN) - tenant pays taxes, insurance, maintenance
- Initial Term: 15 years
- Annual Lease Payment: $2,125,000 (8.5% of sale price)
- Payment Schedule: Monthly payments of $177,083
- Renewal Options: Two 5-year options at fair market rent
- Purchase Option: Fair market value at end of initial term or any renewal
- Escalation: 2.5% annual increase in base rent

### Financial Analysis

**Year 1 Cash Flow Impact:**
- Cash Received from Sale: $25,000,000
- Less: Transaction Costs (2%): ($500,000)
- **Net Proceeds: $24,500,000**

**Annual Lease Obligations:**
- Year 1 Lease Payments: $2,125,000
- Year 5 Lease Payments: $2,345,000 (with 2.5% annual escalation)
- Year 10 Lease Payments: $2,590,000
- Year 15 Lease Payments: $2,860,000

**15-Year Total Cost:**
- Total Lease Payments: $36,750,000
- Less: Tax Benefit (assuming 25% rate): ($9,187,500)
- **Net After-Tax Cost: $27,562,500**

**Comparison to Alternative Financing:**
- Traditional Mortgage (75% LTV): $18,750,000 loan at 6.5% for 15 years
- Annual Debt Service: $1,960,000
- Total Interest Paid: $10,650,000
- **Sale-Leaseback provides $5.75M more capital upfront**

### Strategic Benefits Realized

1. **Capital for Growth**: $24.5M used to:
   - Purchase new manufacturing equipment: $12M
   - Acquire smaller competitor: $8M
   - Working capital for expansion: $4.5M

2. **Improved Financial Metrics**:
   - Debt-to-Equity Ratio: Improved from 1.8 to 1.2
   - Return on Assets: Increased from 8% to 12%
   - Current Ratio: Improved from 1.1 to 1.6

3. **Operational Continuity**:
   - No disruption to manufacturing operations
   - Retained full operational control of facility
   - Converted ownership costs to predictable lease expense

### Risks Managed

1. **Long-Term Commitment**: 15-year lease obligation accepted in exchange for immediate capital and improved financial position
2. **Loss of Appreciation**: Forfeited potential property appreciation, but gained higher returns from core business expansion
3. **Lease Rate Risk**: 2.5% annual escalation provides predictability; renewal options protect against excessive future increases
4. **Residual Value Risk**: Fair market value purchase option preserves ability to reacquire property if desired

### Outcome (After 3 Years)
- Revenue increased 45% due to expansion
- EBITDA margin improved from 12% to 16%
- Company successfully launched three new product lines
- Facility continues to operate efficiently under leaseback arrangement
- Management considers sale-leaseback a strategic success that enabled growth without excessive leverage

---

## Summary

Sale-leaseback transactions offer a powerful tool for unlocking capital tied up in owned assets while maintaining operational use. The four-phase structure—valuation and sale, lease negotiation, closing, and ongoing administration—provides a clear framework for execution. The five key advantages (capital access, improved ratios, operational flexibility, tax benefits, and risk transfer) must be carefully weighed against five critical considerations (long-term costs, loss of appreciation, lease terms, accounting impact, and creditworthiness).

Understanding and mitigating the five major risks (payment obligations, loss of control, residual value uncertainty, counterparty risk, and market risk) is essential for successful implementation. The SaleLeaseCorp case study demonstrates how a well-structured sale-leaseback can provide substantial capital for growth while improving financial metrics and maintaining operational continuity.

In the next lesson, we'll explore leveraged leases and syndication structures, which introduce additional complexity and opportunities for optimizing lease financing.`
      }, { $autoCancel: false });

      // Lesson 3.2: Leveraged Leases and Syndication
      const lesson32 = await pb.collection('lessons').create({
        course_id: selectedCourseId,
        title: 'Leveraged Leases and Syndication',
        description: 'Explore leveraged lease structures, syndication models, return calculations, and complex multi-party lease arrangements.',
        order: nextOrder + 1,
        duration: 60,
        content_type: 'text'
      }, { $autoCancel: false });

      await pb.collection('lesson_content').create({
        lesson_id: lesson32.id,
        content_body: `# Lesson 3.2: Leveraged Leases and Syndication

## Learning Objectives
By the end of this lesson, you will be able to:
- Understand the fundamentals and mechanics of leveraged lease transactions
- Identify the five key components of a leveraged lease structure
- Calculate equity and debt returns in leveraged lease arrangements
- Evaluate four different syndication structures for lease financing
- Assess five critical considerations in lease syndication
- Apply leveraged lease concepts through a detailed aircraft lease case study

---

## 1. Fundamentals of Leveraged Leases

A **leveraged lease** is a three-party lease transaction where the lessor (equity participant) finances only a portion of the asset's cost with equity, and borrows the remainder from one or more lenders (debt participants). The lessee makes lease payments that service both the equity and debt components.

### Key Characteristics:
- **Three-Party Structure**: Lessee, equity lessor, and debt lender(s)
- **Non-Recourse Debt**: Lenders typically have recourse only to the leased asset and lease payments
- **Tax Benefits**: Equity lessor claims depreciation and interest deductions
- **Leverage Amplification**: Equity returns are magnified through the use of debt
- **Complex Structure**: Requires sophisticated legal and financial structuring

### Typical Leverage Ratios:
- **Equity**: 20-40% of asset cost
- **Debt**: 60-80% of asset cost
- **Common Range**: 70-80% debt financing for investment-grade lessees

### Common Applications:
- Large aircraft leases (commercial jets, cargo planes)
- Rail equipment and rolling stock
- Maritime vessels and shipping containers
- Major infrastructure and energy projects
- High-value manufacturing equipment

---

## 2. Leveraged Lease Structure: Five Key Components

### Component 1: Equity Participant (Owner Lessor)
**Role and Responsibilities:**
- Provides 20-40% of asset cost as equity investment
- Holds legal title to the asset
- Claims tax benefits (depreciation, interest deductions)
- Bears residual value risk at lease end
- Receives equity returns from lease payments after debt service

**Return Expectations:**
- Target IRR: 12-18% on equity invested
- Returns enhanced by tax benefits and leverage
- Residual value upside potential

**Example**: In a $50M aircraft lease, equity participant invests $15M (30%) and expects 15% IRR

### Component 2: Debt Participant (Lender)
**Role and Responsibilities:**
- Provides 60-80% of asset cost as senior secured debt
- Holds first lien on the asset and assignment of lease payments
- Non-recourse or limited recourse to equity participant
- Receives fixed debt service from lease payments

**Security Package:**
- First priority security interest in the asset
- Assignment of lease and lease payments
- Debt service reserve account (typically 6-12 months)
- Insurance proceeds assignment

**Pricing:**
- Interest Rate: SOFR + 150-300 basis points (investment-grade lessee)
- Amortization: Typically matches or exceeds lease term
- Covenants: Debt service coverage ratio (DSCR) of 1.20-1.35x

**Example**: In a $50M aircraft lease, lender provides $35M (70%) at SOFR + 200 bps

### Component 3: Lessee (Asset User)
**Role and Responsibilities:**
- Uses the asset for business operations
- Makes lease payments sufficient to cover debt service and equity returns
- Maintains and insures the asset
- May have purchase or renewal options at lease end

**Lease Payment Structure:**
- Payments sized to cover:
  - Debt service (principal + interest)
  - Equity return requirements
  - Administrative costs and reserves
- Typically structured as level payments or step-up payments

**Credit Requirements:**
- Investment-grade credit rating preferred (BBB- or higher)
- Strong operating cash flows and debt service coverage
- Demonstrated ability to maintain and operate the asset type

### Component 4: Lease Payment Waterfall
**Priority of Payments:**
1. **Debt Service**: Principal and interest to lenders (first priority)
2. **Operating Expenses**: Insurance, taxes, administrative costs
3. **Reserves**: Maintenance reserves, debt service reserves
4. **Equity Distributions**: Remaining cash flow to equity participant

**Example Monthly Payment Allocation** ($500,000 total):
- Debt Service (P&I): $350,000 (70%)
- Operating Reserves: $50,000 (10%)
- Equity Distribution: $100,000 (20%)

### Component 5: Tax Benefits and Ownership
**Tax Advantages for Equity Participant:**
- **Depreciation Deductions**: Accelerated depreciation on full asset value (even though only 20-40% equity invested)
- **Interest Deductions**: Deduct interest paid on debt financing
- **Tax Deferral**: Depreciation shields early lease income from taxes
- **Residual Value**: Potential for capital gains treatment on asset sale

**Ownership Structure:**
- Equity participant holds legal title
- Special purpose entity (SPE) often used to isolate transaction
- Lenders hold security interest but not ownership

**Example Tax Benefit** (Year 1 on $50M asset):
- Depreciation (MACRS 7-year, 14.29%): $7,145,000
- Interest Expense (on $35M debt at 6%): $2,100,000
- **Total Tax Deductions**: $9,245,000
- **Tax Savings (at 25% rate)**: $2,311,250

---

## 3. Return Calculations in Leveraged Leases

### Equity Return Calculation

**Basic Formula:**
Equity IRR = NPV of (Equity Cash Flows + Tax Benefits + Residual Value) / Equity Investment

**Components of Equity Cash Flow:**
1. **Initial Investment**: Negative cash flow (equity contribution)
2. **Operating Cash Flow**: Lease payments minus debt service and expenses
3. **Tax Benefits**: Present value of depreciation and interest deductions
4. **Residual Value**: Estimated asset value at lease end (or renewal proceeds)

**Example Calculation** ($50M Aircraft, 12-Year Lease):

**Assumptions:**
- Asset Cost: $50,000,000
- Equity Investment: $15,000,000 (30%)
- Debt Financing: $35,000,000 (70%) at 6% interest, 12-year amortization
- Annual Lease Payment: $5,500,000
- Tax Rate: 25%
- Residual Value (Year 12): $18,000,000

**Year 1 Cash Flow:**
- Lease Payment Received: $5,500,000
- Debt Service (P&I): ($4,200,000)
- Operating Expenses: ($300,000)
- **Pre-Tax Cash Flow**: $1,000,000

**Year 1 Tax Benefit:**
- Depreciation (MACRS): $7,145,000
- Interest Expense: $2,100,000
- Total Deductions: $9,245,000
- Tax Savings (25%): $2,311,250

**Year 1 Total Equity Cash Flow:**
- Pre-Tax Cash Flow: $1,000,000
- Tax Benefit: $2,311,250
- **Total**: $3,311,250

**Equity IRR Calculation** (simplified):
- Initial Investment: ($15,000,000)
- Years 1-12 Cash Flows: $3,311,250 to $1,500,000 (declining as debt pays down)
- Year 12 Residual: $18,000,000
- **Equity IRR**: ~16.5%

### Debt Return Calculation

**Lender Perspective:**
- Principal Amount: $35,000,000
- Interest Rate: 6.0% (SOFR + 200 bps)
- Term: 12 years, monthly payments
- **All-In Yield**: 6.0% (assuming no defaults or prepayments)

**Debt Service Coverage Ratio (DSCR):**
DSCR = Lease Payments / Debt Service
DSCR = $5,500,000 / $4,200,000 = 1.31x

**Lender Risk Metrics:**
- Loan-to-Value (LTV): 70% initially, declining as debt amortizes
- DSCR: 1.31x (healthy coverage)
- Lessee Credit: Investment-grade (low default risk)
- Asset Liquidity: Commercial aircraft (strong secondary market)

---

## 4. Four Syndication Structures

### Structure 1: Single Equity, Multiple Debt (Club Deal)
**Description:**
- One equity participant owns 100% of equity
- Multiple lenders provide debt in a syndicated loan structure
- Lead arranger coordinates debt syndicate

**Advantages:**
- Simplified equity ownership and decision-making
- Diversified debt sources reduce funding risk
- Competitive debt pricing through syndication

**Example:**
- Equity: Single institutional investor ($15M)
- Debt: 5 banks each providing $7M ($35M total)
- Lead Bank: Coordinates syndicate and holds largest share

**Typical Use Cases:**
- Large aircraft or rail equipment leases
- Transactions requiring $50M+ in debt financing
- Investment-grade lessees with strong credit

### Structure 2: Multiple Equity, Single Debt (Equity Syndicate)
**Description:**
- Multiple equity participants share ownership
- Single lender or small group provides debt
- Equity participants form partnership or LLC

**Advantages:**
- Spreads equity risk among multiple investors
- Allows smaller investors to participate in large transactions
- Simplified debt structure and administration

**Example:**
- Equity: 3 investors each contributing $5M ($15M total)
- Debt: Single lender providing $35M
- Ownership: 33.3% each in SPE holding title

**Typical Use Cases:**
- Smaller investors seeking diversification
- Transactions where debt is readily available from single source
- Assets with specialized knowledge requirements (multiple experts)

### Structure 3: Full Syndication (Equity and Debt)
**Description:**
- Multiple equity participants share ownership
- Multiple lenders provide syndicated debt
- Most complex structure with many parties

**Advantages:**
- Maximum risk diversification for all parties
- Enables very large transactions ($100M+)
- Competitive pricing on both equity and debt

**Challenges:**
- Complex coordination and decision-making
- Higher transaction costs and legal fees
- Slower execution due to multiple parties

**Example:**
- Equity: 4 investors contributing $3.75M each ($15M total)
- Debt: 6 banks providing $5.83M each ($35M total)
- Lead Arranger: Coordinates both equity and debt syndication

**Typical Use Cases:**
- Very large aircraft or vessel leases ($100M+)
- Transactions requiring broad market distribution
- Deals where no single party wants full exposure

### Structure 4: Lease Securitization (Asset-Backed Securities)
**Description:**
- Multiple leases pooled into a special purpose vehicle (SPV)
- SPV issues asset-backed securities (ABS) to investors
- Securities rated by credit rating agencies
- Tranched structure with senior and subordinated notes

**Structure:**
- **Senior Tranche (AAA-rated)**: 70-80% of pool, lowest yield
- **Mezzanine Tranche (A to BBB-rated)**: 10-20% of pool, moderate yield
- **Equity Tranche (Unrated)**: 5-10% of pool, highest yield and first loss

**Advantages:**
- Access to capital markets and institutional investors
- Lower cost of funds for highly-rated tranches
- Liquidity for lease originators
- Diversification across multiple leases and lessees

**Example:**
- Pool of 20 aircraft leases totaling $500M
- Senior Notes (AAA): $350M at 5.5%
- Mezzanine Notes (BBB): $100M at 7.5%
- Equity (Unrated): $50M targeting 15% IRR

**Typical Use Cases:**
- Large portfolios of similar assets (aircraft, containers, rail cars)
- Lease originators seeking to recycle capital
- Institutional investors seeking rated securities

---

## 5. Five Syndication Considerations

### Consideration 1: Alignment of Interests
**Challenge**: Multiple parties may have different objectives and risk tolerances
**Key Issues**:
- Equity participants may prioritize tax benefits vs. cash returns
- Debt lenders focus on downside protection and timely repayment
- Lessee wants operational flexibility and favorable terms

**Best Practices**:
- Clear governance documents defining decision rights
- Unanimous consent requirements for major decisions
- Aligned incentives through fee structures and profit sharing
- Regular communication and reporting to all parties

### Consideration 2: Decision-Making and Governance
**Challenge**: Coordinating decisions among multiple parties can be slow and contentious
**Key Issues**:
- Lease modifications or amendments
- Asset maintenance and capital expenditures
- Default remedies and workout strategies
- Renewal or sale decisions at lease end

**Best Practices**:
- Establish clear decision-making thresholds (majority vs. unanimous)
- Appoint lead equity participant or administrative agent
- Define routine vs. major decisions
- Create dispute resolution mechanisms

### Consideration 3: Economic Splits and Waterfalls
**Challenge**: Fairly allocating cash flows, tax benefits, and residual value among participants
**Key Issues**:
- Debt service priority vs. equity distributions
- Tax benefit allocation (especially if participants have different tax rates)
- Residual value sharing at lease end
- Prepayment or early termination proceeds

**Best Practices**:
- Document detailed payment waterfall in operating agreement
- Use tax allocation provisions to optimize benefits
- Establish clear residual value sharing formulas
- Include make-whole provisions for early termination

### Consideration 4: Transfer and Exit Rights
**Challenge**: Participants may want to exit or transfer their interests during the lease term
**Key Issues**:
- Restrictions on transfer of equity or debt interests
- Right of first refusal for other participants
- Minimum credit quality for replacement participants
- Consent requirements for transfers

**Best Practices**:
- Define permitted transferees (e.g., affiliates, qualified investors)
- Establish right of first offer or first refusal
- Require consent for transfers (not to be unreasonably withheld)
- Include tag-along and drag-along rights for equity participants

### Consideration 5: Default and Workout Procedures
**Challenge**: Coordinating response to lessee default or financial distress
**Key Issues**:
- Defining events of default and cure periods
- Remedies (repossession, lease termination, damages)
- Allocation of workout costs and recoveries
- Competing interests of debt vs. equity in workout scenarios

**Best Practices**:
- Establish intercreditor agreement between debt and equity
- Define standstill periods and forbearance procedures
- Allocate workout costs proportionally or to equity first
- Create clear priority for recovery proceeds (debt first, then equity)
- Appoint workout committee or special servicer for complex situations

---

## 6. Case Study: Global Airways Aircraft Lease Syndication

### Background
**Global Airways**, an investment-grade airline (BBB+ rated), needs to acquire 5 new Boeing 787-9 Dreamliner aircraft to expand its long-haul international routes. Rather than purchasing the aircraft outright, Global Airways opts for a leveraged lease structure to preserve capital and optimize its balance sheet.

### Transaction Overview

**Asset Details:**
- Aircraft: 5 Boeing 787-9 Dreamliner aircraft
- Total Cost: $250,000,000 ($50M per aircraft)
- Delivery: Staggered over 12 months
- Expected Useful Life: 25 years
- Residual Value (Year 12): 35% of original cost

**Lessee:**
- Global Airways (BBB+ credit rating)
- Strong operating cash flows and debt service coverage
- Established international carrier with 20+ year operating history

### Syndication Structure

**Equity Syndicate (30% of cost = $75M):**
- **Lead Equity Participant**: Aviation Finance Partners ($30M, 40% of equity)
- **Co-Investor 1**: Pension Fund A ($22.5M, 30% of equity)
- **Co-Investor 2**: Insurance Company B ($15M, 20% of equity)
- **Co-Investor 3**: Family Office C ($7.5M, 10% of equity)

**Debt Syndicate (70% of cost = $175M):**
- **Lead Arranger**: Major Bank A ($50M, 28.6% of debt)
- **Co-Arranger 1**: Major Bank B ($40M, 22.9% of debt)
- **Co-Arranger 2**: Major Bank C ($35M, 20.0% of debt)
- **Participant 1**: Regional Bank D ($25M, 14.3% of debt)
- **Participant 2**: Regional Bank E ($25M, 14.3% of debt)

### Lease Terms

**Structure:**
- Lease Type: Full-payout leveraged lease
- Term: 12 years with two 3-year renewal options
- Payment Structure: Level monthly payments
- Maintenance: Lessee responsible (triple-net equivalent)
- Insurance: Lessee maintains hull and liability coverage
- Return Condition: Half-life or better maintenance status

**Pricing:**
- Annual Lease Payment: $27,500,000 ($2,291,667 monthly)
- Debt Service: $19,250,000 annually ($1,604,167 monthly)
- Equity Distribution: $8,250,000 annually (after debt service and reserves)

### Financial Analysis

**Debt Structure:**
- Principal: $175,000,000
- Interest Rate: SOFR + 225 bps (approximately 7.25% all-in)
- Amortization: 12 years, monthly payments
- Debt Service Coverage Ratio: 1.43x ($27.5M / $19.25M)

**Equity Returns (Projected):**

**Year 1 Cash Flow per $1M Equity Invested:**
- Lease Payment (pro-rata): $366,667
- Debt Service: ($256,667)
- Operating Expenses: ($20,000)
- **Pre-Tax Cash Flow**: $90,000

**Tax Benefits per $1M Equity:**
- Depreciation (MACRS, 7-year): $47,633
- Interest Deduction: $28,000
- Total Deductions: $75,633
- Tax Savings (25%): $18,908

**Total Year 1 Return per $1M Equity:**
- Pre-Tax Cash Flow: $90,000
- Tax Benefit: $18,908
- **Total**: $108,908 (10.9% cash-on-cash)

**Projected Equity IRR (12-Year Hold):**
- Annual Cash Distributions: $90,000 to $150,000 per $1M (increasing as debt pays down)
- Tax Benefits: $18,908 to $5,000 per $1M (declining as depreciation exhausts)
- Residual Value: $350,000 per $1M (35% of original cost)
- **Projected Equity IRR**: 14.5% - 16.0%

### Syndication Economics

**Equity Participant Returns:**
- **Aviation Finance Partners** ($30M invested):
  - Year 1 Cash: $2,700,000
  - Year 1 Tax Benefit: $567,240
  - Projected IRR: 15.5%
  
- **Pension Fund A** ($22.5M invested):
  - Year 1 Cash: $2,025,000
  - Year 1 Tax Benefit: $425,430
  - Projected IRR: 15.0%

- **Insurance Company B** ($15M invested):
  - Year 1 Cash: $1,350,000
  - Year 1 Tax Benefit: $283,620
  - Projected IRR: 14.8%

- **Family Office C** ($7.5M invested):
  - Year 1 Cash: $675,000
  - Year 1 Tax Benefit: $141,810
  - Projected IRR: 14.5%

**Debt Participant Returns:**
- All-In Yield: 7.25% (SOFR + 225 bps)
- DSCR: 1.43x (strong coverage)
- LTV: 70% initially, declining to 35% by Year 12
- Expected Loss: <0.5% (investment-grade lessee, liquid asset)

### Governance and Decision-Making

**Equity Governance:**
- **Major Decisions** (require 75% equity vote):
  - Lease amendments or modifications
  - Asset sale or refinancing
  - Lessee default remedies
  
- **Routine Decisions** (Lead Equity Participant authority):
  - Lease administration
  - Insurance and maintenance oversight
  - Quarterly reporting

**Debt Governance:**
- **Lead Arranger** (Major Bank A) acts as administrative agent
- **Major Decisions** (require majority lender consent):
  - Debt amendments or waivers
  - Acceleration upon default
  - Collateral release or substitution

**Intercreditor Agreement:**
- Debt has first priority on all cash flows and collateral
- Equity subordinated to debt in all respects
- Standstill period: Equity cannot take action for 180 days after lessee default
- Workout costs: Debt recovers costs first, then equity

### Risk Management

**Lessee Credit Risk:**
- **Mitigation**: Investment-grade lessee (BBB+), strong DSCR (1.43x)
- **Monitoring**: Quarterly financial reporting, annual credit review
- **Covenant**: Maintain minimum credit rating of BBB- or better

**Residual Value Risk:**
- **Mitigation**: Conservative residual assumption (35% vs. 40-45% market)
- **Diversification**: 5 aircraft spread across different routes
- **Liquidity**: Boeing 787 has strong secondary market

**Remarketing Risk:**
- **Mitigation**: Two 3-year renewal options give lessee incentive to extend
- **Backup Plan**: Established aircraft remarketing firms on retainer
- **Market Conditions**: Long-haul aircraft demand expected to remain strong

**Interest Rate Risk:**
- **Mitigation**: Debt at fixed rate (SOFR + 225 bps locked at closing)
- **Hedge**: No additional hedging required due to fixed-rate debt

### Outcome (After 3 Years)

**Performance Metrics:**
- Lease Payments: 100% on-time, no defaults or delays
- Aircraft Utilization: 85%+ (strong international demand)
- DSCR: Maintained at 1.43x
- Lessee Credit: Upgraded to A- (improved financial performance)

**Equity Returns:**
- Cumulative Cash Distributions: $270,000 per $1M invested (9.0% annual average)
- Cumulative Tax Benefits: $45,000 per $1M invested
- Mark-to-Market Value: $1.15M per $1M invested (15% appreciation)

**Debt Performance:**
- Principal Paydown: $45M (25.7% of original balance)
- LTV: Reduced to 52% (from 70%)
- No defaults, modifications, or waivers required

**Syndicate Satisfaction:**
- All equity participants express satisfaction with returns and governance
- Debt participants view transaction as model for future aircraft financings
- Lead Equity Participant and Lead Arranger collaborate on 3 additional aircraft deals

---

## Summary

Leveraged leases and syndication structures enable large-scale asset financing by combining equity and debt from multiple participants. The five key components—equity participant, debt participant, lessee, payment waterfall, and tax benefits—create a complex but efficient financing mechanism. Understanding return calculations for both equity (targeting 12-18% IRR) and debt (6-8% yield) is essential for structuring attractive transactions.

The four syndication structures—single equity/multiple debt, multiple equity/single debt, full syndication, and lease securitization—offer flexibility to match transaction size, investor preferences, and market conditions. Successfully navigating the five critical considerations—alignment of interests, decision-making, economic splits, transfer rights, and default procedures—requires careful documentation and ongoing communication among all parties.

The Global Airways case study demonstrates how a well-structured leveraged lease syndication can deliver strong returns to equity participants (14.5-16.0% IRR), secure yields to debt lenders (7.25%), and operational flexibility to the lessee, while managing risks through diversification, strong credit quality, and robust governance frameworks.

In the next lesson, we'll explore cross-border and international leasing, which introduces additional complexity related to tax treaties, currency risk, and regulatory compliance across multiple jurisdictions.`
      }, { $autoCancel: false });

      // Lesson 3.3: Cross-Border and International Leasing
      const lesson33 = await pb.collection('lessons').create({
        course_id: selectedCourseId,
        title: 'Cross-Border and International Leasing',
        description: 'Navigate the complexities of international lease transactions, including tax treaties, currency risk, regulatory compliance, and cross-border structuring.',
        order: nextOrder + 2,
        duration: 60,
        content_type: 'text'
      }, { $autoCancel: false });

      await pb.collection('lesson_content').create({
        lesson_id: lesson33.id,
        content_body: `# Lesson 3.3: Cross-Border and International Leasing

## Learning Objectives
By the end of this lesson, you will be able to:
- Understand the fundamentals and unique challenges of cross-border lease transactions
- Identify the five key components of a cross-border lease structure
- Evaluate five critical tax considerations in international leasing
- Assess five major regulatory considerations across jurisdictions
- Recognize and mitigate five cross-border risks
- Apply cross-border leasing concepts through a detailed US-Germany manufacturing equipment case study

---

## 1. Fundamentals of Cross-Border Leasing

**Cross-border leasing** (also called international leasing) involves lease transactions where the lessor and lessee are located in different countries, or where the leased asset is used across multiple jurisdictions. These transactions introduce additional complexity related to taxation, regulation, currency, and legal systems.

### Key Characteristics:
- **Multi-Jurisdictional**: Involves parties and assets in two or more countries
- **Tax Treaty Optimization**: Structures designed to leverage favorable tax treaties
- **Currency Considerations**: Lease payments and asset values may be in different currencies
- **Regulatory Complexity**: Must comply with laws and regulations in multiple jurisdictions
- **Documentation Intensity**: Requires extensive legal documentation and opinions

### Common Structures:
- **Lessor in Country A, Lessee in Country B**: Most common structure
- **Asset Located in Country C**: Asset may be in a third jurisdiction
- **Special Purpose Entities**: Often use SPEs in tax-favorable jurisdictions
- **Double-Dip Leases**: Structures claiming tax benefits in multiple countries (increasingly restricted)

### Typical Asset Classes:
- Aircraft (commercial and cargo)
- Maritime vessels and shipping containers
- Rail equipment and rolling stock
- Manufacturing equipment and machinery
- Energy and infrastructure assets

---

## 2. Cross-Border Lease Structure: Five Key Components

### Component 1: Lessor Jurisdiction and Entity Structure
**Lessor Location Considerations:**
- **Tax Treaty Network**: Choose jurisdiction with favorable tax treaties
- **Withholding Tax Rates**: Minimize withholding taxes on lease payments
- **Depreciation Rules**: Maximize depreciation deductions
- **Repatriation**: Ease of repatriating profits to ultimate parent

**Common Lessor Jurisdictions:**
- **Ireland**: Extensive tax treaty network, 12.5% corporate tax rate, aircraft leasing hub
- **Netherlands**: Favorable tax treaties, participation exemption, holding company benefits
- **Singapore**: Low tax rates, extensive treaty network, no withholding tax on lease payments
- **Luxembourg**: EU member, strong treaty network, favorable holding company regime
- **United States**: Large capital markets, depreciation benefits, but higher tax rates

**Entity Structure:**
- **Special Purpose Entity (SPE)**: Isolates transaction from other activities
- **Holding Company**: May use intermediate holding company for tax optimization
- **Branch vs. Subsidiary**: Consider tax implications of each structure

**Example Structure:**
- Ultimate Parent: US-based leasing company
- Intermediate Holding Company: Irish entity (benefits from Ireland-Germany tax treaty)
- SPE Lessor: Irish SPE owns equipment and leases to German lessee

### Component 2: Lessee Jurisdiction and Tax Position
**Lessee Location Considerations:**
- **Withholding Tax on Lease Payments**: Rate applied to payments to foreign lessor
- **Deductibility of Lease Payments**: Ensure lease payments are tax-deductible
- **Transfer Pricing Rules**: Compliance with arm's length pricing requirements
- **Thin Capitalization Rules**: Limits on debt-to-equity ratios may affect lease classification

**Lessee Tax Position:**
- **Profitable vs. Loss Position**: Tax benefits only valuable if lessee is profitable
- **Tax Rate**: Higher tax rates increase value of lease payment deductions
- **Alternative Minimum Tax**: May limit deductibility in some jurisdictions
- **Tax Credits**: Availability of investment tax credits or other incentives

**Example:**
- German manufacturing company (lessee)
- Corporate tax rate: 30% (federal + trade tax)
- Withholding tax on lease payments to Ireland: 0% (per tax treaty)
- Lease payments fully deductible as operating expenses

### Component 3: Asset Location and Registration
**Asset Situs Considerations:**
- **Physical Location**: Where asset is primarily used or stationed
- **Registration Jurisdiction**: Where asset is legally registered (especially for aircraft, vessels)
- **Import/Export Duties**: Customs duties and VAT on cross-border asset movements
- **Local Taxes**: Property taxes, use taxes, or other local levies

**Registration Strategies:**
- **Flag of Convenience**: Aircraft/vessels may be registered in favorable jurisdictions (e.g., Cayman Islands, Bermuda)
- **Temporary Import**: Use temporary import provisions to avoid duties
- **Free Trade Zones**: Locate assets in special economic zones with tax benefits

**Example:**
- Manufacturing equipment physically located in Germany
- Owned by Irish lessor
- No import duties (EU internal market)
- Subject to German property tax (paid by lessee as part of triple-net lease)

### Component 4: Currency and Payment Structure
**Currency Considerations:**
- **Lease Payment Currency**: USD, EUR, or lessee's local currency
- **Asset Purchase Currency**: Currency used to acquire the asset
- **Hedging Requirements**: Manage currency risk if payment and asset currencies differ
- **Repatriation**: Converting lease payments to lessor's home currency

**Payment Structures:**
- **Single Currency**: All payments in one currency (simplest)
- **Dual Currency**: Payments in lessee currency, converted to lessor currency
- **Currency Swap**: Use derivatives to hedge currency risk
- **Natural Hedge**: Match currency of lease payments to currency of debt service

**Example:**
- Asset purchased in EUR: €10,000,000
- Lease payments in EUR: €1,200,000 annually
- Irish lessor converts EUR to USD for repatriation
- Currency risk: EUR/USD exchange rate fluctuations

**Hedging Strategy:**
- Forward contracts to lock in EUR/USD exchange rate
- Currency swap to convert EUR lease payments to USD
- Natural hedge: Borrow in EUR to finance asset purchase

### Component 5: Legal and Documentation Framework
**Key Legal Documents:**
- **Lease Agreement**: Governs lessor-lessee relationship, payment terms, asset use
- **Security Agreement**: Grants lessor security interest in asset
- **Intercreditor Agreement**: If debt financing involved, defines priority among creditors
- **Tax Indemnity**: Lessee indemnifies lessor for adverse tax consequences
- **Legal Opinions**: Opinions from counsel in each jurisdiction on enforceability

**Governing Law and Dispute Resolution:**
- **Choice of Law**: Select governing law (often lessor's jurisdiction or neutral jurisdiction like English law)
- **Jurisdiction**: Specify courts or arbitration for dispute resolution
- **Arbitration**: International arbitration (e.g., ICC, LCIA) often preferred for cross-border disputes
- **Enforcement**: Consider enforceability of judgments in each jurisdiction

**Example Documentation:**
- Lease Agreement: Governed by English law
- Security Agreement: Governed by German law (asset location)
- Dispute Resolution: ICC arbitration in London
- Legal Opinions: Irish counsel (lessor), German counsel (lessee), English counsel (governing law)

---

## 3. Five Tax Considerations in Cross-Border Leasing

### Tax Consideration 1: Withholding Taxes on Lease Payments
**Issue:**
Many countries impose withholding taxes on lease payments made to foreign lessors, typically ranging from 0% to 30% of the gross lease payment.

**Impact:**
- Reduces net cash flow to lessor
- May make transaction uneconomical if withholding rate is high
- Lessee responsible for withholding and remitting tax to local authorities

**Mitigation Strategies:**
- **Tax Treaties**: Utilize bilateral tax treaties to reduce or eliminate withholding tax
- **Lessor Jurisdiction**: Locate lessor in jurisdiction with favorable treaty network
- **Treaty Shopping**: Structure through intermediate entities in treaty jurisdictions (subject to anti-abuse rules)
- **Exemptions**: Certain asset types (e.g., aircraft, ships) may be exempt from withholding tax

**Example:**
- German lessee pays €1,200,000 annual lease payment to Irish lessor
- Germany-Ireland tax treaty: 0% withholding tax on lease payments
- Without treaty: 15% withholding tax = €180,000 annual cost
- **Tax Savings**: €180,000 per year through treaty optimization

### Tax Consideration 2: Transfer Pricing and Arm's Length Pricing
**Issue:**
Tax authorities require that cross-border lease payments reflect arm's length pricing (i.e., the price that would be charged between unrelated parties).

**Impact:**
- Tax authorities may challenge lease pricing if deemed too high or too low
- Adjustments can result in additional taxes, penalties, and interest
- Requires documentation to support pricing methodology

**Compliance Requirements:**
- **Comparable Uncontrolled Price (CUP)**: Compare lease rates to similar third-party transactions
- **Cost Plus Method**: Lessor's cost plus reasonable markup
- **Profit Split Method**: Allocate profits based on functions performed and risks assumed
- **Documentation**: Maintain contemporaneous transfer pricing documentation

**Example:**
- Irish lessor charges German lessee €1,200,000 annual lease payment
- Transfer pricing study shows market rate for similar equipment: €1,100,000 - €1,300,000
- Lease rate of €1,200,000 is within arm's length range
- **Documentation**: Transfer pricing report prepared by Big 4 accounting firm

### Tax Consideration 3: Permanent Establishment (PE) Risk
**Issue:**
If a foreign lessor has a "permanent establishment" in the lessee's country, the lessor may be subject to corporate income tax in that country on profits attributable to the PE.

**PE Triggers:**
- **Fixed Place of Business**: Office, branch, or facility in lessee's country
- **Dependent Agent**: Agent with authority to conclude contracts on lessor's behalf
- **Service PE**: Providing services in lessee's country for extended period (typically >6-12 months)

**Impact:**
- Lessor subject to corporate income tax in lessee's country
- Requires local tax filings and compliance
- May trigger withholding tax on deemed profit repatriation

**Mitigation Strategies:**
- **Avoid Fixed Place**: Do not maintain office or facility in lessee's country
- **Independent Agent**: Use independent agents without contract authority
- **Limit Services**: Avoid providing extensive services in lessee's country
- **Tax Treaty Protection**: Rely on treaty provisions that limit PE exposure

**Example:**
- Irish lessor leases equipment to German lessee
- Lessor has no office, employees, or agents in Germany
- Lease is administered from Ireland
- **Result**: No PE in Germany, no German corporate income tax

### Tax Consideration 4: Value Added Tax (VAT) and Goods and Services Tax (GST)
**Issue:**
Cross-border leases may be subject to VAT, GST, or similar consumption taxes, which can significantly increase the cost of the transaction.

**VAT Treatment:**
- **Lease of Goods**: Generally subject to VAT in the country where the asset is used
- **VAT Rate**: Varies by country (e.g., 19% in Germany, 23% in Ireland, 0% in some jurisdictions)
- **Input VAT Credit**: Lessee may be able to recover VAT as input credit if used for taxable activities
- **Reverse Charge**: Lessee may be required to self-assess VAT on lease payments

**Impact:**
- Increases upfront cost if VAT is charged on asset purchase
- Increases ongoing cost if VAT is charged on lease payments
- Cash flow impact if VAT recovery is delayed

**Mitigation Strategies:**
- **VAT Registration**: Lessor registers for VAT in lessee's country to charge VAT and allow lessee to recover
- **Reverse Charge Mechanism**: Use reverse charge to shift VAT obligation to lessee
- **Exemptions**: Certain assets (e.g., aircraft, ships) may be exempt from VAT
- **Leasing vs. Hire Purchase**: Structure may affect VAT treatment

**Example:**
- Irish lessor leases equipment to German lessee
- Equipment used in Germany: Subject to 19% German VAT
- Lessor registers for German VAT
- Annual lease payment: €1,200,000 + €228,000 VAT = €1,428,000
- Lessee recovers €228,000 as input VAT credit (if used for taxable activities)
- **Net Cost to Lessee**: €1,200,000 (VAT-neutral if recoverable)

### Tax Consideration 5: Repatriation and Dividend Withholding Taxes
**Issue:**
When the lessor repatriates profits from the leasing entity to the ultimate parent company, dividend withholding taxes may apply.

**Withholding Tax on Dividends:**
- **Rate**: Varies by country and tax treaty (typically 0% to 30%)
- **Treaty Relief**: Tax treaties often reduce withholding tax on dividends
- **Participation Exemption**: Some jurisdictions exempt dividends from substantial shareholdings

**Impact:**
- Reduces net return to ultimate parent company
- May create multiple layers of taxation
- Affects overall economics of the transaction

**Mitigation Strategies:**
- **Holding Company Structure**: Use intermediate holding company in jurisdiction with favorable treaty network
- **Participation Exemption**: Locate holding company in jurisdiction with participation exemption (e.g., Netherlands, Luxembourg)
- **Earnings Stripping**: Use intercompany debt to repatriate profits as interest (subject to thin capitalization rules)
- **Reinvestment**: Reinvest profits in new leasing transactions rather than repatriating

**Example:**
- Irish lessor (subsidiary of US parent) earns €500,000 profit
- Dividend from Ireland to US: 0% withholding tax (per Ireland-US tax treaty)
- US corporate tax on foreign income: Subject to US tax (with foreign tax credit for Irish taxes paid)
- **Effective Tax Rate**: Depends on US tax rate and foreign tax credit utilization

---

## 4. Five Regulatory Considerations

### Regulatory Consideration 1: Foreign Ownership and Investment Restrictions
**Issue:**
Many countries restrict foreign ownership of certain assets or require government approval for foreign investment.

**Common Restrictions:**
- **Strategic Assets**: Restrictions on foreign ownership of defense, telecommunications, energy assets
- **Real Estate**: Limits on foreign ownership of land or real property
- **Financial Services**: Licensing requirements for foreign lessors in financial services sector
- **National Security**: Review of foreign investment for national security concerns (e.g., CFIUS in US, FIRB in Australia)

**Impact:**
- May prohibit or delay cross-border lease transactions
- Requires government approvals and filings
- May require local partner or joint venture structure

**Compliance Strategies:**
- **Pre-Transaction Review**: Assess foreign ownership restrictions before structuring transaction
- **Government Approvals**: Obtain necessary approvals and licenses
- **Local Partner**: Partner with local entity if foreign ownership is restricted
- **Exemptions**: Utilize exemptions for certain asset types or transaction structures

**Example:**
- US lessor wants to lease telecommunications equipment to Chinese lessee
- China restricts foreign ownership in telecommunications sector
- **Solution**: Structure as operating lease (not ownership transfer) with Chinese government approval

### Regulatory Consideration 2: Export Controls and Sanctions
**Issue:**
Cross-border leases may be subject to export controls, sanctions, and embargoes that restrict transactions with certain countries or parties.

**Key Regulations:**
- **US Export Controls**: Export Administration Regulations (EAR), International Traffic in Arms Regulations (ITAR)
- **EU Export Controls**: Dual-use goods regulations
- **Sanctions Programs**: OFAC sanctions (US), EU sanctions, UN sanctions
- **Embargoes**: Comprehensive embargoes on certain countries (e.g., North Korea, Iran)

**Impact:**
- May prohibit lease of certain assets to certain countries or parties
- Requires export licenses and approvals
- Violations can result in severe penalties, including criminal prosecution

**Compliance Strategies:**
- **Screening**: Screen lessee and end-users against sanctions lists (e.g., SDN list, Entity List)
- **Export Classification**: Determine export classification of leased asset (e.g., ECCN, USML category)
- **License Applications**: Apply for export licenses if required
- **Restricted Party Clauses**: Include clauses prohibiting lessee from re-exporting or transferring asset to restricted parties

**Example:**
- US lessor leases aircraft to European airline
- Aircraft contains US-origin components subject to EAR
- **Compliance**: Obtain export license from US Department of Commerce (if required based on ECCN and destination)

### Regulatory Consideration 3: Data Privacy and Cross-Border Data Transfers
**Issue:**
Cross-border leases involving technology assets or services may implicate data privacy laws and restrictions on cross-border data transfers.

**Key Regulations:**
- **GDPR (EU)**: Strict requirements for cross-border transfers of personal data
- **CCPA (California)**: Privacy rights and restrictions on data sales
- **Data Localization**: Requirements to store data within certain jurisdictions (e.g., China, Russia)

**Impact:**
- May restrict lessor's ability to access or process data from leased assets
- Requires data transfer mechanisms (e.g., Standard Contractual Clauses, Binding Corporate Rules)
- Non-compliance can result in significant fines (up to 4% of global revenue under GDPR)

**Compliance Strategies:**
- **Data Processing Agreements**: Execute data processing agreements with lessee
- **Transfer Mechanisms**: Use approved transfer mechanisms (e.g., SCCs, adequacy decisions)
- **Data Minimization**: Limit data collection and processing to what is necessary
- **Encryption and Security**: Implement robust data security measures

**Example:**
- Irish lessor leases IT equipment to German lessee
- Equipment processes personal data of EU residents
- **Compliance**: Execute GDPR-compliant data processing agreement, ensure data transfers comply with GDPR

### Regulatory Consideration 4: Anti-Money Laundering (AML) and Know Your Customer (KYC)
**Issue:**
Cross-border leases may trigger AML and KYC obligations, particularly for high-value assets or transactions involving higher-risk jurisdictions.

**Key Regulations:**
- **AML Directives (EU)**: Requirements for customer due diligence and suspicious activity reporting
- **Bank Secrecy Act (US)**: AML obligations for financial institutions
- **FATF Recommendations**: International standards for AML/CFT

**Impact:**
- Requires customer due diligence and identity verification
- Ongoing monitoring of transactions for suspicious activity
- Reporting obligations for suspicious transactions
- Non-compliance can result in fines and reputational damage

**Compliance Strategies:**
- **KYC Procedures**: Implement robust KYC procedures to verify lessee identity and beneficial ownership
- **Risk Assessment**: Assess AML risk based on lessee, jurisdiction, and transaction characteristics
- **Enhanced Due Diligence**: Conduct enhanced due diligence for higher-risk transactions
- **Suspicious Activity Reporting**: Establish procedures for identifying and reporting suspicious activity

**Example:**
- Irish lessor leases aircraft to lessee in higher-risk jurisdiction
- **Compliance**: Conduct enhanced due diligence, verify beneficial ownership, monitor transactions for suspicious activity

### Regulatory Consideration 5: Accounting and Financial Reporting Standards
**Issue:**
Cross-border leases must comply with accounting standards in both the lessor's and lessee's jurisdictions, which may differ significantly.

**Key Standards:**
- **IFRS 16 (International)**: Requires lessees to recognize most leases on balance sheet
- **ASC 842 (US GAAP)**: Similar to IFRS 16, with some differences
- **Local GAAP**: Some jurisdictions have local accounting standards that differ from IFRS/US GAAP

**Impact:**
- Affects how lease is classified (operating vs. finance lease)
- Determines balance sheet and income statement treatment
- May affect financial ratios and debt covenants
- Requires coordination between lessor and lessee accounting teams

**Compliance Strategies:**
- **Accounting Analysis**: Analyze lease classification under applicable accounting standards
- **Disclosure**: Ensure proper disclosure in financial statements
- **Coordination**: Coordinate with lessee to ensure consistent treatment where possible
- **Professional Advice**: Engage accounting advisors to navigate complex standards

**Example:**
- Irish lessor (IFRS) leases equipment to German lessee (IFRS)
- Under IFRS 16, lessee recognizes right-of-use asset and lease liability on balance sheet
- Lessor continues to recognize leased asset and lease receivable
- **Impact**: Lessee's debt-to-equity ratio increases due to lease liability recognition

---

## 5. Five Cross-Border Risks

### Risk 1: Currency Risk
**Description:**
Fluctuations in exchange rates between the lessor's and lessee's currencies can significantly impact the economics of the transaction.

**Impact:**
- **Lessor Risk**: If lease payments are in lessee's currency, depreciation of that currency reduces lessor's returns when converted to home currency
- **Lessee Risk**: If lease payments are in lessor's currency, appreciation of that currency increases lessee's costs
- **Volatility**: Currency volatility creates uncertainty in cash flow projections

**Example:**
- Irish lessor leases equipment to German lessee
- Lease payments in EUR: €1,200,000 annually
- EUR/USD exchange rate at inception: 1.10 (USD 1,320,000)
- EUR/USD exchange rate after 3 years: 1.00 (USD 1,200,000)
- **Impact**: Lessor's USD-equivalent revenue declines by $120,000 annually (9% decrease)

**Mitigation Strategies:**
- **Currency Matching**: Match currency of lease payments to currency of debt service (natural hedge)
- **Forward Contracts**: Lock in exchange rates for future lease payments
- **Currency Swaps**: Convert lease payments from one currency to another at predetermined rates
- **Currency Clauses**: Include clauses allowing lease payment adjustments for significant currency movements
- **Diversification**: Diversify lease portfolio across multiple currencies to reduce concentration risk

### Risk 2: Political and Country Risk
**Description:**
Political instability, government actions, or adverse changes in laws and regulations in the lessee's country can disrupt the lease or impair the lessor's rights.

**Impact:**
- **Expropriation**: Government seizure of leased asset without adequate compensation
- **Currency Controls**: Restrictions on lessee's ability to make cross-border lease payments
- **Regulatory Changes**: Adverse changes in tax laws, import/export regulations, or lease regulations
- **Political Instability**: Civil unrest, regime change, or conflict disrupting lessee's operations

**Example:**
- Lessor leases equipment to lessee in emerging market country
- Government imposes currency controls, limiting lessee's ability to make USD lease payments
- **Impact**: Lessor experiences payment delays or defaults

**Mitigation Strategies:**
- **Political Risk Insurance**: Obtain insurance covering expropriation, currency inconvertibility, political violence
- **Multilateral Agency Support**: Utilize support from multilateral agencies (e.g., World Bank, IFC) to reduce political risk
- **Diversification**: Diversify lease portfolio across multiple countries to reduce concentration risk
- **Contractual Protections**: Include force majeure clauses, government action clauses, and termination rights
- **Country Risk Assessment**: Conduct thorough country risk assessment before entering transaction

### Risk 3: Legal and Enforcement Risk
**Description:**
Differences in legal systems and uncertainty about enforceability of lease agreements and security interests in foreign jurisdictions.

**Impact:**
- **Enforceability**: Lease agreement or security interest may not be enforceable in lessee's jurisdiction
- **Repossession**: Difficulty repossessing asset in event of lessee default
- **Litigation**: Costly and time-consuming litigation in foreign courts
- **Judgment Recognition**: Difficulty enforcing foreign judgments in lessee's jurisdiction

**Example:**
- Lessor obtains judgment against lessee in English court
- Lessee's assets located in jurisdiction that does not recognize English judgments
- **Impact**: Lessor unable to enforce judgment and recover damages

**Mitigation Strategies:**
- **Legal Opinions**: Obtain legal opinions from local counsel on enforceability of lease and security interests
- **International Arbitration**: Use international arbitration (e.g., ICC, LCIA) for dispute resolution
- **Treaty Protections**: Rely on international treaties (e.g., New York Convention on arbitration awards)
- **Asset Location**: Consider locating asset in jurisdiction with strong legal protections and enforcement mechanisms
- **Insurance**: Obtain credit insurance or political risk insurance to cover enforcement risk

### Risk 4: Tax Law Changes and Adverse Tax Rulings
**Description:**
Changes in tax laws or adverse tax rulings in either the lessor's or lessee's jurisdiction can significantly impact the economics of the transaction.

**Impact:**
- **Withholding Tax Increases**: Increase in withholding tax rates on lease payments
- **Treaty Changes**: Renegotiation or termination of tax treaties
- **Transfer Pricing Adjustments**: Tax authority challenges to lease pricing
- **Tax Benefit Elimination**: Changes in depreciation rules or other tax benefits

**Example:**
- Lessor structures transaction to benefit from 0% withholding tax under tax treaty
- Treaty renegotiated to impose 10% withholding tax on lease payments
- **Impact**: Lessor's after-tax returns decline by 10% of lease payments

**Mitigation Strategies:**
- **Tax Indemnity Clauses**: Require lessee to indemnify lessor for adverse tax consequences
- **Gross-Up Clauses**: Require lessee to gross up lease payments to cover withholding taxes
- **Tax Monitoring**: Monitor tax law developments in relevant jurisdictions
- **Flexibility**: Structure transaction with flexibility to adapt to tax law changes (e.g., ability to change lessor jurisdiction)
- **Conservative Assumptions**: Use conservative assumptions in financial projections to account for potential tax changes

### Risk 5: Operational and Asset-Specific Risk
**Description:**
Risks related to the operation, maintenance, and residual value of the leased asset in a cross-border context.

**Impact:**
- **Maintenance Standards**: Differences in maintenance standards or practices in lessee's jurisdiction
- **Regulatory Compliance**: Asset may not comply with local regulations or standards
- **Residual Value**: Uncertainty about asset's residual value in lessee's market
- **Remarketing**: Difficulty remarketing asset in lessee's jurisdiction or repatriating asset

**Example:**
- Lessor leases aircraft to lessee in emerging market
- Lessee's maintenance practices do not meet international standards
- **Impact**: Aircraft's residual value impaired due to poor maintenance

**Mitigation Strategies:**
- **Maintenance Covenants**: Include detailed maintenance covenants in lease agreement
- **Inspection Rights**: Reserve right to inspect asset and review maintenance records
- **Maintenance Reserves**: Require lessee to fund maintenance reserves
- **Return Conditions**: Specify detailed return conditions for asset at lease end
- **Remarketing Plan**: Develop remarketing plan and identify potential buyers in advance
- **Insurance**: Obtain insurance covering asset damage or loss

---

## 6. Case Study: US-Germany Manufacturing Equipment Lease

### Background
**TechManufacture USA**, a US-based equipment leasing company, is approached by **PrecisionWorks GmbH**, a German precision manufacturing company, to lease advanced CNC machining equipment valued at $10 million. The transaction involves cross-border structuring to optimize tax efficiency while managing currency, regulatory, and operational risks.

### Transaction Overview

**Asset Details:**
- Equipment: Advanced 5-axis CNC machining centers (3 units)
- Total Cost: $10,000,000 (€9,090,909 at 1.10 EUR/USD exchange rate)
- Manufacturer: Swiss equipment manufacturer
- Expected Useful Life: 15 years
- Residual Value (Year 10): 30% of original cost

**Lessee:**
- PrecisionWorks GmbH (German manufacturing company)
- Credit Rating: BBB (investment-grade)
- Annual Revenue: €50 million
- Use: Precision components for automotive and aerospace industries

**Lessor:**
- TechManufacture USA (US-based leasing company)
- Establishes Irish SPE (TechLease Ireland Ltd.) to own equipment and lease to German lessee

### Cross-Border Structure

**Lessor Structure:**
- **Ultimate Parent**: TechManufacture USA (Delaware corporation)
- **Intermediate Holding Company**: TechManufacture Holdings Ireland (Irish company)
- **SPE Lessor**: TechLease Ireland Ltd. (Irish SPE, 100% owned by Holdings Ireland)

**Rationale for Irish Structure:**
- Ireland-Germany tax treaty: 0% withholding tax on lease payments
- Ireland corporate tax rate: 12.5% (vs. 21% in US)
- Ireland-US tax treaty: 0% withholding tax on dividends (with ownership >10%)
- EU membership: No import duties on equipment within EU

**Asset Flow:**
- Equipment purchased from Swiss manufacturer by TechLease Ireland
- Equipment shipped directly to PrecisionWorks in Germany
- No import duties (EU internal market)
- German VAT applies (19%), recoverable by lessee

### Lease Terms

**Structure:**
- Lease Type: Operating lease (off-balance sheet for lessee under pre-IFRS 16 rules; on-balance sheet under IFRS 16)
- Term: 10 years with two 2-year renewal options
- Payment Structure: Level quarterly payments in EUR
- Maintenance: Lessee responsible (triple-net equivalent)
- Insurance: Lessee maintains comprehensive coverage
- Return Condition: Normal wear and tear, operational condition

**Pricing:**
- Quarterly Lease Payment: €295,000 (€1,180,000 annually)
- Total Lease Payments (10 years): €11,800,000
- Implicit Interest Rate: ~7.5%

### Tax Analysis

**Withholding Tax:**
- Germany-Ireland tax treaty: 0% withholding tax on lease payments
- **Savings**: €177,000 annually (15% of €1,180,000) vs. no treaty

**Irish Lessor Tax Position:**
- Lease Income: €1,180,000 annually
- Depreciation (straight-line, 10 years): €909,091 annually
- Interest Expense (if debt-financed): Assume €400,000 annually
- **Taxable Income**: €1,180,000 - €909,091 - €400,000 = (€129,091) loss in early years
- Irish Corporate Tax: 12.5% on taxable income (when positive)

**German Lessee Tax Position:**
- Lease Payments: €1,180,000 annually, fully deductible
- German Corporate Tax Rate: ~30% (federal + trade tax)
- **Tax Savings**: €354,000 annually (30% of €1,180,000)

**US Parent Tax Position:**
- Dividends from Ireland to US: 0% withholding tax (per treaty)
- US tax on foreign income: Subject to US corporate tax (21%) with foreign tax credit
- **Effective Tax Rate**: Depends on foreign tax credit utilization

### Currency Risk Management

**Currency Exposure:**
- Lease payments in EUR: €1,180,000 annually
- Lessor's functional currency: USD
- Exchange rate at inception: 1.10 EUR/USD (USD 1,298,000 equivalent)

**Hedging Strategy:**
- **Forward Contracts**: Lock in EUR/USD exchange rate for first 5 years of lease payments
  - Year 1-5 forward rate: 1.08 EUR/USD (USD 1,274,400 per year)
  - Cost of hedging: ~2% of notional amount
- **Natural Hedge**: Finance equipment purchase with EUR-denominated debt
  - Borrow €6,000,000 from European bank at 4.5% interest
  - Debt service in EUR matches lease payment currency
  - Reduces currency exposure to equity portion only

**Scenario Analysis:**
- **Base Case** (1.10 EUR/USD): USD 1,298,000 annual lease payment
- **EUR Appreciation** (1.20 EUR/USD): USD 1,416,000 annual lease payment (+9%)
- **EUR Depreciation** (1.00 EUR/USD): USD 1,180,000 annual lease payment (-9%)
- **With Hedging**: USD 1,274,400 annual lease payment (locked in)

### Regulatory Compliance

**Export Controls:**
- Equipment contains US-origin components subject to EAR
- Export classification: ECC N 2B001 (machine tools)
- Destination: Germany (EU member, low-risk)
- **Compliance**: No export license required (License Exception available)

**VAT Treatment:**
- Equipment subject to 19% German VAT on lease payments
- Lessor registers for German VAT
- Quarterly lease payment: €295,000 + €56,050 VAT = €351,050
- Lessee recovers €56,050 as input VAT credit
- **Net Cost to Lessee**: €295,000 (VAT-neutral)

**Data Privacy:**
- Equipment includes IoT sensors and data collection capabilities
- Data processing agreement executed between lessor and lessee
- Compliance with GDPR for cross-border data transfers
- **Mechanism**: Standard Contractual Clauses (SCCs) for data transfers from Germany to Ireland

**Accounting Treatment:**
- **Lessor (IFRS)**: Recognizes leased asset and lease receivable
- **Lessee (IFRS 16)**: Recognizes right-of-use asset and lease liability on balance sheet
- **Impact on Lessee**: Debt-to-equity ratio increases due to lease liability recognition

### Risk Management

**Currency Risk:**
- **Mitigation**: Forward contracts for 5 years, natural hedge through EUR debt financing
- **Residual Risk**: Years 6-10 unhedged (monitor and hedge as needed)

**Political Risk:**
- **Assessment**: Germany is low political risk (stable democracy, EU member)
- **Mitigation**: No political risk insurance required

**Legal/Enforcement Risk:**
- **Mitigation**: 
  - Legal opinions from Irish and German counsel on enforceability
  - Governing law: English law (neutral, well-developed commercial law)
  - Dispute resolution: ICC arbitration in London
  - Security interest registered in Germany

**Tax Risk:**
- **Mitigation**:
  - Tax indemnity clause: Lessee indemnifies lessor for adverse tax changes
  - Gross-up clause: Lessee grosses up payments if withholding tax imposed
  - Transfer pricing documentation: Arm's length pricing study prepared

**Operational Risk:**
- **Mitigation**:
  - Detailed maintenance covenants in lease agreement
  - Quarterly inspection rights for lessor
  - Maintenance reserves funded by lessee (€50,000 annually)
  - Return conditions specify operational state and normal wear and tear

### Financial Projections

**Lessor Returns (10-Year Hold):**

**Year 1 Cash Flow:**
- Lease Payment (EUR): €1,180,000
- Converted to USD (hedged rate 1.08): $1,274,400
- Debt Service (EUR debt): (€540,000) = ($583,200 at 1.08)
- Operating Expenses: ($50,000)
- **Pre-Tax Cash Flow**: $641,200

**Year 1 Tax:**
- Taxable Income (Ireland): (€129,091) loss
- Irish Tax: €0 (loss carryforward)
- **After-Tax Cash Flow**: $641,200

**Year 10 Residual Value:**
- Estimated Residual: $3,000,000 (30% of original cost)
- Less: Remaining Debt: ($1,500,000)
- **Net Residual to Equity**: $1,500,000

**Equity IRR (10-Year Hold):**
- Initial Equity Investment: $4,000,000 (40% of cost)
- Annual Cash Flows: $641,200 to $850,000 (increasing as debt pays down)
- Residual Value: $1,500,000
- **Projected Equity IRR**: 13.5%

**Lessee Economics:**
- Annual Lease Payment: €1,180,000
- Tax Savings (30%): (€354,000)
- **After-Tax Cost**: €826,000 annually
- **Effective Interest Rate**: ~5.25% after-tax

### Outcome (After 5 Years)

**Performance Metrics:**
- Lease Payments: 100% on-time, no defaults
- Equipment Utilization: 90%+ (strong demand for precision components)
- Currency Hedging: Effective (locked in favorable EUR/USD rates)
- Tax Compliance: No adverse tax rulings or adjustments

**Lessor Returns:**
- Cumulative Cash Distributions: $3,206,000 (80% of equity invested)
- Mark-to-Market Value: $4,500,000 (12.5% appreciation)
- Projected IRR: On track for 13.5% target

**Lessee Satisfaction:**
- Equipment performance exceeds expectations
- After-tax lease cost competitive with alternative financing
- Considering renewal options for additional 2 years

**Lessons Learned:**
- Irish structure successfully optimized tax efficiency (0% withholding tax)
- Currency hedging protected lessor from EUR depreciation
- IFRS 16 implementation required lessee to recognize lease on balance sheet (expected)
- Strong lessee credit and equipment performance mitigated operational risks

---

## Summary

Cross-border and international leasing introduces significant complexity related to taxation, regulation, currency, and legal systems. The five key components—lessor jurisdiction, lessee jurisdiction, asset location, currency structure, and legal framework—must be carefully coordinated to optimize the transaction. Understanding and navigating the five critical tax considerations—withholding taxes, transfer pricing, permanent establishment, VAT, and repatriation taxes—is essential for tax-efficient structuring.

The five major regulatory considerations—foreign ownership restrictions, export controls, data privacy, AML/KYC, and accounting standards—require thorough compliance planning and coordination with legal and regulatory advisors. Successfully managing the five cross-border risks—currency risk, political risk, legal/enforcement risk, tax law changes, and operational risk—requires robust risk mitigation strategies including hedging, insurance, legal protections, and diversification.

The US-Germany manufacturing equipment lease case study demonstrates how a well-structured cross-border lease can optimize tax efficiency (0% withholding tax through Ireland-Germany treaty), manage currency risk (forward contracts and natural hedging), ensure regulatory compliance (export controls, VAT, GDPR), and deliver attractive returns to the lessor (13.5% equity IRR) while providing competitive financing to the lessee (5.25% after-tax cost).

Cross-border leasing requires sophisticated structuring, thorough due diligence, and ongoing monitoring to navigate the complex interplay of tax, legal, regulatory, and operational considerations across multiple jurisdictions. When executed properly, cross-border leases can unlock significant value for both lessors and lessees while managing risks effectively.`
      }, { $autoCancel: false });

      // Update course curriculum and hours
      const currentCurriculum = course.curriculum || '';
      const updatedCurriculum = currentCurriculum + '\n\nPART 3: SPECIALIZED LEASE STRUCTURES\n- Lesson 3.1: Sale-Leaseback Transactions (60 min)\n- Lesson 3.2: Leveraged Leases and Syndication (60 min)\n- Lesson 3.3: Cross-Border and International Leasing (60 min)';
      
      const currentHours = course.estimated_hours || course.duration_hours || 0;
      const updatedHours = currentHours + 3;

      await pb.collection('courses').update(selectedCourseId, {
        curriculum: updatedCurriculum,
        estimated_hours: updatedHours,
        duration_hours: updatedHours
      }, { $autoCancel: false });

      toast({
        title: 'Success!',
        description: `Created 3 new lessons for ${course.title}`,
      });

      // Reload to show updated data
      setTimeout(() => {
        window.location.reload();
      }, 2000);

    } catch (error) {
      console.error('Error creating lessons:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to create lessons',
        variant: 'destructive'
      });
    } finally {
      setCreating(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-12 h-12 text-[#1e3a8a] animate-spin" />
      </div>
    );
  }

  const selectedCourse = courses.find(c => c.id === selectedCourseId);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Helmet>
        <title>Admin - Create Lessons</title>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create PART 3 Lessons</h1>
          <p className="text-gray-600 mb-8">Add specialized lease structure lessons to Advanced Lease Structuring course</p>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Course
              </label>
              <select
                value={selectedCourseId}
                onChange={(e) => setSelectedCourseId(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent text-gray-900"
              >
                <option value="">-- Select a course --</option>
                {courses.map(course => (
                  <option key={course.id} value={course.id}>
                    {course.title}
                  </option>
                ))}
              </select>
            </div>

            {selectedCourse && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Selected Course: {selectedCourse.title}</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Current Duration:</strong> {selectedCourse.estimated_hours || selectedCourse.duration_hours || 0} hours</p>
                  <p><strong>New Duration:</strong> {(selectedCourse.estimated_hours || selectedCourse.duration_hours || 0) + 3} hours</p>
                </div>
              </div>
            )}

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Lessons to be Created:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Lesson 3.1: Sale-Leaseback Transactions</p>
                    <p className="text-sm text-gray-600">60 minutes - Fundamentals, structure, advantages, considerations, risks, case study</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Lesson 3.2: Leveraged Leases and Syndication</p>
                    <p className="text-sm text-gray-600">60 minutes - Structure, return calculations, syndication models, aircraft case study</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Lesson 3.3: Cross-Border and International Leasing</p>
                    <p className="text-sm text-gray-600">60 minutes - Tax considerations, regulatory compliance, risks, US-Germany case study</p>
                  </div>
                </div>
              </div>
            </div>

            <Button
              onClick={createLessons}
              disabled={!selectedCourseId || creating}
              className="w-full bg-[#1e3a8a] hover:bg-blue-900 text-white py-6 text-lg font-bold"
            >
              {creating ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Creating Lessons...
                </>
              ) : (
                'Create 3 Lessons'
              )}
            </Button>

            {!selectedCourseId && (
              <div className="flex items-start gap-3 text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-4">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p className="text-sm">Please select a course to continue</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLessonCreator;