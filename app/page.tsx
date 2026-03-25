"use client"
import { useState, useMemo } from "react";

import { Dino, dinos } from "./_data/dinos";
import { items, colorStyles } from "./_data/items";

import DinoCard from "./_components/DinoCard";
import DinoDetail from "./_components/DinoDetail";
import EmptyDinoState from "./_components/EmptyDinoState";


export default function Home() {
  const [selectedDino, setSelectedDino] = useState<Dino | null>(null);;
  const [search, setSearch] = useState("");
  const [activeFilters, setActiveFilters] = useState(new Set<string>());

  const filteredDinos = useMemo(() => {
    return dinos.filter((dino) => {
      const matchesSearch = dino.name.toLowerCase().includes(search.toLowerCase());
  
      if (activeFilters.size === 0) return matchesSearch;
  
      const dietFilters      = [...activeFilters].filter(f => f.startsWith("diet:"))     .map(f => f.split(":")[1]);
      const structureFilters = [...activeFilters].filter(f => f.startsWith("structure:")).map(f => f.split(":")[1]);
  
      const matchesDiet      = dietFilters.length      === 0 || dietFilters.includes(dino.diet);
      const matchesStructure = structureFilters.length  === 0 || structureFilters.includes(dino.structure);
  
      return matchesSearch && matchesDiet && matchesStructure;
    });
  }, [search, activeFilters]);

  const toggleFilter = (filterKey: string, filterValue: string) => {
    const key = `${filterKey}:${filterValue}`;
    setActiveFilters((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };
  
  const isActive = (filterKey: string, filterValue: string) => activeFilters.has(`${filterKey}:${filterValue}`);

  return (
    <>
    <div className="h-screen flex flex-col max-w-7xl mx-auto px-4 py-3 ">
      <nav className="shrink-0 h-[84px]">
        <div className="bg-taupe-50 rounded-2xl shadow-sm p-6">
          <ul className="flex items-center justify-between gap-6 text-neutral-500 font-bold">
            {items.map((item, index) => {
              const active = isActive(item.filterKey, item.filterValue);
              return (
                <li
                  key={index}
                  onClick={() => toggleFilter(item.filterKey, item.filterValue)}
                  className={`group flex items-center gap-2 cursor-pointer transition-all px-3 py-1 rounded-xl
                    ${active ? colorStyles[item.color].text : "hover:text-gray-800"}`}
                >
                  <span className={`text-lg transition-all
                    ${active ? colorStyles[item.color].text : "brightness-10 opacity-50 group-hover:opacity-90"}`}>
                    {item.icon}
                  </span>
                  <span className="text-xl">{item.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <div className={"grid grid-cols-3 gap-4 mt-8 flex-1"}>
        {/* LEFT: Dino Grid */}
        <div className="lg:col-span-2">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search your Kinder Dinosaurs!"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-taupe-50 rounded-xl p-4 pr-14 font-light text-gray-800 shadow-sm outline-none focus:ring-2 focus:ring-blue-400"
              />

              {/* Icon */}
              <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-red-500 shadow-md shadow-red-300 rounded-lg w-8 h-8 flex items-center justify-center">
                <span className="filter brightness-0 invert text-lg leading-none">
                  🦖
                </span>
              </span>
            </div>
          </div>

          {/* Active filter pills */}
          {activeFilters.size > 0 && (
            <div className="flex items-center gap-2 mt-12 flex-wrap">
              <span className="text-sm text-neutral-600">Filtering by:</span>
              {[...activeFilters].map((f) => {
                const [key, val] = f.split(":");  // this line was lost
                const item = items.find(i => i.filterKey === key && i.filterValue === val);
                if (!item) return null;
                const styles = colorStyles[item.color];
                return (
                  <button
                    key={f}
                    onClick={() => toggleFilter(key, val)}
                    className={`flex items-center gap-1 text-sm px-2 py-0.5 rounded-full ring-1 transition-all ${styles.text} ${styles.bg} ${styles.ring}`}
                  >
                    {item.icon} {item.label}
                    <span className="ml-1 opacity-60 hover:opacity-100">✕</span>
                  </button>
                );
              })}
              <button
                onClick={() => { setActiveFilters(new Set()); setSelectedDino(null); }}
                className="text-sm text-neutral-600 hover:text-neutral-900 underline ml-1 cursor-pointer"
              >
                Clear all
              </button>
            </div>
          )}

          <div className="lg:col-span-2 grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-16 mt-18 pb-4">
            {filteredDinos.map((dino) => (
              <div key={dino.id} onClick={() => setSelectedDino(dino)}>
                <DinoCard dino={dino} />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Detail Panel */}
        <div className="lg:col-span-1">
          <div className="sticky top-[188px] h-[calc(100vh-188px)]">
            {selectedDino ? (
              <DinoDetail dino={selectedDino} />
            ) : (
              <EmptyDinoState />
            )}
          </div>
        </div>
      </div>
    </div>  
    </>
    
  );
}
