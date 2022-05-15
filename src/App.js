import { useState, useRef } from "react"

function App() {
  const [todoList, setTodoList] = useState([]);
  const inputElement = useRef(null);

  const onAddTodo = () => {
    setTodoList(
      todoList.concat(
        inputElement.current.value
      )
    )

    inputElement.current.value = ""
  }

  const removeTodoItem = (index) => {
    const newTodoList = JSON.parse(JSON.stringify(todoList))
    newTodoList.splice(index, 1)
    setTodoList(newTodoList)
  }

  return (
    <div style={{
      "height": "100%",
      "width": "100%",
      "position": "absolute",
      "left": "50%",
      "top": "50%" 
    }}>
      <input type="text" ref={inputElement} />
      <button onClick={onAddTodo}> Add Todo </button>
      <br />
      <ul>
        { todoList.map((todo, i) => {
          return (
            <li>
              {todo}
              <button onClick={() => removeTodoItem(i)}> X </button>
              <input type="checkbox" />
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
