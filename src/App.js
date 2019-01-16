import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';

const PRODUCTS = {
  'Sporting Goods': [
    {price: '$49.99', stocked: true, name: 'Football'},
    {price: '$9.99', stocked: true, name: 'Baseball'},
    {price: '$29.99', stocked: false, name: 'Basketball'}
  ],
  'Electronics': [
    {price: '$99.99', stocked: true, name: 'iPod Touch'},
    {price: '$399.99', stocked: false, name: 'iPhone 5'},
    {price: '$199.99', stocked: true, name: 'Nexus 7'}
  ]
};

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={PRODUCTS} />
      </div>
    );
  }
}

export default App;
