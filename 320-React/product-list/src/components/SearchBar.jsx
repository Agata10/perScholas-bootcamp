const SearchBar = ({
  filterText,
  inStockOnly,
  setFilterText,
  setInStockOnly,
}) => {
  return (
    <form style={{ display: 'flex', flexDirection: 'column' }}>
      <input
        type="search"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <label htmlFor="stock">
        <input
          type="checkbox"
          id="stock"
          checked={inStockOnly}
          onChange={(e) => setInStockOnly(e.target.value)}
        />
        Only show products in stocks
      </label>
    </form>
  );
};

export default SearchBar;
