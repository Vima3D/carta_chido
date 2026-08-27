// Utility to get dish image from src/assets/platos_img
const rawImages = import.meta.glob("../assets/platos_img/*", {
  eager: true,
  import: "default",
});

// Map of filename -> imported asset URL
const imageByFilename = {};
for (const path in rawImages) {
  const filename = path.split("/").pop();
  if (filename) {
    imageByFilename[filename] = rawImages[path];
  }
}

// Explicit mapping of item ID -> filename in platos_img
const DISH_IMAGE_MAP = {
  aros_cebolla: "Aros_de_Cebolla.png",
  burrito_cochinita_deluxe: "Burrito_Cochinita_Delux.jpg",
  burrito_cochinita_pibil: "Burrito_Cochinita_Pibil.png",
  burrito_costilla_jack: "Burrito_Costilla.png",
  burrito_birria: "Burrito_de_Birria.png",
  burrito_carnitas_carrillera: "Burrito_de_Carrillera.png",
  burrito_chili_pollo: "Burrito_de_Chili_de_Pollo.png",
  burrito_pollo_crujiente: "Burrito_de_Pollo_Crujiente.png",
  burrito_tinga_pollo: "Burrito_de_Tiga_de_Pollo.png",
  burrito_pulled_pork: "Burrito_Pulled_Pork.png",
  burrito_vegano: "Burrito_Vegano.png",
  chingonachos: "Chingonachos.jpg",
  copa_coco_banana: "Copa_Cajeta.jpg",
  copa_chocolate_blanco_pistacho: "Copa_Chocolate_Blanco_Pistacho.jpg",
  copa_kindermania: "Copa_Kindermania.png",
  degustacion_chingona: "Degustacion_Chingona.png",
  degustacion_yucateca: "Degustacion_Yukateca.png",
  desnudo_carnitas: "Desnudo_Carnitas.jpg",
  desnudo_cochinita: "Desnudo_Cochinita.png",
  desnudo_costilla: "Desnudo_Costilla.png",
  desnudo_pato: "Desnudo_Pato.png",
  desnudo_pollo_crujiente: "Desnudo_Pollo_Crujiente.png",
  desnudo_pulled_pork: "Desnudo_Pulled.jpg",
  desnudo_salmon: "Desnudo_Salmon.png",
  desnudo_tinga_pollo: "Desnudo_Tinga_de_Pollo.png",
  nachos_guacamoles: "Nachos_con_Guacamole.png",
  nachos_gratinados_birria: "Nachos_Gratinados_Birria.png",
  nachos_kimchi: "Nachos_Kimchi.png",
  naxos: "Naxos.png",
  nuggets_papas: "Nuggets_con_Papas.png",
  patatas_brava_chipotle: "Papas_Bravas.png",
  patacones_tinga: "Patacones_Pollo.png",
  patacones_salmon: "Patacones_Salmon.png",
  polvito_oreoguayo: "Polvito_Oreoguayo.png",
  quesadilla_birria: "Quesadilla_Birria.png",
  quesadilla_chili_pollo: "Quesadilla_Chili.png",
  quesadilla_cochinita: "Quesadilla_Cochinita.png",
  quesadilla_gobernador: "Quesadilla_Gobernador.png",
  quesadilla_tinga_pollo: "Quesadilla_Tinga_de_Pollo.png",
  quesadilla_vegetariana: "Quesadilla_Vegetariana.png",
  quesapizza: "Quesapizza.png",
  taco_birria_crunch: "Taco_Birria_Crunch.png",
  taco_birria_ternera: "Taco_Birria_Dipping.png",
  taco_chili_pollo: "Taco_Chili_de_Pollo.png",
  taco_chistorra: "Taco_Chistorra.jpg",
  taco_cochinita: "Taco_de_Cochinita.png",
  taco_pollo_crujiente: "Taco_de_Pollo_Crujiente.png",
  taco_pastor: "Taco_Pastor.png",
  taco_pato_pekin: "Taco_Pato_Pekin.png",
  taco_pulled_pork: "Taco_Pulled_Pork.png",
  taco_smash_burger: "Taco_Smash_Burger.png",
  taco_gambones: "Taco_Tempura_de_Gambones.png",
  taco_tinga_pollo: "Taco_Tinga_de_Pollo.png",
  taco_vegano: "Taco_Vegano.png",
  tarta_nutella: "Tarta_de_Nutella.png",
  tarta_queso_cajeta: "Tarta_de_Queso.png",
  cheesecake_pistacho: "Tarta_Pistacho.png",
  tres_leches: "Tarta_Tres_Leches.png",
  tequenos_tamarindo: "Tequenos.png",
  tiras_pollo_crujiente: "Tiras_de_Pollo.png",
};

/**
 * Get image URL for a dish item
 * @param {Object} item
 * @returns {string|null} Image URL or null
 */
export function getDishImage(item) {
  if (!item) return null;

  // 1. Direct image property on item if set
  if (item.image) {
    if (imageByFilename[item.image]) {
      return imageByFilename[item.image];
    }
    return item.image;
  }

  // 2. Lookup in explicit dish image map by item ID
  if (item.id && DISH_IMAGE_MAP[item.id]) {
    const filename = DISH_IMAGE_MAP[item.id];
    if (imageByFilename[filename]) {
      return imageByFilename[filename];
    }
  }

  // 3. Fallback: normalized search across filenames
  const normalize = (str) =>
    str
      ?.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/g, "");

  const itemIdNorm = normalize(item.id);
  const itemNameNorm = normalize(item.name);

  for (const filename in imageByFilename) {
    const nameWithoutExtNorm = normalize(filename.substring(0, filename.lastIndexOf(".")));
    if (
      (itemIdNorm && nameWithoutExtNorm === itemIdNorm) ||
      (itemNameNorm && nameWithoutExtNorm === itemNameNorm)
    ) {
      return imageByFilename[filename];
    }
  }

  return null;
}
