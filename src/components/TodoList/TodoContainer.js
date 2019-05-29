import React, { Component } from 'react';
import SearchBar from './Searchbar';
import TaskHolder from './Tasklist';
import CreateItem from './Add';

const taskItems = [
    {
      id: 1,
      length: 1,
      body: 'Free time'
    }
  ]
  
  
  class TodoContainer extends Component {
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
        taskList: [{id: uuidv4(), body: this.state.newTaskName, length: 1}, ...this.state.taskList],
        newTaskName: ''
      });
    }
  
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
  
  export default TodoContainer;
  