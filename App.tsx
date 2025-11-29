import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Products from './components/Products';
import ChatWidget from './components/ChatWidget';
import { View, Product } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart(prev => [...prev, product]);
    // Simple notification logic could go here
    const el = document.createElement('div');
    el.className = 'fixed top-24 right-4 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg z-[60] animate-bounce';
    el.innerText = '¡Producto añadido!';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2000);
  };

  const renderContent = () => {
    switch (currentView) {
      case View.SHOP:
        return <Products addToCart={addToCart} />;
      case View.LEARN:
        return <Benefits />;
      case View.HOME:
      default:
        return (
          <>
            <Hero setView={setCurrentView} />
            <Benefits />
            <Products addToCart={addToCart} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header 
        currentView={currentView} 
        setView={setCurrentView} 
        cartCount={cart.length} 
      />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white text-xl font-bold mb-4 tracking-tight">WATERMAR</h4>
            <p className="text-xs font-semibold text-cyan-500 mb-4 tracking-widest uppercase">Beneficiosa & Natural</p>
            <p className="text-sm leading-relaxed text-slate-400">
              Trayendo la pureza del océano a tu hogar. Comprometidos con la salud natural y la sostenibilidad marina.
            </p>
          </div>
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li onClick={() => setCurrentView(View.HOME)} className="cursor-pointer hover:text-cyan-400 transition-colors">Inicio</li>
              <li onClick={() => setCurrentView(View.SHOP)} className="cursor-pointer hover:text-cyan-400 transition-colors">Tienda</li>
              <li onClick={() => setCurrentView(View.LEARN)} className="cursor-pointer hover:text-cyan-400 transition-colors">Protocolo Quinton</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Contacto</h4>
            <p className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer">info@watermar.com</p>
            <p className="text-sm text-slate-400">+34 900 123 456</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} WATERMAR. Todos los derechos reservados.
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default App;