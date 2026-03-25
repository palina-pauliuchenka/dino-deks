import Image from "next/image";

type Diet = "herbivore" | "carnivore" | "omnivore";

type Structure =
  | "saurischia"
  | "ornithischia"
  | "maniraptoriforms"
  | "other";

interface Dino {
  id: number;
  name: string;
  diet: Diet;
  structure: Structure;
  image: string;
}

interface StatProps {
  label: string;
  value: string | number;
}

function Stat({ label, value }: StatProps) {
  return (
    <div className="bg-white rounded-xl py-3 shadow-sm">
      <p className="text-xs text-gray-400">{label}</p>
      <p className="font-semibold text-gray-700">{value}</p>
    </div>
  );
}

// --- Helpers ---
const descriptions: Record<string, string> = {
  "Tyrannosaurus Rex": "A massive apex predator with powerful jaws.",
  Triceratops: "A herbivore with three horns and a large frill.",
  Velociraptor: "A fast and intelligent hunter.",
};

function getDinoDescription(name: string): string {
  return (
    descriptions[name] ||
    "An ancient dinosaur from the prehistoric era."
  );
}

function getHeight(_name: string): string {
  return "Varies";
}

function getWeight(_name: string): string {
  return "Varies";
}

// --- Main Component ---
interface DinoDetailProps {
  dino: Dino;
}

export default function DinoDetail({ dino }: DinoDetailProps) {
  const dietColors: Record<Diet, string> = {
    herbivore: "bg-lime-500/20 text-lime-700",
    carnivore: "bg-red-500/20 text-red-700",
    omnivore: "bg-amber-500/20 text-amber-700",
  };

  const structureColors: Record<Structure, string> = {
    saurischia: "bg-green-800/20 text-green-900",
    ornithischia: "bg-yellow-700/20 text-yellow-900",
    maniraptoriforms: "bg-stone-700/20 text-stone-800",
    other: "bg-taupe-400/20 text-taupe-700",
  };

  return (
    <div className="bg-taupe-50 rounded-t-3xl h-full p-6 pt-12 mt-32 relative text-center shadow-md">
      
      {/* Image */}
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-80 h-80">
            <Image
                src={dino.image}
                alt={dino.name}
                fill
                sizes="320px"
                className="object-contain drop-shadow-xl"
                priority
            />
        </div>  

      {/* ID + Name */}
      <p className="text-gray-400 font-semibold mt-6">VC{dino.id}</p>
      <h2 className="text-2xl font-bold text-gray-800">{dino.name}</h2>

      {/* Tags */}
      <div className="flex justify-center gap-3 mt-4">
        <span className={`px-3 py-1 rounded-lg text-sm ${dietColors[dino.diet]}`}>
          {dino.diet}
        </span>
        <span className={`px-3 py-1 rounded-lg text-sm ${structureColors[dino.structure]}`}>
          {dino.structure}
        </span>
      </div>

      {/* Description */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold tracking-wide text-gray-500">
          DESCRIPTION
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          {getDinoDescription(dino.name)}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <Stat label="Height" value={getHeight(dino.name)} />
        <Stat label="Weight" value={getWeight(dino.name)} />
      </div>
    </div>
  );
}