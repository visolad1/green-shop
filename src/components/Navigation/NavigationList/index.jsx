import React, { useState } from 'react'
import styles from './NavigationList.module.scss'
import { Link } from 'react-router-dom'

export const NavigationList = () => {
    const list = [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "Shop", link: "/" },
        { id: 3, name: "Plant Care", link: "/" },
        { id: 4, name: "Blogs", link: "/" }
    ]

    const [active, setActive] = useState(1);

    return (
        <ul className={styles.list}>
            {list.map(item =>
                <li
                    key={item.id}
                    className={`${styles.listItem} ${active == item.id && styles.active}`}
                    onClick={() => setActive(item.id)}
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
