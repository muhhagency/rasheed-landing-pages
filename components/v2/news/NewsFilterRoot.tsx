"use client";

import { createContext, useState } from "react";
import type { FilterKey } from "@/content/v2/news";

export const NewsFilterContext = createContext<{ filter: FilterKey; setFilter: (f: FilterKey) => void }>({
  filter: "all",
  setFilter: () => {},
});

// Holds the active filter and exposes it as data-filter; news.css hides
// every [data-kinds] block that does not include it. Without JS all shows.
export function NewsFilterRoot({ children }: { children: React.ReactNode }) {
  const [filter, setFilter] = useState<FilterKey>("all");
  return (
    <NewsFilterContext.Provider value={{ filter, setFilter }}>
      <div className="nw-root" data-filter={filter}>
        {children}
      </div>
    </NewsFilterContext.Provider>
  );
}
