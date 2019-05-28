import React, { Component } from 'react';
import { DragSource, DropTarget } from 'react-dnd';


// Upon hover...
// 1. Console log dragged item index AND hovered item index
// 2. If the indexes match, do nothing
// 3. Console log 

const dragSpec = {
    beginDrag(props, monitor, component) {
        const item = { id: props.id }
        return item
    }
}

const dropSpec = {
    hover(props, monitor, component) {
        const item = { id: props.id }
        return item
    }
}

function dragCollect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
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