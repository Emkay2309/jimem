'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  const faqs = [
    {
      question: 'What is Offsiteio?',
      answer: 'Offsiteio is a platform designed to help organizations plan, organize, and execute memorable offsite events tailored to specific team goals and preferences.'
    },
    {
      question: 'How does Offsiteio work?',
      answer: 'Offsiteio works by connecting clients with event planning experts who assist in customizing itineraries, selecting locations, and arranging logistics to ensure a smooth and engaging experience.'
    },
    {
      question: 'What activities can Offsiteio arrange?',
      answer: 'Offsiteio offers a variety of activities, including team-building exercises, outdoor adventures, workshops, and cultural excursions to enhance team bonding and morale.'
    },
    {
      question: 'Is there any cost or fees for using Offsiteio?',
      answer: 'Offsiteio provides transparent pricing, with fees based on the services chosen. Clients can consult with Offsiteio representatives for detailed cost breakdowns and custom packages.'
    },
    {
      question: 'Does Offsiteio handle flights?',
      answer: 'Currently, Offsiteio focuses on ground logistics and activities, but they can recommend flight booking options or partner with travel agencies to facilitate travel arrangements.'
    },
    {
      question: 'Can Offsiteio accommodate special requests or unique themes for events?',
      answer: 'Yes, Offsiteio prides itself on flexibility and creativity, allowing clients to incorporate unique themes, special requests, and customized experiences into their event plans.'
    },
    {
      question: 'What is the range of group sizes Offsiteio can accommodate?',
      answer: 'Offsiteio can cater to groups of various sizes, from small teams to large corporate gatherings, with event planning scaled accordingly to meet the needs of the group.'
    },
  ];

  return (
    <section className="py-24 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
