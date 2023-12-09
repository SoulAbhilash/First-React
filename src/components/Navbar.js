import React from "react";
import "../style.css"

export default function Navbar() {
    return (
        <nav id="nav">
            <div className="nav">
                <div className="nav-container">
                    <img src="/images/logo512.png" width="29px" height="29px"></img>
                    <h3>React</h3>
                </div>
                <div className="project">
                    <h4>React Course - Project 1</h4>
                </div>
            </div>
        </nav>
    )
}