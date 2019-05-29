import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import CTask from './CTask';

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
            <CTask 
            id={item.id} 
            key={item.id} 
            index={i} 
            body={item.body}
            moveCard={this.props.moveCard}
            />
            )

        return connectDropTarget(
            <div className="calendar__dropZone">
                <ul className="calendar__list">
                    {tasks}
                </ul>
            </div>
        )
    }
}

export default DropTarget("TODO", targetSpec, collect)(TaskTarget);
