import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { XCircle, ArrowLeft, Mail, Phone } from 'lucide-react';

export default function PaymentCancelled() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white flex items-center justify-center px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
          {/* Cancel Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="bg-orange-100 text-orange-600 p-6 rounded-full w-fit mx-auto mb-6"
          >
            <XCircle size={64} />
          </motion.div>

          {/* Cancel Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-4xl mb-4">Payment Cancelled</h1>
            <p className="text-xl text-gray-600 mb-8">
              Your payment was cancelled. No charges have been made to your account.
            </p>
          </motion.div>

          {/* Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-50 rounded-xl p-6 mb-8 text-left"
          >
            <h2 className="text-xl mb-4">What Happened?</h2>
            <p className="text-gray-600 mb-4">
              Your payment process was interrupted or cancelled. This could have happened for several
              reasons:
            </p>
            <ul className="space-y-2 text-gray-600 list-disc list-inside">
              <li>You clicked the cancel or back button</li>
              <li>Your payment session timed out</li>
              <li>There was an issue with your payment method</li>
              <li>You closed the payment window</li>
            </ul>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <h3 className="text-xl mb-4">What Would You Like To Do?</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="mb-2">Try Again</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Return to pricing and complete your purchase.
                </p>
                <Link to="/pricing">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    View Pricing
                  </Button>
                </Link>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg">
                <h4 className="mb-2">Need Help?</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Our team is here to assist you with any questions.
                </p>
                <Link to="/contact">
                  <Button variant="outline" className="w-full">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <Link to="/">
              <Button variant="outline" className="w-full group">
                <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={18} />
                Return to Homepage
              </Button>
            </Link>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 pt-8 border-t border-gray-200"
          >
            <h4 className="mb-4">Need Assistance?</h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:visualcrafts.uk@gmail.com"
                className="flex items-center gap-2 text-purple-600 hover:underline"
              >
                <Mail size={18} />
                <span>visualcrafts.uk@gmail.com</span>
              </a>
              <a
                href="tel:+447385312319"
                className="flex items-center gap-2 text-purple-600 hover:underline"
              >
                <Phone size={18} />
                <span>+44 7385312319</span>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
