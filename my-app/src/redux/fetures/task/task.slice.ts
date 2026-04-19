import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

type Task = {
  id: string;
  title: string;
  des: string;
  isCompleted: boolean;
  createDate: string;
  assignedTo: string;   // ← user id
  priority: "low" | "medium" | "high";
};

type InitialState = {
  tasks: Task[];
};

const initialState: InitialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    isComplated: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.isCompleted = !task.isCompleted;
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
    assignTask: (
      state,
      action: PayloadAction<{ taskId: string; userId: string }>
    ) => {
      const task = state.tasks.find((t) => t.id === action.payload.taskId);
      if (task) task.assignedTo = action.payload.userId;
    },
    reorderTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
  },
});

export const selectTask = (state: RootState) => state.totoTask.tasks;

export const { addTask, isComplated, deleteTask, assignTask, reorderTasks } =
  taskSlice.actions;

export default taskSlice.reducer;