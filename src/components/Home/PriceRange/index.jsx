import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import styles from "./PriceRange.module.scss";
import { Button } from "../../UI/Button";

function valuetext(value) {
  return `${value}$`;
}

export const PriceRange = () => {
  const [value, setValue] = useState([0, 64]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(value);

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Price Range</h3>
      <div className={styles.range}>
        <Box sx={{ width: "100%" }}>
          <Slider
            sx={{
              color: "#46A358",
            }}
            getAriaLabel={() => "Price range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </Box>
        <p className={styles.price}>
          Price:{" "}
          <span
            className={styles.price_value}
          >{`$${value[0]}-$${value[1]}`}</span>
        </p>
        <Button>Filter</Button>
      </div>
    </div>
  );
};
