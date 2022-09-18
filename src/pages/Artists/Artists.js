import Subheader from '../../components/Subheader/Subheader'
import Pagination from '../../components/Pagination/Pagination'
import Footer from '../../components/Footer/Footer'
import { artists } from '../../Data/Data'

import './Artists.css'

const Artists = () => {
    return (
        <>
        <section className='artists'>
            <Subheader />
            <h3>Artists</h3>

            <div className='artist-card-grid'>
                {artists.map((artist) => {
                    return (
                        <div className='artist-card'>
                            <div className='artist-card-image'>
                                <img src={artist.image}></img>
                            </div>
                            <div className='artist-card-dpimage'>
                                <img src={artist.dp}></img>
                                <div className='artist-card-bg'></div>
                            </div>

                            <div className='artist-card-details'>
                                <h4>{artist.name}sdad</h4>
                                <p>Tincidunt ultrices integer odio neque amet suscipit nunc, sed. Porttitor nunc nibh etiam justo, in in suspendisse pellentesque vivamus...</p>
                                <div className='artist-card-peices'>
                                    <div><span>{artist.peices} Pieces</span></div>
                                    <div><span>{artist.sold} Sold</span></div>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>

            <Pagination />

        </section>
            
            <Footer />

        </>
    )
}

export default Artists