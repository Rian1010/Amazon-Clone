import React, { useState } from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import productList from "./product-list";
import Product from "./Product";
import { useQuery } from "react-query";

function Header(event) {
    const  [searchQuery, setSearchQuery] = useState("")
    // useState({
    //     searchID: "",
    //     searchQ: "",
    //     searchPrice: "",
    //     searchImage: "",
    //     searchRating: ""
    // })
    console.log(searchQuery)
    
    // console.log(searchQuery, "HERE")

    // let theSearch = productList.some(searchQuery => searchQuery.title === productList.title)
    
    // console.log(theSearch, "seee")
    const [{ basket, user }] = useStateValue();
    function handleSearch(event) {
        const searching = event.target.value
        setSearchQuery(searching)
    }

    let history = useHistory();
    function sendSearch(e) {
        let nameAttr = e.target.getAttribute("name");
        history.push("/search?" + nameAttr + "=" + searchQuery);
    }
    // function handleSearch(event) {
    //     const value = event.target.value
    //     setSearchQuery(prevValue => {
    //         productList.map(item => {
    //             console.log(value, "&", item.title)
    //             if(item.title.includes(value)) {
    //                 return searchQuery.searchID = item.id, 
    //                         searchQuery.searchQ = item.title, 
    //                         searchQuery.searchPrice = item.price, 
    //                         searchQuery.searchImage = item.image,
    //                         searchQuery.searchRating = item.rating,
    //                  <Product
    //                 id=""
    //                 title={searchQuery}
    //                 price={1}
    //                 image=""
    //                 rating={1}
    //                 />
    //             }
    //             else if (value == "") {
    //                 return searchQuery.searchQ = "",
    //                 searchQuery.searchID = "",
    //                 searchQuery.searchPrice = "",
    //                 searchQuery.searchImage = "",
    //                 searchQuery.searchRating = 0
    //             }
    //             else {
    //                 return searchQuery.searchQ = "Sorry, No Product Was Found",
    //                         searchQuery.searchID = "",
    //                         searchQuery.searchPrice = "",
    //                         searchQuery.searchImage = "",
    //                         searchQuery.searchRating = 0
    //             }
    //         })
                 
    //         return {
    //             ...prevValue,
    //             searchVal: value,
    //         }
    //     })
    // }

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    // const { data, status } = useQuery(searchQuery, useStateValue());
    // const UserSearch = () => {
    //     console.log("DATA: ", data);
    // }
    return (
        <div>
        <div className='header'>
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
            <div className="header__searchContainer">
                <form onSubmit={sendSearch} className="header__search">
                    <input 
                        name="searchQ"
                        placeholder="Search Product"
                        onChange={handleSearch}
                        value={searchQuery} 
                        type="text"
                        className="header__searchInput"
                        required
                    />
                    <button className="btn" type="submit">
                        <SearchIcon className="header__searchIcon" />
                    </button>
                </form>
            </div>

            <div className="header__nav">
                <Link to={!user && "/login"}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">Hello {user?.email || "Guest"}</span>
                        <span className="header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>
                <Link to="/orders">
                    <div className="header__option">
                        <span className="header__optionLineOne">Return</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header_basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
        </div>
    )
}



export default Header
