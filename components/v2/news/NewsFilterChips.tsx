"use client";

import { useContext } from "react";
import type { FilterKey } from "@/content/v2/news";
import { NewsFilterContext } from "./NewsFilterRoot";

// Toggle chips (All, Product, Stores, Events) that filter the page.
export function NewsFilterChips({ label, filters }: { label: string; filters: { key: FilterKey; label: string }[] }) {
  const { filter, setFilter } = useContext(NewsFilterContext);
  return (
    <div className="nw-chips" role="group" aria-label={label}>
      {filters.map((f) => (
        <button
          key={f.key}
          type="button"
          className="nw-chip"
          aria-pressed={filter === f.key}
          onClick={() => setFilter(f.key)}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
