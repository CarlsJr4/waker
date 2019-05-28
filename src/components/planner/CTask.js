import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
    hover(props, monitor, component) {
        const item = { 
            id: props.id,
            dropIndex: props.index,
            dragIndex: monitor.getItem().index
         }

        // We get the DOM node so can can determine if dragging up or dragging down
         const node = ReactDOM.findDOMNode(component);

         const dragIndex = item.dragIndex;
         const dropIndex = item.dropIndex;

        //  Don't replace list items with themselves
         if (item.dropIndex === item.dragIndex) {
             return
         }

        //  Get location of DOM node
         const nodePosition = node.getBoundingClientRect()
        //  Location of middle of node relative to top of viewport
         const nodeVerticalCenter = 
            (nodePosition.bottom - nodePosition.top) / 2
        // Get mouse position
         const mousePosition = monitor.getClientOffset()
        // This is the mouse's distance from the top of the node you're hovering above
         const mousePositionFromTop = mousePosition.y - nodePosition.top 

        // Dragging downwards...
        // If the mouse position is less pixels from the top than the node's vertical center is, do nothing
         if (dragIndex < dropIndex && mousePositionFromTop < nodeVerticalCenter) {
             return
         }

        //  Dragging upwards
         if (dragIndex > dropIndex && mousePositionFromTop > nodeVerticalCenter) {
             return
         }
         props.moveCard(dragIndex, dropIndex);

         monitor.getItem().index = dropIndex;

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