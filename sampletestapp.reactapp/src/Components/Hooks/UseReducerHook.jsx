import { useReducer } from "react";

const TODOS_ACTIONS = {
  ADD_TASK: "add_task",
  DELETE_TASK: "delete_task",
  RESET_TODOS: "reset_todos",
};

export default function UseReducerHook() {
  var [todos, dispatch] = useReducer(reducer, [], init);

  function init(initialState) {
    return initialState;
  }

  function reducer(state, action) {
    switch (action.type) {
      case TODOS_ACTIONS.ADD_TASK:
        return [
          ...state,
          {
            id: state.length + 1,
            name: action.payload,
          },
        ];

      case TODOS_ACTIONS.DELETE_TASK:
        return state.filter((d) => d.id !== action.payload);

      case TODOS_ACTIONS.RESET_TODOS:
        return init([]);

      default:
        return state;
    }
  }

  return (
    <>
      <h4>Todos : {todos.length}</h4>

      <label>
        Add New Task :
        <input
          type="text"
          onBlur={(e) =>
            dispatch({
              type: TODOS_ACTIONS.ADD_TASK,
              payload: e.target.value,
            })
          }
        />
      </label>
      <br />
      <br />
      <button
        type="button"
        onClick={(e) =>
          dispatch({ type: TODOS_ACTIONS.RESET_TODOS, payload: [] })
        }
      >
        Reset
      </button>

      <hr />
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.name}
          <span>
            <button
              type="button"
              onClick={(e) =>
                dispatch({ type: TODOS_ACTIONS.DELETE_TASK, payload: todo.id })
              }
            >
              delete
            </button>
          </span>
        </li>
      ))}
    </>
  );
}
