import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Target, Eye, Heart, Award } from 'lucide-react';

export default function AboutPreview() {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We empower brands to tell their unique stories through creative excellence.',
    },
    {
      icon: Eye,
      title: 'Visionary',
      description: 'Always ahead of trends, creating designs that stand out and resonate.',
    },
    {
      icon: Heart,
      title: 'Client-Focused',
      description: 'Your success is our success. We build lasting partnerships, not just projects.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality in every project we undertake.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              VisualCrafts
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a team of passionate designers, strategists, and creators dedicated to transforming
            brands through innovative marketing solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-lg w-fit mb-4">
                <value.icon size={24} />
              </div>
              <h3 className="text-xl mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link to="/about">
            <Button size="lg" variant="outline">
              Learn More About Us
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
