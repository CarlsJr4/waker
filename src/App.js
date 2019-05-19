import React, { Component } from 'react';
import SearchBar from './components/search';
import TaskHolder from './components/tasks';
import CreateItem from './components/createitem';
import './App.css';

// Today's goals:
// 1. Delete list items
// 2. Add easy buttons to delete input?

// Future goals:
// 1. Edit list items
// 2. Change color of list items
// 3. Add cursor: pointer to all list items 
// 4. Favorite tasks (put them to the top)

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
    searchTerm: '',
    newTaskName: '',
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value});
  }

  handleMake = (e) => {
    this.setState({newTaskName: e.target.value})
  }

  handleDelete = (e) => {
    this.setState({taskList:
      this.state.taskList.filter(item =>
        item.id.toString() !== e.target.dataset.key.toString()) // We use .toString() so we can use !== 
    })
  }

  handleSubmit = (e) => {
    if (!this.state.newTaskName.length) {
      e.preventDefault();
      alert("You can't submit an empty task.");
      return
    }

    e.preventDefault();
    const uuidv4 = require('uuid/v4');
    this.setState({
      taskList: [{id: uuidv4(), body: this.state.newTaskName}, ...this.state.taskList],
      newTaskName: ''
    });
  }

  // How can we make clicking the trash icon delete the item from the state?
  // The task items live in this component
  // When clicked, get ID of item, filter all list items that don't match the ID 
  // Add click event listener to each trash can 
  // Add data-key attribute to each trash can?

  render() {
    return (
      <div>
       <h1>Plan your morning!</h1>
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
          onClick={this.handleDelete}
          />
      </div>
    );
  }
}

export default FilterList;
