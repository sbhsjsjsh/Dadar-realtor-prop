'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import Link from 'next/link';
import { 
  Phone, 
  MapPin, 
  CheckCircle2, 
  TrendingUp, 
  Building2, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  MessageCircle,
  Users,
  Train,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  ArrowRight,
  Info
} from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left focus:outline-none"
      >
        <span className="text-lg font-semibold text-slate-900">{question}</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-slate-500" /> : <ChevronDown className="h-5 w-5 text-slate-500" />}
      </button>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="mt-2 text-slate-600 leading-relaxed"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

export default function WhyBuyDadarPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Why Buy in Dadar, Mumbai: Price Trends, Connectivity & Schools (2026 Guide)",
        "description": "Planning to buy flats in Dadar? Check price trends, metro connectivity, top schools & who should invest. Call 9004810239 for a free site visit.",
        "author": {
          "@type": "Organization",
          "name": "Dadar Realtor"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Dadar Realtor",
          "logo": {
            "@type": "ImageObject",
            "url": "https://ais-dev-rei7gqygm6tmimzonqz26y-728728199311.asia-southeast1.run.app/icon.jpg"
          }
        },
        "datePublished": "2026-11-01"
      },
      {
        "@type": "LocalBusiness",
        "name": "Dadar Realtor",
        "telephone": "+91 9004810239",
        "url": "https://ais-dev-rei7gqygm6tmimzonqz26y-728728199311.asia-southeast1.run.app",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dadar",
          "addressRegion": "Mumbai",
          "addressCountry": "IN"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      {/* Navigation */}
      <header className="sticky top-0 z-50 flex items-center justify-between gap-8 border-b border-slate-100 bg-white/80 px-6 py-4 backdrop-blur-md">
        <Link href="/" className="text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0">
          Dadar Realtor
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="#why-dadar" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Why Dadar</Link>
          <Link href="#price-trends" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Price Trends</Link>
          <Link href="#connectivity" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Connectivity</Link>
          <Link href="#schools" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Schools</Link>
          <Link href="#faq" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">FAQs</Link>
        </nav>
        <div className="flex items-center gap-3 shrink-0">
          <a 
            href="tel:+919004810239" 
            className="flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-all active:scale-95"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden xs:inline">Call Now</span>
          </a>
          <a 
            href="https://wa.me/919004810239?text=Hi, I want to know about flats in Dadar" 
            className="flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition-all active:scale-95"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden xs:inline">WhatsApp</span>
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-slate-50 py-12 lg:py-24">
          <div className="container mx-auto px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-blue-600">
                  <Info className="h-4 w-4" />
                  <span>2026 Comprehensive Guide</span>
                </div>
                <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 lg:text-6xl text-wrap-balance">
                  Why Buy in Dadar, Mumbai: Price Trends, Connectivity & Schools
                </h1>
                <p className="mb-8 text-lg text-slate-600 leading-relaxed">
                  Planning to buy <strong>flats in Dadar</strong>? You are looking at the true heart of Mumbai. Discover why Dadar remains the smartest real estate choice in 2026.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a 
                    href="tel:+919004810239"
                    className="flex items-center justify-center gap-3 rounded-full bg-slate-900 px-8 py-4 text-lg font-bold text-white hover:bg-slate-800 transition-all"
                  >
                    <Phone className="h-5 w-5" />
                    Call: 9004810239
                  </a>
                  <a 
                    href="https://wa.me/919004810239?text=Hi, I want to know about flats in Dadar"
                    className="flex items-center justify-center gap-3 rounded-full bg-emerald-600 px-8 py-4 text-lg font-bold text-white hover:bg-emerald-700 transition-all"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Us
                  </a>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl lg:aspect-square"
              >
                <Image 
                  src="/images/luxury_mumbai_apartment_exterior_1793532700061.jpg"
                  alt="Flats in Dadar Mumbai near Dadar railway station"
                  fill
                  className="object-cover"
                  priority
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5" />
                    <span className="text-sm font-medium">Verified Property Guide</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    <span className="text-sm font-medium">2026 Price Trends</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-white border-b border-slate-100">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Planning to buy <strong>flats in Dadar</strong>? You are looking at the true heart of Mumbai. Dadar is the only place where the Western and Central lines meet, which makes it one of the best-connected neighbourhoods in the city. With top schools, strong rental demand and Metro Line 3 (Aqua Line), more buyers and investors are shortlisting Dadar every year.
            </p>
          </div>
        </section>

        {/* Why Dadar Section */}
        <section id="why-dadar" className="py-20 lg:py-32 bg-slate-50">
          <div className="container mx-auto px-6">
            <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
              Why Dadar is a Top Choice for Homebuyers
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Central Location", desc: "Equal distance from South Mumbai, BKC, Lower Parel and the suburbs." },
                { title: "Best Rail Connectivity", desc: "Western and Central lines meet here, offering unmatched access." },
                { title: "Established Neighbourhood", desc: "Choose from Dadar West, East, Hindu Colony, or Parsi Colony." },
                { title: "Strong Resale Value", desc: "Demand stays high in every market cycle, ensuring capital safety." },
                { title: "Complete Ecosystem", desc: "Schools, hospitals, markets and offices within walking distance." },
                { title: "New Infrastructure", desc: "Upcoming Metro Line 3 (Aqua Line) further boosts connectivity." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 transition-all hover:shadow-md">
                  <CheckCircle2 className="mb-4 h-8 w-8 text-blue-600" />
                  <h3 className="mb-4 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Price Trends Section */}
        <section id="price-trends" className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-8 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
                Dadar Property Price Trend
              </h2>
              <p className="mb-12 text-slate-600 text-lg leading-relaxed">
                Dadar has seen steady appreciation over the years, driven by redevelopment projects, metro connectivity and limited land supply.
              </p>
              
              <div className="grid gap-6 md:grid-cols-2 mb-16">
                {[
                  { label: "1 BHK", value: "₹1.5 cr – ₹2.5 cr" },
                  { label: "2 BHK", value: "₹2.8 cr – ₹5 cr" },
                  { label: "3 BHK", value: "₹5 cr – ₹10 cr+" },
                  { label: "Avg Rate", value: "₹30k – ₹55k+ / sq ft" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between rounded-xl bg-slate-50 p-6 border border-slate-100">
                    <span className="font-bold text-slate-700">{item.label}</span>
                    <span className="text-lg font-bold text-blue-600">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="grid gap-12 lg:grid-cols-2">
                <div>
                  <h4 className="mb-4 text-xl font-bold text-slate-900 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    Area-wise Pricing
                  </h4>
                  <ul className="space-y-4 text-slate-600">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
                      <span><strong>Premium:</strong> Dadar West near Plaza, Hindu Colony, Parsi Colony (Higher rates, strong demand).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
                      <span><strong>Mid-range:</strong> Dadar East, Naigaon, Parel border (Balanced price/connectivity).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
                      <span><strong>Redevelopment:</strong> New towers with modern amenities priced at a premium.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-4 text-xl font-bold text-slate-900 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-emerald-600" />
                    Why Prices Keep Rising
                  </h4>
                  <ul className="space-y-4 text-slate-600">
                    <li className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>Metro Line 3 (Aqua Line) connectivity.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>Redevelopment and new premium towers.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>Constant demand from corporate professionals.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>Very limited land supply in central Mumbai.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connectivity Section */}
        <section id="connectivity" className="bg-slate-900 py-20 text-white lg:py-32">
          <div className="container mx-auto px-6">
            <h2 className="mb-16 text-center text-3xl font-bold tracking-tight lg:text-4xl">
              Connectivity: How Well is Dadar Connected?
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: <Train className="text-blue-400" />, title: "By Train", desc: "Western & Central junction. Direct trains to Churchgate, CSMT, Thane, Borivali." },
                { icon: <Train className="text-emerald-400" />, title: "By Metro", desc: "Metro Line 3 (Aqua Line) connects to Worli, BKC, Churchgate, Cuffe Parade." },
                { icon: <MapPin className="text-amber-400" />, title: "By Road", desc: "Tulsi Pipe Rd, Eastern Freeway, WEH, and Bandra-Worli Sea Link access." },
                { icon: <MapPin className="text-purple-400" />, title: "By Air", desc: "CSM International Airport is 40–60 minutes away depending on traffic." }
              ].map((item, idx) => (
                <div key={idx} className="rounded-2xl bg-slate-800 p-8 border border-slate-700">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900/50">
                    {item.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-bold">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 rounded-2xl bg-white/5 p-8 border border-white/10">
              <h4 className="mb-6 text-xl font-bold">Approximate Commute Times</h4>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { place: "Lower Parel", time: "10–15 mins" },
                  { place: "BKC", time: "20–30 mins" },
                  { place: "Churchgate", time: "25–35 mins" },
                  { place: "CSMT", time: "25–30 mins" }
                ].map((commute, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <span className="text-slate-400 text-sm">{commute.place}</span>
                    <span className="text-lg font-bold text-blue-400">{commute.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Schools Section */}
        <section id="schools" className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="mb-8 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
                  Best Schools & Infrastructure
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900">Education Hub</h4>
                      <p className="text-slate-600 text-sm mt-1">
                        Reputed schools like Balmohan, IES, Sharadashram and Don Bosco. Top colleges like Ruia and Podar are just 10-15 mins away.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <HeartPulse className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900">Healthcare Excellence</h4>
                      <p className="text-slate-600 text-sm mt-1">
                        Hinduja Hospital (Mahim), KEM, Tata Memorial (Parel), and multiple multispeciality diagnostic centres.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                      <ShoppingBag className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900">Lifestyle & Shopping</h4>
                      <p className="text-slate-600 text-sm mt-1">
                        Dadar Flower Market, Plaza area, Siddhivinayak Temple. Close to Kohinoor Sq, Phoenix, and Palladium malls.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/mumbai_land_plot_skyline_1793532714828.jpg"
                  alt="Schools and lifestyle in Dadar Mumbai"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Buy Section */}
        <section className="bg-slate-50 py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <h2 className="mb-16 text-center text-3xl font-bold tracking-tight lg:text-4xl">
              Who Should Buy in Dadar?
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Families", icon: <Users />, desc: "Safe, established neighbourhood with good schools and healthcare." },
                { title: "Professionals", icon: <Building2 />, desc: "Easy access to major business hubs like Lower Parel, BKC, and Worli." },
                { title: "Investors", icon: <TrendingUp />, desc: "Strong appreciation, steady rental demand and high resale value." },
                { title: "Upgraders", icon: <ShieldCheck />, desc: "Prime central location with premium new redevelopment projects." }
              ].map((item, idx) => (
                <div key={idx} className="rounded-xl bg-white p-6 shadow-sm border border-slate-100 text-center">
                  <div className="mb-4 inline-flex text-blue-600">{item.icon}</div>
                  <h4 className="mb-2 font-bold text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Flats Section */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight lg:text-4xl">
              Types of Flats Available in Dadar
            </h2>
            <div className="grid gap-6 sm:grid-cols-3 mb-12">
              {[
                { title: "1 BHK Flats", desc: "Ideal for singles, couples and investors. Steady rental demand." },
                { title: "2 BHK Flats", desc: "Most popular choice. Best for small families and end-users." },
                { title: "3 BHK Flats", desc: "Spacious homes in premium towers with modern amenities." }
              ].map((flat, idx) => (
                <div key={idx} className="rounded-2xl bg-slate-50 p-8 border border-slate-100">
                  <h4 className="mb-4 text-xl font-bold text-slate-900">{flat.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{flat.desc}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-blue-600 p-8 text-white">
              <h4 className="mb-4 text-xl font-bold">Ready-to-Move vs Under-Construction</h4>
              <p className="text-blue-50 leading-relaxed mb-6">
                Ready-to-move flats give immediate possession and no GST. Under-construction flats offer flexible payment plans and modern amenities.
              </p>
              <Link href="#" className="inline-flex items-center gap-2 font-bold hover:gap-3 transition-all">
                Read our full guide <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Things to Check Section */}
        <section className="bg-slate-50 py-20 lg:py-32">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight lg:text-4xl text-slate-900">
              Things to Check Before Buying
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "RERA registration of the project",
                "Builder track record and history",
                "Clear title and OC for ready flats",
                "Society NOC for older buildings",
                "Distance from station & metro",
                "Maintenance & resale potential"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                  <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <span className="font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight lg:text-4xl text-slate-900">
              Frequently Asked Questions
            </h2>
            <div className="rounded-2xl bg-slate-50 p-8 border border-slate-100">
              <FAQItem 
                question="Is Dadar a good place to invest in real estate?"
                answer="Yes. Central location, metro connectivity and limited land supply make Dadar one of the strongest investment locations in Mumbai."
              />
              <FAQItem 
                question="What is the average price of a 2 BHK flat in Dadar?"
                answer="A 2 BHK in Dadar typically costs between ₹2.8 crore and ₹5 crore, depending on the area, project and amenities."
              />
              <FAQItem 
                question="Is Dadar better than Thane or Navi Mumbai?"
                answer="Dadar offers a central location, better connectivity and higher resale value. Thane and Navi Mumbai offer lower prices and more carpet area."
              />
              <FAQItem 
                question="Are there good schools in Dadar?"
                answer="Yes. Balmohan Vidyamandir, IES Modern English School and several reputed schools and colleges are in and around Dadar."
              />
              <FAQItem 
                question="Is Dadar good for rental income?"
                answer="Yes. Demand from working professionals and students keeps rentals stable, especially near Dadar station and Dadar Plaza."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl">
              <div className="flex flex-col items-center justify-center p-12 lg:p-24 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="mb-6 text-3xl font-bold tracking-tight lg:text-6xl text-wrap-balance">
                    Ready to Buy a Flat in Dadar?
                  </h2>
                  <p className="mb-12 text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto">
                    Looking for a <strong>1, 2 or 3 BHK in Dadar</strong>? Our team will help you shortlist verified projects within your budget.
                  </p>
                  <div className="flex flex-col gap-6 sm:flex-row justify-center items-center">
                    <a 
                      href="tel:+919004810239" 
                      className="flex w-full sm:w-auto items-center justify-center gap-4 rounded-full bg-white px-10 py-5 text-xl font-bold text-slate-900 hover:bg-slate-100 transition-all active:scale-95"
                    >
                      <Phone className="h-6 w-6" />
                      Call: 9004810239
                    </a>
                    <a 
                      href="https://wa.me/919004810239?text=Hi, I want to know about flats in Dadar" 
                      className="flex w-full sm:w-auto items-center justify-center gap-4 rounded-full bg-emerald-600 px-10 py-5 text-xl font-bold text-white hover:bg-emerald-700 transition-all active:scale-95"
                    >
                      <MessageCircle className="h-6 w-6" />
                      WhatsApp Us
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-100 bg-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="text-center md:text-left">
              <div className="mb-2 text-xl font-bold tracking-tight text-slate-900">
                Dadar Realtor
              </div>
              <p className="text-sm text-slate-500">The Heart of Mumbai Real Estate Expert.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-600">
              <Link href="/" className="hover:text-slate-900">Home</Link>
              <Link href="/open-land-for-sale-in-dadar-east-mumbai" className="hover:text-slate-900">Dadar East</Link>
              <Link href="/property-plot-for-sale-in-dadar-west-near-shivaji-park" className="hover:text-slate-900">Dadar West</Link>
              <Link href="/large-land-investment-property-in-mumbai-suburbs" className="hover:text-slate-900">Mumbai Suburbs</Link>
              <Link href="/land-for-apartment-construction-in-dahisar" className="hover:text-slate-900">Dahisar Land</Link>
            </div>
            <div className="text-sm text-slate-400">
              © {new Date().getFullYear()} Dadar Realtor. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
