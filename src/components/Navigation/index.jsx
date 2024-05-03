import React from "react";
import styles from "./Navigation.module.scss";
import { Logo } from "../Logo";
import { Container } from "../UI/Container";
import { NavigationList } from "./NavigationList";
import { NavigationButtons } from "./NavigationButtons";

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.wrapper}>
          <Logo />
          <NavigationList />
          <NavigationButtons />
        </div>
      </Container>
    </nav>
  );
};
