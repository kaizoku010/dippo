import React from 'react'
import "./Home.css"
 import bg2 from "./images/banner2.jpg"
//import bg from './images/banner.jpg'1
import Product from './Product'
import console from "./images/console.jpg"
import fifa from "./images/fifa20.jpg"
import controller from "./images/camoController.jpg"
import ps4controller from "./images/controller.jpg"
import minecraft from "./images/minecraft.jpg"
import shoes from "./images/shoes.jpg"
import yoga from "./images/yoga.jpg"
import fleece from "./images/fleece.jpg"
import k2 from "./images/k2.png"
import robo from "./images/robo.jpg"
import yk from "./images/yk.png"



function Home() {

    return (
        <div className="home">
            <div className="home__container">
                <img className='home__image' src={bg2} alt=""/>
            </div>
            <div className="home__row">
                     {/* product 1 */}
                <Product title="A Nike Yoga Tank with a longer length and a little bit of stretch for extra coverage when you bend, stretch and balance. Dri-FIT technology wicks sweat to keep you dry."
                    price={2000000} image={yoga} rating={4} />
            
                {/* product 2 */}
                <Product title="The Officall PS4 Fifa 20 comes with Mardrid T-Shirt, in all colors"
                    price={400000} image={fifa} rating={3} />
         

            </div>
            <div className="home__row">
                 {/* product 3 */}
            <Product title="A PS4 Camo Controller with improved duel shook vibration, Black in color. leather handle and joysticks"
                    price={150000} image={controller} rating={5} />
                       {/* product 4 */}
                       <Product title="The Nike Yoga Fleece Cover Up made with soft thermal fabric for warm comfort. A relaxed, stretchy design lets you wear it as a V-neck or off the shoulder."
                    price={200000} image={fleece} rating={2} />
                           {/* product 5 */}
                           <Product title="Best Selling crossplatform game. Minecraft"
                    price={100000} image={ps4controller} rating={6} />
        
            </div>
            
            <div className="home__row">
                        {/* product 5 */}
                        <Product title="Brand New PlayStation 4 with 120GB HDD, Black in color. Comes with one controller and two video games"
                    price={100000} image={shoes} rating={3} />
            </div>

            <div className="home__row">
            <Product title="Brand New PlayStation 4 with 120GB HDD, Black in color. Comes with one controller and two video games"
                    price={100000} image={robo} rating={4} />
                 <Product title="Brand New PlayStation 4 with 120GB HDD, Black in color. Comes with one controller and two video games"
                    price={100000} image={console} rating={3} />
                 <Product title="Brand New PlayStation 4 with 120GB HDD, Black in color. Comes with one controller and two video games"
                    price={100000} image={yk} rating={5} />
                 <Product title="Brand New PlayStation 4 with 120GB HDD, Black in color. Comes with one controller and two video games"
                    price={100000} image={k2} rating={2} />
            </div>
            
        </div>
    )
}

export default Home
