/* eslint-disable no-unused-vars */
import React from "react";
import "./style.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Tranding from "./tranding/Tranding";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Tranding />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home;
