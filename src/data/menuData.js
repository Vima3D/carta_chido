export const FOOD_CATEGORIES = [
  {
    id: "nachos",
    name: "Nachos",
    icon: "🌮",
    badge: "Crujientes",
    color: "#D45136",
    en: { name: "Nachos", badge: "Crispy" },
  },
  {
    id: "tacos",
    name: "Tacos",
    icon: "🌮",
    badge: "3 por Ración",
    color: "#BE3C1B",
    en: { name: "Tacos", badge: "3 per Portion" },
  },
  {
    id: "burritos",
    name: "Burritos",
    icon: "🌯",
    badge: "Bien Rellenos",
    color: "#1D4E89",
    en: { name: "Burritos", badge: "Well Stuffed" },
  },
  {
    id: "enchiladas",
    name: "Enchiladas",
    icon: "🫔",
    badge: "3 Tortillas",
    color: "#7B2D8B",
    en: { name: "Enchiladas", badge: "3 Tortillas" },
  },
  {
    id: "antojitos",
    name: "Antojitos",
    icon: "🫔",
    badge: "Para Compartir",
    color: "#2E4A9E",
    en: { name: "Street Snacks", badge: "To Share" },
  },
  {
    id: "quesadillas",
    name: "Quesadillas",
    icon: "🧀",
    badge: "Queso Fundido",
    color: "#D99026",
    en: { name: "Quesadillas", badge: "Melted Cheese" },
  },
  {
    id: "pambazos",
    name: "Pambazos",
    icon: "🥪",
    badge: "Brioche",
    color: "#C4432B",
    en: { name: "Pambazos", badge: "Brioche" },
  },
  {
    id: "tostadas",
    name: "Tostadas",
    icon: "🌽",
    badge: "Maíz Crujiente",
    color: "#D97706",
    en: { name: "Tostadas", badge: "Crispy Corn" },
  },
  {
    id: "desnudos",
    name: "Desnudos",
    icon: "🥗",
    badge: "Bowls",
    color: "#E36F1E",
    en: { name: "Naked Bowls", badge: "Bowls" },
  },
  {
    id: "peques",
    name: "Peques",
    icon: "🧒",
    badge: "Para Niños",
    color: "#C4432B",
    en: { name: "Kids Menu", badge: "For Kids" },
  },
  {
    id: "postres",
    name: "Postres",
    icon: "🍰",
    badge: "Dulce Final",
    color: "#A04318",
    en: { name: "Desserts", badge: "Sweet Ending" },
  },
];

export const DRINK_CATEGORIES = [
  {
    id: "cervezas",
    name: "Cervezas",
    icon: "🍺",
    badge: "Bien Frías",
    color: "#D97706",
    en: { name: "Beers", badge: "Ice Cold" },
  },
  {
    id: "margaritas",
    name: "Margaritas",
    icon: "🍸",
    badge: "Frozen o Clásicas",
    color: "#059669",
    en: { name: "Margaritas", badge: "Frozen or Classic" },
  },
  {
    id: "cocteles",
    name: "Cócteles",
    icon: "🍹",
    badge: "Tropical & Cítrico",
    color: "#DB2777",
    en: { name: "Cocktails", badge: "Tropical & Citrus" },
  },
  {
    id: "limonadas",
    name: "Limonadas",
    icon: "🍋",
    badge: "Sin Alcohol",
    color: "#CA8A04",
    en: { name: "Lemonades", badge: "Non-Alcoholic" },
  },
  {
    id: "tequilas",
    name: "Tequilas",
    icon: "🌵",
    badge: "Jalisco & Oaxaca",
    color: "#B45309",
    en: { name: "Tequilas", badge: "Jalisco & Oaxaca" },
  },
  {
    id: "micheladas",
    name: "Micheladas",
    icon: "🌶️",
    badge: "Con Clamato / Lima",
    color: "#DC2626",
    en: { name: "Micheladas", badge: "With Clamato / Lime" },
  },
  {
    id: "refrescos",
    name: "Refrescos",
    icon: "🥤",
    badge: "Refrescantes",
    color: "#2563EB",
    en: { name: "Soft Drinks", badge: "Refreshing" },
  },
  {
    id: "sangria",
    name: "Sangría",
    icon: "🍷",
    badge: "Jarra 1L",
    color: "#7C2D12",
    en: { name: "Sangria", badge: "1L Pitcher" },
  },
];

