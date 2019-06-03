import React, { Component, Fragment } from 'react';
import TodoContainer from './components/TodoList/TodoContainer';
import Calendar from './components/planner/Calendar';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd'

import './stylesheets/App.css';
import './stylesheets/calendar.css';
import './stylesheets/todo.css';

// Today's goals:


// Future goals:
// 1. Edit list items?

class App extends Component {
  state = {
    DraggedTaskList: []
  }

  onDrop = (item) => {
    const uuidv4 = require('uuid/v4');
    this.setState({
      DraggedTaskList: [...this.state.DraggedTaskList, 
        {id: uuidv4(), body: item.body, timeLength: item.timeLength} 
      ]
    })
  }

  handleIncrement = (e) => {
    const updatedList = [...this.state.DraggedTaskList]
    const index = e.target.parentNode.dataset.index;
    let item = updatedList[index]
    item.timeLength++;
    this.setState({DraggedTaskList: updatedList})
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
    this.setState({DraggedTaskList: updatedList})
  }

  deleteTask = (e) => {
    const updatedList = [...this.state.DraggedTaskList]
    const index = e.target.parentNode.dataset.index;
    updatedList.splice(index, 1);
    this.setState({
      DraggedTaskList: updatedList
    })
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
    })
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