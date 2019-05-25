import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

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
    </div>
    )
  }
}

export default DropTarget("TODO", calendarSpec, collect)(Calendar);