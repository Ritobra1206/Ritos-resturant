import React,{useEffect} from "react";
import './CSS/Menu.css';
import item1 from'../Components/Images/item1.jpeg';
import item2 from'../Components/Images/item2.png';
import item3 from'../Components/Images/item3.png';
import item4 from'../Components/Images/item4.jpeg';
import item5 from'../Components/Images/item5.jpeg';
import item6 from'../Components/Images/item6.jpg';
import item7 from'../Components/Images/item7.jpg';
import item8 from'../Components/Images/item8.jpeg';
import item9 from'../Components/Images/item9.jpg';
import item10 from'../Components/Images/item10.jpg';
import item11 from'../Components/Images/item11.jpeg';
import item12 from'../Components/Images/item12.jpeg';
function Menu(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <>
        <div className="menu">
        <div className="menu1">
            <div>
                <h1>Food Menu</h1>
            </div>
            <div className="fav-head">
                
                <div className="fav-food">
                    <div className="item">
                        <div>
                            <img src={item1} alt="Food item" />
                        </div>
                        <h3>Biriyani</h3>
                        <p>Fragrant basmati rice layered with tender meat </p>
                        <p className="fav-price">Rs.350</p>
                    </div>
                    <div className="item">
                        <div>
                            <img src={item2} alt="Food item" />
                        </div>
                        <h3>Paneer Masala</h3>
                        <p>Savor the creamy indulgence of our Paneer</p>
                        <p className="fav-price">Rs.250</p>
                    </div>
                    <div className="item">
                        <div>
                            <img src={item3} alt="Food item" />
                        </div>
                        <h3>Fish curry</h3>
                        <p>Dive into a sea of flavor with our Fish Curry </p>
                        <p className="fav-price">Rs.300</p>
                    </div>
                    <div className="item">
                        <div>
                            <img src={item4} alt="Food item" />
                        </div>
                        <h3>Chicken Tandoor</h3>
                        <p>Experience the fiery allure of our Chicken Tandoor </p>
                        <p className="fav-price">Rs.275</p>
                    </div>
                    <div className="item">
                        <div>
                            <img src={item5} alt="Food item" />
                        </div>
                        <h3>Fried Rice</h3>
                        <p>Delight in the savory satisfaction of our Fried Rice </p>
                        <p className="fav-price">Rs.250</p>
                    </div>
                    <div className="item">
                        <div>
                            <img src={item6} alt="Food item" />
                        </div>
                        <h3>Burger</h3>
                        <p>Indulge in burger bliss with our mouthwatering creation </p>
                        <p className="fav-price">Rs.150</p>
                    </div>
                    <div className="item">
                        <div>
                            <img src={item7} alt="Food item" />
                        </div>
                        <h3>Scezwan Chowmein</h3>
                        <p>Kick your taste buds into high gear with our fiery Schezwan Chow Mein </p>
                        <p className="fav-price">Rs.385</p>
                    </div>
                    <div className="item">
                        <div>
                            <img src={item8} alt="Food item" />
                        </div>
                        <h3>Hakka Noodles</h3>
                        <p>Satisfy your cravings with our Hakka Noodles </p>
                        <p className="fav-price">Rs.280</p>
                    </div>
                    <div className="item">
                        <div>
                            <img src={item9} alt="Food item" />
                        </div>
                        <h3>Dosa</h3>
                        <p>Experience South Indian culinary tradition with our crispy Dosa </p>
                        <p className="fav-price">Rs.90</p>
                    </div>
                    <div className="item">
                        <div>
                            <img src={item10} alt="Food item" />
                        </div>
                        <h3>Pepeeroni Pasta</h3>
                        <p>Indulge in pasta perfection with our mouthwatering creations </p>
                        <p className="fav-price">Rs.290</p>
                    </div>
                    <div className="item">
                        <div>
                            <img src={item11} alt="Food item" />
                        </div>
                        <h3>Chole Bhature</h3>
                        <p>Savor the authentic flavors of India with our Chole Bhature</p>
                        <p className="fav-price">Rs.80</p>
                    </div>
                    <div className="item">
                        <div>
                            <img src={item12} alt="Food item" />
                        </div>
                        <h3>Pav Bhaji</h3>
                        <p>Embark on a flavorful journey with our Pav Bhaji, a Mumbai street food favorite </p>
                        <p className="fav-price">Rs.70</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}
export default Menu;