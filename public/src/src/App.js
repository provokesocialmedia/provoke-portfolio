import React, { useState } from 'react';
import { Menu, X, ArrowRight, Send, Check } from 'lucide-react';

const ProvokeWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 3000);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-black text-white font-mono overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-95 border-b border-orange-600 border-opacity-20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-2xl font-black">PRO</span>
            <div className="w-1 h-8 bg-orange-600 rounded"></div>
            <span className="text-2xl font-black">VOKE</span>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm">
            <button onClick={() => scrollToSection('about')} className="hover:text-orange-600 transition">About</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-orange-600 transition">Services</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-orange-600 transition">Pricing</button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-orange-600 transition">Work</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-orange-600 transition">Contact</button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-orange-600 border-opacity-20 p-6 space-y-4">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left hover:text-orange-600">About</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left hover:text-orange-600">Services</button>
            <button onClick={() => scrollToSection('pricing')} className="block w-full text-left hover:text-orange-600">Pricing</button>
            <button onClick={() => scrollToSection('gallery')} className="block w-full text-left hover:text-orange-600">Work</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left hover:text-orange-600">Contact</button>
          </div>
        )}
      </nav>

      <section className="min-h-screen bg-orange-600 flex flex-col justify-between pt-24 px-6 md:px-16 py-20">
        <div className="text-center flex-1 flex flex-col justify-center items-center">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-6xl md:text-9xl font-black">PRO</span>
              <div className="w-2 md:w-3 h-24 md:h-40 bg-black rounded"></div>
              <span className="text-6xl md:text-9xl font-black">VOKE</span>
            </div>
            <p className="text-sm md:text-base opacity-60">Social Media Agency · Switzerland</p>
          </div>
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-black text-black mb-8 leading-tight">
              Your brand deserves<br/>
              to be felt<span className="text-orange-700">.</span><br/>
              Not forgotten<span className="text-orange-700">.</span>
            </h1>
          </div>
        </div>

        <div className="flex justify-between items-end gap-8 flex-wrap">
          <div></div>
          <button onClick={() => scrollToSection('contact')} className="bg-black text-orange-600 px-8 py-3 rounded font-bold text-sm hover:scale-105 transition flex items-center gap-2">
            Start a conversation <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <section id="about" className="bg-black px-6 md:px-16 py-24 border-t border-orange-600 border-opacity-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-xs letter-spacing-2 text-orange-600 font-bold mb-12">/01 — FOUNDATION</div>
          <h2 className="text-4xl md:text-6xl font-black mb-12 leading-tight">
            Who we are<span className="text-orange-600">.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                We make brands impossible to ignore. Not louder — sharper. Not more — felt.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                Your brand deserves to be felt, not forgotten. We exist to end the era of forgettable content — and build social presence that moves people, drives results, and lasts.
              </p>
            </div>
            <div className="space-y-8">
              <div className="border-l-2 border-orange-600 pl-6">
                <p className="text-xs text-orange-600 font-bold mb-2">MISSION</p>
                <p className="text-gray-300">Your brand deserves to be felt, not forgotten.</p>
              </div>
              <div className="border-l-2 border-orange-600 pl-6">
                <p className="text-xs text-orange-600 font-bold mb-2">APPROACH</p>
                <p className="text-gray-300">Strategy that works. Production that delivers. Content that sticks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-black px-6 md:px-16 py-24 border-t border-orange-600 border-opacity-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-xs letter-spacing-2 text-orange-600 font-bold mb-12">/02 — SERVICES</div>
          <h2 className="text-4xl md:text-6xl font-black mb-12 leading-tight">
            What we do<span className="text-orange-600">.</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {['Strategy & Positioning', 'Content Production', 'Paid Social Performance', 'Community & Growth'].map((service, i) => (
              <div key={i} className="bg-gray-900 border border-orange-600 border-opacity-20 p-6 rounded">
                <p className="text-xs text-orange-600 font-bold mb-2">/{String(i+1).padStart(2, '0')}</p>
                <p className="text-sm md:text-base font-bold">{service}</p>
              </div>
            ))}
          </div>
          <div className="bg-orange-600 text-black rounded p-8 md:p-12">
            <p className="text-xs font-bold letter-spacing-2 mb-8">PRODUCTION FOCUS</p>
            <h3 className="text-3xl font-black mb-6">Reels that stop the scroll<span className="text-orange-700">.</span></h3>
            <p className="text-lg leading-relaxed mb-6">
              We produce short-form video content (9:16) for Instagram Reels, TikTok & YouTube Shorts. Editorial approach, strategic hooks, professional production.
            </p>
            <p className="text-sm opacity-80">Strategy, filming, editing, sound design — all handled in-house. From concept to distribution.</p>
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-black px-6 md:px-16 py-24 border-t border-orange-600 border-opacity-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs letter-spacing-2 text-orange-600 font-bold mb-12">/03 — PRICING</div>
          <h2 className="text-4xl md:text-6xl font-black mb-16 leading-tight">
            Transparent pricing<span className="text-orange-600">.</span>
          </h2>
          <div className="mb-16">
            <p className="text-orange-600 font-bold text-sm mb-6">SINGLE PRODUCTION</p>
            <div className="bg-gray-900 border border-orange-600 border-opacity-20 rounded-lg p-8 md:p-12">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-black mb-2">Starter</h3>
                  <p className="text-gray-400">1 hour shoot · 1 finished Reel</p>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-black text-orange-600">CHF 590</p>
                  <p className="text-xs text-orange-600 font-bold mt-1">Founding: CHF 450</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-16">
            <p className="text-orange-600 font-bold text-sm mb-6">MONTHLY PACKAGES</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'STRIKE', reels: '4 Reels/Month', price: 1750 },
                { name: 'BURN', reels: '8 Reels/Month', price: 3200, featured: true },
                { name: 'DOMINATE', reels: '12 Reels/Month', price: 4600 }
              ].map((pkg, i) => (
                <div key={i} className={`${pkg.featured ? 'border-2 border-orange-600' : 'border border-orange-600 border-opacity-20'} rounded-lg p-8 ${pkg.featured ? 'bg-orange-600 bg-opacity-10' : 'bg-gray-900'}`}>
                  {pkg.featured && <p className="text-xs text-orange-600 font-bold mb-3">RECOMMENDED</p>}
                  <h3 className="text-2xl font-black mb-3">{pkg.name}</h3>
                  <p className="text-sm text-gray-400 mb-6">{pkg.reels}</p>
                  <p className="text-3xl font-black text-orange-600">CHF {pkg.price.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-black px-6 md:px-16 py-24 border-t border-orange-600 border-opacity-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs letter-spacing-2 text-orange-600 font-bold mb-12">/04 — RECENT WORK</div>
          <h2 className="text-4xl md:text-6xl font-black mb-16 leading-tight">
            What we've created<span className="text-orange-600">.</span>
          </h2>
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-6">See more on Instagram</p>
            <a 
              href="https://www.instagram.com/provoke.social/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-600 text-black px-8 py-3 rounded font-bold hover:bg-orange-700 transition"
            >
              @provoke.social <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-black px-6 md:px-16 py-24 border-t border-orange-600 border-opacity-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-xs letter-spacing-2 text-orange-600 font-bold mb-12">/05 — CASE STUDIES</div>
          <h2 className="text-4xl md:text-6xl font-black mb-16 leading-tight">
            Case studies<span className="text-orange-600">.</span>
          </h2>
          {[
            { name: 'BRIDGE Food Hall', category: 'Hospitality', result: 'Cycle Week campaign with viral sock co-branding. 40% engagement lift.', bg: 'bg-orange-600' },
            { name: 'BASIC Bowl Co.', category: 'F&B Rebranding', result: 'Repositioned vegetarian brand with benefit-driven naming.', bg: 'bg-gray-800' },
            { name: 'Athlete Social Takeover', category: 'Sports', result: 'Marathon barrel campaign for sponsorship. 2M+ impressions.', bg: 'bg-gray-700' }
          ].map((project, i) => (
            <div key={i} className={`${project.bg} text-black rounded-lg p-8 md:p-12 mb-6 cursor-pointer hover:scale-105 transition`}>
              <p className="text-xs font-bold letter-spacing-2 mb-2">/{String(i+1).padStart(2, '0')}</p>
              <h3 className="text-3xl md:text-4xl font-black mb-4">{project.name}</h3>
              <p className="text-sm font-bold opacity-70 mb-6">{project.category}</p>
              <p className="text-lg leading-relaxed opacity-90">{project.result}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-black px-6 md:px-16 py-24 border-t border-orange-600 border-opacity-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-xs letter-spacing-2 text-orange-600 font-bold mb-12">/06 — CONTACT</div>
          <h2 className="text-4xl md:text-5xl font-black mb-12 leading-tight">
            Let's provoke<span className="text-orange-600">.</span>
          </h2>
          <div className="space-y-6 mb-8">
            <div>
              <label className="block text-xs font-bold letter-spacing-2 text-orange-600 mb-2">NAME</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                className="w-full bg-gray-900 border border-orange-600 border-opacity-30 rounded px-4 py-3 text-white focus:outline-none focus:border-orange-600"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-xs font-bold letter-spacing-2 text-orange-600 mb-2">EMAIL</label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                className="w-full bg-gray-900 border border-orange-600 border-opacity-30 rounded px-4 py-3 text-white focus:outline-none focus:border-orange-600"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-xs font-bold letter-spacing-2 text-orange-600 mb-2">MESSAGE</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                rows="6"
                className="w-full bg-gray-900 border border-orange-600 border-opacity-30 rounded px-4 py-3 text-white focus:outline-none focus:border-orange-600"
                placeholder="Tell us about your brand..."
              />
            </div>
            <button 
              onClick={handleFormSubmit}
              className="w-full bg-orange-600 text-black font-bold py-3 rounded hover:bg-orange-700 transition flex items-center justify-center gap-2"
            >
              Send <Send size={16} />
            </button>
            {formSubmitted && (
              <div className="bg-orange-600 text-black p-4 rounded text-sm font-bold text-center">
                Message sent. We'll be in touch.
              </div>
            )}
          </div>
          <div className="pt-12 border-t border-orange-600 border-opacity-20 text-center text-xs text-gray-500 space-y-1">
            <p>daria@provoke.ch · provoke.ch</p>
            <p>Switzerland · 2025</p>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-orange-600 border-opacity-20 px-6 md:px-16 py-8 text-center text-xs text-gray-600">
        <p>PROVOKE — Your brand deserves to be felt. Not forgotten.</p>
      </footer>
    </div>
  );
};

export default ProvokeWebsite;
