import React, { Component } from 'react'
import { DragSource } from 'react-dnd';


// React DnD spec object
const taskSpec = {
    beginDrag(props, monitor, component) {
      const item = { id: props.id }
      return item
    }
  }
  
  // React DnD collect function
  function collect(connect, monitor) {
    return {
      connectDragSource: connect.dragSource()
    }
  }

export class Task extends Component {
    render() {
        const { connectDragSource } = this.props;
        return connectDragSource(
            <li>
                {this.props.children}
            </li>
        )
    }
}

export default DragSource("TODO", taskSpec, collect)(Task);
