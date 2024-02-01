import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { AppDataOfCurrentUser } from "@/types";

const appDataOfCurrentUser: AppDataOfCurrentUser = {
  eventsWithNeeds: {
    chestWithAllDayLongEvents: { necessary: [], oneDay: [] },
    libraryOfTemplateEvents: [],
    sheduleOfHourlyPlannedEvents: [],
  },
};

const appDataOfCurrentUserSlice = createSlice({
  name: "appDataOfCurrentUserSlice",
  initialState: appDataOfCurrentUser,
  reducers: {
    setAppDataOfCurrentUser(state, action: PayloadAction<any>) {
      state.eventsWithNeeds = action.payload.eventsWithNeeds;
      //TODO: add test of properties setters - remember, thayt you can't just do "state = action.payload"
      console.log("new events state", state.eventsWithNeeds);
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
