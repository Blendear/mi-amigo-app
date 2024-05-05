import styles from "@/styles/sass/styles-all.module.scss";
import { NestedYoutubeLink } from "./NestedYoutubeLink";
// import { SkeletonTheme } from "react-loading-skeleton";
// import { skeletonThemeData } from "@/features/preload-skeletons/data/skeletonThemeData";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { DialogModal } from "../../dialog-modals/components/DialogModal";

const yTvideoIds = {
  // they are goruped by their main page
  "meet-info": "kwoW9VN_2mA",
  "chunk-details": "1BSu3CxwI7U",
  "item-details": "FH0K4zemt74",
  "clash-declaration": "RtAY8x-OhLI",

  places: "xcCqmnlIR2Y",

  questlines: "hRBeS3ByytY",

  backpack: "2g811Eo7K8U",

  "initiative-and-time": "ECOd877Urm4",
};

export const Tutorial = ({ name }) => {
  //
  const router = useRouter();

  const [showTutorialModal, setShowTutorialModal] = useState<boolean>(true);

  useEffect(() => {
    setShowTutorialModal(
      router.query["tutorial"] && router.query["tutorial"] === name
    );
  }, [router.query]);

  return (
    // this turnery operator "&&" is used instead of the "isOpen", since the "isOpen"
    // makes it, so that the modal isn't unmounted. Yet here we want to unmount it
    // after closing
    showTutorialModal && (
      <DialogModal
        // zIndex={11}
        isOpen={true}
        onClose={() => {
          const updatedQuery = { ...router.query };
          delete updatedQuery["tutorial"];
          router.push({
            pathname: router.pathname,
            query: updatedQuery,
          });
        }}
      >
        {/* <SkeletonTheme
          baseColor={skeletonThemeData.baseColor}
          highlightColor={skeletonThemeData.highlightColor}
        > */}
        <article className={styles["tutorial__container"]}>
          <div>
            <p>
              {
                "Only Players and Game Masters will see the original tutorials, but..."
              }
            </p>
            <NestedYoutubeLink yTvideoId={yTvideoIds[name]} />
          </div>
        </article>
        {/* </SkeletonTheme> */}
      </DialogModal>
    )
  );
};
