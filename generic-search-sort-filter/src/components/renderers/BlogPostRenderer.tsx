import React from 'react';
import {IBlogPost} from '../../interfaces/IBlogPost';

export function BlogPostRenderer(props: IBlogPost) {
  const {id, title, description, viewCount, publishedAt} = props;

  const tryFormatDate = () => {
    try {
      return `${new Date(publishedAt).toLocaleDateString()} ${new Date(
        publishedAt
      ).toLocaleTimeString()}`;
    } catch (error) {
      return 'Invalid Date';
    }
  };

  const formattedDate = tryFormatDate();

  return (
    <div className="col-12 p-3" style={{width: '18rem'}}>
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">{title}</h1>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer text-muted">
          <span className="float-start">#{id}</span>
          <span className="float-end">
            View count: {viewCount} Published at: {formattedDate}
          </span>
        </div>
      </div>
    </div>
  );
}
