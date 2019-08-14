import storeFactory from './store';
import {addDay} from './store/action';
import initialState from './initialState';


const store = storeFactory(initialState);


store.dispatch(
    addDay('Heavenly','2016-12-22')
);