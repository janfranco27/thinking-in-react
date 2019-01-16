import React from 'react';

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    
    return (
      <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    )
  }
}

export default ProductRow;
