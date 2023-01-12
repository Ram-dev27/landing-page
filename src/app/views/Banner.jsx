import React from "react";
import bannerImage from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="d-flex flex-column-reverse flex-lg-row justify-content-md-between my-2 my-lg-5 align-items-center">
      <div className="d-flex flex-column align-items-center align-items-md-start">
        <div className="fs-1 fw-bold textWidth">We take care <span className="textUnderLine">Marketing</span> things</div>
        <button type="button" class="btn btn-primary rounded-0 mt-3 mt-md-4">Pick a Plan</button>
        </div>
      <img src={bannerImage} class="img-fluid" alt="..."/>
    </div>
  );
};

export default Banner;
