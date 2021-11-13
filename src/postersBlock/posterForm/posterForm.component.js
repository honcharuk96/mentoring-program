import React, { useEffect } from 'react';
import { CloseBut, FormWrapper, FormWrapperGlobal } from './posterForm.styled';
import { PosterAddForm } from './addForm.component';
import { PosterUpdateForm } from './updateForm.component';
import { PosterDeleteForm } from './deleteForm.component';
import PropTypes from 'prop-types';

const PosterForm = ({
  id,
  showAdd,
  showUpdate,
  showDelete,
  changeStateModal,
  getPosterById,
  posterDataById,
  addPoster,
  updatePoster,
  deletePoster,
}) => {
  useEffect(() => {
    if (id && showUpdate) {
      getPosterById(id);
    }
  }, []);
  return (
    <>
      <FormWrapperGlobal>
        <FormWrapper>
          <CloseBut onClick={changeStateModal} />
          {showAdd && <PosterAddForm addPoster={addPoster} closeForm={changeStateModal} />}
          {showUpdate && (
            <PosterUpdateForm
              updatePoster={updatePoster}
              posterData={posterDataById}
              getPosterById={getPosterById}
              id={id}
              closeForm={changeStateModal}
            />
          )}
          {showDelete && <PosterDeleteForm deletePoster={deletePoster} id={id} closeForm={changeStateModal} />}
        </FormWrapper>
      </FormWrapperGlobal>
    </>
  );
};
export default PosterForm;

PosterForm.defaultProps = {
  id: null,
  showAdd: false,
  showUpdate: false,
  showDelete: false,
};

PosterForm.propTypes = {
  id: PropTypes.number,
  showAdd: PropTypes.bool,
  showUpdate: PropTypes.bool,
  showDelete: PropTypes.bool,
  changeStateModal: PropTypes.func.isRequired,
  getPosterById: PropTypes.func.isRequired,
  addPoster: PropTypes.func.isRequired,
  updatePoster: PropTypes.func.isRequired,
  deletePoster: PropTypes.func.isRequired,
  posterDataById: PropTypes.shape({
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
};
