import React, { Component } from 'react';
import TaskTarget from  './TaskTarget';

// THEN: Include a way to delete task items
// Draw dotted lines somehow
// Save the state to local history somehow?
// Make the app look real pretty!

class Calendar extends Component {
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

  moveCard = (dragIndex, dropIndex) => {
    const sortedList = [...this.state.DraggedTaskList];
    const draggedItem = sortedList[dragIndex]
    sortedList.splice(dragIndex, 1);
    sortedList.splice(dropIndex, 0, draggedItem);
    this.setState({
      DraggedTaskList: sortedList
    })
  }

  render() {
    return(
    <div className="calendar">
     <section className="calendar__times">
       <h1>6:00</h1>
       <h1>6:30</h1>
       <h1>7:00</h1>
       <h1>7:30</h1>
       <h1>8:00</h1>
       <h1>8:30</h1>
       <h1>9:00</h1>
       <h1>9:30</h1>
       <h1>10:00</h1>
       <h1>10:30</h1>
       <h1>11:00</h1>
       <h1>11:30</h1>
       <h1>12:00</h1>
     </section>
     
      <TaskTarget 
      onDrop={this.onDrop}
      taskList={this.state.DraggedTaskList} 
      moveCard={this.moveCard}
      incrementHeight={this.handleIncrement}
      decrementHeight={this.handleDecrement}
      />
    </div>
    )
  }
}

export default Calendar;