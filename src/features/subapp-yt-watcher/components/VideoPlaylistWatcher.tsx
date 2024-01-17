import { useState } from "react";
import NestedYoutubeLink from "./NestedYoutubeLink";
import { MyTemporaryStyle } from "../types/index";

const VideoPlaylistWatcher = ({ listOfYouTubeVideoIDs }: MyTemporaryStyle) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex < listOfYouTubeVideoIDs.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrevVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : listOfYouTubeVideoIDs.length - 1
    );
  };

  return (
    <div>
      <NestedYoutubeLink yTvideoId={listOfYouTubeVideoIDs[currentVideoIndex]} />
      <div>
        <button onClick={handlePrevVideo}>Previous</button>
        <button onClick={handleNextVideo}>Next</button>
      </div>
      <p>
        Video {currentVideoIndex + 1} of {listOfYouTubeVideoIDs.length}
      </p>
    </div>
  );
};

export default VideoPlaylistWatcher;
