import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, DollarSign, ArrowRight } from 'lucide-react';

const DealCard = ({ deal, actionLabel }) => {
  return (
    <Link to={`/deals/${deal.id}`}>
      <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-slate-800 hover:border-blue-500/30 transition-all duration-300 group h-full">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <Briefcase className="w-5 h-5 text-blue-400" />
            </div>
            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
              deal.status === 'pending' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
              deal.status === 'active' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
              deal.status === 'completed' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
              'bg-slate-700 text-slate-300 border border-slate-600'
            }`}>
              {deal.status || 'Draft'}
            </span>
          </div>
          
          <h3 className="font-semibold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
            {deal.title}
          </h3>
          
          <p className="text-sm text-slate-400 mb-4 line-clamp-2">
            {deal.description || 'No description provided'}
          </p>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 text-slate-400">
              <DollarSign className="w-4 h-4" />
              <span className="font-medium text-white">
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(deal.value || 0)}
              </span>
            </div>
            <span className="text-slate-500 text-xs">
              {new Date(deal.created).toLocaleDateString()}
            </span>
          </div>
        </div>
        
        <div className="px-6 py-4 bg-slate-800/50 border-t border-slate-800 flex items-center justify-between group-hover:bg-slate-800/80 transition-colors">
          <span className="text-sm text-blue-400 font-medium">{actionLabel}</span>
          <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default DealCard;