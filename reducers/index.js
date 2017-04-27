import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import navigation, { navigationEpic } from './navigation';

export const rootReducer = combineReducers({
    navigation
})

export const rootEpic = combineEpics(
    navigationEpic
)
