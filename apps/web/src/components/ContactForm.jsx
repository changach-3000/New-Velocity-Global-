import React from 'react';
import useContactForm from '@/hooks/useContactForm';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea'; // Assuming shadcn textarea exists or using standard
import { Loader2, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const ContactForm = () => {
  const {
    formData,
    loading,
    error,
    success,
    handleChange,
    handleSubmit
  } = useContactForm();

  return (
    <Card className="w-full bg-white shadow-xl border-0">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-gray-900">Send us a message</CardTitle>
        <CardDescription>
          Fill out the form below and our team will get back to you shortly.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {success ? (
          <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-in fade-in duration-500">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Message Sent Successfully!</h3>
            <p className="text-gray-600 max-w-xs mx-auto">
              Thank you for contacting Velocity Global Leasing. We'll be in touch within 1 business day.
            </p>
            <Button 
              onClick={() => window.location.reload()} 
              variant="outline" 
              className="mt-4"
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-gray-700 font-medium">Full Name <span className="text-red-500">*</span></Label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="bg-gray-50 border-gray-200 focus:bg-white placeholder:text-gray-300 transition-colors text-gray-900"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">Work Email <span className="text-red-500">*</span></Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-50 border-gray-200 focus:bg-white placeholder:text-gray-300 transition-colors text-gray-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-gray-700 font-medium">Company Name</Label>
                <Input
                  id="companyName"
                  name="companyName"
                  placeholder="Acme Corp"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="bg-gray-50 border-gray-200 focus:bg-white placeholder:text-gray-300 transition-colors text-gray-900"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-gray-700 font-medium">Subject <span className="text-red-500">*</span></Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Leasing Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-gray-50 border-gray-200 focus:bg-white placeholder:text-gray-300 transition-colors text-gray-900"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-gray-700 font-medium">Message <span className="text-red-500">*</span></Label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleChange}
                required
                className="flex w-full rounded-md border border-gray-200 bg-gray-50 placeholder:text-gray-300 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:bg-white transition-colors text-gray-900 resize-none"
              />
            </div>

            {error && (
              <div className="p-3 rounded-md bg-red-50 border border-red-100 text-red-600 text-sm">
                {error}
              </div>
            )}

            <Button 
              type="submit" 
              disabled={loading}
              className="w-full h-12 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200"
              style={{ backgroundColor: 'oklch(62.3% 0.214 259.815)' }}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default ContactForm;