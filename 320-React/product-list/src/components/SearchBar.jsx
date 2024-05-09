const SearchBar = () => {
  return (
    <form style={{ display: 'flex', flexDirection: 'column' }}>
      <input type="search" placeholder="Search..." />
      <label htmlFor="stock">
        <input type="checkbox" id="stock" />
        Only show products in stocks
      </label>
    </form>
  );
};

export default SearchBar;
