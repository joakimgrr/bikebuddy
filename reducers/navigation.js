import { Observable } from 'rxjs/Observable';
import 'rxjs'; //TODO: fix this, is it really needed to add the whole rxjs?
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import initialState from './initialState';

import {
    START_NAVIGATION,
    STOP_NAVIGATION,
    UPDATE_DISTANCE
} from '../actions';

const navigation = (state = {}, action) => {
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
        case UPDATE_DISTANCE:
            return {
                ...state,
                distance: action.distance
            }
        default:
            return state
    }
}

export const navigationEpic = (action$) => {
    //return action$.filter(action => action.type === 'UPDATE_DISTANCE').mapTo({ type: 'PONG' });
    return action$.ofType('START_NAVIGATION')
        .delay(1000)
        .mapTo({type: 'STOP_NAVIGATION'})
    //return Observable.of({ type: 'START_NAVIGATION'})
}


export default navigation;
