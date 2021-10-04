import React from 'react';
import ToDo from './ToDo';

function ToDoList({Todos, setTodos, setInputText, InputText}) {
  

    return(
    <div className="todolist">

      <div className="Container Monday"> 
        <span className="text">Monday</span>
          <div className="todo-container ">
              <ul className="todo-list">
                  {Todos.map((todo)=>{
                    if(todo.Day === "Monday"){
                      console.log(todo)
                      return(
                        <ToDo 
                        setTodos={setTodos} 
                        todo ={todo}
                        Todos={Todos} 
                        key={todo.id} 
                        Text={todo.text}
                        Status={todo.completed}
                        setInputText={setInputText}
                        InputText={InputText}
                        />
                      )}
                    else{
                      return("")
                    }
                  })}
                </ul>
            </div>
      </div>
                    

      <div className=" Container Tuesday"> 
        <span className="text">Tuesday</span>
          <div className="todo-container ">
              <ul className="todo-list">
                  {Todos.map((todo) => {
                    if(todo.Day === "Tuesday"){
                      return(
                        <ToDo 
                        setTodos={setTodos} 
                        todo ={todo}
                        Todos={Todos} 
                        key={todo.id} 
                        Text={todo.text}
                        Status={todo.completed}
                        setInputText={setInputText}
                        />
                      )}
                    else{
                      return("")
                    }
                  })}
                </ul>
            </div>
      </div>

      <div className="Container Wednesday"> 
        <span className="text">Wednesday</span>
          <div className="todo-container ">
              <ul className="todo-list">
                  {Todos.map((todo) => {
                    if(todo.Day === "Wednesday"){
                      return(
                        <ToDo 
                        setTodos={setTodos} 
                        todo ={todo}
                        Todos={Todos} 
                        key={todo.id} 
                        Text={todo.text}
                        Status={todo.completed}
                        setInputText={setInputText}
                        />
                      )}
                    else{
                      return("")
                    }
                  })}
                </ul>
            </div>
      </div>

      <div className="Container Thursday"> 
        <span className="text">Thursday</span>
          <div className="todo-container ">
              <ul className="todo-list">
                  {Todos.map((todo) => {
                    if(todo.Day === "Thursday"){
                      return(
                        <ToDo 
                        setTodos={setTodos} 
                        todo ={todo}
                        Todos={Todos} 
                        key={todo.id} 
                        Text={todo.text}
                        Status={todo.completed}
                        setInputText={setInputText}
                        />
                      )}
                    else{
                      return("")
                    }
                  })}
                </ul>
            </div>
      </div>

      <div className="Container Friday"> 
        <span className="text">Friday</span>
          <div className="todo-container ">
              <ul className="todo-list">
                  {Todos.map((todo) => {
                    if(todo.Day === "Friday"){
                      return(
                        <ToDo 
                        setTodos={setTodos} 
                        todo ={todo}
                        Todos={Todos} 
                        key={todo.id} 
                        Text={todo.text}
                        Status={todo.completed}
                        setInputText={setInputText}
                        />
                      )}
                    else{
                      return("")
                    }
                  })}
                </ul>
            </div>
      </div>

      <div className="Container Saturday"> 
        <span className="text">Saturday</span>
          <div className="todo-container ">
              <ul className="todo-list">
                  {Todos.map((todo) => {
                    if(todo.Day === "Saturday"){
                      return(
                        <ToDo 
                        setTodos={setTodos} 
                        todo ={todo}
                        Todos={Todos} 
                        key={todo.id} 
                        Text={todo.text}
                        Status={todo.completed}
                        setInputText={setInputText}
                        />
                      )}
                    else{
                      return("")
                    }
                  })}
                </ul>
            </div>
      </div>

      <div className="Container Sunday"> 
        <span className="text">Sunday</span>
          <div className="todo-container ">
              <ul className="todo-list">
                  {Todos.map((todo) => {
                    if(todo.Day === "Sunday"){
                      return(
                        <ToDo 
                        setTodos={setTodos} 
                        todo ={todo}
                        Todos={Todos} 
                        key={todo.id} 
                        Text={todo.text}
                        Status={todo.completed}
                        setInputText={setInputText}
                        />
                      )}
                    else{
                      return("")
                    }
                  })}
                </ul>
            </div>
      </div>
    </div>
      
    )
}

export default ToDoList
