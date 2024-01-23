// components/SearchBar.js
import React, { useState } from "react";
import { useRouter } from "next/router";

const SearchBar = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Redirect ke halaman pencarian dengan query pencarian
    router.push(`/search-result?query=${searchQuery}`);
  };

  return (
    <div className="flex flex-col absolute bottom-[30px] w-[280px] gap-[15px]">
      <input
        type="text"
        id="search"
        placeholder="Artist / Album / Title"
        className="Rectangle focus:outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="Btn_search" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
