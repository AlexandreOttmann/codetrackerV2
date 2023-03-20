export const sortedDataEntries = (listLanguages: any) => {
  let sortedEntry = Object.entries(listLanguages)
    .filter(([key, val]) => key !== 'null')
    .sort((a: any, b: any) => b[1] - a[1]);
  return sortedEntry;
};
