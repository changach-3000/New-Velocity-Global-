import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useChatBot } from '@/hooks/useChatBot.js';
import { CheckCircle2, Loader2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LeadCaptureForm = ({ mode = 'form', onDismiss }) => {
  const { saveLead } = useChatBot();
  const [step, setStep] = useState(mode); // 'prompt', 'form', 'success'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const result = await saveLead(formData);
    setIsSubmitting(false);

    if (result.success) {
      setStep('success');
    } else {
      setErrors({ submit: "Failed to save. Please try again." });
    }
  };

  // Prompt Mode (Yes/No)
  if (step === 'prompt') {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-800/80 backdrop-blur-sm border border-blue-500/30 rounded-lg p-4 shadow-lg w-full max-w-[280px]"
      >
        <p className="text-white text-sm mb-3">Would you like a specialist to contact you with more details?</p>
        <div className="flex gap-2">
          <Button 
            size="sm" 
            onClick={() => setStep('form')}
            className="flex-1 bg-blue-600 hover:bg-blue-500 text-white h-8 text-xs"
          >
            Yes, please
          </Button>
          <Button 
            size="sm" 
            variant="outline"
            onClick={onDismiss}
            className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700 h-8 text-xs"
          >
            No thanks
          </Button>
        </div>
      </motion.div>
    );
  }

  // Success Mode
  if (step === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-4 text-center"
      >
        <div className="flex justify-center mb-2">
          <CheckCircle2 className="w-8 h-8 text-emerald-500" />
        </div>
        <p className="text-emerald-100 font-medium text-sm">Thanks! We've received your info.</p>
      </motion.div>
    );
  }

  // Form Mode
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-lg p-4 shadow-lg w-full max-w-[280px] relative"
    >
      {onDismiss && (
        <button 
          onClick={onDismiss}
          className="absolute top-2 right-2 text-slate-400 hover:text-white"
        >
          <X className="w-3 h-3" />
        </button>
      )}
      <h4 className="text-white font-semibold mb-3 text-sm">Contact Information</h4>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <Input
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-400 h-8 text-sm"
          />
          {errors.name && <span className="text-red-400 text-xs">{errors.name}</span>}
        </div>
        
        <div>
          <Input
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-400 h-8 text-sm"
          />
          {errors.email && <span className="text-red-400 text-xs">{errors.email}</span>}
        </div>

        <div>
          <Input
            placeholder="Phone (Optional)"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-400 h-8 text-sm"
          />
        </div>

        {errors.submit && <div className="text-red-400 text-xs text-center">{errors.submit}</div>}

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white h-8 text-sm"
        >
          {isSubmitting ? <Loader2 className="w-3 h-3 animate-spin" /> : "Submit"}
        </Button>
      </form>
    </motion.div>
  );
};

export default LeadCaptureForm;