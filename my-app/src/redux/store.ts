import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './fetures/task/task.slice'
import userSlice from './fetures/users/user.slice'
import { api } from './api/baseApi'


export const store = configureStore({
  reducer: {

    totoTask:todoSlice,
    user:userSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch