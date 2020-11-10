import React from "react";
import Appbar from "../Appbar/Appbar";
import Container from "react-bootstrap/Container";
import AppAlert from "../AppAlert/AppAlert";

const Layout = ({children}) => (
    <div className="bg-dark text-white min-vh-100">
        <Appbar/>
        <AppAlert/>
        <Container className="mt-3">
            {children}
        </Container>
    </div>
)

export default Layout;
