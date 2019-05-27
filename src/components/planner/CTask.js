import React, { Component } from 'react'

export class CTask extends Component {
    render() {
        const {id, index, body} = this.props
        return (
            <li key={id}>{index + 1}. {body}</li>
        )
    }
}

export default CTask
