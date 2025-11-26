import React from 'react';
import { X, Home, Info, ChevronRight, Hexagon } from 'lucide-react';
import { PageView } from '../types';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentView: PageView;
  onChangeView: (view: PageView) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, currentView, onChangeView }) => {
  const handleNav = (view: PageView) => {
    onChangeView(view);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Sidebar Panel */}
      <div className={`fixed inset-y-0 right-0 z-50 w-72 bg-surface-light dark:bg-surface-dark shadow-2xl transform transition-transform duration-300 ease-in-out border-l border-border-light dark:border-border-dark ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-border-light dark:border-border-dark">
          <span className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">Menu</span>
          <button 
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-text-secondary-light dark:text-text-secondary-dark transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-4 flex flex-col gap-2">
          <button 
            onClick={() => handleNav(PageView.HOME)}
            className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
              currentView === PageView.HOME 
                ? 'bg-primary/10 text-primary font-bold' 
                : 'text-text-secondary-light dark:text-text-secondary-dark hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            <Home size={20} />
            <span className="flex-1 text-left">Início</span>
            {currentView === PageView.HOME && <ChevronRight size={16} />}
          </button>

          <button 
            onClick={() => handleNav(PageView.ABOUT)}
            className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
              currentView === PageView.ABOUT
                ? 'bg-primary/10 text-primary font-bold' 
                : 'text-text-secondary-light dark:text-text-secondary-dark hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            <Info size={20} />
            <span className="flex-1 text-left">Sobre a Sectin</span>
            {currentView === PageView.ABOUT && <ChevronRight size={16} />}
          </button>
        </div>

        <div className="absolute bottom-0 w-full p-6 border-t border-border-light dark:border-border-dark">
            <div className="flex items-center gap-2 text-text-secondary-light dark:text-text-secondary-dark opacity-60">
                 <Hexagon size={16} className="text-primary"/>
                 <span className="text-xs font-medium uppercase tracking-wider">Sectin Tech Portal</span>
            </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;