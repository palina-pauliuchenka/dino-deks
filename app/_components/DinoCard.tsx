import { Dino, Structure } from "../_data/dinos";

export default function DinoCard({ dino }: { dino: Dino }) {
    const dietColors = {
      herbivore: "bg-lime-500/20 text-lime-700",
      carnivore: "bg-red-500/20 text-red-700",
      omnivore: "bg-amber-500/20 text-amber-700",
    };
  
    const structureColors = {
      saurischia: "bg-green-800/20 text-green-900",
      ornithischia: "bg-yellow-700/20 text-yellow-900",
      maniraptoriforms: "bg-taupe-700/20 text-taupe-800",
      other:            "bg-gray-400/20 text-gray-700",
    };
  
    return (
      <div className="relative bg-taupe-50 cursor-pointer rounded-3xl p-6 pt-12 text-center shadow-sm hover:shadow-md transition-all">
        {/* Floating Image */}
        <div className="absolute -top-20 left-15 translate-x-1/2 animate-[float_3s_ease-in-out_infinite]">
          <img
            src={dino.image}
            alt={dino.name}
            className="w-40 h-40 object-contain"
          />
        </div>
          
        {/* ID */}
        <p className="text-gray-400 font-semibold">VC{dino.id}</p>
  
        {/* Name */}
        <h2 className="text-xl font-bold text-gray-800">{dino.name}</h2>
  
        {/* Tags */}
        <div className="flex justify-center gap-3 mt-4">
          <span
            className={`px-3 py-1 rounded-lg text-sm font-medium ${
              dietColors[dino.diet]
            }`}
          >
            {dino.diet}
          </span>
  
          <span
            className={`px-3 py-1 rounded-lg text-sm font-medium ${
              structureColors[dino.structure]
            }`}
          >
            {dino.structure}
          </span>
        </div>
      </div>
    );
  }