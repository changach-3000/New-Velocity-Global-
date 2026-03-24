import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { Loader2, CreditCard, UserPlus } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { useToast } from '@/hooks/use-toast.js';
import apiServerClient from '@/lib/apiServerClient.js';

export const MembershipPaymentHandler = ({ tier, price, className, variant = "default", children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handlePurchase = async () => {
    if (!currentUser) {
      navigate('/login?returnTo=/membership');
      return;
    }

    setIsLoading(true);
    try {
      const requestData = { 
        tier: tier,
        userId: currentUser.id,
        userEmail: currentUser.email 
      };
      
      console.log('Sending request data:', requestData); // Debug log
      
      const response = await apiServerClient.fetch('/membership/initiate-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',  // ← CRITICAL: Add this header
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        let errorMsg = 'Failed to initiate payment';
        try {
          const errorData = await response.json();
          errorMsg = errorData.error || errorMsg;
          console.error('Error response:', errorData); // Debug log
        } catch (_) {}
        throw new Error(errorMsg);
      }

      const data = await response.json();
      console.log('Success response:', data); // Debug log

      if (data.authorization_url) {
         window.location.href = data.authorization_url;
        toast({
          title: "Payment Initiated",
          description: "Please complete your payment in the new tab.",
        });
      } else {
        throw new Error('No authorization URL received');
      }
    } catch (error) {
      console.error('Payment initiation error:', error);
      toast({
        title: "Payment Error",
        description: error.message || "Could not connect to payment provider. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handlePurchase}
      disabled={isLoading}
      className={className}
      variant={variant}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        children || (
          <>
            {currentUser ? (
              <>
                <CreditCard className="mr-2 h-4 w-4" />
                Purchase {tier} (${price})
              </>
            ) : (
              <>
                <UserPlus className="mr-2 h-4 w-4" />
                Sign Up to Purchase
              </>
            )}
          </>
        )
      )}
    </Button>
  );
};

export default MembershipPaymentHandler;