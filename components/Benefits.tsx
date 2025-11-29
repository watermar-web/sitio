import React from 'react';
import { Battery, ShieldCheck, Brain, Zap } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Battery className="w-8 h-8 text-cyan-600" />,
      title: "Rehidratación Instantánea",
      description: "Contiene todos los electrolitos necesarios para una recuperación rápida después del ejercicio."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Refuerzo Inmunológico",
      description: "Ayuda a alcalinizar el cuerpo y fortalecer las defensas naturales contra enfermedades."
    },
    {
      icon: <Brain className="w-8 h-8 text-teal-500" />,
      title: "Claridad Mental",
      description: "El magnesio y oligoelementos mejoran la función cognitiva y reducen la fatiga mental."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Energía Natural",
      description: "Sin cafeína ni azúcares. Solo la energía pura de los minerales biodisponibles."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-cyan-600 font-semibold tracking-wide uppercase mb-3">¿Por qué Agua de Mar?</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">El Secreto Mejor Guardado de la Naturaleza</h3>
          <p className="text-lg text-slate-600">
            Nuestro plasma marino es recolectado en vórtices oceánicos específicos donde la concentración de plancton garantiza la máxima biodisponibilidad mineral.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-cyan-200 hover:shadow-lg transition-all duration-300 group">
              <div className="bg-white rounded-xl p-4 w-16 h-16 flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Info Box: Isotonic vs Hypertonic */}
        <div className="mt-20 bg-gradient-to-br from-cyan-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
           <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-400 opacity-10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
           
           <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
             <div>
               <h3 className="text-3xl font-bold mb-6">¿Isotónica o Hipertónica?</h3>
               <p className="text-cyan-100 mb-6 text-lg">
                 Entender la diferencia es clave para tu bienestar.
               </p>
               <ul className="space-y-4">
                 <li className="flex items-start gap-3">
                   <div className="w-2 h-2 mt-2 bg-cyan-400 rounded-full"></div>
                   <div>
                     <strong className="text-white block text-lg">Hipertónica (Pura)</strong>
                     <span className="text-cyan-200">100% Agua de mar. Ideal para cocinar, enjuagues bucales o diluir tú mismo. Alta concentración mineral.</span>
                   </div>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="w-2 h-2 mt-2 bg-teal-400 rounded-full"></div>
                   <div>
                     <strong className="text-white block text-lg">Isotónica (Diluida)</strong>
                     <span className="text-cyan-200">Mezcla aproximada de 1 parte de agua de mar por 3 de agua dulce. Idéntica a la salinidad de nuestro plasma sanguíneo. Lista para beber.</span>
                   </div>
                 </li>
               </ul>
             </div>
             <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <img 
                  src="https://picsum.photos/600/400?image=89" 
                  alt="Vaso de agua pura" 
                  className="w-full h-64 object-cover rounded-xl shadow-lg mb-4"
                />
                <p className="text-center text-sm font-medium text-cyan-200 italic">
                  "El agua de mar no es solo agua salada, es sopa de vida."
                </p>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;