export const MENU_ITEMS = {
  nachos: {
    title: "NACHOS",
    subtitle: "Totopos fritos por nosotros diariamente",
    accentColor: "#D45136",
    en: {
      title: "NACHOS",
      subtitle: "Corn tortilla chips freshly fried in-house daily",
      extras: [
        { name: "Melted cheese gratin", price: "3,00 €" },
        { name: "Chili sauce", price: "3,00 €" },
        { name: "Cochinita, Chicken, Costilla", price: "4,50 €" },
        { name: "Extra Guacamole", price: "3,50 €" },
      ],
    },
    items: [
      {
        id: "chingonachos",
        name: "Chingonachos",
        price: "12,90 €",
        numericPrice: 12.9,
        description:
          "Nachos con guacamole, crema agria, jalapeños, pico de gallo, cebolla crujiente y salsa de queso cheddar.",
        recommended: true,
        vegetarian: true,
        spicy: "low",
        tags: ["Popular", "Recomendado"],
        en: {
          name: "Chingonachos",
          description:
            "Nachos topped with guacamole, sour cream, jalapeños, pico de gallo, crispy onion, and cheddar cheese sauce.",
        },
      },
      {
        id: "nachos_guacamole",
        name: "Nachos con Guacamole, Crema Agria y Pico de Gallo",
        price: "13,50 €",
        numericPrice: 13.5,
        description:
          "Nachos con guacamole casero, crema agria y pico de gallo fresco.",
        vegetarian: true,
        en: {
          name: "Nachos with Guacamole",
          description:
            "Nachos served with homemade guacamole, sour cream, and fresh pico de gallo.",
        },
      },
      {
        id: "naxos",
        name: "Naxos",
        price: "12,50 €",
        numericPrice: 13.5,
        description:
          "Nachos con queso fundido, salsa Jack Daniels, salsa de queso cheddar, cebolla crujiente y sésamo blanco.",
        vegetarian: true,
        en: {
          name: "Nachos with Guacamole",
          description:
            "Nachos with melted cheese, Jack Daniels sauce, cheddar cheese sauce, crispy onions, and white sesame seeds.",
        },
      },
      {
        id: "nachos_kimchi",
        name: "Nachos Kimchi",
        price: "12,90 €",
        numericPrice: 12.9,
        description:
          "Totopos de maíz, queso Monterrey Jack, salsa queso cheddar, tinga de pollo, mayo kimchi, sriracha y cebolla encurtida.",
        spicy: "medium",
        en: {
          name: "Kimchi Nachos",
          description:
            "Corn chips, Monterey Jack cheese, cheddar sauce, chicken tinga, kimchi mayo, sriracha, and pickled onion.",
        },
      },
      {
        id: "nachos_gratinados",
        name: "Nachos Gratinados con Salsa de Queso, Birria y Jalapeños",
        price: "13,70 €",
        numericPrice: 13.7,
        description:
          "Nachos gratinados con salsa de queso, birria y jalapeños.",
        recommended: true,
        en: {
          name: "Birria Cheese Gratin Nachos",
          description:
            "Gratinated nachos with cheese sauce, slow-cooked beef birria, and jalapeños.",
        },
      },
    ],
    extras: [
      { name: "Queso gratinado o cheddar", price: "3,00 €" },
      { name: "Chili con carne", price: "3,90 €" },
      { name: "Cochinita / Tinga de pollo", price: "4,50 €" },
      { name: " Guacamole extra", price: "3,50 €" },
    ],
  },

  tacos: {
    title: "TACOS",
    subtitle: "3 Tacos grandes por ración",
    accentColor: "#BE3C1B",
    en: {
      title: "TACOS",
      subtitle: "3 Large tacos per portion",
      extras: [
        {
          name: "French Fries",
          price: "2,00 €",
        },
      ],
    },
    items: [
      {
        id: "taco_cochinita_pibil",
        name: "Taco de Cochinita Pibil",
        price: "9,90 €",
        numericPrice: 9.9,
        description:
          "Cochinita pibil con crema de chipotle, crema agria y cebolla roja encurtida. (3 uds)",
        en: {
          name: "Cochinita Pibil Tacos",
          description:
            "Slow-roasted pork with chipotle cream, sour cream, and pickled red onion. (3 pcs)",
        },
      },
      {
        id: "taco_smash_burger",
        name: "Taco Smash Burger",
        price: "10,90 €",
        numericPrice: 10.9,
        description:
          "Burger smash, bacon, pepinillo, queso Monterey Jack y salsa burger. (3 uds)",
        en: {
          name: "Smash Burger Taco",
          description:
            "Smashed beef patty, bacon, pickle, Monterey Jack cheese, and house burger sauce. (3 pcs)",
        },
      },
      {
        id: "taco_pulled_pork_bbo",
        name: "Taco Pulled Pork BBQ",
        price: "9,90 €",
        numericPrice: 9.9,
        description:
          "Carne de cerdo asada en salsa BBQ a baja temperatura con cebolla crujiente y queso Oaxaca. (3 uds)",
        en: {
          name: "Pulled Pork BBQ Tacos",
          description:
            "Slow-cooked BBQ pulled pork with crispy onion and melted Oaxaca cheese. (3 pcs)",
        },
      },
      {
        id: "taco_tempura_gambones",
        name: "Taco de Tempura de Gambones Crujientes",
        price: "11,90 €",
        numericPrice: 11.9,
        description:
          "En cremosa de kimchi, algas wakame, cebolleta china y aros de cebolla crujientes. (3 uds)",
        recommended: true,
        en: {
          name: "King Prawn Tempura Tacos",
          description:
            "Tempura king prawns with creamy kimchi, wakame seaweed, spring onion, and crispy onion rings. (3 pcs)",
        },
      },
      {
        id: "taco_chistorra_navarra",
        name: "Taco de Chistorra a la Navarra",
        price: "8,90 €",
        numericPrice: 8.9,
        description:
          "Chistorra, queso de cabra, cebolla caramelizada y miel. (3 uds)",
        en: {
          name: "Navarra Sausage Tacos",
          description:
            "Navarra chistorra sausage, goat cheese, caramelized onion, and honey. (3 pcs)",
        },
      },
      {
        id: "taco_pastor",
        name: "Taco Pastor",
        price: "9,90 €",
        numericPrice: 9.9,
        description:
          "Carne de cerdo asada en adobo pastor, pico de gallo de piña y salsa pastor. (3 uds)",
        recommended: true,
        en: {
          name: "Tacos Al Pastor",
          description:
            "Marinated roasted pork with pineapple pico de gallo and house pastor salsa. (3 pcs)",
        },
      },
      {
        id: "taco_vegano",
        name: "Taco Vegano",
        price: "10,50 €",
        numericPrice: 10.5,
        description:
          "Tofu marinado en achiote a la plancha con salsa cremosa de cacahuate y chiles tatemados, y pico de gallo. (3 uds)",
        vegetarian: true,
        spicy: "low",
        en: {
          name: "Vegan Tacos",
          description:
            "Grilled achiote-marinated tofu with creamy peanut roasted chili sauce and pico de gallo. (3 pcs)",
        },
      },
      {
        id: "taco_chili_carne",
        name: "Taco Chili de Carne",
        price: "9,90 €",
        numericPrice: 9.9,
        description:
          "Chili de carne, mezcla de quesos cheddar y Monterrey Jack, lechuga, crema agria y jalapeños. (3 uds)",
        spicy: "medium",
        en: {
          name: "Chili Beef Tacos",
          description:
            "Beef chili, cheddar and Monterey Jack cheese blend, lettuce, sour cream, and jalapeños. (3 pcs)",
        },
      },
      {
        id: "taco_birria_ternera",
        name: "Taco de Birria de Ternera",
        price: "12,00 €",
        numericPrice: 12.0,
        description:
          "Birria de ternera con queso Oaxaca, pico de gallo de hierbabuena con salsa de su caldo para mojar. (3 uds)",
        recommended: true,
        en: {
          name: "Beef Birria Tacos",
          description:
            "Slow-braised beef birria with Oaxaca cheese, mint pico de gallo, served with consommé dipping broth. (3 pcs)",
        },
      },
      {
        id: "taco_pollo_crujiente",
        name: "Taco de Pollo Crujiente",
        price: "10,50 €",
        numericPrice: 10.5,
        description:
          "Pollo crujiente con salsa yakiniku, crema de aguacate y pico de gallo con piña. (3 uds)",
        en: {
          name: "Crispy Chicken Tacos",
          description:
            "Crispy chicken with yakiniku sauce, avocado cream, and pineapple pico de gallo. (3 pcs)",
        },
      },
      {
        id: "taco_birria_res_crunch",
        name: 'Taco Birria de Res "Crunch"',
        price: "12,90 €",
        numericPrice: 12.9,
        description:
          "Birria de res con cremosa de chipotle, queso curado de oveja y papas paja. (3 uds)",
        en: {
          name: 'Beef Birria "Crunch" Tacos',
          description:
            "Beef birria with creamy chipotle, cured sheep cheese, and crispy potato sticks. (3 pcs)",
        },
      },
      {
        id: "taco_panceta_glaseada",
        name: "Taco de Panceta Glaseada",
        price: "11,90 €",
        numericPrice: 11.9,
        description:
          "Panceta glaseada, lechuga, pico de gallo y trufa con ralladura de oveja y piparra. (3 uds)",
        en: {
          name: "Glazed Pork Belly Tacos",
          description:
            "Glazed pork belly, lettuce, pico de gallo and truffle with sheep cheese shavings and mild green pepper. (3 pcs)",
        },
      },
      {
        id: "degustacion_yucateca",
        name: "Degustación Yucateca (6 uds)",
        price: "19,90 €",
        numericPrice: 19.9,
        description:
          "2 tacos de cochinita, 2 tacos de pastor, 2 tacos de tinga de pollo.",
        recommended: true,
        en: {
          name: "Yucatan Tasting Platter (6 pcs)",
          description: "2 cochinita pibil, 2 tacos al pastor, 2 chicken tinga",
        },
      },
      {
        id: "degustacion_chingona",
        name: "Degustación Chingona (6 uds)",
        price: "20,90 €",
        numericPrice: 20.9,
        description:
          "2 tacos de birria con consomé, 2 tacos pollo crujiente, 2 tacos tempura de gambones.",
        recommended: true,
        en: {
          name: "Chingona Tasting Platter (6 pcs)",
          description:
            "2 beef birria dipping, 2 crispy chicken, 2 king prawn tempura.",
        },
      },
    ],
    extras: [{ name: "Patatas Fritas", price: "2,00 €" }],
  },

  burritos: {
    title: "BURRITOS",
    subtitle: "Bien rellenos. Bien chidos.",
    accentColor: "#1D4E89",
    en: {
      title: "BURRITOS",
      subtitle: "Well stuffed. Well chido.",
      extras: [
        {
          name: "French Fries",
          price: "2,00 €",
        },
      ],
    },
    items: [
      {
        id: "burrito_costilla_jack",
        name: "Burrito Costilla Jack Daniel's",
        price: "13,90 €",
        numericPrice: 13.9,
        description:
          "Costilla de cerdo cocinada a baja temperatura, salsa Jack Daniels, queso Monterrey Jack, cebolla crujiente y arroz.",
        recommended: true,
        en: {
          name: "Jack Daniel's Rib Burrito",
          description:
            "Slow-cooked pork rib, Jack Daniel's sauce, Monterey Jack cheese, crispy onion, and rice.",
        },
      },
      {
        id: "burrito_birria",
        name: "Burrito de Birria",
        price: "14,90 €",
        numericPrice: 14.9,
        description:
          "Birria de res con guacamole, pico de gallo, queso Monterey Jack, crema agria y frijoles.",
        recommended: true,
        en: {
          name: "Beef Birria Burrito",
          description:
            "Slow-braised beef birria, guacamole, pico de gallo, Monterey Jack cheese, sour cream, and beans.",
        },
      },
      {
        id: "burrito_pollo_crujiente",
        name: "Burrito de Pollo Crujiente",
        price: "11,90 €",
        numericPrice: 11.9,
        description:
          "Tiras de pollo crujiente, arroz, mayo de mojo rojo y queso mozzarella.",
        spicy: "medium",
        en: {
          name: "Crispy Chicken Burrito",
          description:
            "Crispy chicken strips, rice, red mojo mayo, and mozzarella cheese.",
        },
      },
      {
        id: "burrito_tinga_deluxe",
        name: "Burrito de Tinga de Pollo Deluxe",
        price: "13,90 €",
        numericPrice: 13.9,
        description:
          "Tinga de pollo con guacamole, pico de gallo, frijoles, queso Monterey Jack y crema agria.",
        en: {
          name: "Burrito Chicken Deluxe",
          description:
            "Chicken tinga with guacamole, pico de gallo, beans, Monterey Jack cheese, and sour cream.",
        },
      },
      {
        id: "burrito_cochinita_pibil",
        name: "Burrito de Cochinita Pibil",
        price: "13,00 €",
        numericPrice: 13.0,
        description:
          "Cochinita pibil, arroz, queso Monterrey Jack, frijoles, guacamole, crema agria y mayo kimchi.",
        en: {
          name: "Cochinita Pibil Burrito",
          description:
            "Yucatan pulled pork, rice, Monterey Jack cheese, beans, guacamole, sour cream, and kimchi mayo.",
        },
      },
      {
        id: "burrito_tinga_pollo_guacamole",
        name: "Burrito de Tinga de Pollo con guacamole",
        price: "10,90 €",
        numericPrice: 10.9,
        description:
          "Pollo con guacamole, arroz, queso Monterey Jack, cebolla verde y mayonesa de chipotle.",
        en: {
          name: "Burrito Chicken with guacamole",
          description:
            "Chicken with guacamole, rice, Monterey Jack cheese, green onion, and chipotle mayo",
        },
      },
      {
        id: "burrito_pulled_pork",
        name: "Burrito de Pulled Pork",
        price: "13,90 €",
        numericPrice: 13.9,
        description:
          "Pulled pork con salsa BBQ-bourbon de chipotle, pico de gallo, queso mozzarella y lechuga romana.",
        en: {
          name: "Pulled Pork Burrito",
          description:
            "Pulled pork with chipotle-bourbon BBQ sauce, pico de gallo, mozzarella cheese, and romaine lettuce.",
        },
      },
      {
        id: "burrito_carnitas_carrillera",
        name: "Burrito de Carnitas de Carrillera",
        price: "13,90 €",
        numericPrice: 13.9,
        description:
          "Arroz, carrillera ibérica, queso Oaxaca y mojo de aguacate.",
        en: {
          name: "Pork Cheek Carnitas Burrito",
          description:
            "Rice, braised Iberian pork cheek, Oaxaca cheese, and avocado mojo.",
        },
      },
      {
        id: "burrito_chili_carme",
        name: "Burrito de Chili de Carne",
        price: "10,90 €",
        numericPrice: 10.9,
        description:
          "Arroz, queso mozzarella, chili de carne y jalapeños frescos.",
        spicy: "medium",
        en: {
          name: "Chili Beef Burrito",
          description:
            "Rice, mozzarella cheese, beef chili, and fresh jalapeños.",
        },
      },
      {
        id: "burrito_vegano",
        name: "Burrito Vegano",
        price: "10,90 €",
        numericPrice: 10.9,
        description:
          "Arroz, soja texturizada, frijoles, aguacate y salsa de chiles adobados.",
        vegetarian: true,
        en: {
          name: "Vegan Burrito",
          description:
            "Rice, textured soy, black beans, fresh avocado, and adobo chili sauce.",
        },
      },
    ],
    extras: [{ name: "Patatas Fritas", price: "2,00 €" }],
  },

  enchiladas: {
    title: "ENCHILADAS",
    subtitle: "3 Tortillas de maíz rellenas y bañadas en salsa",
    accentColor: "#7B2D8B",
    en: {
      title: "ENCHILADAS",
      subtitle: "3 Corn tortillas stuffed and smothered in sauce",
    },
    items: [
      {
        id: "enchilada_tinga_salsa_roja",
        name: "Tinga de pollo en salsa roja",
        price: "12,90 €",
        numericPrice: 12.9,
        description:
          "Tinga de pollo en salsa roja, crema agria, cebolla y cilantro.",
        en: {
          name: "Chicken Tinga in Red Sauce",
          description:
            "Chicken tinga in red sauce, sour cream, onion, and cilantro.",
        },
      },
      {
        id: "enchilada_pastor_verde",
        name: "Pastor en salsa verde",
        price: "13,50 €",
        numericPrice: 13.5,
        description:
          "Pastor en salsa verde, crema agria, cebolla, cilantro y fresco, cebolla y pico de gallo.",
        en: {
          name: "Pastor in Green Sauce",
          description:
            "Al pastor pork in green sauce, sour cream, onion, cilantro, fresh cheese, onion, and pico de gallo.",
        },
      },
    ],
  },

  antojitos: {
    title: "ANTOJITOS",
    subtitle:
      "Entrantes con alma callejera, sabor de barrio y pinta de escándalo",
    accentColor: "#2E4A9E",
    en: {
      title: "SNACKS",
      subtitle: "Street-food appetizers loaded with authentic Mexican flavor",
    },
    items: [
      {
        id: "patacones_tinga",
        name: "Patacones de Tinga de Pollo",
        price: "9,90 €",
        numericPrice: 9.9,
        description:
          "Plátano macho crujiente con tinga de pollo, guacamole y un toque de lima.",
        spicy: "medium",
        recommended: true,
        en: {
          name: "Chicken Tinga Patacones",
          description:
            "Crispy green plantains topped with chicken tinga, guacamole, and a squeeze of fresh lime.",
        },
      },
      {
        id: "patacones_salmon",
        name: "Patacones de Tartar de Salmón",
        price: "13,50 €",
        numericPrice: 13.5,
        description:
          "Plátano macho crujiente con dados de salmón aliñados en sésamo, soja y salsa chipotle.",
        en: {
          name: "Salmon Tartare Patacones",
          description:
            "Crispy green plantains topped with diced salmon dressed in sesame, soy, and chipotle sauce.",
        },
      },
      {
        id: "tiras_pollo_crujiente",
        name: "Tiras de Pollo Crujiente",
        price: "10,90 €",
        numericPrice: 10.9,
        description:
          "Con panko y mezcla secreta de especias, mayo chipotle y crema agria.",
        en: {
          name: "Crispy Chicken Strips",
          description:
            "Panko-crusted chicken strips with secret spice blend, chipotle mayo, and sour cream.",
        },
      },
      {
        id: "tequenos_tamarindo",
        name: "Tequeños con Salsa Tamarindo",
        price: "7,90 €",
        numericPrice: 7.9,
        description:
          "(4 unidades) Crujientes por fuera, con queso fundido por dentro y salsa de tamarindo picante.",
        spicy: "medium",
        recommended: true,
        en: {
          name: "Cheese Tequeños with Tamarind Dip",
          description:
            "(4 pieces) Golden cheese spears with spicy tamarind dip.",
        },
      },
      {
        id: "patatas_brava_chipotle",
        name: "Patatas con Brava de Chipotle",
        price: "7,50 €",
        numericPrice: 7.5,
        description:
          "Patatas crujientes acompañadas con nuestra salsa brava casera de chipotle.",
        vegetarian: true,
        spicy: "low",
        en: {
          name: "Chipotle Brava Potatoes",
          description:
            "Crispy potato cubes served with homemade spicy chipotle brava sauce.",
        },
      },
      {
        id: "bocaditos_chili",
        name: "Bocaditos de Chili y Queso",
        price: "8,90 €",
        numericPrice: 8.9,
        description:
          "Bocaditos crujientes de chili y queso con salsa chiles BBQ de chipotle.",
        spicy: "low",
        en: {
          name: "Chili & Cheese Bites",
          description:
            "Crispy chili and cheese bites with chipotle BBQ chili sauce.",
        },
      },
    ],
  },

  quesadillas: {
    title: "QUESADILLAS",
    subtitle: "Tortillas y queso fundido",
    accentColor: "#D99026",
    en: {
      title: "QUESADILLAS",
      subtitle: "Golden wheat tortillas loaded with melted cheese",
    },
    items: [
      {
        id: "quesadilla_cochinita",
        name: "De Cochinita Pibil",
        price: "10,90 €",
        numericPrice: 10.9,
        description:
          "Tortillas de trigo rellenas de queso fundido, cochinita pibil, pico de gallo y crema agria.",
        en: {
          name: "Cochinita Pork Quesadilla",
          description:
            "Flour tortillas filled with melted cheese, cochinita pork, pico de gallo, and sour cream.",
        },
      },
      {
        id: "quesadilla_gambas_ajillo",
        name: "De Gambas al Ajillo",
        price: "10,50 €",
        numericPrice: 10.5,
        description:
          "Tortillas de trigo rellenas con gambas al ajillo, queso fundido, pico de gallo y crema agria.",
        en: {
          name: "Garlic Prawn Quesadilla",
          description:
            "Flour tortillas stuffed with garlic prawns, melted cheese, pico de gallo, and sour cream.",
        },
      },
      {
        id: "quesadilla_tinga_pollo",
        name: "De Tinga de Pollo",
        price: "10,90 €",
        numericPrice: 10.9,
        description:
          "Tortillas de trigo rellenas con queso Monterrey Jack, tinga de pollo, pico de gallo y crema agria.",
        spicy: "low",
        en: {
          name: "Chicken Tinga Quesadilla",
          description:
            "Flour tortillas stuffed with Monterey Jack cheese, chicken tinga, pico de gallo, and sour cream.",
        },
      },
      {
        id: "quesadilla_vegetariana",
        name: "Vegetariana",
        price: "10,50 €",
        numericPrice: 10.5,
        description:
          "Tortillas de trigo rellenas de queso Monterey Jack, tinga de soja texturizada, pico de gallo y crema agria.",
        vegetarian: true,
        en: {
          name: "Vegetarian Quesadilla",
          description:
            "Flour tortillas stuffed with Monterey Jack cheese, textured soy tinga, pico de gallo, and sour cream.",
        },
      },
      {
        id: "quesadilla_chili_carne",
        name: "De Chili de Carne",
        price: "10,90 €",
        numericPrice: 10.9,
        description:
          "Tortillas de trigo rellenas con queso Monterrey Jack, chili de carne, pico de gallo y crema agria.",
        spicy: "medium",
        en: {
          name: "Beef Chili Quesadilla",
          description:
            "Flour tortillas filled with Monterey Jack cheese, beef chili, pico de gallo, and sour cream.",
        },
      },
      {
        id: "quesadilla_chistorra",
        name: "De Chistorra",
        price: "9,90 €",
        numericPrice: 9.9,
        description:
          "Tortillas de trigo rellenas de chistorra y queso Monterrey Jack, con pico de gallo y crema agria.",
        en: {
          name: "Chistorra Quesadilla",
          description:
            "Flour tortillas filled with chistorra sausage and Monterey Jack cheese, with pico de gallo and sour cream.",
        },
      },
      {
        id: "quesadilla_tiras_pollo",
        name: "De Tiras de Pollo",
        price: "10,90 €",
        numericPrice: 10.9,
        description:
          "Tortillas de trigo rellenas de tiras de pollo crujientes y queso fundido, con mayonesa de chipotle.",
        en: {
          name: "Crispy Chicken Quesadilla",
          description:
            "Wheat tortillas filled with crispy chicken strips and melted cheese, with chipotle mayo.",
        },
      },
      {
        id: "quesadilla_birria",
        name: "De Birria",
        price: "12,90 €",
        numericPrice: 12.9,
        description:
          "Tortillas de trigo rellenas de queso Monterey Jack, pico de gallo y crema agria.",
        en: {
          name: "Birria Quesadilla",
          description:
            "Wheat tortillas filled with Monterey Jack cheese, pico de gallo, and sour cream.",
        },
      },
    ],
  },

  pambazos: {
    title: "PAMBAZOS BRIOCHE",
    subtitle:
      "Bocadillos al estilo mexicano en pan brioche redondo y suave, con rellenos jugosos.",
    accentColor: "#C4432B",
    en: {
      title: "BRIOCHE PAMBAZOS",
      subtitle:
        "Mexican-style sandwiches in a soft round brioche bun, with juicy fillings.",
    },
    items: [
      {
        id: "pambazo_brioche_panceta",
        name: "Brioche de Panceta Glaseada",
        price: "10,90 €",
        numericPrice: 10.9,
        description:
          "Panceta glaseada con miso y mirin, cebolla, cebolla encurtida y neta agria.",
        en: {
          name: "Glazed Pork Belly Brioche",
          description:
            "Miso and mirin glazed pork belly, onion, pickled onion and sour cream.",
        },
      },
      {
        id: "pambazo_brioche_cochinita_pibil",
        name: "Brioche de Cochinita Pibil",
        price: "11,90 €",
        numericPrice: 11.9,
        description:
          "Tinga chipotle pibil, pico de gallo, cebolla, cebolla encurtida y neta agria.",
        en: {
          name: "Cochinita Pibil Brioche",
          description:
            "Chipotle pibil tinga, pico de gallo, onion, pickled onion and sour cream.",
        },
      },
      {
        id: "pambazo_brioche_pulled_pork",
        name: "Brioche Pulled Pork",
        price: "12,90 €",
        numericPrice: 12.9,
        description:
          "Pulled pork, coleslaw, pepinillo, cebolla encurtida y mayo chipotlee.",
        en: {
          name: "Pulled Pork Brioche",
          description:
            "Pulled pork, coleslaw, pickle, pickled onion, and chipotle mayo.",
        },
      },
    ],
  },

  tostadas: {
    title: "TOSTADAS",
    subtitle: "3 Tostadas de maíz crujientes",
    accentColor: "#D97706",
    en: {
      title: "TOSTADAS",
      subtitle: "3 Crispy corn tostadas",
    },
    items: [
      {
        id: "tostada_cochinita_pibil",
        name: "Cochinita Pibil",
        price: "9,50 €",
        numericPrice: 9.5,
        description:
          "Cochinita pibil, guacamole, cebolla, cebolla encurtida y crema agria.",
        en: {
          name: "Cochinita Pibil Tostadas",
          description:
            "Cochinita pibil, guacamole, onion, pickled onion, and sour cream.",
        },
      },
      {
        id: "tostada_tinga_pollo",
        name: "Tinga de Pollo",
        price: "8,90 €",
        numericPrice: 8.9,
        description:
          "Crema de frijoles, tinga de pollo, pico de gallo y mayo de jalapeño.",
        en: {
          name: "Chicken Tinga Tostadas",
          description:
            "Bean cream, chicken tinga, pico de gallo, and jalapeño mayo.",
        },
      },
      {
        id: "tostada_costilla_jack",
        name: "Costilla Jack Daniels",
        price: "10,50 €",
        numericPrice: 10.5,
        description: "Costilla Jack Daniels y cebolla frita.",
        en: {
          name: "Jack Daniels Rib Tostadas",
          description: "Jack Daniels pork ribs and crispy fried onion.",
        },
      },
    ],
  },

  desnudos: {
    title: "DESNUDOS",
    subtitle: "Nuestros sabrosos Bowls. +2 Tortillas de 20 cm por 1,80 €",
    accentColor: "#E36F1E",
    en: {
      title: "NAKED BOWLS",
      subtitle:
        "Our flavorful Burrito Bowls. +2 Wheat Tortillas (20cm) for +€1.80!",
      extras: [
        {
          name: "+2 Wheat Tortillas (20cm) to roll your bowl",
          price: "1,80 €",
        },
      ],
    },
    items: [
      {
        id: "desnudo_salmon",
        name: "Salmón Tartar",
        price: "14,00 €",
        numericPrice: 14.0,
        description:
          "Bowl de Salmón marinado, wakame, crema agria, frijoles, cebolla crujiente y arroz.",
        en: {
          name: "Salmon Tartar Bowl",
          description:
            "Marinated salmon, wakame seaweed, sour cream, black beans, crispy onion, and rice.",
        },
      },
      {
        id: "desnudo_pulled",
        name: "Desnudo Pulled",
        price: "13,50 €",
        numericPrice: 13.5,
        description:
          "Bowl de Pulled pork BBQ con queso Monterey Jack, salsa bourbon, crema agria, cebolla crujiente, arroz y pico de gallo.",
        en: {
          name: "Pulled Bowl",
          description:
            "BBQ pulled pork with Monterey Jack, bourbon sauce, sour cream, crispy onion, rice, and pico de gallo.",
        },
      },
      {
        id: "desnudo_cochinita",
        name: "Desnudo de Cochinita",
        price: "13,50 €",
        numericPrice: 13.5,
        description:
          "Bowl de Cochinita pibil, arroz, queso Monterrey Jack, kimchi, guacamole, crema agria y arroz.",
        en: {
          name: "Cochinita Pork Bowl",
          description:
            "Cochinita pibil pork, rice, Monterey Jack cheese, kimchi, guacamole, and sour cream.",
        },
      },
      {
        id: "desnudo_costilla",
        name: "Desnudo de Costilla",
        price: "13,50 €",
        numericPrice: 13.5,
        description:
          "Bowl de Carne de Costilla de cerdo deshuesada, salsa Jack Daniels, arroz, queso Monterey Jack, frijoles, guacamole, cebolla crujiente y pico de gallo.",
        en: {
          name: "Pork Rib Bowl",
          description:
            "Boneless pork rib meat, Jack Daniel's sauce, rice, Monterey Jack cheese, beans, guacamole, crispy onion, and pico de gallo.",
        },
      },
      {
        id: "desnudo_tinga_pollo",
        name: "Desnudo de Tinga de Pollo",
        price: "11,90 €",
        numericPrice: 11.9,
        description:
          "Bowl de Tinga de pollo, cremosa de chipotle, guacamole, frijoles, arroz, cebolla crujiente, pico de gallo y crema agria.",
        spicy: "medium",
        en: {
          name: "Chicken Tinga Bowl",
          description:
            "Shredded chicken tinga, chipotle cream, guacamole, beans, rice, crispy onion, pico de gallo, and sour cream.",
        },
      },
      {
        id: "desnudo_pollo_crujiente",
        name: "Desnudo de Pollo Crujiente",
        price: "11,90 €",
        numericPrice: 11.9,
        description:
          "Bowl de Tiras de pollo crujiente, queso mozzarella, guacamole, pico de gallo, mayo picón, frijoles y arroz.",
        en: {
          name: "Crispy Chicken Bowl",
          description:
            "Crispy chicken strips, mozzarella cheese, guacamole, pico de gallo, spicy mayo, black beans, and rice.",
        },
      },
      {
        id: "desnudo_carnitas",
        name: "Desnudo de Carnitas",
        price: "13,00 €",
        numericPrice: 13.0,
        description:
          "Plato de carrillera de cerdo ibérico, arroz, guacamole, frijoles, pico de gallo, queso Oaxaca y crema agria.",
        en: {
          name: "Carnitas Bowl",
          description:
            "Bowl of Iberian pork cheek, rice,guacamole, beans, pico de gallo, Oaxaca cheese and sour cream.",
        },
      },
    ],
    extras: [
      { name: "+2 Tortillas de 20cm (Para transformarlo)", price: "1,80 €" },
    ],
  },

  peques: {
    title: "PEQUES",
    subtitle: "Platos pensados para los más pequeños de la casa",
    accentColor: "#C4432B",
    en: {
      title: "KIDS MENU",
      subtitle: "Tasty meals designed specially for the little ones",
    },
    items: [
      {
        id: "quesapizza",
        name: "Quesapizza",
        price: "7,60 €",
        numericPrice: 7.6,
        description: "Tortilla de trigo con tomate, jamón y queso fundido.",
        en: {
          name: "Quesapizza",
          description:
            "Wheat tortilla filled with tomato sauce, ham, and melted cheese.",
        },
      },
      {
        id: "nuggets_papas",
        name: "Nuggets de Pollo con Papas Fritas",
        price: "7,60 €",
        numericPrice: 7.6,
        description:
          "Crujientes nuggets de pollo acompañados de patatas fritas doradas.",
        en: {
          name: "Chicken Nuggets with French Fries",
          description:
            "Crispy chicken nuggets served with golden French fries.",
        },
      },
    ],
  },

  postres: {
    title: "POSTRES",
    subtitle: "Siempre hay hueco para el postre",
    accentColor: "#A04318",
    en: {
      title: "DESSERTS",
      subtitle: "There's always room for dessert",
    },
    items: [
      {
        id: "tarta_queso_cajeta",
        name: "Tarta de Queso con Cajeta",
        price: "6,50 €",
        numericPrice: 6.5,
        description:
          "Cremosa tarta de queso con cajeta casera derretida por encima.",
        recommended: true,
        en: {
          name: "Cheesecake",
          description:
            "Creamy cheesecake drizzled with melted warm Mexican cajeta caramel.",
        },
      },
      {
        id: "tres_leches",
        name: "Tres Leches",
        price: "6,00 €",
        numericPrice: 6.0,
        description:
          "Bizcocho empapado en leche infusionada con canela, limón y naranja, coronado con dulce de leche y crumble de galleta.",
        en: {
          name: "Tres Leches Cake",
          description:
            "Sponge cake soaked in spiced milk (cinnamon, citrus), topped with dulce de leche and cookie crumble.",
        },
      },
      {
        id: "tarta_nutella",
        name: "Tarta de Nutella",
        price: "6,50 €",
        numericPrice: 6.5,
        description: "Crema de cacao pura sobre una base dulce",
        en: {
          name: "Nutella Cake",
          description: "Pure cocoa cream on a sweet base.",
        },
      },
      {
        id: "cheesecake_pistacho",
        name: "Cheesecake de Pistacho",
        price: "7,00 €",
        numericPrice: 7.0,
        description:
          "Cremoso, horneado al punto y con auténtica pasta de pistacho.",
        recommended: true,
        en: {
          name: "Pistachio Cheesecake",
          description:
            "Creamy baked cheesecake crafted with authentic pistachio paste.",
        },
      },
      {
        id: "copa_kindermania",
        name: "Copa KinderMania",
        price: "6,50 €",
        numericPrice: 6.5,
        description:
          "Doble bola de helado de Kinder, nata montada, cubitos de brownie, Nutella y un barquillo.",
        recommended: true,
        en: {
          name: "KinderMania Ice Cream",
          description:
            "Double scoop Kinder ice cream, whipped cream, brownie bites, Nutella, and waffle wafer.",
        },
      },
      {
        id: "polvito_oreoguayo",
        name: "Polvito Oreoguayo",
        price: "6,00 €",
        numericPrice: 6.0,
        description:
          "Galleta Oreo, merengue seco crujiente, nata y un chorro indecente de dulce de leche.",
        en: {
          name: "Oreoguayo Mousse",
          description:
            "Crushed Oreo cookies, crunchy meringue, whipped cream, and generous dulce de leche.",
        },
      },
      {
        id: "milkshake_oreo",
        name: "Milkshake de Oreo",
        price: "6,00 €",
        numericPrice: 6.0,
        description:
          "Batido de helado de vainilla, oreo y galleta con decoración de nata, muchos dulces de esto.",
        en: {
          name: "Oreo Milkshake",
          description:
            "Vanilla ice cream shake, Oreo cookies and biscuit, topped with cream and candy.",
        },
      },
    ],
  },

  // BEVERAGES
  cervezas: {
    title: "CERVEZAS FRÍAS",
    subtitle: "De Barril y en Botella",
    accentColor: "#D97706",
    en: {
      title: "COLD BEERS",
      subtitle: "Draft and Bottled",
    },
    items: [
      {
        id: "dorada_cana_jarra",
        name: "Dorada - Caña / Jarra",
        price: "2,50 / 3,50 €",
        numericPrice: 2.5,
        en: { name: "Dorada Draft - Small / Pint" },
      },
      {
        id: "corona_cana_jarra",
        name: "Corona - 33cl / Jarra 50cl",
        price: "3,20 / 4,20 €",
        numericPrice: 3.2,
        en: { name: "Corona Draft - 33cl / Pint 50cl" },
      },
      {
        id: "pacifico",
        name: "Pacífico - Mexicana",
        price: "4,90 €",
        numericPrice: 4.9,
        en: { name: "Pacífico Mexican Beer" },
      },
      {
        id: "modelo_especial",
        name: "Modelo Especial - Mexicana",
        price: "4,90 €",
        numericPrice: 4.9,
        en: { name: "Modelo Especial Mexican Beer" },
      },
      {
        id: "modelo_negra",
        name: "Modelo Negra - Mexicana",
        price: "4,50 €",
        numericPrice: 4.5,
        en: { name: "Modelo Negra Dark Beer" },
      },
      {
        id: "dorada_especial_33",
        name: "Dorada Especial 33cl",
        price: "3,30 €",
        numericPrice: 3.3,
        en: { name: "Dorada Especial Bottle (33cl)" },
      },
      {
        id: "desperados",
        name: "Desperados",
        price: "3,80 €",
        numericPrice: 3.8,
        en: { name: "Desperados Beer" },
      },
    ],
  },

  margaritas: {
    title: "MARGARITAS",
    subtitle:
      "Clásicas, de sabores o Frozen. Elige la tuya. ¿Compartimos una Margarita?",
    accentColor: "#059669",
    en: {
      title: "MARGARITAS",
      subtitle:
        "Classic, flavored or Frozen. Choose yours. Shall we share a Margarita?",
    },
    items: [
      {
        id: "margarita_clasica",
        name: "Margarita Clásica",
        price: "7,80 €",
        numericPrice: 7.8,
        description:
          "Tequila, triple seco y zumo de lima servido en copa encostrada de sal.",
        en: {
          name: "Classic Margarita",
          description:
            "Tequila, triple sec, and lime juice served in a salt-rimmed glass.",
        },
      },
      {
        id: "margarita_clasica_frozen",
        name: "Margarita Clásica Frozen",
        price: "7,80 €",
        numericPrice: 7.8,
        description: "Margarita clásica en versión helada.",
        en: {
          name: "Classic Frozen Margarita",
          description: "Classic margarita blended with ice.",
        },
      },
      {
        id: "margarita_sabores",
        name: "Margarita de Sabores",
        price: "8,00 €",
        numericPrice: 8.0,
        description: "Fresa, fruta de la pasión, coco, tamarindo o sandía.",
        en: {
          name: "Flavored Margarita",
          description:
            "Strawberry, passion fruit, coconut, tamarind, or watermelon.",
        },
      },
      {
        id: "margarita_sabores_frozen",
        name: "Margarita de Sabores Frozen",
        price: "8,00 €",
        numericPrice: 8.0,
        description:
          "Fresa, fruta de la pasión, coco, tamarindo o sandía. Frozen.",
        recommended: true,
        en: {
          name: "Frozen Flavored Margarita",
          description:
            "Strawberry, passion fruit, coconut, tamarind, or watermelon. Frozen.",
        },
      },
      {
        id: "jarra_margarita_half",
        name: "Jarra Clásica o Frozen Clásico (1/2 L)",
        price: "13,00 €",
        numericPrice: 13.0,
        description: "Margarita clásica o frozen en jarra de 1/2 litro.",
        en: {
          name: "Classic or Frozen Classic Pitcher (1/2 L)",
          description: "Classic or frozen margarita in a half-liter pitcher.",
        },
      },
      {
        id: "jarra_margarita_1l",
        name: "Jarra Clásica o Frozen Clásico (1 L)",
        price: "18,90 €",
        numericPrice: 18.9,
        description: "Margarita clásica o frozen en jarra de 1 litro.",
        en: {
          name: "Classic or Frozen Classic Pitcher (1 L)",
          description: "Classic or frozen margarita in a one-liter pitcher.",
        },
      },
      {
        id: "jarra_sabores_half",
        name: "Jarra Sabores o Frozen de Sabores (1/2 L)",
        price: "13,90 €",
        numericPrice: 13.9,
        description:
          "Margarita de sabores o frozen de sabores en jarra de 1/2 litro.",
        en: {
          name: "Flavored or Frozen Flavored Pitcher (1/2 L)",
          description:
            "Flavored or frozen flavored margarita in a half-liter pitcher.",
        },
      },
      {
        id: "jarra_sabores_1l",
        name: "Jarra Sabores o Frozen de Sabores (1 L)",
        price: "18,90 €",
        numericPrice: 18.9,
        description:
          "Margarita de sabores o frozen de sabores en jarra de 1 litro.",
        en: {
          name: "Flavored or Frozen Flavored Pitcher (1 L)",
          description:
            "Flavored or frozen flavored margarita in a one-liter pitcher.",
        },
      },
    ],
  },

  cocteles: {
    title: "CÓCTELES",
    subtitle: "Tropical, cítrico o con un toque picante",
    accentColor: "#DB2777",
    en: {
      title: "COCKTAILS",
      subtitle: "Tropical, citrus or with a spicy kick",
    },
    items: [
      {
        id: "la_bamba",
        name: "La Bamba",
        price: "8,00 €",
        numericPrice: 8.0,
        description:
          "Lima, azúcar, vodka de manzana, zumo de naranja, Malibú y maracuyá.",
        en: {
          name: "La Bamba",
          description:
            "Lime, sugar, apple vodka, orange juice, Malibu rum, and passion fruit.",
        },
      },
      {
        id: "mezcalito_fresa",
        name: "Mezcalito de Fresa",
        price: "9,50 €",
        numericPrice: 9.5,
        description: "Mezcal, fresa y lima.",
        recommended: true,
        en: {
          name: "Strawberry Mezcalito",
          description: "Mezcal, fresh strawberries, and lime.",
        },
      },
      {
        id: "mezcalito_tamarindo",
        name: "Tamarindo Picante",
        price: "9,50 €",
        numericPrice: 9.5,
        description: "Mezcal, tamarindo, chile en polvo, limón y menta.",
        spicy: "low",
        en: {
          name: "Spicy Tamarind",
          description: "Mezcal, tamarind, chili powder, lemon, and fresh mint.",
        },
      },
      {
        id: "mezcal_margarita",
        name: "Mezcal Margarita",
        price: "9,50 €",
        numericPrice: 9.5,
        description:
          "Mezcal, triple seco, lima y azúcar líquida. Clásico con sal o versión frutal (mango o maracuyá) con borde de Tajín.",
        en: {
          name: "Mezcal Margarita",
          description:
            "Mezcal, triple sec, lime, liquid sugar. Classic salted rim or fruity version (mango/passion fruit) with Tajin rim.",
        },
      },
      {
        id: "pina_colada_frozen",
        name: "Piña Colada Frozen",
        price: "8,50 €",
        numericPrice: 8.5,
        description: "Ron blanco Barceló, piña natural, crema de coco.",
        en: {
          name: "Frozen Piña Colada",
          description:
            "Barceló white rum, natural pineapple juice, coconut cream.",
        },
      },
      {
        id: "daiquiri_fresa_frozen",
        name: "Daiquiri de Fresa Frozen",
        price: "8,00 €",
        numericPrice: 8.0,
        description: "Ron blanco, fresa, lima y azúcar, todo bien frappé.",
        en: {
          name: "Frozen Strawberry Daiquiri",
          description: "White rum, strawberries, lime juice, blended ice.",
        },
      },
      {
        id: "mango_picon",
        name: "Mango Picón",
        price: "8,00 €",
        numericPrice: 8.0,
        description:
          "Tequila macerado en 6 chiles, mango, lima, azúcar y Cointreau con borde de Tajín picante.",
        spicy: "medium",
        recommended: true,
        en: {
          name: "Spicy Mango Picón",
          description:
            "Tequila infused with 6 chilies, mango puree, lime, Cointreau, served with a fiery Tajin rim.",
        },
      },
      {
        id: "pasion_chida",
        name: "Pasión Chida",
        price: "8,50 €",
        numericPrice: 8.5,
        description:
          "Tequila blanco, maracuyá, piña, lima y soda. Fresco y frutal.",
        en: {
          name: "Pasión Chida",
          description:
            "Silver tequila, passion fruit, pineapple, lime, and soda. Fresh and fruity.",
        },
      },
      {
        id: "aperol_spritz",
        name: "Aperol Spritz",
        price: "7,00 €",
        numericPrice: 7.0,
        description: "Aperol, prosecco y soda.",
        en: {
          name: "Aperol Spritz",
          description: "Aperol, prosecco, and soda.",
        },
      },
      {
        id: "mojito_clasico",
        name: "Mojito Clásico",
        price: "7,50 €",
        numericPrice: 7.5,
        description:
          "Lima, hojas de menta, azúcar moreno, ron blanco y Sprite.",
        en: {
          name: "Classic Mojito",
          description:
            "Lime, fresh mint leaves, brown sugar, white rum, topped with Sprite.",
        },
      },
      {
        id: "mojito_sabores",
        name: "Mojito de Sabores",
        price: "8,00 €",
        numericPrice: 8.0,
        description:
          "Elige entre fresa, fruta de la pasión, coco, tamarindo o sandía.",
        en: {
          name: "Flavored Mojito",
          description:
            "Choice of flavors: Strawberry, passion fruit, coconut, tamarind, or watermelon.",
        },
      },
    ],
  },

  limonadas: {
    title: "LIMONADAS",
    subtitle: "Sin Alcohol",
    accentColor: "#CA8A04",
    en: {
      title: "LEMONADES",
      subtitle: "Non-Alcoholic",
    },
    items: [
      {
        id: "lima_vainilla",
        name: "Lima y Vainilla",
        price: "5,20 €",
        numericPrice: 5.2,
        description: "Zumo de limón, lima, vainilla y soda.",
        en: {
          name: "Lime & Vanilla Lemonade",
          description: "Fresh lemon juice, lime, vanilla syrup, and soda.",
        },
      },
      {
        id: "passion_lemonade",
        name: "Limonada de Fruta de la Pasión",
        price: "5,20 €",
        numericPrice: 5.2,
        description: "Limón, azúcar líquida, fruta de la pasión y soda.",
        en: {
          name: "Passion Fruit Lemonade",
          description:
            "Fresh lemon, passion fruit puree, liquid sugar, and soda.",
        },
      },
      {
        id: "berries_lemonade",
        name: "Frutos del Bosque",
        price: "5,20 €",
        numericPrice: 5.2,
        description: "Limón, lima, naranja, frutos del bosque y soda.",
        recommended: true,
        en: {
          name: "Forest Berries Lemonade",
          description: "Lemon, lime, orange, forest berries puree, and soda.",
        },
      },
      {
        id: "coco_lemonade",
        name: "Coco Lemonade",
        price: "5,20 €",
        numericPrice: 5.2,
        description: "Coco, lima, sirope de vainilla y soda.",
        en: {
          name: "Coco Lemonade",
          description: "Coconut cream, lime juice, vanilla syrup, and soda.",
        },
      },
      {
        id: "sandia_lemonade",
        name: "Sandía",
        price: "5,20 €",
        numericPrice: 5.2,
        description: "Sandía, limón, miel y soda.",
        en: {
          name: "Watermelon Lemonade",
          description: "Watermelon, fresh lemon juice, honey, and soda.",
        },
      },
    ],
  },

  tequilas: {
    title: "TEQUILAS Y MEZCALES",
    subtitle: "Para brindar como en Jalisco o perderse como en Oaxaca",
    accentColor: "#B45309",
    en: {
      title: "TEQUILA & MEZCAL",
      subtitle: "Toast like in Jalisco or get lost like in Oaxaca",
    },
    items: [
      {
        id: "mezcal_gusano_rojo",
        name: "Mezcal Gusano Rojo",
        price: "6,00 €",
        numericPrice: 6.0,
      },
      {
        id: "tequila_don_julio_reposado",
        name: "Tequila Don Julio Reposado",
        price: "7,00 €",
        numericPrice: 7.0,
      },
      {
        id: "tequila_don_julio_anejo",
        name: "Tequila Don Julio Añejo",
        price: "8,00 €",
        numericPrice: 8.0,
      },
      {
        id: "tequila_herradura",
        name: "Tequila Herradura",
        price: "7,20 €",
        numericPrice: 7.2,
      },
      {
        id: "tequila_herradura_reposado",
        name: "Tequila Herradura Reposado",
        price: "8,00 €",
        numericPrice: 8.0,
      },
      {
        id: "tequila_buen_amigo",
        name: "Tequila Buen Amigo",
        price: "3,50 €",
        numericPrice: 3.5,
      },
    ],
  },

  micheladas: {
    title: "MICHELADAS & CHELADA",
    subtitle: "La auténtica curada mexicana",
    accentColor: "#DC2626",
    en: {
      title: "MICHELADAS & CHELADA",
      subtitle: "Authentic Mexican spiced beer cocktail",
    },
    items: [
      {
        id: "michelada_clasica",
        name: "Michelada",
        price: "5,50 €",
        numericPrice: 5.5,
        description:
          "Cerveza muy fría, jugo de lima, jugo Maggi, Perrins y Valentina.",
        en: {
          name: "Classic Michelada",
          description:
            "Chilled beer, fresh lime juice, Maggi sauce, Worcestershire, and Valentina hot sauce.",
        },
      },
      {
        id: "michelada_chingona",
        name: "Michelada Chingona - Con Clamato",
        price: "Desde 7,00 €",
        numericPrice: 7.0,
        description:
          "Cerveza muy fría, jugo de lima, Maggi, Perrins, Valentina y Clamato. Pacífico 7,00€ · Corona 6,00€ · Modelo Negra 7,00€ · Modelo Especial 7,00€",
        options: [
          { name: "Con Pacífico", price: "7,00 €" },
          { name: "Con Corona", price: "6,00 €" },
          { name: "Con Modelo Negra", price: "7,00 €" },
          { name: "Con Modelo Especial", price: "7,00 €" },
        ],
        recommended: true,
        en: {
          name: "Chingona Clamato Michelada",
          description:
            "Ice-cold beer, lime juice, Maggi, Worcestershire, Valentina hot sauce, and Clamato tomato juice.",
          options: [
            { name: "With Pacífico", price: "7,00 €" },
            { name: "With Corona", price: "6,00 €" },
            { name: "With Modelo Negra", price: "7,00 €" },
            { name: "With Modelo Especial", price: "7,00 €" },
          ],
        },
      },
      {
        id: "chelada",
        name: "Chelada",
        price: "4,90 €",
        numericPrice: 4.9,
        description: "Cerveza fría con limón y sal.",
        en: {
          name: "Lime Chelada",
          description: "Ice-cold beer served with fresh lime and salt.",
        },
      },
    ],
  },

  refrescos: {
    title: "REFRESCOS Y SANGRÍAS",
    subtitle: "Bebidas refrescantes y jarras para la mesa",
    accentColor: "#2563EB",
    en: {
      title: "SOFT DRINKS & SANGRIA",
      subtitle: "Refreshing drinks and sharing pitchers for your table",
    },
    items: [
      {
        id: "agua_gas",
        name: "Agua con / sin gas",
        price: "2,10 €",
        numericPrice: 2.1,
        en: { name: "Still / Sparkling Mineral Water" },
      },
      {
        id: "pepsi",
        name: "Pepsi",
        price: "2,50 €",
        numericPrice: 2.5,
        en: { name: "Pepsi" },
      },
      {
        id: "pepsi_zero",
        name: "Pepsi Zero",
        price: "2,50 €",
        numericPrice: 2.5,
        en: { name: "Pepsi Zero" },
      },
      {
        id: "schweppes_limon",
        name: "Schweppes Limón",
        price: "2,50 €",
        numericPrice: 2.5,
        en: { name: "Schweppes Lemon" },
      },
      {
        id: "schweppes_naranja",
        name: "Schweppes Naranja",
        price: "2,50 €",
        numericPrice: 2.5,
        en: { name: "Schweppes Orange" },
      },
      {
        id: "seven_up",
        name: "Seven Up",
        price: "2,50 €",
        numericPrice: 2.5,
        en: { name: "Seven Up" },
      },
      {
        id: "tonica",
        name: "Tónica",
        price: "2,90 €",
        numericPrice: 2.9,
        en: { name: "Tonic Water" },
      },
      {
        id: "lipton_melocoton",
        name: "Lipton Melocotón",
        price: "3,50 €",
        numericPrice: 3.5,
        en: { name: "Lipton Peach Ice Tea" },
      },
      {
        id: "lipton_limon",
        name: "Lipton Limón",
        price: "3,50 €",
        numericPrice: 3.5,
        en: { name: "Lipton Lemon Ice Tea" },
      },
      {
        id: "copa_tinto_verano",
        name: "Copa de Tinto de Verano",
        price: "3,50 €",
        numericPrice: 3.5,
        en: { name: "Glass of Tinto de Verano (Spanish Wine Spritzer)" },
      },
    ],
  },

  sangria: {
    title: "SANGRÍA",
    subtitle: "Jarra de 1 Litro",
    accentColor: "#7C2D12",
    en: {
      title: "SANGRIA",
      subtitle: "1 Liter Pitcher",
    },
    items: [
      {
        id: "sangria_jarra",
        name: "Sangría - Jarra de 1 L",
        price: "16,00 €",
        numericPrice: 16.0,
        recommended: true,
        en: { name: "Sangria Pitcher (1 Liter)" },
      },
    ],
  },
};

