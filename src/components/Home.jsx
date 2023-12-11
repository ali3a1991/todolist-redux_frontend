import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "../redux/TodoSlice";

export const Home = () => {
  const [newTodo, setNewTodo] = useState("");
  const todos = useSelector(state => state.todos);
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();

  const handleInputChangeValue = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:9999/api/user/addtodo", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        owner: user._id,
        todo: newTodo,
        complited: false,
      }),
    });
    if (res.ok) {
      const todo = await res.json()
      dispatch(addTodo(todo))
      setNewTodo("");
    }
  };

  return (
    <div>
      <form>
        <input
          onChange={handleInputChangeValue}
          type="text"
          placeholder="Whrite a Todo"
          value={newTodo}
          name="todo"
        />
        <button onClick={handleAddTodo} disabled={!newTodo}>
          Add Todo
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id} className={todo.complited ? "complited" : ''}>
            <p onClick={() => dispatch(toggleTodo(todo._id))}>
              {todo.todo}
            </p>
            <button onClick={() => dispatch(removeTodo(todo._id))}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
