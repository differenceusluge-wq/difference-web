"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Layout, Smartphone, Search, Mail, ArrowRight } from 'lucide-react';

export default function DifferenceLanding() {
  const [lang, setLang] = useState('hr');

  const content = {
    hr: {
      title: "Digitalna rješenja koja čine ",
      titleHighlight: "razliku",
      subtitle: "Specijalizirani obrt za izradu modernih web stranica, SEO optimizaciju i digitalni marketing.",
      services: "Usluge",
      contact: "Kontaktiraj nas",
      items: [
        { title: "Web Dizajn", desc: "Unikatne i brze stranice prilagođene svim uređajima.", icon: <Layout className="w-6 h-6" /> },
        { title: "SEO", desc: "Pozicioniranje na prvu stranicu Google pretraživanja.", icon: <Search className="w-6 h-6" /> },
        { title: "Marketing", desc: "Strategije koje pretvaraju posjetitelje u kupce.", icon: <Smartphone className="w-6 h-6" /> }
      ]
    },
    en: {
      title: "Digital solutions that make a ",
      titleHighlight: "difference",
      subtitle: "Specialized craft for modern web development, SEO optimization, and digital marketing.",
      services: "Services",
      contact: "Contact Us",
      items: [
        { title: "Web Design", desc: "Unique and fast websites optimized for all devices.", icon: <Layout className="w-6 h-6" /> },
        { title: "SEO", desc: "Getting your business to the first page of Google.", icon: <Search className="w-6 h-6" /> },
        { title: "Marketing", desc: "Strategies that convert visitors into customers.", icon: <Smartphone className="w-6 h-6" /> }
      ]
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigacija */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter text-blue-600">DIFFERENCE.</div>
        <button 
          onClick={() => setLang(lang === 'hr' ? 'en' : 'hr')}
          className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full hover:bg-slate-200 transition"
        >
          <Globe className="w-4 h-4" />
          {lang.toUpperCase()}
        </button>
      </nav>

      {/* Hero sekcija */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold mb-6"
        >
          {t.title}<span className="text-blue-600">{t.titleHighlight}</span>
        </motion.h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
          {t.subtitle}
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 flex items-center gap-2">
            {t.contact} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Usluge */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {t.items.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="text-blue-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-slate-400 border-t border-slate-100">
        <p>© 2026 Difference usluge. Sva prava pridržana.</p>
      </footer>
    </div>
  );
}
