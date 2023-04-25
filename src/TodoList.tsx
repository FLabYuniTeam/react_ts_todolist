import React from "react";
import Contents from "./components/Contents";

export default function TodoList() {
  return (
    <div className="bg-neutral-50 w-1/2 h-full rounded mt-3 m-auto p-2">
      <form>
        <h3 className="text-2xl text-center border-black border-b">TodoList</h3>
        <div className="flex text-center w-2/3 m-auto">
          <input
            className="text-sm text-center p-1 pl-3 pr-3 m-2 w-5/6"
            type="text"
            placeholder="해야할 일을 입력해주세요."
          />
          <button className="ml-2">Add</button>
        </div>
      </form>
      <section className="mt-5 mb-10">
        <h3 className="text-xl text-left border-black border-b mb-3">Todo</h3>
        <ul>{/* <Contents></Contents> */}</ul>
      </section>
      <section className="mb-10">
        <h3 className="text-xl text-left border-black border-b">Completed</h3>
        <ul></ul>
      </section>
    </div>
  );
}
