import { useState } from 'react'
import {
  Building2, TrendingUp, Shield, Users, ArrowRight, ChevronRight,
  BarChart3, MapPin, DollarSign, Clock, Target, BookOpen,
  ExternalLink, Menu, X, Key, Briefcase, LineChart
} from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Track Record', href: '#track-record' },
  { label: 'Case Study', href: '#case-study' },
  { label: 'Key Club', href: '#key-club' },
  { label: 'Resources', href: '#resources' },
  { label: 'Operator', href: '#operator' },
]

const STATS = [
  { value: '23', label: 'Assets Acquired', icon: Building2 },
  { value: '$50M+', label: 'Investor Capital Raised', icon: DollarSign },
  { value: '$85M', label: 'Portfolio Under Ownership', icon: TrendingUp },
  { value: '5', label: 'Full-Cycle Exits', icon: Target },
]

const DEAL_METRICS = [
  { label: 'Purchase Price', value: '$1.65M' },
  { label: 'Sale Price', value: '$3.85M' },
  { label: 'LP Return', value: '$490K' },
  { label: 'IRR', value: '53%' },
]

const RESOURCES = [
  {
    pages: '12-Page Guide',
    title: 'The Passive Income Blueprint',
    desc: 'How everyday people earn 15-18% returns investing passively in self-storage.',
  },
  {
    pages: '8-Page Guide + Cheat Sheet',
    title: 'The Tax Advantage Playbook',
    desc: 'How passive investors legally reduce $50K+ in taxes through depreciation and cost segregation.',
  },
  {
    pages: '15-Page Analysis',
    title: 'Behind-the-Scenes Deal Breakdown',
    desc: 'A real operator breaks down a real acquisition. Nothing held back.',
  },
  {
    pages: '10-Page Guide + Checklist',
    title: 'The Retirement Escape Plan',
    desc: 'How to use your IRA for consistent returns without market volatility.',
  },
]

