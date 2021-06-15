import React, { useState, useEffect } from "react";
import axios from "axios";

const User = (props) => {
  const [user, setUser] = useState();
  const [videos, setVideos] = useState();
  const [videoList, setVideoList] = useState();
  const CONNECTION_URI = process.env.REACT_APP_SERVER_URL;

  const fetchUser = async () => {
    const resp = await fetch(
      CONNECTION_URI + `/api/users/${props.match.params.id}`
    );
    const respJSON = await resp.json();
    setUser(respJSON);
    setVideos(respJSON.videos);
    if (videos === null) {
      setVideoList("You have no recorded videos");
    } else {
      const theVideoList = await respJSON.videos.map((vid, idx) => {
        return <div className="col-3">
               <div key={idx} className="card">
              <a href={window.location.origin + `/videos/${vid._id}`}>
                <img className="cardImg" src={vid.thumbnail} alt={vid.title} />
              </a>
              <div className="card-body">
                <h6 className="card-title">{vid.title}</h6>
                <p className="card-text">Desc: {vid.description}</p>
                <p className="card-text">Likes: {vid.likes}</p>
              </div>
            </div>
          </div>
   
      });
      setVideoList(theVideoList)
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const deleteVideo = async (e) => {
    e.preventDefault();
    const videoId = e.target.delete.value;
    const findAndDelete = await axios.delete(
      CONNECTION_URI + `/api/videos/${videoId}`
    );
  };
  return (
    <div>
      <h1>User Page</h1>
      {videoList}
    </div>
  );
};

export default User;
