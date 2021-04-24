import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
           <div className="home__container">
               <img className="home__image"
               src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_01_FT._CB657360537_.jpg"
                alt=""/>

                <div className="home__row">
                    <Product title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not! Mass Market Paperback – 11 April 2017"
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SX312_BO1,204,203,200_.jpg"
                    rating={5}/>
                    
                    
                    <Product title="Kenwood KMX750RD stand mixer gives you a perfect baking and cooking experience.
                    Stylish Kitchen Mixer with K-beater ,Dough Hook and Whisky, 5 litres Glass Bowl."
                    price={239.0}
                    image="https://m.media-amazon.com/images/I/81+ExcA9MHL._AC_UY327_FMwebp_QL65_.jpg"
                    rating={4}/>
                   
                </div>
                <div className="home__row">
                <Product  title="AOPEN 27 inch Full HD 1800R Curve Gaming Monitor I VA Panel I 144Hz Refresh Rate I 4 MS Response Time I AMD Free Sync I Eye Care Features I 27HC1R (Black)"
                    price={199.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/812WXALePlL._SL1500_.jpg"
                    rating={4}/>
                <Product  title="All-new Echo Dot (4th Gen) with Alexa | Next generation smart speaker with improved bass (Black)"
                    price={100.12}
                    image="https://images-na.ssl-images-amazon.com/images/I/61KIy6gX-CL._SL1000_.jpg"
                    rating={5}/>
                <Product  title="New Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Rose Gold (Latest Model, 4th Generation)"
                    price={598.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/71uiwxeUiZL._SL1500_.jpg"
                    rating={4}/>

                </div>
                <div className="home__row">
                <Product  title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
                    price={1094.98}
                    image="https://images-na.ssl-images-amazon.com/images/I/8199O-5w1xL._SL1500_.jpg"
                    rating={5}/>
                
                <Product title="Logitech G29 Driving Force Racing Wheel and Floor Pedals, Real Force, Stainless Steel Paddle Shifters, Leather Steering Wheel Cover, Adjustable Floor Pedals, PS5/PS4/PS3/PC/Mac – Black"
                price={468.97}
                image="https://images-na.ssl-images-amazon.com/images/I/615ryXpNQLL._SL1500_.jpg"
                rating={5}/>

                </div>
           </div>
        </div>
    )
}

export default Home
