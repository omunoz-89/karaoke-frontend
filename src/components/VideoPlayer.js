import ReactPlayer from "react-player/youtube";

const VideoPlayer = (props) => {
  return (
    <div>
      <ReactPlayer
        controls
        url={`https://www.youtube.com/watch?v=${props.ytURL}`}
      />
    </div>
  );
};

export default VideoPlayer;
