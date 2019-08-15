import storeFactory from './store';
import {randomGoals} from './store/action';
import initialState from './initialState';


const store = storeFactory(initialState);


store.dispatch(
    randomGoals()
);


// store.dispatch(
//     addDay('Heavenly','2016-12-22')
// );

// store.dispatch(
//     removeDay('2016-12-22')
// );

// store.dispatch(
//     setGoal(60)
// );

// store.dispatch(
//     addErrors("FILE NOT FOUND EXCEPTION")
// );
// store.dispatch(
//     clearErrors(0)
// );

// store.dispatch(
//     changeSuggestions(["One","Two","Three"])
// );

// store.dispatch(
//     clearSuggestions()
// );

