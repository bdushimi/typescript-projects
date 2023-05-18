import React from 'react';
import {IWidget} from '../../interfaces/IWidget';

export function WidgetRenderer(props: IWidget) {
  const {isSpecialCard, title, description, rating, created, updated, id} =
    props;
  return (
    <div className="col-12 p-3">
      <div className={isSpecialCard ? 'card specialCard' : 'card'}>
        <div className="card-body">
          <h1 className="card-title">{title}</h1>
          <p className="card-text">{description}</p>
          <p className="card-text fst-italic">Rating: {rating}/10</p>
        </div>
        <div className="card-footer text-muted">
          <span className="float-start">#{id}</span>
          <span className="float-end">
            Created: {created.toLocaleDateString()}&nbsp;Updated:{' '}
            {updated.toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
}
