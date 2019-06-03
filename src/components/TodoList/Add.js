import React from 'react';

function Add(props) {
    return (
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          placeholder="Add items..."
          onChange={props.onChange}
          value={props.value}
          />
        <input 
          type="submit"
          value="Create"
           />
      </form>
    )
  }

  export default Add;