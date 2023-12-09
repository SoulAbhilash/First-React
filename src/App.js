import React from "react";
import { ReactDOM } from "react-dom";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";

export default function App(){
    return (
        <div>
            <Navbar />
            <MainContent />
        </div>
    )
}