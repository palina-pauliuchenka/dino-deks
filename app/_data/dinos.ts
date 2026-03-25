export type Diet = "herbivore" | "carnivore" | "omnivore";
export type Structure = "saurischia" | "ornithischia" | "maniraptoriforms" | "other";

export interface Dino {
  id: number;
  name: string;
  diet: Diet;
  structure: Structure;
  image: string;
}

export const dinos: Dino[] = [
  { id: 100, name: "Ankylosaurus",       diet: "herbivore", structure: "ornithischia",    image: "/ankylosaurus_natoons_dinos_VC100.webp"       },
  { id: 110, name: "Brachiosaurus",      diet: "herbivore", structure: "saurischia",      image: "/brachiosaurus_natoons_dinos_VC110.webp"      },
  { id: 111, name: "Dilophosaurus",      diet: "carnivore", structure: "saurischia",      image: "/dilophosaurus_natoons_dinos_VC111.webp"      },
  { id: 108, name: "Dinosaurus",         diet: "omnivore",  structure: "saurischia",      image: "/dinosaurus_natoons_dinos_VC108.webp"         },
  { id: 112, name: "Giganotosaurus",     diet: "carnivore", structure: "saurischia",      image: "/giganerosaurus_natoons_dinos_VC112.webp"     },
  { id: 113, name: "Lambeosaurus",       diet: "herbivore", structure: "ornithischia",    image: "/lambeosaurus_natoons_dinos_VC113.webp"       },
  { id: 114, name: "Pachycephalosaurus", diet: "herbivore", structure: "ornithischia",    image: "/pachiccephalosaurus_natoons_dinos_VC114.webp" },
  { id: 103, name: "Parasaurolophus",    diet: "herbivore", structure: "ornithischia",    image: "/parasaurolophus_natoons_dinos_VC103.webp"    },
  { id: 123, name: "Plesiosaurus",       diet: "carnivore", structure: "other",           image: "/plesiosaurus_natoons_dinos_VC123.webp"       },
  { id: 101, name: "Pterodactyle",       diet: "carnivore", structure: "other",           image: "/pterodactyle_natoons_dinos_VC101.webp"       },
  { id: 102, name: "Spinosaurus",        diet: "carnivore", structure: "saurischia",      image: "/spinosaurus_natoons_dinos_VC102.webp"        },
  { id: 97,  name: "Stegosaurus",        diet: "herbivore", structure: "ornithischia",    image: "/stegosaurus_natoons_dinos_VC097.webp"        },
  { id: 98,  name: "Sinoceratops",       diet: "herbivore", structure: "ornithischia",    image: "/synocerotops_natoons_dinos_VC098.webp"       },
  { id: 99,  name: "Triceratops",        diet: "herbivore", structure: "ornithischia",    image: "/triceratops_natoons_dinos_VC099.webp"        },
  { id: 122, name: "Tyrannosaurus Rex",  diet: "carnivore", structure: "saurischia",      image: "/tyrannosaurus_rex_natoons_dinos_VC122.webp"  },
  { id: 109, name: "Velociraptor",       diet: "carnivore", structure: "maniraptoriforms",image: "/velociraptor_natoons_dinos_VC109.webp"       },
];