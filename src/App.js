import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AvailableList from "./components/AvailableList/AvailableList";
import Destination from "./components/Destination/Destination";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Vehicles from "./components/Vehicles/Vehicles";

export const UserContext = createContext();

function App() {
  const [loggedUserData, setLoggedUserData] = useState({
    isLoggedIn: false,
    email: "",
    password: "",
    name: "",
    from: "",
    to: "",
    departure: "",
    vehicle: "",
    desFormError: "",
  });

  return (
    <UserContext.Provider value={[loggedUserData, setLoggedUserData]}>
      <div className="bg">
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Vehicles></Vehicles>
            </Route>
            <Route path="/home">
              <Vehicles></Vehicles>
            </Route>
            <PrivateRoute path="/destination/:type">
              <Destination></Destination>
            </PrivateRoute>
            <PrivateRoute path="/available">
              <AvailableList></AvailableList>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
