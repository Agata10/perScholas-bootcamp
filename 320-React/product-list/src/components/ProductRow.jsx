const ProductRow = ({ product, price }) => {
  return (
    <tr>
      <td>{product}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
