import React, {useEffect, useReducer} from "react";
import Loader from "../../components/Loader/Loader";
import KinoCard from "../../components/KinoCard/KinoCard";
import {getRequest} from "../KinoPoisk/instanse";
import {kinoInfoReducer} from "./kinoInfoReducer";
import {useApp} from "../App/AppContext";
import {newShowedMovie} from "../actionCreators";

const KinoInfo = (props) => {
    const {onLoad, offLoad, onAlert} = useApp()
    const [movie, dispatch] = useReducer(kinoInfoReducer, {})
    useEffect(() => {
        const {id} = props.match.params
        getInfoById(id)
        // eslint-disable-next-line
    }, [props.match.params.id])
    const getInfoById = (id) => {
        onLoad()
        const searchURI = `/shows/${id}`
        getRequest(searchURI).then(e => {
            setNewShowedMovie(e.data)
        }).catch(e => {
            onAlert(`Some error when find: ${e.message}`)
            props.history.replace("/")
        }).finally(offLoad)
    }
    const setNewShowedMovie = (movie) => dispatch(newShowedMovie(movie))
    return (
        <>
            <Loader/>
            {
                Object.keys(movie).length && <KinoCard movie={movie}/>
            }
        </>
    )
};

export default KinoInfo;
