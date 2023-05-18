import * as React from 'react';

export interface ISortersProps<T> {
  object: {};
  setSortProperty: (property: keyof T) => void;
}

export function Sorters<T>(props: ISortersProps<T>) {
  const {object, setSortProperty} = props;
  return (
    <>
      <label htmlFor="sorters">Sorters - try us too</label>
      <select
        id="sorters"
        onChange={event => setSortProperty(event.target.value as keyof T)}
      >
        {Object.keys(object).map(key => (
          <option value={key} key={key}>
            Sort by {key}
          </option>
        ))}
      </select>
    </>
  );
}
