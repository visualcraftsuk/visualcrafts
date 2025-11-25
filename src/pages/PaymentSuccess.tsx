import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { CheckCircle2, ArrowRight, Download, Mail } from 'lucide-react';

export default function PaymentSuccess() {
  useEffect(() => {
    // In a real implementation, you would:
    // 1. Verify payment with your backend
    // 2. Send confirmation email
    // 3. Update user account/subscription
    console.log('Payment successful - sending confirmation email...');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white flex items-center justify-center px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="bg-green-100 text-green-600 p-6 rounded-full w-fit mx-auto mb-6"
          >
            <CheckCircle2 size={64} />
          </motion.div>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-4xl mb-4">Payment Successful!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for choosing VisualCrafts. Your payment has been processed successfully.
            </p>
          </motion.div>

          {/* Order Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-50 rounded-xl p-6 mb-8 text-left"
          >
            <h2 className="text-xl mb-4">Order Details</h2>
            <div className="space-y-3 text-gray-600">
              <div className="flex justify-between">
                <span>Order ID:</span>
                <span className="text-purple-600">#CH-{Date.now()}</span>
              </div>
              <div className="flex justify-between">
                <span>Date:</span>
                <span>{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Status:</span>
                <span className="text-green-600">Confirmed</span>
              </div>
            </div>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <h3 className="text-xl mb-4">What's Next?</h3>
            <ul className="space-y-3 text-left text-gray-600">
              <li className="flex items-start gap-3">
                <Mail className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                <span>
                  A confirmation email has been sent to your email address with all the details.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Download className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                <span>Your invoice will be available for download in your account dashboard.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                <span>
                  Our team will contact you within 24 hours to kick off your project.
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/" className="flex-1">
              <Button variant="outline" className="w-full">
                Return Home
              </Button>
            </Link>
            <Link to="/contact" className="flex-1">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 group">
                Contact Support
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </Link>
          </motion.div>

          {/* Support */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-sm text-gray-500 mt-8"
          >
            Need help? Contact us at{' '}
            <a href="mailto:visualcrafts.uk@gmail.com" className="text-purple-600 hover:underline">
              visualcrafts.uk@gmail.com
            </a>{' '}
            or call{' '}
            <a href="tel:+447385312319" className="text-purple-600 hover:underline">
              +44 7385312319
            </a>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
