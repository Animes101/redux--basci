import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './fetures/task/task.slice'
import userSlice from './fetures/users/user.slice'


export const store = configureStore({
  reducer: {

    totoTask:todoSlice,
    user:userSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch