import React from 'react';
import { Plus, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductsProps {
  addToCart: (product: Product) => void;
}

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: "WATERMAR Isotónica",
    description: "Lista para beber. El equilibrio perfecto para tu hidratación diaria.",
    price: 3.50,
    image: "https://picsum.photos/400/400?image=550", // clean water/glass look
    type: 'isotonic',
    volume: '1 Litro'
  },
  {
    id: '2',
    name: "WATERMAR Hipertónica",
    description: "Pura del océano. Ideal para deportistas extremos y uso culinario.",
    price: 4.20,
    image: "https://picsum.photos/400/400?image=449", // deeper blue look
    type: 'hypertonic',
    volume: '1 Litro'
  },
  {
    id: '3',
    name: "Spray Nasal WATERMAR",
    description: "Descongestión natural y limpieza suave para toda la familia.",
    price: 8.90,
    image: "https://picsum.photos/400/400?image=338", // mist/spray vibe
    type: 'spray',
    volume: '100 ml'
  },
  {
    id: '4',
    name: "Pack Familiar Vitalidad",
    description: "6L Isotónica + 2L Hipertónica. La dosis mensual recomendada.",
    price: 24.50,
    image: "https://picsum.photos/400/400?image=400", // package vibe
    type: 'isotonic',
    volume: 'Pack 8L'
  }
];

const Products: React.FC<ProductsProps> = ({ addToCart }) => {
  return (
    <section id="shop" className="py-24 bg-cyan-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Nuestra Colección</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Productos envasados en vidrio farmacéutico para preservar la estructura molecular y pureza original de WATERMAR.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col border border-cyan-50">
              <div className="relative h-64 overflow-hidden bg-slate-100">
                 <img 
                   src={product.image} 
                   alt={product.name}
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                 />
                 <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-slate-800 shadow-sm">
                   {product.volume}
                 </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                   <h3 className="text-xl font-bold text-slate-800 mb-1">{product.name}</h3>
                   <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded ${
                     product.type === 'hypertonic' ? 'bg-blue-100 text-blue-700' : 
                     product.type === 'isotonic' ? 'bg-cyan-100 text-cyan-700' : 'bg-teal-100 text-teal-700'
                   }`}>
                     {product.type === 'hypertonic' ? '100% Pura' : product.type === 'isotonic' ? 'Diluida' : 'Uso Tópico'}
                   </span>
                </div>
                
                <p className="text-slate-500 text-sm mb-6 flex-1">
                  {product.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-2xl font-bold text-slate-900">€{product.price.toFixed(2)}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-cyan-600 transition-colors shadow-lg shadow-slate-200 hover:shadow-cyan-200"
                    aria-label="Añadir al carrito"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;