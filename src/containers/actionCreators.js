import {HIDE_ALERT, HIDE_LOAD, SHOW_ALERT, SHOW_LOAD} from "./actionTypes"

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