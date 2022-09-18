import SubHeader from '../../components/Subheader/Subheader'
import { collections } from '../../Data/Data'
import Pagination from '../../components/Pagination/Pagination'
import Footer from '../../components/Footer/Footer'

import './Collections.css'

const Collections = () => {
    return (
        <>
        
        <section>
            <SubHeader />

            <div className="allarts-header">
                <h3>Collections</h3>
                <div className="allarts-dropdown"></div>
            </div>

            <div className='card-container'>

            {collections.map((item) => {
                return (
                    <div className="collection-card" key={item.id}>
                        <div className="collection-card-detail">
                            <h3>{item.name}</h3>
                            <p>{item.items}</p>
                        </div>
                        <img src={item.image} ></img>
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

export default Collections