import { createStore, combineReducers } from 'redux';
import pizzasListReduser from './reducers/pizzasListReducer';


const reduser = combineReducers({
    pizzasListState: pizzasListReduser
})


const store = createStore(reduser);
window.store = store;
export default store;