
import React, { useState, useEffect } from 'react';
import { Calculator, RefreshCw, ArrowRight, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const LeaseVsBuyCalculator = () => {
  const [inputs, setInputs] = useState({
    assetCost: 100000,
    leasePayment: 22000,
    interestRate: 6.5,
    loanTerm: 5,
    taxRate: 21
  });

  const [results, setResults] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: parseFloat(value) || 0 }));
  };

  const calculate = () => {
    const { assetCost, leasePayment, interestRate, loanTerm, taxRate } = inputs;
    
    const r = interestRate / 100;
    const t = taxRate / 100;
    const n = loanTerm;

    // Lease Calculations
    const totalLeasePayments = leasePayment * n;
    const leaseTaxShield = totalLeasePayments * t;
    const netLeaseCost = totalLeasePayments - leaseTaxShield;

    // Buy Calculations (Assuming 100% financing for simplicity of comparison)
    let annualLoanPayment = 0;
    if (r > 0) {
      annualLoanPayment = assetCost * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    } else {
      annualLoanPayment = assetCost / n;
    }
    
    const totalLoanPayments = annualLoanPayment * n;
    const totalInterest = totalLoanPayments - assetCost;
    const interestTaxShield = totalInterest * t;
    
    // Simplified straight-line depreciation over the term
    const depreciationTaxShield = assetCost * t; 
    
    const netBuyCost = totalLoanPayments - interestTaxShield - depreciationTaxShield;

    // NPV Calculations (using after-tax cost of debt as discount rate)
    const discountRate = r * (1 - t);
    
    let npvLease = 0;
    let npvBuy = 0;
    
    for (let year = 1; year <= n; year++) {
      // Lease cash flow per year
      const leaseCF = leasePayment * (1 - t);
      npvLease += leaseCF / Math.pow(1 + discountRate, year);
      
      // Buy cash flow per year (Payment - Interest Shield - Depr Shield)
      // Simplified: average interest per year for shield
      const avgInterest = totalInterest / n;
      const buyCF = annualLoanPayment - (avgInterest * t) - ((assetCost / n) * t);
      npvBuy += buyCF / Math.pow(1 + discountRate, year);
    }

    setResults({
      netLeaseCost,
      netBuyCost,
      npvLease,
      npvBuy,
      totalLeasePayments,
      totalLoanPayments,
      leaseTaxShield,
      buyTaxShield: interestTaxShield + depreciationTaxShield,
      recommendation: npvLease < npvBuy ? 'Lease' : 'Buy',
      difference: Math.abs(npvLease - npvBuy)
    });
  };

  useEffect(() => {
    calculate();
  }, [inputs]);

  const formatCurrency = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Inputs Section */}
      <div className="lg:col-span-4 space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-blue-500/10 rounded-lg border border-blue-500/20">
            <Calculator className="w-5 h-5 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold text-white">Parameters</h3>
        </div>

        <div className="space-y-5">
          <div>
            <Label htmlFor="assetCost" className="calculator-label">Asset Cost ($)</Label>
            <Input 
              id="assetCost" name="assetCost" type="number" 
              value={inputs.assetCost} onChange={handleInputChange}
              className="calculator-input"
            />
          </div>
          <div>
            <Label htmlFor="leasePayment" className="calculator-label">Annual Lease Payment ($)</Label>
            <Input 
              id="leasePayment" name="leasePayment" type="number" 
              value={inputs.leasePayment} onChange={handleInputChange}
              className="calculator-input"
            />
          </div>
          <div>
            <Label htmlFor="interestRate" className="calculator-label">Loan Interest Rate (%)</Label>
            <Input 
              id="interestRate" name="interestRate" type="number" step="0.1"
              value={inputs.interestRate} onChange={handleInputChange}
              className="calculator-input"
            />
          </div>
          <div>
            <Label htmlFor="loanTerm" className="calculator-label">Term (Years)</Label>
            <Input 
              id="loanTerm" name="loanTerm" type="number" 
              value={inputs.loanTerm} onChange={handleInputChange}
              className="calculator-input"
            />
          </div>
          <div>
            <Label htmlFor="taxRate" className="calculator-label">Corporate Tax Rate (%)</Label>
            <Input 
              id="taxRate" name="taxRate" type="number" step="0.1"
              value={inputs.taxRate} onChange={handleInputChange}
              className="calculator-input"
            />
          </div>
          
          <Button 
            variant="outline" 
            onClick={() => setInputs({ assetCost: 100000, leasePayment: 22000, interestRate: 6.5, loanTerm: 5, taxRate: 21 })}
            className="w-full border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white mt-4"
          >
            <RefreshCw className="w-4 h-4 mr-2" /> Reset Defaults
          </Button>
        </div>
      </div>

      {/* Results Section */}
      <div className="lg:col-span-8 space-y-6">
        {results && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className={`border ${results.recommendation === 'Lease' ? 'border-emerald-500/50 bg-emerald-500/5' : 'border-slate-800 bg-slate-900/50'} transition-colors`}>
                <CardContent className="p-6">
                  <div className="text-sm font-medium text-slate-400 mb-1 uppercase tracking-wider">Net Present Value (Lease)</div>
                  <div className={`text-3xl font-bold ${results.recommendation === 'Lease' ? 'text-emerald-400' : 'text-white'}`}>
                    {formatCurrency(results.npvLease)}
                  </div>
                  <div className="text-sm text-slate-500 mt-2">Total nominal cost: {formatCurrency(results.netLeaseCost)}</div>
                </CardContent>
              </Card>
              
              <Card className={`border ${results.recommendation === 'Buy' ? 'border-emerald-500/50 bg-emerald-500/5' : 'border-slate-800 bg-slate-900/50'} transition-colors`}>
                <CardContent className="p-6">
                  <div className="text-sm font-medium text-slate-400 mb-1 uppercase tracking-wider">Net Present Value (Buy)</div>
                  <div className={`text-3xl font-bold ${results.recommendation === 'Buy' ? 'text-emerald-400' : 'text-white'}`}>
                    {formatCurrency(results.npvBuy)}
                  </div>
                  <div className="text-sm text-slate-500 mt-2">Total nominal cost: {formatCurrency(results.netBuyCost)}</div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 flex items-start gap-4">
              <Info className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">
                  Recommendation: <span className="text-blue-400">{results.recommendation}</span>
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  Based on the Net Present Value (NPV) analysis, {results.recommendation.toLowerCase()}ing the asset is more cost-effective by <strong>{formatCurrency(results.difference)}</strong> in today's dollars. This accounts for the time value of money and tax shields.
                </p>
              </div>
            </div>

            <Card className="bg-slate-900/50 border-slate-800 overflow-hidden">
              <Table>
                <TableHeader className="bg-slate-800/50">
                  <TableRow className="border-slate-700 hover:bg-transparent">
                    <TableHead className="text-slate-300 font-semibold">Cost Component</TableHead>
                    <TableHead className="text-right text-slate-300 font-semibold">Lease Option</TableHead>
                    <TableHead className="text-right text-slate-300 font-semibold">Buy Option</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-slate-800 hover:bg-slate-800/30">
                    <TableCell className="font-medium text-slate-300">Gross Payments</TableCell>
                    <TableCell className="text-right text-slate-400">{formatCurrency(results.totalLeasePayments)}</TableCell>
                    <TableCell className="text-right text-slate-400">{formatCurrency(results.totalLoanPayments)}</TableCell>
                  </TableRow>
                  <TableRow className="border-slate-800 hover:bg-slate-800/30">
                    <TableCell className="font-medium text-slate-300">Total Tax Shield</TableCell>
                    <TableCell className="text-right text-emerald-400/80">-{formatCurrency(results.leaseTaxShield)}</TableCell>
                    <TableCell className="text-right text-emerald-400/80">-{formatCurrency(results.buyTaxShield)}</TableCell>
                  </TableRow>
                  <TableRow className="border-slate-800 hover:bg-slate-800/30 bg-slate-800/20">
                    <TableCell className="font-bold text-white">Net Nominal Cost</TableCell>
                    <TableCell className="text-right font-bold text-white">{formatCurrency(results.netLeaseCost)}</TableCell>
                    <TableCell className="text-right font-bold text-white">{formatCurrency(results.netBuyCost)}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default LeaseVsBuyCalculator;
