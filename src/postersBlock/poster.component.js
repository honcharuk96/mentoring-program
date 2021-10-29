import React, {memo} from 'react';
import {Date, Img, Poster, PosterInfo, PosterTitle} from './postersBlock.styled';
import PropTypes from 'prop-types';
import PosterCategoryComponent from './posterCategory/posterCategory.component';

const PosterComponent = ({ id, src, alt, title, date, genres }) => (
    <Poster key={id} id={id}>
        <Img src={src} alt={alt} />
        <PosterInfo>
            <PosterTitle>{title}</PosterTitle>
            <Date>{date.slice(0, 4)}</Date>
        </PosterInfo>
        <PosterCategoryComponent genres={genres} />
    </Poster>
);

export default memo(PosterComponent);

PosterComponent.propTypes = {
    id: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    src: PropTypes.string,
    date: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};