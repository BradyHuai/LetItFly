import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  onboardingActive: false,
  reload: false,
};

const onboardingSlice = createSlice({
  name: "appFrame",
  initialState,
  reducers: {
    setOnboardingActive: (state) => {
      state.onboardingActive = true;
    },
    setOnboardingInactive: (state) => {
      state.onboardingActive = false;
    },
    setReload: (state) => {
      state.reload = !state.reload;
    },
  },
});

export const {
  setOnboardingActive,
  setOnboardingInactive,
  setReload,
} = onboardingSlice.actions;

export default onboardingSlice.reducer;
