import React from "react";
import logo  from '../Images/logo1.png';
import about from '../Images/about1.png';
import './Footer.css';
function Footer(){
    return(
        <>
        <div className="footer">
        <div className="footer-1">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div>
                <br/>
                <address>
                    <p><b style={{"color":" rgb(253, 57, 8)"}}>Email:</b><b> Ritoschef@gmail.com </b></p>
                        
                    <p><b style={{"color":" rgb(253, 57, 8)"}}>Address:</b><br />Chakdaha,Nadia<br /> West Bengal,India </p>
                </address>
            </div>
        </div>
        <div className="footer-2">
            <img src={about} alt="" height={50} width={50}/>
            <h2>Powered by <em>Ritobrata</em></h2>
        </div>
    </div>
        </>
    )
}
export default Footer;