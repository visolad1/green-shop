import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/images/logo.svg'

export const Logo = () => {
    return (
        <Link to="/">
            <img src={img} alt="logo icon" />
        </Link>
    )
}
