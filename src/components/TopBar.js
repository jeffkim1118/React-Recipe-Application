import React from "react"
import { Link } from "react-router-dom";

export default function TopBar(){
    return(
        <div className="Topbar">
            <nav>
                <ul>
                    <li><a>Recipe App</a></li>
                    <li><a ><Link to='/LikedRecipes' className="like-btn">Liked</Link></a></li>
                </ul>
                
            </nav>
           
        </div>
    )
}