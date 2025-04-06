import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../types";

const initialState: User = {
  _id: "",
  name: "",
  email: "",
  isLoading: true,
  isError: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      return { ...state, ...action.payload };
    },
    logOut: () => initialState,
  },
});

export const { setUser, logOut } = userSlice.actions;
export default userSlice.reducer;
