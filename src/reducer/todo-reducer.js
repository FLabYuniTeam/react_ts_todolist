export default function todoReducer(todos, action) {
  switch (action.type) {
    case "added": {
      const { id, contents, completed } = action;
      return [...todos, { id, contents, completed }];
    }

    default: {
      throw new Error(`알 수 없는 액션 타입이다. ${action.type}`);
    }
  }
}
