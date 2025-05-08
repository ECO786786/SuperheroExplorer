import { memo } from "react";

// TODO: Add debouncing for search input to improve performance
const SearchBar = ({ input, handleSearch }) => {
  // TODO: Add clear button for better UX

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search your favourite super hero"
        value={input}
        onChange={handleSearch}
      />
    </div>
  );
};

// TODO: Consider using React.memo since this component rarely needs to update
export default SearchBar;
