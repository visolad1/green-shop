import React from "react";
import { MainBanner } from "../components/Home/MainBanner";
import { HomeSidebar } from "../components/Home/HomeSidebar";
import { Body } from "../components/Home/Body";

export const Home = () => {
  return (
    <div>
      <MainBanner />
      <Body />
    </div>
  );
};
