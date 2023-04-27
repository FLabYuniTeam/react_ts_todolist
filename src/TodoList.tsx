import React, { useReducer } from "react";
import Contents from "./components/Contents";
import { Todo } from "./ts/Todo";
import todoReducer from "./reducer/todo-reducer";

const initialState: Todo = {
  contents: "",
  id: 0,
  completed: false
};

export default function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const [state, setState] = useReducer(
    (prevState: Todo, newState: Todo) => ({
      ...prevState,
      ...newState
    }),
    initialState
  );

  const changeContents = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, contents: e.target.value });
  };

  const handleAdd = () => {
    dispatch({
      type: "added",
      id: todos.length + 1,
      contents: state.contents,
      completed: false
    });
    setState({ ...state, contents: "" });
  };
  return (
    <div className="bg-neutral-50 w-1/2 h-full rounded mt-3 m-auto p-2">
      <form>
        <h3 className="text-2xl text-center border-black border-b">TodoList</h3>
        <div className="flex text-center w-2/3 m-auto">
          <input
            className="text-sm text-center p-1 pl-3 pr-3 m-2 w-5/6"
            type="text"
            value={state.contents}
            onChange={changeContents}
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
          {todos.map((todo, index) => (
            <Contents key={index} todo={todo} />
          ))}
        </ul>
      </section>
      <section className="mb-10">
        <h3 className="text-xl text-left border-black border-b">Completed</h3>
        <ul></ul>
      </section>
    </div>
  );
}
