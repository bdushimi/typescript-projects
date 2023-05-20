import {IFilter} from '../interfaces/IFilter';

export const genericFilter = <T>(
  object: T,
  filterProperties: Array<IFilter<T>>
) => {
  return filterProperties.every(filterProperty => {
    const {property, isTruthySelected} = filterProperty;
    const result = object[property] ? true : false;
    return isTruthySelected ? result : !result;
  });
};
