import C from '../constants';
import thunk from 'redux-thunk';

export function addDay(resort, date, powder = false, backcountry = false) {

    return {
        type: C.ADD_DAY,
        payload: { resort, date, powder, backcountry }
    }
}


export function removeDay(date) {

    return {
        type: C.REMOVE_DAY,
        payload: date
    }
}

export const setGoal = (goal) => ({
    type: C.SET_GOAL,
    payload: goal
})

export const addErrors = (error) => {
    return ({
        type: C.ADD_ERROR,
        payload: error
    });
}
export const clearErrors = (errorNumber) => {
    return ({
        type: C.CLEAR_ERROR,
        payload: errorNumber
    })
}

export const changeSuggestions = (suggestion) => ({
    type: C.CHANGE_SUGGESTIONS,
    payload: suggestion
})


export const clearSuggestions = () => ({
    type: C.CLEAR_SEUGGESTIONS
})

//first thunk


export const randomGoals = () => (dispatch, getState) => {

    if (!getState().resortNames.fetching) {
        
        dispatch({
            type: C.FETCH_RESORT_NAMES
        });

        setTimeout(() => {
            dispatch({
                type: C.CANCEL_FETCHING
            });
        }, 1500);

    }
    

}