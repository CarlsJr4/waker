import React from 'react';
import Task from './Task';

// The component itself
class TaskHolder extends React.Component {
  render() {
    // This list is the result of searching for a task in the searchbar
    const filteredList = this.props.taskList.filter(item =>
      item.body
        .toLowerCase()
        .includes(this.props.searchTerm.toLowerCase())
    );

    // We map a component for each task in the parent state so we can make each item draggable
    // We pass in body as a prop so it can be accessed by the draggable list items
    // We pass in id as a separate prop so it can be used to populate the calendar's state 
    const tasks = filteredList.map(task =>
      <Task id={task.id} key={task.id} body={task.body}>
        {task.body}
        <i className="fas fa-trash" data-key={task.id} onClick={this.props.onClick}></i>
      </Task>
    );

    // We return a mapped list of filtered results 
    return (
      <ul>
        {tasks}
      </ul>
    )
  }
}

  export default TaskHolder;