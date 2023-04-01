import { useState } from "react";

export default function SearchBar({ searchFunction }:{searchFunction:any}) {
  const [query, setQuery] = useState("");

  function handleInputChange(event:any) {
    setQuery(event.target.value);
  }

  function handleSubmit(event:any) {
    event.preventDefault();
    searchFunction(query);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search news..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
