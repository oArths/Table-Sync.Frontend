import rootReducer from "./rootReducer";
import { createLogger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

const logger = createLogger();

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
