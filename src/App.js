import React, { Component } from 'react';
import './App.css';

// At first, render static data only!

// Today's goals:
// 1. Create static filterable list
// 2. Use map to render the list
// 3. Refactor into multiple components if needed 

const taskItems = [
  {
    id: 1,
    body: 'Take out the trash'
  },
  {
    id: 2,
    body: 'Do the dishes'
  },
  {
    id: 3,
    body: 'Study'
  }
]

function SearchBar() {
  return (
    <input type="text" placeholder="Search a task..."></input>
  )
}

function TaskHolder(props) {
  // const filteredList = props.taskList;

  const tasks = props.taskList.map(task =>
    <li key={task.id}>
      {task.body}
    </li>
  );

  return (
    <ul>
      {tasks}
    </ul>
  )
}

class FilterList extends Component {
  state = {
    taskList: taskItems
  }

  render() {
    return (
      <div>
        <SearchBar />
        <TaskHolder taskList={taskItems} />
      </div>
    );
  }
}

export default FilterList;
