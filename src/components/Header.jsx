import React, { useState } from "react";
import { useDispatch } from "react-redux";
import doubleTickImg from "../assets/images/double-tick.png";
import noteImg from "../assets/images/notes.png";
import plusImg from "../assets/images/plus.png";
import { added, allCompleted, clearCompleted } from "../redux/todos/actions";
export default function Header() {
  const [input, setInput] = useState("");

  // input on change handler
  const onChangeHanlder = (e) => {
    setInput(e.target.value);
  };
  const dispatch = useDispatch();
  // clear completed todos handler
  const clearCompletedTodos = () => {
    dispatch(clearCompleted());
  };

  // all completed todos handler
  const allCompletedTodosHandler = () => {
    dispatch(allCompleted());
  };

  // handle submit todos
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(added(input));
    setInput('');
  }

  return (
    <div>
      <form  onSubmit={submitHandler} className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
        <img src={noteImg} className="w-6 h-6" alt="Add todo" />
        <input
          onChange={onChangeHanlder}
          type="text"
          value={input}
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url(${plusImg})] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          onClick={() => allCompletedTodosHandler()}
          className="flex space-x-1 cursor-pointer"
        >
          <img className="w-4 h-4" src={doubleTickImg} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li onClick={() => clearCompletedTodos()} className="cursor-pointer">
          Clear completed
        </li>
      </ul>
    </div>
  );
}
