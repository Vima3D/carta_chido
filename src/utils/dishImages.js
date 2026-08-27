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
  aros_cebolla: "Aros_de_Cebolla.webp",
  burrito_cochinita_deluxe: "Burrito_Cochinita_Delux.webp",
  burrito_cochinita_pibil: "Burrito_Cochinita_Pibil.webp",
  burrito_costilla_jack: "Burrito_Costilla.webp",
  burrito_birria: "Burrito_de_Birria.webp",
  burrito_carnitas_carrillera: "Burrito_de_Carrillera.webp",
  burrito_chili_pollo: "Burrito_de_Chili_de_Pollo.webp",
  burrito_pollo_crujiente: "Burrito_de_Pollo_Crujiente.webp",
  burrito_tinga_pollo: "Burrito_de_Tiga_de_Pollo.webp",
  burrito_pulled_pork: "Burrito_Pulled_Pork.webp",
  burrito_vegano: "Burrito_Vegano.webp",
  chingonachos: "Chingonachos.webp",
  copa_coco_banana: "Copa_Cajeta.webp",
  copa_chocolate_blanco_pistacho: "Copa_Chocolate_Blanco_Pistacho.webp",
  copa_kindermania: "Copa_Kindermania.webp",
  degustacion_chingona: "Degustacion_Chingona.webp",
  degustacion_yucateca: "Degustacion_Yukateca.webp",
  desnudo_carnitas: "Desnudo_Carnitas.webp",
  desnudo_cochinita: "Desnudo_Cochinita.webp",
  desnudo_costilla: "Desnudo_Costilla.webp",
  desnudo_pato: "Desnudo_Pato.webp",
  desnudo_pollo_crujiente: "Desnudo_Pollo_Crujiente.webp",
  desnudo_pulled_pork: "Desnudo_Pulled.webp",
  desnudo_salmon: "Desnudo_Salmon.webp",
  desnudo_tinga_pollo: "Desnudo_Tinga_de_Pollo.webp",
  nachos_guacamoles: "Nachos_con_Guacamole.webp",
  nachos_gratinados_birria: "Nachos_Gratinados_Birria.webp",
  nachos_kimchi: "Nachos_Kimchi.webp",
  naxos: "Naxos.webp",
  nuggets_papas: "Nuggets_con_Papas.webp",
  patatas_brava_chipotle: "Papas_Bravas.webp",
  patacones_tinga: "Patacones_Pollo.webp",
  patacones_salmon: "Patacones_Salmon.webp",
  polvito_oreoguayo: "Polvito_Oreoguayo.webp",
  quesadilla_birria: "Quesadilla_Birria.webp",
  quesadilla_chili_pollo: "Quesadilla_Chili.webp",
  quesadilla_cochinita: "Quesadilla_Cochinita.webp",
  quesadilla_gobernador: "Quesadilla_Gobernador.webp",
  quesadilla_tinga_pollo: "Quesadilla_Tinga_de_Pollo.webp",
  quesadilla_vegetariana: "Quesadilla_Vegetariana.webp",
  quesapizza: "Quesapizza.webp",
  taco_birria_crunch: "Taco_Birria_Crunch.webp",
  taco_birria_ternera: "Taco_Birria_Dipping.webp",
  taco_chili_pollo: "Taco_Chili_de_Pollo.webp",
  taco_chistorra: "Taco_Chistorra.webp",
  taco_cochinita: "Taco_de_Cochinita.webp",
  taco_pollo_crujiente: "Taco_de_Pollo_Crujiente.webp",
  taco_pastor: "Taco_Pastor.webp",
  taco_pato_pekin: "Taco_Pato_Pekin.webp",
  taco_pulled_pork: "Taco_Pulled_Pork.webp",
  taco_smash_burger: "Taco_Smash_Burger.webp",
  taco_gambones: "Taco_Tempura_de_Gambones.webp",
  taco_tinga_pollo: "Taco_Tinga_de_Pollo.webp",
  taco_vegano: "Taco_Vegano.webp",
  tarta_nutella: "Tarta_de_Nutella.webp",
  tarta_queso_cajeta: "Tarta_de_Queso.webp",
  cheesecake_pistacho: "Tarta_Pistacho.webp",
  tres_leches: "Tarta_Tres_Leches.webp",
  tequenos_tamarindo: "Tequenos.webp",
  tiras_pollo_crujiente: "Tiras_de_Pollo.webp",
};

/**
 * Helper to get image from filename with fallback for extensions
 */
function findImageByFilename(filename) {
  if (!filename) return null;
  if (imageByFilename[filename]) return imageByFilename[filename];

  // Try replacing extension with .webp
  const baseName = filename.substring(0, filename.lastIndexOf("."));
  if (baseName && imageByFilename[`${baseName}.webp`]) {
    return imageByFilename[`${baseName}.webp`];
  }
  return null;
}

/**
 * Get image URL for a dish item
 * @param {Object} item
 * @returns {string|null} Image URL or null
 */
export function getDishImage(item) {
  if (!item) return null;

  // 1. Direct image property on item if set
  if (item.image) {
    const found = findImageByFilename(item.image);
    if (found) return found;
    return item.image;
  }

  // 2. Lookup in explicit dish image map by item ID
  if (item.id && DISH_IMAGE_MAP[item.id]) {
    const filename = DISH_IMAGE_MAP[item.id];
    const found = findImageByFilename(filename);
    if (found) return found;
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
