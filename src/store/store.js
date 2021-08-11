import { createStore, applyMiddleware, combineReducers } from "redux";
import pizzasListReduser from "./reducers/pizzasListReducer";
import thunk from "redux-thunk";
import registerReduser from "./reducers/registerReduser";
import loginReducer from "./reducers/loginReducer";

const reduser = combineReducers({
  pizzasListState: pizzasListReduser,
  registerState: registerReduser,
  loginState: loginReducer,
});

const store = createStore(reduser, applyMiddleware(thunk));

export default store;
