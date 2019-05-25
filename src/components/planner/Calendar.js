import React, { Component } from 'react';
import TaskTarget from  './TaskTarget';

// NOTE: The Calendar component is a ReactDnD target

class Calendar extends Component {
  render() {
    return(
    <div className="calendar">
      <TaskTarget />
      <TaskTarget />
    </div>
    )
  }
}

export default Calendar;