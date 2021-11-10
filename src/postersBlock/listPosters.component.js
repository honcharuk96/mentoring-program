import React from 'react';
import { Posters } from './postersBlock.styled';
import PropTypes from 'prop-types';
import { withForm } from './posterHoc/poster.hoc';
import PosterComponent from './poster.connector';

const ListPosters = ({ listOfPosters }) => (
  <Posters>
    {listOfPosters.map(poster => (
      <PosterWithForm
        key={poster.id}
        id={poster.id}
        src={poster.poster_path}
        alt={poster.title}
        title={poster.title}
        date={poster.release_date}
        genres={poster.genres}
        rating={poster.vote_average}
        runtime={poster.runtime}
        overview={poster.overview}
      />
    ))}
  </Posters>
);

export default ListPosters;

ListPosters.propTypes = {
  listOfPosters: PropTypes.arrayOf(
    PropTypes.shape({
      budget: PropTypes.number,
      genres: PropTypes.arrayOf(PropTypes.string),
      id: PropTypes.number.isRequired,
      overview: PropTypes.string,
      poster_path: PropTypes.string,
      release_date: PropTypes.string.isRequired,
      revenue: PropTypes.number,
      runtime: PropTypes.number,
      tagline: PropTypes.string,
      title: PropTypes.string.isRequired,
      vote_average: PropTypes.number,
      vote_count: PropTypes.number,
    }),
  ),
};

const PosterWithForm = withForm(PosterComponent);
