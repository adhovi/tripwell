import React from "react";
import "./SeatDetails.css";
import people from "../../images/people.png";

const SeatDetails = (props) => {
  console.log(props);
  const { image, type } = props;
  const { price, seat } = props.vehicle;
  return (
    <div className="vehicle-card my-4 d-flex justify-content-between align-items-center flex-lg-row flex-sm-column flex-row">
      <div className="vehicle-img">
        <img src={image} alt="" />
      </div>
      <div className="d-flex align-items-center justify-content-around">
        <p>{type}</p>
        <img className="people-icon mx-1" src={people} alt="" />
        <p>{seat}</p>
      </div>
      <div>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default SeatDetails;
