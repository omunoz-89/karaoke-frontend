import React from "react";
import VideoPlayer from "./VideoPlayer";

const ytURL = "GgD9FyE60hs?t=6";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>
        Unlock your inner karaoke superstar with Cheraoke! Log in and search for
        a song you'd like to sing. Once you select the karaoke version you want,
        you'll be taken to the record page where you can record and then upload
        your new hit! Don't like what you did? Simply turn back time and try
        again. You don't have to sing a song by Cher, but you'd be a lot cooler
        if you did...
      </p>
      <VideoPlayer ytURL={ytURL} />
    </div>
  );
};

export default About;
