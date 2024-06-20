import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import item1 from'../Images/item1.jpeg';
import item2 from'../Images/item2.png';
import item3 from'../Images/item3.png';
import item4 from'../Images/item4.jpeg';
import {  useNavigate } from "react-router-dom";
import './Popular.css';

function Popular() {

    const navigate=useNavigate();
    function navigation(){
      navigate('/foodmenu')
    }
    return (
        <>
            <div className="popular-food">
                <h3>Our Popular Food Items</h3>
                <p>Discover the flavors that keep our customers coming back for more! From mouthwatering burgers to heavenly desserts, our popular food items are sure to delight your taste buds.</p>
            </div>
            <div className="section2-container">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                   
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{ clickable: true }}
                    modules={[EffectCoverflow, Pagination]}
                    className="swiper_container"
                    onSwiper={(swiper) => {
                       

                        swiper.slideTo(2);
                    }}
                >
                    <SwiperSlide>
                        <div className="ppfood">
                            <div>
                                <img src={item1} alt="Food item" />
                            </div>
                            <h3>Biriyani</h3>
                            <p>Savor the aromatic blend of spices and tender meat in every flavorful bite of our signature biryani.</p>
                            <p className="fav-price">Rs.350</p>
                            <button className="white_btn" onClick={navigation}>See Menu</button>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="ppfood">
                            <div>
                                <img src={item2} alt="Food item" />
                            </div>
                            <h3>Paneer Butter Masala</h3>
                            <p>Indulge in creamy decadence with our Paneer Butter Masala, where succulent paneer meets rich, buttery goodness in every spoonful</p>
                            <p className="fav-price">Rs.250</p>
                            <button className="white_btn" onClick={navigation}>See Menu</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="ppfood">
                            <div>
                                <img src={item3} alt="Food item" />
                            </div>
                       
                            <h3>Fish Curry</h3>
                           
                            <p>Dive into a sea of flavor with our Fish Curry, where every spoonful is a journey through coastal spices and tender, flaky fish.</p>
                           
                            <p className="fav-price">Rs.300</p>
                            <button className="white_btn" onClick={navigation}>See Menu</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="ppfood">
                            <div>
                                <img src={item4} alt="Food item" />
                            </div>
                            <h3>Chicken Tandoor</h3>
                            <p>Experience the fiery charm of the tandoor with our succulent Chicken Tandoor, where each tender bite is infused with smoky, aromatic flavors.</p>
                            <p className="fav-price">Rs.275</p>
                            <button className="white_btn" onClick={navigation}>See Menu</button>
                        </div>
                    </SwiperSlide>
                  
                   
                  
                  
                    
                </Swiper>
            </div>
        </>
    );
}

export default Popular;
