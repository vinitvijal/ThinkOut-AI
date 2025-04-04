import React from 'react';

const Cards = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 h-full py-8">
      <div className="flex flex-col justify-between rounded-xl border border-gray-700 p-8 shadow-sm hover:shadow-lg hover:shadow-[#7c3aed]/30 transition-all duration-300">
        <div className="space-y-4">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-800 mx-auto mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-center">Free</h3>
          <p className="text-xl font-bold text-center text-[#7c3aed]">$0<span className="text-sm font-normal text-gray-400">/month</span></p>
          <p className="text-center text-gray-400">
            Ideal for individuals starting out with AI-powered content creation.
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <ul className="space-y-3">
            <li>Up to 3 AI-generated Content Pieces Daily</li>
            <li>Basic Content Templates</li>
            <li>Community Support</li>
          </ul>
          <button className="w-full py-3 mt-6 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700 transition-colors">Get Started</button>
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-xl border border-[#7c3aed] p-8 shadow-md shadow-[#7c3aed]/20 hover:shadow-lg hover:shadow-[#7c3aed]/40 transition-all duration-300 relative">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#7c3aed] text-white text-xs px-3 py-1 rounded-full">
          POPULAR
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#7c3aed]/20 mx-auto mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-center">Pro</h3>
          <p className="text-xl font-bold text-center text-[#7c3aed]">$15<span className="text-sm font-normal text-gray-400">/month</span></p>
          <p className="text-center text-gray-400">
            Advanced tools for content creators and marketers.
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <ul className="space-y-3">
            <li>Up to 20 AI-generated Content Pieces Daily</li>
            <li>Premium Content Templates</li>
            <li>Priority Support</li>
          </ul>
          <button className="w-full py-3 mt-6 rounded-lg bg-[#7c3aed] text-white font-medium hover:bg-[#6d28d9] transition-colors">Subscribe Now</button>
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-xl border border-gray-700 p-8 shadow-sm hover:shadow-lg hover:shadow-[#7c3aed]/30 transition-all duration-300">
        <div className="space-y-4">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-800 mx-auto mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-center">Pay as you go</h3>
          <p className="text-xl font-bold text-center text-[#7c3aed]">upto $0.5<span className="text-sm font-normal text-gray-400">/call</span></p>
          <p className="text-center text-gray-400">
            Flexible solution for businesses with scalable content needs.
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <ul className="space-y-3 t">
            <li>Unlimited AI-generated Content Pieces</li>
            <li>Custom Templates</li>
            <li>Advanced API Integrations</li>
          </ul>
          <button className="w-full py-3 mt-6 rounded-lg   bg-[#7c3aed] text-white font-medium hover:bg-[#6d28d9] transition-colors">Start Creating</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
