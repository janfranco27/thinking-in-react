import React from 'react';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

class ProductTable extends React.Component {

  renderCategory = (category) => {
    const products = this.props.products[category];
    return (
      <React.Fragment>
        <ProductCategoryRow category={category} />
        {
          products.map((product) => {
            return <ProductRow product={product} key={product.name} />
          })
        }
      </React.Fragment>
    );
  }

  renderBody = () => {
    const products = this.props.products;
    const categories = Object.keys(products);
    return categories.map((category) => this.renderCategory(category));
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.renderBody()}
        </tbody>
      </table>
    )
  }

}

export default ProductTable;