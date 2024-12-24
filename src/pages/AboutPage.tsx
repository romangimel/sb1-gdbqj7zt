import React from 'react';
import { Users, Heart, Target, Globe } from 'lucide-react';
import { BackButton } from '../components/UI/BackButton';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-20">
        <BackButton />
        <div className="container mx-auto px-4 max-w-4xl pt-12 pb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Users className="w-10 h-10 text-[#0a8a5f]" />
            About E-Lumina
          </h1>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              E-Lumina is a revolutionary learning platform designed to transform how people acquire new skills and knowledge. 
              Our mission is to make personalized education accessible to everyone, everywhere.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-[#0a8a5f]/5 rounded-xl">
                <Heart className="w-8 h-8 text-[#0a8a5f] mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-gray-600">To democratize education through personalized learning experiences.</p>
              </div>

              <div className="p-6 bg-[#0a8a5f]/5 rounded-xl">
                <Target className="w-8 h-8 text-[#0a8a5f] mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
                <p className="text-gray-600">A world where quality education is tailored to each individual's needs.</p>
              </div>

              <div className="p-6 bg-[#0a8a5f]/5 rounded-xl">
                <Globe className="w-8 h-8 text-[#0a8a5f] mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Impact</h3>
                <p className="text-gray-600">Empowering learners across the globe with adaptive learning paths.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}