const TOOLS = [
  {
    name: 'Vault Ventures CRM',
    desc: 'Deal pipeline management with AI-powered CIM analysis, contact tracking, and pipeline analytics.',
    url: 'https://vault-ventures-crm.vercel.app',
    icon: Briefcase,
  },
  {
    name: 'Acquisition OS',
    desc: 'Deal sourcing, underwriting, and portfolio management for self-storage acquisitions.',
    url: 'https://acquisition-os-chi.vercel.app',
    icon: LineChart,
  },
]

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-navy-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-950/90 backdrop-blur-md border-b border-navy-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center font-bold text-navy-950 text-sm">V</div>
              <span className="font-display font-bold text-white tracking-tight">Vault Ventures</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map(item => (
                <a key={item.label} href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">{item.label}</a>
              ))}
              <a href="#key-club" className="flex items-center gap-2 bg-gradient-to-r from-gold-600 to-gold-500 text-navy-950 font-semibold px-4 py-2 rounded-lg text-sm hover:from-gold-500 hover:to-gold-400 transition-all">
                <Key size={14} /> Join Key Club
              </a>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-400 hover:text-white">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-navy-900 border-t border-navy-800 px-4 py-4 space-y-2">
            {NAV_ITEMS.map(item => (
              <a key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-gray-400 hover:text-white">{item.label}</a>
            ))}
            <a href="#key-club" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 to-gold-500 text-navy-950 font-semibold px-4 py-2.5 rounded-lg text-sm mt-3">
              <Key size={14} /> Join Key Club
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 via-transparent to-transparent" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-gold-500" />
              <span className="text-xs text-gold-500 uppercase tracking-[0.2em] font-medium">Vault Ventures LLC</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Real Deals.<br />
              <span className="text-gold-500">Real Numbers.</span><br />
              No BS.
            </h1>
            <p className="text-lg text-gray-400 max-w-xl mb-8 leading-relaxed">
              Vault Ventures acquires, operates, and syndicates self-storage facilities across the Southeast and Texas. Our investors get behind-the-scenes access to every deal.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#key-club" className="flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 to-gold-500 text-navy-950 font-semibold px-6 py-3 rounded-lg hover:from-gold-500 hover:to-gold-400 transition-all">
                <Key size={16} /> Join the Investor Key Club <ArrowRight size={16} />
              </a>
              <a href="#case-study" className="flex items-center justify-center gap-2 border border-navy-600 text-gray-300 font-medium px-6 py-3 rounded-lg hover:border-gold-500/30 hover:text-white transition-all">
                See Our Track Record <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="track-record" className="py-16 border-y border-navy-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs text-gold-500 uppercase tracking-[0.2em] font-medium">Confirmed Track Record</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-2">Built by an Operator, Not a Fund Manager</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map(s => (
              <div key={s.label} className="bg-navy-900 border border-navy-700 rounded-xl p-6 text-center">
                <s.icon size={24} className="text-gold-500 mx-auto mb-3" />
                <p className="font-display text-3xl font-bold text-gold-400">{s.value}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section id="case-study" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs text-gold-500 uppercase tracking-[0.2em] font-medium">Case Study</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2 mb-6">
                Winter Haven, FL:<br /><span className="text-gold-500">$1.3M Profit</span> in 480 Days
              </h2>
              <p className="text-gray-400 mb-4 leading-relaxed">
                We acquired a self-storage and retail property for $1.65M. Eliminated the U-Haul operation, renovated every retail suite, converted 3,000 sq ft of dead space into leasable income. Doubled monthly income from $17,386 to $33,225.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                480 days later, we sold for $3.85M. Our LP investor walked away with $490,000 on a $700K investment. That is a 70% ROI and a 53% IRR.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {DEAL_METRICS.map(m => (
                  <div key={m.label} className="bg-navy-900 border border-navy-700 rounded-lg p-4">
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{m.label}</p>
                    <p className="font-display text-xl font-bold text-gold-400 mt-1">{m.value}</p>
                  </div>
                ))}
              </div>
              <a href="#key-club" className="inline-flex items-center gap-2 text-gold-500 text-sm font-medium hover:text-gold-400 transition-colors">
                See deals like this <ArrowRight size={14} />
              </a>
            </div>
            <div className="relative">
              <div className="bg-navy-900 border border-navy-700 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-gold-500 text-navy-950 font-bold text-sm px-4 py-2 rounded-bl-xl">70% ROI</div>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-gold-500" />
                    <span className="text-gray-300">Winter Haven, FL</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building2 size={18} className="text-gold-500" />
                    <span className="text-gray-300">Self-Storage + Retail</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={18} className="text-gold-500" />
                    <span className="text-gray-300">480-Day Hold Period</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign size={18} className="text-gold-500" />
                    <span className="text-gray-300">$700K LP Investment</span>
                  </div>
                  <div className="border-t border-navy-700 pt-6">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs text-gray-500">Entry</p>
                        <p className="font-display text-lg font-bold text-white">$1.65M</p>
                      </div>
                      <div className="flex-1 mx-4 border-b border-dashed border-gold-500/30 mb-2" />
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Exit</p>
                        <p className="font-display text-lg font-bold text-gold-400">$3.85M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Club */}
      <section id="key-club" className="py-20 bg-navy-900/50 border-y border-navy-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs text-gold-500 uppercase tracking-[0.2em] font-medium">The Investor Key Club</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">Your Backstage Pass to the Vault</h2>
            <p className="text-gray-400 leading-relaxed">
              The Key Club is not a polished institutional newsletter. It is a backstage pass. Raw deal breakdowns, real financials, market intel, and operator insights you will not find anywhere else.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              { icon: BarChart3, title: 'Deal Flow Access', desc: 'See real deals before they hit the market, with full financials and operator commentary.' },
              { icon: Shield, title: 'Market Intelligence', desc: 'Weekly updates on self-storage markets, cap rates, and acquisition opportunities across the Southeast.' },
              { icon: Users, title: 'Operator Access', desc: 'Direct access to the operator. Ask questions, get answers, see the process from the inside.' },
            ].map(f => (
              <div key={f.title} className="bg-navy-900 border border-navy-700 rounded-xl p-6">
                <f.icon size={24} className="text-gold-500 mb-4" />
                <h3 className="font-display font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="https://vaultventuresllc.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-600 to-gold-500 text-navy-950 font-semibold px-8 py-3.5 rounded-lg text-lg hover:from-gold-500 hover:to-gold-400 transition-all">
              <Key size={18} /> Unlock My Key Club Access <ArrowRight size={18} />
            </a>
            <p className="text-xs text-gray-500 mt-3">Free. No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs text-gold-500 uppercase tracking-[0.2em] font-medium">Free Resources</span>
            <h2 className="font-display text-3xl font-bold text-white mt-2">Investor Education Library</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {RESOURCES.map(r => (
              <a key={r.title} href="#key-club" className="group bg-navy-900 border border-navy-700 rounded-xl p-6 hover:border-gold-500/30 transition-all">
                <span className="text-xs text-gold-500 uppercase tracking-wider font-medium">{r.pages}</span>
                <h3 className="font-display text-lg font-semibold text-white mt-2 mb-2 group-hover:text-gold-400 transition-colors">{r.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{r.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs text-gold-500 mt-4 group-hover:gap-2 transition-all">
                  Download <ArrowRight size={12} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Tools */}
      <section className="py-16 border-y border-navy-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs text-gold-500 uppercase tracking-[0.2em] font-medium">Platform</span>
            <h2 className="font-display text-2xl font-bold text-white mt-2">Vault Ventures Operating Tools</h2>
            <p className="text-sm text-gray-400 mt-2 max-w-lg mx-auto">Internal tools powering our acquisition pipeline, deal analysis, and portfolio management.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {TOOLS.map(t => (
              <a key={t.name} href={t.url} target="_blank" rel="noopener noreferrer" className="group bg-navy-900 border border-navy-700 rounded-xl p-6 hover:border-gold-500/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-800 border border-navy-600 flex items-center justify-center shrink-0 group-hover:bg-gold-500/10 transition-colors">
                    <t.icon size={20} className="text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white group-hover:text-gold-400 transition-colors">{t.name}</h3>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">{t.desc}</p>
                    <span className="inline-flex items-center gap-1 text-xs text-gold-500 mt-3">
                      Open <ExternalLink size={10} />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Operator */}
      <section id="operator" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs text-gold-500 uppercase tracking-[0.2em] font-medium">About the Operator</span>
            <h2 className="font-display text-3xl font-bold text-white mt-2 mb-6">Alex Quezada</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I don't run a hedge fund. I don't manage other people's money from a glass office. I'm on the ground, doing deals, solving problems, and building a portfolio one facility at a time.
              </p>
              <p>
                15 years as a full-time commercial real estate operator. 23 assets acquired. $85M portfolio under ownership. 16 self-storage facilities across Florida, South Carolina, Georgia, and Texas. I am a full-time owner-operator. This is all I do.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: '15', label: 'Years Operating' },
                { value: '16', label: 'Storage Facilities' },
                { value: '4', label: 'States' },
              ].map(s => (
                <div key={s.label} className="bg-navy-900 border border-navy-700 rounded-lg p-4 text-center">
                  <p className="font-display text-2xl font-bold text-gold-400">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-900/50 border-t border-navy-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Ready to See Inside the Vault?</h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-8 leading-relaxed">
            Join the Investor Key Club and get first access to deals, market intel, and the real numbers before anyone else.
          </p>
          <a href="https://vaultventuresllc.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-600 to-gold-500 text-navy-950 font-semibold px-8 py-3.5 rounded-lg text-lg hover:from-gold-500 hover:to-gold-400 transition-all">
            <Key size={18} /> Unlock My Key Club Access <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-navy-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center font-bold text-navy-950 text-xs">V</div>
              <span className="text-sm text-gray-500">Vault Ventures LLC</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://vault-ventures-crm.vercel.app" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">CRM</a>
              <a href="https://acquisition-os-chi.vercel.app" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Acquisition OS</a>
              <span className="text-xs text-gray-600">2026 Vault Ventures LLC. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
