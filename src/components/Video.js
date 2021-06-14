import React, { useState, useEffect } from "react";

const Video = (props) => {
  const [video, setVideo] = useState({});
  const [comments, setComments] = useState([]);
  const [commentList, setCommentList] = useState();
  const CONNECTION_URI = process.env.REACT_APP_SERVER_URL;

  const fetchVideo = async () => {
    const resp = await fetch(
      CONNECTION_URI + `/api/videos/${props.match.params.id}`
    );
    const respJSON = await resp.json();
    setVideo(respJSON);
    setComments(respJSON.comments);
    const commentList = await respJSON.comments.map((c, idx) => {
      return (
        <div key={idx}>
          <hr />
          <p>{c.content}</p>
          <p>Likes: {c.likes}</p>
        </div>
      );
    });
    setCommentList(commentList);
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <div className="card">
            {/* <img className="cardImg" src={video.thumbnail} alt={video.title} /> */}
            <div className="video-responsive">
              <iframe
                width="100%"
                height="480"
                src={`${video.url}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded video"
              />
            </div>
            <div className="card-body">
              <h4 className="card-title">{video.title}</h4>
              <p className="card-text">
                {" "}
                <h5>Description: </h5>
                {video.description}
              </p>
              <p className="card-text">
                {" "}
                <h5>Likes:</h5> {video.likes}
              </p>
              <h5>Comments:</h5>
              {commentList}
            </div>
          </div>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  );
};

export default Video;
