import React from "react";
import styles from "./HomeSidebar.module.scss";
import { CategoriesList } from "../CategoriesList";
import { PriceRange } from "../PriceRange";
import { Sizes } from "../Sizes";
import sale_img from "../../../assets/images/sale.png";

export const HomeSidebar = () => {
  return (
    <aside className={styles.aside}>
      <CategoriesList />
      <PriceRange />
      <Sizes />
      <a href="#">
        <img src={sale_img} alt="sale_img" className={styles.sale_img} />
      </a>
    </aside>
  );
};
