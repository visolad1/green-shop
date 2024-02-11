import React from 'react'
import styles from './SearchButton.module.scss'
import icon from '../../../assets/images/search-icon.svg'

export const SearchButton = ({ onClick }) => {
    return (
        <button><img src={icon} alt="icon" /></button>
    )
}
