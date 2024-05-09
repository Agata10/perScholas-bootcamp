const SearchBar = ({ filterText, inStockOnly }) => {
  return (
    <form style={{ display: 'flex', flexDirection: 'column' }}>
      <input type="search" placeholder="Search..." value={filterText} />
      <label htmlFor="stock">
        <input type="checkbox" id="stock" checked={inStockOnly} />
        Only show products in stocks
      </label>
    </form>
  );
};

export default SearchBar;
