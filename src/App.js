import React from "react";
import '../src/styles/App.css'
import Navbar from "./components/UI/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    )
}

export default App;
