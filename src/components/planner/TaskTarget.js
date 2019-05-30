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
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver()
    }
  }

export class TaskTarget extends Component {

    render() {
        const { 
          connectDropTarget,
           moveCard,
           taskList,
           canDrop,
           isOver,
           deleteTask,
           incrementHeight,
           decrementHeight
          } = this.props;

        let dropClass = '';
        if (canDrop && !isOver) {
          dropClass = 'calendar__dropZone--canDrop'
        } else if ( canDrop && isOver) {
          dropClass = 'calendar__dropZone--isOver'
        } else {
          dropClass = ''
        }
        
        const tasks = taskList.map((item, i) => 
            <CTask 
            id={item.id} 
            key={item.id} 
            index={i} 
            body={item.body}
            timeLength={item.timeLength}
            moveCard={moveCard}
            deleteTask={deleteTask}
            incrementHeight={incrementHeight}
            decrementHeight={decrementHeight}
            />
            )

        return connectDropTarget(
            <div className={`calendar__dropZone ${dropClass}`}>
                <ul className="calendar__list">
                    {tasks}
                </ul>
            </div>
        )
    }
}

export default DropTarget("TODO", targetSpec, collect)(TaskTarget);
