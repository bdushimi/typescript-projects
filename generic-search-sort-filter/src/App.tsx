import React, {useState} from 'react';
import {widgets} from './mock-data/widget';
import {people} from './mock-data/people';
import {genericSearch} from './utils/genericSearch';
import {SearchInput} from './components/SearchInput';

function App() {
  const [query, setQuery] = useState('');
  return (
    <>
      <SearchInput setSearchQuery={setQuery} />
      <h2>Widgets: </h2>
      {widgets
        .filter(widget =>
          genericSearch(widget, ['title', 'description'], query, false)
        )
        .map(widget => (
          <h3 key={widget.id}>{widget.title}</h3>
        ))}
      <h2>People: </h2>
      {people
        .filter(person =>
          genericSearch(
            person,
            ['firstName', 'lastName', 'eyeColor'],
            query,
            false
          )
        )
        .map((person, index) => (
          <h3 key={index}>
            {person.firstName} {person.lastName}
          </h3>
        ))}
    </>
  );
}

export default App;
