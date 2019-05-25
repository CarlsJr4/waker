import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

const targetSpec = {
    // When the item is dropped, call the onDrop function from props
    drop(props, monitor, component) {
      const item = monitor.getItem();
      console.log(item);
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
        return connectDropTarget(
            <div className="target">
                <ul>
                    <li>Yeet</li>
                </ul>
            </div>
        )
    }
}

export default DropTarget("TODO", targetSpec, collect)(TaskTarget);
