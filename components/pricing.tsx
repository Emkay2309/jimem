'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Tag, Users, DollarSign } from 'lucide-react';

export default function Pricing() {
  const features = [
    {
      icon: <Tag className="w-12 h-12 text-purple-600" />,
      title: "Upfront Pricing with No Hidden Fees",
      description: "Enjoy complete transparency in pricing. We believe in clear communication, ensuring the price quoted is the price you pay, with no unexpected costs."
    },
    {
      icon: <Users className="w-12 h-12 text-purple-600" />,
      title: "Unbeatable Group Rates",
      description: "Leverage our IATA certification and global partner network. We secure highly competitive group rates, providing cost-effective solutions for every destination.*"
    },
    {
      icon: <DollarSign className="w-12 h-12 text-purple-600" />,
      title: "Flexible Payment Plans",
      description: "We understand financial planning is crucial. That's why we offer customizable payment plans to accommodate your company's budgeting process."
    }
  ];

  return (
    <section  id="pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl text-black font-bold mb-6">Pricing</h2>
          <p className="text-gray-600">
            Each Offsiteio trip is uniquely priced, reflecting factors like seasonality, duration, and
            location. Here's how we ensure that our pricing aligns with your needs and expectations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
            Free Proposal <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="mt-24 relative">
          <img
            src="/travel-illustrations.svg"
            alt="Travel Illustrations"
            className="w-full max-w-5xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
}