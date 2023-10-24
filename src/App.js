import Sidebar from "./components/Sidebar.jsx";
import AllTask from "./components/AllTasks.jsx";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("All");
  const [todos, setTodos] = useState([]);

  const onNewTodoAdded = (todo) => {
    const newTodos = [...todos]
    newTodos.unshift(todo)
    setTodos(newTodos);
  };

  const onTodoUpdated = (updatedTodo) => {
    const updatedTodos = []
    for (const todo of todos) {
      if (todo.title === updatedTodo.title) {
        todo.checked = updatedTodo.checked;
      }
      updatedTodos.push(todo);
    }

    setTodos(updatedTodos);
  }

  const onTodoDeleted = (todoToDeleted) => {
    setTodos(todos.filter((todo) => todo !== todoToDeleted))
  }

  return (
    <div className="Container">
      <Sidebar
        onCategoryClicked={(chosenCategory) => setCategory(chosenCategory)}
        chosenCategory={category}
      />
      <AllTask
        category={category}
        onNewTodoAdded={onNewTodoAdded}
        todos={todos.filter((todo) => category === 'All' || todo.category === category)}
        onTodoUpdated={onTodoUpdated}
        onTodoDeleted={onTodoDeleted}
      />
    </div>
  );
}

export default App;
