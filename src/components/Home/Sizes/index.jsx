import React from "react";
import styles from "./Sizes.module.scss";

export const Sizes = () => {
  const sizes = [
    { id: 1, name: "Small", product_count: 119 },
    { id: 2, name: "Medium", product_count: 86 },
    { id: 3, name: "Large", product_count: 78 },
  ];
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Size</h3>
      <ul className={styles.list}>
        {sizes.map((item) => (
          <li key={item.id} className={styles.list_item}>
            <a href="#" className={styles.list_item_link}>
              <span className={styles.list_item_name}>{item.name}</span>
              <span className={styles.list_item_count}>
                {`(${item.product_count})`}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
