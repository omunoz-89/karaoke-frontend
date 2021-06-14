import React from "react";
import { Link } from "react-router-dom";

const Profile = (props) => {
  const { handleLogout } = props;
  const { exp, id, name, email } = props.user;
  const expirationTime = new Date(exp * 1000);
  let currentTime = Date.now();
  console.log(String(expirationTime));

  if (currentTime >= expirationTime) {
    handleLogout();
    alert("Session has ended. Please login again.");
  }
  const userData = props.user ? (
    <div>
      <h1>Profile</h1>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>ID:</strong> {id}
      </p>
      <iframe
        width="100%"
        height="480"
        src="https://www.youtube.com/embed/zLt8lUBEPnM"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded video"
      />
    </div>
  ) : (
    <h4>Loading...</h4>
  );

  const errorDiv = () => {
    return (
      <div className="text-center pt-4">
        <h3>
          Please <Link to="/login">login</Link> to view this page
        </h3>
      </div>
    );
  };

  return <div>{props.user ? userData : errorDiv()}</div>;
};

export default Profile;
