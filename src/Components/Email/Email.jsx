import React from "react";
import './Email.css';
function Email(){
    return(
        <>
       <div className="letter">
            <div className="letter-head">
                <h2>Subscribe <span>Newsletter</span></h2>
            </div>
            <div className="letter-input">
                <div>
                    <input type="email" placeholder="Example@email.com" />
                </div>
                <button className="red_btn">Subscribe</button>
            </div>
        </div>

        </>
    )
}
export default Email;