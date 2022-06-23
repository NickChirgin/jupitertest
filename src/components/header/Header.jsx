import React from "react";
import { ReactDOM } from "react";
import Nav from "./Nav";

function Header() {
    return(
        <header>
            <Nav />
            <h1>Portfolio</h1>
            <p className="agency">Agency provides a full service range including technical skills, design, business understanding.</p>
        </header>
    )
}

export default Header