// HELPER FUNCTIONS FOR LOCALIZATION
export function getCategoryName(category, lang) {
  if (lang === "en" && category.en?.name) return category.en.name;
  return category.name;
}

export function getCategoryBadge(category, lang) {
  if (lang === "en" && category.en?.badge) return category.en.badge;
  return category.badge;
}

export function getSectionTitle(section, lang) {
  if (lang === "en" && section.en?.title) return section.en.title;
  return section.title;
}

export function getSectionSubtitle(section, lang) {
  if (lang === "en" && section.en?.subtitle) return section.en.subtitle;
  return section.subtitle;
}

export function getItemName(item, lang) {
  if (lang === "en" && item.en?.name) return item.en.name;
  return item.name;
}

export function getItemDescription(item, lang) {
  if (lang === "en" && item.en?.description) return item.en.description;
  return item.description;
}

export function getSectionExtras(section, lang) {
  if (lang === "en" && section.en?.extras) return section.en.extras;
  return section.extras;
}

export function getItemOptions(item, lang) {
  if (lang === "en" && item.en?.options) return item.en.options;
  return item.options;
}

export function findMenuItemById(itemId) {
  const allCategories = [...FOOD_CATEGORIES, ...DRINK_CATEGORIES];
  for (const cat of allCategories) {
    const categoryData = MENU_ITEMS[cat.id];
    if (categoryData && categoryData.items) {
      const found = categoryData.items.find((i) => i.id === itemId);
      if (found) {
        return {
          ...found,
          sectionColor: cat.color || "var(--chido-red)",
        };
      }
    }
  }
  return null;
}
