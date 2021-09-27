import React from 'react';
import {useState} from 'react'
import ToDo from './ToDo';

function ToDoList({Todos, setTodos}) {
  
  const deleteHandle = (e) =>{
    
  }

    return(
      <div className="todo-container">
        <ul className="todo-list">
          {Todos.map((todo) => (
            <ToDo 
            setTodos={setTodos} 
            todo ={todo}
            Todos={Todos} 
            key={todo.id} 
            Text={todo.text}
            Status={todo.completed} />
          ))}
        </ul>
      </div>
    )
}

export default ToDoList
