// Imports
import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
// CSS
import "./App.css";
// Components
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import Login from "./components/Login";
import About from "./components/About";
import User from "./components/User";
import Video from "./components/Video";
import Results from "./components/Results";
import Record from "./components/Record";
import Trending from "./components/Trending";
const CONNECTION_URI = process.env.REACT_APP_SERVER_URL;
const KEY = process.env.API_KEY;
//Private route component
const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log("This is a private route");
  let user = localStorage.getItem("jwtToken");
  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};
function App() {
  // Set state values
  const [currentUser, setCurrentUser] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  useEffect(() => {
    let token;
    //if there is token inside of local storage, then the user is not authenticated
    if (!localStorage.getItem("jwtToken")) {
      console.log("is not authenticated");
      setIsAuthenticated(false);
    } else {
      token = jwt_decode(localStorage.getItem("jwtToken"));
      console.log("token", token);
      setAuthToken(token);
      setCurrentUser(token);
    }
  },[]);
  const nowCurrentUser = (userData) => {
    console.log("--- inside nowCurrentUser ---");
    setCurrentUser(userData);
    setIsAuthenticated(true);
  };
  const handleLogout = () => {
    if (localStorage.getItem("jwtToken")) {
      //determine if there is a jwt token
      localStorage.removeItem("jwtToken"); //remove if thre is a jwt
      setCurrentUser(null); //set currentUser to null
      setIsAuthenticated(false); //set auth to false
    }
  };
  return (
    <div className="App">
      <Navbar isAuth={isAuthenticated} handleLogout={handleLogout} user={currentUser}/>
      <div className="container5">
        <Switch>
          {/* PUBLIC ROUTES */}
          <Route path="/about" component={About} />
          <Route
            path="/record/:video"
            render={(...routeProps) => {
              return <Record {...routeProps} />;
            }}
          />
          <Route exact path="/" component={Welcome} />
          <Route exact path="/search/results" component={Results} />
          {/* PUBLIC ROUTES */}
          <Route
            path="/signup"
            render={(props) => (
              <Signup {...props} nowCurrentUser={nowCurrentUser} />
            )}
          />
          <Route
            path="/login"
            render={(props) => (
              <Login
                {...props}
                user={currentUser}
                nowCurrentUser={nowCurrentUser}
                setIsAuthenticated={setIsAuthenticated}
              />
            )}
          />
          <Route
            path="/users/:id"
            render={(routeProps) => {
              return <User {...routeProps} isAuth={isAuthenticated} user={currentUser}/>;
            }}
          />
          <Route
            exact path="/videos/trending"
            render={(routeProps) => {
              return <Trending {...routeProps} />;
            }}
          />
          <Route
            path="/videos/:id"
            render={(routeProps) => {
              return <Video {...routeProps} />;
            }}
          />
          <PrivateRoute
            path="/profile"
            component={Profile}
            user={currentUser}
            handleLogout={handleLogout}
          />
        </Switch>
      </div>
      <Footer />
    </div>
  )
}
export default App;
