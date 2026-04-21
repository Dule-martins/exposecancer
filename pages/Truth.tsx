
import React from 'react';
import { Microscope, Target, Heart, Scale } from 'lucide-react';

const Truth = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-emerald-900 text-white py-20 px-4 text-center">
        <h1 className="text-5xl font-display font-bold mb-4">The Truth About Cancer</h1>
        <p className="text-emerald-200 text-xl max-w-2xl mx-auto">
          Exposing the compromise system, and highlighting the basics of a simple, affordable, and sustainable cure for cancer. (immunotherapy)
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20 space-y-24">
        {/* Why Incurable */}
        <section className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3 flex justify-center">
            <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
              <Microscope className="w-12 h-12" />
            </div>
          </div>
          <div className="md:w-2/3 space-y-6">
            <h2 className="text-3xl font-display font-bold text-emerald-900">Why cancer has been incurable</h2>
            <p className="text-slate-700 leading-relaxed">
              Cancer has simply been incurable, primarily for the fact that Drugs are useless to cure for cancer; because, Drugs cannot carry out the safe and effective selective cytotoxicity required as treatment for the cure of intracellular diseases like cancer. In a situation where, Drugs are the only acceptable medicines today.
            </p>
          </div>
        </section>

        {/* Why Remained Incurable */}
        <section className="flex flex-col md:flex-row-reverse gap-12 items-start">
          <div className="md:w-1/3 flex justify-center">
            <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
              <Scale className="w-12 h-12" />
            </div>
          </div>
          <div className="md:w-2/3 space-y-6 text-right md:text-left">
            <h2 className="text-3xl font-display font-bold text-emerald-900">Why cancer has remained incurable</h2>
            <p className="text-slate-700 leading-relaxed">
              Cancer has sadly remained incurable for so long simply because the system of the Global health sector, known to be under the influence and control of the powers that be, presently making outrageous money from Drugs (synthetic medicines), has ensured that Drugs remain the only acceptable medicines.
            </p>
          </div>
        </section>

        {/* The Simple Cure */}
        <section className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3 flex justify-center">
            <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
              <Target className="w-12 h-12" />
            </div>
          </div>
          <div className="md:w-2/3 space-y-6">
            <h2 className="text-3xl font-display font-bold text-emerald-900">Why a simple cure for cancer</h2>
            <p className="text-slate-700 leading-relaxed">
              A simple, affordable and sustainable cure for cancer is all based on the science that the immune system is the key to the cure for intracellular diseases. The cytotoxic immune cells have the unique capability to carry out the safe and effective selective cytotoxicity required.
            </p>
            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100 italic text-emerald-800">
              "Boosting the immune system with cytotoxic immune booster foods (true and simple natural medicines) makes food the basis for a simple, affordable and sustainable cure."
            </div>
          </div>
        </section>

        {/* Inspiration */}
        <section className="bg-slate-50 p-12 rounded-3xl text-center space-y-6">
          <Heart className="w-12 h-12 text-emerald-600 mx-auto" />
          <h2 className="text-3xl font-display font-bold text-emerald-900">Concept & Inspiration</h2>
          <p className="text-slate-600 italic">
            "Inspired by Martin Luther and his 95 Theses, in a similar situation where the elites are taking advantage of ignorance to deceive and exploit financially. You shall know the truth, and it shall set you free."
          </p>
        </section>
      </div>
    </div>
  );
};

export default Truth;
