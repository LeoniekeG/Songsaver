import React from "react";
import dressage from "../images/dressage.png";
import dressage2 from "../images/dressage2.png";

function Header() {
    return (
        <div>
            <header className="head">
                <img src={dressage} className="imageHeader"/> 
                <h1>Training progress</h1>
                <img src={dressage2} className="imageHeader"/>
            </header>
        </div>
    )
}

export default Header

