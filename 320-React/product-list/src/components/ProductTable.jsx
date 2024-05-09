import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTable = ({ products }) => {
  const rows = [];
  let lastCategory = null;
  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} />);
    }
    lastCategory = product.category;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
      <ProductRow />
    </table>
  );
};

export default ProductTable;
