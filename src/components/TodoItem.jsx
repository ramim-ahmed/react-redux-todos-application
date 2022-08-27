import React from "react";
import { useDispatch } from "react-redux";
import cancelImg from '../assets/images/cancel.png';
import { colorSelected, deleted, toggled } from "../redux/todos/actions";
export default function TodoItem({todo}) {
  const dispatch = useDispatch();
  const {id, text, completed, color} = todo;
  // completed todo handler
  const handleCompletedTodo = (id) => {
      dispatch(toggled(id))
  }

  // color selection handler
  const colorSelectionHandler = (id, color) => {
    dispatch(colorSelected(id, color))
  }

  // delete todo handler
  const deleteTodoHandler = (id) => {
    dispatch(deleted(id))
  }
  
  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div className={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${completed && 'border-green-500 focus-within:border-green-500'}`}>
        <input onChange={ () => handleCompletedTodo(id)} type="checkbox" className="opacity-0 absolute rounded-full" />
        <svg
          className={` ${!completed && 'hidden'} fill-current w-3 h-3 text-green-500 pointer-events-none`}
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>

      <div className={`select-none flex-1 ${completed && 'line-through'}`}>
        {text}
      </div>

      <div onClick={ () => colorSelectionHandler(id, 'green')} className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${color === 'green' && 'bg-green-500'}`}></div>

      <div onClick={ () => colorSelectionHandler(id, 'yellow')} className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${color === 'yellow' && 'bg-yellow-500'}`}></div>

      <div onClick={ () => colorSelectionHandler(id, 'red')} className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${color === 'red' && 'bg-red-500'}`}></div>

      <img
        src={cancelImg}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
        onClick={ () => deleteTodoHandler(id)}
      />
    </div>
  );
}
