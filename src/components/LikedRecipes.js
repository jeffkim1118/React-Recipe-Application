import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../App.css';


export default function LikedRecipes(){

    const[likedItem, storeItems] = useState([]);
   

    useEffect(()=>{
        fetch('http://localhost:8000/items/', {
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => storeItems(data))
    },[]);

    const deleteFav = (id) => {
        fetch(`http://localhost:8000/items/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(res => console.log(res))
    }


    return(
        <div>
            <Link to='/'>Go Back</Link>
            <div>
                {likedItem.map((items) => {
                    return(
                        <div key={items} className="item-container">
                            <p key={items.id}>{items.title}</p>
                            <img className="likedRecipePic" alt="food-pic" key={items.img} src={items.img}/><br/>
                            <button onClick={deleteFav}>Delete</button>
                        </div>                       
                    )
                })}
            </div>
            <br/>    
        </div>
    )
}