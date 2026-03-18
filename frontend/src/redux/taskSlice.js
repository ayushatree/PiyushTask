import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "tasks",
  initialState: { list: [] },
  reducers: {
    setTasks: (state, action) => { state.list = action.payload; },
  },
});

export const { setTasks } = slice.actions;
export default slice.reducer;