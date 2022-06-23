import React from "react";
import { ReactDOM } from "react";
import astersik from '../../images/astersik.svg'
import innerAsterisk from '../../images/inner-asterisk.svg'


export default function Nav() {
    return(
        <nav>
            <div className="logo">
                <img src={astersik} alt="" id="big"/>
                <img src={innerAsterisk} alt="" id="small"/>
                <span>Agency</span>
            </div>
            <div className="menu">
                <p><a href="/">About</a></p>
                <p><a href="/">Services</a></p>
                <p><a href="/">Pricing</a></p>
                <p><a href="/">Blog</a></p>
            </div>
            <div className="contact">
                <p ><a href="/">Contact</a></p>
            </div>
        </nav>
    )
}