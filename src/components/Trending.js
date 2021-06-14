import React, { useState, useEffect } from "react";

const Trending = (props) => {
  const [videos, setVideos] = useState();
  const [array, setArray] = useState();

  const CONNECTION_URI = process.env.REACT_APP_SERVER_URL;
  const fetchVideo = async () => {
    const resp = await fetch(CONNECTION_URI + "/api/videos/trending");
    const respJSON = await resp.json();
    setVideos(respJSON);
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  useEffect(() => {
    if (!videos) {
      console.log("loading");
    } else {
      const videoList = videos.map((vid, idx) => {
        return (
          <div className="col">
            <div key={idx} className="card">
            <img className='cardImg' src={vid.thumbnail} alt={vid.title} />
              <div className="card-body">
                <h6 className="card-title">{vid.title}</h6>
                <p className="card-text">Desc: {vid.description}</p>
                <p className="card-text">Likes: {vid.likes}</p>
              </div>
            </div>
          </div>
        );

      });
      setArray(videoList);

    }
  }, [videos]);

  return (
    <div>
      <h1>Trending</h1>
      <div className="container">
        <div className="row">{array}</div>
      </div>
    </div>
  );
};

export default Trending;
