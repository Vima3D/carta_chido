import React from "react";
import { X, Flame, Leaf, Star } from "lucide-react";
import { getItemName, getItemDescription, getItemOptions } from "../data/menuData";
import { useLanguage } from "../context/LanguageContext";

export default function ItemModal({ item, sectionColor, onClose }) {
  const { lang, t } = useLanguage();

  if (!item) return null;

  const itemName = getItemName(item, lang);
  const itemDescription = getItemDescription(item, lang);
  const itemOptions = getItemOptions(item, lang);

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

        <h3 className="modal-title">{itemName}</h3>
        <div className="modal-price">{item.price}</div>

        <div className="card-badges" style={{ marginBottom: "16px" }}>
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

          {item.spicy === "low" && (
            <span className="badge-tag badge-spicy-low">
              <Flame size={12} color="#CA8A04" /> {t.badgeSpicyLow}
            </span>
          )}

          {item.spicy === "medium" && (
            <span className="badge-tag badge-spicy-medium">
              <Flame size={12} color="#EA580C" /> {t.badgeSpicyMedium}
            </span>
          )}
        </div>

        {itemDescription && (
          <p className="modal-description">{itemDescription}</p>
        )}

        {itemOptions && itemOptions.length > 0 && (
          <div className="modal-options-list">
            <h5 className="modal-options-title">{t.optionsTitle}</h5>
            <div className="extras-grid">
              {itemOptions.map((opt, idx) => (
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
