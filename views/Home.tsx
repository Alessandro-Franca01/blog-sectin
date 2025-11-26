import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';
import { ARTICLES } from '../constants';
import ArticleCard from '../components/ArticleCard';

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Filter articles based on search
  const filteredArticles = ARTICLES.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setIsLoadingMore(false);
      // In a real app, this would fetch more data
    }, 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto pb-8">
      {/* Search Header */}
      <div className="px-4 py-4 sticky top-[72px] z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md">
        <label className="relative flex items-center w-full group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-text-secondary-light dark:text-text-secondary-dark group-focus-within:text-primary transition-colors" />
          </div>
          <input 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-11 pr-4 py-3 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl text-text-primary-light dark:text-text-primary-dark placeholder-text-secondary-light dark:placeholder-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
            placeholder="Pesquisar artigos..."
          />
        </label>
      </div>

      {/* Article Grid */}
      <div className="flex flex-col gap-6 px-4">
        {filteredArticles.length > 0 ? (
          filteredArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))
        ) : (
           <div className="text-center py-12">
             <p className="text-text-secondary-light dark:text-text-secondary-dark">Nenhum artigo encontrado para "{searchTerm}"</p>
           </div>
        )}
      </div>

      {/* Load More */}
      {filteredArticles.length > 0 && (
        <div className="p-4 mt-2">
            <button 
                onClick={handleLoadMore}
                disabled={isLoadingMore}
                className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-primary hover:bg-primary-dark text-white gap-2 text-base font-bold shadow-lg shadow-primary/20 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isLoadingMore ? (
                    <>
                        <Loader2 className="animate-spin" size={20} />
                        <span>Carregando...</span>
                    </>
                ) : (
                    <span>Carregar Mais</span>
                )}
            </button>
        </div>
      )}
    </div>
  );
};

export default Home;