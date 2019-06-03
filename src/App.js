import React, { Component, Fragment } from 'react';
import TodoContainer from './components/TodoList/TodoContainer';
import Calendar from './components/planner/Calendar';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd'

import './stylesheets/App.css';
import './stylesheets/calendar.css';
import './stylesheets/todo.css';

// Today's goals:
// Prevent tasks from going beyond 12:00pm
// When dropping items, get timeLength attributes of all items. 
// If they sum up to greater than max grid rows, do nothing and return an error. 
// Also do this when incrementing items 

// Future goals:
// 1. Edit list items?

class App extends Component {
  state = {
    DraggedTaskList: [],
    TotalTimeLength: ''
  }

  // Helper function to extract grid-template sizes from tasks, then update state
  updateCalendarLength = () => {
    const currentTasks = [...this.state.DraggedTaskList];
    const gridTotals = [];

    currentTasks.forEach(task => 
       gridTotals.push(task.timeLength));

    const totalGridSize = [...gridTotals].reduce((accumulator, value) => accumulator + value);
    this.setState({ TotalTimeLength: totalGridSize});
  }

  // Helper function to check if schedule size is large enough to cause CSS problems
  checkCalendarLength = () => {
    if (this.state.TotalTimeLength >= 13) {
      alert('Your morning schedule is full. Please delete or reduce times of tasks.');
      return true 
    }
  }

  // This function is called when dragging a task into the droppable area. 
  onDrop = (item) => {
    if (this.checkCalendarLength()) {
      return
    };
    const uuidv4 = require('uuid/v4');
    this.setState({
      DraggedTaskList: [...this.state.DraggedTaskList, 
        {id: uuidv4(), body: item.body, timeLength: item.timeLength} 
      ]
    })

    this.updateCalendarLength()
  }

  handleIncrement = (e) => {
    if (this.checkCalendarLength()) {
      return
    };
    const updatedList = [...this.state.DraggedTaskList]
    const index = e.target.parentNode.dataset.index;
    let item = updatedList[index]
    item.timeLength++;
    this.setState({DraggedTaskList: updatedList});
    this.updateCalendarLength();
  }

  handleDecrement = (e) => {
    if (this.checkCalendarLength()) {
      return
    };
    const updatedList = [...this.state.DraggedTaskList]
    const index = e.target.parentNode.dataset.index;
    let item = updatedList[index]
    if (item.timeLength === 1) {
      alert('Task cannot be less than 30 minutes');
      return;
    }
    item.timeLength--;
    this.setState({DraggedTaskList: updatedList});
    this.updateCalendarLength();
  }

  deleteTask = (e) => {
    const updatedList = [...this.state.DraggedTaskList]
    const index = e.target.parentNode.dataset.index;
    updatedList.splice(index, 1);
    this.setState({
      DraggedTaskList: updatedList
    });
    this.updateCalendarLength();
  }

  moveCard = (dragIndex, dropIndex) => {
    const sortedList = [...this.state.DraggedTaskList];
    const draggedItem = sortedList[dragIndex]
    sortedList.splice(dragIndex, 1);
    sortedList.splice(dropIndex, 0, draggedItem);
    this.setState({
      DraggedTaskList: sortedList
    })
  }

  handleClearSchedule = () => {
    this.setState({
      DraggedTaskList: []
    });
    this.updateCalendarLength();
  }

  render() {
    return (
      <Fragment>
        <TodoContainer 
          handleClearSchedule={this.handleClearSchedule}
           />
        <Calendar 
          taskList={this.state.DraggedTaskList} 
          onDrop={this.onDrop}
          handleDecrement={this.handleDecrement}
          handleIncrement={this.handleIncrement}
          deleteTask={this.deleteTask}
          moveCard={this.moveCard}
          />
      </Fragment>
    )
  }
}

export default DragDropContext(HTML5Backend)(App);