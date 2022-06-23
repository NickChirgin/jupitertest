import React from "react";


export default function Category({handleClick}){
    return(
        <nav className="main-nav">
            <div>
                <button onClick={handleClick} value=''>Show All</button>
                <button onClick={handleClick} value='Countries'>Countries</button>
                <button onClick={handleClick} value='Food'>Food</button>
                <button onClick={handleClick} value="Games">Games</button>
                <button onClick={handleClick} value="Cats">Cats</button>
            </div>
        </nav>
    )
}