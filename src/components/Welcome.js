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
      <img
        className="mic"
        src="https://i.pinimg.com/474x/61/09/36/61093605aca4cf910bc4eb65eaa8141f.jpg"
      />
      <p>
        Enter a song and artist, click submit, and get ready for glory! Need
        some inspiration? Unmute the video and bask in the musical muse. We
        believe in you!
      </p>
      <iframe
        width="100%"
        height="480"
        src="https://www.youtube.com/embed/ubTIBlx4xTw"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded video"
      />
      <Search />
      {/* <VideoPlayer ytURL={ytURL} /> */}
    </div>
  );
};

export default Welcome;
