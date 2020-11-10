import React from "react";
import Form from "react-bootstrap/Form"

const KinoPoiskForm = () => {
    return (
        <Form.Group>
            <Form.Label>Search for TV SHOW:</Form.Label>
            <Form.Control size="lg" type="text" placeholder="TV Show name"/>
        </Form.Group>
    );
};

export default KinoPoiskForm;
