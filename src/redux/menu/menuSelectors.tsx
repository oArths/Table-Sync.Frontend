import { RootState } from "../rootReducer";

export const selectMenuState = (state: RootState) => state.menu.open;
