import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("data"))||[],
};

export const todoSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [action.payload, ...state.todos];
      localStorage.setItem("data", JSON.stringify(state.todos));
    },
    deleteTodo:(state,action)=>{
      const filterData = state.todos.filter((item,index)=>index !== action.payload)
      state.todos = filterData
      localStorage.setItem("data", JSON.stringify(state.todos));
    },
    update:(state,action)=>{
      const updateData = state.todos.map((task,i)=>
        i == action.payload.editIndex ? action.payload.input:task
      );
      state.todos = updateData;
      localStorage.setItem("data",JSON.stringify(state.todos));
    }
  },
});

export const { addTodo, deleteTodo,update } = todoSlice.actions;

export default todoSlice.reducer;