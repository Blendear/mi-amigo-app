export const updateTheQueryParamsNamesAndValues = (
  router,
  queryParamName: string,
  queryParamValue: "null" | string // "null" means that all the modals are closed
) => {
  router.push({
    pathname: router.pathname,
    query: { ...router.query, [queryParamName]: queryParamValue },
  });
};
