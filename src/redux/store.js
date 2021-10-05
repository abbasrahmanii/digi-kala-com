import { createStore } from "redux";
import reducer from "./reducer";

// const rootReducer = combineReducers({
//   reducer: reducer,
// });

const store = createStore(reducer);

export default store;
