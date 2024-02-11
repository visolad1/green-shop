import React from 'react'
import styles from './CartButton.module.scss'
import icon from '../../../assets/images/cart-icon.svg'

export const CartButton = ({ onClick }) => {
    return (
        <button><img src={icon} alt="icon" /></button>
    )
}
