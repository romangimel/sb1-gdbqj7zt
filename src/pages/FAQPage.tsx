import React from 'react';
import { FileQuestion, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { BackButton } from '../components/UI/BackButton';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does E-Lumina personalize my learning experience?",
    answer: "E-Lumina uses your responses about learning preferences, goals, and time commitment to create a customized learning path that best suits your needs and schedule."
  },
  {
    question: "Can I change my learning preferences later?",
    answer: "Yes! You can update your learning preferences at any time through your profile settings, and your learning path will adjust accordingly."
  },
  {
    question: "What types of subjects are available?",
    answer: "We offer a wide range of subjects across technology, business, arts, sciences, and languages. Each category contains numerous specific topics and skills."
  },
  {
    question: "How much time do I need to commit?",
    answer: "You can choose your own time commitment, from as little as 1-5 hours per week to 20+ hours. The learning path adapts to your available time."
  },
  {
    question: "Is E-Lumina suitable for beginners?",
    answer: "Absolutely! E-Lumina caters to all skill levels, from complete beginners to advanced learners. Our system adjusts the content difficulty based on your current knowledge level."
  }
];

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-20">
        <BackButton />
        <div className="container mx-auto px-4 max-w-3xl pt-12 pb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <FileQuestion className="w-10 h-10 text-[#0a8a5f]" />
            Frequently Asked Questions
          </h1>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between gap-4 py-4 text-left"
                  >
                    <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-[#0a8a5f] flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#0a8a5f] flex-shrink-0" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="pb-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}