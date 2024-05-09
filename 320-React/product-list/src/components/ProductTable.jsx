import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTable = ({ products }) => {
  return (
    <table>
      <thead>
        <th>Name</th>
        <th>Price</th>
      </thead>
      <tbody></tbody>
      <ProductCategoryRow />
      <ProductRow />
    </table>
  );
};

export default ProductTable;
