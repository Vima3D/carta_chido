import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const uiTranslations = {
  es: {
    searchPlaceholder: "Buscar tacos, nachos, cócteles, birria...",
    filterAll: "Todos",
    filterRecommended: "Recomendados",
    filterVegetarian: "Vegetariano",
    filterSpicy: "Picante",
    foodNavTitle: "🍲 Secciones de Comida (8)",
    drinkNavTitle: "🥤 BEBIDAS Y CÓCTELES (7 SECCIONES)",
    swipe: "Desliza ➔",
    badgeRecommended: "Recomendado",
    badgeVegetarian: "Vegetariano",
    badgeSpicyLow: "Picante bajo",
    badgeSpicyMedium: "Picante medio",
    extrasTitle: "Extras & Complementos",
    optionsTitle: "Opciones disponibles:",
    noResultsTitle: "No encontramos platillos o bebidas",
    noResultsText: "Prueba a modificar la búsqueda o a borrar los filtros de selección.",
    footerTagline: "¡Buen Provecho! Disfruta de la mejor comida y coctelería mexicana.",
    brandSubtitle: "MEXICANO & CHINGÓN",
    brandTagline: "🇲🇽 Carta Digital 🇲🇽",
  },
  en: {
    searchPlaceholder: "Search tacos, nachos, cocktails, birria...",
    filterAll: "All",
    filterRecommended: "Recommended",
    filterVegetarian: "Vegetarian",
    filterSpicy: "Spicy",
    foodNavTitle: "🍲 Food Sections (8)",
    drinkNavTitle: "🥤 DRINKS & COCKTAILS (7 SECTIONS)",
    swipe: "Swipe ➔",
    badgeRecommended: "Recommended",
    badgeVegetarian: "Vegetarian",
    badgeSpicyLow: "Mild spicy",
    badgeSpicyMedium: "Medium spicy",
    extrasTitle: "Extras & Sides",
    optionsTitle: "Available options:",
    noResultsTitle: "No food or drinks found",
    noResultsText: "Try adjusting your search or clearing your selection filters.",
    footerTagline: "Enjoy! Experience the finest Mexican food & cocktails.",
    brandSubtitle: "MEXICAN & AWESOME",
    brandTagline: "🇲🇽 Digital Menu 🇲🇽",
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem("chido_lang");
    return saved === "en" ? "en" : "es";
  });

  useEffect(() => {
    localStorage.setItem("chido_lang", lang);
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  };

  const t = uiTranslations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
