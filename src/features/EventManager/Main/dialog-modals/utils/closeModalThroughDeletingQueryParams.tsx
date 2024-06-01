import { updateTheQueryParamsNamesAndValues } from "./updateTheQueryParamsNamesAndValues";
import { parseModalQueryStringToAnArrayOfStrings } from "./parseModalQueryStringToAnArrayOfStrings";

export const closeModalThroughDeletingQueryParams = (router, modalName) => {
  if (modalName === "null") {
    // "modals=null" = hide all modals
    updateTheQueryParamsNamesAndValues(router, "modals", "null");
  } else {
    // if there is a specific modal to be closed instead, remove its string from the "modals" query param string
    const queryModals = router.query.modals || "";
    const modalsArray = parseModalQueryStringToAnArrayOfStrings(queryModals);
    const index = modalsArray.indexOf(modalName);
    if (index !== -1) {
      modalsArray.splice(index, 1);
      const newModalsString = modalsArray.join(",");
      updateTheQueryParamsNamesAndValues(router, "modals", newModalsString);
    }
  }
};
