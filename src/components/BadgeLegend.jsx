import React from 'react';
import { Flame, Leaf, Star } from 'lucide-react';

export default function BadgeLegend() {
  return (
    <div className="badge-legend">
      <span style={{ fontWeight: '800', color: 'var(--chido-red)' }}>
        Insignias de la Carta:
      </span>
      <span className="legend-item">
        <Flame size={14} color="#CA8A04" /> Picante bajo
      </span>
      <span className="legend-item">
        <Flame size={14} color="#EA580C" /> Picante medio
      </span>
      <span className="legend-item">
        <Star size={14} fill="#DC2626" color="#DC2626" /> Recomendado
      </span>
      <span className="legend-item">
        <Leaf size={14} color="#16A34A" /> Vegetariano
      </span>
    </div>
  );
}
