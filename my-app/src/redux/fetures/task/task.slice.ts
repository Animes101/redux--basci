import { createSlice } from "@reduxjs/toolkit";

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
  {
    id: '02',
    title: 'Build Todo App',
    des: 'Create a task management app using Redux Toolkit',
    isCompleted: true,
    createDate: '2026-04-11'
  },
  {
    id: '03',
    title: 'Practice JavaScript',
    des: 'Solve problems on arrays and objects',
    isCompleted: false,
    createDate: '2026-04-12'
  },
  {
    id: '04',
    title: 'Learn Backend',
    des: 'Start Node.js and Express basics',
    isCompleted: false,
    createDate: '2026-04-13'
  },
  {
    id: '05',
    title: 'Setup MongoDB',
    des: 'Connect database with backend project',
    isCompleted: true,
    createDate: '2026-04-14'
  }
]
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {

    
  },
});


export default taskSlice.reducer;