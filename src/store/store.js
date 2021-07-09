import { createStore, combineReducers } from 'redux';
import pizzasListReduser from './reducers/pizzasListReducer';

const reduser = combineReducers({
    pizzasListState: pizzasListReduser,
});

const store = createStore(reduser);

// es tox@ animasta
window.store = store;
export default store;
