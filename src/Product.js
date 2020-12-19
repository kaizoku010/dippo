import React from 'react'
import "./Product.css"
import Star from "@material-ui/icons/Star"
import { useStateValue } from './StateProvider';
import { Link } from '@material-ui/core';


function Product({id, title, image, price, rating}) {
    const [cart, dispatch] = useStateValue();

    
    const deposit = () => {
        dispatch({
            type: "DEPOSIT",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });

    };


    // const itWorks = () => {
    //     <Link to={"/product/" + product.id}></Link>

    // };
   
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price" >
                    <small>UGX</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                   <Star className="rating__star" />
                    ))}
           
                    </div>
            </div>
    
           <img src={image} alt=""/>
   
            <button onClick={deposit}>Deposit</button>
        </div>
    )
}

export default Product
