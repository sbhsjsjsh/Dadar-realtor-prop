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
  Home,
  LayoutGrid,
  ArrowRight,
  HardHat
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

export default function DahisarLandPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <header className="sticky top-0 z-50 flex items-center justify-between gap-8 border-b border-slate-100 bg-white/80 px-6 py-4 backdrop-blur-md">
        <Link href="/" className="text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0">
          Delicacy Property
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="#why-dahisar" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Why Dahisar</Link>
          <Link href="#features" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Features</Link>
          <Link href="#location" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Location</Link>
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
            href="https://wa.me/919004810239" 
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
                  <MapPin className="h-4 w-4" />
                  <span>Dahisar, Mumbai</span>
                </div>
                <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 lg:text-6xl text-wrap-balance">
                  Land for Apartment Construction in Dahisar, Mumbai
                </h1>
                <p className="mb-8 text-lg text-slate-600 leading-relaxed">
                  Verified Plots for Residential Projects by Delicacy Property. High-return opportunities for builders and developers in Mumbai&apos;s Western suburbs.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a 
                    href="tel:+919004810239"
                    className="flex items-center justify-center gap-3 rounded-full bg-slate-900 px-8 py-4 text-lg font-bold text-white hover:bg-slate-800 transition-all"
                  >
                    <Phone className="h-5 w-5" />
                    Call: +91-9004810239
                  </a>
                  <a 
                    href="https://wa.me/919004810239"
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
                  src="/src/assets/images/mumbai_skyline_hero_1793217321478.jpg"
                  alt="Land for apartment construction Dahisar Mumbai"
                  fill
                  className="object-cover"
                  priority
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5" />
                    <span className="text-sm font-medium">Clear Title Verified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    <span className="text-sm font-medium">High Return Potential</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white border-b border-slate-100">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="mb-6 text-2xl font-bold text-slate-900 lg:text-3xl">
              Verified Plots for Residential Projects in Dahisar
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Dahisar is one of the strongest residential growth markets in Mumbai&apos;s Western suburbs. With metro connectivity, highway access and steady homebuyer demand, <strong>land for apartment construction in Dahisar</strong> is a high-return opportunity for builders, developers and investors.
            </p>
          </div>
        </section>

        {/* Why Choose Dahisar Section */}
        <section id="why-dahisar" className="py-20 lg:py-32 bg-slate-50">
          <div className="container mx-auto px-6">
            <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
              Why Choose Dahisar for Apartment Construction?
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <Users className="h-8 w-8 text-blue-600" />,
                  title: "Strong Demand",
                  desc: "Affordable to mid-segment housing in Dahisar is in constant demand from families and first-time buyers."
                },
                {
                  icon: <Train className="h-8 w-8 text-emerald-600" />,
                  title: "Excellent Connectivity",
                  desc: "Metro Lines 2A and 7, WEH, Link Road and railway station make this location highly attractive."
                },
                {
                  icon: <TrendingUp className="h-8 w-8 text-amber-600" />,
                  title: "Infrastructure Growth",
                  desc: "Coastal Road extension and metro upgrades continue to lift property values and absorption rates."
                },
                {
                  icon: <Building2 className="h-8 w-8 text-purple-600" />,
                  title: "Better Returns",
                  desc: "Well-located projects enjoy quicker bookings, strong resale value and healthy profit margins."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 transition-all hover:shadow-md">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-slate-50 group-hover:bg-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features" className="bg-slate-900 py-20 text-white lg:py-32">
          <div className="container mx-auto px-6">
            <div className="mb-16 max-w-2xl">
              <h2 className="mb-6 text-3xl font-bold tracking-tight lg:text-4xl">
                Key Features of Our Land for Construction
              </h2>
              <p className="text-slate-400">
                Development-ready plots selected for builders and residential developers.
              </p>
            </div>
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                {[
                  {
                    title: "Clear Title and Legal Verification",
                    desc: "Every plot is checked for ownership, title, NOCs, land use and approvals before it is offered to you."
                  },
                  {
                    title: "Development-Ready Plots",
                    desc: "Land suitable for residential buildings, with attention to zoning, FSI potential and road access."
                  },
                  {
                    title: "Strategic Location",
                    desc: "Plots close to the metro, station, schools, and hospitals, increasing buyer interest."
                  },
                  {
                    title: "Multiple Project Types",
                    desc: "Suitable for apartment buildings, mid-rise towers, affordable housing or redevelopment."
                  }
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="mb-2 text-lg font-bold">{feature.title}</h4>
                      <p className="text-slate-400 leading-relaxed text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-800 flex flex-col justify-center p-12">
                <blockquote className="mb-8 text-2xl font-bold italic text-blue-400">
                  &quot;Dahisar offers a rare mix of affordability, connectivity and growth. Land costs are more attractive than in central Mumbai.&quot;
                </blockquote>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-3xl font-bold text-white">Verified</div>
                    <div className="text-sm text-slate-400">Legal Compliance</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">High</div>
                    <div className="text-sm text-slate-400">FSI Potential</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Advantages Section */}
        <section id="location" className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
                Location Advantages of Dahisar
              </h2>
              <p className="text-slate-600">The gateway to the Western suburbs with world-class connectivity.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-8 border border-slate-100">
                <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-slate-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <Train className="h-6 w-6" />
                  </div>
                  Unbeatable Connectivity
                </h3>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
                    <span>Dahisar Railway Station & Metro stations (Lines 2A & 7)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
                    <span>Western Express Highway and Link Road Access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
                    <span>Easy reach to Borivali, Kandivali, Mira Road and Andheri</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
                    <span>Quick connectivity to Mumbai International Airport</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-8 border border-slate-100">
                <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-slate-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                    <Home className="h-6 w-6" />
                  </div>
                  Social Infrastructure
                </h3>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>Reputed schools, colleges, and healthcare centres</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>Modern malls, markets, and retail hubs nearby</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>Banks, offices and premium entertainment options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>Sanjay Gandhi National Park for a green environment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Buy Section */}
        <section className="bg-slate-50 py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <h2 className="mb-16 text-center text-3xl font-bold tracking-tight lg:text-4xl">
              Target Projects & Buyers
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Builders", icon: <HardHat />, desc: "Launch residential projects in a micro-market with proven demand." },
                { title: "Investors", icon: <TrendingUp />, desc: "Partner on development projects or invest for high returns." },
                { title: "Redevelopment", icon: <LayoutGrid />, desc: "Acquire plots for society redevelopment and new construction." },
                { title: "Business Groups", icon: <Building2 />, desc: "Explore development partnerships and land-based investments." }
              ].map((item, idx) => (
                <div key={idx} className="rounded-xl bg-white p-6 shadow-sm border border-slate-100">
                  <div className="mb-4 text-blue-600">{item.icon}</div>
                  <h4 className="mb-2 font-bold">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
              Our Buying Process: Simple, Transparent, Secure
            </h2>
            <div className="space-y-4">
              {[
                { t: "Share Your Requirement", d: "Budget, plot size and project type" },
                { t: "Get Verified Options", d: "We shortlist legally checked plots" },
                { t: "Site Visit", d: "Visit the land with our expert" },
                { t: "Legal Due Diligence", d: "Title search, NOC and approval verification" },
                { t: "Registration and Handover", d: "Smooth, secure closing with full documentation" }
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-6 rounded-2xl bg-white p-6 border border-slate-100 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{step.t}</h4>
                    <p className="text-slate-600 text-sm">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-slate-50 py-20 lg:py-32">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight lg:text-4xl">
              Frequently Asked Questions (FAQs)
            </h2>
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
              <FAQItem 
                question="Is land available for apartment construction in Dahisar?"
                answer="Yes, but suitable plots are limited and sell quickly. Contact Delicacy Property for current verified options in Dahisar's growth corridors."
              />
              <FAQItem 
                question="Is Dahisar a good location for residential development?"
                answer="Yes. Metro connectivity, highway access and strong homebuyer demand make Dahisar a great location for apartment projects with high absorption rates."
              />
              <FAQItem 
                question="What is the price of land for construction in Dahisar?"
                answer="Price depends on plot size, location, zoning, road access and FSI potential. Call us at +91-9004810239 for the latest rates and deals."
              />
              <FAQItem 
                question="Can I build apartments on this land?"
                answer="That depends on land use, zoning and approvals. We verify permitted use and FSI potential before you invest in any development plot."
              />
              <FAQItem 
                question="Are the land documents legally clear?"
                answer="We only list properties with verified titles. Legal due diligence is a mandatory part of our process to ensure safe investments for builders."
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl">
              <div className="flex flex-col items-center justify-center p-12 lg:p-24 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="mb-6 text-3xl font-bold tracking-tight lg:text-6xl text-wrap-balance">
                    Start Your Apartment Project in Dahisar Today
                  </h2>
                  <p className="mb-12 text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto">
                    Development-ready plots in Dahisar don&apos;t stay available for long. Speak to our expert now and secure the right land.
                  </p>
                  <div className="flex flex-col gap-6 sm:flex-row justify-center items-center">
                    <a 
                      href="tel:+919004810239" 
                      className="flex w-full sm:w-auto items-center justify-center gap-4 rounded-full bg-white px-10 py-5 text-xl font-bold text-slate-900 hover:bg-slate-100 transition-all active:scale-95"
                    >
                      <Phone className="h-6 w-6" />
                      Call: +91-9004810239
                    </a>
                    <a 
                      href="https://wa.me/919004810239" 
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
                Delicacy Property
              </div>
              <p className="text-sm text-slate-500">Expert real estate guidance for Dahisar and Western Suburbs.</p>
            </div>
            <div className="flex gap-8 text-sm font-medium text-slate-600">
              <Link href="/" className="hover:text-slate-900">Home</Link>
              <Link href="/open-land-for-sale-in-dadar-east-mumbai" className="hover:text-slate-900">Dadar East</Link>
              <Link href="/property-plot-for-sale-in-dadar-west-near-shivaji-park" className="hover:text-slate-900">Dadar West</Link>
            </div>
            <div className="text-sm text-slate-400">
              © {new Date().getFullYear()} Delicacy Property. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
