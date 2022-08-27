import {
    ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED,
    TOGGLED
} from "./actionTypes";
import initialState from "./initialState";

const createTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    //   add todo
    case ADDED:
      return [
        ...state,
        {
          id: createTodoId(state),
          text: action.payload,
          completed: false
        },
      ];

    // toggled completed todo
    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });

    // color selection
    case COLORSELECTED:
      const { todoId, color } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }
        return {
          ...todo,
          color: color,
        };
      });

    // deleted todo
    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);

    // all completed todo
    case ALLCOMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });
    // all completed todo
    case CLEARCOMPLETED:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};

export default reducer;
