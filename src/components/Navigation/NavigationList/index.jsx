import React from 'react'
import styles from './NavigationList.module.scss'

export const NavigationList = () => {
    const list = [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "Shop", link: "/" },
        { id: 3, name: "Plant Care", link: "/" },
        { id: 4, name: "Blogs", link: "/" }
    ]

    return (
        <ul className={styles.list}>
            {list.map(item =>
                <li
                    key={item.id}
                    className={styles.listItem}
                >
                    <Link
                        to={item.link}
                        className={styles.listItemLink}
                    >
                        {item.name}
                    </Link>
                </li>
            )}
        </ul>
    )
}
