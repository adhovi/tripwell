import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import map from "../../images/Map.png";
import vehicles from "../../Data/vehiclesData";
import "./Destination.css";
import { UserContext } from "../../App";
import GoogleMaps from "../GoogleMaps/GoogleMaps";

const Destination = () => {
  const [loggedUserData, setLoggedUserData] = useContext(UserContext);

  const { type } = useParams();

  const [destinationData, setDestinationData] = useState({
    from: "",
    to: "",
    departure: "",
  });

  useEffect(() => {
    const vehicle = vehicles.find((vehicle) => vehicle.type === type);
    const newUserData = { ...loggedUserData };
    newUserData.vehicle = vehicle;
    setLoggedUserData(newUserData);
  }, []);

  const handleChange = (e) => {
    if (e.target.value) {
      const newUserData = { ...loggedUserData };
      newUserData[e.target.name] = e.target.value;
      setLoggedUserData(newUserData);

      const newDestinationData = { ...destinationData };
      newDestinationData[e.target.name] = e.target.value;
      setDestinationData(newDestinationData);
    }
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    if (
      destinationData.from &&
      destinationData.to &&
      destinationData.departure
    ) {
      history.push("/available");
      const newUserData = { ...loggedUserData };
      newUserData.desFormError = "";
      setLoggedUserData(newUserData);
      setDestinationData({
        from: "",
        to: "",
        departure: "",
      });
    } else {
      const newUserData = { ...loggedUserData };
      newUserData.desFormError = "Please fill all field";
      setLoggedUserData(newUserData);
    }
    e.preventDefault();
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="my-form">
            <form onSubmit={handleSubmit}>
              <div className="input-my-group">
                <label htmlFor="">Pick From</label>
                <input
                  onBlur={handleChange}
                  className="inp-style"
                  type="text"
                  name="from"
                  placeholder="Mirpur 1"
                  required
                />
              </div>
              <div className="input-my-group">
                <label htmlFor="">Pick To</label>
                <input
                  onBlur={handleChange}
                  className="inp-style"
                  type="text"
                  name="to"
                  placeholder="Dhanmondi"
                  required
                />
              </div>
              <div className="input-my-group">
                <label htmlFor="">Departure</label>
                <input
                  onBlur={handleChange}
                  className="inp-style"
                  type="date"
                  name="departure"
                  required
                />
              </div>
              <button type="submit" className="inp-style my-btn-submit mt-5">
                Search
              </button>
            </form>
            <span className="text-white d-block text-center ">
              <small>{loggedUserData.desFormError}</small>
            </span>
          </div>
        </div>
        <div className="col-md-8 text-center mt-md-0 mt-4 mb-5">
          {/* <img src={map} className=" map-img text-md-end text-center " alt="" /> */}
          <GoogleMaps></GoogleMaps>
        </div>
      </div>
    </div>
  );
};

export default Destination;
