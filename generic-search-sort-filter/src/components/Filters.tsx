import React from 'react';
import {IFilter} from '../interfaces/IFilter';

export interface IFiltersProps<T> {
  object: {};
  properties: Array<IFilter<T>>;
  onChangeFilter: (property: IFilter<T>, isChecked: boolean) => void;
}

export function Filters<T>(props: IFiltersProps<T>) {
  const {object, properties, onChangeFilter} = props;
  return (
    <div className="p-1 my-2">
      <label className="mt-3">Filters! Try us too!</label>
      <br />
      {Object.keys(object).map((key: any) => {
        return (
          <>
            <input
              type="checkbox"
              id={`${key}-true`}
              value={key}
              onChange={event =>
                onChangeFilter(
                  {property: key, isTruthySelected: true},
                  event.target.checked
                )
              }
              checked={properties.some(
                property =>
                  property.property === key && property.isTruthySelected
              )}
              className="m-1 ml-3"
            />
            <label htmlFor={`${key}-true`}>'{key}' is truthy</label>
            <input
              type="checkbox"
              id={`${key}-false`}
              value={key}
              onChange={event =>
                onChangeFilter(
                  {property: key, isTruthySelected: false},
                  event.target.checked
                )
              }
              checked={properties.some(
                property =>
                  property.property === key && !property.isTruthySelected
              )}
              className="m-1 ml-3"
            />
            <label htmlFor={`${key}-false`}>'{key}' is falsy</label>
            <br />
          </>
        );
      })}
    </div>
  );
}
