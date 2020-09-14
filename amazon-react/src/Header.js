import React, { useState } from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import productList from "./product-list";
import Product from "./Product";
import { useQuery } from "react-query";

function Header(event) {
    const  [searchQuery, setSearchQuery] = useState({
        searchQ: ""
    })
    console.log(searchQuery)
    
    // console.log(searchQuery, "HERE")

    let sq = productList.title

    // let theSearch = productList.some(searchQuery => searchQuery.title === productList.title)
    
    // console.log(theSearch, "seee")
    const [{ basket, user }] = useStateValue();
    let the = []
    console.log(the, 2)
    function handleSearch(event) {
        const value = event.target.value
        setSearchQuery(prevValue => {
            productList.map(item => {
                console.log(value, "&", item.title)
                if(item.title.includes(value)) {
                    return searchQuery.searchQ = item.title
                    console.log(searchQuery.searchQ, 1)
                    // return <Product
                    // id=""
                    // title={item.title}
                    // price={1}
                    // image=""
                    // rating={1}
                    // />
                }
                else {
                    return <h2>Product not found</h2>
                }
            })
                 
            return {
                ...prevValue,
                searchQ: value,
            }
        })
    }

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
            <div className="header__search">
                <input 
                    name="searchQ"
                    onChange={handleSearch}
                    placeholder="Search Product"
                    value={searchQuery.searching}
                    className="header__searchInput" 
                    type="text"/>
                <SearchIcon className="header__searchIcon" />
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
        <Product 
            id=""
            title={the}
            price={1}
            image=""
            rating={1}
        />
        </div>
    )
}



export default Header
