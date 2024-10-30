"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { redirect } from "next/navigation";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  

  const goTo = () => {
    if (search == "") return;

    redirect(`/search?q=${search}`);
  };
  return (
    <div className="flex-1">
      <div className="gap-0 items-center hidden lg:flex">
        <Input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
          className="flex-1 h-[40px] border-r-0 rounded-r-none text-xl"
        />

        <Button
          disabled={search == ""}
          onClick={goTo}
          className="h-[40px] border-l-0 rounded-l-none"
        >
          Bul
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
