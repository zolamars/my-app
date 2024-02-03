import { useEffect, useState } from "react";
import supabase from "../supabase";
import Logout from "./logout";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  async function getTodos() {
    const { data } = await supabase.from("todos").select();
    setTodos(data);
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.name}>{todo.name}</li>
        ))}
      </ul>
      <Logout/>
    </div>
  );
}

export default Todos;