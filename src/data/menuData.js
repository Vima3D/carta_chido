export const FOOD_CATEGORIES = [
  {
    id: "nachos",
    name: "Nachos",
    icon: "🌮",
    badge: "Crujientes",
    color: "#D45136",
  },
  {
    id: "burritos",
    name: "Burritos",
    icon: "🌯",
    badge: "Generosos",
    color: "#1D4E89",
  },
  {
    id: "tacos",
    name: "Tacos",
    icon: "🌮",
    badge: "4 Unidades",
    color: "#BE3C1B",
  },
  {
    id: "quesadillas",
    name: "Quesadillas",
    icon: "🧀",
    badge: "Queso Fundido",
    color: "#D99026",
  },
  {
    id: "antojitos",
    name: "Antojitos",
    icon: "🫔",
    badge: "Para Compartir",
    color: "#2E4A9E",
  },
  {
    id: "desnudos",
    name: "Desnudos",
    icon: "🥗",
    badge: "Bowls",
    color: "#E36F1E",
  },
  {
    id: "peques",
    name: "Peques",
    icon: "🧒",
    badge: "Para Niños",
    color: "#C4432B",
  },
  {
    id: "postres",
    name: "Postres",
    icon: "🍰",
    badge: "Dulce Final",
    color: "#A04318",
  },
];

export const DRINK_CATEGORIES = [
  {
    id: "cervezas",
    name: "Cervezas",
    icon: "🍺",
    badge: "Bien Frías",
    color: "#D97706",
  },
  {
    id: "tequilas",
    name: "Tequilas",
    icon: "🌵",
    badge: "Jalisco & Oaxaca",
    color: "#B45309",
  },
  {
    id: "cocteles",
    name: "Cócteles",
    icon: "🍹",
    badge: "Chingones",
    color: "#DB2777",
  },
  {
    id: "refrescos",
    name: "Refrescos",
    icon: "🥤",
    badge: "Refrescantes",
    color: "#2563EB",
  },
  {
    id: "micheladas",
    name: "Micheladas",
    icon: "🌶️",
    badge: "Con Clamato / Lima",
    color: "#DC2626",
  },
  {
    id: "margaritas",
    name: "Margaritas",
    icon: "🍸",
    badge: "Frozen o Clásicas",
    color: "#059669",
  },
  {
    id: "limonadas",
    name: "Limonadas",
    icon: "🍋",
    badge: "Sin Alcohol",
    color: "#CA8A04",
  },
];

