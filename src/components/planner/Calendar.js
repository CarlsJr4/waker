import React, { Component } from 'react';
import TaskTarget from  './TaskTarget';

// NOTE: The Calendar component is a ReactDnD target
// NEXT TASK: Organize the calendar into a grid with times
// THEN: Include buttons to increase and decrease the sizes of the tasks
// THEN: Include a way to delete task items

class Calendar extends Component {
  state = {
    DraggedTaskList: [
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
     <section className="calendar__times">
       <div>6:00</div>
       <div>6:30</div>
       <div>7:00</div>
       <div>7:30</div>
       <div>8:00</div>
       <div>8:30</div>
       <div>9:00</div>
       <div>9:30</div>
       <div>10:00</div>
       <div>10:30</div>
       <div>11:00</div>
       <div>11:30</div>
       <div>12:00</div>
     </section>
     
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