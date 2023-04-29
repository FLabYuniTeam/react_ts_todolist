export default function todoReducer(todos, action) {
  switch (action.type) {
    case "added": {
      const { id, content, completed } = action;
      return [...todos, { id, content, completed }];
    }

    case "deleted": {
      const { id } = action;
      return todos.filter((todo) => todo.id !== action.id);
    }

    default: {
      throw new Error(`알 수 없는 액션 타입이다. ${action.type}`);
    }
  }
}
