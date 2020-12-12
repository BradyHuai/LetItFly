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

import onboardingReducer from "../features/Onboarding/onboardingSlice";
import userAuthReducer from "./redux/userAuthSlice";
import userProfileReducer from "./redux/userProfileSlice";
import userPropertyReducer from "./redux/userPropertySlice";
import appFrameReducer from "./redux/appFrameSlice";

const persistedAuthReducer = persistReducer(
  {
    key: "root",
    storage,
  },
  userAuthReducer
);
const persistedProfileReducer = persistReducer(
  {
    key: "root",
    storage,
  },
  userProfileReducer
);
const persistedPropertyReducer = persistReducer(
  {
    key: "root",
    storage,
  },
  userPropertyReducer
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
  userProfile: persistedProfileReducer,
  userProperty: persistedPropertyReducer,
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
