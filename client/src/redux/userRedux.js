import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
  },
  reducers: {
    logIn: (state, action) => {
      state.currentUser = action.payload;
    },
    logOut: (state) => {
      state.currentUser = null;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;