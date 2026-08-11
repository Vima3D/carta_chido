import React from 'react';
import { FOOD_CATEGORIES } from '../data/menuData';

export default function TopNavFood({ activeSection, onSelectCategory }) {
  return (
    <nav className="top-nav-container">
      <div className="top-nav-header">
        <span>🍲 Secciones de Comida (8)</span>
        <span style={{ opacity: 0.7, fontSize: '0.7rem' }}>Desliza ➔</span>
      </div>
      <div className="top-nav-scroll">
        {FOOD_CATEGORIES.map((cat) => {
          const isActive = activeSection === cat.id;
          return (
            <button
              key={cat.id}
              className={`nav-food-btn ${isActive ? 'active' : ''}`}
              style={{
                '--nav-btn-color': cat.color
              }}
              onClick={() => onSelectCategory(cat.id)}
            >
              <span className="btn-icon">{cat.icon}</span>
              <span>{cat.name}</span>
              <span className="btn-badge">{cat.badge}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
