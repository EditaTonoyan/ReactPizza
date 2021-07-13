import { createStore, combineReducers } from 'redux';
import pizzasListReduser from './reducers/pizzasListReducer';

const reduser = combineReducers({
    pizzasListState: pizzasListReduser,
});

const store = createStore(reduser);

export default store;
