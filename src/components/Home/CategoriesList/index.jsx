import React, { useEffect, useState } from "react";
import styles from "./CategoriesList.module.scss";
import AppService from "../../../services";

export const CategoriesList = () => {
  const api = new AppService();
  const [list, setList] = useState([]);
  useEffect(() => {
    api.getCategoriesList().then((data) => setList(data));
  }, []);
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Categories</h3>
      <ul className={styles.list}>
        {list.map((item) => (
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
