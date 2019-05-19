import React from 'react';

function TaskHolder(props) {
    const filteredList = props.taskList.filter(item =>
      item.body
        .toLowerCase()
        .includes(props.searchTerm.toLowerCase())
    );
  
    const tasks = filteredList.map(task =>
      <li key={task.id}>
        {task.body}
        <i className="fas fa-trash" data-key={task.id} onClick={props.onClick}></i>
      </li>
    );
  
    return (
      <ul>
        {tasks}
      </ul>
    )
  }

  export default TaskHolder;