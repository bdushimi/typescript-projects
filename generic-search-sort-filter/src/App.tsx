import React, {useState} from 'react';
import {widgets} from './mock-data/widget';
import {people} from './mock-data/people';
import {SearchInput} from './components/SearchInput';
import {WidgetRenderer} from './components/renderers/WidgetRenderer';
import {PersonRenderer} from './components/renderers/PersonRenderer';
import {Sorters} from './components/Sorters';

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
        <>
          <SearchInput
            data={widgets}
            renderItem={item => <WidgetRenderer {...item} />}
            initialSearchQuery=""
            searchKeys={['title', 'description']}
          />
          <Sorters
            data={widgets}
            renderItem={widget => <WidgetRenderer {...widget} />}
            label="Sort options for widgets"
            initialSortProperty="title"
            initialIsDescending={false}
          />
        </>
      ) : (
        <>
          <SearchInput
            data={people}
            renderItem={item => <PersonRenderer {...item} />}
            initialSearchQuery=""
            searchKeys={['firstName', 'lastName', 'eyeColor']}
          />
          <Sorters
            data={people}
            renderItem={person => <PersonRenderer {...person} />}
            label="Sort options for widgets"
            initialSortProperty="firstName"
            initialIsDescending={false}
          />
        </>
      )}
    </>
  );
}

export default App;
