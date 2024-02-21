import React from "react";
import ReactPlayer from "react-player";
import LandingIntro from "../LandingIntro/LandingIntro";

const VideoBackground = () => {
  return (
    <div className="video-background relative p-0">
      <ReactPlayer
        // url="../../utils/intro_video.mp4" // Replace with your video URL
        url="intro_video.mp4"
        // url="https://www.kapwing.com/videos/65d35679c78ff8fbd4809953"
        // url="https://www.youtube.com/watch?v=6v2L2UGZJAM"
        playing
        loop
        muted
        className="hu"
        height="100%"
        width="100%" 
      />
      <div className="landing-intro-overlay absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <LandingIntro />
      </div>
    </div>
  );
};

export default VideoBackground;
