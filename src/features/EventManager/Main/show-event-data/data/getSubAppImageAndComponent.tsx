import Playlist from "@/features/EventManager/SubApps/yt-watcher/components/Playlist";
import { SubappPayloads } from "@/types";

type getSubAppImageAndComponentProps = {
  subAppName;
  payload?;
};

export const getSubAppImageAndComponent = ({
  subAppName,
  payload,
}: getSubAppImageAndComponentProps) => {
  return {
    "yt-video-watcher": {
      imageOrGifPath:
        "https://neondeco.fr/cdn/shop/products/neon-youtube_1.jpg?v=1678705616",
      component: payload ? (
        <Playlist listOfYouTubeVideoIDs={payload.ytVideoIds} />
      ) : (
        <></>
      ),
    },
    "shopping-list": {
      imageOrGifPath: "https://via.placeholder.com/150",
      component: <></>,
    },
  }[subAppName];
};
