import React, { Component } from 'react';
import TaskTarget from  './TaskTarget';

// Draw dotted lines somehow
// Save the state to local history somehow?
// Make the app look real pretty!

class Calendar extends Component {
  render() {
    const { 
      onDrop, 
      moveCard,
      taskList,
      handleDecrement,
      handleIncrement,
      deleteTask
      } = this.props;

    return(
    <div className="calendar">
     <section className="calendar__times">
       <h1>6:00</h1>
       <h1>6:30</h1>
       <h1>7:00</h1>
       <h1>7:30</h1>
       <h1>8:00</h1>
       <h1>8:30</h1>
       <h1>9:00</h1>
       <h1>9:30</h1>
       <h1>10:00</h1>
       <h1>10:30</h1>
       <h1>11:00</h1>
       <h1>11:30</h1>
       <h1>12:00</h1>
     </section>
     
      <TaskTarget 
      onDrop={onDrop}
      taskList={taskList} 
      moveCard={moveCard}
      incrementHeight={handleIncrement}
      decrementHeight={handleDecrement}
      deleteTask={deleteTask}
      />
    </div>
    )
  }
}

export default Calendar;