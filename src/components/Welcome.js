import React from "react";
import Search from "./Search";

const Welcome = () => {
  return (
    <div>
      <h1 className="welcomeText">
        Welcome to Share-aoke!
      </h1>
      <p className="whiteText">
        Enter a song and artist, click submit, and get ready for glory!
      </p>
      <Search />
    </div>
  );
};

export default Welcome;
