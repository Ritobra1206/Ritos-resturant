import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import './CSS/Booktable.css';
function Booktable(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
        
        <div className="table">
        <div className="sign">
            <div className="sign-box">
                <div className="bar">
                   <Link to='/'> <i className="fa-solid fa-xmark" id="x-sign-mb" /></Link>
                </div>
                <div className="signup">
                    <h3>Book Your Table</h3>
                    <form action="#">
                        <label htmlFor="name">Name</label><br />
                        <input type="text" placeholder="Full Name" name="name" id="" /><br />
                        <label htmlFor="email-table">E-mail</label><br />
                        <input type="email" placeholder="E-mail" name="email-table" id="" /><br />
                        <label htmlFor="date">Date</label><br />
                        <input type="date" name="date" id="" /><br />
                        <label htmlFor="time">Time</label><br />
                        <input type="time" name="time" id="" /><br />
                        <input type="submit" value="Book Now" />
                    </form>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}
export default Booktable;