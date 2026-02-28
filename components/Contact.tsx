import React from 'react';
import { Mail, Phone, ShoppingBag, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { CONTENT } from '../constants';

interface ContactProps {
  currentLang: Language;
}

const Contact: React.FC<ContactProps> = ({ currentLang }) => {
  const t = CONTENT[currentLang].contact;

  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-900 text-white pt-20 pb-10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-cyan-900/10 blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <div className="flex items-center mb-6">
              <img src="logo.png" alt="Logo" className="h-12" />
              <span className="ml-3 text-2xl font-bold tracking-wider text-white font-heading">TRANSLETIN</span>
            </div>
            <p className="text-slate-400 max-w-md mb-8">
              Professional subtitling services tailored for creators, filmmakers, and businesses. We bridge the language gap with precision and style.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a
              href="https://wa.me/628135430491"
              className="flex items-center p-4 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-green-500/50 shadow-sm hover:shadow-green-900/20 transition-all group backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-full bg-green-900/20 flex items-center justify-center mr-4 group-hover:bg-green-500 group-hover:text-white transition-colors text-green-500">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white font-heading">{t.whatsapp}</h4>
                <p className="text-sm text-slate-400">+628135430491</p>
              </div>
            </a>

            <a
              href="mailto:transletin1@gmail.com"
              className="flex items-center p-4 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-blue-500/50 shadow-sm hover:shadow-blue-900/20 transition-all group backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-full bg-blue-900/20 flex items-center justify-center mr-4 group-hover:bg-blue-500 group-hover:text-white transition-colors text-blue-500">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white font-heading">{t.email}</h4>
                <p className="text-sm text-slate-400">transletin1@gmail.com</p>
              </div>
            </a>

            <a
              href="https://id.shp.ee/VmrjfXL"
              target="_blank"
              rel="noreferrer"
              className="col-span-1 sm:col-span-2 flex items-center justify-between p-6 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl shadow-lg hover:shadow-orange-500/20 transform hover:-translate-y-1 transition-all text-white border border-white/10"
            >
              <div className="flex items-center">
                <ShoppingBag className="w-8 h-8 mr-4" />
                <div>
                  <h4 className="font-bold text-xl font-heading">{t.shopee}</h4>
                  <p className="text-white/80 text-sm">Safe & Secure Payment</p>
                </div>
              </div>
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Transletin. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* Supported languages listed as text for SEO/Info */}
            <span>ID</span>
            <span>EN</span>
            <span>KR</span>
            <span>JP</span>
            <span>CN</span>
            <span>DE</span>
            <span>AR</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;