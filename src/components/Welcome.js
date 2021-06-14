import React from "react";
import Search from "./Search";
import VideoPlayer from "./VideoPlayer";

const Welcome = () => {
  // const ytURL = "ubTIBlx4xTw?t=23";
  return (
    <div>
      <h1 className="welcomeText">
        Welcome to Cheraoke, you beautiful person you!
      </h1>
      <p>
        Enter a song and artist, click submit, and get ready for glory! Need
        some inspiration? Unmute the video and bask in the musical muse. We
        believe in you!
      </p>
      {/* <img
        className="mic"
        src="https://res.cloudinary.com/sei412-om/image/upload/v1623440005/mic_pmdu7o.png"
      /> */}

      <Search />
    </div>
  );
};

export default Welcome;
