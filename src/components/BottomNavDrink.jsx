import React from 'react';
import { DRINK_CATEGORIES } from '../data/menuData';

export default function BottomNavDrink({ activeSection, onSelectCategory }) {
  return (
    <nav className="bottom-nav-container">
      <div className="bottom-nav-label">
        🥤 BEBIDAS Y CÓCTELES (7 SECCIONES)
      </div>
      <div className="bottom-nav-grid">
        {DRINK_CATEGORIES.map((cat) => {
          const isActive = activeSection === cat.id;
          return (
            <button
              key={cat.id}
              className={`nav-drink-btn ${isActive ? 'active' : ''}`}
              style={{
                '--drink-btn-color': cat.color
              }}
              onClick={() => onSelectCategory(cat.id)}
            >
              <span className="drink-icon">{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
