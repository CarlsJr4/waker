import React, { Component } from 'react';
import SearchBar from './components/search'
import TaskHolder from './components/tasks'
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

class FilterList extends Component {
  state = {
    taskList: taskItems,
    searchTerm: ''
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value});
  }

  render() {
    return (
      <div>
        <SearchBar 
          value={this.state.searchTerm}
          onChange={this.handleChange} 
          />
        <TaskHolder 
          taskList={this.state.taskList} 
          searchTerm={this.state.searchTerm}
          />
      </div>
    );
  }
}

export default FilterList;
