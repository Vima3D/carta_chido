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
    id: "burritos",
    name: "Burritos",
    icon: "🌯",
    badge: "Generosos",
    color: "#1D4E89",
    en: { name: "Burritos", badge: "Generous" },
  },
  {
    id: "tacos",
    name: "Tacos",
    icon: "🌮",
    badge: "4 Unidades",
    color: "#BE3C1B",
    en: { name: "Tacos", badge: "4 Pieces" },
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
    id: "antojitos",
    name: "Antojitos",
    icon: "🫔",
    badge: "Para Compartir",
    color: "#2E4A9E",
    en: { name: "Street Snacks", badge: "To Share" },
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
    badge: "Chingones",
    color: "#DB2777",
    en: { name: "Cocktails", badge: "Awesome" },
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
];

export const MENU_ITEMS = {
  nachos: {
    title: "NACHOS",
    subtitle: "Totopos de maíz fritos por nosotros diariamente",
    accentColor: "#D45136",
    en: {
      title: "NACHOS",
      subtitle: "Corn tortilla chips freshly fried in-house daily",
      extras: [
        { name: "Melted cheese gratin", price: "3,00 €" },
        { name: "Cheddar cheese sauce", price: "3,00 €" },
        { name: "Pulled pork (Cochinita)", price: "4,50 €" },
        { name: "Shredded chicken tinga", price: "4,50 €" },
        { name: "Pork rib meat", price: "4,50 €" },
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
        id: "naxos",
        name: "Naxos",
        price: "12,50 €",
        numericPrice: 12.5,
        description:
          "Nachos con queso fundido, salsa Jack Daniels, salsa de queso cheddar, cebolla crujiente y sésamo blanco.",
        vegetarian: true,
        en: {
          name: "Naxos",
          description:
            "Nachos with melted cheese, Jack Daniels BBQ sauce, cheddar cheese sauce, crispy onion, and white sesame.",
        },
      },
      {
        id: "nachos_guacamoles",
        name: "Nachos con Guacamole",
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
        id: "nachos_kimchi",
        name: "Nachos Kimchi",
        price: "12,90 €",
        numericPrice: 12.9,
        description:
          "Totopos de maíz, queso monterrey Jack, salsa queso cheddar, tinga de pollo, mayo kimchi, sriracha y cebolla encurtida.",
        spicy: "medium",
        en: {
          name: "Kimchi Nachos",
          description:
            "Corn chips, Monterey Jack cheese, cheddar sauce, chicken tinga, kimchi mayo, sriracha, and pickled onion.",
        },
      },
      {
        id: "nachos_gratinados_birria",
        name: "Nachos Gratinados Birria",
        price: "13,70 €",
        numericPrice: 13.7,
        description:
          "Nachos gratinados con salsa de queso, birria y su consomé concentrado.",
        recommended: true,
        en: {
          name: "Birria Cheese Gratin Nachos",
          description:
            "Gratinated nachos with cheese sauce, slow-cooked beef birria, and concentrated consommé dipping broth.",
        },
      },
    ],
    extras: [
      { name: "Queso gratinado", price: "3,00 €" },
      { name: "Salsa cheddar", price: "3,00 €" },
      { name: "Cochinita", price: "4,50 €" },
      { name: "Tinga de pollo", price: "4,50 €" },
      { name: "Costilla", price: "4,50 €" },
      { name: "Guacamole extra", price: "3,50 €" },
    ],
  },

  burritos: {
    title: "BURRITOS",
    subtitle:
      "Acompaña tu burrito de papas fritas o papas Cajún por solo 2,00 €",
    accentColor: "#1D4E89",
    en: {
      title: "BURRITOS",
      subtitle:
        "Add French fries or Cajun fries to your burrito for only +€2.00",
    },
    items: [
      {
        id: "burrito_costilla_jack",
        name: "Burrito Costilla Jack Daniel’s",
        price: "13,90 €",
        numericPrice: 13.9,
        description:
          "Costilla de cerdo cocinada a baja temperatura, salsa Jack Daniels, queso monterrey jack, cebolla crujiente y arroz.",
        recommended: true,
        en: {
          name: "Jack Daniel's Rib Burrito",
          description:
            "Slow-cooked pork rib, Jack Daniel's sauce, Monterey Jack cheese, crispy onion, and rice.",
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
        id: "burrito_cochinita_pibil",
        name: "Burrito de Cochinita Pibil",
        price: "13,90 €",
        numericPrice: 13.9,
        description:
          "Cochinita pibil, arroz, queso Monterrey Jack, frijoles, guacamole, crema agría y mayo kimchee.",
        en: {
          name: "Cochinita Pibil Burrito",
          description:
            "Yucatan pulled pork, rice, Monterey Jack cheese, beans, guacamole, sour cream, and kimchi mayo.",
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
        id: "burrito_tinga_pollo",
        name: "Burrito de Tinga de Pollo",
        price: "10,90 €",
        numericPrice: 10.9,
        description:
          "Arroz, queso monterrey Jack, tinga de pollo, cebolleta y mayo Chipotle.",
        en: {
          name: "Chicken Tinga Burrito",
          description:
            "Rice, Monterey Jack cheese, shredded chicken tinga, spring onion, and Chipotle mayo.",
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
        id: "burrito_cochinita_deluxe",
        name: 'Burrito Cochinita Pibil "Deluxe"',
        price: "13,90 €",
        numericPrice: 13.9,
        description:
          "Cochinita pibil con guacamole, pico de gallo, frijoles, queso Monterrey Jack y crema agria.",
        en: {
          name: 'Cochinita Pibil Burrito "Deluxe"',
          description:
            "Cochinita pibil pork, guacamole, pico de gallo, beans, Monterey Jack cheese, and sour cream.",
        },
      },
      {
        id: "burrito_pulled_pork",
        name: "Burrito Pulled Pork Chipotle BBQ",
        price: "13,90 €",
        numericPrice: 13.9,
        description:
          "Pulled pork con salsa BBQ-bourbon de chipotle, pico de gallo, queso mozzarella y lechuga romana.",
        en: {
          name: "Pulled Pork Chipotle BBQ Burrito",
          description:
            "Pulled pork with chipotle-bourbon BBQ sauce, pico de gallo, mozzarella cheese, and romaine lettuce.",
        },
      },
      {
        id: "burrito_chili_pollo",
        name: "Burrito de Chili de Pollo",
        price: "10,90 €",
        numericPrice: 10.9,
        description:
          "Arroz, queso mozzarella, chili de pollo y salsa chingona.",
        spicy: "medium",
        en: {
          name: "Chicken Chili Burrito",
          description:
            "Rice, mozzarella cheese, chicken chili, and house special spicy sauce.",
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
  },

  tacos: {
    title: "TACOS",
    subtitle:
      "Raciones de 4 unidades. Acompaña con papas fritas o papas Cajún por +2 €",
    accentColor: "#BE3C1B",
    en: {
      title: "TACOS",
      subtitle:
        "Portions of 4 tacos. Add French fries or Cajun fries for +€2.00",
    },
    items: [
      {
        id: "taco_cochinita",
        name: "Taco de Cochinita Pibil",
        price: "9,90 €",
        numericPrice: 9.9,
        description:
          "Cochinita pibil con crema de chipotle, crema agria y cebolla roja encurtida. (4 uds)",
        en: {
          name: "Cochinita Pibil Tacos",
          description:
            "Slow-roasted pork with chipotle cream, sour cream, and pickled red onion. (4 pcs)",
        },
      },
      {
        id: "taco_pulled_pork",
        name: "Taco Pulled Pork BBQ",
        price: "9,90 €",
        numericPrice: 9.9,
        description:
          "Carne de cerdo asada en salsa BBQ a baja temperatura con cebolla crujiente y queso Oaxaca. (4 uds)",
        en: {
          name: "Pulled Pork BBQ Tacos",
          description:
            "Slow-cooked BBQ pulled pork with crispy onion and melted Oaxaca cheese. (4 pcs)",
        },
      },
      {
        id: "taco_gambones",
        name: "Taco Tempura de Gambones",
        price: "11,90 €",
        numericPrice: 11.9,
        description:
          "En cremosa de kimchee, algas wakame, cebolleta china y aros de cebolla crujientes. (4 uds)",
        recommended: true,
        en: {
          name: "King Prawn Tempura Tacos",
          description:
            "Tempura king prawns with creamy kimchee, wakame seaweed, spring onion, and crispy onion rings. (4 pcs)",
        },
      },
      {
        id: "taco_pastor",
        name: "Taco Pastor",
        price: "9,90 €",
        numericPrice: 9.9,
        description:
          "Carne de cerdo asada en adobo pastor, pico de gallo de piña y salsa pastor. (4 uds)",
        recommended: true,
        en: {
          name: "Tacos Al Pastor",
          description:
            "Marinated roasted pork with pineapple pico de gallo and house pastor salsa. (4 pcs)",
        },
      },
      {
        id: "taco_chili_pollo",
        name: "Taco Chili de Pollo",
        price: "9,90 €",
        numericPrice: 9.9,
        description:
          "Chili de pollo, queso Oaxaca y salsa de chiles tatemados y almendras. (4 uds)",
        en: {
          name: "Chicken Chili Tacos",
          description:
            "Chicken chili, Oaxaca cheese, and roasted chili almond sauce. (4 pcs)",
        },
      },
      {
        id: "taco_birria_ternera",
        name: "Taco de Birria de Ternera",
        price: "12,00 €",
        numericPrice: 12.0,
        description:
          "Birria de ternera con queso Oaxaca, pico de gallo de hierbabuena con salsa de su caldo para mojar. (4 uds)",
        recommended: true,
        en: {
          name: "Beef Birria Tacos",
          description:
            "Slow-braised beef birria with Oaxaca cheese, mint pico de gallo, served with consommé dipping broth.",
        },
      },
      {
        id: "taco_pollo_crujiente",
        name: "Taco de Pollo Crujiente",
        price: "10,50 €",
        numericPrice: 10.5,
        description:
          "Pollo crujiente con salsa yakiniku, crema de aguacate y pico de gallo con piña. (4 uds)",
        en: {
          name: "Crispy Chicken Tacos",
          description:
            "Crispy chicken with yakiniku sauce, avocado cream, and pineapple pico de gallo. (4 pcs)",
        },
      },
      {
        id: "taco_smash_burger",
        name: "Smash Taco Burger",
        price: "10,90 €",
        numericPrice: 10.9,
        description:
          "Burger smash, bacon, pepinillo, queso Monterey Jack y salsa burger. (4 uds)",
        en: {
          name: "Smash Taco Burger",
          description:
            "Smashed beef patty, bacon, pickle, Monterey Jack cheese, and house burger sauce. (4 pcs)",
        },
      },
      {
        id: "taco_brioche_costilla",
        name: "Taco Brioche de Costilla",
        price: "13,00 €",
        numericPrice: 13.0,
        description:
          "Carne de costilla deshuesada, mojo de aguacate, cilantro y maíz fresco.",
        en: {
          name: "Pork Rib Brioche Taco",
          description:
            "Boneless rib meat, avocado mojo, fresh cilantro, and sweet corn.",
        },
      },
      {
        id: "taco_brioche_bourbon",
        name: "Taco Brioche Costilla Bourbon",
        price: "11,90 €",
        numericPrice: 11.9,
        description:
          "Carne de costilla de cerdo asada con salsa bourbon de chipotle, queso Monterey y pico de gallo.",
        en: {
          name: "Bourbon Rib Brioche Taco",
          description:
            "Roasted pork rib meat with chipotle-bourbon sauce, Monterey cheese, and pico de gallo.",
        },
      },
      {
        id: "taco_chistorra",
        name: "Taco Chistorra a la Navarra",
        price: "8,90 €",
        numericPrice: 8.9,
        description:
          "Chistorra, queso de cabra, cebolla caramelizada y miel. (4 uds)",
        en: {
          name: "Navarra Sausage Tacos",
          description:
            "Navarra chistorra sausage, goat cheese, caramelized onion, and honey. (4 pcs)",
        },
      },
      {
        id: "taco_vegano",
        name: "Taco Vegano",
        price: "10,50 €",
        numericPrice: 10.5,
        description:
          "Tofu marinado en achiote a la plancha con salsa cremosa de cacahuate y chiles tatemados, y pico de gallo. (4 uds)",
        vegetarian: true,
        spicy: "low",
        en: {
          name: "Vegan Tacos",
          description:
            "Grilled achiote-marinated tofu with creamy peanut roasted chili sauce and pico de gallo. (4 pcs)",
        },
      },
      {
        id: "taco_tinga_pollo",
        name: "Taco de Tinga de Pollo",
        price: "9,90 €",
        numericPrice: 9.9,
        description:
          "Tinga de pollo con guacamole, pico de gallo y crema agria. (4 pcs)",
        en: {
          name: "Chicken Tinga Tacos",
          description:
            "Shredded chicken tinga with guacamole, pico de gallo, and sour cream. (4 pcs)",
        },
      },
      {
        id: "taco_birria_crunch",
        name: 'Taco Birria de Res "Crunch" ',
        price: "12,90 €",
        numericPrice: 12.9,
        description:
          "Birria de ternera con cremosa de chipotle, queso curado de oveja y papas paja. (4 uds)",
        en: {
          name: 'Beef Birria "Crunch" Tacos',
          description:
            "Beef birria with creamy chipotle, cured sheep cheese, and crispy potato sticks. (4 pcs)",
        },
      },
      {
        id: "taco_pato_pekin",
        name: "Taco Pato Pekín",
        price: "14,50 €",
        numericPrice: 14.5,
        description:
          "Pato confitado, lechuga romana, cebolleta china, cebolla caramelizada y salsa hoisin. (4 uds)",
        en: {
          name: "Peking Duck Tacos",
          description:
            "Confit duck, romaine lettuce, spring onion, caramelized onion, and hoisin sauce. (4 pcs)",
        },
      },
      {
        id: "degustacion_yucateca",
        name: "Degustación Yucateca (8 uds)",
        price: "19,90 €",
        numericPrice: 19.9,
        description:
          "2 tacos de cochinita, 2 tacos de pastor, 2 tacos de tinga de pollo, 2 tacos de pulled pork.",
        recommended: true,
        en: {
          name: "Yucatan Tasting Platter (8 pcs)",
          description:
            "2 cochinita pibil, 2 tacos al pastor, 2 chicken tinga, 2 BBQ pulled pork tacos.",
        },
      },
      {
        id: "degustacion_chingona",
        name: "Degustación Chingona (8 uds)",
        price: "20,90 €",
        numericPrice: 20.9,
        description:
          "2 tacos birria dipping, 2 tacos pollo crujiente, 2 tacos tempura de gambones, 2 de cochinita.",
        recommended: true,
        en: {
          name: "Chingona Tasting Platter (8 pcs)",
          description:
            "2 beef birria dipping, 2 crispy chicken, 2 king prawn tempura, 2 cochinita pibil tacos.",
        },
      },
    ],
  },

  quesadillas: {
    title: "QUESADILLAS",
    subtitle: "Tortillas de trigo doraditas rellenas de mucho queso fundido",
    accentColor: "#D99026",
    en: {
      title: "QUESADILLAS",
      subtitle: "Golden wheat tortillas loaded with melted cheese",
    },
    items: [
      {
        id: "quesadilla_cochinita",
        name: "Quesadilla de Cochinita",
        price: "10,90 €",
        numericPrice: 10.9,
        description:
          "Tortillas de trigo rellenas de queso fundido, pico de gallo y crema agría.",
        en: {
          name: "Cochinita Pork Quesadilla",
          description:
            "Flour tortillas filled with melted cheese, cochinita pork, pico de gallo, and sour cream.",
        },
      },
      {
        id: "quesadilla_tinga_pollo",
        name: "Quesadilla De Tinga de Pollo",
        price: "10,90 €",
        numericPrice: 10.9,
        description:
          "Tortillas de trigo rellenas con queso monterrey Jack, pico de gallo y crema agría.",
        spicy: "low",
        en: {
          name: "Chicken Tinga Quesadilla",
          description:
            "Flour tortillas stuffed with Monterey Jack cheese, chicken tinga, pico de gallo, and sour cream.",
        },
      },
      {
        id: "quesadilla_birria",
        name: "Quesadilla De Birria",
        price: "12,90 €",
        numericPrice: 12.9,
        description:
          "Tortillas de trigo rellenas de queso monterrey Jack, pico de gallo y crema agría.",
        recommended: true,
        en: {
          name: "Beef Birria Quesadilla",
          description:
            "Flour tortillas stuffed with Monterey Jack cheese, beef birria, pico de gallo, and sour cream.",
        },
      },
      {
        id: "quesadilla_chili_pollo",
        name: "Quesadilla De Chili de Pollo",
        price: "9,90 €",
        numericPrice: 9.9,
        description:
          "Tortillas de trigo rellenas con queso monterrey Jack, pico de gallo y crema agría.",
        spicy: "medium",
        en: {
          name: "Chicken Chili Quesadilla",
          description:
            "Flour tortillas filled with Monterey Jack cheese, chicken chili, pico de gallo, and sour cream.",
        },
      },
      {
        id: "quesadilla_vegetariana",
        name: "Quesadilla Vegetariana",
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
        id: "quesadilla_gobernador",
        name: "Quesadilla Gobernador",
        price: "10,50 €",
        numericPrice: 10.5,
        description:
          "Tortillas de trigo rellenas de queso monterrey Jack, gambas, pico de gallo, crema agría y mayo Chipotle.",
        spicy: "low",
        recommended: true,
        en: {
          name: "Gobernador Shrimp Quesadilla",
          description:
            "Flour tortillas stuffed with Monterey Jack cheese, prawns, pico de gallo, sour cream, and Chipotle mayo.",
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
      title: "STREET SNACKS",
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
          "Con panko y mezcla secreta de especias, mayo chipotle y crema agría.",
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
        id: "aros_cebolla",
        name: "Aros de Cebolla",
        price: "7,50 €",
        numericPrice: 7.5,
        description:
          "Empanados con especias cajún y acompañados de salsa BBQ de chipotle.",
        vegetarian: true,
        en: {
          name: "Onion Rings",
          description:
            "Cajun-spiced battered onion rings served with chipotle BBQ sauce.",
        },
      },
    ],
  },

  desnudos: {
    title: "DESNUDOS",
    subtitle:
      "Nuestros sabrosos Bowls. ¡Transforma tu bowl en burrito o taco con 2 tortillas extra por solo +1,80 €!",
    accentColor: "#E36F1E",
    en: {
      title: "NAKED BOWLS",
      subtitle:
        "Our flavorful Burrito Bowls. Turn your bowl into burritos/tacos with 2 extra tortillas for +€1.80!",
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
        name: "Desnudo de Salmón",
        price: "14,00 €",
        numericPrice: 14.0,
        description:
          "Bowl de Salmón marinado, wakame, crema agria, frijoles, cebolla crujiente y arroz.",
        en: {
          name: "Salmon Bowl",
          description:
            "Marinated salmon, wakame seaweed, sour cream, black beans, crispy onion, and rice.",
        },
      },
      {
        id: "desnudo_cochinita",
        name: "Desnudo de Cochinita",
        price: "13,50 €",
        numericPrice: 13.5,
        description:
          "Bowl de Cochinita pibil, arroz, queso Monterrey Jack, kimchee, guacamole, crema agria y arroz.",
        en: {
          name: "Cochinita Pork Bowl",
          description:
            "Cochinita pibil pork, rice, Monterey Jack cheese, kimchee, guacamole, and sour cream.",
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
        id: "desnudo_carnitas",
        name: "Desnudo de Carnitas",
        price: "13,00 €",
        numericPrice: 13.0,
        description:
          "Bowl de carrillera ibérica, arroz, guacamole, frijoles, pico de gallo, queso Oaxaca y crema agría.",
        en: {
          name: "Pork Cheek Carnitas Bowl",
          description:
            "Braised Iberian pork cheek, rice, guacamole, beans, pico de gallo, Oaxaca cheese, and sour cream.",
        },
      },
      {
        id: "desnudo_pulled_pork",
        name: "Desnudo de Pulled Pork BBQ",
        price: "13,50 €",
        numericPrice: 13.5,
        description:
          "Bowl de Pulled pork BBQ con queso Monterey Jack, salsa bourbon enchipotlada, crema agria, cebolla crujiente, arroz y pico de gallo.",
        en: {
          name: "Pulled Pork BBQ Bowl",
          description:
            "BBQ pulled pork with Monterey Jack, chipotle bourbon sauce, sour cream, crispy onion, rice, and pico de gallo.",
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
          "Bowl de Tiras de pollo crujiente, queso mozzarella, guacamole, pico de gallo, mayo picon, frijoles y arroz.",
        en: {
          name: "Crispy Chicken Bowl",
          description:
            "Crispy chicken strips, mozzarella cheese, guacamole, pico de gallo, spicy mayo, black beans, and rice.",
        },
      },
      {
        id: "desnudo_pato",
        name: "Desnudo de Pato Pekín",
        price: "16,00 €",
        numericPrice: 16.0,
        description:
          "Bowl de Pato pekín, queso Monterey Jack, salsa hoisin, cebolla crujiente, crema agria, pico de gallo, y arroz.",
        en: {
          name: "Peking Duck Bowl",
          description:
            "Peking duck, Monterey Jack cheese, hoisin sauce, crispy onion, sour cream, pico de gallo, and rice.",
        },
      },
    ],
    extras: [
      { name: "+2 Tortillas de 20cm (Para transformarlo)", price: "1,80 €" },
    ],
  },

  peques: {
    title: "PARA NUESTROS PEQUES",
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
          "Crujientes nuggets de pollo acompanados de patatas fritas doradas.",
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
    subtitle: "El broche de oro dulce para culminar tu experiencia",
    accentColor: "#A04318",
    en: {
      title: "DESSERTS",
      subtitle: "The perfect sweet finale to end your meal",
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
          name: "Cheesecake with Mexican Caramel (Cajeta)",
          description:
            "Creamy cheesecake drizzled with melted warm Mexican cajeta caramel.",
        },
      },
      {
        id: "tarta_nutella",
        name: "Tarta de Nutella",
        price: "6,50 €",
        numericPrice: 6.5,
        description: "Pura crema de cacao sobre una base golosa crujiente.",
        en: {
          name: "Nutella Tart",
          description:
            "Rich hazelnut chocolate cream over a crispy cookie crust.",
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
          name: "KinderMania Ice Cream Sundae",
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
        id: "copa_coco_banana",
        name: "Copa Cajeta COCO BANANA",
        price: "6,00 €",
        numericPrice: 6.0,
        description:
          "Doble bola de helado de dulce de leche, cajeta, galleta lotus triturada y nata montada.",
        en: {
          name: "Coco Banana & Cajeta Sundae",
          description:
            "Double scoop dulce de leche ice cream, cajeta, crushed Lotus biscoff, and whipped cream.",
        },
      },
      {
        id: "copa_chocolate_blanco_pistacho",
        name: "Copa Chocolate Blanco con Pistacho",
        price: "6,50 €",
        numericPrice: 6.5,
        description:
          "Doble bola de helado de Chocolate Blanco, nata montada y pistacho.",
        en: {
          name: "White Chocolate & Pistachio Sundae",
          description:
            "Double scoop white chocolate ice cream, whipped cream, and real pistachios.",
        },
      },
    ],
  },

  // BEVERAGES
  cervezas: {
    title: "CERVEZAS FRÍAS",
    subtitle: "Tragos helados para acompañar la picardía mexicana",
    accentColor: "#D97706",
    en: {
      title: "COLD BEERS",
      subtitle: "Ice-cold draft and bottled beers to pair with Mexican spice",
    },
    items: [
      {
        id: "jarra_dorada",
        name: "Jarra Dorada",
        price: "3,50 €",
        numericPrice: 3.5,
        en: { name: "Dorada Pint Mug" },
      },
      {
        id: "cana_dorada",
        name: "Caña Dorada",
        price: "2,50 €",
        numericPrice: 2.5,
        en: { name: "Dorada Small Draft" },
      },
      {
        id: "jarra_corona_50",
        name: "Jarra Corona (50cl)",
        price: "4,20 €",
        numericPrice: 4.2,
        en: { name: "Corona Draft Pint (50cl)" },
      },
      {
        id: "cana_corona_33",
        name: "Caña Corona (33cl)",
        price: "3,20 €",
        numericPrice: 3.2,
        en: { name: "Corona Draft (33cl)" },
      },
      {
        id: "dorada_especial_33",
        name: "Dorada Especial (33cl)",
        price: "3,30 €",
        numericPrice: 3.3,
        en: { name: "Dorada Especial Bottle (33cl)" },
      },
      {
        id: "desperados",
        name: "Desperados",
        price: "3,90 €",
        numericPrice: 3.9,
        en: { name: "Desperados Beer" },
      },
      {
        id: "pacifico",
        name: "Pacífico",
        price: "4,90 €",
        numericPrice: 4.9,
        en: { name: "Pacífico Beer" },
      },
      {
        id: "modelo_especial",
        name: "Modelo Especial",
        price: "4,90 €",
        numericPrice: 4.9,
        en: { name: "Modelo Especial Beer" },
      },
      {
        id: "modelo_negra",
        name: "Modelo Negra",
        price: "4,50 €",
        numericPrice: 4.5,
        en: { name: "Modelo Negra Dark Beer" },
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
        price: "8,00 €",
        numericPrice: 8.0,
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

  cocteles: {
    title: "CÓCTELES",
    subtitle: "Si no bailas después de uno de estos... ¡échate otro!",
    accentColor: "#DB2777",
    en: {
      title: "COCKTAILS",
      subtitle: "If you don't dance after one... grab another!",
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
        description: "Mezcal, fresas y lima. Sencillo, sabroso y peligroso.",
        recommended: true,
        en: {
          name: "Strawberry Mezcalito",
          description:
            "Mezcal, fresh strawberries, and lime. Simple, tasty, and dangerously good.",
        },
      },
      {
        id: "mezcalito_tamarindo",
        name: "Mezcalito Tamarindo Picante",
        price: "9,50 €",
        numericPrice: 9.5,
        description: "Mezcal, tamarindo, chile en polvo, limón y menta.",
        spicy: "low",
        en: {
          name: "Spicy Tamarind Mezcalito",
          description: "Mezcal, tamarind, chili powder, lemon, and fresh mint.",
        },
      },
      {
        id: "mezcal_margarita",
        name: "Mezcal Margarita",
        price: "9,50 €",
        numericPrice: 9.5,
        description:
          "Mezcal, triple seco, lima y azúcar líquida. Clásico con sal o versión frutal (mango o maracuyá) con borde de Tajin.",
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
        description:
          "Ron blanco Barceló, piña natural, crema de coco y mucho molo.",
        en: {
          name: "Frozen Piña Colada",
          description:
            "Barceló white rum, natural pineapple juice, coconut cream, blended with ice.",
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
          "Tequila macerado en 6 chiles, mango, lima, azúcar y cointreau con borde de Tajin picante.",
        spicy: "medium",
        recommended: true,
        en: {
          name: "Spicy Mango Picón",
          description:
            "Tequila infused with 6 chilies, mango puree, lime, Cointreau, served with a fiery Tajin rim.",
        },
      },
      {
        id: "maracushhhh",
        name: "Maracushhhh",
        price: "8,50 €",
        numericPrice: 8.5,
        description:
          "Tequila blanco, maracuyá, piña, lima, y soda. Fresco, frutal, y con burbujas que susurran.",
        en: {
          name: "Maracushhhh",
          description:
            "Silver Tequila, passion fruit, pineapple, lime, and soda water. Refreshing and fizzy.",
        },
      },
      {
        id: "berry_popping",
        name: "Berry Popping",
        price: "8,50 €",
        numericPrice: 8.5,
        description:
          "Almíbar de palomitas, frutos rojos, lima y ginebra. Ideal para cuando quieres algo dulce, ácido y un poco inesperado.",
        en: {
          name: "Berry Popping",
          description:
            "Popcorn syrup, mixed berries, fresh lime juice, and gin.",
        },
      },
      {
        id: "mojito_clasico",
        name: "Mojito Clásico",
        price: "7,50 €",
        numericPrice: 7.5,
        description:
          "Lima, hojas de menta, azúcar moreno, ron blanco y TOP sprite.",
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
          "Elegir Fresa, fruta de la pasión, coco, tamarindo o sandía.",
        en: {
          name: "Flavored Mojito",
          description:
            "Choice of flavors: Strawberry, passion fruit, coconut, tamarind, or watermelon.",
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
      options: [
        { name: "Pepsi", price: "2,50 €" },
        { name: "Pepsi Zero", price: "2,50 €" },
        { name: "Schweppes Lemon", price: "2,50 €" },
        { name: "Schweppes Orange", price: "2,50 €" },
        { name: "Seven Up", price: "2,50 €" },
        { name: "Tonic Water", price: "2,90 €" },
      ],
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
        id: "refrescos_clasicos",
        name: "Refrescos clásicos",
        price: "2,50 €",
        numericPrice: 2.5,
        en: {
          name: "Classic Soft Drinks",
          options: [
            { name: "Pepsi", price: "2,50 €" },
            { name: "Pepsi Zero", price: "2,50 €" },
            { name: "Schweppes Lemon", price: "2,50 €" },
            { name: "Schweppes Orange", price: "2,50 €" },
            { name: "Seven Up", price: "2,50 €" },
            { name: "Tonic Water", price: "2,50 €" },
          ],
        },
        options: [
          { name: "Pepsi", price: "2,50 €" },
          { name: "Pepsi Zero", price: "2,50 €" },
          { name: "Schwippes de Limón", price: "2,50 €" },
          { name: "Schwippes de Naranja", price: "2,50 €" },
          { name: "Seven Up", price: "2,50 €" },
          { name: "Tónica", price: "2,90 €" },
        ],
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
      {
        id: "jarra_sangria_1l",
        name: "Jarra de Sangría (1L)",
        price: "16,00 €",
        numericPrice: 16.0,
        recommended: true,
        en: { name: "Sangria Pitcher (1 Liter)" },
      },
    ],
  },

  micheladas: {
    title: "MICHELADA & CHELADA",
    subtitle: "La auténtica curada mexicana con limón y especias",
    accentColor: "#DC2626",
    en: {
      title: "MICHELADA & CHELADA",
      subtitle: "Authentic Mexican spiced beer cocktail with lime & seasonings",
    },
    items: [
      {
        id: "michelada_clasica",
        name: "Michelada",
        price: "5,50 €",
        numericPrice: 5.5,
        description:
          "Cerveza muy fría, jugo de lima, jugo maggi, perrins y valentina.",
        en: {
          name: "Classic Michelada",
          description:
            "Chilled beer, fresh lime juice, Maggi sauce, Worcestershire, and Valentina hot sauce.",
        },
      },
      {
        id: "michelada_chingona",
        name: "Michelada Chingona",
        price: "Desde 6,00 €",
        numericPrice: 6.0,
        description:
          "Cerveza muy fría, jugo de lima, jugo maggi, perrins, valentina y clamato.",
        options: [
          { name: "Con Corona", price: "6,00 €" },
          { name: "Con Pacífico", price: "7,00 €" },
          { name: "Con Modelo Negra", price: "7,00 €" },
          { name: "Con Modelo Especial", price: "7,00 €" },
        ],
        recommended: true,
        en: {
          name: "Chingona Clamato Michelada",
          description:
            "Ice-cold beer, lime juice, Maggi, Worcestershire, Valentina hot sauce, and Clamato tomato juice.",
          options: [
            { name: "With Corona", price: "6,00 €" },
            { name: "With Pacífico", price: "7,00 €" },
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
        description:
          "Cerveza muy fría servida con zumo de limón recién exprimido y borde con sal.",
        en: {
          name: "Lime Chelada",
          description:
            "Ice-cold beer served with fresh squeezed lime juice and a salted rim.",
        },
      },
    ],
  },

  margaritas: {
    title: "MARGARITAS PARA EL ALMA",
    subtitle:
      "De las que se sirven con sonrisa... o con jarra. ¡Pide jarra de 1L o 1/2L para compartir!",
    accentColor: "#059669",
    en: {
      title: "MARGARITAS FOR THE SOUL",
      subtitle:
        "Served with a smile or by the pitcher! Order a 1/2L or 1L pitcher to share!",
    },
    items: [
      {
        id: "margarita_clasica",
        name: "Copa Margarita Clásica",
        price: "7,50 €",
        numericPrice: 7.5,
        description:
          "Tequila, triple seco y zumo de lima servido en copa encostrada de sal.",
        en: {
          name: "Classic Margarita Glass",
          description:
            "Tequila, triple sec, and lime juice served in a salt-rimmed glass.",
        },
      },
      {
        id: "margarita_sabores",
        name: "Copa Margarita de Sabores",
        price: "8,00 €",
        numericPrice: 8.0,
        description:
          "Elige tu sabor: Fresa, fruta de la pasión, coco, tamarindo o sandía.",
        en: {
          name: "Flavored Margarita Glass",
          description:
            "Choice of flavor: Strawberry, passion fruit, coconut, tamarind, or watermelon.",
        },
      },
      {
        id: "margarita_sabores_frozen",
        name: "Copa Margarita Frozen",
        price: "8,00 €",
        numericPrice: 8.0,
        description: "Fruta de la pasión, Mango, o Fresa.",
        recommended: true,
        en: {
          name: "Frozen Margarita Glass",
          description: "Passion fruit, Mango, or Strawberry.",
        },
      },
      {
        id: "jarra_margarita_sabores_half",
        name: "1/2L Jarra Margarita Clásica / Frozen ",
        price: "13,90 €",
        numericPrice: 13.9,
        description: "Frozen: Fruta de la pasión, Mango, o Fresa.",
        en: {
          name: "1/2L Margarita Pitcher (Classic / Frozen)",
          description: "Frozen options: Passion fruit, Mango, or Strawberry.",
        },
      },
      {
        id: "jarra_margarita_sabores_1l",
        name: "1L Jarra Margarita Clásica / Frozen ",
        price: "19,90 €",
        numericPrice: 19.9,
        description: "Frozen: Fruta de la pasión, Mango, o Fresa.",
        en: {
          name: "1L Margarita Pitcher (Classic / Frozen)",
          description: "Frozen options: Passion fruit, Mango, or Strawberry.",
        },
      },
    ],
  },

  limonadas: {
    title: "LIMONADAS",
    subtitle: "Para los que se portan bien (o están en pausa)",
    accentColor: "#CA8A04",
    en: {
      title: "LEMONADES",
      subtitle: "For non-drinkers or taking a refreshing break",
    },
    items: [
      {
        id: "dale_lemonade",
        name: "Dale Lemonade",
        price: "5,20 €",
        numericPrice: 5.2,
        description: "Zumo de limón, lima, vainilla y soda.",
        en: {
          name: "Dale Lemonade",
          description: "Fresh lemon juice, lime, vanilla syrup, and soda.",
        },
      },
      {
        id: "berries_lemonade",
        name: "Berries Lemonade",
        price: "5,20 €",
        numericPrice: 5.2,
        description: "Limón, lima, naranja, frutos del bosque y soda.",
        recommended: true,
        en: {
          name: "Berries Lemonade",
          description: "Lemon, lime, orange, forest berries puree, and soda.",
        },
      },
      {
        id: "coco_lemonade",
        name: "Coco Lemonade",
        price: "5,20 €",
        numericPrice: 5.2,
        description: "Coco, lima, vainilla y soda.",
        en: {
          name: "Coco Lemonade",
          description: "Coconut cream, lime juice, vanilla, and soda.",
        },
      },
      {
        id: "passion_lemonade",
        name: "Passion Lemonade",
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
        id: "watermelon_lemonade",
        name: "Watermelon Lemonade",
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
