import React from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import CurrencyFormat from 'react-currency-format';

const Checkout = () => {
    // pull in the basket from the store
    // we need dispatch only if we need to manipulate basket (add / remove)
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
                {/* if nothing in the basket show me my stuff */}
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                        <p>
                            You have no items in your basket. To buy one or more items, click 'Add
                            to Basket' next to the item.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                        {/* List out all of the Checkout Products */}

                        {/* Debugging */}
                        {/* {basket.map((item) => {
                        console.log(item);
                        return (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        );
                    })} */}
                        {basket.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            {basket?.length > 0 && (
                <div className="checkout__right">
                    {/* <h1>Subtotal</h1> */}
                    <Subtotal />
                </div>
            )}
        </div>
    );
};
// npm i react-currency-format
export default Checkout;
