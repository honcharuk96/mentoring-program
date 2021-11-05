import React, {lazy, memo, Suspense} from 'react';
import PropTypes from 'prop-types';
import { Atag, HoverPoster, Nav, Ul } from './posterHoc.styled';
import { statusForm } from '../../global/constants/global.constants';
import ReactDOM from 'react-dom';
import { useToggle } from '../../global/hooks/useToggle';

const PosterForm = lazy(() => import('../posterForm/posterForm.component'));
export const withForm = Component => {
  const PosterWIthForm = ({ id, src, alt, title, date, genres }) => {
    const [showUpdate, setShowUpdate] = useToggle();
    const [showDelete, setShowDelete] = useToggle();
    const changeStateModal = variantModal => {
      variantModal === statusForm.UPDATE ? setShowUpdate() : setShowDelete();
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
        {(showUpdate || showDelete) &&
          ReactDOM.createPortal(
            <Suspense fallback={<div>Loading...</div>}>
              <PosterForm
                id={id}
                showUpdate={showUpdate}
                showDelete={showDelete}
                changeStateModal={() =>
                  showUpdate ? changeStateModal(statusForm.UPDATE) : changeStateModal(statusForm.DELETE)
                }
              />
            </Suspense>,
            document.body,
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
