import React,{useState} from "react";
const Searchbar=()=>{
    return(
        <>
            <div className="search-box">
                <div className="search-bar">
                    <img src="search-img.svg" className="search-img"/>
                    <input type="search" className="search-button"/>
                    <p id="search-text">search</p>
                    
                </div>
                <button type="button" className="go-button">Go</button>
            </div>
        </>
    )
}
export default Searchbar;


// <div class="row main-input-btn">
// <div className='input-btn'>
//     <img src='search-logo.png' className='search-icon' />
//     <input type="search" placeholder="Search" className='search-bar' />
//     <button type="button" className='go-btn'>Go</button>
// </div>
// </div>