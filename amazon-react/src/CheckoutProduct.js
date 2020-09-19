import React from 'react'
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__product">
                    <strong>{price}</strong>
                    <small>€</small>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map(() => (
                        <p>🌟</p>
                    ))}
                </div>
                { !hideButton && (
                    <button onClick={removeFromBasket}>Remove from basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
