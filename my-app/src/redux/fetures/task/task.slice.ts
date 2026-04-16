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
tasks: [
  {
    id: '01',
    title: 'Learn React Basics',
    des: 'Understand components, props, and state',
    isCompleted: false,
    createDate: '2026-04-10'
  },

]
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {

    addTask:(state , action:PayloadAction<Task>)=>{

        state.tasks.push(action.payload)


    }

    
  },
});

export const selectTask= (state:RootState)=>{
    return state.totoTask.tasks
}

export const {addTask}=taskSlice.actions


export default taskSlice.reducer;