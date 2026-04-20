import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

type User = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  isActive: boolean;
  createDate: string;
};

type InitialState = {
  users: User[];
};

const initialState: InitialState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    toggleActive: (state, action: PayloadAction<string>) => {
      const user = state.users.find((u) => u.id === action.payload);
      if (user) {
        user.isActive = !user.isActive;
      }
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((u) => u.id !== action.payload);
    },
    updateRole: (
      state,
      action: PayloadAction<{ id: string; role: "admin" | "user" }>
    ) => {
      const user = state.users.find((u) => u.id === action.payload.id);
      if (user) {
        user.role = action.payload.role;
      }
    },
  },
});

export const selectUsers = (state: RootState) => state.user.users;


export const { addUser, toggleActive, deleteUser, updateRole } =
  userSlice.actions;

export default userSlice.reducer;

