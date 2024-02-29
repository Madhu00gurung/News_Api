"use client"
// import "bootstrap/dist/css/bootstrap.min.css";
import React,{useState} from "react";
// import "./globals.css";

import Header from "./header";
import Searchbar from "./searchbar";
import Box from "./box";
import Footer from "./footer";
const Page=()=>{
    return(
        <>
            <Header/>
            <div className="container"> 
                <Searchbar/>
                <Box/>
            </div>
            <Footer/>
        </>
    );
}
export default Page;
