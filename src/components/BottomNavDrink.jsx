import React from 'react';
import { DRINK_CATEGORIES, getCategoryName } from '../data/menuData';
import { useLanguage } from '../context/LanguageContext';

export default function BottomNavDrink({ activeSection, onSelectCategory }) {
  const { lang, t } = useLanguage();

  return (
    <nav className="bottom-nav-container">
      <div className="bottom-nav-label">
        {t.drinkNavTitle}
      </div>
      <div className="bottom-nav-grid">
        {DRINK_CATEGORIES.map((cat) => {
          const isActive = activeSection === cat.id;
          const categoryName = getCategoryName(cat, lang);

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
              <span>{categoryName}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
