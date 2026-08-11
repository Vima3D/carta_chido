import React from 'react';
import { FOOD_CATEGORIES, getCategoryName, getCategoryBadge } from '../data/menuData';
import { useLanguage } from '../context/LanguageContext';

export default function TopNavFood({ activeSection, onSelectCategory }) {
  const { lang, t } = useLanguage();

  return (
    <nav className="top-nav-container">
      <div className="top-nav-header">
        <span>{t.foodNavTitle}</span>
        <span style={{ opacity: 0.7, fontSize: '0.7rem' }}>{t.swipe}</span>
      </div>
      <div className="top-nav-scroll">
        {FOOD_CATEGORIES.map((cat) => {
          const isActive = activeSection === cat.id;
          const categoryName = getCategoryName(cat, lang);
          const categoryBadge = getCategoryBadge(cat, lang);

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
              <span>{categoryName}</span>
              <span className="btn-badge">{categoryBadge}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
