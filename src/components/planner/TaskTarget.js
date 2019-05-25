import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

const targetSpec = {
    drop(props, monitor, component) {
      const item = monitor.getItem();
      console.log(item);
      // When dropping the list item, we need to render it in the target somehow
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
        return connectDropTarget(
            <div className="target">
                
            </div>
        )
    }
}

export default DropTarget("TODO", targetSpec, collect)(TaskTarget);
