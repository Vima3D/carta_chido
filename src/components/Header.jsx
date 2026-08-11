import React from 'react';
import { Search, Flame, Leaf, Star, X } from 'lucide-react';

export default function Header({
  searchTerm,
  setSearchTerm,
  activeFilter,
  setActiveFilter
}) {
  return (
    <header className="brand-header">
      <div className="brand-header-bg">
        <div className="brand-logo-badge">
          <h1 className="brand-title">CHIDO</h1>
          <span className="brand-subtitle">MEXICANO & CHINGÓN</span>
        </div>
        <p className="brand-tagline">🇲🇽 Carta Digital 🇲🇽</p>
      </div>

      <div className="controls-bar">
        <div className="search-box">
          <Search className="search-icon" size={18} />
          <input
            type="text"
            className="search-input"
            placeholder="Buscar tacos, nachos, cócteles, birria..."
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
            Todos
          </button>
          <button
            className={`chip-button ${activeFilter === 'recommended' ? 'active' : ''}`}
            onClick={() => setActiveFilter(activeFilter === 'recommended' ? 'all' : 'recommended')}
          >
            <Star size={14} fill={activeFilter === 'recommended' ? '#FFF' : 'currentColor'} />
            Recomendados
          </button>
          <button
            className={`chip-button ${activeFilter === 'vegetarian' ? 'active' : ''}`}
            onClick={() => setActiveFilter(activeFilter === 'vegetarian' ? 'all' : 'vegetarian')}
          >
            <Leaf size={14} color={activeFilter === 'vegetarian' ? '#FFF' : '#16A34A'} />
            Vegetariano
          </button>
          <button
            className={`chip-button ${activeFilter === 'spicy' ? 'active' : ''}`}
            onClick={() => setActiveFilter(activeFilter === 'spicy' ? 'all' : 'spicy')}
          >
            <Flame size={14} color={activeFilter === 'spicy' ? '#FFF' : '#EA580C'} />
            Picante
          </button>
        </div>
      </div>
    </header>
  );
}
