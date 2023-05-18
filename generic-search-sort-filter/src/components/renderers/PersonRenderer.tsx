import {IPerson} from '../../interfaces/IPerson';
import React from 'react';

export function PersonRenderer(props: IPerson) {
  const {firstName, lastName, birthday, eyeColor} = props;
  return (
    <div className="col-12 p-3">
      <div className="card">
        <div className="card-body">
          <h3>
            👤&nbsp;{firstName} {lastName}
          </h3>
          <ul>
            <li>
              Has <b>{eyeColor}</b> eyes
            </li>
            <li>
              🎂&nbsp;&nbsp;Birthday: <b>{birthday.toLocaleDateString()}</b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
