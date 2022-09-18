import './WeekArt.css'
import Card from '../Card/Card'

const WeeklyArt = ({ name, image, bgimage, arts, id }) => {
    return (
        <div style={{ backgroundImage: `url(${bgimage})` }} className='weekly-artist'>
            <div className='weekly-artist-div'>
                <div>
                    <div className='weekly-artist-details'>
                        <img src={image}></img>
                        <p>{name}</p>
                        <a>View Detils</a>
                    </div>
                </div>
                <div className='weekly-artists-arts'>
                    {arts.map((art) => {
                        return <div className='weekly-card-hide'>
                            <Card key={id} image={art.image} id={art.id}></Card>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default WeeklyArt