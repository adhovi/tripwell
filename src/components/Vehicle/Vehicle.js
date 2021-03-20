import React from "react";
import { Link } from "react-router-dom";
import "./Vehicle.css";

const Vehicle = (props) => {
  const { type, image } = props.vehicle;
  return (
    <div className="col-md-3 col-sm-6">
      <Link to={`destination/${type}`} className="link">
        <div className="card my-card d-flex justify-content-center align-items-center mb-4">
          <div>
            <div className="d-flex align-items-center">
              <img className="card-img-top" src={image} alt="" />
            </div>
            <div className="card-body my-footer">{type}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Vehicle;
