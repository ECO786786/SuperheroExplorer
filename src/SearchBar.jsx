const SearchBar = ({ input, handleSearch }) => {
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

export default SearchBar;
