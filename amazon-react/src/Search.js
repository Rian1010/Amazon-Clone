import React from 'react';
import './Search.css';
import productList from "./product-list";
import SearchProduct from "./SearchProduct";

function Search() {
    let searchQ = window.location.href.split("=");
    let searchPercentage = decodeURI(searchQ[1]);
    let removeDots = searchPercentage.replace("...", "")
    let query = removeDots.replace("+", " ");

    return (
        <div className="search">
            {query && productList.filter(item => item.title.toLowerCase().includes(query.toLowerCase())).length > 0 ? productList.map(item => {
                if (item.title.toLowerCase().includes(query.toLowerCase())) {
                    return <SearchProduct 
                        id={item.prodID}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        rating={item.rating} 
                    />
                } 
            }) : <h1 className="search__notAvailable">{searchQ[1] ? "Sorry, "  + query + " is not available! (As this is a fake website, only the products available on the home page can be searched)" : "You haven't entered a search query"}</h1>}
        </div>
    )
}

export default Search
