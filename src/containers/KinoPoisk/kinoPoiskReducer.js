import {KINO_DROPDOWN_HIDE, KINO_DROPDOWN_OPEN, NEW_TVShows, SEARCH_INPUT_CHANGE} from "../actionTypes";

export const kinoPoiskReducer = (state, action) => {
    const {type, payload} = action
    switch (type) {
        case SEARCH_INPUT_CHANGE:
            return {...state, searchInputVal: payload};
        case NEW_TVShows:
            return {...state, tvShows: payload, dropdownShow: true}
        case KINO_DROPDOWN_HIDE:
            return {...state, dropdownShow: false}
        case KINO_DROPDOWN_OPEN:
            return {...state, dropdownShow: true}
        default:
            return state
    }
}