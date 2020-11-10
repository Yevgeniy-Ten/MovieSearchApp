import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import {useApp} from "../../containers/App/AppContext";

const AppAlert = () => {
    const {state, offAlert} = useApp()
    if (!state.alertText) return null
    return (
        <Alert show={state.alertVisible} variant={state.alertType}>
            <Alert.Heading className="text-center">{state.alertText}</Alert.Heading>
            <hr/>
            <div className="d-flex justify-content-end">
                <Button onClick={offAlert} variant={state.alertType}>
                    Close me!
                </Button>
            </div>
        </Alert>
    );
};

export default AppAlert;
