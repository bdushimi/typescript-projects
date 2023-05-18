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
import {SortDirection} from './components/SortDirection';
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

  // The new stateful variables storing the sort direction
  const [widgetsIsDescending, setWidgetsIsDescending] = useState(false);
  const [peopleIsDescending, setPeopleIsDescending] = useState(false);

  return (
    <>
      <h2>Widgets:</h2>
      <SearchInput setSearchQuery={setWidgetSearchQuery} />
      <div className="row">
        <div className="col-6">
          <Sorters
            setSortProperty={property => setWidgetSortProperty({property})}
            object={widgets[0]}
          />
        </div>
        <div className="col-6">
          <SortDirection
            isDescending={widgetsIsDescending}
            setIsDescending={value => setWidgetsIsDescending(value)}
          />
        </div>
      </div>
      {widgets
        .filter(widget =>
          genericSearch(
            widget,
            ['title', 'description'],
            widgetSearchQuery,
            false
          )
        )
        .sort((a, b) =>
          genericSort(a, b, widgetSortProperty.property, widgetsIsDescending)
        )
        .map(widget => {
          return <WidgetRenderer key={widget.id} {...widget} />;
        })}
      <h2>People:</h2>
      <SearchInput setSearchQuery={setPersonSearchQuery} />
      <div className="row">
        <div className="col-6">
          <Sorters
            setSortProperty={property => setPersonSortProperty({property})}
            object={people[0]}
          />
        </div>
        <div className="col-6">
          <SortDirection
            isDescending={peopleIsDescending}
            setIsDescending={value => setPeopleIsDescending(value)}
          />
        </div>
      </div>
      {people
        .filter(widget =>
          genericSearch(
            widget,
            ['firstName', 'lastName', 'eyeColor'],
            personSearchQuery,
            false
          )
        )
        .sort((a, b) =>
          genericSort(a, b, personSortProperty.property, peopleIsDescending)
        )
        .map((person, index) => {
          return <PersonRenderer key={index} {...person} />;
        })}
    </>
  );
}

export default App;
