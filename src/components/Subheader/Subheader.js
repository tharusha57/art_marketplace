import React, { useState, createRef } from "react";

import './Subheader.css'

const Subheader = () => {
    const [pageName, setPageName] = useState('')


    return (
        <div className="subheader">
            <div className="subheader-links">
                <a href='/allarts' onClick={() => setPageName('allarts')}
                    className={`${pageName === 'allarts' ? 'underline' : ''}`}
                >All Arts</a>

                <a href='/collections' onClick={() => setPageName('collections')}
                className={`${pageName === 'collections' ? 'underline' : ''}`}
                >Collections</a>
                
                <a href='/artists' onClick={() => setPageName('artists')}>Artists</a>
            </div>
            <div className="subheader-line"></div>
        </div>
    )
}

export default Subheader