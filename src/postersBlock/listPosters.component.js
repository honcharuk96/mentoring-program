import React from 'react';
import {Date, Img, PosterInfo, Posters, PosterTitle, Poster} from './postersBlock.styled';
import PosterCategory from './posterCategory/posterCategory.component';
import PropTypes from 'prop-types';

const ListPosters = ({ posters }) => (
    <Posters>
        {posters.map(poster => (
            <Poster key={poster.id}>
                <Img src={poster.poster_path} alt={poster.title} />
                <PosterInfo>
                    <PosterTitle>{poster.title}</PosterTitle>
                    <Date>{poster.release_date.slice(0, 4)}</Date>
                </PosterInfo>
                <PosterCategory genres={poster.genres} />
            </Poster>
        ))}
    </Posters>
);

export default ListPosters;

ListPosters.propTypes = {
    posters: PropTypes.arrayOf(
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

ListPosters.defaultProps = {
    posters: [],
};
