import React, {ReactNode, useState} from 'react';
import {genericSort} from '../utils/genericSort';
import {SortDirection} from './SortDirection';

export interface ISortersProps<T> {
  data: Array<T>;
  renderItem: (item: T) => ReactNode;
  label: string;
  initialSortProperty: keyof T;
  initialIsDescending: boolean;
}

export function Sorters<T>(props: ISortersProps<T>) {
  const {data, renderItem, label, initialSortProperty, initialIsDescending} =
    props;
  const [sortProperty, setSortProperty] =
    useState<keyof T>(initialSortProperty);
  const [isDescending, setIsDescending] = useState(initialIsDescending);
  return (
    <>
      <div className="row">
        <div className="col-6">
          <label htmlFor="sorters">{label}</label>
          <select
            id="sorters"
            onChange={event => setSortProperty(event.target.value as keyof T)}
          >
            {Object.keys(data[0] as keyof T).map(key => {
              return (
                <option key={key} value={key}>
                  Sort by '{key}'!
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-6">
          <SortDirection
            isDescending={isDescending}
            setIsDescending={isDescending => setIsDescending(isDescending)}
          />
        </div>
      </div>
      {data &&
        data
          .sort((a, b) => genericSort(a, b, sortProperty, isDescending))
          .map(widget => renderItem(widget))}
    </>
  );
}
