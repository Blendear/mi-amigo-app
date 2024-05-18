/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MealsAndMacros } from "@/features/EventManager/SubApps/meals-and-macros/components/MealsAndMacros";
import { useAppSelector } from "@/store/redux/hooks";
import { MealsAndMacrosProps, YTWatcherProps } from "..";
import Playlist from "@/features/EventManager/SubApps/yt-watcher/components/Playlist";

const SubApp = () => {
  const router = useRouter();

  const { subAppsGlobalData } = useAppSelector(
    (state) => state.appDataOfCurrentUserReducer
  );

  const [subAppNameAndPayload, setSubAppNameAndPayload] = useState({
    name: "",
    payload: {},
  });

  useEffect(() => {
    router.query["name"] &&
      router.query["variant"] &&
      setSubAppNameAndPayload({
        name: router.query["name"] as string,

        payload:
          subAppsGlobalData[router.query["name"] as string][
            router.query["variant"] as string
          ],
      });
  }, [router.query, subAppsGlobalData]);

  return {
    // Find a type which will automatically assume the type of the payload, by mapping
    // the keys of the subAppsGlobalData object or something like that
    MealsAndMacros: (
      <MealsAndMacros
        globalSubAppData={subAppNameAndPayload.payload as MealsAndMacrosProps}
      />
    ),

    YTWatcher: (
      // TODO: Refactor this hack solution, since I don't have a YTWatcher component yet,
      // thats why I'm using Playlist component from the yt-watcher feature folder
      <Playlist
        listOfYouTubeVideoIDs={
          (subAppNameAndPayload.payload as YTWatcherProps).listOfYouTubeVideoIDs
        }
      />
    ),
  }[subAppNameAndPayload.name];
};

export default SubApp;
