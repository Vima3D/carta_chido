import React from "react";
import { X, Flame, Leaf, Star } from "lucide-react";

export default function ItemModal({ item, sectionColor, onClose }) {
  if (!item) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        style={{ "--modal-accent": sectionColor || "var(--chido-red)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <h3 className="modal-title">{item.name}</h3>
        <div className="modal-price">{item.price}</div>

        <div className="card-badges" style={{ marginBottom: "16px" }}>
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

          {item.spicy === "low" && (
            <span className="badge-tag badge-spicy-low">
              <Flame size={12} color="#CA8A04" /> Picante bajo
            </span>
          )}

          {item.spicy === "medium" && (
            <span className="badge-tag badge-spicy-medium">
              <Flame size={12} color="#EA580C" /> Picante medio
            </span>
          )}
        </div>

        {item.description && (
          <p className="modal-description">{item.description}</p>
        )}

        {item.options && item.options.length > 0 && (
          <div className="modal-options-list">
            <h5 className="modal-options-title">Opciones disponibles:</h5>
            <div className="extras-grid">
              {item.options.map((opt, idx) => (
                <div key={idx} className="extra-item">
                  <span>{opt.name}</span>
                  <span className="extra-price">{opt.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
