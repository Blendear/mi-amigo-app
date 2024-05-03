import { updateTheQueryParamsNamesAndValues } from "./updateTheQueryParamsNamesAndValues";
import { parseModalQueryStringToAnArrayOfStrings } from "./parseModalQueryStringToAnArrayOfStrings";

export const openModalThroughQueryParams = (
  router,
  modalName,
  isModalAnExtentionOfThePrevModal
) => {
  const queryModals = router.query.modals || "";

  // Array made out of the "modals" query param string, because it's easier to work with separated modal names
  const modalsArray = parseModalQueryStringToAnArrayOfStrings(queryModals);

  // If the modal is an extention of the previous modal, remove the whole "modals" query param,
  // before the upcoming modal query expansion
  if (!isModalAnExtentionOfThePrevModal) {
    modalsArray.pop();
  }

  // Expand the "modals" query param, but only if the given modal name isn't already in the query
  if (!modalsArray.includes(modalName)) {
    modalsArray.push(modalName);
    const newModalsString = modalsArray.join(",");
    updateTheQueryParamsNamesAndValues(router, "modals", newModalsString);
  }
};
