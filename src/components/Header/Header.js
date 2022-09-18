import React, { useState } from "react";
import images from '../../constants/images'
import SearchForm from "../SearchBar/SearchBar"
import Submenu from "../Submenu/Submenu";
import { useGlobalContext } from "../../context";

import './Header.css'

const Header = () => {

    const { isSubmenuOpen, setIsSubmenuOpen } = useGlobalContext()

    const toggleSubmenu = () => {
        setIsSubmenuOpen((prevValue) => !prevValue)
    }

    return (<div >
        <div className="header">
            <div className="header--logo">
                <a href='/'><img src={images.logo} alt='logo-image' className="header--logo-img"></img></a>
            </div>
            <div className="header--search">
                <img src={images.search} alt='search=image' className="search-image"></img>
                <SearchForm />
            </div>
            <div className="header--info">
                <div className="header--info-explore submenu" onClick={toggleSubmenu}>
                    <h4 className="submenu">Explore</h4>
                    <img src={images.directionDown} className='submenu'></img>
                </div>

                <div className="header--info-name">
                    <h4>Jemma</h4>
                    <img src={images.Ellipse6}></img>
                </div>
                <div className='header--info-type-image'><img src={images.typeDefault} ></img></div>
            </div>

        </div>
        {isSubmenuOpen && <Submenu />}
    </div>
    )
}

export default Header