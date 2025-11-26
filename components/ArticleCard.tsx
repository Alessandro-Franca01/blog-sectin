import React from 'react';
import { Article } from '../types';
import { Clock, User } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="group flex flex-col items-stretch justify-start rounded-xl overflow-hidden bg-surface-light dark:bg-surface-dark shadow-sm border border-border-light dark:border-border-dark hover:border-primary/50 dark:hover:border-primary/50 transition-colors duration-300">
      <div 
        className="w-full bg-center bg-no-repeat aspect-video bg-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        role="img"
        aria-label={article.imageAlt}
        style={{ backgroundImage: `url("${article.imageUrl}")` }}
      />
      
      <div className="flex w-full min-w-0 grow flex-col items-stretch justify-center gap-3 p-4 z-10 bg-surface-light dark:bg-surface-dark">
        <h3 className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold leading-tight tracking-[-0.015em] group-hover:text-primary transition-colors">
          {article.title}
        </h3>
        
        <div className="flex flex-col gap-2">
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-base font-normal leading-normal line-clamp-2">
            {article.description}
          </p>
          
          <div className="flex items-center gap-4 pt-2 text-sm text-text-secondary-light dark:text-text-secondary-dark font-medium">
             <div className="flex items-center gap-1.5">
                <User size={14} className="text-primary" />
                <span>por {article.author}</span>
             </div>
             <div className="flex items-center gap-1.5">
                <Clock size={14} className="text-primary" />
                <span>{article.date}</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;