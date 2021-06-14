import React, { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";

const Record = (props) => {
  const ytURL = props[0].match.params.video;

  // useEffect(() => {
  //     const script = document.createElement('script');

  //     script.src = "//cameratag.com/api/v14/js/cameratag.min.js";
  //     script.async = true;
  //     script.type = 'text/javascript';

  //     document.body.appendChild(script);
  // }

  return (
    <div className="videoDiv">
      <div className="video">
        <VideoPlayer ytURL={ytURL} />
      </div>
      <div>
        <camera
          data-app-id="a-1433fe10-ac5b-0139-42d3-0aac5b511429"
          id="myCamera"
          data-maxlength="420"
        ></camera>
      </div>
    </div>
  );
};

export default Record;
