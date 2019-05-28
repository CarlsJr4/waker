import React, { Component } from 'react';
import { DragSource, DropTarget } from 'react-dnd';


// Upon hover...


const dragSpec = {
    beginDrag(props, monitor, component) {
        const item = { 
            id: props.id,
            index: props.index
         }
        return item
    }
}

function dragCollect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    }
}

const dropSpec = {
    drop(props, monitor, component) {
        // Set to drop for now for debugging (set to hover when needed)
        // All sorting logic should be implemented in the hover handler
        const item = { 
            id: props.id,
            dropIndex: props.index,
            dragIndex: monitor.getItem().index
         }
         if (item.dropIndex === item.dragIndex) {
             return
         }
        console.log(item.dropIndex, item.dragIndex)
        return item
    }
}

function dropCollect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget()
    }
}

export class CTask extends Component {
    render() {
        const {id, index, body, connectDragSource, connectDropTarget, isDragging} = this.props;
        const opacity = isDragging ? 0 : 1;
        return connectDropTarget(connectDragSource(
            <li key={id} id={id} style={{opacity}}>{index + 1}. {body}</li>
        ))
    }
}

export default DropTarget("CALENDARTASK", dropSpec, dropCollect)(DragSource("CALENDARTASK", dragSpec, dragCollect)(CTask))

// NOTE: This component will be BOTH a drag source and a drop target.