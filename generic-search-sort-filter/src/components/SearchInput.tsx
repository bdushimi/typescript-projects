import React from 'react';
import {useDebounce} from '../hooks/useDebounce';

export interface ISearchInputProps {
  setSearchQuery: (searchQuery: string) => void;
}

export function SearchInput(props: ISearchInputProps) {
  const {setSearchQuery} = props;

  // Generate a debounced version of our setSearchQuery function
  const setSearchQueryDebounced = useDebounce(event => {
    // console.log('Firing!');
    setSearchQuery(event.target.value);
  }, 250);

  return (
    <>
      <label htmlFor="search" className="mt-3">
        Search here
      </label>
      <input
        id="search"
        className="form-control full-width"
        type="search"
        placeholder="Search..."
        aria-label="Search"
        onChange={setSearchQueryDebounced}
      />
    </>
  );
}
