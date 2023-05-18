import React, {useState} from 'react';
import {widgets} from './mock-data/widget';
import {people} from './mock-data/people';
import {genericSearch} from './utils/genericSearch';
import {genericSort} from './utils/genericSort';
import {SearchInput} from './components/SearchInput';
import {Sorters} from './components/Sorters';
import {IPerson} from './interfaces/IPerson';
import {IWidget} from './interfaces/IWidget';
import {ISortProperty} from './interfaces/ISortProperty';
import {WidgetRenderer} from './components/renderers/WidgetRenderer';
import {PersonRenderer} from './components/renderers/PersonRenderer';

function App() {
  const [widgetSortProperty, setWidgetSortProperty] = useState<
    ISortProperty<IWidget>
  >({property: 'title'});

  const [widgetSearchQuery, setWidgetSearchQuery] = useState('');

  const [personSortProperty, setPersonSortProperty] = useState<
    ISortProperty<IPerson>
  >({property: 'firstName'});

  const [personSearchQuery, setPersonSearchQuery] = useState('');

  return (
    <>
      <h2>Widgets:</h2>
      <SearchInput setSearchQuery={setWidgetSearchQuery} />
      <Sorters
        setSortProperty={property => setWidgetSortProperty({property})}
        object={widgets[0]}
      />
      {widgets
        .filter(widget =>
          genericSearch(
            widget,
            ['title', 'description'],
            widgetSearchQuery,
            false
          )
        )
        .sort((a, b) => genericSort(a, b, widgetSortProperty.property))
        .map(widget => {
          return <WidgetRenderer key={widget.id} {...widget} />;
        })}
      <h2>People:</h2>
      <SearchInput setSearchQuery={setPersonSearchQuery} />
      <Sorters
        setSortProperty={property => setPersonSortProperty({property})}
        object={people[0]}
      />
      {people
        .filter(widget =>
          genericSearch(
            widget,
            ['firstName', 'lastName', 'eyeColor'],
            personSearchQuery,
            false
          )
        )
        .sort((a, b) => genericSort(a, b, personSortProperty.property))
        .map((person, index) => {
          return <PersonRenderer key={index} {...person} />;
        })}
    </>
  );
}

export default App;
