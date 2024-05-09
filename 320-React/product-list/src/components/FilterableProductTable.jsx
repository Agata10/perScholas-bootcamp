import { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

const FilterableProductTable = ({ products }) => {
  const [filterText, setfilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div>
      <SearchBar filterText={filterText} inStockOnly={inStockOnly} />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
};

export default FilterableProductTable;
