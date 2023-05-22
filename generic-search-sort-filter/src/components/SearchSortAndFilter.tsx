import React, {ReactNode, useState} from 'react';
import {IFilter} from '../interfaces/IFilter';
import {genericFilter} from '../utils/genericFilter';
import {genericSearch} from '../utils/genericSearch';
import {genericSort} from '../utils/genericSort';
import {Filters} from './Filters';
import {SearchInput} from './SearchInput';
import {Sorters} from './Sorters';
import {SortDirection} from './SortDirection';

interface ISearchSortAndFilterProps<T> {
  title: string;
  data: Array<T>;
  renderItem: (item: T) => ReactNode;
  searchLabel: string;
  initialSearchQuery: string;
  searchProperties: Array<keyof T>;
  shouldBeCaseSensitive: boolean;
  sortersLabel: string;
  initialSortProperty: keyof T;
  initialIsDescending: boolean;
  filtersLabel: string;
  initialFilterProperties: Array<IFilter<T>>;
}

export function SearchSortAndFilter<T>(props: ISearchSortAndFilterProps<T>) {
  const {
    title,
    data,
    renderItem,
    searchLabel,
    initialSearchQuery,
    searchProperties,
    shouldBeCaseSensitive,
    sortersLabel,
    initialSortProperty,
    initialIsDescending,
    filtersLabel,
    initialFilterProperties,
  } = props;

  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [sortProperty, setSortProperty] = useState(initialSortProperty);
  const [isDescending, setIsDescending] = useState(initialIsDescending);
  const [filterProperties, setFilterProperties] = useState(
    initialFilterProperties
  );

  return (
    <>
      <h2>{title}</h2>
      <SearchInput
        label={searchLabel}
        setSearchQuery={searchQuery => setSearchQuery(searchQuery)}
      />
      <div className="row">
        <div className="col-6">
          <Sorters
            label={sortersLabel}
            object={data && data.length > 0 ? data[0] : {}}
            setSortProperty={sortProperty => setSortProperty(sortProperty)}
          />
        </div>
        <div className="col-6">
          <SortDirection
            isDescending={isDescending}
            setIsDescending={isDescending => setIsDescending(isDescending)}
          />
        </div>
      </div>
      <Filters
        label={filtersLabel}
        object={data && data.length > 0 ? data[0] : {}}
        filterProperties={filterProperties}
        setFilterProperties={filterProperties => {
          setFilterProperties(filterProperties);
        }}
      />
      {data &&
        data
          .filter(a =>
            genericSearch(
              a,
              searchProperties,
              searchQuery,
              shouldBeCaseSensitive
            )
          )
          .sort((a, b) => genericSort(a, b, sortProperty, isDescending))
          .filter(a => genericFilter(a, filterProperties))
          .map(a => renderItem(a))}
    </>
  );
}
