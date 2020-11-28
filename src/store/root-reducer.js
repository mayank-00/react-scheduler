import { combineReducers } from "redux";

import slotsReducer from './slots/reducer';

export default combineReducers({
    slots: slotsReducer
})