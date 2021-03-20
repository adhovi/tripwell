import React from "react";
import vehicles from "../../Data/vehiclesData";
import Vehicle from "../Vehicle/Vehicle";
import "./Vehicles.css";

const Vehicles = () => {
  console.log(vehicles);
  return (
    <div className="container my-container">
      <div className="row">
        {vehicles.map((vehicle) => (
          <Vehicle key={vehicle.id} vehicle={vehicle}></Vehicle>
        ))}
      </div>
    </div>
  );
};

export default Vehicles;
