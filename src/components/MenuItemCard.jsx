import React from 'react';
import { Flame, Leaf, Star } from 'lucide-react';

export default function MenuItemCard({ item, sectionColor, onClick }) {
  return (
    <div
      className="menu-card"
      style={{ '--card-accent': sectionColor }}
      onClick={() => onClick(item)}
    >
      <div>
        <div className="card-header">
          <h4 className="card-title">{item.name}</h4>
          <span className="card-price">{item.price}</span>
        </div>

        {item.description && (
          <p className="card-description">{item.description}</p>
        )}
      </div>

      <div className="card-badges">
        {item.recommended && (
          <span className="badge-tag badge-recommended">
            <Star size={12} fill="#DC2626" /> Recomendado
          </span>
        )}

        {item.vegetarian && (
          <span className="badge-tag badge-veg">
            <Leaf size={12} color="#16A34A" /> Vegetariano
          </span>
        )}

        {item.spicy === 'low' && (
          <span className="badge-tag badge-spicy-low">
            <Flame size={12} color="#CA8A04" /> Picante bajo
          </span>
        )}

        {item.spicy === 'medium' && (
          <span className="badge-tag badge-spicy-medium">
            <Flame size={12} color="#EA580C" /> Picante medio
          </span>
        )}
      </div>
    </div>
  );
}
