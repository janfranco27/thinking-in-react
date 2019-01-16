import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';

const PRODUCTS = [
  {price: '$49.99', stocked: true, name: 'Football'},
  {price: '$9.99', stocked: true, name: 'Baseball'},
  {price: '$29.99', stocked: false, name: 'Basketball'},
  {price: '$99.99', stocked: true, name: 'iPod Touch'},
  {price: '$399.99', stocked: false, name: 'iPhone 5'},
  {price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class App extends Component {
  state = {
    filterText: '',
    inStockOnly: false,
  }

  handleFilterTextChange = (e) => {
    this.setState({
      filterText: e.target.value
    });
  }

  handleCheckboxChange = (e) => {
    this.setState({
      inStockOnly: e.target.value
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onCheckboxChange={this.handleCheckboxChange}
        />
        <ProductTable
          products={PRODUCTS}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

export default App;
