import React, { Component, Fragment } from 'react';
import TodoContainer from './components/TodoList/TodoContainer';
import Calendar from './components/planner/Calendar';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import SimpleStorage from 'react-simple-storage';

import './stylesheets/App.css';
import './stylesheets/calendar.css';
import './stylesheets/todo.css';

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
    if (this.state.TotalTimeLength >= 12) {
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
    
    if (updatedList.length === 0) {
      this.setState({
        TotalTimeLength: ''
      })
    } else {
      const currentTasks = [...updatedList];
      const gridTotals = [];
  
      currentTasks.forEach(task => 
         gridTotals.push(task.timeLength));
  
      const totalGridSize = [...gridTotals].reduce((accumulator, value) => accumulator + value);
      this.setState({ TotalTimeLength: totalGridSize});

    }
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
      DraggedTaskList: [],
      TotalTimeLength: ''
    });
  }

  render() {
    return (
      <Fragment>
        <SimpleStorage parent={this} />
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