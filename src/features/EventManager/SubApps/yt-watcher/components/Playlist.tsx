

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { useState, useEffect } from "react";
import Video from "./Video";
import { MyTemporaryStyle, VideoItem } from "../types/index";
import { TiPlus, TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import { RiDeleteBin7Fill } from "react-icons/ri";

const playlistCss = {
  container: css({
    display: "grid",
    gridAutoRows: "max-content",
    rowGap: "1rem",
    "& svg": { fontSize: "4rem" },
  }),
  buttons: css({
    display: "grid",
    gridTemplateColumns: "max-content max-content 1fr max-content",
    gap: "1rem",
    "& > button": { width: "max-content" },
  }),
};

const Playlist = ({ hardcodedListOfYouTubeVideoIDs, title }: MyTemporaryStyle) => {
  const [finalYTList, setFinalYTList] = useState<VideoItem[]>([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [newVideoID, setNewVideoID] = useState("");

  const storageKey = title
    ? `youtubePlaylist_${title}`
    : "youtubePlaylist_default";

  // Load playlist from localStorage or fallback to hardcoded IDs
  useEffect(() => {
    const savedPlaylist: VideoItem[] =
      JSON.parse(localStorage.getItem(storageKey)) ||
      hardcodedListOfYouTubeVideoIDs.map((id) => ({
        yTvideoId: id,
        timeText: "",
      }));
    setFinalYTList(savedPlaylist);
  }, [hardcodedListOfYouTubeVideoIDs, storageKey]);

  // Save playlist to localStorage whenever it changes
  useEffect(() => {
    if (finalYTList.length > 0) {
      localStorage.setItem(storageKey, JSON.stringify(finalYTList));
    }
  }, [finalYTList, storageKey]);

  const handleNextVideo = () => {
    setCurrentVideoIndex((prev) =>
      prev < finalYTList.length - 1 ? prev + 1 : 0
    );
  };

  const handlePrevVideo = () => {
    setCurrentVideoIndex((prev) =>
      prev > 0 ? prev - 1 : finalYTList.length - 1
    );
  };

  const handleAddVideo = () => {
    if (newVideoID.trim()) {
      setFinalYTList([
        ...finalYTList,
        { yTvideoId: newVideoID.trim(), timeText: "" },
      ]);
      setNewVideoID("");
    }
  };

  const handleDeleteCurrentVideo = () => {
    if (finalYTList.length > 0) {
      const updatedPlaylist = finalYTList.filter(
        (_, index) => index !== currentVideoIndex
      );
      setFinalYTList(updatedPlaylist);
      setCurrentVideoIndex(0);
    }
  };

  return (
    <div css={playlistCss.container}>
      <p css={{ color: "#3b3b3b", maxWidth: "300px",
    whiteSpace: "normal",
    overflowWrap: "break-word", }}>
        Video {finalYTList.length > 0 ? currentVideoIndex + 1 : 0} of{" "}
        {finalYTList.length}
      </p>

       {/* Input for current video's text */}
      {finalYTList.length > 0 && (
  <input
    type="text"
    style={{fontSize:"40px"}}
    value={finalYTList[currentVideoIndex]?.timeText || ""}
    placeholder="Dowolny tekst"
    onChange={(e) => {
      const updatedList = [...finalYTList];
      updatedList[currentVideoIndex] = {
        ...updatedList[currentVideoIndex],
        timeText: e.target.value,
      };
      setFinalYTList(updatedList);
    }}
  />
)}

      {finalYTList.length > 0 ? (
        <Video yTvideoId={finalYTList[currentVideoIndex].yTvideoId} />
      ) : (
        <p>No videos in the playlist</p>
      )}

      {/* Navigation buttons */}
      <div css={playlistCss.buttons}>
        <button
          css={[universalCss.button(true), universalCss.container]}
          onClick={handlePrevVideo}
          disabled={finalYTList.length === 0}
        >
          <TiArrowLeftThick />
        </button>
        <button
          css={[universalCss.button(true), universalCss.container]}
          onClick={handleNextVideo}
          disabled={finalYTList.length === 0}
        >
          <TiArrowRightThick />
        </button>
        <div></div>
        <button
          css={[universalCss.button(true), universalCss.container]}
          onClick={handleDeleteCurrentVideo}
          disabled={finalYTList.length === 0}
        >
          <RiDeleteBin7Fill />
        </button>
      </div>

      {/* Input to add new video (without text) */}
      <div>
        <input
          css={[universalCss.container, { color: "#3b3b3b" }]}
          type="text"
          placeholder="Add YouTube Video ID"
          value={newVideoID}
          onChange={(e) => setNewVideoID(e.target.value)}
        />
        <button
          css={[universalCss.button(true), universalCss.container, { width: "max-content" }]}
          onClick={handleAddVideo}
        >
          <TiPlus />
        </button>
      </div>

     
    </div>
  );
};

export default Playlist;
