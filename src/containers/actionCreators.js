import {
    HIDE_ALERT,
    HIDE_LOAD,
    KINO_DROPDOWN_HIDE,
    KINO_DROPDOWN_OPEN, NEW_SHOWED_KINO, NEW_TVShows,
    SEARCH_INPUT_CHANGE,
    SHOW_ALERT,
    SHOW_LOAD
} from "./actionTypes"

export const showAlert = (alertText, alertType) => ({
    type: SHOW_ALERT,
    payload: {alertText, alertType}
})
export const hideAlert = () => ({
    type: HIDE_ALERT,
})
export const showLoad = () => ({
    type: SHOW_LOAD
})
export const hideLoad = () => ({
    type: HIDE_LOAD
})
export const showDropdown = () => ({
    type: KINO_DROPDOWN_OPEN
})
export const hideDropdown = () => ({
    type: KINO_DROPDOWN_HIDE
})
export const searchInputChange = (payload) => ({
    type: SEARCH_INPUT_CHANGE, payload
})
export const newTVShows = (shows) => ({
    type: NEW_TVShows, payload: shows.map(show => show.show)
})
export const newShowedMovie = (payload) => ({
    type: NEW_SHOWED_KINO, payload
})