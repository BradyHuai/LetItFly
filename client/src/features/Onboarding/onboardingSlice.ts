import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  onboardingActive: false,
};

const onboardingSlice = createSlice({
  name: "appFrame",
  initialState,
  reducers: {
    setOnboardingActive: (state) => {
      state.onboardingActive = !state.onboardingActive;
    },
  },
});

export const { setOnboardingActive } = onboardingSlice.actions;

export default onboardingSlice.reducer;
