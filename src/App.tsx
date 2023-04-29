import React, { useState } from "react";
import Contents from "./components/Contents";
import { Todo } from "./ts/Todo";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [dones, setDones] = useState<Todo[]>([]);

  const [content, setContent] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleAdd = () => {
    if (content.trim() !== "") {
      const newTodo: Todo = {
        id: todos.length + 1,
        content: content,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setContent("");
    }
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setDones(dones.filter((done) => done.id !== id));
  };

  const handleComplete = (id: number) => {
    const completedTodo = todos.find((todo) => todo.id === id);
    if (completedTodo) {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      completedTodo.completed = true;
      setTodos(updatedTodos);
      setDones([...dones, completedTodo]);
    }
  };

  const handleInComplete = (id: number) => {
    const inCompletedTodo = dones.find((done) => done.id === id);
    if (inCompletedTodo) {
      const updatedDones = dones.filter((done) => done.id !== id);
      inCompletedTodo.completed = false;
      setDones(updatedDones);
      setTodos([...todos, inCompletedTodo]);
    }
  };

  const handleEdit = (id: number, newContent: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, content: newContent };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };
  return (
    <div className="bg-neutral-50 w-1/2 h-full rounded mt-3 m-auto p-2">
      <form>
        <h3 className="text-2xl text-center border-black border-b">TodoList</h3>
        <div className="flex text-center w-2/3 m-auto">
          <input
            className="text-sm text-center p-1 pl-3 pr-3 m-2 w-5/6"
            type="text"
            value={content}
            onChange={handleInputChange}
            placeholder="해야할 일을 입력해주세요."
          />
          <button
            className="ml-2"
            onClick={(e) => {
              handleAdd();
              e.preventDefault();
            }}
          >
            Add
          </button>
        </div>
      </form>
      <section className="mt-5 mb-10">
        <h3 className="text-xl text-left border-black border-b mb-5">Todo</h3>
        <ul>
          {todos.map((todo) => (
            <Contents
              key={todo.id}
              todo={todo}
              done={todo}
              onDelete={handleDelete}
              onComplete={handleComplete}
              onInComplete={handleInComplete}
              OnEdit={handleEdit}
            />
          ))}
        </ul>
      </section>
      <section className="mb-10">
        <h3 className="text-xl text-left border-black border-b mb-5">
          Completed
        </h3>
        <ul>
          {dones.map((done) => (
            <Contents
              key={done.id}
              todo={done}
              done={done}
              onDelete={handleDelete}
              onComplete={handleComplete}
              onInComplete={handleInComplete}
              OnEdit={handleEdit}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
