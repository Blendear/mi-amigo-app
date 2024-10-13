/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { useState, useEffect } from "react";
import Video from "./Video";
import { MyTemporaryStyle } from "../types/index";

const playlistCss = {
  container: css({
    display: "grid",
    gridAutoRows: "max-content",
    rowGap: "1rem",
  }),
  buttons: css({
    display: "grid",
    gridAutoFlow: "column",
    gap: "1rem",
  }),
};

const Playlist = ({ hardcodedListOfYouTubeVideoIDs }: MyTemporaryStyle) => {
  const [finalYTIdsList, setFinalYTIdsList] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [newVideoID, setNewVideoID] = useState("");

  // Load playlist from localStorage or use the hardcoded list as fallback
  useEffect(() => {
    const savedPlaylist =
      JSON.parse(localStorage.getItem("youtubePlaylist")) ||
      hardcodedListOfYouTubeVideoIDs;
    setFinalYTIdsList(savedPlaylist);
  }, [hardcodedListOfYouTubeVideoIDs]);

  // Update localStorage whenever the playlist changes
  useEffect(() => {
    if (finalYTIdsList.length > 0) {
      localStorage.setItem("youtubePlaylist", JSON.stringify(finalYTIdsList));
    }
  }, [finalYTIdsList]);

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex < finalYTIdsList.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrevVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : finalYTIdsList.length - 1
    );
  };

  const handleAddVideo = () => {
    if (newVideoID.trim()) {
      setFinalYTIdsList([...finalYTIdsList, newVideoID.trim()]);
      setNewVideoID(""); // Clear input after adding
    }
  };

  const handleDeleteCurrentVideo = () => {
    if (finalYTIdsList.length > 0) {
      const updatedPlaylist = finalYTIdsList.filter(
        (_, index) => index !== currentVideoIndex
      );
      setFinalYTIdsList(updatedPlaylist);
      setCurrentVideoIndex(0); // Reset to first video
    }
  };

  return (
    <div css={playlistCss.container}>
      {finalYTIdsList.length > 0 ? (
        <Video yTvideoId={finalYTIdsList[currentVideoIndex]} />
      ) : (
        <p>No videos in the playlist</p>
      )}

      <div css={playlistCss.buttons}>
        <button
          css={[universalCss.button(true), universalCss.container]}
          onClick={handlePrevVideo}
          disabled={finalYTIdsList.length === 0}
        >
          Previous
        </button>
        <button
          css={[universalCss.button(true), universalCss.container]}
          onClick={handleNextVideo}
          disabled={finalYTIdsList.length === 0}
        >
          Next
        </button>
        <button
          css={[universalCss.button(true), universalCss.container]}
          onClick={handleDeleteCurrentVideo}
          disabled={finalYTIdsList.length === 0}
        >
          Delete Current Video
        </button>
      </div>

      <p>
        Video {finalYTIdsList.length > 0 ? currentVideoIndex + 1 : 0} of{" "}
        {finalYTIdsList.length}
      </p>

      {/* Input field to add new video */}
      <div>
        <input
          type="text"
          placeholder="Add YouTube Video ID"
          value={newVideoID}
          onChange={(e) => setNewVideoID(e.target.value)}
        />
        <button
          css={[universalCss.button(true), universalCss.container]}
          onClick={handleAddVideo}
        >
          Add Video
        </button>
      </div>
    </div>
  );
};

export default Playlist;
