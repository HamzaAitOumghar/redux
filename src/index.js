import C from './constants';
import appReducer from './store/reducers';
import initialState from './initialState.json';
import { stat } from 'fs';


let state = initialState;

console.log(`
    Initial state
    =============
    goal: ${state.goal}
    resorts: ${JSON.stringify(state.allSkiDays)}
    fetching: ${state.resortNames.fetching}
    suggestions: ${state.resortNames.suggestions}
`)

const action = {
    type: C.SET_GOAL,
    payload: 20
}

state=appReducer(state,action);

state = appReducer(state,{
    type:C.ADD_DAY,
    payload:{
        "resort": "Hamza ait oumghar",
        "date": "2019-12-7",
        "powder": false,
        "backcountry": false
    }
})
console.log(`
    Final state
    =============
    goal: ${state.goal}
    resorts: ${JSON.stringify(state.allSkiDays)}
    fetching: ${state.resortNames.fetching}
    suggestions: ${state.resortNames.suggestions}
`)
