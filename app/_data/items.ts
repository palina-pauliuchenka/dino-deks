export interface NavItem {
  label: string;
  icon: string;
  color: string;
  filterKey: "diet" | "structure";
  filterValue: string;
}

export const items: NavItem[] = [
  { label: "Herbivores",       icon: "🌿", color: "lime",   filterKey: "diet",      filterValue: "herbivore"        },
  { label: "Carnivores",       icon: "🥩", color: "red",    filterKey: "diet",      filterValue: "carnivore"        },
  { label: "Omnivores",        icon: "🥘", color: "amber",  filterKey: "diet",      filterValue: "omnivore"         },
  { label: "Saurischia",       icon: "🦎", color: "green",  filterKey: "structure", filterValue: "saurischia"       },
  { label: "Ornithischia",     icon: "🦤", color: "yellow", filterKey: "structure", filterValue: "ornithischia"     },
  { label: "Maniraptoriforms", icon: "🦅", color: "taupe",  filterKey: "structure", filterValue: "maniraptoriforms" },
];

export const colorStyles: Record<string, { text: string; bg: string; ring: string }> = {
  lime:   { text: "text-lime-600",   bg: "bg-lime-100",   ring: "ring-lime-400"   },
  red:    { text: "text-red-600",    bg: "bg-red-100",    ring: "ring-red-400"    },
  amber:  { text: "text-amber-600",  bg: "bg-amber-100",  ring: "ring-amber-400"  },
  green:  { text: "text-green-800",  bg: "bg-green-100",  ring: "ring-green-400"  },
  yellow: { text: "text-yellow-700", bg: "bg-yellow-100", ring: "ring-yellow-400" },
  taupe:  { text: "text-stone-700",  bg: "bg-stone-100",  ring: "ring-stone-400"  },
};