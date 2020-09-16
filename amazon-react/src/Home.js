import React from 'react';
import "./Home.css";
import Product from './Product';
import Footer from './Footer';

function Home() {
    
    return (
        <div className="home">
            <div className="home__container">
            {/* <video  loop autoPlay muted className="home__image">
                <source src="../public/Video/battlefield-trailer.mp4" type="video/mp4" />
            </video> */}
            <img
                className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/03/kindle/journeys/YTNkYTJjMWMt/YTNkYTJjMWMt-Mzc4NDcxNzYt-w1500._CB410650290_.jpg" 
                alt="" 
            />

            <div className="home__row">
                <Product 
                    id="12434091"
                    title="Wacom Intuos Pen Tablet Compatible with Windows and Mac small"
                    price={56.84 + "€"}
                    image="https://images-na.ssl-images-amazon.com/images/I/51IwBFfRlVL._AC_SL1000_.jpg"
                    rating={5}
                />
                <Product
                    id="09213841"
                    title="GiroSmart HoverKart Go Kart Seat Scooter Extension for 6.5-10 Inch / 16.5 25.4 cm Self Balance Scooter"
                    price={58.99 + "€"}
                    image="https://images-na.ssl-images-amazon.com/images/I/51g7JnH-GfL._AC_SL1010_.jpg"
                    rating={4}
                />
            </div>

            <div className="home__row">
                <Product 
                    id="23890172"
                    title="Kroser Laptop Backpack 17.3 Inch Business Backpack School Rucksack Large Waterproof Travel Backpack Daypack with USB and RFID Pockets for Men/College / Men/Women Black Multiple Way"
                    price={33.99 + "€"}
                    image="https://images-na.ssl-images-amazon.com/images/I/8136AnqWLEL._AC_SL1500_.jpg"
                    rating={4}
                />
                <Product 
                    id="83012348"
                    title="Gemlux Electric Stand Blender - Mixer, Smoothie Maker, Shaker, Blender, Crusher - For Cream, Cocktail, Shake, Soup etc. - Robust Stainless Steel Blade - Portable & for Worktop BL-430B"
                    price={38.90 + "€"}
                    image="https://images-na.ssl-images-amazon.com/images/I/71dj98%2B8ENL._AC_SL1500_.jpg"
                    rating={3}
                />
                <Product
                    id="39810213"
                    title="Stanbow Reading Lamp Book Clamp, Touch Switch, Clamp Lamp, USB Rechargeable, 9 LEDs With 3 Colour Temperatures, 360° Flexible Eye Protection, Mini Dimmable Clamp Light"
                    price={9.99 + "€"}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Vy0n7PCnL._AC_SL1500_.jpg"
                    rating={4}
                />
            </div>

            <div className="home__row">
                <Product 
                    id="09213841"
                    title="AmazonBasics head strap for GoPro action camera"
                    price={8.93 + "€"}
                    image="https://images-na.ssl-images-amazon.com/images/I/710ERU80dXL._AC_SL1500_.jpg"
                    rating={5}
                />
            </div>
            <Footer />
        </div>
    </div>
    )
}

export default Home;