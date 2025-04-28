import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, update } from "./redux/features/todoSlice";

const App = () => {
  const [input, setInput] = useState("");
  const [boolean, setBoolean] = useState(false);
  const [editIndex, setEditIndex] = useState('');
  const todoData = useSelector((state) => state.todolist.todos);
  const dispatch = useDispatch();

  function handleAdd() {
    dispatch(addTodo(input));
    setInput("");
  }

  function handleEdit(index) {
    setInput(todoData[index]);
    setBoolean(true);
    setEditIndex(index);
  }

  function handleUpdate(){
    dispatch(update({ editIndex, input }));
    setBoolean(false);
    setInput("");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex flex-col items-center justify-start p-8">
  <div className="relative mb-10 group">
    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
      📝 Todo Magic
    </h1>
    <div className="absolute bottom-0 left-0 w-0 h-1 bg-pink-500 transition-all duration-500 group-hover:w-full"></div>
  </div>

  <div className="flex space-x-3 mb-8 w-full max-w-md relative">
    <div className="relative flex-1">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a magical task..."
        className="px-5 py-3 border-0 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 w-full bg-white bg-opacity-80 backdrop-blur-sm transition-all duration-300 hover:bg-opacity-100 placeholder-purple-300"
      />
      <span className="absolute inset-y-0 left-0 flex items-center pl-3 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300">
        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
      </span>
    </div>
    {boolean ? (
      <button
        onClick={handleUpdate}
        className="relative overflow-hidden px-6 py-3 bg-amber-400 hover:bg-amber-500 text-white font-medium rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 group"
      >
        <span className="relative z-10">Update</span>
        <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
      </button>
    ) : (
      <button
        onClick={handleAdd}
        className="relative overflow-hidden px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 group"
      >
        <span className="relative z-10">Add</span>
        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></span>
      </button>
    )}
  </div>

  <div className="w-full max-w-md space-y-4">
    {todoData.map((todo, i) => (
      <div
        key={i}
        className="relative bg-white bg-opacity-70 backdrop-blur-sm p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-opacity-90 group overflow-hidden"
      >
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="flex justify-between items-center pl-3">
          <p className="text-lg font-medium text-gray-700 transition-all duration-300 group-hover:text-gray-900">
            {todo}
          </p>
          <div className="flex space-x-2">
            <button
              onClick={() => dispatch(deleteTodo(i))}
              className="relative overflow-hidden px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow transition-all duration-300 transform hover:scale-110 active:scale-95 group/delete"
            >
              <span className="relative z-10 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
                Delete
              </span>
              <span className="absolute inset-0 bg-red-700 opacity-0 group-hover/delete:opacity-100 transition-opacity duration-300 rounded-lg"></span>
            </button>
            <button
              onClick={() => handleEdit(i)}
              className="relative overflow-hidden px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow transition-all duration-300 transform hover:scale-110 active:scale-95 group/edit"
            >
              <span className="relative z-10 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                Edit
              </span>
              <span className="absolute inset-0 bg-blue-700 opacity-0 group-hover/edit:opacity-100 transition-opacity duration-300 rounded-lg"></span>
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    ))}
  </div>
</div>
  
  
  );
};

export default App;