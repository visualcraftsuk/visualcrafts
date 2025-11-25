import React, { useState } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion'; // Updated import
import { X, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const filters = ['All', 'Branding', 'Social Media', 'Motion Graphics', 'Packaging'];

  const portfolioItems = [
    {
      id: 1,
      title: 'Memorial Hospital Logo',
      category: 'Branding',
      type: 'image',
      src: 'images/branding1.png?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2Mzg0NzAyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Modern logo design for memorial hospital',
    },
    {
      id: 2,
      title: 'Instagram Campaign',
      category: 'Social Media',
      type: 'image',
      src: 'images/social1.png?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGRlc2lnbnxlbnwxfHx8fDE3NjM4MjQ4MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Complete social media campaign for Pizza brand',
    },
    {
      id: 3,
      title: 'Christmas Video',
      category: 'Motion Graphics',
      type: 'video',
      src: 'videos/motion1.mp4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBncmFwaGljc3xlbnwxfHx8fDE3NjM3Njg1NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Animated christmas video',
    },
    {
      id: 4,
      title: 'Branded carry bags',
      category: 'Packaging',
      type: 'image',
      src: 'images/packaging2.png?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMHBhY2thZ2luZ3xlbnwxfHx8fDE3NjM4MzI1MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Neat carry bags for packaging',
    },
    {
      id: 5,
      title: 'Brochure Design',
      category: 'Branding',
      type: 'image',
      src: 'images/branding3.png?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2Mzg0NzAyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Brochure design for a shopping arcade',
    },
    {
      id: 6,
      title: 'Facebook Advertisement',
      category: 'Social Media',
      type: 'image',
      src: 'images/social2.png?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGRlc2lnbnxlbnwxfHx8fDE3NjM4MjQ4MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Facebook advertisement creatives for cosmetics',
    },
    {
      id: 7,
      title: 'Sale Promotion Animation',
      category: 'Motion Graphics',
      type: 'video',
      src: 'videos/motion3.mp4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBncmFwaGljc3xlbnwxfHx8fDE3NjM3Njg1NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Sale promotion animation for social media',
    },
    {
      id: 8,
      title: 'Mobile Tempered Screen Packaging',
      category: 'Packaging',
      type: 'image',
      src: 'images/packaging1.png?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMHBhY2thZ2luZ3xlbnwxfHx8fDE3NjM4MzI1MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Elegant packaging for mobile phone tempered screen',
    },
    {
      id: 9,
      title: 'Business Cards',
      category: 'Branding',
      type: 'image',
      src: 'images/branding4.png?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2Mzg0NzAyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Eye-catching business card',
    },
    {
      id: 10,
      title: 'Event Creatives',
      category: 'Social Media',
      type: 'image',
      src: 'images/social3.png?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGRlc2lnbnxlbnwxfHx8fDE3NjM4MjQ4MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Event creatives for food outlet',
    },
    {
      id: 11,
      title: 'Shopping Arcade Logo',
      category: 'Branding',
      type: 'image',
      src: 'images/branding2.png?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2Mzg0NzAyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Modern logo design for a shopping arcade',
    },
    {
      id: 12,
      title: 'Pre-launch Campaign',
      category: 'Social Media',
      type: 'image',
      src: 'images/social4.png?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGRlc2lnbnxlbnwxfHx8fDE3NjM4MjQ4MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Announcement post for new shopping arcade',
    },
    {
      id: 13,
      title: 'E-commerce Setup',
      category: 'Branding',
      type: 'image',
      src: 'images/branding5.png?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2Mzg0NzAyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Online presence for E-commerce customer',
    },
    {
      id: 14,
      title: 'Digital Diwali Animation',
      category: 'Motion Graphics',
      type: 'video',
      src: 'videos/motion2.mp4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2Mzg0NzAyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Diwali card animation for social media',
    },
    {
      id: 15,
      title: 'Game Launch Campaign',
      category: 'Social Media',
      type: 'image', // Fixed from `image` key
      src: 'images/social5.png?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGRlc2lnbnxlbnwxfHx8fDE3NjM4MjQ4MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Virtual reality game launch campaign',
    },
  ];

  const filteredItems =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

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
              Our{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our creative work and see how we've helped brands transform their presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant={activeFilter === filter ? 'default' : 'outline'}
                className={
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                    : ''
                }
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedItem(item.id)}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <MediaRenderer
                      item={item}
                      className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <div className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm mb-2 w-fit">
                        {item.category}
                      </div>
                      <h3 className="text-xl text-white mb-2">{item.title}</h3>
                      <p className="text-white/80 text-sm">{item.description}</p>
                      <div className="mt-4 flex items-center gap-2 text-white">
                        <span className="text-sm">View Project</span>
                        <ExternalLink size={16} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                aria-label="Close lightbox"
              >
                <X size={32} />
              </button>

              {portfolioItems
                .filter((item) => item.id === selectedItem)
                .map((item) => (
                  <div key={item.id} className="bg-white rounded-xl overflow-hidden">
                    <MediaRenderer
                      item={item}
                      className="w-full aspect-video object-cover"
                    />
                    <div className="p-8">
                      <div className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm mb-4">
                        {item.category}
                      </div>
                      <h2 className="text-3xl mb-3">{item.title}</h2>
                      <p className="text-gray-600 text-lg">{item.description}</p>
                    </div>
                  </div>
                ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// MediaRenderer Component
function MediaRenderer({ item, className }: { item: any; className: string }) {
  if (item.type === "video") {
    return (
      <video
        src={item.src}
        className={className}
        autoPlay
        loop
        muted
        playsInline
      />
    );
  }

  return (
    <ImageWithFallback
      src={item.src}
      alt={item.title}
      className={className}
    />
  );
}