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
import User from "./components/User"
import Video from "./components/Video"

const CONNECTION_URI = process.env.REACT_APP_SERVER_URL
const KEY = process.env.API_KEY

//Private route component
const PrivateRoute = ({component: Component, ...rest}) => {
  console.log('This is a private route')
  let user = localStorage.getItem('jwtToken')
  return <Route {...rest} render={ (props) => {
    return user ? <Component {...rest} {...props} /> : <Redirect to='/login' />
  }} />
}


function App() {
  // Set state values

  const [currentUser, setCurrentUser] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [users, setUsers] = useState([])
  const [videos, setVideos] = useState([])
  const [test, setTest] = useState('')

  const fetchAllUsers = async () => {
      const resp = await fetch(CONNECTION_URI+"/api/users/all-users")
      const respJSON = await resp.json()
      setUsers(respJSON)
      console.log('respJSON: ', respJSON)
  }
 
  const fetchAllVideos = async () => {
    const resp = await fetch(CONNECTION_URI+"/api/videos/all-videos")
    const respJSON = await resp.json()
    setVideos(respJSON)
}

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
      setTest('Hi')
    }

    // fetchAllUsers()
    console.log('users: ', users)
    // fetchAllVideos()
  }, []);

//   useEffect(()=> {
//       fetchAllUsers()
//   }, [test])
  
  const nowCurrentUser = (userData) => {
    console.log("--- inside nowCurrentUser ---");
    setCurrentUser(userData);
    setIsAuthenticated(true)
  };

  const handleLogout = () => {

    if(localStorage.getItem("jwtToken")) {    //determine if there is a jwt token
      localStorage.removeItem('jwtToken')    //remove if thre is a jwt
      setCurrentUser(null);     //set currentUser to null
      setIsAuthenticated(false)     //set auth to false
    }
  }

  return (
    <div className="App">
      <Navbar isAuth={isAuthenticated} handleLogout={handleLogout} /> 
      <div className='container mt-5'>
        <Switch>
            {/* PUBLIC ROUTES */}
          <Route path='/signup' render={ (props) => <Signup {...props} nowCurrentUser={nowCurrentUser} /> } />
          <Route path='/login' render={(props) => <Login {...props} user={currentUser} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} /> } />
          <Route path='/about' component={About} />
          <Route exact path='/' component={Welcome}/>
          
          {/* PRIVATE ROUTES */}
          <Route path = '/users/:id' render={(routeProps) => {
              const user = users.find(u => {
                  console.log('route props', routeProps)
                  return u._id === routeProps.match.params.id
              })
              return <User {...routeProps} user={user} reload={fetchAllUsers} />
          }}/>
          




          
          <Route path = '/videos/:id' render={(routeProps) => {
              return <Video {...routeProps} reload={fetchAllVideos} />
          }}/>
          


          <Route path = '/video' component={Video} />

          <PrivateRoute path='/profile' component={Profile} user={currentUser} handleLogout={handleLogout} />

        </Switch>
      </div>

      <Footer />
    </div>
  );
}

export default App;
