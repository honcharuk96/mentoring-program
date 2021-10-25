import React, { memo, useState } from 'react';
import PosterForm from '../posterForm/posterForm.component';
import PropTypes from 'prop-types';
import { Atag, HoverPoster, Nav, Ul } from './posterHoc.styled';
import {statusForm} from '../../global/constants/global.constants';

export const withForm = Component => {
  const PosterWIthForm = ({ id, src, alt, title, date, genres, rating, runtime, overview }) => {
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const changeStateModal = variantModal => {
      variantModal === statusForm.UPDATE ? setShowEdit(!showEdit) : setShowDelete(!showDelete);
    };
    return (
      <>
        <HoverPoster key={`hover_${id}`}>
          <Nav>
            <Atag>...</Atag>
            <Ul>
              <li onClick={() => changeStateModal(statusForm.UPDATE)}>
                <Atag> Edit</Atag>
              </li>
              <li onClick={() => changeStateModal(statusForm.DELETE)}>
                <Atag>Delete</Atag>
              </li>
            </Ul>
          </Nav>
          <Component key={id} id={id} src={src} alt={alt} title={title} date={date} genres={genres} />
        </HoverPoster>
        {(showEdit || showDelete) && (
          <PosterForm
            id={id}
            title={title}
            date={date}
            movieUrl={src}
            rating={rating}
            genres={genres}
            runtime={runtime}
            overview={overview}
            showEdit={showEdit}
            showDelete={showDelete}
            changeStateModal={() => (showEdit ? changeStateModal(statusForm.UPDATE) : changeStateModal(statusForm.DELETE))}
          />
        )}
      </>
    );
  };
  PosterWIthForm.propTypes = {
    genres: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.number.isRequired,
    overview: PropTypes.string,
    src: PropTypes.string,
    date: PropTypes.string.isRequired,
    runtime: PropTypes.number,
    tagline: PropTypes.string,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
  };
  return memo(PosterWIthForm);
};
