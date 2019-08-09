import C from './constants';
import appReducer from './store/reducers';
import initialState from './initialState.json';
import { createStore } from 'redux';



const store = createStore(appReducer,initialState);

console.log('initial state', store.getState());

store.dispatch({
    type: C.ADD_DAY,
    payload: {
        "resort": "Hamza",
        "date": "2019-03-7",
        "powder": true,
        "backcountry": false
    }
});
console.log('next state', store.getState());
