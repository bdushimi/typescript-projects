export interface ISortProperty<T> {
  property: keyof T;
  isDescending: boolean;
}
