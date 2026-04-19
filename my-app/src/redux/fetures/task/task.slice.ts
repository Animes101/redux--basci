import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

type Task = {
  id: string;
  title: string;
  des: string;
  isCompleted: boolean;
  createDate: string;
};

type InitialState = {
  tasks: Task[];
};

const initialState: InitialState = {
tasks: []
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {

    addTask:(state , action:PayloadAction<Task>)=>{

        state.tasks.push(action.payload)


    },
    isComplated:(state, action)=>{

       const task = state.tasks.find(t => t.id === action.payload);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }


    },
    deleteTask:(state, action)=>{

      state.tasks = state.tasks.filter(
        task => task.id !== action.payload
      )

    }
   
    
  },
});

export const selectTask= (state:RootState)=>{
    return state.totoTask.tasks
}

export const {addTask, isComplated,deleteTask}=taskSlice.actions


export default taskSlice.reducer;