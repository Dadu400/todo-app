import { useState } from "react";
import bin from "./bin.svg";

const AllTask = ({ category, todos, onNewTodoAdded, onTodoUpdated, onTodoDeleted }) => {
  const [hoveredTodo, setHoveredTodo] = useState(null);

  const onNewTaskEntered = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      const todo = {
        title: e.target.value,
        category: category,
        checked: false,
      };
      e.target.value = "";
      onNewTodoAdded(todo);
    }
  };

  const onCheckboxClicked = (todo) => {
    todo.checked = !todo.checked;
    onTodoUpdated(todo);
  };

  const onTrashClicked = (todo) => {
    onTodoDeleted(todo);
  };

  return (
    <div className="tasks">
      <h1>{category} Tasks</h1>
      <input
        type="text"
        placeholder={`Add a new task inside '${category}' category`}
        onKeyDown={onNewTaskEntered}/>
      {todos.map((todo) => {
        return (
          <div className="todo" onMouseEnter={(e) => setHoveredTodo(todo)} onMouseLeave={(e) => setHoveredTodo(null)}>
            <div className="todosname">
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  checked={todo.checked === true}
                  onChange={(e) => onCheckboxClicked(todo)}
                />
                <span className="checkmark" 
                style={{
                    backgroundColor:
                    todo.checked === true ? "#EA5959" : "#fff",
                }}>
                </span>
              </label>
              <p style={{ whiteSpace: "nowrap" }}>
                <span style={{
                    textDecoration:
                      todo.checked === true ? "line-through" : "none",
                  }}>
                  {todo.title}
                </span>
                <span className="todoCategory">
                  {todo.category === "All" ? "Uncategorized" : todo.category}
                </span>
              </p>
            </div>
            <div>
              <img
                src={bin}
                alt="bin"
                className="trash"
                style={{ 
                    display: hoveredTodo === todo ? "block": "none"
                 }}
                onClick={(e) => onTrashClicked(todo)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllTask;
