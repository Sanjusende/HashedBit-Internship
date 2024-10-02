import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleEdit = (index) => {
    const newTodos = [...todos];
    const editedTodo = prompt("Edit your todo:", todos[index].todo);
    if (editedTodo !== null) {
      newTodos[index].todo = editedTodo;
      setTodos(newTodos);
    }
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleAdd = () => {
    if (todo.trim()) {
      setTodos([...todos, { todo, isCompleted: false }]);
      setTodo("");
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <>
      <div className="containermx-auto my-5 rounded-lg p-5 mx-8 bg-violet-100 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className="text-lg font-bold ">Add a Todo</h2>
          <input
            className="w-2/4"
            type="text"
            onChange={handleChange} 
            
            value={todo}
          />
          <button
            className="bg-violet-800 hover:via-violet-950 rounded-md px-4 ml-5 text-white font-bold "
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        <h2 className="text-lg font-bold ">Your Todo</h2>
        <div className="todos">
          {todos.map((item, index) => {
            return (
              <div key={index} className="todo flex">
                <div className={item.isCompleted ? "line-through" : ""}>
                  {item.todo}
                </div>
                <div className="buttons">
                  <button
                    className="bg-violet-800 hover:via-violet-950 rounded-md px-2 ml-5 text-white font-bold"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-violet-800 hover:via-violet-950 rounded-md px-2 ml-5 text-white font-bold"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
