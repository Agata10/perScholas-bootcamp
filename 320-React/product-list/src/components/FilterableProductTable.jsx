import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

const FilterableProductTable = () => {
  return (
    <div>
      <SearchBar />
      <ProductTable />
    </div>
  );
};

export default FilterableProductTable;
