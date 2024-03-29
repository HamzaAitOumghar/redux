import C from '../constants';
import { combineReducers } from 'redux';

export const goal = (state = 10, action) => (action.type === C.SET_GOAL)
    ? parseInt(action.payload)
    : state;

export const skiDay = (state = null, action) => (action.type === C.ADD_DAY)
    ? action.payload
    : state;


export const errors = (state = [], action) => {
    switch (action.type) {
        case C.ADD_ERROR:
            return [
                ...state,
                action.payload
            ]
        case C.CLEAR_ERROR:
            return state.filter((message, i) => i !== action.payload);
        default:
            return state;
    }
}

export const allSkiDays = (state = [], action) => {


    switch (action.type) {
        case C.ADD_DAY:

            const hadDayAlready = state.some(skiDay => skiDay.date === action.payload.date);

            return (hadDayAlready) ? state : [
                ...state,
                skiDay(null, action)
            ];
        case C.REMOVE_DAY:
            return state.filter((skiDay) => skiDay.date !== action.payload)
        default:
            return state;
    }

}

export const fetching = (state = false, action) => {
    switch (action.type) {
        case C.FETCH_RESORT_NAMES:
            return true;
        case C.CANCEL_FETCHING:
            return false;
        default:
            return state;
    }
}

export const suggestions = (state = [], action) => {
    switch (action.type) {
        case C.CLEAR_SEUGGESTIONS:
            return [];
        case C.CHANGE_SUGGESTIONS:
            return action.payload;
        default:
            return state;
    }
}


export default combineReducers({
    allSkiDays,
    goal,
    errors,
    resortNames: combineReducers({
        fetching,
        suggestions
    })
})