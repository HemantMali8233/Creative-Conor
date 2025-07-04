import React from 'react'
import { Link } from 'react-router-dom'
import Asthetic1 from './AstheticImage1.avif'
import Asthetic2 from './AstheticImage2.avif'
import LayeredPSD from './Layered PSD.png'
import MountainSunset from './MountainSunset.jpg'
import Pen from './Pen.png'
import Roket from './Roket.png'
import portfolio from './Portfolio'
import contact from './Contact'
import blog from './Blog'

const MainPage = () => {
    return (
        <>
            <header>
                <div>
                    <b className="SimplyLogo"> Simply </b>
                    <Link to="/Home" className="Link">HOME</Link>
                    <Link to="/Portfolio" className="Link">PORTFOLIO</Link>
                    <Link to="/Contact" className="Link">CONTACT</Link>
                    <Link to="/Blog" className="Link">BLOG</Link>
                </div>
            </header>


        


        </>
    )
}

export default MainPage
