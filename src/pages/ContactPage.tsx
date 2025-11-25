import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Mail, Phone, MapPin, Send, MessageSquare, Upload, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Branding & Graphic Design',
    'Social Media Creation',
    'Motion Graphics',
    'Packaging Design',
    'Other',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    console.log('Form submitted:', { ...formData, file: selectedFile?.name });

    // In a real implementation, this would send data to your backend
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
        setSelectedFile(null);
      }, 3000);
    }, 1500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/7385312319', '_blank');
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
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl mb-6">
              Get in{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how we can help bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 -mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="shadow-xl hover:shadow-2xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-lg w-fit mb-4">
                    <Phone size={24} />
                  </div>
                  <h3 className="text-xl mb-2">Call Us</h3>
                  <p className="text-gray-600">+44 7385312319</p>
                  <p className="text-gray-600">Mon-Fri, 9am-5pm EST</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="shadow-xl hover:shadow-2xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-lg w-fit mb-4">
                    <Mail size={24} />
                  </div>
                  <h3 className="text-xl mb-2">Email Us</h3>
                  <p className="text-gray-600">visualcrafts.uk@gmail.com</p>
                  <p className="text-gray-600">We reply within 24 hours</p>
                </CardContent>
              </Card>
            </motion.div>

{/*             <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="shadow-xl hover:shadow-2xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-lg w-fit mb-4">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-xl mb-2">Visit Us</h3>
                  <p className="text-gray-600">123 Creative Street</p>
                  <p className="text-gray-600">Design City, DC 12345</p>
                </CardContent>
              </Card>
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us an Inquiry</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-12"
                    >
                      <div className="bg-green-100 text-green-600 p-4 rounded-full w-fit mx-auto mb-4">
                        <CheckCircle2 size={48} />
                      </div>
                      <h3 className="text-2xl mb-2">Thank You!</h3>
                      <p className="text-gray-600">
                        Your inquiry has been submitted successfully. We'll get back to you soon!
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+44 7890123456"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interested In *</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => setFormData({ ...formData, service: value })}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Your Message *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your project..."
                          rows={5}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="file">Attach File (Optional)</Label>
                        <div className="flex items-center gap-4">
                          <Input
                            id="file"
                            type="file"
                            onChange={handleFileChange}
                            className="hidden"
                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                          />
                          <label
                            htmlFor="file"
                            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                          >
                            <Upload size={20} />
                            <span>Choose File</span>
                          </label>
                          {selectedFile && (
                            <span className="text-sm text-gray-600">{selectedFile.name}</span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500">
                          Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)
                        </p>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">
                          <strong>Note:</strong> This is a demo form. In production, form submissions
                          would be sent to your backend with auto-response email functionality.
                        </p>
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 group"
                      >
                        {isSubmitting ? (
                          'Sending...'
                        ) : (
                          <>
                            Send Inquiry
                            <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Side - Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl mb-4">
                  Let's Start a{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Conversation
                  </span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Whether you're looking to build a brand from scratch, refresh your existing identity,
                  or need ongoing creative support, we're here to help. Our team is ready to discuss
                  your project and provide expert guidance.
                </p>
              </div>

              {/* WhatsApp Contact */}
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500 text-white p-3 rounded-lg">
                      <MessageSquare size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl mb-2">Chat on WhatsApp</h3>
                      <p className="text-gray-600 mb-4">
                        Get instant responses to your questions. We're available on WhatsApp!
                      </p>
                      <Button
                        onClick={openWhatsApp}
                        className="bg-green-500 hover:bg-green-600 text-white"
                      >
                        <MessageSquare className="mr-2" size={18} />
                        Start WhatsApp Chat
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Quick Links */}
{/*               <Card>
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-purple-600 hover:underline">
                        View Our Portfolio
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-purple-600 hover:underline">
                        Pricing & Packages
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-purple-600 hover:underline">
                        Frequently Asked Questions
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-purple-600 hover:underline">
                        Client Testimonials
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin size={48} className="mx-auto mb-4" />
                <p className="text-xl">Interactive Map Placeholder</p>
                <p className="text-sm">Integrate Google Maps or Mapbox here</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
}
