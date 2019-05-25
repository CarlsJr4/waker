import React, { Component } from 'react';
import TaskTarget from  './TaskTarget';
import { DropTarget } from 'react-dnd';

// NOTE: The Calendar component is a ReactDnD target

const calendarSpec = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    console.log(item);
    // When dropping the list item, we need to render it in the calendar somehow
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
  }
}

class Calendar extends Component {
  render() {
    const { connectDropTarget } = this.props;
    return connectDropTarget(
    <div className="calendar">
      <TaskTarget />
      <TaskTarget />
    </div>
    )
  }
}

export default DropTarget("TODO", calendarSpec, collect)(Calendar);