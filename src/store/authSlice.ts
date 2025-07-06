import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/types/User";

interface AuthState {
    user: User | null;
}

const initialState: AuthState = {
    user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action: PayloadAction<{ user: User }>) {
            state.user = action.payload.user;
            
        },
        logout(state) {
            state.user = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
