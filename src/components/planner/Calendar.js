import React, { Component } from 'react';
import TaskTarget from  './TaskTarget';

// NOTE: The Calendar component is a ReactDnD target

class Calendar extends Component {
  state = {
    DraggedTaskList: []
  }

  onDrop = (item) => {
    const uuidv4 = require('uuid/v4');
    this.setState({
      DraggedTaskList: [...this.state.DraggedTaskList, 
        {id: uuidv4(), body: item.body} 
      ]
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

  render() {
    return(
    <div className="calendar">
      <TaskTarget 
      onDrop={this.onDrop}
      taskList={this.state.DraggedTaskList} 
      moveCard={this.moveCard}
      />
    </div>
    )
  }
}

export default Calendar;