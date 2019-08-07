import C from './constants';
import { allSkiDays } from './store/reducers';

const state = [{
    "resort": "Kirkwood",
    "date": "2017-12-7",
    "powder": true,
    "backcountry": false
},
{
    "resort": "Test",
    "date": "2016-12-7",
    "powder": true,
    "backcountry": false
}];

const action = {
    type: C.REMOVE_DAY,
    payload: "2016-12-7"
}

const nextState = allSkiDays(state, action);

console.log(`
    initial state : ${JSON.stringify(state)}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}
`)