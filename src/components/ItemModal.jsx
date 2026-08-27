import React, { useState } from "react";
import { X, Flame, Leaf, Star, Plus, Minus, Check, ClipboardList } from "lucide-react";
import { getItemName, getItemDescription, getItemOptions } from "../data/menuData";
import { useLanguage } from "../context/LanguageContext";
import { useOrder } from "../context/OrderContext";
import { getDishImage } from "../utils/dishImages";

export default function ItemModal({ item, sectionColor, onClose }) {
  const { lang, t } = useLanguage();
  const { addToOrder, getItemQuantity } = useOrder();
  
  const initialQty = item ? getItemQuantity(item.id) || 1 : 1;
  const [modalQty, setModalQty] = useState(initialQty);
  const [justAdded, setJustAdded] = useState(false);

  if (!item) return null;

  const itemName = getItemName(item, lang);
  const itemDescription = getItemDescription(item, lang);
  const itemOptions = getItemOptions(item, lang);
  const dishImage = getDishImage(item);

  const handleAddToList = () => {
    addToOrder(item, modalQty, sectionColor);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      onClose();
    }, 600);
  };

  return (
    <div className="modal-overlay item-modal-overlay" onClick={onClose}>
      <div
        className={`modal-content ${dishImage ? "has-image" : ""}`}
        style={{ "--modal-accent": sectionColor || "var(--chido-red)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar">
          <X size={20} />
        </button>

        {dishImage && (
          <div className="modal-image-wrapper">
            <img
              src={dishImage}
              alt={itemName}
              className="modal-dish-img"
            />
          </div>
        )}

        <div className="modal-body-content">
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

          {/* ADD TO LIST CONTROLS */}
          <div className="modal-add-container">
            <div className="modal-qty-selector">
              <button
                className="modal-qty-btn"
                onClick={() => setModalQty((prev) => Math.max(1, prev - 1))}
                aria-label="Restar una unidad"
              >
                <Minus size={16} />
              </button>
              <span className="modal-qty-num">{modalQty}</span>
              <button
                className="modal-qty-btn"
                onClick={() => setModalQty((prev) => prev + 1)}
                aria-label="Sumar una unidad"
              >
                <Plus size={16} />
              </button>
            </div>

            <button
              className={`modal-add-btn ${justAdded ? "added" : ""}`}
              onClick={handleAddToList}
            >
              {justAdded ? (
                <>
                  <Check size={18} /> {t.addedToList}
                </>
              ) : (
                <>
                  <ClipboardList size={18} /> {t.addToList} ({modalQty})
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
