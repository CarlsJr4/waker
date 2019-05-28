import React, { Component } from 'react';
import { DragSource } from 'react-dnd';


const CTaskSpec = {
    beginDrag(props, monitor, component) {
        const item = { id: props.id }
        return item
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

export class CTask extends Component {
    render() {
        const {id, index, body, connectDragSource, isDragging} = this.props;
        const opacity = isDragging ? 0 : 1;
        return connectDragSource(
            <li key={id} style={{opacity}}>{index + 1}. {body}</li>
        )
    }
}

export default DragSource("CALENDARTASK", CTaskSpec, collect)(CTask)

// NOTE: This component will be BOTH a drag source and a drop target.