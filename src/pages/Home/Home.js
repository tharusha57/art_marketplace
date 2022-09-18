import React from "react";
import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import WeeklyArt from "../../components/WeekArt/WeekArt";
import { curated_arts, weeklyArts, collections } from "../../Data/Data";
import { images } from "../../constants";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import './Home.css'

const Home = () => {

    return (
        <div className="home-div">

            {/* hero component */}

            <Hero />

            {/* curated art component */}

            <div className="curated--arts">
                <h3>Curated Arts</h3>

                <div className="curated--arts-arts">
                    {curated_arts.map((item) => {
                        return <Card key={item.id} {...item} />
                    })}
                </div>
            </div>

            {/* featured collection section */}

            <div className="featured--collections">
                <div className="featured--collections-details">
                    <h3>Featured Collections</h3>
                    <a href='/collections'>
                        <button className="featured--collection-button">
                            <p>All Collections</p>
                            <img src={images.rightArrow}></img>
                        </button>
                    </a>
                </div>

                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className="carousel--container"
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 4,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >

                    {collections.map((item) => {
                        return (
                            <div className="collection--card" key={item.id}>
                                <img src={item.image} ></img>
                                <div className="collection--card-detail">
                                    <h3>{item.name}</h3>
                                    <p>{item.items}</p>
                                </div>
                            </div>
                        )
                    })}
                </Carousel>
            </div>


            {/* artists of the week section */}

            <div className="weekly--artists">
                <div>
                    <div className="weekly-artists-details">
                        <h3>Artists of the Week</h3>
                        <a href="/allarts">
                            <button className="featured--collection-button">
                                <p>All Artists</p>
                                <img src={images.rightArrow}></img>
                            </button>
                        </a>
                    </div>
                </div>
                <div>
                    {weeklyArts.map((item) => {
                        return <WeeklyArt key={item.id} {...item} />
                    })}
                </div>
            </div>



            {/* Why Shop with us section */}

            <div className="shop">
                <h3>Why shop with us</h3>
                <div className="shop-boxes">
                    <div className='box'>
                        <img src={images.Shopb1} className='invisible-image'></img>
                        <img src={images.Shop1} className='box-image'></img>
                        <h3>Low Prices</h3>
                        <p>Sit eget ac sed cras feugiat eleifend sed id. Amet eu orci adipiscing praesent eget ornare aliquam elit dictumst. Et porttitor quam pulvinar urna vulputate mus.</p>
                    </div>
                    <div className='box'>
                        <img src={images.Shopb2} className='invisible-image'></img>
                        <img src={images.Shop2} className='box-image'></img>
                        <h3>Free Shipping</h3>
                        <p>Sit eget ac sed cras feugiat eleifend sed id. Amet eu orci adipiscing praesent eget ornare aliquam elit dictumst. Et porttitor quam pulvinar urna vulputate mus.</p></div>
                    <div className='box'>
                        <img src={images.Shopb3} className='invisible-image'></img>
                        <img src={images.Shop3} className='box-image'></img>
                        <h3>Made with Love</h3>
                        <p>Sit eget ac sed cras feugiat eleifend sed id. Amet eu orci adipiscing praesent eget ornare aliquam elit dictumst. Et porttitor quam pulvinar urna vulputate mus.</p></div>
                </div>
            </div>


            {/* Footer Section */}

            <Footer />

        </div>

    )
}

export default Home;