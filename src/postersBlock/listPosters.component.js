import React from 'react';
import { Posters } from './postersBlock.styled';
import PropTypes from 'prop-types';
import PosterComponent from './poster.connector';
import HoverForOpenEditOrDeleteComponent from './hoverForOpenEditOrDelete/hoverForOpenEditOrDelete.connector';

const ListPosters = ({ listOfPosters }) => (
  <>
    <Posters>
      {listOfPosters.map(poster => (
        <HoverForOpenEditOrDeleteComponent id={poster.id} key={`hover_${poster.id}`}>
          <PosterComponent
            id={poster.id}
            src={poster.poster_path}
            alt={poster.title}
            title={poster.title}
            date={poster.release_date}
            genres={poster.genres}
          />
        </HoverForOpenEditOrDeleteComponent>
      ))}
    </Posters>
  </>
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
