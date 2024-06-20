import React, { useState, useRef } from "react";
import logo1 from '../Images/logo1.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbarr() {
    
    const [isSearchBar1Visible, setSearchBar1Visible] = useState(false);
    const [isSearchBar2Visible, setSearchBar2Visible] = useState(false);
    const [isSidebarVisible, setSidebarVisible] = useState(false);
    const [isSignUpVisible, setSignUpVisible] = useState(false);
    const [isSignUpBoxScaled, setSignUpBoxScaled] = useState(false);
    const [isSignInVisible, setSignInVisible] = useState(false);

    const crossRef = useRef(null);

    const displaysrch = () => setSearchBar1Visible(true);
    const displaysrch2 = () => setSearchBar2Visible(true);
    const displaysidebar = () => {
        setSidebarVisible(true);
        setTimeout(() => {
            if (crossRef.current) crossRef.current.style.display = 'block';
        }, 200);
    };
    const closeheader = () => {
        setSidebarVisible(false);
        if (crossRef.current) crossRef.current.style.display = 'none';
    };
    const handleLinkClick = () => closeheader();
    
    const showSignUpForm = () => {
        setSignUpVisible(true);
        setTimeout(() => setSignUpBoxScaled(true), 100);
    };
    const hideSignUpForm = () => {
        setSignUpBoxScaled(false);
        setTimeout(() => setSignUpVisible(false), 400);
    };
    const toggleToSignIn = () => {
        setSignInVisible(true);
        setSignUpVisible(false);
    };
    const toggleToSignUp = () => {
        setSignInVisible(false);
        setSignUpVisible(true);
    };
   

    return (
        <>
            <div className="navbar">
                <div className={`headerbar ${isSidebarVisible ? 'visible' : ''}`}>
                    <div className="search-section">
                        <ul>
                            <li>
                                <Link to='/' onClick={handleLinkClick}>
                                    <i className="fa-solid fa-house-chimney"></i>
                            
                            </Link>
                            </li>
                            <li>
                                {!isSearchBar1Visible && (
                                    <i className="fa-solid fa-magnifying-glass searchicon" id="searchicon1" onClick={displaysrch}></i>
                                )}
                            </li>
                            <div className={`searchbar ${isSearchBar1Visible ? 'visible' : ''}`} id="searchinput1">
                                <input type="search" name="" id="" />
                                <i className="fa-solid fa-magnifying-glass srchicon"></i>
                            </div>
                            <li><i className="fa-solid fa-user" id="user-mb" onClick={showSignUpForm}></i></li>
                        </ul>
                    </div>
                    <div className="contents">
                        <ul>
                            <li className="list"><Link to='/' onClick={handleLinkClick}>Home</Link></li>
                            <li className="list"><Link to='/about' onClick={handleLinkClick}>About Us</Link></li>
                            <li className="list"><Link to='/foodmenu' onClick={handleLinkClick}>Food menu</Link></li>
                            <li className="list"><Link to='/booking' onClick={handleLinkClick}>Book a table</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="logo">
                    <img src={logo1} alt="logo" height={60} width={60} />
                </div>
                <div className="icons">
                    <i className="fa-solid fa-bars" onClick={displaysidebar}></i>
                    <i className="fa-solid fa-xmark" id="cross" ref={crossRef} onClick={closeheader}></i>
                </div>
                <div className="contents">
                    <ul>
                        <li className="list"><Link to='/' onClick={handleLinkClick}>Home</Link></li>
                        <li className="list"><Link to='/about' onClick={handleLinkClick}>About Us</Link></li>
                        <li className="list"><Link to='/foodmenu' onClick={handleLinkClick}>Food menu</Link></li>
                        <li className="list"><Link to='/booking' onClick={handleLinkClick}>Book a table</Link></li>
                    </ul>
                </div>
                <div className="search-section">
                    <ul>
                        <li><i className="fa-solid fa-house-chimney"></i></li>
                        <li>
                            {!isSearchBar2Visible && (
                                <i className="fa-solid fa-magnifying-glass searchicon" id="searchicon2" onClick={displaysrch2}></i>
                            )}
                        </li>
                        <div className={`searchbar ${isSearchBar2Visible ? 'visible' : ''}`} id="searchinput2">
                            <input type="search" />
                            <i className="fa-solid fa-magnifying-glass srchicon"></i>
                        </div>
                        <li><i className="fa-solid fa-user" id="user" onClick={showSignUpForm}></i></li>
                    </ul>
                </div>
            </div>

            {isSignUpVisible && (
                <div className="sign" style={{ display: 'flex' }}>
                    <div className={`sign-box ${isSignUpBoxScaled ? 'scaled' : ''}`}>
                        <div className="bar">
                            <i className="fa-solid fa-xmark" id="x-sign-mb" onClick={hideSignUpForm}></i>
                        </div>
                        {isSignInVisible ? (
                            <div className="signin" style={{ display: 'block' }}>
                                <h3>Sign In</h3>
                                <form action="#">
                                    <label htmlFor="email2">Enter Your E-mail:</label>
                                    <input type="email" placeholder="E-mail" name="email2" id="email2" />
                                    <label htmlFor="password2">Enter Password: </label>
                                    <input type="password" placeholder="Password" name="password2" id="password2" />
                                    <input type="submit" value="Sign In" />
                                </form>
                                <p>Forgot Password?</p>
                                <p id="to-signup" onClick={toggleToSignUp}>Don't have an account? Sign Up</p>
                            </div>
                        ) : (
                            <div className="signup" style={{ display: 'block' }}>
                                <h3>Sign Up</h3>
                                <form action="#">
                                    <label htmlFor="fullname">Enter Full Name</label>
                                    <input type="text" placeholder="Full Name" name="fullname" id="fullname" />
                                    <label htmlFor="email">Enter E-mail</label>
                                    <input type="email" placeholder="E-mail" name="email" id="email" />
                                    <label htmlFor="password">Create Password</label>
                                    <input type="password" placeholder="Password" name="password" id="password" />
                                    <label htmlFor="copassword">Confirm Password</label>
                                    <input type="password" placeholder="Confirm Password" name="copassword" id="copassword" />
                                    <input type="submit" value="Sign Up" />
                                    <p id="to-signin" onClick={toggleToSignIn}>Already have an account? Sign In</p>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbarr;
