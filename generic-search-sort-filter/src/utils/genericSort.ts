import {ISortProperty} from '../interfaces/ISortProperty';

export const genericSort = <T>(a: T, b: T, sortProperty: ISortProperty<T>) => {
  const result = () => {
    if (a[sortProperty.property] > b[sortProperty.property]) {
      return 1;
    }
    if (a[sortProperty.property] < b[sortProperty.property]) {
      return -1;
    }
    return 0;
  };
  return sortProperty.isDescending ? result() * -1 : result();
};
