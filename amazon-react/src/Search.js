import React, { useState } from 'react';
import './Search.css';
import productList from "./product-list";
import Product from "./Product";

function Search() {
    let searchQ = window.location.href.split("=")
    // if(item.title.includes(searchQ[1])) {
    //     console.log("ITEM", item.title)

    return (
        <div className="search">
            {searchQ[0] && productList.filter(item => item.title.toLowerCase().includes(searchQ[1]).toLowerCase).length > 0? productList.map(item => {
                if (item.title.toLowerCase().includes(searchQ[1].toLowerCase())) {
                    return <Product 
                        id={item.prodID}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        rating={item.rating} 
                    />
                } 
            }) : <h1 style={{color: "white"}}>Sorry, the product you've searched for is not available!</h1>}

        </div>
    )
}

export default Search
