import React from 'react'
import { Link } from 'react-router-dom'

// Import Styles
import './styles-footer.scss'

import { Directions } from '../Directions'

const Footer = () => {


    return (
        <footer>
            <div className='list'>
                {
                    Directions.map(
                        ({ text, to, active }, index = 0) => <Link className={active && 'active'} key={index} to={to}>{text}</Link>
                    )
                }
            </div>

            <div className='names'>
                CÁCERES QUINTANA & ASOCIADOS
            </div>

            <div className='company'>
                SMS Latinoamérica - Nicaragua - {new Date().getFullYear()}
            </div>
        </footer>
    )
}

export default Footer