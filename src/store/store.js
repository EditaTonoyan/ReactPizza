import { createStore, applyMiddleware,combineReducers } from 'redux';
import pizzasListReduser from './reducers/pizzasListReducer';
import thunk from 'redux-thunk';

const reduser = combineReducers({
    pizzasListState: pizzasListReduser,
});

const store = createStore(reduser, applyMiddleware(thunk));

export default store;
