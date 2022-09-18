import React, {useState} from 'react'
import { images } from '../../constants'
import './Color.css'

const Color = ({color}) => {
    const [colorChecked , setColorChecked] = useState(false)

    const toggleColor = () => {
        setColorChecked((prevValue) => !prevValue)
    }

    return (
        <div className='circle' style={{ backgroundColor: color }} onClick={toggleColor}>
            {colorChecked && <img src={images.check} className='check-image'></img>}
        </div>
    )
}

export default Color