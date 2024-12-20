/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import Playlist from "./Playlist";
import { YTWatcherProps } from "@/types";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import { TitleBarWithTogglableContent } from "@/components/TitleBarWithTogglableContent";

const yTWatcherCss = {
  container: css({
    padding: "0 0 10rem 0",
  }),

  videosAndLinks: {
    container: css({}),

    titleImage: css({
      backgroundColor: "white",
    }),

    video: css({}),

    links: css({
      display: "grid",
      justifyItems: "center",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "2rem",
    }),
  },
};

export const YTWatcher = ({ playlists }: YTWatcherProps) => {
  return (
    <article css={yTWatcherCss.container}>
      <section css={yTWatcherCss.videosAndLinks.container}>
        {playlists.map((playlist, index) => (
          <TitleBarWithTogglableContent
            key={index}
            titleBarContent={
              <ImageWithWrapper
                src={playlist.imagePath}
                wrapperCss={[
                  { ...yTWatcherCss.videosAndLinks.titleImage },
                  {
                    width: "25vw",
                    aspectRatio: "1 / 1",
                  },
                ]}
              />
            }
          >
            <h2 css={{ color: "#3b3b3b" }}>{playlist.name}</h2>
            <Playlist
              hardcodedListOfYouTubeVideoIDs={playlist.ytVideoIds}
              title={playlist.name}
            />
            <ul css={yTWatcherCss.videosAndLinks.links}>
              {playlist.thirdPartyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.linkURL} target="_blank" rel="noreferrer">
                    <ImageWithWrapper src={link.imageOrGifPath} />
                    <h3>{link.title}</h3>
                  </a>
                </li>
              ))}
            </ul>
          </TitleBarWithTogglableContent>
        ))}
      </section>
    </article>
  );
};
