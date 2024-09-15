// module imports
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
}

interface AuthState {
  user: User | null;
}

const local_data = localStorage.getItem("user");
const user: User | null = local_data ? JSON.parse(local_data) : null;

const initial_state: AuthState = {
  user: user ? user : null,
};

export const auth_slice = createSlice({
  name: "auth",
  initialState: initial_state,
  reducers: {
    success: (state: AuthState, action: PayloadAction<User>) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },

    logout: (state: AuthState) => {
      state.user = null;
      localStorage.clear();
    },
  },
});

export const { success } = auth_slice.actions;

export default auth_slice.reducer;
