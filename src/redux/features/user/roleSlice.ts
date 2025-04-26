import { UserType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  role: "" as UserType,
};

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<UserType>) => {
      return { ...state, role: action.payload };
    },
  },
});

export const { setRole } = roleSlice.actions;
export default roleSlice.reducer;
