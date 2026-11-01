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
  Award,
  Landmark,
  FileCheck
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

export default function DadarWestPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <header className="sticky top-0 z-50 flex items-center justify-between gap-8 border-b border-slate-100 bg-white/80 px-6 py-4 backdrop-blur-md">
        <Link href="/" className="text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0">
          Dadar Realtor
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="#why-dadar-west" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Why Dadar West</Link>
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
                  <span>Dadar West, Near Shivaji Park, Mumbai</span>
                </div>
                <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 lg:text-6xl text-wrap-balance">
                  Property Plot for Sale in Dadar West Near Shivaji Park, Mumbai
                </h1>
                <p className="mb-8 text-lg text-slate-600 leading-relaxed">
                  Verified Plots for Residential & Commercial Use. A rare opportunity to own land in Mumbai&apos;s most prestigious micro-market.
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
                  src="/images/mumbai_land_plot_skyline_1793532714828.jpg"
                  alt="Property plot near Shivaji Park Dadar West"
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
                    <Award className="h-5 w-5" />
                    <span className="text-sm font-medium">Premium Location</span>
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
              Verified Plots for Residential & Commercial Use in the Heart of Mumbai
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Dadar West is one of Mumbai&apos;s most prestigious and sought-after neighbourhoods, and Shivaji Park is its heart. A <strong>property plot for sale in Dadar West near Shivaji Park</strong> is a rare opportunity to own land in a location known for its heritage, connectivity and consistent value growth.
            </p>
          </div>
        </section>

        {/* Why Invest Section */}
        <section id="why-dadar-west" className="py-20 lg:py-32 bg-slate-50">
          <div className="container mx-auto px-6">
            <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
              Why Buy a Property Plot in Dadar West Near Shivaji Park?
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <Landmark className="h-8 w-8 text-blue-600" />,
                  title: "A Prestigious Address",
                  desc: "Shivaji Park is one of Mumbai's most iconic landmarks. Owning a plot near it gives your property instant prestige and recognition."
                },
                {
                  icon: <ShieldCheck className="h-8 w-8 text-emerald-600" />,
                  title: "Extremely Limited Supply",
                  desc: "Dadar West is fully developed, and plots here rarely come to market. This scarcity keeps demand strong and values rising."
                },
                {
                  icon: <TrendingUp className="h-8 w-8 text-amber-600" />,
                  title: "Strong Appreciation",
                  desc: "Central Mumbai locations near Shivaji Park have shown steady long-term appreciation, making land here a safe investment."
                },
                {
                  icon: <Building2 className="h-8 w-8 text-purple-600" />,
                  title: "High Versatility",
                  desc: "Families, businesses, clinics, and retail brands all look for space here, supporting both resale and rental value."
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
                Key Features of Plots in Dadar West
              </h2>
              <p className="text-slate-400">
                Premium land options near Shivaji Park with verified legal standing.
              </p>
            </div>
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                {[
                  {
                    title: "Clear Title and Legal Verification",
                    desc: "Every plot is checked for ownership, title, NOCs and approvals before it is shown to you."
                  },
                  {
                    title: "Prime Location Near Shivaji Park",
                    desc: "Plots are within easy reach of Shivaji Park, Dadar station and major roads."
                  },
                  {
                    title: "Suitable for Multiple Uses",
                    desc: "Ideal for residential building, redevelopment, commercial offices, clinics, showrooms or mixed-use development."
                  },
                  {
                    title: "Flexible Options",
                    desc: "Choose from different plot sizes to match your budget, project and investment goals."
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
                  &quot;Land in a prime location like Dadar West near Shivaji Park only grows in value. A plot gives you complete freedom to design and build.&quot;
                </blockquote>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-3xl font-bold text-white">100%</div>
                    <div className="text-sm text-slate-400">Verified Titles</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">Rare</div>
                    <div className="text-sm text-slate-400">Shivaji Park Area</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Advantages */}
        <section id="location" className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
                Location Advantages of Dadar West
              </h2>
              <p className="text-slate-600">Connectivity and social infrastructure at your doorstep.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-8 border border-slate-100">
                <h3 className="mb-6 flex items-center gap-3 text-lg font-bold text-slate-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  Excellent Connectivity
                </h3>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                    <span>Dadar Railway Station (Western & Central)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                    <span>Quick access to Bandra-Worli Sea Link</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                    <span>Near Plaza Cinema & Kabutarkhana area</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-slate-50 p-8 border border-slate-100">
                <h3 className="mb-6 flex items-center gap-3 text-lg font-bold text-slate-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                    <Landmark className="h-6 w-6" />
                  </div>
                  Social Infrastructure
                </h3>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                    <span>Shivaji Park and Gymkhana</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                    <span>Siddhivinayak Temple nearby</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                    <span>Leading Schools & Hospitals</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-slate-50 p-8 border border-slate-100">
                <h3 className="mb-6 flex items-center gap-3 text-lg font-bold text-slate-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                    <Building2 className="h-6 w-6" />
                  </div>
                  Business Hubs
                </h3>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                    <span>Easy access to BKC & Worli</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                    <span>Close to Lower Parel Business Area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                    <span>Perfect for Offices & Showrooms</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Buy */}
        <section className="bg-slate-50 py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <h2 className="mb-16 text-center text-3xl font-bold tracking-tight lg:text-4xl">
              Who Should Buy a Plot in Dadar West?
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-center">
              {[
                { title: "Investors", icon: <TrendingUp className="mx-auto mb-4 text-blue-600 h-8 w-8" />, desc: "Own a scarce asset in one of Mumbai's most stable micro-markets." },
                { title: "Developers", icon: <Building2 className="mx-auto mb-4 text-emerald-600 h-8 w-8" />, desc: "Develop premium residential or commercial projects." },
                { title: "Business Owners", icon: <Award className="mx-auto mb-4 text-amber-600 h-8 w-8" />, desc: "High-visibility space for clinics, showrooms, or offices." },
                { title: "Families", icon: <Users className="mx-auto mb-4 text-purple-600 h-8 w-8" />, desc: "Build your dream home near Shivaji Park's heritage." }
              ].map((item, idx) => (
                <div key={idx} className="rounded-xl bg-white p-8 shadow-sm border border-slate-100">
                  {item.icon}
                  <h4 className="mb-3 font-bold text-lg">{item.title}</h4>
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
            <div className="space-y-6">
              {[
                "Share Your Requirement: Budget, plot size and purpose",
                "Get Verified Options: We shortlist legally checked plots",
                "Site Visit: Visit the property with our expert",
                "Documentation and Due Diligence: Complete legal support",
                "Registration and Possession: Smooth, hassle-free closing"
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-6 rounded-2xl bg-slate-50 p-6 border border-slate-100">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-lg font-medium text-slate-700">{step}</p>
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
                question="Is a property plot available for sale in Dadar West near Shivaji Park?"
                answer="Yes, but availability is very limited. Contact us for current verified options in the Dadar West micro-market."
              />
              <FAQItem 
                question="What is the price of a plot in Dadar West near Shivaji Park?"
                answer="Price depends on plot size, exact location, road width and development potential. Call us at +91-9004810239 for the latest rates."
              />
              <FAQItem 
                question="Is Dadar West a good place to invest in land?"
                answer="Yes. Its central location, heritage value and limited supply make it one of Mumbai's strongest micro-markets for long-term appreciation."
              />
              <FAQItem 
                question="Can I build a residential or commercial project on this plot?"
                answer="That depends on zoning and municipal approvals. Our team verifies permitted use and FSI potential before you buy."
              />
              <FAQItem 
                question="Are the plot documents legally clear?"
                answer="We only list plots with verified titles. Legal due diligence, including title search and ownership verification, is a core part of our process."
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
                    Book Your Plot in Dadar West Near Shivaji Park Today
                  </h2>
                  <p className="mb-12 text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto">
                    Premium plots near Shivaji Park don&apos;t stay available for long. Speak to our expert today.
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
              <p className="text-sm text-slate-500">Expert real estate guidance for Dadar and Central Mumbai.</p>
            </div>
            <div className="flex gap-8 text-sm font-medium text-slate-600">
              <Link href="/" className="hover:text-slate-900">Home</Link>
              <Link href="/open-land-for-sale-in-dadar-east-mumbai" className="hover:text-slate-900">Dadar East Land</Link>
              <Link href="#" className="hover:text-slate-900">Contact</Link>
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
