import React from "react";
import icon_sedan from "../assets/images/icon-sedans.svg";
import icon_suv from "../assets/images/icon-suvs.svg";
import icon_luxury from "../assets/images/icon-luxury.svg";

const Card = () => {
  return (
    <div className="container">
      <div className="sedans">
        <div className="picture">
          <img src={icon_sedan} alt="icon-sedans" />
        </div>
        <h2 className="title">Sedans</h2>
        <p className="description">
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <button className="btn btn-sedan">
          <b>Learn More</b>
        </button>
      </div>
      <div className="suvs">
        <div className="picture">
          <img src={icon_suv} alt="icon-suvs" />
        </div>
        <h2 className="title">SUVs</h2>
        <p className="description">
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.
        </p>
        <button className="btn btn-suv">
          <b>Learn More</b>
        </button>
      </div>
      <div className="luxury">
        <div className="picture">
          <img src={icon_luxury} alt="icon-luxury" />
        </div>
        <h2 className="title">Luxury</h2>
        <p className="description">
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </p>
        <button className="btn btn-lux">
          <b>Learn More</b>
        </button>
      </div>
    </div>
  );
};

export default Card;
