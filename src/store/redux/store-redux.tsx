import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { AppDataOfCurrentUser } from "@/types";

const appDataOfCurrentUser: AppDataOfCurrentUser = {
  eventsWithNeeds: {
    chestWithAllDayLongEvents: { necessary: [], oneDay: [] },
    libraryOfTemplateEvents: [],
    sheduleOfHourlyPlannedEvents: [],
  },
};

// Usef for forcing rerenders of components.
// Why not useContext? Because useContext forces children to rerender in some cases
// (when there's a non-useRef value, like useState, for example) so it's not an
// actual substitute for a state management tool like Redux. That's cleaner, actually
//
// fR = force rerender
const fRFeaturesRanges = {
  // the prop names are the names of the components but in camelcase
  forceRerender: false,
};

const fRUserStoryAndBuildingBlocks = {
  forceRerender: false,
};

const appDataOfCurrentUserSlice = createSlice({
  name: "appDataOfCurrentUserSlice",
  initialState: appDataOfCurrentUser,
  reducers: {
    setAppDataOfCurrentUser(state, action: PayloadAction<any>) {
      state.eventsWithNeeds = action.payload.eventsWithNeeds;
      //TODO: add test of properties setters - remember, thayt you can't just do "state = action.payload"
    },
  },
});

const fRFeaturesRangesSlice = createSlice({
  name: "fRFeaturesRangesSlice",
  initialState: fRFeaturesRanges,
  reducers: {
    forceRerender(state) {
      state.forceRerender = !state.forceRerender;
    },
  },
});

const fRUserStoryAndBuildingBlocksSlice = createSlice({
  name: "fRUserStoryAndBuildingBlocksSlice",
  initialState: fRUserStoryAndBuildingBlocks,
  reducers: {
    forceRerender(state) {
      state.forceRerender = !state.forceRerender;
    },
  },
});

const store = configureStore({
  reducer: {
    // forced rerenders
    fRFeaturesRanges: fRFeaturesRangesSlice.reducer,
    fRUserStoryAndBuildingBlocks: fRUserStoryAndBuildingBlocksSlice.reducer,

    appDataOfCurrentUserReducer: appDataOfCurrentUserSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const appDataOfCurrentUserSliceActions =
  appDataOfCurrentUserSlice.actions;
export const fRFeaturesRangesSliceActions = fRFeaturesRangesSlice.actions;
export const fRUserStoryAndBuildingBlocksSliceActions =
  fRUserStoryAndBuildingBlocksSlice.actions;

export default store;
