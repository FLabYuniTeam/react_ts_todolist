import { Todo } from "../ts/Todo";

type ActionType =
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "DELETE_TODO"; payload: number }
  | { type: "COMPLETE_TODO"; payload: number }
  | { type: "INCOMPLETE_TODO"; payload: number }
  | { type: "EDIT_TODO"; payload: { id: number; newContent: string } };

export const initialState = {
  todos: [] as Todo[],
  dones: [] as Todo[]
};

export const reducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        dones: state.dones.filter((done) => done.id !== action.payload)
      };
    case "COMPLETE_TODO":
      const completedTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (completedTodo) {
        completedTodo.completed = true;
        const updatedTodos = state.todos.filter(
          (todo) => todo.id !== action.payload
        );

        return {
          ...state,
          todos: updatedTodos,
          dones: [...state.dones, completedTodo]
        };
      }
      return state;
    case "INCOMPLETE_TODO":
      const inCompletedTodo = state.dones.find(
        (done) => done.id === action.payload
      );
      if (inCompletedTodo) {
        const updatedDones = state.dones.filter(
          (done) => done.id !== action.payload
        );
        inCompletedTodo.completed = false;
        return {
          ...state,
          todos: [...state.todos, inCompletedTodo],
          dones: updatedDones
        };
      }
      return state;
    case "EDIT_TODO":
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, content: action.payload.newContent };
        } else {
          return todo;
        }
      });
      return {
        ...state,
        todos: updatedTodos
      };
    default:
      return state;
  }
};
