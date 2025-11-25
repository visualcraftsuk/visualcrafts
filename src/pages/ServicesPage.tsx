import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { 
  Palette, 
  Share2, 
  Film, 
  Package, 
  CheckCircle2,
  ArrowRight 
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'branding',
      icon: Palette,
      title: 'Branding & Graphic Design',
      description:
        'Create a lasting impression with stunning visual identities that capture your brand essence and resonate with your audience.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2Mzg0NzAyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-purple-600 to-purple-400',
      subcategories: [
        {
          name: 'Logo Design',
          description: 'Professional logo designs that represent your brand identity perfectly.',
        },
        {
          name: 'Poster Design',
          description: 'Eye-catching posters that grab attention and communicate your message.',
        },
        {
          name: 'Flyer & Leaflet Design',
          description: 'Marketing materials that drive action and engagement.',
        },
        {
          name: 'Banner Design',
          description: 'Digital and print banners that make a bold statement.',
        },
        {
          name: 'Hoarding Design',
          description: 'Large-format designs that dominate outdoor advertising spaces.',
        },
      ],
      benefits: [
        'Memorable brand identity',
        'Professional appearance',
        'Stand out from competitors',
        'Consistent visual language',
        'Increase brand recognition',
      ],
    },
    {
      id: 'social-media',
      icon: Share2,
      title: 'Social Media Creation',
      description:
        'Engage your audience with compelling social media content that drives interactions, builds community, and grows your online presence.',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGRlc2lnbnxlbnwxfHx8fDE3NjM4MjQ4MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-pink-600 to-pink-400',
      subcategories: [
        {
          name: 'Social Media Design Templates',
          description: 'Custom templates for consistent and professional social media presence.',
        },
        {
          name: 'Content Writing & Creation',
          description: 'Engaging copy and visuals that resonate with your target audience.',
        },
        {
          name: 'Content Scheduling & Planning',
          description: 'Strategic content calendars to maintain consistent posting schedules.',
        },
        {
          name: 'Monthly Calendar Management',
          description: 'Complete management of your social media content calendar.',
        },
      ],
      benefits: [
        'Increased engagement',
        'Consistent brand voice',
        'Save time and resources',
        'Data-driven strategies',
        'Grow your audience',
      ],
    },
    {
      id: 'motion-graphics',
      icon: Film,
      title: 'Motion Graphics',
      description:
        'Bring your brand to life with dynamic animations and motion graphics that capture attention and tell your story in engaging ways.',
      image: 'https://images.unsplash.com/photo-1628494391268-c9935bc384d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBncmFwaGljc3xlbnwxfHx8fDE3NjM3Njg1NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-blue-600 to-blue-400',
      subcategories: [
        {
          name: 'Short Promos',
          description: 'Attention-grabbing promotional videos for your products or services.',
        },
        {
          name: 'Animated Posts',
          description: 'Dynamic social media animations that stop the scroll.',
        },
        {
          name: 'Logo Animation',
          description: 'Bring your logo to life with professional animations.',
        },
        {
          name: 'Reels & Story Animations',
          description: 'Engaging short-form content perfect for Instagram and TikTok.',
        },
      ],
      benefits: [
        'Higher engagement rates',
        'Better message retention',
        'Stand out on social feeds',
        'Versatile content format',
        'Professional appearance',
      ],
    },
    {
      id: 'packaging',
      icon: Package,
      title: 'Packaging Design',
      description:
        'Create packaging that not only protects your product but also tells your brand story and entices customers to make a purchase.',
      image: 'https://images.unsplash.com/photo-1693606780204-f70b72652fb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMHBhY2thZ2luZ3xlbnwxfHx8fDE3NjM4MzI1MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-orange-600 to-orange-400',
      subcategories: [
        {
          name: 'Product Packaging',
          description: 'Complete packaging solutions that enhance product appeal.',
        },
        {
          name: 'Label Design',
          description: 'Product labels that communicate quality and brand values.',
        },
        {
          name: 'Box & Container Mockups',
          description: 'Realistic mockups to visualize your packaging before production.',
        },
      ],
      benefits: [
        'Increase shelf appeal',
        'Build brand recognition',
        'Protect your product',
        'Communicate value',
        'Boost sales',
      ],
    },
  ];

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
              Our{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive creative solutions to elevate your brand and drive results.
            </p>
          </motion.div>

          {/* Service Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                  activeService === index
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:shadow-md'
                }`}
              >
                <service.icon size={20} />
                <span className="hidden sm:inline">{service.title}</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: activeService === index ? 1 : 0 }}
              className={activeService === index ? 'block' : 'hidden'}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl shadow-2xl w-full"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 rounded-2xl`}></div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className={`inline-block bg-gradient-to-r ${service.color} text-white p-3 rounded-lg mb-4`}>
                    <service.icon size={32} />
                  </div>
                  <h2 className="text-3xl lg:text-4xl mb-4">{service.title}</h2>
                  <p className="text-xl text-gray-600 mb-6">{service.description}</p>

                  <h3 className="text-2xl mb-4">Key Benefits</h3>
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 group"
                    >
                      Get Started
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </Button>
                  </Link>
                </motion.div>
              </div>

              {/* Subcategories */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-2xl lg:text-3xl mb-8 text-center">What We Offer</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.subcategories.map((sub, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
                    >
                      <h4 className="text-xl mb-3">{sub.name}</h4>
                      <p className="text-gray-600">{sub.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Sample Work Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-16"
              >
                <h3 className="text-2xl lg:text-3xl mb-8 text-center">Sample Work</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center"
                    >
                      <service.icon size={48} className="text-purple-300" />
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Link to="/portfolio">
                    <Button variant="outline" size="lg">
                      View Full Portfolio
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Send Inquiry
              </Button>
            </Link>
{/*             <Link to="/pricing">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Pricing
              </Button>
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}
