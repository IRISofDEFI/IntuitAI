import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const [activeFooterNav, setActiveFooterNav] = useState(null);
  const footerNav = ["Home", "About Us", "Our Team", "Shop", "Blog", "Contact Us"];

  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 pt-16 pb-8 px-6 md:px-12 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* About */}
          <div className="md:col-span-5">
            <h3 className="text-2xl font-bold mb-4">IntuitAI</h3>
            <p className="text-gray-400 text-sm max-w-xs">
              Reinventing the way of creating websites, we aim to create the most master-peaced WordPress theme available on the market.
            </p>
          </div>

          {/* Contact Us */}
          <div className="md:col-span-3">
            <h4 className="font-semibold text-gray-300 mb-4 tracking-wider">CONTACT US</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>202 Helga Springs Rd, Crawford, TN 38554</p>
              <p>Call Us: 800.275.8777</p>
              <p>alex@company.com</p>
            </div>
          </div>

          {/* Sign up */}
          <div className="md:col-span-4">
            <h4 className="font-semibold text-gray-300 mb-4 tracking-wider">SIGN UP FOR EMAIL UPDATES</h4>
            <div className="flex gap-2 mb-2">
              <Input 
                type="email" 
                placeholder="Your e-mail address" 
                className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-500 rounded-md"
              />
              <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-md">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-gray-500">Sign up with your email address to receive news and updates.</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="mb-4 md:mb-0">Copyright ©2025 IntuitAI. All rights reserved.</p>
          <div className="flex gap-6">
            {footerNav.map((item, index) => (
              <a 
                key={item} 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  setActiveFooterNav(index);
                }}
                className={`transition-colors duration-300 hover:text-purple-400 ${
                  activeFooterNav === index ? 'text-purple-400 font-semibold' : 'text-gray-500 hover:text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}