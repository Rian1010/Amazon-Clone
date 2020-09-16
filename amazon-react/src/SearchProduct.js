import React from 'react'
import './SearchProduct.css';
import { useStateValue } from "./StateProvider";

function SearchProduct({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    console.log("This is the basket >>> ", basket)

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    }

    return (
        <div className='searchproduct'>
            <img className="searchProduct__image" src={image} />

            <div className="searchProduct__info">
                <p className="searchProduct__title">{title}</p>

                <p className="searchProduct__price">
                    <strong>{price}</strong>
                </p>
                <div className="searchProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
                <button onClick={addToBasket}>Add to Basket</button>

            </div>
        </div>
    )
}

export default SearchProduct
