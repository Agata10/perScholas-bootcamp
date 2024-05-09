const SearchBar = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <input type="search" placeholder="Search..." />
      <div>
        <input type="checkbox" id="stock" />
        <label htmlFor="stock">Only show products in stocks </label>
      </div>
    </div>
  );
};

export default SearchBar;
