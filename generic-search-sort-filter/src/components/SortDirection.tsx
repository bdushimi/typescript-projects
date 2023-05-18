import * as React from 'react';

export interface ISortDirectionProps {
  isDescending: boolean;
  setIsDescending: (isDescending: boolean) => void;
}

export function SortDirection(props: ISortDirectionProps) {
  const {isDescending, setIsDescending} = props;
  return (
    <div>
      <label>
        <input
          onChange={() => setIsDescending(true)}
          type="radio"
          value="Descending"
          checked={isDescending}
        />
        Descending
      </label>
      <label>
        <input
          onChange={() => setIsDescending(false)}
          type="radio"
          value="Ascending"
          checked={!isDescending}
        />
        Ascending
      </label>
    </div>
  );
}
