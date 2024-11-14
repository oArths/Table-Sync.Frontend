import { combineReducers } from "redux";
import menuSlice from "./menu/slice";

const rootReducer = combineReducers({ menu: menuSlice});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
