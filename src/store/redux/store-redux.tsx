// Table of content for this file is written at the bottom
import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

//  _. Initial states
const ChunkState: any = { isAuthenticated: false };

//  _. Slices
//       _._. Slice - Chunk
const chunkSlice = createSlice({
  name: "authenticationSlice",
  initialState: ChunkState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

//  _. Store - Redux Toolkit way
const store = configureStore({
  reducer: {
    chunkReducer: chunkSlice.reducer,
  },
});

//  _. Necessary exports for TS to work
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//  _. Action Packs - Redux Toolkit way
export const chunkSliceActions = chunkSlice.actions;

export default store;

//  _. Initial states
//
//       _._. In. state - Chunk
//
//  _. Slices
//
//       _._. Slice - Chunk
//
//  _. Store - Redux Toolkit way
//
//  _. Necessary exports for TS to work
//
//  _. Action Packs - Redux Toolkit way
