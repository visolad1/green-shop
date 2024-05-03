import React from 'react'
import styles from './NavigationButtons.module.scss'
import { SearchButton } from '../../UI/SearchButton'
import { CartButton } from '../../UI/CartButton'
import { Button } from '../../UI/Button'

export const NavigationButtons = () => {
    return (
        <div className={styles.wrapper}>
            <SearchButton />
            <CartButton />
            <Button>Login</Button>
        </div>
    )
}
