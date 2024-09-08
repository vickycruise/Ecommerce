import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  status: "idle", // 'loading' | 'succeeded' | 'failed'
  error: null,
  isverrified: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
    },
    setLoading(state) {
      state.status = "loading";
    },
    setSuccess(state) {
      state.status = "succeeded";
    },
    setisVerify(state) {
      state.isverrified = true;
    },
    setError(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { setUser, clearUser, setLoading, setSuccess, setError } =
  userSlice.actions;

export default userSlice.reducer;
