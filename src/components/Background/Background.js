import { images } from '../../constants'
import { useGlobalContext } from '../../context'
import './Background.css'

const Background = () => {
    return (
        <div className='vectors'>
            <img src={images.vector} className='vector1'></img>
            <img src={images.vector2} className='vector2'></img>
            <img src={images.vector3} className='vector3'></img>
            <img src={images.vector4} className='vector4'></img>
        </div>
    )
}

export default Background