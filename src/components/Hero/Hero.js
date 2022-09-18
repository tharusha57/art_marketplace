import React from 'react'
import { images } from '../../constants'

import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero--details'>
                <p>Featured Art</p>
                <h1>Nisi, sit erat lorem sed tincidunt in.</h1>
                <div className='hero--details--profile'>
                    <img src={images.EllipseLogo}></img>
                    <p>Brooklyn Simmons</p>
                </div>
            </div>
            <div className='hero--frame'>
                <img src={images.frame}></img>
            </div>
        </div>
    )
}

export default Hero