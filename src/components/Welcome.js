import React from "react";
import Search from "./Search";

const Welcome = () => {
  return (
    <div>
      <h1 className="welcomeText">
        Welcome to Cheraoke, you beautiful person you
      </h1>
      <img
        className="mic"
        src="https://i.pinimg.com/474x/61/09/36/61093605aca4cf910bc4eb65eaa8141f.jpg"
      />
      <h1>Welcome</h1>
      <Search />
    </div>
  );
};

export default Welcome;
