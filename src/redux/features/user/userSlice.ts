import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/types";

interface UserState extends User {
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

const initialState: UserState = {
  _id: "",
  name: "",
  email: "",
  isLoading: true,
  isError: false,
  error: null,
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
