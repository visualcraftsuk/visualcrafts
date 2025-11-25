import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PricingPage() {
  const navigate = useNavigate();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    company: '',
  });

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      description: 'Perfect for small businesses getting started',
      features: [
        '5 Social Media Posts/Month',
        '1 Logo Design',
        'Basic Branding Package',
        'Email Support',
        '2 Revisions',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'professional',
      name: 'Professional',
      monthlyPrice: 599,
      yearlyPrice: 5990,
      description: 'For growing businesses needing more',
      features: [
        '15 Social Media Posts/Month',
        '3 Logo Designs',
        'Complete Branding Package',
        'Priority Support',
        '5 Revisions',
        'Motion Graphics (2/month)',
        'Content Calendar',
      ],
      color: 'from-purple-500 to-pink-500',
      popular: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      monthlyPrice: 1299,
      yearlyPrice: 12990,
      description: 'For established brands with high demands',
      features: [
        'Unlimited Social Media Posts',
        'Unlimited Designs',
        'Full Brand Identity Suite',
        'Dedicated Account Manager',
        'Unlimited Revisions',
        'Motion Graphics (10/month)',
        'Packaging Design',
        'Priority Turnaround',
      ],
      color: 'from-orange-500 to-red-500',
    },
  ];

  const oneTimeServices = [
    { name: 'Logo Design', price: 499 },
    { name: 'Website Design', price: 1999 },
    { name: 'Brand Identity Package', price: 1499 },
    { name: 'Social Media Campaign', price: 799 },
    { name: 'Motion Graphics Video', price: 899 },
    { name: 'Packaging Design', price: 699 },
  ];

  const handleCheckout = (planId: string, price: number) => {
    if (!customerInfo.name || !customerInfo.email) {
      alert('Please fill in your name and email to proceed.');
      return;
    }

    // In a real implementation, this would integrate with Stripe/PayPal
    console.log('Processing payment for:', {
      plan: planId,
      price,
      customer: customerInfo,
      billingPeriod,
    });

    // Simulate payment processing
    setTimeout(() => {
      navigate('/payment-success');
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-6xl mb-6">
              Simple,{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Transparent Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your needs. No hidden fees, cancel anytime.
            </p>
          </motion.div>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="bg-white rounded-full p-1 shadow-lg flex gap-1">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2 rounded-full transition-all ${
                  billingPeriod === 'monthly'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-6 py-2 rounded-full transition-all flex items-center gap-2 ${
                  billingPeriod === 'yearly'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Yearly
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Save 17%
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl text-center mb-12">
            Subscription{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Plans
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm flex items-center gap-1">
                      <Sparkles size={14} />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <Card
                  className={`h-full hover:shadow-2xl transition-all ${
                    plan.popular ? 'border-2 border-purple-600' : ''
                  }`}
                >
                  <CardHeader>
                    <div className={`bg-gradient-to-r ${plan.color} text-white p-3 rounded-lg w-fit mb-4`}>
                      <Sparkles size={24} />
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl">
                        ${billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-gray-600">/{billingPeriod === 'monthly' ? 'mo' : 'yr'}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`w-full ${
                        plan.popular
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                          : ''
                      }`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      Select Plan
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* One-Time Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">
              One-Time{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Need a specific service? Choose from our à la carte options.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {oneTimeServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl mb-2">{service.name}</h3>
                <div className="text-3xl mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  ${service.price}
                </div>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setSelectedPlan(service.name)}
                >
                  Purchase
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Checkout Form */}
      {selectedPlan && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Complete Your Purchase</CardTitle>
                  <CardDescription>
                    Selected: <span className="text-purple-600">{selectedPlan}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const plan = plans.find((p) => p.id === selectedPlan);
                      if (plan) {
                        const price =
                          billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
                        handleCheckout(selectedPlan, price);
                      } else {
                        const service = oneTimeServices.find((s) => s.name === selectedPlan);
                        if (service) {
                          handleCheckout(selectedPlan, service.price);
                        }
                      }
                    }}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={customerInfo.email}
                        onChange={(e) =>
                          setCustomerInfo({ ...customerInfo, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name (Optional)</Label>
                      <Input
                        id="company"
                        value={customerInfo.company}
                        onChange={(e) =>
                          setCustomerInfo({ ...customerInfo, company: e.target.value })
                        }
                        placeholder="Your Company"
                      />
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">
                        <strong>Note:</strong> This is a demo checkout. In production, this would
                        integrate with Stripe or PayPal for secure payment processing.
                      </p>
                      <p className="text-sm text-gray-600">
                        Add your Stripe/PayPal API keys in the environment variables to enable real
                        payments.
                      </p>
                    </div>

                    <div className="flex gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setSelectedPlan(null)}
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      >
                        Proceed to Payment
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
