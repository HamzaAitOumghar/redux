import storeFactory from './store';
import {suggestResortNames} from './store/action';
import initialState from './initialState';


const store = storeFactory(initialState);


store.dispatch(
    suggestResortNames("ham")
);
