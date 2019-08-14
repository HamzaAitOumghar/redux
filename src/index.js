import storeFactory from './store';
import {addDay,removeDay,setGoal} from './store/action';
import initialState from './initialState';


const store = storeFactory(initialState);


store.dispatch(
    addDay('Heavenly','2016-12-22')
);

store.dispatch(
    removeDay('2016-12-22')
);

store.dispatch(
    setGoal(60)
);