import React from 'react';
import { ArrowRight, Waves, Droplets } from 'lucide-react';
import { View } from '../types';

interface HeroProps {
  setView: (view: View) => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cyan-50 via-white to-white pb-16 pt-12 md:pt-24 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        
        {/* Text Content */}
        <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0 z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-sm font-semibold mb-6">
            <Waves className="w-4 h-4" /> Origen 100% Natural
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
            La Fuente de la Vida <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              En Tu Vaso
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
            Recupera tu equilibrio mineral con agua de mar microfiltrada en frío. 
            La hidratación celular definitiva que tu cuerpo anhela.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={() => setView(View.SHOP)}
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-2xl shadow-lg shadow-cyan-200 hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              Comprar Ahora <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setView(View.LEARN)}
              className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-2xl border border-slate-200 hover:bg-slate-50 hover:border-cyan-200 transition-all shadow-sm"
            >
              Saber Más
            </button>
          </div>
        </div>

        {/* Visual Content */}
        <div className="md:w-1/2 relative z-10">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-lg transition-transform group-hover:rotate-2"></div>
            <img 
              src="https://picsum.photos/800/800?image=995" // A watery/natural placeholder
              alt="Botella de agua de mar fresca" 
              className="relative rounded-3xl shadow-2xl w-full object-cover h-[500px] transition-transform group-hover:-translate-y-2"
            />
            
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
               <div className="bg-blue-100 p-2 rounded-full">
                 <Droplets className="w-6 h-6 text-blue-600" />
               </div>
               <div>
                 <p className="text-xs text-slate-500 font-semibold uppercase">Minerales</p>
                 <p className="font-bold text-slate-800">78+ Elementos</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;