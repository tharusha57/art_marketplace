import React from 'react'
import { images } from '../../constants'

import './Submenu.css'


const Submenu = () => {
    return (
        <div className='header--submenu submenu'>
            <div>
                <img src={images.person}></img>
                <h3><a href="/allarts">All Arts</a></h3>
            </div>
            <div>
                <img src={images.person}></img>
                <h3><a href="/collections">Collection</a></h3>
            </div>
            <div>
                <img src={images.person}></img>
                <h3><a href="/artists">Artists</a></h3>
            </div>
        </div>
    )
}

export default Submenu


