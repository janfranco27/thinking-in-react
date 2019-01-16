import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search" />
        <p>
          <input type="checkbox" />
          Show products in stock
        </p>
      </form>
    );
  }
}

export default SearchBar;