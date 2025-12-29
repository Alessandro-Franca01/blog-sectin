import React, { useState, useEffect } from 'react';
import { Menu, Share2 } from 'lucide-react';

interface HeaderProps {
    onMenuClick: () => void;
    onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, onLogoClick }) => {
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for header
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        // Check initial scroll position
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 border-b ${scrolled
                ? 'bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-border-light dark:border-border-dark shadow-sm py-2'
                : 'bg-transparent border-transparent py-4'
                }`}
        >
            <div className="w-full max-w-6xl mx-auto px-4 flex items-center justify-between">
                <div
                    className="flex items-center gap-3 cursor-pointer group"
                    onClick={onLogoClick}
                >
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all">
                        <Share2 className="text-white" size={24} />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold leading-none tracking-tight">Sectin</h1>
                        <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark font-medium tracking-wider">TECH BLOG</span>
                    </div>
                </div>

                <button
                    onClick={onMenuClick}
                    className="p-2.5 rounded-xl hover:bg-surface-light dark:hover:bg-surface-dark/50 text-text-primary-light dark:text-text-primary-dark transition-all border border-transparent hover:border-border-light dark:hover:border-border-dark active:scale-95"
                    aria-label="Abrir menu"
                >
                    <Menu size={26} />
                </button>
            </div>
        </header>
    );
};

export default Header;
