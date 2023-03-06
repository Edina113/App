import React, { useState } from "react";
import Form from "./Form";

function Raspored() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if(!todo.cas && !todo.prof && !todo.kab || /^\s*$/.test(todo.cas) || /^\s*$/.test(todo.prof) || /^\s*$/.test(todo.kab)) {
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(...todos);

    }

    return (
        <div>
            <Form onSubmit={addTodo} />
        </div>
    );
  }
  
  export default Raspored;
  