import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    isAuthenticated: !!localStorage.getItem('isAuthenticated'),
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuthenticated(state, action: PayloadAction<boolean>) {
            state.isAuthenticated = action.payload;
            localStorage.setItem('isAuthenticated', action.payload.toString());
        },
    },
});

export const { setIsAuthenticated } = authSlice.actions;
export default authSlice.reducer;