"use client";

import { Magnifier } from "@gravity-ui/icons";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);

    if (search.trim()) {
      params.set("search", search);
    } else {
      params.delete("search");
    }

    router.push(`/rooms?${params.toString()}`);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">

      <div>
        <h2 className="text-3xl font-bold">
          Browse Study Rooms
        </h2>

        <p className="text-gray-500">
          Find the perfect study room
        </p>
      </div>

      <div className="flex items-center gap-3">

        <div className="relative">

          <Magnifier className="absolute left-3 top-3 w-5 h-5 text-gray-400" />

          <input
            type="text"
            placeholder="Search room..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            className="border rounded-lg pl-10 pr-4 py-2 w-72 outline-none"
          />

        </div>

        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Search
        </button>

      </div>

    </div>
  );
};

export default SearchFilter;