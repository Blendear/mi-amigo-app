export const parseModalQueryStringToAnArrayOfStrings = (
  modalsAsAQueryParamString
) => {
  if (!modalsAsAQueryParamString) return [];
  return modalsAsAQueryParamString.split(",");
};
