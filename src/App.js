import React, { Fragment } from 'react';
import TodoContainer from './components/TodoList/TodoContainer';
import Calendar from './components/planner/Calendar';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd'

import './stylesheets/App.css';
import './stylesheets/calendar.css';
import './stylesheets/todo.css';

// Today's goals:
// Sortable list items

// Future goals:
// 1. Edit list items
// 2. Change color of list items
// 3. Add cursor: pointer to all list items 
// 4. Favorite tasks (put them to the top)
// Custom drag layer

function App() {
  return (
    <Fragment>
      <Calendar />
      <TodoContainer />
    </Fragment>
  )
}

export default DragDropContext(HTML5Backend)(App);