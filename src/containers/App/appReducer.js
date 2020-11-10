import {SHOW_ALERT, HIDE_ALERT, SHOW_LOAD, HIDE_LOAD} from "../actionTypes"

const handlers = {
    [SHOW_ALERT]: (state, {payload}) => ({...state, ...payload, alertVisible: true}),
    [HIDE_ALERT]: state => ({...state, alertVisible: false}),
    [SHOW_LOAD]: (state) => ({...state, loading: true}),
    [HIDE_LOAD]: (state) => ({...state, loading: false}),
    DEFAULT: state => (state)
}

const appReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}
export default appReducer