import React, { useState } from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import productList from "./product-list";

function Header(event) {
    const [searchQuery, setSearchQuery] = useState("");
    const [word, setWord] = useState("")

    const [{ basket, user }] = useStateValue();
    function handleSearch(event) {
        const searching = event.target.value;
        setWord(searching)
        setSearchQuery(searching)
    }

    let history = useHistory();
    function sendSearch(e) {
        let nameAttr = e.target.getAttribute("name");
        history.push("/search?" + nameAttr + "=" + searchQuery);
    }

    function sendClickedSearch(e) {
        let wordClicked = e.currentTarget.innerHTML;
        history.push("/search?searchQ=" + wordClicked);
        window.location.reload();
    }

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

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
                    <div className="header__searchSuggestionsContainer">
                    {/* The Code Below, Generates Search Suggestions */}
                    {word && productList.filter(product => product.title.toLowerCase().includes(word.toLowerCase())).length > 0 ? productList.map(product => {
                            if (product.title.toLowerCase().includes(word.toLowerCase())) {
                                return <div className="header__searchSuggestions" onClick={word ? sendClickedSearch : null}>{ product.title.slice(0, 80) }{product.title.length > 80 ? "..." : ""}</div>
                            }
                        }) : ""
                    }
                    </div>
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
