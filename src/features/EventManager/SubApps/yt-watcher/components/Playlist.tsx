/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { useState, useEffect } from "react";
import Video from "./Video";
import { MyTemporaryStyle } from "../types/index";
import { TiPlus, TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import { RiDeleteBin7Fill } from "react-icons/ri";

const playlistCss = {
  container: css({
    display: "grid",
    gridAutoRows: "max-content",
    rowGap: "1rem",

    "& svg": {
      fontSize: "4rem",
    },
  }),
  buttons: css({
    display: "grid",
    gridTemplateColumns: "max-content max-content 1fr max-content",
    gap: "1rem",

    "& > button": {
      width: "max-content",
    },
  }),
};

const Playlist = ({
  hardcodedListOfYouTubeVideoIDs,
  title,
}: MyTemporaryStyle) => {
  const [finalYTIdsList, setFinalYTIdsList] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [newVideoID, setNewVideoID] = useState("");

  // Use the title prop as the key for storing the playlist in localStorage
  const storageKey = title
    ? `youtubePlaylist_${title}`
    : "youtubePlaylist_default";

  // Load playlist from localStorage or use the hardcoded list as fallback
  useEffect(() => {
    const savedPlaylist =
      JSON.parse(localStorage.getItem(storageKey)) ||
      hardcodedListOfYouTubeVideoIDs;
    setFinalYTIdsList(savedPlaylist);
  }, [hardcodedListOfYouTubeVideoIDs, storageKey]);

  // Update localStorage whenever the playlist changes
  useEffect(() => {
    if (finalYTIdsList.length > 0) {
      localStorage.setItem(storageKey, JSON.stringify(finalYTIdsList));
    }
  }, [finalYTIdsList, storageKey]);

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
      {/* <h2>{title || "Default Playlist"}</h2> */}
      <p css={{ color: "#3b3b3b" }}>
        Video {finalYTIdsList.length > 0 ? currentVideoIndex + 1 : 0} of{" "}
        {finalYTIdsList.length}
      </p>

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
          <TiArrowLeftThick />
        </button>
        <button
          css={[universalCss.button(true), universalCss.container]}
          onClick={handleNextVideo}
          disabled={finalYTIdsList.length === 0}
        >
          <TiArrowRightThick />
        </button>
        <div></div>
        <button
          css={[universalCss.button(true), universalCss.container]}
          onClick={handleDeleteCurrentVideo}
          disabled={finalYTIdsList.length === 0}
        >
          <RiDeleteBin7Fill />
        </button>
      </div>

      {/* Input field to add new video */}
      <div>
        <input
          css={[universalCss.container, { color: "#3b3b3b" }]}
          type="text"
          placeholder="Add YouTube Video ID"
          value={newVideoID}
          onChange={(e) => setNewVideoID(e.target.value)}
        />
        <button
          css={[
            universalCss.button(true),
            universalCss.container,
            { width: "max-content" },
          ]}
          onClick={handleAddVideo}
        >
          <TiPlus />
        </button>
      </div>
    </div>
  );
};

export default Playlist;
