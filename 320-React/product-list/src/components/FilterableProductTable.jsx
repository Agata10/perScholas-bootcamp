import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

const FilterableProductTable = ({ products }) => {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
};

export default FilterableProductTable;
