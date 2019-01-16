import React from 'react';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {

  renderProducts = (products) => {
    return products.map((product) => {
      return <ProductRow product={product} key={product.name} />
    });
  }

  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const products = this.props.products.filter((product) => {
      const hasText = product.name.includes(filterText);
      const inStock = inStockOnly ? product.stocked : true;
      return hasText && inStock; 
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.renderProducts(products)}
        </tbody>
      </table>
    )
  }

}

export default ProductTable;