import React, { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import TopNavFood from "../components/TopNavFood";
import BottomNavDrink from "../components/BottomNavDrink";
import MenuItemCard from "../components/MenuItemCard";
import ItemModal from "../components/ItemModal";
import ScrollToTop from "../components/ScrollToTop";
import OrderFloatingButton from "../components/OrderFloatingButton";
import OrderListModal from "../components/OrderListModal";
import { preloadAllDishImages } from "../utils/dishImages";

import {
  FOOD_CATEGORIES,
  DRINK_CATEGORIES,
  MENU_ITEMS,
  getSectionTitle,
  getSectionSubtitle,
  getSectionExtras,
} from "../data/menuData";
import { PlusCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function MenuPage() {
  const { lang, t } = useLanguage();
  const [activeSection, setActiveSection] = useState("nachos");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOrderListOpen, setIsOrderListOpen] = useState(false);

  useEffect(() => {
    preloadAllDishImages();
  }, []);

  const sectionRefs = useRef({});

  const allCategories = [...FOOD_CATEGORIES, ...DRINK_CATEGORIES];

  // Handle navigation click
  const handleSelectCategory = (catId) => {
    setActiveSection(catId);
    if (sectionRefs.current[catId]) {
      sectionRefs.current[catId].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Filter items logic
  const getFilteredItems = (items, categoryId) => {
    if (!items) return [];

    const isDrinkCategory = DRINK_CATEGORIES.some((c) => c.id === categoryId);
    const query = searchTerm.trim().toLowerCase();

    return items.filter((item) => {
      // Search term filter applies to Spanish & English fields
      const matchesSearch =
        query === "" ||
        item.name.toLowerCase().includes(query) ||
        (item.description && item.description.toLowerCase().includes(query)) ||
        (item.en?.name && item.en.name.toLowerCase().includes(query)) ||
        (item.en?.description && item.en.description.toLowerCase().includes(query));

      if (!matchesSearch) return false;

      // Dietary / tag filters ONLY apply to food categories
      if (!isDrinkCategory) {
        if (activeFilter === "recommended" && !item.recommended) return false;
        if (activeFilter === "vegetarian" && !item.vegetarian) return false;
        if (activeFilter === "spicy" && !item.spicy) return false;
      }

      return true;
    });
  };

  const isSearchingOrFiltering =
    searchTerm.trim() !== "" || activeFilter !== "all";

  return (
    <div className="app-container">
      {/* HEADER WITH SEARCH, FILTERS & LANGUAGE SWITCHER */}
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      {/* TOP NAVIGATION BAR (8 FOOD BUTTONS) */}
      <TopNavFood
        activeSection={activeSection}
        onSelectCategory={handleSelectCategory}
      />

      {/* MENU SECTIONS */}
      <main>
        {allCategories.map((cat) => {
          const categoryData = MENU_ITEMS[cat.id];
          if (!categoryData) return null;

          const filteredItems = getFilteredItems(categoryData.items, cat.id);

          // If searching/filtering and section has no matches, hide section
          if (isSearchingOrFiltering && filteredItems.length === 0) {
            return null;
          }

          const sectionTitle = getSectionTitle(categoryData, lang);
          const sectionSubtitle = getSectionSubtitle(categoryData, lang);
          const sectionExtras = getSectionExtras(categoryData, lang);

          return (
            <section
              key={cat.id}
              id={cat.id}
              ref={(el) => (sectionRefs.current[cat.id] = el)}
              className="menu-section-container"
            >
              {/* SECTION BANNER */}
              <div
                className="section-banner"
                style={{ "--section-color": cat.color }}
              >
                <h2 className="section-title">
                  {cat.icon} {sectionTitle}
                </h2>
                {sectionSubtitle && (
                  <p className="section-subtitle">{sectionSubtitle}</p>
                )}
              </div>

              {/* ITEMS GRID */}
              <div className="items-grid">
                {filteredItems.map((item) => (
                  <MenuItemCard
                    key={item.id}
                    item={item}
                    sectionColor={cat.color}
                    onClick={(selected) =>
                      setSelectedItem({ ...selected, sectionColor: cat.color })
                    }
                  />
                ))}
              </div>

              {/* EXTRAS OR SIDES BOX IF PRESENT */}
              {sectionExtras &&
                sectionExtras.length > 0 &&
                !isSearchingOrFiltering && (
                  <div
                    className="extras-box"
                    style={{ "--section-color": cat.color }}
                  >
                    <h4 className="extras-title">
                      <PlusCircle size={18} /> {t.extrasTitle}
                    </h4>
                    <div className="extras-grid">
                      {sectionExtras.map((extra, idx) => (
                        <div key={idx} className="extra-item">
                          <span>{extra.name}</span>
                          <span className="extra-price">{extra.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </section>
          );
        })}

        {/* NO RESULTS FOUND NOTICE */}
        {isSearchingOrFiltering &&
          allCategories.every((cat) => {
            const categoryData = MENU_ITEMS[cat.id];
            return (
              !categoryData ||
              getFilteredItems(categoryData.items, cat.id).length === 0
            );
          }) && (
            <div className="no-results">
              <div className="no-results-icon">🌮🔍</div>
              <h3 className="no-results-title">{t.noResultsTitle}</h3>
              <p style={{ color: "var(--text-muted)" }}>{t.noResultsText}</p>
            </div>
          )}
      </main>

      {/* ORDER SELECTION LIST MODAL */}
      <OrderListModal
        isOpen={isOrderListOpen}
        onClose={() => setIsOrderListOpen(false)}
        onSelectItem={(item) => setSelectedItem(item)}
      />

      {/* ITEM DETAIL MODAL */}
      {selectedItem && (
        <ItemModal
          item={selectedItem}
          sectionColor={selectedItem.sectionColor}
          onClose={() => setSelectedItem(null)}
        />
      )}

      {/* FLOATING ORDER LIST BUTTON */}
      <OrderFloatingButton onOpenList={() => setIsOrderListOpen(true)} />

      {/* BOTTOM NAVIGATION BAR (7 DRINK BUTTONS) */}
      <BottomNavDrink
        activeSection={activeSection}
        onSelectCategory={handleSelectCategory}
      />

      {/* FLOATING SCROLL TO TOP BUTTON */}
      <ScrollToTop />

      {/* FOOTER */}
      <footer className="app-footer">
        <p>
          <strong>CHIDO MEXICANO & CHINGÓN</strong> © {new Date().getFullYear()}
        </p>
        <p style={{ fontSize: "0.78rem", marginTop: "4px" }}>
          {t.footerTagline}
        </p>
      </footer>
    </div>
  );
}
