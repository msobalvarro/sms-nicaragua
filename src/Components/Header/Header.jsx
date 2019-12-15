import React from 'react'

// Import Components
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom'

// Import Styles
import './styles-header.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

// Import images baner
import ImageOne from '../../Static/baner/image-1.png' 
import ImageTwo from '../../Static/baner/image-2.png' 
import ImageThree from '../../Static/baner/image-3.png' 
import ImageFour from '../../Static/baner/image-4.png' 
import { Directions } from '../Directions'

const Header = () => {
    return (
        <header className="header-component">
            <nav>
                <div className='logo'>
                    <div className='sms'>
                        <span>SMS</span>
                    </div>
                    <div className='description'>
                        <span>Latinoamerica</span>
                    </div>
                </div>

                <div className='list'>
                    {
                        Directions.map(
                            ({ text, to, active }, index = 0) => <Link className={active && 'active'} key={index} to={to}>{text}</Link>
                        )
                    }
                </div>
            </nav>

            <Carousel autoPlay infiniteLoop={true} showStatus={false} interval={5000} showThumbs={false} showThumbs={false}>
                <div>
                    <img src={ImageOne} />
                </div>

                <div>
                    <img src={ImageTwo} />
                </div>

                <div>
                    <img src={ImageThree} />
                </div>

                <div>
                    <img src={ImageFour} />
                </div>
            </Carousel>
        </header>
    )
}

export default Header