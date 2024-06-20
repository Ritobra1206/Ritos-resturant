import React,{useEffect} from "react";
import masterchef from'../Components/Images/about1.png';
import chef1 from '../Components/Images/chef1.png';
import chef2 from '../Components/Images/chef2.png';
import chef3 from '../Components/Images/chef3.png';
import chef4 from '../Components/Images/chef4.png';
import './CSS/About.css';

function About(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
        <div className="about">
        <div className="about1">
            <div className="aboutpara">
                <h1>About Us</h1>
                <p>Welcome to our culinary heaven where flavors unite! We are a vibrant restaurant specializing in both Indian and Continental cuisines, dedicated to providing you with an unforgettable dining experience. From the rich spices of India to the savory delights of the Western palate, we offer a diverse menu crafted with passion and precision. Join us on a gastronomic journey where every dish tells a story and every bite is a celebration of taste.</p>
            </div>
            <div className="aboutimg">
                <img src={masterchef} alt="" />
            </div>
        </div>

       
        <div className="about2">
            <h1>Our Golden Chefs</h1>
            <div className="food-items">
                <div className="item">
                    <div>
                        <img src={chef1} alt="Food item" />
                    </div>
                    <h3>Ritobrata</h3>
                    <p>Experience culinary excellence guided by the masterful hands and creative flair of our esteemed chef.</p>
                </div>
                <div className="item">
                    <div>
                        <img src={chef2} alt="Food item" />
                    </div>
                    <h3>Atreyee</h3>
                    <p>Experience culinary excellence guided by the masterful hands and creative flair of our esteemed chef.</p>
                </div>
                <div className="item">
                    <div>
                        <img src={chef3} alt="Food item" />
                    </div>
                    <h3>Saptarshi</h3>
                    <p>Experience culinary excellence guided by the masterful hands and creative flair of our esteemed chef.</p>
                </div>
                <div className="item">
                    <div>
                        <img src={chef4} alt="Food item" />
                    </div>
                    <h3>Suman</h3>
                    <p>Experience culinary excellence guided by the masterful hands and creative flair of our esteemed chef.</p>
                </div>
            </div>
        </div>
        
        <div className="about3">
            <h1>Our Story</h1>
            <p>Embark on a journey with us, where passion for food meets dedication to service. From humble beginnings to culinary excellence, our story is a tale of flavor, innovation, and heartfelt hospitality.Our story begins in the heart of a bustling city, where a small, family-owned restaurant set out to redefine dining experiences. With a shared love for culinary arts and a commitment to authenticity, our founders embarked on a mission to create a space where every meal tells a story.</p>
        </div>
    </div>
        </>
    )
}
export default About;