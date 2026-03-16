import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

/**
 * Initialize nodemailer transporter
 * Uses environment variables for email configuration
 */
const createTransporter = () => {
  const emailService = process.env.EMAIL_SERVICE || 'gmail';
  const emailUser = process.env.EMAIL_USER;
  const emailPassword = process.env.EMAIL_PASSWORD;

  if (!emailUser || !emailPassword) {
    console.warn('[Contact] WARNING: Email credentials not configured in .env file');
    return null;
  }

  return nodemailer.createTransport({
    service: emailService,
    auth: {
      user: emailUser,
      pass: emailPassword
    }
  });
};

/**
 * Format email body with form details
 */
const formatEmailBody = (data) => {
  const { fullName, email, companyName, subject, message } = data;
  
  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
    .header h2 { margin: 0; color: #2c3e50; }
    .content { margin-bottom: 20px; }
    .field { margin-bottom: 15px; }
    .field-label { font-weight: bold; color: #2c3e50; margin-bottom: 5px; }
    .field-value { background-color: #f8f9fa; padding: 10px; border-left: 3px solid #3498db; }
    .message-section { background-color: #ecf0f1; padding: 15px; border-radius: 5px; margin-top: 20px; }
    .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #7f8c8d; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Contact Form Submission</h2>
    </div>
    
    <div class="content">
      <div class="field">
        <div class="field-label">Full Name:</div>
        <div class="field-value">${escapeHtml(fullName)}</div>
      </div>
      
      <div class="field">
        <div class="field-label">Email Address:</div>
        <div class="field-value">${escapeHtml(email)}</div>
      </div>
      
      <div class="field">
        <div class="field-label">Company Name:</div>
        <div class="field-value">${escapeHtml(companyName || 'Not provided')}</div>
      </div>
      
      <div class="field">
        <div class="field-label">Subject:</div>
        <div class="field-value">${escapeHtml(subject)}</div>
      </div>
      
      <div class="message-section">
        <div class="field-label">Message:</div>
        <div style="margin-top: 10px; white-space: pre-wrap;">${escapeHtml(message)}</div>
      </div>
    </div>
    
    <div class="footer">
      <p>This email was sent from the Velocity Global Leasing contact form.</p>
      <p>Timestamp: ${new Date().toISOString()}</p>
    </div>
  </div>
</body>
</html>
  `.trim();
};

/**
 * Escape HTML special characters to prevent injection
 */
const escapeHtml = (text) => {
  if (!text) return '';
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
};

/**
 * Validate email format
 */
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * POST /contact/send-email
 * Sends contact form submission email
 * 
 * Request body:
 * {
 *   fullName: string (required),
 *   email: string (required, valid email),
 *   companyName: string (optional),
 *   subject: string (required),
 *   message: string (required)
 * }
 * 
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   messageId?: string (if successful)
 * }
 */
router.post('/send-email', async (req, res) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [Contact] Received send-email request`);
  
  try {
    const { fullName, email, companyName, subject, message } = req.body;

    // 1. Validate required fields
    console.log(`[${timestamp}] [Contact] Validating form fields...`);
    
    if (!fullName || typeof fullName !== 'string' || fullName.trim() === '') {
      console.warn(`[${timestamp}] [Contact] Validation failed: Missing or invalid fullName`);
      return res.status(400).json({
        success: false,
        message: 'Full name is required and must be a non-empty string'
      });
    }

    if (!email || typeof email !== 'string' || !isValidEmail(email)) {
      console.warn(`[${timestamp}] [Contact] Validation failed: Invalid email format`);
      return res.status(400).json({
        success: false,
        message: 'Valid email address is required'
      });
    }

    if (!subject || typeof subject !== 'string' || subject.trim() === '') {
      console.warn(`[${timestamp}] [Contact] Validation failed: Missing or invalid subject`);
      return res.status(400).json({
        success: false,
        message: 'Subject is required and must be a non-empty string'
      });
    }

    if (!message || typeof message !== 'string' || message.trim() === '') {
      console.warn(`[${timestamp}] [Contact] Validation failed: Missing or invalid message`);
      return res.status(400).json({
        success: false,
        message: 'Message is required and must be a non-empty string'
      });
    }

    console.log(`[${timestamp}] [Contact] Form validation passed`);
    console.log(`[${timestamp}] [Contact] From: ${fullName} <${email}>`);
    console.log(`[${timestamp}] [Contact] Company: ${companyName || 'Not provided'}`);

    // 2. Initialize email transporter
    console.log(`[${timestamp}] [Contact] Initializing email transporter...`);
    const transporter = createTransporter();
    
    if (!transporter) {
      console.error(`[${timestamp}] [Contact] Email transporter initialization failed - missing credentials`);
      return res.status(503).json({
        success: false,
        message: 'Email service is not properly configured. Please try again later.'
      });
    }

    // 3. Prepare email options
    const emailTo = process.env.EMAIL_TO || 'info@velocitygloballeasing.com';
    const emailFrom = process.env.EMAIL_FROM || process.env.EMAIL_USER;
    const emailSubject = `New Contact Form Submission from ${fullName}`;
    const emailBody = formatEmailBody({ fullName, email, companyName, subject, message });

    console.log(`[${timestamp}] [Contact] Preparing email...`);
    console.log(`[${timestamp}] [Contact] To: ${emailTo}`);
    console.log(`[${timestamp}] [Contact] Subject: ${emailSubject}`);

    // 4. Send email
    console.log(`[${timestamp}] [Contact] Sending email...`);
    const info = await transporter.sendMail({
      from: emailFrom,
      to: emailTo,
      replyTo: email,
      subject: emailSubject,
      html: emailBody,
      text: `New Contact Form Submission\n\nFrom: ${fullName}\nEmail: ${email}\nCompany: ${companyName || 'Not provided'}\nSubject: ${subject}\n\nMessage:\n${message}`
    });

    console.log(`[${timestamp}] [Contact] Email sent successfully. Message ID: ${info.messageId}`);
    
    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully. We will get back to you soon.',
      messageId: info.messageId
    });

  } catch (error) {
    const timestamp = new Date().toISOString();
    console.error(`[${timestamp}] [Contact] Error sending email: ${error.message}`);
    console.error(`[${timestamp}] [Contact] Error type: ${error.constructor.name}`);
    console.error(`[${timestamp}] [Contact] Stack trace:`, error.stack);

    // Determine error type for better user feedback
    let userMessage = 'Failed to send email. Please try again later.';
    
    if (error.message.includes('EAUTH')) {
      userMessage = 'Email service authentication failed. Please contact support.';
      console.error(`[${timestamp}] [Contact] ERROR TYPE: Authentication error`);
    } else if (error.message.includes('ECONNREFUSED') || error.message.includes('ENOTFOUND')) {
      userMessage = 'Email service is temporarily unavailable. Please try again later.';
      console.error(`[${timestamp}] [Contact] ERROR TYPE: Network error`);
    } else if (error.message.includes('Invalid email')) {
      userMessage = 'Invalid email configuration. Please contact support.';
      console.error(`[${timestamp}] [Contact] ERROR TYPE: Email configuration error`);
    }

    return res.status(500).json({
      success: false,
      message: userMessage,
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

export default router;