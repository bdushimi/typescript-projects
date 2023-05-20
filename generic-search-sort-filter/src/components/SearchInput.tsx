import React, {ReactNode, useState} from 'react';
import {useDebounce} from '../hooks/useDebounce';
import {genericSearch} from '../utils/genericSearch';

export interface ISearchInputProps<T> {
  data: Array<T>;
  renderItem: (item: T) => ReactNode;
  initialSearchQuery: string;
  searchKeys: Array<keyof T>;
}

export function SearchInput<T>(props: ISearchInputProps<T>) {
  const {data, renderItem, initialSearchQuery, searchKeys} = props;
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);

  // Generate a debounced version of our setSearchQuery function
  const setSearchQueryDebounced = useDebounce(event => {
    // console.log('Firing!');
    setSearchQuery(event.target.value);
  }, 250);

  return (
    <>
      <label htmlFor="search" className="mt-3">
        Search
      </label>
      <input
        id="search"
        className="form-control full-width"
        type="search"
        placeholder="Search..."
        aria-label="Search"
        onChange={event => {
          event.persist();
          setSearchQueryDebounced(event);
        }}
      />
      {data &&
        data
          .filter(item => genericSearch(item, searchKeys, searchQuery, false))
          .map(renderItem)}
    </>
  );
}
