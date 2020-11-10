import React from "react";
import Form from "react-bootstrap/Form"

const KinoPoiskForm = ({inputVal, onChange, onDropDown}) => {
    return (
        <>
            <Form.Group>
                <Form.Label>Search for TV SHOW:</Form.Label>
                <Form.Control onFocus={onDropDown} autoFocus size="lg" onChange={onChange}
                              value={inputVal} type="text"
                              placeholder="TV Show name"/>
            </Form.Group>
        </>
    );
};

export default KinoPoiskForm;
