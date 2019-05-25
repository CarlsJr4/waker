import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

const targetSpec = {
    // When the item is dropped, call the onDrop function from props
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
        const tasks = this.props.taskList.map(item => 
            <li key={item.id}>{item.body}</li>
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
