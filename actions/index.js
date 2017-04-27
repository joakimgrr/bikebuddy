export const START_NAVIGATION = 'START_NAVIGATION';
export const STOP_NAVIGATION = 'STOP_NAVIGATION';
export const UPDATE_DISTANCE = 'UPDATE_DISTANCE';

export function startNavigation() {
    return {
        type: START_NAVIGATION
    }
}

export function stopNavigation() {
    return {
        type: STOP_NAVIGATION
    }
}

export function updateDistance(distance) {
    return {
        type: UPDATE_DISTANCE,
        distance
    }
}
