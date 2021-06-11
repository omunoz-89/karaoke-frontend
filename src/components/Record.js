import axios from "axios";
import React, { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";

const Record = (props) => {
  const ytURL = props[0].match.params.video;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { title, description };
    const response = await axios.post(
      `${REACT_APP_SERVER_URL}/api/videos`,
      data
    );
    console.log(response.data);
  };

  return (
    <div>
      <div>
        <h1>Recording Page</h1>
        <h3>Prepare To Be Amaaaaazing!</h3>
      </div>

      <div>
        <VideoPlayer ytURL={ytURL} />
      </div>
      <div>
        <form action="/api/videos/" method="POST" onSubmit={handleSubmit}>
          <camera
            data-app-id="a-1433fe10-ac5b-0139-42d3-0aac5b511429"
            id="myCamera"
            data-maxlength="420"
          ></camera>
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
