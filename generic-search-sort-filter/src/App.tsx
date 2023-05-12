import React from 'react';

import {widgets} from './mock-data/widget';
import {people} from './mock-data/people';
import {genericSearch} from './utils/genericSearch';

function App() {
  return (
    <>
      <h2>Widgets: </h2>
      {widgets.map(widget => (
        <h3 key={widget.id}>{widget.title}</h3>
      ))}
      <h2>People: </h2>
      {people.map((person, index) => (
        <h3 key={index}>
          {person.firstName} {person.lastName}
        </h3>
      ))}
    </>
  );
}

export default App;
