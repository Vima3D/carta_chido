import React from 'react';
import { Search, Flame, Leaf, Star, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Header({
  searchTerm,
  setSearchTerm,
  activeFilter,
  setActiveFilter
}) {
  const { lang, toggleLanguage, t } = useLanguage();

  return (
    <header className="brand-header">
      <div className="brand-header-bg">
        <div className="brand-header-top">
          <div className="brand-logo-badge">
            <h1 className="brand-title">CHIDO</h1>
            <span className="brand-subtitle">{t.brandSubtitle}</span>
          </div>

          <button
            className="lang-toggle-btn"
            onClick={toggleLanguage}
            title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            aria-label="Toggle language"
          >
            <Globe size={15} className="globe-icon" />
            <span className={`lang-option ${lang === 'es' ? 'active' : ''}`}>
              🇲🇽 ES
            </span>
            <span className="lang-sep">/</span>
            <span className={`lang-option ${lang === 'en' ? 'active' : ''}`}>
              🇬🇧 EN
            </span>
          </button>
        </div>
        <p className="brand-tagline">{t.brandTagline}</p>
      </div>

      <div className="controls-bar">
        <div className="search-box">
          <Search className="search-icon" size={18} />
          <input
            type="text"
            className="search-input"
            placeholder={t.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              style={{
                position: 'absolute',
                right: '12px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#888'
              }}
            >
              <X size={16} />
            </button>
          )}
        </div>

        <div className="filter-chips">
          <button
            className={`chip-button ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            {t.filterAll}
          </button>
          <button
            className={`chip-button ${activeFilter === 'recommended' ? 'active' : ''}`}
            onClick={() => setActiveFilter(activeFilter === 'recommended' ? 'all' : 'recommended')}
          >
            <Star size={14} fill={activeFilter === 'recommended' ? '#FFF' : 'currentColor'} />
            {t.filterRecommended}
          </button>
          <button
            className={`chip-button ${activeFilter === 'vegetarian' ? 'active' : ''}`}
            onClick={() => setActiveFilter(activeFilter === 'vegetarian' ? 'all' : 'vegetarian')}
          >
            <Leaf size={14} color={activeFilter === 'vegetarian' ? '#FFF' : '#16A34A'} />
            {t.filterVegetarian}
          </button>
          <button
            className={`chip-button ${activeFilter === 'spicy' ? 'active' : ''}`}
            onClick={() => setActiveFilter(activeFilter === 'spicy' ? 'all' : 'spicy')}
          >
            <Flame size={14} color={activeFilter === 'spicy' ? '#FFF' : '#EA580C'} />
            {t.filterSpicy}
          </button>
        </div>
      </div>
    </header>
  );
}
