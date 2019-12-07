import React from 'react';
import News from './News';
import PropTypes from 'prop-types';

const NewsList = ({news}) => (
  <div className="row">
    {news.map(newsItem => (
      <News
        key={newsItem.url}
        news={newsItem}
      />
    ))}
  </div>
);

NewsList.propTypes = {
  news: PropTypes.array.isRequired
}

export default NewsList;
