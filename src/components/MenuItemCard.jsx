import React from 'react';
import { Flame, Leaf, Star } from 'lucide-react';
import { getItemName, getItemDescription } from '../data/menuData';
import { useLanguage } from '../context/LanguageContext';

export default function MenuItemCard({ item, sectionColor, onClick }) {
  const { lang, t } = useLanguage();

  const itemName = getItemName(item, lang);
  const itemDescription = getItemDescription(item, lang);

  return (
    <div
      className="menu-card"
      style={{ '--card-accent': sectionColor }}
      onClick={() => onClick(item)}
    >
      <div>
        <div className="card-header">
          <h4 className="card-title">{itemName}</h4>
          <span className="card-price">{item.price}</span>
        </div>

        {itemDescription && (
          <p className="card-description">{itemDescription}</p>
        )}
      </div>

      <div className="card-badges">
        {item.recommended && (
          <span className="badge-tag badge-recommended">
            <Star size={12} fill="#DC2626" /> {t.badgeRecommended}
          </span>
        )}

        {item.vegetarian && (
          <span className="badge-tag badge-veg">
            <Leaf size={12} color="#16A34A" /> {t.badgeVegetarian}
          </span>
        )}

        {item.spicy === 'low' && (
          <span className="badge-tag badge-spicy-low">
            <Flame size={12} color="#CA8A04" /> {t.badgeSpicyLow}
          </span>
        )}

        {item.spicy === 'medium' && (
          <span className="badge-tag badge-spicy-medium">
            <Flame size={12} color="#EA580C" /> {t.badgeSpicyMedium}
          </span>
        )}
      </div>
    </div>
  );
}
