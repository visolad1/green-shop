import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "./MainBanner.module.scss";
import "./SlickSlider.scss";
import AppService from "../../../services";
import { Container } from "../../UI/Container";
import { Button } from "../../UI/Button";
import { SlideTitle } from "./SlideTitle";

export const MainBanner = () => {
  const api = new AppService();
  const [data, setData] = useState([]);
  useEffect(() => {
    api.getMainBannerData().then((data) => setData(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.slider}>
          <Slider {...settings}>
            {data?.map((slide, i) => (
              <div className={styles.slide}>
                <div className={styles.slide_info}>
                  <div className={styles.slide_subtitle}>{slide.subtitle}</div>
                  <SlideTitle text={slide.title} />
                  <p className={styles.slide_description}>
                    {slide.description}
                  </p>

                  <Button onClick={() => {}}>
                    <span className={styles.slide_btn_text}>Shop now</span>
                  </Button>
                </div>
                <img
                  src={slide?.image}
                  alt="image"
                  className={styles.slide_img}
                />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};
