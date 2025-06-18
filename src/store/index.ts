import { configureStore, combineReducers } from "@reduxjs/toolkit";
import weatherReducer from "./reducers/weatherReducer";
import alertreducers from "./reducers/alertReducer";

// combining reducers helps make the app scalable
const rootReducer = combineReducers({
  weather: weatherReducer,
  alert: alertreducers,
});

// store - central container
// 1 - hold the entire app state
// 2 - allows to read the current state
// 3 - lets dipsatch aciton to update state
// 4 - registers listeners to respond to changes
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
