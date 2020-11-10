import React from "react";
import Loader from "../../components/Loader/Loader";
import AppProvider from "./AppContext";
import KinoPoisk from "../KinoPoisk/KinoPoisk";
import Layout from "../../components/Layout/Layout";

const App = () => (
    <AppProvider>
        <Layout>
            <Loader/>
            <KinoPoisk/>
        </Layout>
    </AppProvider>
)
export default App