import React from "react";
import './Customer.css';
import logo1 from '../Images/logo1.png';
import chef from '../Images/chef.png';
function Customer(){
    return(
        <>
            <div className="main_slide4">

<div className="chef-feed">
    <h2>Customer <span style={{ color: "red" }}>Feedback</span></h2>
    <p>Discover why our customers are raving about their dining experience! From the tantalizing aroma to the burst of flavors, our dishes leave a lasting impression. Come taste excellence today!<br/><b>Let's here the testimonial:</b>
        <br/>
    "Absolutely loved the Chicken Tandoor! The blend of spices was just perfect, and the chicken was incredibly tender. Definitely coming back for more!"<br/>~Sayak






    </p>
    <div className="chef-detail">
        <div>
            <img src={logo1} alt="" height={50} width={50}/>
        </div>
       
    </div>
    <div className="chef-vic">
        <div>
            <i className="fa-solid fa-hand-peace" />
            <h4>68</h4>
            <p>Peace and food all the way!  </p>
        </div>
        <div>
            <i className="fa-solid fa-trophy" />
            <h4>956</h4>
            <p>Breaking the records! </p>
        </div>
    </div>
</div>
<div className="chef">
    <img src={chef} alt="" />
</div>
</div>

        </>
    )
}
export default Customer;