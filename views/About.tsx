import React from 'react';
import { Rocket, Eye, Heart, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { PILLARS, HISTORY, CONTACT } from '../constants';
import { Pillar } from '../types';

const About: React.FC = () => {
  const getIcon = (iconName: Pillar['icon']) => {
    switch (iconName) {
      case 'rocket': return <Rocket size={24} />;
      case 'eye': return <Eye size={24} />;
      case 'heart': return <Heart size={24} />;
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto pb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">

      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight px-4 pt-6 pb-6 text-text-primary-light dark:text-text-primary-dark">
        Sobre a Secretaria de Tecnologia
      </h1>

      {/* Hero Section */}
      <div className="px-4 mb-8">
        <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden bg-surface-light dark:bg-surface-dark shadow-sm border border-border-light dark:border-border-dark">
          <div
            className="w-full md:w-1/2 aspect-video md:aspect-auto bg-cover bg-center min-h-[250px]"
            style={{ backgroundImage: 'url("/images/about-hero.jpg")' }}
            role="img"
            aria-label="Prefeitura de Cabedelo"
          />
          <div className="flex flex-col justify-center p-6 md:p-8 w-full md:w-1/2 gap-3">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Inovação e Tecnologia</span>
            <h2 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">Bem-vindo à Sectin</h2>
            <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
              Somos a força motriz da inovação tecnológica em Cabedelo, dedicados a modernizar a gestão pública e a vida dos cidadãos através de soluções digitais eficientes e acessíveis.
            </p>
          </div>
        </div>
      </div>

      {/* Pillars Grid */}
      <div className="px-4 mb-10">
        <h3 className="text-xl font-bold mb-4 text-text-primary-light dark:text-text-primary-dark">Nossos Pilares</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PILLARS.map((pillar) => (
            <div key={pillar.id} className="flex flex-col p-6 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:border-primary/30 transition-colors shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                {getIcon(pillar.icon)}
              </div>
              <h4 className="text-lg font-bold mb-2 text-text-primary-light dark:text-text-primary-dark">{pillar.title}</h4>
              <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="px-4 mb-10">
        <h3 className="text-xl font-bold mb-6 text-text-primary-light dark:text-text-primary-dark">Nossa História</h3>
        <div className="ml-2 pl-6 border-l-2 border-primary/20 space-y-8 relative">
          {HISTORY.map((event, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-background-light dark:ring-background-dark" />
              <h4 className="font-bold text-lg text-text-primary-light dark:text-text-primary-dark flex items-center gap-2">
                <span className="text-primary">{event.year}</span> - {event.title}
              </h4>
              <p className="text-text-secondary-light dark:text-text-secondary-dark mt-1 text-sm md:text-base">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="px-4">
        <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-bold mb-6 text-text-primary-light dark:text-text-primary-dark">Entre em Contato</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="#" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-background-light dark:bg-background-dark flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-medium text-text-primary-light dark:text-text-primary-dark">{CONTACT.address}</p>
                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">{CONTACT.city}</p>
              </div>
            </a>

            <a href="#" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-background-light dark:bg-background-dark flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Phone size={20} />
              </div>
              <div>
                <p className="font-medium text-text-primary-light dark:text-text-primary-dark">{CONTACT.phone}</p>
                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">{CONTACT.hours}</p>
              </div>
            </a>

            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-background-light dark:bg-background-dark flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Mail size={20} />
              </div>
              <div>
                <p className="font-medium text-text-primary-light dark:text-text-primary-dark break-all">{CONTACT.email}</p>
                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Envie-nos um e-mail</p>
              </div>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;