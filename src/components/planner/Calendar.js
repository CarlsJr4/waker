import React, { Component } from 'react';
import TaskTarget from  './TaskTarget';

// NOTE: The Calendar component is a ReactDnD target

class Calendar extends Component {
  state = {
    DraggedTaskList: []
  }

  onDrop = (item) => {
    this.setState({
      DraggedTaskList: [...this.state.DraggedTaskList, 
        {id: item.id, body: item.body} 
      ]
    })
  }

  render() {
    return(
    <div className="calendar">
      <TaskTarget onDrop={this.onDrop} />
    </div>
    )
  }
}

export default Calendar;