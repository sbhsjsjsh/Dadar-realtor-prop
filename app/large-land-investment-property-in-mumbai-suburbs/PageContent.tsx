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
  Globe,
  Boxes,
  ArrowRight,
  Plane
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

export default function MumbaiSuburbsLandPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <header className="sticky top-0 z-50 flex items-center justify-between gap-8 border-b border-slate-100 bg-white/80 px-6 py-4 backdrop-blur-md">
        <Link href="/" className="text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0">
          Dadar Realtor
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="#why-invest" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Why Invest</Link>
          <Link href="#features" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Features</Link>
          <Link href="#locations" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Suburbs</Link>
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
                  <Globe className="h-4 w-4" />
                  <span>Mumbai Suburbs & MMR Region</span>
                </div>
                <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 lg:text-6xl text-wrap-balance">
                  Large Land Investment Property in Mumbai Suburbs
                </h1>
                <p className="mb-8 text-lg text-slate-600 leading-relaxed">
                  Verified Land Parcels for Development & Long-Term Growth. Secure high-value assets in Mumbai&apos;s fastest-growing real estate corridors.
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
                  alt="Large land investment in Mumbai suburbs"
                  fill
                  className="object-cover"
                  priority
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5" />
                    <span className="text-sm font-medium">Verified Clear Title</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    <span className="text-sm font-medium">MMR Growth Zone</span>
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
              Secure Land Parcels for Development & Long-Term Growth
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Mumbai&apos;s suburbs are where the city is growing fastest. With new metro lines, coastal roads, business hubs and large infrastructure projects, a <strong>large land investment property in Mumbai suburbs</strong> is one of the smartest ways to build long-term wealth.
            </p>
          </div>
        </section>

        {/* Why Invest Section */}
        <section id="why-invest" className="py-20 lg:py-32 bg-slate-50">
          <div className="container mx-auto px-6">
            <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
              Why Invest in Large Land in Mumbai Suburbs?
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
                  title: "Fastest-Growing Belt",
                  desc: "Western, Central and Harbour suburbs are seeing heavy development, pushing land values up steadily."
                },
                {
                  icon: <Train className="h-8 w-8 text-emerald-600" />,
                  title: "Infrastructure Boost",
                  desc: "Metro, Coastal Road, Atal Setu (MTHL), and Navi Mumbai Airport are transforming connectivity."
                },
                {
                  icon: <Boxes className="h-8 w-8 text-amber-600" />,
                  title: "Limited Supply",
                  desc: "Big contiguous land parcels are getting harder to find. Early investors get the best pricing."
                },
                {
                  icon: <Building2 className="h-8 w-8 text-purple-600" />,
                  title: "Strong Returns",
                  desc: "Build townships, residential towers, warehouses, or hold for high future appreciation."
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
                Key Features of Our Large Land Properties
              </h2>
              <p className="text-slate-400">
                Strategically selected parcels with full legal compliance.
              </p>
            </div>
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                {[
                  {
                    title: "Clear Title and Legal Verification",
                    desc: "Each property is checked for ownership, title, NOCs, land use and approvals before it is offered to you."
                  },
                  {
                    title: "Strategic Locations with Road Access",
                    desc: "Parcels are located near highways, railway stations, metro corridors and growth hubs."
                  },
                  {
                    title: "Suitable for Multiple Uses",
                    desc: "Ideal for residential townships, commercial complexes, warehousing, or long-term land banking."
                  },
                  {
                    title: "Flexible Sizes for Every Investor",
                    desc: "Options available from mid-size plots to large multi-acre parcels to match your goals."
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
                  &quot;Land is a limited asset that does not depreciate. Large parcels give you the flexibility to develop, partner, or sell at the right time.&quot;
                </blockquote>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-3xl font-bold text-white">Verified</div>
                    <div className="text-sm text-slate-400">Titles & Documents</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">MMR</div>
                    <div className="text-sm text-slate-400">Growth Corridors</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section id="locations" className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
                Popular Mumbai Suburbs for Land Investment
              </h2>
              <p className="text-slate-600">Explore high-growth zones across the Mumbai Metropolitan Region.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Western Suburbs",
                  desc: "Andheri, Goregaon, Malad, Kandivali, Borivali and Dahisar. Driven by metro, coastal road and business growth.",
                  icon: <MapPin className="text-blue-600" />
                },
                {
                  title: "Central & Harbour",
                  desc: "Mulund, Bhandup, Vikhroli, Ghatkopar, Chembur and Kurla. Excellent connectivity to BKC and Navi Mumbai.",
                  icon: <MapPin className="text-emerald-600" />
                },
                {
                  title: "MMR Growth Corridors",
                  desc: "Thane, Panvel, Navi Mumbai, Kalyan and Dombivli. Larger parcels at competitive rates with high appreciation.",
                  icon: <MapPin className="text-amber-600" />
                }
              ].map((loc, idx) => (
                <div key={idx} className="rounded-2xl bg-slate-50 p-8 border border-slate-100">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm">
                      {loc.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{loc.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{loc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Connectivity Section */}
        <section className="bg-slate-50 py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="mb-8 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
                  Excellent Connectivity & Social Infrastructure
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <Train className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Transport Network</h4>
                      <p className="text-slate-600 text-sm">Western, Central, and Harbour railway lines, plus upcoming Metro corridors and highways.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <Plane className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Aviation Links</h4>
                      <p className="text-slate-600 text-sm">Strategic access to both Mumbai Airport and the upcoming Navi Mumbai International Airport.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Social Infrastructure</h4>
                      <p className="text-slate-600 text-sm">Proximity to top schools, hospitals, IT parks, and business districts across the suburbs.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Developers", icon: <Building2 />, desc: "Acquire land for townships and towers." },
                  { title: "Investors", icon: <TrendingUp />, desc: "Hold scarce assets for appreciation." },
                  { title: "Business", icon: <ShieldCheck />, desc: "Set up warehouses or office parks." },
                  { title: "Families", icon: <Users />, desc: "Diversify into stable land assets." }
                ].map((item, idx) => (
                  <div key={idx} className="rounded-xl bg-white p-6 shadow-sm border border-slate-100">
                    <div className="mb-3 text-blue-600">{item.icon}</div>
                    <h5 className="font-bold mb-1">{item.title}</h5>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
              Our Investment Process: Simple, Transparent, Secure
            </h2>
            <div className="space-y-4">
              {[
                { t: "Share Your Requirement", d: "Budget, location preference, land size and purpose" },
                { t: "Get Verified Options", d: "We shortlist legally checked land parcels" },
                { t: "Site Visit", d: "Visit the property with our expert" },
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
                question="Is large land available for investment in Mumbai suburbs?"
                answer="Yes, but large parcels are limited and sell quickly. We maintain a database of verified, contiguous land parcels suitable for development and bulk investment."
              />
              <FAQItem 
                question="Which Mumbai suburb is best for land investment?"
                answer="It depends on your goal. Western suburbs offer premium residential growth, while corridors like Panvel and Thane offer larger parcels with massive appreciation potential due to MTHL and Navi Mumbai Airport."
              />
              <FAQItem 
                question="What is the price of large land in Mumbai suburbs?"
                answer="Price varies significantly by location, zoning, and road access. Please call us at +91-9004810239 for the latest rates in specific micro-markets."
              />
              <FAQItem 
                question="Can I build a residential or commercial project on this land?"
                answer="Yes, depending on land use and zoning approvals. We verify permitted use and development potential (FSI) before you invest."
              />
              <FAQItem 
                question="Are the land documents legally clear?"
                answer="We only list properties with verified titles. Thorough legal due diligence is part of our standard process for every land transaction."
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
                    Invest in Large Land in Mumbai Suburbs Today
                  </h2>
                  <p className="mb-12 text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto">
                    Prime land parcels in Mumbai&apos;s growth corridors don&apos;t stay available for long. Speak to our expert now.
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
                Dadar Realtor
              </div>
              <p className="text-sm text-slate-500">Expert real estate guidance for Mumbai Suburbs and MMR.</p>
            </div>
            <div className="flex gap-8 text-sm font-medium text-slate-600">
              <Link href="/" className="hover:text-slate-900">Home</Link>
              <Link href="/open-land-for-sale-in-dadar-east-mumbai" className="hover:text-slate-900">Dadar East</Link>
              <Link href="/property-plot-for-sale-in-dadar-west-near-shivaji-park" className="hover:text-slate-900">Dadar West</Link>
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
