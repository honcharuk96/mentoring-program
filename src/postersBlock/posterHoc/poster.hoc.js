import React, { memo, useState } from 'react';
import PosterForm from '../posterForm/posterForm.component';
import PropTypes from 'prop-types';
import { Atag, HoverPoster, Nav, Ul } from './posterHoc.styled';

export const withForm = Component => {
  const PosterWIthForm = ({ id, src, alt, title, date, genres, rating, runtime, overview }) => {
    const [showAddEdit, setShowAddEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const changeStateModal = variantModal => {
      variantModal === 'addEdit' ? setShowAddEdit(!showAddEdit) : setShowDelete(!showDelete);
    };
    return (
      <>
        <HoverPoster key={`hover_${id}`}>
          <Nav>
            <Atag>...</Atag>
            <Ul>
              <li onClick={() => changeStateModal('addEdit')}>
                <Atag> Edit</Atag>
              </li>
              <li onClick={() => changeStateModal('delete')}>
                <Atag>Delete</Atag>
              </li>
            </Ul>
          </Nav>
          <Component key={id} id={id} src={src} alt={alt} title={title} date={date} genres={genres} />
        </HoverPoster>
        {(showAddEdit || showDelete) && (
          <PosterForm
            title={title}
            date={date}
            movieUrl={src}
            rating={rating}
            genres={genres}
            runtime={runtime}
            overview={overview}
            showAddEdit={showAddEdit}
            showDelete={showDelete}
            parentFunc={() => (showAddEdit ? changeStateModal('addEdit') : changeStateModal('delete'))}
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
