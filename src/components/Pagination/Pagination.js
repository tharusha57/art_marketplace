import { images } from '../../constants'

import './Pagination.css'

const Pagination = () => {
    return (
        <div className='pagination'>
            <div><img src={images.directionLeft}></img></div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div><img src={images.directionRight}></img></div>
        </div>
    )
}

export default Pagination