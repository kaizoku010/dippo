import React from 'react'
import './Header.css'
import logo from './images/logo.png'
import SearchIcon from "@material-ui/icons/Search"
import Shopping_bag from "@material-ui/icons/ShoppingCart"
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';


function Header() {
    const [{cart}, dispatch] = useStateValue();
    return (
        <div className="header">
            <Link to ="/">
            <img src={logo} className="header__logo" />
            </Link>
            <div className="header__search">
                <input className="header__searchInput"
                    type="text" alt="sasas"/>
                {/* logo */}     
                <SearchIcon className="header__searchIcon"/>

            </div>
            <div className="header__nav">

                <div className="header__option">
                    <span className="header__optionLineOne">Hello Guest</span>
                    <span className="header__optionLineTwo">sign in</span>
                </div>

                <div className="header__option">
                <span className="header__optionLineOne">Returns &</span>
                    <span className="header__optionLineTwo">Dippo Wallet</span>
     
                </div>

                <div className="header__option">
                <span className="header__optionLineOne">About</span>
                    <span className="header__optionLineTwo">Dippo</span>
    
                </div>
                <Link to ="/checkout">
                <div className="header__optionBasket">
                    <Shopping_bag />
                    <span className="header__optionLineTwo header__basketCount">{cart?.length}</span>
                    </div>
                    </Link>
            </div>
        </div>
    )
}

export default Header
