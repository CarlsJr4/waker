import React, { Component } from 'react';
import './App.css';

// At first, render static data only!

// Today's goals:
// 1. Create static filterable list
// 2. Use map to render the list
// 3. Refactor into multiple components if needed 

// const taskItems = [
//   {
//     id: 1,
//     body: 'one'
//   },
//   {
//     id: 2,
//     body: 'two'
//   },
//   {
//     id: 3,
//     body: 'three'
//   }
// ]

function SearchBar() {
  return (
    <input type="text" placeholder="Search a task..."></input>
  )
}

function TaskHolder() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}

class FilterList extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <TaskHolder />
      </div>
    );
  }
}

export default FilterList;
