import React,{useState} from "react";
const Searchbar=()=>{
    return(
        <>
            <div className="search-box">
                <div className="search-bar">
                    <img src="search-img.svg" className="search-img"/>
                    
                    <input type="search" className="search-button"/>
                    <button type="button" className="go-button">Go</button>
                </div>
            </div>
        </>
    )
}
export default Searchbar;


