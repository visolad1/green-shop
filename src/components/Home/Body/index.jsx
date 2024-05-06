import React from "react";
import { Sort } from "../Sort";
import { HomeSidebar } from "../HomeSidebar";
import styles from "./HomeBody.module.scss";
import { Container } from "../../UI/Container";

export const Body = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <HomeSidebar />

        <Sort />
      </div>
    </Container>
  );
};
