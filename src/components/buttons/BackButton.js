import React from 'react'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import {IoArrowBackCircleSharp} from "react-icons/io5"

function BackButton(props) {

    const [width, setWidth] = useState(window.innerWidth); 

    useEffect(() => { 
      window.addEventListener('resize', () => setWidth(window.innerWidth)); 
    }, []);
  
    return (
        <>
            <Link className="back-button" to={`/${props.target}`}><IoArrowBackCircleSharp size= {width > 700 ? 70 : 45}/></Link>
        </>
    )
}

BackButton.propTypes = {
    target: PropTypes.string
}

export default BackButton

