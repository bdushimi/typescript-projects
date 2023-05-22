import React, {useState} from 'react';
import {widgets} from './mock-data/widget';
import {people} from './mock-data/people';
import {WidgetRenderer} from './components/renderers/WidgetRenderer';
import {SearchSortAndFilter} from './components/SearchSortAndFilter';
import {PersonRenderer} from './components/renderers/PersonRenderer';

function App() {
  const [showPeople, setShowPeople] = useState<boolean>(false);

  const buttonText = showPeople ? 'Show widgets' : 'Show people';

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => setShowPeople(!showPeople)}
      >
        {buttonText}
      </button>
      {!showPeople ? (
        <SearchSortAndFilter
          key="widgets"
          title="Widgets:"
          data={widgets}
          renderItem={widget => <WidgetRenderer {...widget} key={widget.id} />}
          searchLabel="Search for widgets"
          searchProperties={['title', 'description']}
          shouldBeCaseSensitive={false}
          sortersLabel="Sort widgets"
          initialSortProperty="title"
          filtersLabel="Filter widgets"
          initialIsDescending={true}
          initialFilterProperties={[]}
          initialSearchQuery=""
        />
      ) : (
        <SearchSortAndFilter
          key="people"
          title="People:"
          data={people}
          renderItem={person => (
            <PersonRenderer
              {...person}
              key={`${person.firstName}-${person.lastName}-${person.birthday}`}
            />
          )}
          searchLabel="Search for people"
          searchProperties={['firstName', 'lastName', 'eyeColor']}
          shouldBeCaseSensitive={false}
          sortersLabel="Sort people"
          initialSortProperty="firstName"
          filtersLabel="Filter people"
          initialIsDescending={false}
          initialFilterProperties={[]}
          initialSearchQuery=""
        />
      )}
    </>
  );
}

export default App;
