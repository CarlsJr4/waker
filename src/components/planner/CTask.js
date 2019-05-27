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
        connectDragSource: connect.dragSource()
    }
}

export class CTask extends Component {
    render() {
        const {id, index, body, connectDragSource} = this.props
        return connectDragSource(
            <li key={id}>{index + 1}. {body}</li>
        )
    }
}

export default DragSource("CALENDARTASK", CTaskSpec, collect)(CTask)

// NOTE: This component will be BOTH a drag source and a drop target.