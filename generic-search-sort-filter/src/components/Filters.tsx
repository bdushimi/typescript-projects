import * as React from 'react';
import {Fragment} from 'react';
import {IFilter} from '../interfaces/IFilter';

export interface IFiltersProps<T> {
  label: string;
  object: T | {};
  filterProperties: Array<IFilter<T>>;
  setFilterProperties: (property: Array<IFilter<T>>) => void;
}

export function Filters<T>(props: IFiltersProps<T>) {
  const {label, object, filterProperties, setFilterProperties} = props;

  const onChangeFilter = (property: IFilter<T>) => {
    const propertyMatch = filterProperties.some(
      filterProperty => filterProperty.property === property.property
    );
    const fullMatch = filterProperties.some(
      filterProperty =>
        filterProperty.property === property.property &&
        filterProperty.isTruthySelected === property.isTruthySelected
    );
    if (fullMatch) {
      setFilterProperties(
        filterProperties.filter(
          filterProperty => filterProperty.property !== property.property
        )
      );
    } else if (propertyMatch) {
      setFilterProperties([
        ...filterProperties.filter(
          filterProperty => filterProperty.property !== property.property
        ),
        property,
      ]);
    } else {
      setFilterProperties([...filterProperties, property]);
    }
  };

  return (
    <div className="p-1 my-2">
      <label className="mt-3">{label}</label>
      <br />
      {Object.keys(object as keyof T).map((key: string) => {
        return (
          <Fragment key={`${key}-true`}>
            <input
              type="checkbox"
              id={`${key}-true`}
              value={key}
              onChange={() =>
                onChangeFilter({
                  property: key as keyof T,
                  isTruthySelected: true,
                })
              }
              checked={filterProperties.some(
                filterProperty =>
                  filterProperty.property === key &&
                  filterProperty.isTruthySelected
              )}
              className="m-1 ml-3"
            />
            <label htmlFor={`${key}-true`}>'{key}' is truthy</label>
            <input
              type="checkbox"
              id={`${key}-false`}
              value={key}
              onChange={() =>
                onChangeFilter({
                  property: key as keyof T,
                  isTruthySelected: false,
                })
              }
              checked={filterProperties.some(
                filterProperty =>
                  filterProperty.property === key &&
                  !filterProperty.isTruthySelected
              )}
              className="m-1 ml-3"
            />
            <label htmlFor={`${key}-false`}>'{key}' is falsy</label>
            <br />
          </Fragment>
        );
      })}
    </div>
  );
}
