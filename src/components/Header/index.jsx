import React from 'react'
import Banner1 from "../../assets/Banner1.jpg";
import Banner2 from "../../assets/Banner2.jpg";
import Banner3 from "../../assets/Banner3.jpg";
import Banner4 from "../../assets/Banner4.jpg";
import Banner5 from "../../assets/Banner5.jpg";
import './style.css'

const images = [Banner1, Banner2, Banner3, Banner4, Banner5];

const Header = () => {
    return (
        <div className="customHeader">
            <div className="headerBG">
                <img src={images[Math.floor(Math.random() * images.length)]} alt='Hero Image' />
            </div>
            <div className="headerText">
                <h1>Recipe Finder</h1>
                <p>Welcome to Recipe Finder, your passport to culinary adventures! <br /> Discover a treasure trove of delectable recipes from around the globe.</p>
            </div>
        </div>
    )
}

export default Header