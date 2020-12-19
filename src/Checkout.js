import React from 'react'
import "./Checkout.css";
import banner from "./images/checkout_ad.jpg";
import SubTotal from './SubTotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{cart}, dispatch] = useStateValue();



    return (
        <div className="checkout">
            <div classNamec="checkout__left">
                <img className="checkout__ad" src={banner} alt="" />
                <div>
                    <h2 className="checkout__title">Your Deposits</h2>
                </div>
                {cart.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}/>
          ))}
                {/* cart item */}
                {/* cart item */}
                {/* cart item */}
                {/* cart item */}
                {/* cart item */}
            </div>
            <div className="checkout__right">
              <SubTotal/>
            </div>
            
            
        </div>
    )
}

export default Checkout
