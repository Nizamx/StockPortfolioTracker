import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="Header-wrapper">
            {/*Logo*/}
            <div className="Header-logo">
            </div>
            {/*Search*/}
            <div className="Header-search">
                <div className="Header-searchContainer">
                    <input placeholder="Search" type="text"/>
                </div>
            </div>
            {/*Menu*/}
            <div className="Header-menu">
                <a href="#">Free Stocks</a>
                <a href="#">Portfolio</a>
                <a href="#">Cash</a>
                <a href="#">Messages</a>
                <a href="#">Account</a>
            </div>
        </div>
    )
}

export default Header
