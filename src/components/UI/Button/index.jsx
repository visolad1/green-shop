import React from 'react'
import styles from './Button.module.scss'

export const Button = ({ children, onClick }) => {
    return (
        <button className={styles.btn} onClick={onClick}>{children}</button>
    )
}
