import React, { useState } from 'react';
import './Search.css';
import productList from "./product-list";
import SearchProduct from "./SearchProduct";

function Search() {
    let searchQ = window.location.href.split("=")
    // if(item.title.includes(searchQ[1])) {
    //     console.log("ITEM", item.title)

    return (
        <div className="search">
            {searchQ[1] && productList.filter(item => item.title.toLowerCase().includes(searchQ[1].toLowerCase())).length > 0? productList.map(item => {
                if (item.title.toLowerCase().includes(searchQ[1].toLowerCase())) {
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
