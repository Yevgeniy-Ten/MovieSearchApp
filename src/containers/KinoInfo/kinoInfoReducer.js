import {NEW_SHOWED_KINO} from "../actionTypes";

export const kinoInfoReducer = (state, action) => {
    const {type, payload} = action
    switch (type) {
        case NEW_SHOWED_KINO:
            return payload
        default:
            return state
    }
}