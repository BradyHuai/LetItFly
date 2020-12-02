/**
 * Created by Jimmy Lan
 * Creation Date: 2020-10-26
 */

import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage/session";

import userAuthReducer from "../features/authentication/userAuthSlice";
import appFrameReducer from "../common/components/AppFrame/appFrameSlice";
import onboardingReducer from "../features/Onboarding/onboardingSlice";

const persistedAuthReducer = persistReducer(
  {
    key: "root",
    storage,
  },
  userAuthReducer
);

const persistedAppFrameReducer = persistReducer(
  {
    key: "root",
    storage,
  },
  appFrameReducer
);

const reducers = combineReducers({
  userAuth: persistedAuthReducer,
  appFrame: persistedAppFrameReducer,
  onboarding: onboardingReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
