import * as React from 'react';
import {useDebounce} from '../hooks/useDebounce';

export interface ISearchInputProps {
  label: string;
  setSearchQuery: (searchQuery: string) => void;
}

export function SearchInput(props: ISearchInputProps) {
  const {label, setSearchQuery} = props;
  const setSearchQueryDebounced = useDebounce(event => {
    setSearchQuery(event.target.value);
  }, 250);

  return (
    <>
      <label htmlFor="search">{label}</label>
      <input
        id="search"
        type="search"
        placeholder="Search..."
        aria-label="Search"
        onChange={event => {
          event.persist();
          setSearchQueryDebounced(event);
        }}
      />
    </>
  );
}
