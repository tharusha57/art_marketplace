import React, { useState } from "react";
import Subheader from "../../components/Subheader/Subheader";
import Color from "../../components/Color/Color";
import Card from "../../components/Card/Card";
import { all_arts } from "../../Data/Data";
import Footer from '../../components/Footer/Footer'
import Pagination from "../../components/Pagination/Pagination";

import './AllArts.css'

const AllArts = () => {
    const colors = ['#EB5757', '#F2C94C', '#F2994A', '#219653', '#6FCF97', '#2F80ED', '#2D9CDB', '#FF3440']

    return (<>
        <section className="allarts-section">
            <Subheader />
            <div className="allarts-header">
                <h3>All arts</h3>
                <div className="allarts-dropdown"></div>
            </div>

            <div className="allarts-container">
                <div className="allarts-details">
                    <h3>Filter By</h3>
                    <div>
                        <p>Digital</p>
                        <p>Painting</p>
                        <p>Pattern</p>
                        <p>Nature</p>
                        <p>Illustration</p>
                        <p>Abstract</p>
                        <p>Drawing</p>
                        <p>Watercolor</p>
                        <p>Landscape</p>
                        <p>Retro</p>
                        <p>Modern</p>
                        <p>Acrlic</p>
                    </div>

                    <div className="allarts-color">
                        {colors.map((color, index) => {
                            return <Color key={index} color={color}></Color>
                        })}
                    </div>
                </div>
                <div className="allarts-cards">
                    {all_arts.map((item) => {
                        return <div className="card-div">
                            <Card key={item.id} {...item}></Card>
                            <div className="card-div-details">
                                <p className="card-div-price">{item.price}</p>
                                <button className="card-div-details-button">
                                    <p>Add to Cart</p>
                                </button>
                            </div>
                        </div>
                    })}
                </div>
            </div>

            <Pagination />
        </section>

        <Footer /></>
    )
}

export default AllArts