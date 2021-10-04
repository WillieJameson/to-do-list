import React from 'react'

function ToDo({Text, todo, Todos, setTodos, setInputText, key, InputText, Day, setDay}) {

  const TrashHandle = () =>{
    setTodos(Todos.filter( (el) =>
      el.id !== todo.id
    ))
  }

  const EditHandle = (index) =>{ 
    setTodos(Todos.map((item)=>{
      if(item.id === todo.id){
        return {
          
        }
      }
      return item;
    })
    )
  }

  const CompleteHandle = () =>{
    setTodos(Todos.map((item)=>{
      if(item.id === todo.id){
        return {
          ...item, 
          completed : !item.completed
        }
      }
      return item;
    })
    )
  }

  return (
    <div>
      <div className ="Day">
        <div className="todo">  
          <button className="trash-btn" onClick={EditHandle}> 
            <i className="">edit</i>
          </button>

          <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{Text}</li>
          <button onClick={CompleteHandle} className="complete-btn"> 
            <i className="fas fa-check"></i>
          </button>
          
          <button className="trash-btn" onClick={TrashHandle}> 
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
    
      

  )
}

export default ToDo
