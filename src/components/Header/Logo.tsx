import React from 'react';
import { LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
      <LineChart className="w-5 h-5 md:w-6 md:h-6 text-[#0a8a5f] transform rotate-6" strokeWidth={1.5} />
      <span className="font-bold text-base md:text-xl">
        <span className="bg-gradient-to-br from-[#0a8a5f] via-[#12b37d] to-[#0a8a5f] bg-clip-text text-transparent">
          E
        </span>
        -Lumina
      </span>
    </Link>
  );
}