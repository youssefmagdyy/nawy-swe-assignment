"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useMemo, useEffect } from "react";

export default function SearchBar() {
  
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState({
    unitName: "",
    unitNumber: "",
    project: "",
    bedrooms: "",
    bathrooms: "",
    minPrice: "",
    maxPrice: "",
  });

useEffect(() => {
  const paramsObj = Object.fromEntries(searchParams.entries());
  setFilters({
    ...filters,
    ...paramsObj,
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleChangeNumbers = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "" || Number(value) >= 1) {
         setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleSearch = () => {
    const params : Record<string, string> = {};
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== "") params[key] = value;
    });
    const queryString = new URLSearchParams(params).toString();
    router.push(`/?${queryString}`); // Triggers the searching
  };

  const handleClear = () => {
    setFilters({
      unitName: "",
      unitNumber: "",
      project: "",
      bedrooms: "",
      bathrooms: "",
      minPrice: "",
      maxPrice: "",
    });
    router.push(`/`);
  };

  const activeFilters = useMemo(() => {
    return Object.values(filters).some((v) => v !== "");
  }, [filters]);

  return (
    <div className="bg-white shadow-sm rounded-lg p-4 mb-6 flex flex-wrap gap-3 items-end">
      <input
        type="text"
        name="unitName"
        placeholder="Unit name"
        value={filters.unitName}
        onChange={handleChange}
        className="border rounded-md p-2 flex-1 min-w-[150px]"
      />
        <input
        type="text"
        name="unitNumber"
        placeholder="Unit number"
        value={filters.unitNumber}
        onChange={handleChange}
        className="border rounded-md p-2 flex-1 min-w-[150px]"
      />
      <input
        type="text"
        name="project"
        placeholder="Project"
        value={filters.project}
        onChange={handleChange}
        className="border rounded-md p-2 flex-1 min-w-[150px]"
      />
      <input
        type="number"
        name="bedrooms"
        min={1}
        placeholder="Bedrooms"
        value={filters.bedrooms}
        onChange={handleChangeNumbers}
        className="border rounded-md p-2 w-[100px]"
      />
      <input
        type="number"
        name="bathrooms"
        min={1}
        placeholder="Bathrooms"
        value={filters.bathrooms}
        onChange={handleChangeNumbers}
        className="border rounded-md p-2 w-[100px]"
      />
      <input
        type="number"
        name="minPrice"
        min={1}
        placeholder="Min Price"
        value={filters.minPrice}
        onChange={handleChangeNumbers}
        className="border rounded-md p-2 w-[120px]"
      />
      <input
        type="number"
        name="maxPrice"
        min={1}
        placeholder="Max Price"
        value={filters.maxPrice}
        onChange={handleChangeNumbers}
        className="border rounded-md p-2 w-[120px]"
      />

      <div className="flex gap-2">
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700"
        >
          Search
        </button>
        <button
          disabled={!activeFilters}
          onClick={handleClear}
          className={`border rounded-md px-4 py-2 transition
          ${
            !activeFilters
              ? "border-gray-200 text-gray-400 bg-gray-50"
              : "border-gray-300 text-gray-600 hover:bg-gray-100"
          }`}
          >
          Reset Filters
        </button>
      </div>
    </div>
  );
}
