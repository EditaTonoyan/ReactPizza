import { createStore, applyMiddleware, combineReducers } from "redux";
import pizzasListReduser from "./reducers/pizzasListReducer";
import thunk from "redux-thunk";
import registerReduser from "./reducers/registerReduser";

const reduser = combineReducers({
  pizzasListState: pizzasListReduser,
  registerState: registerReduser,
});

const store = createStore(reduser, applyMiddleware(thunk));

export default store;
