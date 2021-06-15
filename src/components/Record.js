import axios from "axios";
import React, { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Record = (props) => {
  const ytURL = props[0].match.params.video;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showButton, setShowButton] = useState(true);
  console.log("this is show", showButton);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mp4Link = e.target.elements.myCamera_mp4.value;
    const thumbLink = e.target.elements.myCamera_thumb.value;
    const thisUserId = e.target.elements.userId.value;
    const thisPublic = e.target.elements.public.value;
    const data = {
      title,
      description,
      url: mp4Link,
      thumbnail: thumbLink,
      userId: thisUserId,
      public: thisPublic,
    };
    console.log(data);
    const url = `${REACT_APP_SERVER_URL}/api/videos`;
    try {
      const response = await axios.post(url, data);
      console.log("******************************");
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const onClick = () => {
    window.location.reload();
    // setShowButton(false);
  };

  // useEffect(() => {
  //   console.log("in use effect", showButton);
  //   // window.location.reload();
  //   setShowButton(false);
  // }, []);

  return (
    <div className="videoDiv">
      <div>
        <h1>Recording Page</h1>
        <h2>Prepare To Be Amaaaaazing!</h2>
        <button onClick={onClick}>Take a deep breath and click here!</button>

        {/* <div>
          {showButton ? (
            <button className="aboutDiv" onClick={onClick}>
              Take a deep breath and click here!
            </button>
          ) : (
            <h2>Bring it!</h2>
          )}
        </div> */}
        <p className="whiteText">
          Cue the karaoke track to where you'd like to start singing, hit
          record, wait for the countdown, then release your inner Cheraoke
          spirit! Make sure to fill out the form after recording and click
          submit.
        </p>
      </div>
      <div>
        <form
          className="recordForm"
          action="/api/videos/"
          method="POST"
          onSubmit={handleSubmit}
        >
          <camera
            is="custom"
            data-app-id="a-1433fe10-ac5b-0139-42d3-0aac5b511429"
            id="myCamera"
            data-name="karaoke"
            data-maxlength="420"
            data-autopreview="true"
          ></camera>

          <h2>Tell us about your track!</h2>
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
          <input type="hidden" name="userId" value={props.user.id} />
          <label htmlFor="public">Public:</label>
          <input type="radio" name="public" value={true} />
          <label htmlFor="private">Private:</label>
          <input type="radio" name="public" value={false} />
          <input type="submit" value="Submit" />
          <VideoPlayer ytURL={ytURL} />
        </form>
      </div>
    </div>
  );
};

export default Record;
