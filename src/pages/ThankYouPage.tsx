import React from 'react';
import { CheckCircle, Mail, ArrowRight, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16 max-w-3xl text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <CheckCircle className="w-20 h-20 text-[#0a8a5f]" />
              <Rocket className="w-8 h-8 text-[#12b37d] absolute -right-2 -bottom-2 transform rotate-45" />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Learning Journey Begins!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            We're crafting your personalized learning path with care.
          </p>
          
          <div className="bg-[#0a8a5f]/5 rounded-xl p-6 mb-8">
            <Mail className="w-8 h-8 text-[#0a8a5f] mx-auto mb-4" />
            <p className="text-gray-700">
              Check your email soon for your customized learning path. We've designed it specifically for your goals and preferences.
            </p>
          </div>
          
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-[#0a8a5f] hover:text-[#12b37d] font-medium transition-colors"
          >
            Return to Home
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}