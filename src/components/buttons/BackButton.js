import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import {IoArrowBackCircleSharp} from "react-icons/io5"

function BackButton(props) {
  
    return (
        <>
            <Link className="back-button" to={`/${props.target}`}><IoArrowBackCircleSharp size={70}/></Link>
        </>
    )
}

BackButton.propTypes = {
    target: PropTypes.string
}

export default BackButton

