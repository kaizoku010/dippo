import React from 'react'
import "./CheckoutProduct.css"
import Starr from "@material-ui/icons/Star"
import { useStateValue } from './StateProvider';


function CheckoutProduct({ id, image, title, price, rating }) {
    const [{cart}, dispatch] = useStateValue();
    const removeDeposit = () => {
        dispatch({
            type: "REMOVE_DEPOSIT",
            id:id,
        })
    }



    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image}/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduct__price">
                    <small>UGX</small>
                    <strong>{price}</strong>
                </p>
                <div className="heckoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map(() => (
                            <Starr className="checkoutProduct__star"/>
                        ))}
                </div>

                <button onClick={removeDeposit}>Remove From Deposits</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
