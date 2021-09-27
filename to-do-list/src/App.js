import React, {useState} from 'react';
import './App.css'
import Form from './Component/form';
import ToDoList from './Component/toDoList';


function App() {
  const [InputText, setInputText] = useState("");
  const [Todos, setTodos] = useState([]);
  return (
    <div className = "App">
      <header>
        <h1>To do List  </h1>
      </header>
      <Form InputText={InputText} Todos={Todos} setTodos={setTodos} setInputText={setInputText}/>
      <ToDoList setTodos={setTodos} Todos={Todos}/>
    </div>
  )
}

export default App