export const MENU_ITEMS = {
  nachos: {
    title: "NACHOS",
    subtitle: "Totopos de maíz fritos por nosotros diariamente",
    accentColor: "#D45136",
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
      },
      {
        id: "naxos",
        name: "Naxos",
        price: "12,50 €",
        numericPrice: 12.5,
        description:
          "Nachos con queso fundido, salsa Jack Daniels, salsa de queso cheddar, cebolla crujiente y sésamo blanco.",
        vegetarian: true,
      },
      {
        id: "nachos_guacamoles",
        name: "Nachos con Guacamole",
        price: "13,50 €",
        numericPrice: 13.5,
        description:
          "Nachos con guacamole casero, crema agria y pico de gallo fresco.",
        vegetarian: true,
      },
      {
        id: "nachos_kimchi",
        name: "Nachos Kimchi",
        price: "12,90 €",
        numericPrice: 12.9,
        description:
          "Totopos de maíz, queso monterrey Jack, salsa queso cheddar, tinga de pollo, mayo kimchi, sriracha y cebolla encurtida.",
        spicy: "medium",
      },
      {
        id: "nachos_gratinados_birria",
        name: "Nachos Gratinados Birria",
        price: "13,70 €",
        numericPrice: 13.7,
        description:
          "Nachos gratinados con salsa de queso, birria y su consomé concentrado.",
        recommended: true,
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
    items: [
      {
        id: "burrito_costilla_jack",
        name: "Burrito Costilla Jack Daniel’s",
        price: "13,90 €",
        numericPrice: 13.9,
        description:
          "Costilla de cerdo cocinada a baja temperatura, salsa Jack Daniels, queso monterrey jack, cebolla crujiente y arroz.",
        recommended: true,
      },
      {
        id: "burrito_pollo_crujiente",
        name: "Burrito de Pollo Crujiente",
        price: "11,90 €",
        numericPrice: 11.9,
        description:
          "Tiras de pollo crujiente, arroz, mayo de mojo rojo y queso mozzarella.",
        spicy: "medium",
      },
      {
        id: "burrito_cochinita_pibil",
        name: "Burrito de Cochinita Pibil",
        price: "13,90 €",
        numericPrice: 13.9,
        description:
          "Cochinita pibil, arroz, queso Monterrey Jack, frijoles, guacamole, crema agría y mayo kimchee.",
      },
      {
        id: "burrito_carnitas_carrillera",
        name: "Burrito de Carnitas de Carrillera",
        price: "13,90 €",
        numericPrice: 13.9,
        description:
          "Arroz, carrillera ibérica, queso Oaxaca y mojo de aguacate.",
      },
      {
        id: "burrito_tinga_pollo",
        name: "Burrito de Tinga de Pollo",
        price: "10,90 €",
        numericPrice: 10.9,
        description:
          "Arroz, queso monterrey Jack, tinga de pollo, cebolleta y mayo Chipotle.",
      },
      {
        id: "burrito_birria",
        name: "Burrito de Birria",
        price: "14,90 €",
        numericPrice: 14.9,
        description:
          "Birria de res con guacamole, pico de gallo, queso Monterey Jack, crema agria y frijoles.",
        recommended: true,
      },
      {
        id: "burrito_cochinita_deluxe",
        name: 'Burrito Cochinita Pibil "Deluxe"',
        price: "13,90 €",
        numericPrice: 13.9,
        description:
          "Cochinita pibil con guacamole, pico de gallo, frijoles, queso Monterrey Jack y crema agria.",
      },
      {
        id: "burrito_pulled_pork",
        name: "Burrito Pulled Pork Chipotle BBQ",
        price: "13,90 €",
        numericPrice: 13.9,
        description:
          "Pulled pork con salsa BBQ-bourbon de chipotle, pico de gallo, queso mozzarella y lechuga romana.",
      },
      {
        id: "burrito_chili_pollo",
        name: "Burrito de Chili de Pollo",
        price: "10,90 €",
        numericPrice: 10.9,
        description:
          "Arroz, queso mozzarella, chili de pollo y salsa chingona.",
        spicy: "medium",
      },
      {
        id: "burrito_vegano",
        name: "Burrito Vegano",
        price: "10,90 €",
        numericPrice: 10.9,
        description:
          "Arroz, soja texturizada, frijoles, aguacate y salsa de chiles adobados.",
        vegetarian: true,
      },
    ],
  },

  tacos: {
    title: "TACOS",
    subtitle:
      "Raciones de 4 unidades. Acompaña con papas fritas o papas Cajún por +2 €",
    accentColor: "#BE3C1B",
    items: [
      {
        id: "taco_cochinita",
        name: "Taco de Cochinita Pibil (4 uds)",
        price: "9,90 €",
        numericPrice: 9.9,
        description:
          "Cochinita pibil con crema de chipotle, crema agria y cebolla roja encurtida.",
      },
      {
        id: "taco_pulled_pork",
        name: "Taco Pulled Pork BBQ (4 uds)",
        price: "9,90 €",
        numericPrice: 9.9,
        description:
          "Carne de cerdo asada en salsa BBQ a baja temperatura con cebolla crujiente y queso Oaxaca.",
      },
      {
        id: "taco_gambones",
        name: "Taco Tempura de Gambones (4 uds)",
        price: "11,90 €",
        numericPrice: 11.9,
        description:
          "En cremosa de kimchee, algas wakame, cebolleta china y aros de cebolla crujientes.",
        recommended: true,
      },
      {
        id: "taco_pastor",
        name: "Taco Pastor (4 uds)",
        price: "9,90 €",
        numericPrice: 9.9,
        description:
          "Carne de cerdo asada en adobo pastor, pico de gallo de piña y salsa pastor.",
        recommended: true,
      },
      {
        id: "taco_chili_pollo",
        name: "Taco Chili de Pollo (4 uds)",
        price: "9,90 €",
        numericPrice: 9.9,
        description:
          "Chili de pollo, queso Oaxaca y salsa de chiles tatemados y almendras.",
      },
      {
        id: "taco_birria_ternera",
        name: "Taco de Birria de Ternera (4 uds)",
        price: "12,00 €",
        numericPrice: 12.0,
        description:
          "Birria de ternera con queso Oaxaca, pico de gallo de hierbabuena con salsa de su caldo para mojar.",
        recommended: true,
      },
      {
        id: "taco_pollo_crujiente",
        name: "Taco de Pollo Crujiente (4 uds)",
        price: "10,50 €",
        numericPrice: 10.5,
        description:
          "Pollo crujiente con salsa yakiniku, crema de aguacate y pico de gallo con piña.",
      },
      {
        id: "taco_smash_burger",
        name: "Smash Taco Burger (4 uds)",
        price: "10,90 €",
        numericPrice: 10.9,
        description:
          "Burger smash, bacon, pepinillo, queso Monterey Jack y salsa burger.",
      },
      {
        id: "taco_brioche_costilla",
        name: "Taco Brioche de Costilla",
        price: "13,00 €",
        numericPrice: 13.0,
        description:
          "Carne de costilla deshuesada, mojo de aguacate, cilantro y maíz fresco.",
      },
      {
        id: "taco_brioche_bourbon",
        name: "Taco Brioche Costilla Bourbon",
        price: "11,90 €",
        numericPrice: 11.9,
        description:
          "Carne de costilla de cerdo asada con salsa bourbon de chipotle, queso Monterey y pico de gallo.",
      },
      {
        id: "taco_chistorra",
        name: "Taco Chistorra a la Navarra (4 uds)",
        price: "8,90 €",
        numericPrice: 8.9,
        description: "Chistorra, queso de cabra, cebolla caramelizada y miel.",
      },
      {
        id: "taco_vegano",
        name: "Taco Vegano (4 uds)",
        price: "10,50 €",
        numericPrice: 10.5,
        description:
          "Tofu marinado en achiote a la plancha con salsa cremosa de cacahuate y chiles tatemados, y pico de gallo.",
        vegetarian: true,
        spicy: "low",
      },
      {
        id: "taco_tinga_pollo",
        name: "Taco de Tinga de Pollo (4 uds)",
        price: "9,90 €",
        numericPrice: 9.9,
        description:
          "Tinga de pollo con guacamole, pico de gallo y crema agria.",
      },
      {
        id: "taco_birria_crunch",
        name: 'Taco Birria de Res "Crunch" (4 uds)',
        price: "12,90 €",
        numericPrice: 12.9,
        description:
          "Birria de ternera con cremosa de chipotle, queso curado de oveja y papas paja.",
      },
      {
        id: "taco_pato_pekin",
        name: "Taco Pato Pekín (4 uds)",
        price: "14,50 €",
        numericPrice: 14.5,
        description:
          "Pato confitado, lechuga romana, cebolleta china, cebolla caramelizada y salsa hoisin.",
      },
      {
        id: "degustacion_yucateca",
        name: "Degustación Yucateca (8 uds)",
        price: "19,90 €",
        numericPrice: 19.9,
        description:
          "2 tacos de cochinita, 2 tacos de pastor, 2 tacos de tinga de pollo, 2 tacos de pulled pork.",
        recommended: true,
      },
      {
        id: "degustacion_chingona",
        name: "Degustación Chingona (8 uds)",
        price: "20,90 €",
        numericPrice: 20.9,
        description:
          "2 tacos birria dipping, 2 tacos pollo crujiente, 2 tacos tempura de gambones, 2 de cochinita.",
        recommended: true,
      },
    ],
  },

  quesadillas: {
    title: "QUESADILLAS",
    subtitle: "Tortillas de trigo doraditas rellenas de mucho queso fundido",
    accentColor: "#D99026",
    items: [
      {
        id: "quesadilla_cochinita",
        name: "Quesadilla de Cochinita",
        price: "10,90 €",
        numericPrice: 10.9,
        description:
          "Tortillas de trigo rellenas de queso fundido, pico de gallo y crema agría.",
      },
      {
        id: "quesadilla_tinga_pollo",
        name: "Quesadilla De Tinga de Pollo",
        price: "10,90 €",
        numericPrice: 10.9,
        description:
          "Tortillas de trigo rellenas con queso monterrey Jack, pico de gallo y crema agría.",
        spicy: "low",
      },
      {
        id: "quesadilla_birria",
        name: "Quesadilla De Birria",
        price: "12,90 €",
        numericPrice: 12.9,
        description:
          "Tortillas de trigo rellenas de queso monterrey Jack, pico de gallo y crema agría.",
        recommended: true,
      },
      {
        id: "quesadilla_chili_pollo",
        name: "Quesadilla De Chili de Pollo",
        price: "9,90 €",
        numericPrice: 9.9,
        description:
          "Tortillas de trigo rellenas con queso monterrey Jack, pico de gallo y crema agría.",
        spicy: "medium",
      },
      {
        id: "quesadilla_vegetariana",
        name: "Quesadilla Vegetariana",
        price: "10,50 €",
        numericPrice: 10.5,
        description:
          "Tortillas de trigo rellenas de queso Monterey Jack, tinga de soja texturizada, pico de gallo y crema agria.",
        vegetarian: true,
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
      },
    ],
  },

  antojitos: {
    title: "ANTOJITOS",
    subtitle:
      "Entrantes con alma callejera, sabor de barrio y pinta de escándalo",
    accentColor: "#2E4A9E",
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
      },
      {
        id: "patacones_salmon",
        name: "Patacones de Tartar de Salmón",
        price: "13,50 €",
        numericPrice: 13.5,
        description:
          "Plátano macho crujiente con dados de salmón aliñados en sésamo, soja y salsa chipotle.",
      },
      {
        id: "tiras_pollo_crujiente",
        name: "Tiras de Pollo Crujiente",
        price: "10,90 €",
        numericPrice: 10.9,
        description:
          "Con panko y mezcla secreta de especias, mayo chipotle y crema agría.",
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
      },
      {
        id: "aros_cebolla",
        name: "Aros de Cebolla",
        price: "7,50 €",
        numericPrice: 7.5,
        description:
          "Empanados con especias cajún y acompañados de salsa BBQ de chipotle.",
        vegetarian: true,
      },
    ],
  },

  desnudos: {
    title: "DESNUDOS",
    subtitle:
      "Nuestros sabrosos Bowls. ¡Transforma tu bowl en burrito o taco con 2 tortillas extra por solo +1,80 €!",
    accentColor: "#E36F1E",
    items: [
      {
        id: "desnudo_salmon",
        name: "Desnudo de Salmón",
        price: "14,00 €",
        numericPrice: 14.0,
        description:
          "Bowl de Salmón marinado, wakame, crema agria, frijoles, cebolla crujiente y arroz.",
      },
      {
        id: "desnudo_cochinita",
        name: "Desnudo de Cochinita",
        price: "13,50 €",
        numericPrice: 13.5,
        description:
          "Bowl de Cochinita pibil, arroz, queso Monterrey Jack, kimchee, guacamole, crema agria y arroz.",
      },
      {
        id: "desnudo_costilla",
        name: "Desnudo de Costilla",
        price: "13,50 €",
        numericPrice: 13.5,
        description:
          "Bowl de Carne de Costilla de cerdo deshuesada, salsa Jack Daniels, arroz, queso Monterey Jack, frijoles, guacamole, cebolla crujiente y pico de gallo.",
      },
      {
        id: "desnudo_carnitas",
        name: "Desnudo de Carnitas",
        price: "13,00 €",
        numericPrice: 13.0,
        description:
          "Bowl de carrillera ibérica, arroz, guacamole, frijoles, pico de gallo, queso Oaxaca y crema agría.",
      },
      {
        id: "desnudo_pulled_pork",
        name: "Desnudo de Pulled Pork BBQ",
        price: "13,50 €",
        numericPrice: 13.5,
        description:
          "Bowl de Pulled pork BBQ con queso Monterey Jack, salsa bourbon enchipotlada, crema agria, cebolla crujiente, arroz y pico de gallo.",
      },
      {
        id: "desnudo_tinga_pollo",
        name: "Desnudo de Tinga de Pollo",
        price: "11,90 €",
        numericPrice: 11.9,
        description:
          "Bowl de Tinga de pollo, cremosa de chipotle, guacamole, frijoles, arroz, cebolla crujiente, pico de gallo y crema agria.",
        spicy: "medium",
      },
      {
        id: "desnudo_pollo_crujiente",
        name: "Desnudo de Pollo Crujiente",
        price: "11,90 €",
        numericPrice: 11.9,
        description:
          "Bowl de Tiras de pollo crujiente, queso mozzarella, guacamole, pico de gallo, mayo picon, frijoles y arroz.",
      },
      {
        id: "desnudo_pato",
        name: "Desnudo de Pato Pekín",
        price: "16,00 €",
        numericPrice: 16.0,
        description:
          "Bowl de Pato pekín, queso Monterey Jack, salsa hoisin, cebolla crujiente, crema agria, pico de gallo, y arroz.",
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
    items: [
      {
        id: "quesapizza",
        name: "Quesapizza",
        price: "7,60 €",
        numericPrice: 7.6,
        description: "Tortilla de trigo con tomate, jamón y queso fundido.",
      },
      {
        id: "nuggets_papas",
        name: "Nuggets de Pollo con Papas Fritas",
        price: "7,60 €",
        numericPrice: 7.6,
        description:
          "Crujientes nuggets de pollo acompanados de patatas fritas doradas.",
      },
    ],
  },

  postres: {
    title: "POSTRES",
    subtitle: "El broche de oro dulce para culminar tu experiencia",
    accentColor: "#A04318",
    items: [
      {
        id: "tarta_queso_cajeta",
        name: "Tarta de Queso con Cajeta",
        price: "6,50 €",
        numericPrice: 6.5,
        description:
          "Cremosa tarta de queso con cajeta casera derretida por encima.",
        recommended: true,
      },
      {
        id: "tarta_nutella",
        name: "Tarta de Nutella",
        price: "6,50 €",
        numericPrice: 6.5,
        description: "Pura crema de cacao sobre una base golosa crujiente.",
      },
      {
        id: "copa_kindermania",
        name: "Copa KinderMania",
        price: "6,50 €",
        numericPrice: 6.5,
        description:
          "Doble bola de helado de Kinder, nata montada, cubitos de brownie, Nutella y un barquillo.",
        recommended: true,
      },
      {
        id: "polvito_oreoguayo",
        name: "Polvito Oreoguayo",
        price: "6,00 €",
        numericPrice: 6.0,
        description:
          "Galleta Oreo, merengue seco crujiente, nata y un chorro indecente de dulce de leche.",
      },
      {
        id: "tres_leches",
        name: "Tres Leches",
        price: "6,00 €",
        numericPrice: 6.0,
        description:
          "Bizcocho empapado en leche infusionada con canela, limón y naranja, coronado con dulce de leche y crumble de galleta.",
      },
      {
        id: "cheesecake_pistacho",
        name: "Cheesecake de Pistacho",
        price: "7,00 €",
        numericPrice: 7.0,
        description:
          "Cremoso, horneado al punto y con auténtica pasta de pistacho.",
        recommended: true,
      },
      {
        id: "copa_coco_banana",
        name: "Copa Cajeta COCO BANANA",
        price: "6,00 €",
        numericPrice: 6.0,
        description:
          "Doble bola de helado de dulce de leche, cajeta, galleta lotus triturada y nata montada.",
      },
      {
        id: "copa_chocolate_blanco_pistacho",
        name: "Copa Chocolate Blanco con Pistacho",
        price: "6,50 €",
        numericPrice: 6.5,
        description:
          "Doble bola de helado de Chocolate Blanco, nata montada y pistacho.",
      },
    ],
  },

  // BEVERAGES
  cervezas: {
    title: "CERVEZAS FRÍAS",
    subtitle: "Tragos helados para acompañar la picardía mexicana",
    accentColor: "#D97706",
    items: [
      {
        id: "jarra_dorada",
        name: "Jarra Dorada",
        price: "3,50 €",
        numericPrice: 3.5,
      },
      {
        id: "cana_dorada",
        name: "Caña Dorada",
        price: "2,50 €",
        numericPrice: 2.5,
      },
      {
        id: "jarra_corona_50",
        name: "Jarra Corona (50cl)",
        price: "4,20 €",
        numericPrice: 4.2,
      },
      {
        id: "cana_corona_33",
        name: "Caña Corona (33cl)",
        price: "3,20 €",
        numericPrice: 3.2,
      },
      {
        id: "dorada_especial_33",
        name: "Dorada Especial (33cl)",
        price: "3,30 €",
        numericPrice: 3.3,
      },
      {
        id: "desperados",
        name: "Desperados",
        price: "3,90 €",
        numericPrice: 3.9,
      },
      { id: "pacifico", name: "Pacífico", price: "4,90 €", numericPrice: 4.9 },
      {
        id: "modelo_especial",
        name: "Modelo Especial",
        price: "4,90 €",
        numericPrice: 4.9,
      },
      {
        id: "modelo_negra",
        name: "Modelo Negra",
        price: "4,50 €",
        numericPrice: 4.5,
      },
    ],
  },

  tequilas: {
    title: "TEQUILAS Y MEZCALES",
    subtitle: "Para brindar como en Jalisco o perderse como en Oaxaca",
    accentColor: "#B45309",
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
    items: [
      {
        id: "la_bamba",
        name: "La Bamba",
        price: "8,00 €",
        numericPrice: 8.0,
        description:
          "Lima, azúcar, vodka de manzana, zumo de naranja, Malibú y maracuyá.",
      },
      {
        id: "mezcalito_fresa",
        name: "Mezcalito de Fresa",
        price: "9,50 €",
        numericPrice: 9.5,
        description: "Mezcal, fresas y lima. Sencillo, sabroso y peligroso.",
        recommended: true,
      },
      {
        id: "mezcalito_tamarindo",
        name: "Mezcalito Tamarindo Picante",
        price: "9,50 €",
        numericPrice: 9.5,
        description: "Mezcal, tamarindo, chile en polvo, limón y menta.",
        spicy: "low",
      },
      {
        id: "mezcal_margarita",
        name: "Mezcal Margarita",
        price: "9,50 €",
        numericPrice: 9.5,
        description:
          "Mezcal, triple seco, lima y azúcar líquida. Clásico con sal o versión frutal (mango o maracuyá) con borde de Tajin.",
      },
      {
        id: "pina_colada_frozen",
        name: "Piña Colada Frozen",
        price: "8,50 €",
        numericPrice: 8.5,
        description:
          "Ron blanco Barceló, piña natural, crema de coco y mucho molo.",
      },
      {
        id: "daiquiri_fresa_frozen",
        name: "Daiquiri de Fresa Frozen",
        price: "8,00 €",
        numericPrice: 8.0,
        description: "Ron blanco, fresa, lima y azúcar, todo bien frappé.",
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
      },
      {
        id: "maracushhhh",
        name: "Maracushhhh",
        price: "8,50 €",
        numericPrice: 8.5,
        description:
          "Tequila blanco, maracuyá, piña, lima, y soda. Fresco, frutal, y con burbujas que susurran.",
      },
      {
        id: "berry_popping",
        name: "Berry Popping",
        price: "8,50 €",
        numericPrice: 8.5,
        description:
          "Almíbar de palomitas, frutos rojos, lima y ginebra. Ideal para cuando quieres algo dulce, ácido y un poco inesperado.",
      },
      {
        id: "mojito_clasico",
        name: "Mojito Clásico",
        price: "7,50 €",
        numericPrice: 7.5,
        description:
          "Lima, hojas de menta, azúcar moreno, ron blanco y TOP sprite.",
      },
      {
        id: "mojito_sabores",
        name: "Mojito de Sabores",
        price: "8,00 €",
        numericPrice: 8.0,
        description:
          "Elegir Fresa, fruta de la pasión, coco, tamarindo o sandía.",
      },
    ],
  },

  refrescos: {
    title: "REFRESCOS Y SANGRÍAS",
    subtitle: "Bebidas refrescantes y jarras para la mesa",
    accentColor: "#2563EB",
    items: [
      {
        id: "agua_gas",
        name: "Agua con / sin gas",
        price: "2,10 €",
        numericPrice: 2.1,
      },
      {
        id: "refrescos_clasicos",
        name: "Refrescos clásicos",
        price: "2,50 €",
        numericPrice: 2.5,
        options: [
          { name: "Pepsi", price: "2,50 €" },
          { name: "Pepsi Zero", price: "2,50 €" },
          { name: "Schwippes de Limón", price: "2,50 €" },
          { name: "Schwippes de Naranja", price: "2,50 €" },
          { name: "Seven Up", price: "2,50 €" },
          { name: "Tónica", price: "2,50 €" },
        ],
      },
      {
        id: "lipton_melocoton",
        name: "Lipton Melocotón",
        price: "3,50 €",
        numericPrice: 3.5,
      },
      {
        id: "lipton_limon",
        name: "Lipton Limón",
        price: "3,50 €",
        numericPrice: 3.5,
      },
      {
        id: "copa_tinto_verano",
        name: "Copa de Tinto de Verano",
        price: "3,50 €",
        numericPrice: 3.5,
      },
      {
        id: "jarra_sangria_1l",
        name: "Jarra de Sangría (1L)",
        price: "16,00 €",
        numericPrice: 16.0,
        recommended: true,
      },
    ],
  },

  micheladas: {
    title: "MICHELADA & CHELADA",
    subtitle: "La auténtica curada mexicana con limón y especias",
    accentColor: "#DC2626",
    items: [
      {
        id: "michelada_clasica",
        name: "Michelada",
        price: "5,50 €",
        numericPrice: 5.5,
        description:
          "Cerveza muy fría, jugo de lima, jugo maggi, perrins y valentina.",
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
      },
      {
        id: "chelada",
        name: "Chelada",
        price: "4,90 €",
        numericPrice: 4.9,
        description:
          "Cerveza muy fría servida con zumo de limón recién exprimido y borde con sal.",
      },
    ],
  },

  margaritas: {
    title: "MARGARITAS PARA EL ALMA",
    subtitle:
      "De las que se sirven con sonrisa... o con jarra. ¡Pide jarra de 1L o 1/2L para compartir!",
    accentColor: "#059669",
    items: [
      {
        id: "margarita_clasica",
        name: "Copa Margarita Clásica",
        price: "7,50 €",
        numericPrice: 7.5,
        description:
          "Tequila, triple seco y zumo de lima servido en copa encostrada de sal.",
      },
      {
        id: "margarita_sabores",
        name: "Copa Margarita de Sabores",
        price: "8,00 €",
        numericPrice: 8.0,
        description:
          "Elige tu sabor: Fresa, fruta de la pasión, coco, tamarindo o sandía.",
      },
      {
        id: "margarita_sabores_frozen",
        name: "Copa Margarita Frozen",
        price: "8,00 €",
        numericPrice: 8.0,
        description: "Fruta de la pasión, Mango, o Fresa.",
        recommended: true,
      },
      {
        id: "jarra_margarita_sabores_half",
        name: "1/2L Jarra Margarita Clásica / Frozen ",
        price: "13,90 €",
        numericPrice: 13.9,
        description: "Frozen: Fruta de la pasión, Mango, o Fresa.",
      },
      {
        id: "jarra_margarita_sabores_1l",
        name: "1L Jarra Margarita Clásica / Frozen ",
        price: "19,90 €",
        numericPrice: 19.9,
        description: "Frozen: Fruta de la pasión, Mango, o Fresa.",
      },
    ],
  },

  limonadas: {
    title: "LIMONADAS",
    subtitle: "Para los que se portan bien (o están en pausa)",
    accentColor: "#CA8A04",
    items: [
      {
        id: "dale_lemonade",
        name: "Dale Lemonade",
        price: "5,20 €",
        numericPrice: 5.2,
        description: "Zumo de limón, lima, vainilla y soda.",
      },
      {
        id: "berries_lemonade",
        name: "Berries Lemonade",
        price: "5,20 €",
        numericPrice: 5.2,
        description: "Limón, lima, naranja, frutos del bosque y soda.",
        recommended: true,
      },
      {
        id: "coco_lemonade",
        name: "Coco Lemonade",
        price: "5,20 €",
        numericPrice: 5.2,
        description: "Coco, lima, vainilla y soda.",
      },
      {
        id: "passion_lemonade",
        name: "Passion Lemonade",
        price: "5,20 €",
        numericPrice: 5.2,
        description: "Limón, azúcar líquida, fruta de la pasión y soda.",
      },
      {
        id: "watermelon_lemonade",
        name: "Watermelon Lemonade",
        price: "5,20 €",
        numericPrice: 5.2,
        description: "Sandía, limón, miel y soda.",
      },
    ],
  },
};
