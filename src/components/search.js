import React from 'react';

function SearchBar(props) {
    return (
      <input 
        type="text" 
        value={props.value}
        onChange={props.onChange}
        placeholder="Search a task..." />
    )
  }

  export default SearchBar;