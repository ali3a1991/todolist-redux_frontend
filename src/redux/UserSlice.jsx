import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    getUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state._id = action.payload._id
    },
  },
});

export const { getUser } = userSlice.actions;
export default userSlice.reducer;
