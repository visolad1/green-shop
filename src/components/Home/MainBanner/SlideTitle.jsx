import React from "react";
import styles from "./MainBanner.module.scss";

export const SlideTitle = ({ text }) => {
  let textSplit = text.split(" ");
  let title = textSplit.splice(0, textSplit.length - 1).join(" ");
  let lastWord = textSplit[textSplit.length - 1];
  return (
    <h1 className={styles.slide_title}>
      {title} <span className={styles.green_text}>{lastWord}</span>
    </h1>
  );
};
