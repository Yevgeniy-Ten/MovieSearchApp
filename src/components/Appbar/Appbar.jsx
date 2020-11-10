import React from "react";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";

const Appbar = () => (
    <Navbar variant="dark" expand="md" bg="info">
        <Link to="/" className="navbar-brand">TV Shows</Link>
        <Navbar.Toggle aria-controls="nav"/>
        <Navbar.Collapse id="nav" className="justify-content-end">
            <Navbar.Text>
                Signed in as: <a href="https://t.me/yevgeniy_ten">Ten Yevgeniy</a>
            </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
);
export default Appbar;
