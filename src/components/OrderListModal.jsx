import React, { useState } from "react";
import { X, Trash2, Plus, Minus, ClipboardList, Eye, GripVertical } from "lucide-react";
import { useOrder } from "../context/OrderContext";
import { useLanguage } from "../context/LanguageContext";
import { findMenuItemById } from "../data/menuData";

export default function OrderListModal({ isOpen, onClose, onSelectItem }) {
  const {
    orderList,
    updateQuantity,
    removeFromOrder,
    clearOrder,
    reorderOrderList,
    totalEstimatedPrice,
    totalItemsCount,
    formatPrice,
  } = useOrder();
  const { lang, t } = useLanguage();

  const [draggedIdx, setDraggedIdx] = useState(null);
  const [dragOverIdx, setDragOverIdx] = useState(null);

  if (!isOpen) return null;

  const handleClearAll = () => {
    if (window.confirm(t.confirmClearList)) {
      clearOrder();
    }
  };

  const handleItemClick = (item) => {
    const fullItem = findMenuItemById(item.id) || item;
    if (onSelectItem) {
      onSelectItem(fullItem);
    }
  };

  // Drag & Drop handlers
  const handleDragStart = (e, index) => {
    setDraggedIdx(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (dragOverIdx !== index) {
      setDragOverIdx(index);
    }
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    if (draggedIdx !== null && draggedIdx !== index) {
      reorderOrderList(draggedIdx, index);
    }
    setDraggedIdx(null);
    setDragOverIdx(null);
  };

  const handleDragEnd = () => {
    setDraggedIdx(null);
    setDragOverIdx(null);
  };

  return (
    <div className="modal-overlay order-modal-overlay" onClick={onClose}>
      <div
        className="modal-content order-list-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* MODAL HEADER */}
        <div className="order-modal-header">
          <div className="order-modal-title-group">
            <h3 className="order-modal-title">
              <ClipboardList size={22} className="order-title-icon" /> {t.myListTitle}
            </h3>
            {totalItemsCount > 0 && (
              <span className="order-count-badge">{totalItemsCount}</span>
            )}
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar">
            <X size={20} />
          </button>
        </div>

        {/* MODAL BODY */}
        <div className="order-modal-body">
          {orderList.length === 0 ? (
            <div className="empty-order-state">
              <div className="empty-order-icon">📋</div>
              <h4 className="empty-order-title">{t.emptyList}</h4>
              <p className="empty-order-text">{t.emptyListText}</p>
            </div>
          ) : (
            <>
              <div className="order-items-list">
                {orderList.map((item, index) => {
                  const itemName = lang === "en" && item.en?.name ? item.en.name : item.name;
                  const isDragging = draggedIdx === index;
                  const isDragOver = dragOverIdx === index;

                  return (
                    <div
                      key={item.id}
                      className={`order-item-row ${isDragging ? "is-dragging" : ""} ${
                        isDragOver ? "is-drag-over" : ""
                      }`}
                      draggable
                      onDragStart={(e) => handleDragStart(e, index)}
                      onDragOver={(e) => handleDragOver(e, index)}
                      onDrop={(e) => handleDrop(e, index)}
                      onDragEnd={handleDragEnd}
                    >
                      {/* DRAG HANDLE */}
                      <div
                        className="drag-handle"
                        title="Arrastra para cambiar de orden"
                        aria-label="Reordenar plato"
                      >
                        <GripVertical size={20} />
                      </div>

                      {/* ITEM DETAILS - MAXIMUM SPACE FOR NAME */}
                      <div
                        className="order-item-info clickable"
                        onClick={() => handleItemClick(item)}
                        title="Ver detalle del producto"
                        role="button"
                        tabIndex={0}
                      >
                        <div className="order-item-name-row">
                          <span className="order-item-name">{itemName}</span>
                          <Eye size={15} className="view-detail-icon" />
                        </div>
                        <span className="order-item-unit-price">
                          {item.price} c/u
                        </span>
                      </div>

                      {/* QUANTITY AND DELETE ACTIONS */}
                      <div className="order-item-actions">
                        <div className="qty-controls">
                          <button
                            className="qty-btn qty-minus"
                            onClick={(e) => {
                              e.stopPropagation();
                              updateQuantity(item.id, -1);
                            }}
                            aria-label="Disminuir cantidad"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="qty-value">{item.quantity}</span>
                          <button
                            className="qty-btn qty-plus"
                            onClick={(e) => {
                              e.stopPropagation();
                              updateQuantity(item.id, 1);
                            }}
                            aria-label="Aumentar cantidad"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <button
                          className="delete-item-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFromOrder(item.id);
                          }}
                          title="Eliminar de la lista"
                          aria-label="Eliminar"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* WAITER INSTRUCTION BOX */}
              <div className="waiter-notice-box">
                <span>{t.showToWaiter}</span>
              </div>
            </>
          )}
        </div>

        {/* MODAL FOOTER */}
        {orderList.length > 0 && (
          <div className="order-modal-footer">
            <div className="order-total-row">
              <span className="order-total-label">{t.totalEstimated}</span>
              <span className="order-total-amount">
                {formatPrice(totalEstimatedPrice)}
              </span>
            </div>

            <div className="order-footer-buttons">
              <button className="clear-order-btn" onClick={handleClearAll}>
                <Trash2 size={15} /> {t.clearList}
              </button>
              <button className="close-order-btn" onClick={onClose}>
                {t.closeList}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
