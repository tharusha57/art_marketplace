import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { allarts } from "../../Data/Data"
import { images } from "../../constants"
import WeeklyArt from "../../components/WeekArt/WeekArt"
import { weeklyArts, curated_arts } from "../../Data/Data";
import Card from "../../components/Card/Card"
import Footer from "../../components/Footer/Footer"



import "./Image.css"

const Image = () => {
    const { id } = useParams()

    let image = ''
    let artist = ''
    let artistImage = ''

    allarts.map((item) => {
        if (item.id === id) {
            image = item.image
            artist = item.artist
            artistImage = item.artistImage
        }
    })


    return (
        <>
            <section>
                <div className="image-only">
                    <img src={image}></img>
                </div>

                <div className="image-details">
                    <div className="image-details-info">
                        <h3>Amet netus lacus odio enim in sed</h3>
                        <p>Created By</p>
                        <div className="image-details-info-artist">
                            <img src={artistImage}></img>
                            <h5>{artist}</h5>
                        </div>
                        <h5>Description</h5>
                        <p>Sed eu mattis egestas metus, sagittis morbi in nulla nunc. Massa vitae nunc elementum urna. Augue penatibus integer sed amet lobortis. Augue lectus diam tortor diam, volutpat turpis integer. Et neque, id at a in ornare. Bibendum arcu nam tellus enim risus sagittis cursus. Ultrices fermentum augue gravida elementum nunc, ut nulla eu.

                            Penatibus blandit ut pellentesque sit amet, euismod amet id sit. Gravida libero viverra in habitant. Aliquet sit massa quam sapien etiam fringilla id consectetur rhoncus. Leo viverra dui morbi nulla et nibh sed amet, dictum. Sit risus tristique vel viverra metus nisi ultrices posuere ac. Nibh nunc at etiam amet, quis. Cras massa diam aliquet lacus, sed diam amet, sapien. Vel vitae accumsan pharetra a sagittis blandit.</p>
                    </div>
                    <div className="image-details-price">
                        <div className="image-details-price-container">
                            <div className="image-details-price-container-price">
                                <div>
                                    <p>Your price</p>
                                    <h3>$45.32</h3>
                                </div>
                                <div>
                                    <select>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                            </div>
                            <div className="stroke"></div>
                            <div className="image-details-price-container-quantity">
                                <p>Quantity</p>
                                <div className="quantity">
                                    <div className="quantity-value">
                                        <div className="quantity-value-plus">
                                            <img src={images.add}></img>
                                        </div>
                                        <div className="quantity-value-quantity">
                                            <p>1</p>
                                        </div>
                                        <div className="quantity-value-minus">
                                            <img src={images.minus}></img>
                                        </div>
                                    </div>
                                    <div className="quantity-button">
                                        <button> <span>Add to Cart</span></button>
                                    </div>
                                </div>
                                <div className="shipping-details">
                                    <img src={images.lorry}></img>
                                    <h3>Free Shipping</h3>
                                </div>
                            </div>

                        </div>
                        <h5>About Art Club Art Prints</h5>
                        <p>Set the tone of your room from the walls out. Mix and match your favorite art prints on a gallery wall showcasing everything that makes your style unique. Art prints are available in five sizes, from x-small to x-large.</p>

                    </div>
                </div>

                <div className="artist-meet">
                    <h3>Meet the Artist</h3>
                    <div className="artist-hide-overflow">
                        <div className="artist-info">
                            <div className="weekly--artists">
                                <div>
                                    {weeklyArts.map((item, index) => {
                                        if (index === 0) {
                                            return <WeeklyArt key={item.id} {...item} />
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="like-arts">
                    <h3>You might also like</h3>

                    <div className="like-arts-arts">
                        <div className="curated--arts-arts">
                            {curated_arts.map((item) => {
                                return <Card key={item.id} {...item} />
                            })}
                        </div>
                    </div>
                </div>

                <div className="categories">
                    <div>
                        <h3>Related Tags</h3>
                    </div>
                    <div className="categories-tags">
                        <div><span>Semper</span></div>
                        <div><span>Erat</span></div>
                        <div><span>Aenean</span></div>
                        <div><span>Tellus</span></div>
                        <div><span>Gravida</span></div>
                        <div><span>Dictum</span></div>
                        <div><span>Feugit</span></div>
                        <div><span>Tristique</span></div>
                    </div>
                </div>

            </section>

            <Footer />
        </>
    )
}

export default Image