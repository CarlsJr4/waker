import React from 'react'

export default function ButtonList(props) {
    return (
        <div className="buttonList">
            <button onClick={props.onClick}>
                <p>Reset All</p>
                <i class="fas fa-redo-alt"></i>
            </button>
            <button>
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
    )
}