import React from "react";
import { martKetCardData } from "../../../string";
import MarketingCard from "./MarketingCard";
import Carousel from "react-elastic-carousel";
import { useWindowSize } from "../../utils/utils";

function MarKeting() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ]

  return (
    <div>
      <div className="d-flex align-items-center gap-2">
        <div style={{ borderTop: "2px solid #4099F1", width: "1.5rem" }} />
        <span style={{ color: "#4099F1" }}>BLOG</span>
      </div>
      <div className=" fs-3 fw-semibold pb-4">Explore Marketing Tips</div>
      {/* <div className="d-flex justify-content-center gap-5 flex-wrap"> */}
        {/* eslint-disable-next-line no-restricted-globals */}
        <Carousel itemsToShow={3} breakPoints={breakPoints} pagination={useWindowSize() < 650? true : false} showArrows = {useWindowSize() < 650 ? false : true}>
          {martKetCardData.map((data) => (
            <MarketingCard data={data} />
          ))}
        </Carousel>
      {/* </div> */}
    </div>
  );
}

export default MarKeting;
