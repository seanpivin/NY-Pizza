import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handelSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handelSubmit}>
      <input
        type="text"
        placeholder="Search Order Number"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-stone-500 px-4 py-2 mb-4 rounded-md w-28 sm:w-64 sm:focus:w-72 text-sm md:text-base placeholder:text-stone-500 duration-300 foucs:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-2"
      />
    </form>
  );
}

export default SearchOrder;
