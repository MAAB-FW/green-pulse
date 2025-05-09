import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./features/api/baseApi";
import roleSlice from "./features/user/roleSlice";
import userSlice from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    userSlice: userSlice,
    roleSlice: roleSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
