import axios from "axios";
import React, { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Record = (props) => {
  const ytURL = props[0].match.params.video;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [, updateState] = React.useState();
  // const forceUpdate = React.useCallback(() => updateState({}), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { title, description };
    const url = `${REACT_APP_SERVER_URL}/api/videos`;
    try {
      const response = await axios.post(url, data);
      console.log("******************************");
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="videoDiv">
      <div>
        <h1>Recording Page</h1>
        <h3>Prepare To Be Amaaaaazing!</h3>
        <p>
          Cue the karaoke track to where you'd like to start singing, hit
          record, wait for the countdown, then release your inner Cheraoke
          spirit!
        </p>
      </div>
      <div>
        <form action="/api/videos/" method="POST" onSubmit={handleSubmit}>
          <camera
            data-app-id="a-1433fe10-ac5b-0139-42d3-0aac5b511429"
            id="myCamera"
            data-maxlength="420"
          ></camera>
          <div className="video">
            <VideoPlayer ytURL={ytURL} />
          </div>
          <h3>Please tell us about your track.</h3>
          <label>Title</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Description</label>
          <input
            type="text"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Record;
