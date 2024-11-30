"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { redirect } from "next/navigation";
import { SearchIcon } from "lucide-react";

const SearchBar = () => {
  const [search, setSearch] = useState<string>("");

  const goTo = () => {
    if (search === "") return;

    redirect(`/search?q=${search}`);
  };

  return (
    <div className="flex-1 min-h-full">
      <div className="gap-0 items-center hidden lg:flex">
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") goTo(); // Trigger on Enter key press
          }}
          value={search}
          className="flex-1 min-h-[40px] h-full border-r-0 rounded-r-none text-2xl"
        />

        <Button
          disabled={search === ""}
          onClick={goTo}
          className="min-h-[40px] h-full border-l-0 rounded-l-none"
        >
          <SearchIcon />
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
