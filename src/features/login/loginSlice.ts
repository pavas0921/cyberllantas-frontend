import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { LoginFormData, LoginResponseData } from "../../types/auth/login";
import { login as loginRequest } from "../../api/auth/auth.service";

interface LoginState {
  user: LoginResponseData | null;
  loading: boolean;
  error: string | null;
}

const initialState: LoginState = {
  user: null,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk<
  LoginResponseData,
  LoginFormData,
  { rejectValue: string }
>("auth/loginUser", async (data, { rejectWithValue }) => {
  try {
    const response = await loginRequest(data);
    return response;
  } catch (error) {
    return rejectWithValue("Error al iniciar sesión");
  }
});

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<LoginResponseData>) => {
          state.loading = false;
          state.user = action.payload;
        }
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Error al iniciar sesión";
      });
  },
});

export default loginSlice.reducer;
