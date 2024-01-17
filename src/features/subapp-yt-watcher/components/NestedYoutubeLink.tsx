import styles from "@/styles/sass/styles-all.module.scss";

import YouTube from "react-youtube";

const NestedYoutubeLink = ({ yTvideoId }) => {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
      playsinline: 0,
    },
  };

  const handleReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return (
    <div className={styles["tutorial__video__container"]}>
      <YouTube
        className={styles["tutorial__video__iframe"]}
        videoId={yTvideoId}
        opts={opts}
        onReady={handleReady}
      />
    </div>
  );
};
export default NestedYoutubeLink;
