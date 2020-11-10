import React from "react";

import AppProvider from "./AppContext";
import KinoPoisk from "../KinoPoisk/KinoPoisk";
import Layout from "../../components/Layout/Layout";

const App = () => (
    <AppProvider>
        <Layout>
            <KinoPoisk/>
        </Layout>
    </AppProvider>
)
export default App