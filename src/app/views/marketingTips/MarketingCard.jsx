/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function MarketingCard(props) {
  const {data} = props
  return (
    <div className="card" style={{ width: "18rem", border: "none" }}>
      <div className="position-relative">
        <img
          src={data.bannerImage}
          className="card-img-top"
          style={{ width: "18rem", height: "325px",objectFit:"cover" }}
          alt="..."
        />
        <div
          className=" position-absolute bottom-0 bg-white d-flex justify-content-center align-items-center border border-1 p-1"
          style={{ minWidth: "150px", height: "48px" }}
        >
          <img
            src={data.image}
            style={{ width: "32px", height: "32px", objectFit:"cover" }}
            className="rounded-circle"
            alt="..."
          />
          <div className=" p-2">
            <div
              style={{ fontSize: "12px", fontWeight: "500", color: "#1E202F" }}
            >
              {data.name}
            </div>
            <div
              className=" fw-lighter"
              style={{ fontSize: "10px", fontWeight: "500", color: "#B2B2B2" }}
            >
              {data.role}
            </div>
          </div>
        </div>
      </div>
      <div className="card-body ps-1">
        <h5 className="card-title"  style={{ fontSize: "20px", fontWeight: "500", color: "#1E202F" }}>{data.title}</h5>
        <p className="card-text"  style={{ fontSize: "12px", fontWeight: "400", color: "#888990",letterSpacing:'0.25px' }}>
         {data.subTitle}
        </p>
      </div>
    </div>
  );
}

export default MarketingCard;
