import React from 'react';

class SearchBar extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    const onFilterTextChange = this.props.onFilterTextChange;
    const onCheckboxChange = this.props.onCheckboxChange;

    return (
      <form>
        <input type="text" placeholder="Search" value={filterText} onChange={onFilterTextChange} />
        <p>
          <input type="checkbox" checked={inStockOnly} onChange={onCheckboxChange} />
          Show products in stock
        </p>
      </form>
    );
  }
}

export default SearchBar;