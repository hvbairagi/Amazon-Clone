import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from "react-router-dom"
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


// {basket?.length} => optional chaining which means if you have basket error or undefine, it won't freekout... handles error
function Header() {
    const[ {basket, user}, dispatch ] = useStateValue();
    const userName = user? user.email.substring(0, user.email.indexOf('@')) : 'Guest';
    // alert(user?.email.substring(0, 4));
    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/">
               <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </Link>
            
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <Link to={!user && "/login"}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">Hello {userName}</span>
                        <span className="header__optionLineTwo">{user? 'Sign Out' : 'Sing In'}</span>
                    </div>
                </Link>
                
                <Link to='/orders'>     {/* Checks USER in Orders.js so no need to check in here */}
                    <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                
                <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <Link to="/checkout">  {/* there is no refresh */}
                    <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Header
