import { Todo } from "../ts/Todo";

declare function todoReducer(
  todos: Todo[],
  action: { type: string; id: number; contents: string; completed: boolean }
): Todo[];

export default todoReducer;
