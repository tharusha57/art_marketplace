import Reac, { useState } from "react";
import { images } from "../../constants";

import './Card.css'

const Card = ({ image, name, artistImage, artist,id }) => {
    const [open, setopen] = useState(false)
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked((prevValue) => !prevValue)       
    }

    return (

            <div className="card" onclick="new.html';">
                <div className="card-image" >
                    <div className="card-image-button"
                        onMouseOver={() => setopen(true)}
                        onMouseOut={() => setopen(false)}
                        onClick={handleClick}
                    >
                        {clicked ? <img src={images.stateAdded} ></img> : <img src={open ? images.stateHover : images.stateDefault} ></img>}

                    </div>
                    <a href={`${id}`} className='card-image-cover'><img src={image}></img></a>
                </div>
                <div className="card-details">
                    <p>{name}</p>
                    <div className="card-detail-artists">
                        <img src={artistImage}></img>
                        <p>{artist}</p>
                    </div>
                </div>
            </div>
    )
}

export default Card