import React, { useEffect, useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    async function loadToDos() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?userId=2"
      );
      const userFromAPI = await response.json();
      setToDos(userFromAPI);
    }
    loadToDos();
  }, []); // Passing [] so that it only runs the effect once 

  return (
    <div className="App">
      <h1>To Do List</h1>
      <ul className="todo-list">
        {toDos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "",
            }}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
