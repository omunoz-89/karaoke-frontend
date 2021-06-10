import ReactPlayer from "react-player/youtube";

const VideoPlayer = () => {
  return (
    <div>
      <ReactPlayer
        controls
        url="https://www.youtube.com/watch?v=C3y6jGCXiUA"
        onStart={() => console.log("onStart callback")}
        onEnded={() => console.log("onEnded callback")}
        onError={() => console.log("onError callback")}
      />
    </div>
  );
};

export default VideoPlayer;
