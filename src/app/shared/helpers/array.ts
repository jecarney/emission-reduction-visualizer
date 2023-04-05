const listToString = <T>(list: T[]): string => {
  return JSON.stringify(list.sort());
};
const equalListContents = <T>(list: T[], compareList: T[]): boolean => {
  return listToString(list) === listToString(compareList);
};

export default equalListContents;
