import React from "react";
import Spinner from "react-bootstrap/Spinner";
import {useApp} from "../../containers/App/AppContext";

const Loader = () => {
    const state = useApp()
    if (!state.loading) return null
    return (
        <Spinner animation="border" variant="info"/>
    );
};

export default Loader;
