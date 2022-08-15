import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Buy Milk",
      completed: false,
    },
    {
      id: 2,
      text: "Buy Apple",
      completed: true,
    },
    {
      id: 3,
      text: "Buy Water",
      completed: false,
    },
    {
      id: 4,
      text: "Buy Chocolate",
      completed: false,
    },
  ]);

  return (
    <div className="App">
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
