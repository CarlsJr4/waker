import React, { Component, Fragment } from 'react';
import TodoContainer from './components/TodoList/TodoContainer';
import Calendar from './planner/Calendar';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd'
import './App.css';

// Today's goals:
// Drag the items into another list 

// Future goals:
// 1. Edit list items
// 2. Change color of list items
// 3. Add cursor: pointer to all list items 
// 4. Favorite tasks (put them to the top)

function App() {
  return (
    <Fragment>
      <Calendar />
      <TodoContainer />
    </Fragment>
  )
}

export default DragDropContext(HTML5Backend)(App);