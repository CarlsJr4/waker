import React from 'react';
import Task from './task';

// The component itself
class TaskHolder extends React.Component {
  render() {
    const filteredList = this.props.taskList.filter(item =>
      item.body
        .toLowerCase()
        .includes(this.props.searchTerm.toLowerCase())
    );

    const tasks = filteredList.map(task =>
      <Task key={task.id}>
        {task.body}
        <i className="fas fa-trash" data-key={task.id} onClick={this.props.onClick}></i>
      </Task>
    );
  
    return (
      <ul>
        {tasks}
      </ul>
    )
  }
}

  export default TaskHolder;