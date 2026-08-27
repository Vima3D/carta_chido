import React, { useState, useRef } from "react";
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

  const touchDraggedIdxRef = useRef(null);
  const touchDragOverIdxRef = useRef(null);

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

  // Drag & Drop handlers (Desktop HTML5)
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

  // Touch Handlers for Mobile Drag & Drop
  const handleTouchStart = (e, index) => {
    touchDraggedIdxRef.current = index;
    touchDragOverIdxRef.current = index;
    setDraggedIdx(index);
    setDragOverIdx(index);
  };

  const handleTouchMove = (e) => {
    if (touchDraggedIdxRef.current === null) return;
    if (e.cancelable) {
      e.preventDefault();
    }
    const touch = e.touches[0];
    if (!touch) return;

    const targetElem = document.elementFromPoint(touch.clientX, touch.clientY);
    const rowElem = targetElem?.closest(".order-item-row");

    if (rowElem && rowElem.dataset && rowElem.dataset.index !== undefined) {
      const hoverIndex = parseInt(rowElem.dataset.index, 10);
      if (!isNaN(hoverIndex) && touchDragOverIdxRef.current !== hoverIndex) {
        touchDragOverIdxRef.current = hoverIndex;
        setDragOverIdx(hoverIndex);
      }
    }

    const container = document.querySelector(".order-modal-body");
    if (container) {
      const rect = container.getBoundingClientRect();
      const edgeThreshold = 40;
      if (touch.clientY < rect.top + edgeThreshold) {
        container.scrollTop -= 8;
      } else if (touch.clientY > rect.bottom - edgeThreshold) {
        container.scrollTop += 8;
      }
    }
  };

  const handleTouchEnd = () => {
    const fromIdx = touchDraggedIdxRef.current;
    const toIdx = touchDragOverIdxRef.current;

    if (fromIdx !== null && toIdx !== null && fromIdx !== toIdx) {
      reorderOrderList(fromIdx, toIdx);
    }

    touchDraggedIdxRef.current = null;
    touchDragOverIdxRef.current = null;
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
                      data-index={index}
                      className={`order-item-row ${isDragging ? "is-dragging" : ""} ${
                        isDragOver ? "is-drag-over" : ""
                      }`}
                      onDragOver={(e) => handleDragOver(e, index)}
                      onDrop={(e) => handleDrop(e, index)}
                    >
                      {/* DRAG HANDLE */}
                      <div
                        className="drag-handle"
                        title="Arrastra para cambiar de orden"
                        aria-label="Reordenar plato"
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDragEnd={handleDragEnd}
                        onTouchStart={(e) => handleTouchStart(e, index)}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        onTouchCancel={handleTouchEnd}
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
