import React, { Component } from 'react';
import SearchBar from './components/search';
import TaskHolder from './components/tasks';
import './App.css';

// At first, render static data only!

// Today's goals:
// 1. Add to-do items using input 

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

function CreateItem(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        placeholder="Add items here..."
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

class FilterList extends Component {
  state = {
    taskList: taskItems,
    searchTerm: '',
    newTaskName: '',
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value});
  }

  handleMake = (e) => {
    this.setState({newTaskName: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      taskList: [{id: 4, body: this.state.newTaskName}, ...this.state.taskList],
      newTaskName: ''
    });
  }

  render() {
    return (
      <div>
        <SearchBar 
          value={this.state.searchTerm}
          onChange={this.handleChange} 
          />
        <CreateItem 
          onSubmit={this.handleSubmit}
          onChange={this.handleMake}
          value={this.state.newTaskName}
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
