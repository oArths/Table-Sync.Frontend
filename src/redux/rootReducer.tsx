import { combineReducers } from "redux";
import menuSlice from "./menu/slice";
import responseSlice from "./response/slice";

const rootReducer = combineReducers({ menu: menuSlice, response : responseSlice});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
