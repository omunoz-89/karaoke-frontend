import React from "react";

const About = () => {
  return (
    <div className="aboutDiv">
      <h1 className="aboutTag">About</h1>
      <p className="aboutText">
        Unlock your inner karaoke superstar with Share-aoke! Log in and search for
        a song you'd like to sing. Once you select the karaoke version you want,
        you'll be taken to the record page where you can record and then upload
        your new hit! Don't like what you did? Simply turn back time and try
        again.
      </p>
      <iframe
        width="50%"
        height="350"
        src="https://www.youtube.com/embed/GgD9FyE60hs?t=6"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded video"
      />
    </div>
  );
};

export default About;
