export const genericSearch = <T>(
  object: T,
  properties: Array<keyof T>,
  query: string,
  shouldBeCaseSensitive: boolean
): boolean => {
  if (query === '') {
    return true;
  }

  return properties.some(property => {
    const value = object[property];
    if (typeof value === 'string' || typeof value === 'number') {
      return shouldBeCaseSensitive
        ? value.toString().includes(query)
        : value.toString().toLowerCase().includes(query.toLowerCase());
    }
    return false;
  });
};
