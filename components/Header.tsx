import React from 'react';
import { Droplets, ShoppingBag, BookOpen, Home } from 'lucide-react';
import { View } from '../types';

interface HeaderProps {
  currentView: View;
  setView: (view: View) => void;
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ currentView, setView, cartCount }) => {
  const navItemClass = (view: View) => `
    flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 font-medium
    ${currentView === view 
      ? 'bg-cyan-600 text-white shadow-md shadow-cyan-200' 
      : 'text-slate-600 hover:bg-cyan-50 hover:text-cyan-700'}
  `;

  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-cyan-100/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setView(View.HOME)}
          >
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-2.5 rounded-full shadow-lg transform group-hover:scale-105 transition-transform border-2 border-white">
              <Droplets className="h-7 w-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-700 to-blue-900 tracking-tight leading-none">
                WATERMAR
              </span>
              <span className="text-[0.65rem] font-bold text-cyan-600 tracking-[0.2em] uppercase mt-0.5">
                Beneficiosa & Natural
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            <button onClick={() => setView(View.HOME)} className={navItemClass(View.HOME)}>
              <Home className="w-4 h-4" /> Inicio
            </button>
            <button onClick={() => setView(View.LEARN)} className={navItemClass(View.LEARN)}>
              <BookOpen className="w-4 h-4" /> Beneficios
            </button>
            <button onClick={() => setView(View.SHOP)} className={navItemClass(View.SHOP)}>
              <ShoppingBag className="w-4 h-4" /> Tienda
            </button>
          </nav>

          {/* Cart Icon (Visual only for this demo) */}
          <div className="relative p-3 text-cyan-800 cursor-pointer hover:bg-cyan-50 rounded-full transition-colors">
            <ShoppingBag className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-500 rounded-full shadow-sm">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;