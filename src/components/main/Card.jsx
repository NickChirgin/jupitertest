import React from "react";


export default function Card(props){
    const highlight = (e) =>{
        let parent = e.target.closest('div')
        parent.classList.toggle('highlight')
        console.log(parent)
    }

    

    return(
        <div className="card">
            <img src={props.url} alt="" onClick={highlight}/>
            <button onClick={props.handleClick} value={props.category}>{props.category}</button>
            <p value={props.id} >{props.name}</p>
            <p hidden={true}>{props.cardid}</p>
        </div>
    )
}