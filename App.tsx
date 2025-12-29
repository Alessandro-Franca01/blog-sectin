import React, { useState, useEffect } from 'react';
import { Menu, Share2, Hexagon } from 'lucide-react';
import { PageView } from './types';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './views/Home';
import About from './views/About';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<PageView>(PageView.HOME);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark font-display">

      {/* Sticky Header */}
      {/* Sticky Header */}
      <Header
        onMenuClick={() => setIsSidebarOpen(true)}
        onLogoClick={() => setCurrentView(PageView.HOME)}
      />

      {/* Main Content */}
      <main className="flex-grow pt-24 w-full mx-auto">
        {currentView === PageView.HOME && <Home />}
        {currentView === PageView.ABOUT && <About />}
      </main>

      {/* Footer */}
      <footer className="border-t border-border-light dark:border-border-dark bg-surface-light dark:bg-background-dark py-8 px-4 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-text-secondary-light dark:text-text-secondary-dark">
            <Hexagon size={18} className="text-primary" />
            <span className="text-sm font-semibold">Secretaria de Ciência, Inovação e Tecnologia de Cabedelo</span>
          </div>
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark text-center md:text-right">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Navigation Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        currentView={currentView}
        onChangeView={setCurrentView}
      />

    </div>
  );
};

export default App;