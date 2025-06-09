const SearchBar = ({ input, handleSearch }) => {
  return (
    <div className="searchBar">
      <h2>Search your favourite super hero</h2>
      <input
        type="text"
        placeholder="Find hero"
        value={input}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
