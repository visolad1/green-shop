import React, { useState } from "react";
import styles from "./Sort.module.scss";

export const Sort = () => {
  const filters = [
    { id: 1, name: "All Plants" },
    { id: 2, name: "New Arrivals" },
    { id: 3, name: "Sales" },
  ];
  const [activeFilter, setActiveFilter] = useState(1);
  return (
    <div className={styles.wrapper}>
      <div className={styles.nav}>
        <ul className={styles.filters}>
          {filters.map((item) => (
            <li
              key={item.id}
              className={`${styles.filters_item} ${
                activeFilter == item.id && styles.active
              }`}
              onClick={() => setActiveFilter(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <div className={styles.sort}>
          <span className={styles.sort_text}>Sorted by:</span>
          <select name="sort" id="sort" className={styles.select}>
            <option value="default">Default sorting</option>
          </select>
        </div>
      </div>
    </div>
  );
};
