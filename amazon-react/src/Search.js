import React, { useState } from 'react';
import './Search.css';
import productList from "./product-list";
import SearchProduct from "./SearchProduct";

function Search() {
    let searchQ = window.location.href.split("=");
    let searchPercentage = searchQ[1].replace("%20", "+")
    let query = searchPercentage.replace("+", " ")
    // if(item.title.includes(searchQ[1])) {
    //     console.log("ITEM", item.title)

    return (
        <div className="search">
            {query && productList.filter(item => item.title.toLowerCase().includes(query.toLowerCase())).length > 0? productList.map(item => {
                if (item.title.toLowerCase().includes(query.toLowerCase())) {
                    return <SearchProduct 
                        id={item.prodID}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        rating={item.rating} 
                    />
                } 
            }) : <h1 className="search__notAvailable">{searchQ[1] ? "Sorry, " + searchQ[1] + " is not available!" : "You haven't entered a search query"}</h1>}

        </div>
    )
}

export default Search
