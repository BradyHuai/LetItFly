import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  onboardingActive: false,
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
  },
});

export const { setOnboardingActive } = onboardingSlice.actions;

export default onboardingSlice.reducer;
