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
        const { 
          connectDropTarget,
           moveCard,
           taskList,
           incrementHeight,
           decrementHeight
          } = this.props;

        const tasks = taskList.map((item, i) => 
            <CTask 
            id={item.id} 
            key={item.id} 
            index={i} 
            body={item.body}
            timeLength={item.timeLength}
            moveCard={moveCard}
            incrementHeight={incrementHeight}
            decrementHeight={decrementHeight}
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
