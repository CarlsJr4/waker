import React, { Component } from 'react'
import { DragSource } from 'react-dnd';

// The component itself
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
    
    // React DnD collect function
    function collect(connect, monitor) {
      return {
        connectDragSource: connect.dragSource(),
      }
    }
    
    // React DnD spec object
    const taskSpec = {
        beginDrag(props, monitor, component) {
          const item = { id: props.id, body: props.body }
          return item
        }
      }

export default DragSource("TODO", taskSpec, collect)(Task);
