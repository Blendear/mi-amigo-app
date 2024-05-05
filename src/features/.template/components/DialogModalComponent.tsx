/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
// import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
// import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
// import { DialogModal } from "@/features/dialog-modals/components/DialogModal";
import { DialogModal } from "../../dialog-modals/components/DialogModal";
import { useRouter } from "next/router";
import { useState } from "react";

// two words fully written, the rest are initials
const OneTwoTFWCNCss = {
  container: css({
    // gridRow: "1 / 3",
    // padding: "1rem",
    // width: "100%",
    // boxSizing: "border-box",
    // aspectRatio: "2/1",
    // backgroundColor: `rgb(${colors.primaryLight})`,
    // display: "grid",
    // gridTemplateRows: "1fr",
    // justifyItems: "center",
    // fontSize: "clamp(1rem, 4vw, 2rem)",
    // color: `rgb(${colors.whiteLight})`,
    // "& div:nth-child(1)": {
    //   backgroundColor: "yellow",
    // },
  }),
};

export const OneTwoThreeFourWordComponentName = () => {
  //
  const router = useRouter();

  // const [showMyNameModal, setShowMyNameModal] = useState(false);

  // T R A P - PLACEHOLDER data is necessary in variant "B", if the modal content is dependent on the query params
  // Because before the modal is set to "true" (by the query param), the modal content is already rendered, and
  // will return an error, since at first there are no query params to load the data from
  // Example of a placeholder data (from the skill details modal):
  //
  // const skill: Skill =
  // useMemo(() => {
  //   const isModalOpen = router.query["skill-details-modal"] === "true";
  //   const skillGroup = router.query["skill-group"] as string;
  //   const skillSubgroup = router.query["skill-subgroup"] as string;
  //   const skillId = router.query["skill-id"] as string;

  //   if (isModalOpen) {
  //     return currentMeetData.skillsByOrigin[skillGroup][skillSubgroup].find(
  //       (skill) => skill.id === parseInt(skillId)
  //     );
  //   }
  // }, [router.query, currentMeetData.skillsByOrigin]) ||
  // // placeholder for the moments where query params are loaded yet || anymore (there's a split second
  // // after closing the modal, where this step is necessary for some reason)
  // skillsListRedux.beast.classics[0];

  return (
    <div>
      {/*   A   :   use useState "showMyNameModal" & "isOpen={true}", for unmounting modal after closing */}
      {/* { showMyNameModal && */}

      <DialogModal
        //   B   :   use "isOpen" with a condition, for NOT unmounting modal after closing (because, for example, it renders a lot of heavy data)
        // isOpen={true}
        isOpen={
          // for example - depending on query param, IF user should be able to copy paste the link and open the modal directly
          router.query["name_of_the_query_param_for_the_modal"] === "true"

          // SOMEWHERE (onclick button etc.) you need to trigger the query through:
          //

          //
          // router.push({
          //   pathname: router.pathname,
          //   query: {
          //     ...router.query,
          //     "name_of_the_query_param_for_the_modal": true,
          //     "optional_second_query_param_for_the_modal_like_item_id_of_the_item_details_modal": hook1,
          //   },
          // });
        }
        onClose={() => {
          // depends on "did you use query param in isOpen, or not?". If not, a simple setShowMyNameModal(false) will do
          const updatedQuery = { ...router.query };
          delete updatedQuery["name_of_the_query_param_for_the_modal"];
          delete updatedQuery[
            "optional_second_query_param_for_the_modal_like_item_id_of_the_item_details_modal"
          ];
          router.push({
            pathname: router.pathname,
            query: updatedQuery,
          });
        }}
        // extraNavbarButtons={<BtnTutorialOpener tutorialName={"item-details"} />}
        // hasBackdrop: true;
        // zIndex: 12;
      >
        <div css={OneTwoTFWCNCss.container}>content to show</div>
      </DialogModal>

      {/* } */}
    </div>
  );
};
