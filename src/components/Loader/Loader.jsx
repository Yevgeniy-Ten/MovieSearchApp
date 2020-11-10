import React from "react";
import Spinner from "react-bootstrap/Spinner";
import {useApp} from "../../containers/App/AppContext";

const Loader = () => {
    const state = useApp()
    if (!state.state.loading) return null
    return (
        <div className="d-flex justify-content-center align-items-center" style={{height: "100px"}}>
            <Spinner animation="border" variant="success"/>
        </div>
    );
};

export default Loader;
