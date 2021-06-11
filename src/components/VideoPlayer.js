import ReactPlayer from "react-player/youtube";

const VideoPlayer = (props) => {
  return (
    <div>
      <ReactPlayer
        controls
        url={`https://www.youtube.com/watch?v=${props.ytURL}`}
        onStart={() => console.log("onStart callback")}
        onEnded={() => console.log("onEnded callback")}
        onError={() => console.log("onError callback")}
      />
    </div>
  );
};

export default VideoPlayer;
