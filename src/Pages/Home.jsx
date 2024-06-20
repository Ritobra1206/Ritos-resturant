import React from "react";
import './CSS/Home.css';
import Section1 from "../Components/Section1/Section1";


import Popular from "../Components/Section2/Popular";
import Customer from "../Components/Customer/Customer";
import Email from "../Components/Email/Email";

function Home(){
    return(
        <>
        <div className="home-page">
        <Section1/>
        <Popular/>
        <Customer/>
        <Email/>
        
        </div>
        </>
    )
}
export default Home;