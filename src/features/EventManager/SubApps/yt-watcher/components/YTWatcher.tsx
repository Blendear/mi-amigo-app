/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import Playlist from "./Playlist";
import { YTWatcherProps } from "@/types";
import ImageWithWrapper from "@/components/ImageWithWrapper";

const yTWatcherCss = {
  container: css({}),

  youtubeVideos: css({}),

  thirdPartyLinks: css({}),
};

export const YTWatcher = ({ playlists }: YTWatcherProps) => {
  return (
    <article css={yTWatcherCss.container}>
      <section css={yTWatcherCss.youtubeVideos}>
        {playlists.map((playlist, index) => (
          <div key={index}>
            <h2>{playlist.name}</h2>
            <Playlist listOfYouTubeVideoIDs={playlist.ytVideoIds} />
          </div>
        ))}
      </section>

      <section css={yTWatcherCss.thirdPartyLinks}>
        <h2>Third party links</h2>
        <ul>
          {playlists.map((playlist, index) => (
            <li key={index}>
              {playlist.thirdPartyLinks.map((link, index) => (
                <div key={index}>
                  <h3>{link.title}</h3>
                  <ImageWithWrapper src={link.imageOrGifPath} />
                  <a href={link.linkURL} target="_blank" rel="noreferrer">
                    {link.linkURL}
                  </a>
                </div>
              ))}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};
