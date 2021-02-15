import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="header__wrapper">
            <div className="header__logo">
            </div>
            {/*Search*/}
            <div className="header__search">
                <div className="header__searchContainer">
                    <input placeholder="Search" type="text"/>
                </div>
            </div>
            {/*Menu*/}
            <div className="header__menuItems">
            <a href="/">Account</a>
            </div>
        </div>
    )
}

export default Header
