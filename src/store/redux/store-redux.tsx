import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

const appDataOfCurrentUser = { nothing: "to see here" };

const appDataOfCurrentUserSlice = createSlice({
  name: "appDataOfCurrentUserSlice",
  initialState: appDataOfCurrentUser,
  reducers: {
    setAppDataOfCurrentUser(state, action: PayloadAction<any>) {
      console.log("current data", state);
      state = action.payload;
      console.log("new data", action.payload);
      console.log("new state", state);
    },
  },
});

const store = configureStore({
  reducer: {
    appDataOfCurrentUserReducer: appDataOfCurrentUserSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const appDataOfCurrentUserSliceActions =
  appDataOfCurrentUserSlice.actions;

export default store;
