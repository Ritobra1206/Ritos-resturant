import React from "react";
import foodplate from '../Images/food_plate.jpeg'
import item1 from'../Images/item1.jpeg';
import item2 from'../Images/item2.png';
import item3 from'../Images/item3.png';
import plate1 from '../Images/plate1.png';
import plate2 from '../Images/plate2.png';
import plate3 from '../Images/plate3.png';
import plate4 from '../Images/plate4.png';
import { Link, useNavigate } from "react-router-dom";

import './Section1.css';
function Section1(){
  const navigate=useNavigate();
  function navigation(){
    navigate('/foodmenu')
  }
    return(
        <>
           <div className="home">
 
  <div className="main_content">
    <div>
      <h1>Enjoy <span> Flavoursome Food </span> in Your Healthy Life</h1>
      <p>Discover the Perfect Blend of Flavor and Ambiance
At <b>Ritoschef</b>, we believe dining is not just about eating, but an experience that tantalizes all your senses.<br/>
        <b style={{"color":" rgb(253, 57, 8)"}}>Order Now:</b><b>8617542662</b>
 </p>
 
      <Link to='/booking'><button className="btn">Visit Now <i className="fa-solid fa-arrow-right-long" /></button></Link>
    </div>
    <div>
      <img src={foodplate} alt="foodplate" height={260} />
    </div>
  </div>
 <div className="foods">
  <div className="item">
    <div>
      <img src={item3} alt="Food item" height={120} width={120}/>
    </div>
    <h3>Fish Curry</h3>
    <p>Savory fish cooked to perfection in a rich and aromatic blend of spices, coconut milk, and fresh herbs.</p>
    <button className="white_btn" onClick={navigation}>See Menu</button>
  </div>
  <div className="item">
    <div>
      <img src={item1} alt="Food item" height={120} width={120}/>
    </div>
    <h3>Biriyani</h3>
    <p>Fragrant basmati rice layered with tender meat, aromatic spices, and saffron, served with cooling raita.</p>
    <button className="white_btn" onClick={navigation}>See Menu</button>
  </div>
  <div className="item">
    <div>
      <img src={item2} alt="Food item" height={120} width={120}/>
    </div>
    <h3>Paneer Butter Masala</h3>
    <p>Soft cubes of paneer simmered in a creamy tomato gravy with a perfect balance of spices.</p>
    <button className="white_btn" onClick={navigation}>See Menu</button>
  </div>
</div>
<div className="main_content2">
  <div className="foodimg">
    <img src={plate1} alt="foodplate" />
  </div>
  <div className="question">
    <div>
     <h2>Why People Choose Us?</h2>
    </div>
    <div>
      <div className="qans">
        <div>
          <img src={plate2} alt="foodplate" height={100} width={100}/>
        </div>
        <div>
          <h4>Choose your favorite Tandoor Dish</h4>
          <p>Experience the authentic taste of our Tandoor dishes, expertly prepared using traditional recipes and the finest ingredients. Whether you prefer succulent kebabs or flavorful breads, our Tandoor selection offers something for everyone. Savor the rich aromas and delightful flavors that will transport you to the heart of India.</p>
        </div>
      </div>
      <div className="qans">
        <div>
          <img src={plate3} alt="foodplate" height={100} width={100}/>
        </div>
        <div>
          <h4>Choose your favorite Continental Dish</h4>
          <p>Experience the authentic taste of our Continental dishes, expertly prepared using traditional recipes and the finest ingredients. Whether you prefer succulent steaks or flavorful salads, our Continental selection offers something for everyone. Savor the rich aromas and delightful flavors that will transport you to the heart of Europe.</p>
        </div>
      </div>
      <div className="qans">
        <div>
          <img src={plate4} alt="foodplate" height={100} width={100} />
        </div>
        <div>
          <h4>Choose your favorite Italian Dish</h4>
          <p>Experience the authentic taste of our Italian dishes, expertly prepared using traditional recipes and the finest ingredients. Whether you prefer succulent pasta or flavorful pizzas, our Italian selection offers something for everyone. Savor the rich aromas and delightful flavors that will transport you to the heart of Italy.</p>
        </div>
      </div>
    </div>
  </div>
</div>



 </div>

    </>
    )
}
export default Section1;