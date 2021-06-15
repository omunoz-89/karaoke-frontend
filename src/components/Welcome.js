import React from "react";
import Search from "./Search";

const Welcome = () => {
  return (
    <div>
      <h1 className="welcomeText">
        Welcome to Cheraoke, you beautiful person you!
      </h1>
      <p className="whiteText">
        Enter a song and artist, click submit, and get ready for glory! Need
        some inspiration? Unmute the video and bask in the musical muse. We
        believe in you!
      </p>
      <Search />
    </div>
  );
};

export default Welcome;
