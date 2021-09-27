import React from 'react'
/*
  function Form(props){
  const InputChange = (e) =>{
  console.log(e.target.value);
  props.setInputText (e.target.value);
  disederhanain 
*/

function Form({InputText, setInputText, Todos, setTodos}){

  const InputChange = (e) =>{
    setInputText (e.target.value);
      
  }
  const SubmitToDo = (e) =>{
    //prevent refresh the page when toggle the submit button
    e.preventDefault();
    setTodos([
      ...Todos, 
      {text: InputText , completed : false, id: Math.random()*10000}
    ]);
    //when submit setInputText state become empty string
    setInputText("")
  }

    return (
      <div>
        <form>
        <input value={InputText} onChange={InputChange} type="text" className="todo-input" />
        <button className="todo-button" type="submit" onClick={SubmitToDo}>
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
      </div>
    )
}

export default Form
