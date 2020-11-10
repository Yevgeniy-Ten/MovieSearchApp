import React, {useEffect, useReducer} from "react";
import {Switch, Route, Redirect} from "react-router-dom"
import KinoPoiskForm from "../../components/KinoPoiskForm/KinoPoiskForm";
import KinoList from "../../components/KinoList/KinoList";
import {kinoPoiskReducer} from "./kinoPoiskReducer";
import {showDropdown, hideDropdown, searchInputChange, newTVShows} from "../actionCreators";
import {getRequest} from "./instanse";
import {useApp} from "../App/AppContext";


const initialState = {
    searchInputVal: "",
    tvShows: [],
    dropdownShow: false
}
const KinoPoisk = () => {
    const {onAlert, onLoad, offLoad} = useApp()
    const [state, dispatch] = useReducer(kinoPoiskReducer, initialState)
    useEffect(() => {
        getTVShowsByInputVal(state.searchInputVal).then(setNewTVShows)
    }, [state.searchInputVal])
    const getTVShowsByInputVal = async (val = "") => {
        const validSearch = val.length >= 2
        if (validSearch) {
            onLoad()
            try {
                const searchURI = `/search/shows?q=${val}`
                const response = await getRequest(searchURI)
                return response.data
            } catch (e) {
                onAlert(`Some error:( :${e.message}`)
            } finally {
                offLoad()
            }
        }
    }
    const setNewTVShows = (shows) => {
        if (!shows || !shows.length) return;
        dispatch(newTVShows(shows))
    }
    const onChangeSearchInput = (e) => dispatch(searchInputChange(e.target.value))
    const offDropDown = () => dispatch(hideDropdown())
    const onDropDown = () => dispatch(showDropdown())
    return (
        <>
            <KinoPoiskForm offDropDown={offDropDown}
                           onDropDown={onDropDown}
                           inputVal={state.searchInputVal}
                           onChange={onChangeSearchInput}/>
            {state.dropdownShow && <KinoList prefix={state.searchInputVal} shows={state.tvShows}/>}
        </>
    )
}
export default KinoPoisk