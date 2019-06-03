import React from 'react';

function SearchBar(props) {
    return (
      <form>
        <input 
          type="text" 
          value={props.value}
          onChange={props.onChange}
          placeholder="Search..." />
      </form>
    )
  }

  export default SearchBar;