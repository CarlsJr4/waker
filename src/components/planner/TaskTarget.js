import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import CTask from './CTask';

// Today's task: Make the list sortable
// Steps:

// 1. Make dropped tasks draggable
// 2. Make dropped tasks a drop target
// 3. Reorder data using the hover method in the spec function


// When hovering over a task drop target, get component, html node, drag index, and hover index.
// Get position of target
// Determine middle coordinates of hovered target (using coords)
// Determine mouse position
// Get pixels to top
// Determine is dragging downwards or upwards
// Perform the action

const targetSpec = {
    drop(props, monitor, component) {
      const item = monitor.getItem();
      props.onDrop(item);
    }
  }
  
  function collect(connect, monitor) {
    return {
      connectDropTarget: connect.dropTarget(),
    }
  }

export class TaskTarget extends Component {

    render() {
        const { connectDropTarget } = this.props;
        const tasks = this.props.taskList.map((item, i) => 
            <CTask id={item.id} index={i} body={item.body}/>
            )

        return connectDropTarget(
            <div className="target">
                <ul>
                    {tasks}
                </ul>
            </div>
        )
    }
}

export default DropTarget("TODO", targetSpec, collect)(TaskTarget);
