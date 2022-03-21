import React, {useState} from 'react';
import './App.css'
import Form from './Component/form';
import ToDoList from './Component/toDoList';


function App() {

  const [InputText, setInputText] = useState("");
  const [Todos, setTodos] = useState([]);
  const [Day, setDay] = useState("Monday")

  return (
    <div className = "App">
      <header>
        <h1>To do List  </h1>
      </header>
      <Form 
        InputText={InputText} 
        Day={Day} 
        setDay={setDay} 
        Todos={Todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
      />
      <ToDoList setTodos={setTodos} Todos={Todos} Day={Day} setDay={setDay} setInputText={setInputText} 
       InputText={InputText}/>
    </div>
  )
}

export default App
