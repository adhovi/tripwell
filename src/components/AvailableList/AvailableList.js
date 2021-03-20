import React, { useContext } from "react";
import { UserContext } from "../../App";
import map from "../../images/Map.png";
import "./AvailableList.css";
import vehicles from "../../Data/vehiclesData";
import SeatDetails from "../SeatDetails/SeatDetails";
import GoogleMaps from "../GoogleMaps/GoogleMaps";

const AvailableList = () => {
  const [userData, setUserData] = useContext(UserContext);
  const { from, to, departure, vehicle } = userData;

  const vehicleSelected = vehicle || vehicles[0];
  const { image, type } = vehicleSelected;
  const vehicleDetails = vehicleSelected.vehicle;
  console.log(vehicleDetails);
  return (
    <div className="container mt-5 pb-5">
      <div className="row">
        <div className="col-md-4">
          <div className="available-list-form ">
            <div className="destination-list">
              <ul>
                <li>{from || "Mirpur 1"}</li>
                <li>{to || "Dhanmondi"}</li>
              </ul>
              <p className="ms-3">Date: {departure || "2021-03-19"}</p>
            </div>
            <div>
              {vehicleDetails.map((vehicle) => {
                return (
                  <SeatDetails
                    key={vehicle.id}
                    type={type}
                    image={image}
                    vehicle={vehicle}
                  ></SeatDetails>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-md-8 text-center mt-md-0 mt-4 mb-5">
          <GoogleMaps></GoogleMaps>
          {/* <img src={map} className=" map-img text-md-end text-center " alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default AvailableList;
