import React, { useEffect, useState } from "react";
import Category from "./Category";
import Card from "./Card";
import array from "../Array";


export default function Main(){
    let cards = array
    let initialState =[]
    var filteredCards = []
    var filteredArray = []
    let imageFilter = ''
    const [load, setLoad] = useState(initialState)
    const [filtering, setFiltering] = useState('')
    const [counter, setCounter] = useState(9)
    var count = 9
    let indexRemover = 0
  
    
    useEffect(() =>{
        setLoad(load)
    }, [load])
    useEffect(() =>{
        setFiltering(filtering)
    }, [filtering])
    useEffect(() =>{
        setCounter(counter)
    }, [])
    
    

    useEffect(() => {
        window.addEventListener("keydown", deleteItem);
      }, []);

    const deleteItem = (e) =>{
        if (e.keyCode === 46){
            
            let item = document.querySelector('.highlight')
            console.log(item.lastChild.innerHTML)
            for (let i=0; i< cards.length; i++){
                if (cards[i].id == item.lastChild.innerHTML){
                    indexRemover = i
                }
            }
            cards.splice(indexRemover, 1)
            imageFilter = filtering
            if(imageFilter === ''){
                filteredCards = []
                for (let i=0; i < cards.length; i++){
                    filteredCards.push(<Card key={cards[i].id} category={cards[i].category} name={cards[i].name} url={cards[i].url} handleClick={clickHandler} onKeyDown={deleteItem} cardid={cards[i].id}/>)
                }
            }
            else{
                filteredCards = imageFiltering(imageFilter)
            }
            
            filteredArray = []
            console.log(count)
           for (let i=0; i<counter; i++){
            filteredArray.push(filteredCards[i])
           }
           setLoad(filteredArray)
        }
    }
    const  clickHandler = async (e) => {
        setLoad([])
        count = 9
        setCounter(9)
        imageFilter = e.target.value
        setFiltering(e.target.value)
        if(imageFilter === ''){
            filteredCards = []
            for (let i=0; i < cards.length; i++){
                filteredCards.push(<Card key={cards[i].id} category={cards[i].category} name={cards[i].name} url={cards[i].url} handleClick={clickHandler} onKeyDown={deleteItem}cardid={cards[i].id}/>)
            }
        }
        else{
            filteredCards = imageFiltering(imageFilter)
        }
        
        filteredArray = []
       for (let i=0; i<count; i++){
        filteredArray.push(filteredCards[i])
       }
       setLoad(filteredArray)
       console.log(filtering)
       return (count,imageFilter)
    }

    for (let i=0; i < 9; i++){
        initialState.push(<Card key={cards[i].id} category={cards[i].category} name={cards[i].name} url={cards[i].url} handleClick={clickHandler} onKeyDown={deleteItem} cardid={cards[i].id}/>)
    }

    const imageFiltering = (imageFilter) =>{
        return cards.filter(card => card.category === imageFilter).map(card => <Card key={card.id} category={card.category} name={card.name} url={card.url} handleClick={clickHandler} onKeyDown={deleteItem} cardid={card.id}/> )
    }
    

    const loadList = () =>{
        setCounter(counter+9)
        count = counter + 9
        if(filtering === ''){
            filteredCards = []
            for (let i=0; i < cards.length; i++){
                filteredCards.push(<Card key={cards[i].id} category={cards[i].category} name={cards[i].name} url={cards[i].url} handleClick={clickHandler} onKeyDown={deleteItem}cardid={cards[i].id}/>)
            }
        }
        else{
            filteredCards =  imageFiltering(filtering)
        }
        
        
        console.log(count)
        for (let i=0; i<count; i++){
            filteredArray.push(filteredCards[i])
        }
        console.log(counter)
        setLoad(filteredArray)
        return count
    }
   

    
    return(
        <main>
            <Category handleClick={clickHandler}/>
            <div className="pagination">{load}</div>
            
            <div className="load">
                <p className="load-button" onClick={loadList}>Load more</p>
            </div>
            
        </main>
        
    )
}