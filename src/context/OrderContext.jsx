import React, { createContext, useContext, useState, useEffect } from "react";

const OrderContext = createContext();

const STORAGE_KEY = "chido_order_list";

export function OrderProvider({ children }) {
  const [orderList, setOrderList] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Failed to parse order list from localStorage", e);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(orderList));
    } catch (e) {
      console.error("Failed to save order list to localStorage", e);
    }
  }, [orderList]);

  // Helper to parse numeric price from string or numericPrice property
  const parseItemPrice = (item) => {
    if (typeof item.numericPrice === "number" && !isNaN(item.numericPrice)) {
      return item.numericPrice;
    }
    if (!item.price) return 0;
    const cleaned = String(item.price).replace(/[^\d.,]/g, "").replace(",", ".");
    const parsed = parseFloat(cleaned);
    return isNaN(parsed) ? 0 : parsed;
  };

  const addToOrder = (item, quantityToAdd = 1, sectionColor = null) => {
    if (!item || !item.id) return;
    setOrderList((prev) => {
      const existingIndex = prev.findIndex((i) => i.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        const newQty = updated[existingIndex].quantity + quantityToAdd;
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: newQty > 0 ? newQty : 1,
        };
        return updated;
      } else {
        const unitPrice = parseItemPrice(item);
        return [
          ...prev,
          {
            id: item.id,
            name: item.name,
            price: item.price,
            unitPrice,
            quantity: quantityToAdd > 0 ? quantityToAdd : 1,
            sectionColor: sectionColor || item.sectionColor || "var(--chido-red)",
            en: item.en || null,
          },
        ];
      }
    });
  };

  const updateQuantity = (itemId, delta) => {
    setOrderList((prev) => {
      return prev
        .map((item) => {
          if (item.id === itemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const removeFromOrder = (itemId) => {
    setOrderList((prev) => prev.filter((item) => item.id !== itemId));
  };

  const clearOrder = () => {
    setOrderList([]);
  };

  const moveItem = (itemId, direction) => {
    setOrderList((prev) => {
      const index = prev.findIndex((item) => item.id === itemId);
      if (index === -1) return prev;
      const targetIndex = direction === "up" ? index - 1 : index + 1;
      if (targetIndex < 0 || targetIndex >= prev.length) return prev;
      const updated = [...prev];
      const [moved] = updated.splice(index, 1);
      updated.splice(targetIndex, 0, moved);
      return updated;
    });
  };

  const sortOrderList = (criteria) => {
    setOrderList((prev) => {
      const sorted = [...prev];
      if (criteria === "name") {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
      } else if (criteria === "price_asc") {
        sorted.sort((a, b) => a.unitPrice - b.unitPrice);
      } else if (criteria === "price_desc") {
        sorted.sort((a, b) => b.unitPrice - a.unitPrice);
      }
      return sorted;
    });
  };

  const reorderOrderList = (fromIndex, toIndex) => {
    if (fromIndex === toIndex || fromIndex < 0 || toIndex < 0) return;
    setOrderList((prev) => {
      if (fromIndex >= prev.length || toIndex >= prev.length) return prev;
      const updated = [...prev];
      const [moved] = updated.splice(fromIndex, 1);
      updated.splice(toIndex, 0, moved);
      return updated;
    });
  };

  const getItemQuantity = (itemId) => {
    const found = orderList.find((item) => item.id === itemId);
    return found ? found.quantity : 0;
  };

  const totalItemsCount = orderList.reduce((acc, item) => acc + item.quantity, 0);

  const totalEstimatedPrice = orderList.reduce(
    (acc, item) => acc + item.unitPrice * item.quantity,
    0
  );

  const formatPrice = (amount) => {
    return amount.toFixed(2).replace(".", ",") + " €";
  };

  return (
    <OrderContext.Provider
      value={{
        orderList,
        addToOrder,
        updateQuantity,
        removeFromOrder,
        clearOrder,
        moveItem,
        sortOrderList,
        reorderOrderList,
        getItemQuantity,
        totalItemsCount,
        totalEstimatedPrice,
        formatPrice,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
}
