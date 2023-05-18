export const genericSort = <T>(
  a: T,
  b: T,
  property: keyof T,
  isDescending: boolean
) => {
  const result = () => {
    if (a[property] > b[property]) {
      return 1;
    }
    if (a[property] < b[property]) {
      return -1;
    }
    return 0;
  };
  return isDescending ? result() * -1 : result();
};
