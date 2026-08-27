import React from "react";
import { Flame, Leaf, Star, Plus, Minus } from "lucide-react";
import { getItemName } from "../data/menuData";
import { useLanguage } from "../context/LanguageContext";
import { useOrder } from "../context/OrderContext";

export default function MenuItemCard({ item, sectionColor, onClick }) {
  const { lang, t } = useLanguage();
  const { addToOrder, updateQuantity, getItemQuantity } = useOrder();

  const itemName = getItemName(item, lang);
  const quantity = getItemQuantity(item.id);

  const handleAdd = (e) => {
    e.stopPropagation();
    addToOrder(item, 1, sectionColor);
  };

  const handleDecrement = (e) => {
    e.stopPropagation();
    updateQuantity(item.id, -1);
  };

  const handleIncrement = (e) => {
    e.stopPropagation();
    updateQuantity(item.id, 1);
  };

  return (
    <div
      className={`menu-card ${quantity > 0 ? "is-selected" : ""}`}
      style={{ "--card-accent": sectionColor }}
      onClick={() => onClick(item)}
    >
      <div>
        <div className="card-header">
          <h4 className="card-title">{itemName}</h4>
          <span className="card-price">{item.price}</span>
        </div>

        {/* {itemDescription && (
          <p className="card-description">{itemDescription}</p>
        )} */}
      </div>

      <div className="card-footer-row">
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

        {quantity === 0 ? (
          <button
            className="card-add-btn"
            onClick={handleAdd}
            aria-label={`Agregar ${itemName} a la lista`}
          >
            <Plus size={15} /> {t.addToList}
          </button>
        ) : (
          <div className="card-qty-pill" onClick={(e) => e.stopPropagation()}>
            <button
              className="card-qty-btn"
              onClick={handleDecrement}
              aria-label="Restar una unidad"
            >
              <Minus size={13} />
            </button>
            <span className="card-qty-count">{quantity}</span>
            <button
              className="card-qty-btn"
              onClick={handleIncrement}
              aria-label="Sumar una unidad"
            >
              <Plus size={13} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
