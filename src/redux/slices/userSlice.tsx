import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  is_staff: boolean;
}

const initialState: UserState = {
  firstName: null,
  lastName: null,
  email: null,
  is_staff: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{ firstName: string; lastName: string; email: string; is_staff: boolean }>) {
      const { firstName, lastName, email, is_staff } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      state.is_staff = is_staff;

      // Stocker les données de l'utilisateur dans le localStorage
      localStorage.setItem('user', JSON.stringify({ firstName, lastName, email, is_staff }));
    },
    clearUser(state) {
      state.firstName = null;
      state.lastName = null;
      state.email = null;
      state.is_staff = false;

      // Supprimer les données de l'utilisateur du localStorage
      localStorage.removeItem('user');
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;