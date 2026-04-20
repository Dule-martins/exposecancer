
import React from 'react';
import { useCMS } from '../context/CMSContext';
import { ShieldCheck, Zap, Globe, ArrowRight, Activity, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { state } = useCMS();
  const { content } = state;

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          {content.heroVideo ? (
            <video 
              src={content.heroVideo} 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover brightness-[0.4]"
              poster={content.heroImage}
            />
          ) : (
            <img 
              src={content.heroImage} 
              alt="Hero Background" 
              className="w-full h-full object-cover brightness-50"
            />
          )}
        </div>
        <div className="relative z-10 text-center max-w-4xl px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight leading-tight">
            {content.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-emerald-200 mb-10 font-medium italic">
            {content.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/truth" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-900/40">
              Learn the Truth <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/blog" className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all border border-white/20">
              Latest News
            </Link>
          </div>
        </div>
      </section>

      {/* Key Note Section */}
      <section className="py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-emerald-100 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" /> Key Note
              </div>
              <p className="text-3xl md:text-4xl font-display font-bold text-emerald-900 leading-snug">
                "{content.keyNote}"
              </p>
              <p className="text-emerald-700 font-medium">
                — Global campaign to overcome cancer today.
              </p>
            </div>
            <div className="md:w-1/3 grid grid-cols-2 gap-4">
              <div className="aspect-square bg-emerald-600 rounded-2xl flex flex-col items-center justify-center text-white p-4 text-center">
                <Zap className="w-8 h-8 mb-2" />
                <span className="text-xs font-bold uppercase tracking-tighter">Immediate Action</span>
              </div>
              <div className="aspect-square bg-emerald-800 rounded-2xl flex flex-col items-center justify-center text-white p-4 text-center">
                <Globe className="w-8 h-8 mb-2" />
                <span className="text-xs font-bold uppercase tracking-tighter">Global Outreach</span>
              </div>
              <div className="aspect-square bg-emerald-400 rounded-2xl flex flex-col items-center justify-center text-emerald-900 p-4 text-center">
                <Activity className="w-8 h-8 mb-2" />
                <span className="text-xs font-bold uppercase tracking-tighter">Health Reform</span>
              </div>
              <div className="aspect-square bg-emerald-200 rounded-2xl flex flex-col items-center justify-center text-emerald-800 p-4 text-center">
                <Sprout className="w-8 h-8 mb-2" />
                <span className="text-xs font-bold uppercase tracking-tighter">Nature Based</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-emerald-900 mb-8">Introduction</h2>
          <div className="prose prose-lg prose-emerald mx-auto text-slate-700 leading-relaxed">
            <p>{content.introText}</p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-emerald-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-emerald-800 rounded-2xl border border-emerald-700">
              <h3 className="text-2xl font-bold mb-4 text-emerald-300">The key point:</h3>
              <p className="opacity-80">The most significant factor as far as the cure for cancer is concerned, is the fact (science) that cancer is an intracellular disease, with the immune system as the key to the cure; therefore: Drugs are useless to cancer and Immunotherapy is the only means of treatment for a cure</p>
            </div>
            <div className="p-8 bg-emerald-800 rounded-2xl border border-emerald-700">
              <h3 className="text-2xl font-bold mb-4 text-emerald-300">The key Benefits:</h3>
              <p className="opacity-80">The key benefits of exposing the truth about cancer; It helps to provide a correct diagnosis and pathway to the simple cure for cancer. It puts an end to the enabling ignorance, the basis of mankind being deceived and financially exploited through expensive palliative treatments for cancer</p>
            </div>
            <div className="p-8 bg-emerald-800 rounded-2xl border border-emerald-700">
              <h3 className="text-2xl font-bold mb-4 text-emerald-300">The key Highlights:</h3>
              <p className="opacity-80">As the key highlights, exposing the truth about cancer very importantly reveals the followings; Why cancer has been incurable, Why cancer has remained incurable, and Why a simple cure for cancer</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Highlights Details */}
      <section className="py-24 bg-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-emerald-800 rounded-2xl border border-emerald-700">
              <h3 className="text-2xl font-bold mb-4 text-emerald-300">Why cancer has been incurable</h3>
              <p className="opacity-80">Drugs cannot carry out the safe and effective selective cytotoxicity required as treatment.</p>
            </div>
            <div className="p-8 bg-emerald-800 rounded-2xl border border-emerald-700">
              <h3 className="text-2xl font-bold mb-4 text-emerald-300">Why cancer has remained incurable</h3>
              <p className="opacity-80">The system of the Global health sector is under the influence of those profiting from synthetic drugs.</p>
            </div>
            <div className="p-8 bg-emerald-800 rounded-2xl border border-emerald-700">
              <h3 className="text-2xl font-bold mb-4 text-emerald-300">Why a simple cure for cancer</h3>
              <p className="opacity-80">The immune system is the key to the cure for intracellular diseases like cancer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-emerald-100">
              <h2 className="text-3xl font-display font-bold text-emerald-900 mb-6">Our Vision</h2>
              <p className="text-slate-700 leading-relaxed italic">"{content.vision}"</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-emerald-100">
              <h2 className="text-3xl font-display font-bold text-emerald-900 mb-6">Our Mission</h2>
              <p className="text-slate-700 leading-relaxed">{content.mission}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
