import { combineReducers } from 'redux';

import { START_NAVIGATION, STOP_NAVIGATION } from '../actions';

const initialState = {
    navigation: {
        active: false
    }
}

function navigation(state = initialState, action) {
    switch (action.type) {
        case START_NAVIGATION:
            return {
                ...state,
                active: true
            }
        case STOP_NAVIGATION:
            return {
                ...state,
                active: false
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    navigation
})

export default rootReducer;
