import React from 'react';
import './Home.css';
import Product from './Product';

const Home = () => {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />

            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Product
                    id="12345"
                    title="Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                />
                <Product
                    id="12346"
                    title="AmazonBasics Water-Resistant Pet Bed for Small Dogs"
                    price={27.3}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61ylVny96HL._AC_SX679_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="12347"
                    title="AmazonBasics Casual Sports Backpack"
                    price={18.1}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/91ULzMo7OZL._AC_SX679_.jpg"
                />
                <Product
                    id="12348"
                    title="AmazonBasics Conscious Series Cool-Touch Rayon Bamboo Mattress Topper Pad - Twin XL"
                    price={37.2}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71o%2B9zkqeEL._AC_SX679_.jpg"
                />
                <Product
                    id="12349"
                    title="AmazonBasics Charcoal Grill - Portable, 18 Inch, Black"
                    price={59.49}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/713dYtCLWDL._AC_SX679_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="12344"
                    title="AmazonBasics High-Back Executive Swivel Office Desk Chair with Ribbed Puresoft Upholstery - Brick Red, Lumbar Support, Modern Style"
                    price={154.0}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71dN0dXJPWL._AC_SY879_.jpg"
                />
            </div>
        </div>
    );
};

export default Home;
