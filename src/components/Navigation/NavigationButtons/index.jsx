import React from 'react'
import styles from './NavigationButtons.module.scss'
import { SearchButton } from '../../UI/SearchButton'

export const NavigationButtons = () => {
    return (
        <div className={styles.wrapper}>
            <SearchButton />
        </div>
    )
}
