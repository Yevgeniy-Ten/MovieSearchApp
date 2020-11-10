import React, {useContext, useReducer} from "react";
import appReducer from "./appReducer";
import {hideAlert, hideLoad, showAlert, showLoad} from "../actionCreators";

const AppContext = React.createContext()
export const useApp = () => useContext(AppContext)

const initialState = {
    alertVisible: false,
    loading: false
}
const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(appReducer, initialState)

    const onAlert = (alertText = "", alertType = "warning") => dispatch(showAlert(alertText, alertType))
    const offAlert = () => (dispatch(hideAlert()))
    const onLoad = () => dispatch(showLoad())
    const offLoad = () => dispatch(hideLoad())
    return <AppContext.Provider value={{
        state,
        onAlert,
        offAlert,
        onLoad,
        offLoad
    }}>
        {children}
    </AppContext.Provider>

}
export default AppProvider