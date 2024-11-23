import {legacy_createStore} from "redux";
import tacheReducers from "./reducers/tacheReducers";
const store =legacy_createStore(tacheReducers)
export default store