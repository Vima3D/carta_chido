import React from "react";
import { ClipboardList } from "lucide-react";
import { useOrder } from "../context/OrderContext";
import { useLanguage } from "../context/LanguageContext";

export default function OrderFloatingButton({ onOpenList }) {
  const { totalItemsCount, totalEstimatedPrice, formatPrice } = useOrder();
  const { t } = useLanguage();

  return (
    <button
      className={`order-floating-btn ${totalItemsCount > 0 ? "has-items" : ""}`}
      onClick={onOpenList}
      aria-label="Ver mi lista de pedido"
    >
      <div className="order-floating-icon-wrapper">
        <ClipboardList size={20} />
        {totalItemsCount > 0 && (
          <span className="order-floating-badge">{totalItemsCount}</span>
        )}
      </div>

      <div className="order-floating-text-group">
        <span className="order-floating-title">{t.myList}</span>
        {totalItemsCount > 0 && (
          <span className="order-floating-price">
            {formatPrice(totalEstimatedPrice)}
          </span>
        )}
      </div>
    </button>
  );
}
