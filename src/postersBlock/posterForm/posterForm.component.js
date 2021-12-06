import React, { useEffect } from 'react';
import { CloseBut, FormWrapper, FormWrapperGlobal } from './posterForm.styled';
import { PosterAddForm } from './addForm.component';
import PosterUpdateForm from './updateForm.component';
import { PosterDeleteForm } from './deleteForm.component';
import PropTypes from 'prop-types';
import { statusForm } from '../../global/constants/global.constants';

const PosterForm = ({
  modalForm,
  getPosterById,
  posterDataById,
  addPoster,
  updatePoster,
  deletePoster,
  closeForms,
}) => {
  useEffect(() => {
    if (modalForm.idForModal && modalForm[statusForm.UPDATE]) {
      getPosterById(modalForm.idForModal);
    }
  }, []);
  return (
    <>
      <FormWrapperGlobal>
        <FormWrapper>
          <CloseBut onClick={closeForms} />
          {modalForm[statusForm.ADD] && <PosterAddForm addPoster={addPoster} closeForm={closeForms} />}
          {modalForm[statusForm.UPDATE] && (
            <PosterUpdateForm
              updatePoster={updatePoster}
              posterData={posterDataById}
              getPosterById={getPosterById}
              closeForm={closeForms}
            />
          )}
          {modalForm[statusForm.DELETE] && (
            <PosterDeleteForm deletePoster={deletePoster} id={modalForm.idForModal} closeForm={closeForms} />
          )}
        </FormWrapper>
      </FormWrapperGlobal>
    </>
  );
};
export default PosterForm;

PosterForm.defaultProps = {
  modalForm: {
    [statusForm.ADD]: false,
    [statusForm.UPDATE]: false,
    [statusForm.DELETE]: false,
    idForModal: null,
  },
};

PosterForm.propTypes = {
  modalForm: PropTypes.shape({
    [statusForm.ADD]: PropTypes.bool,
    [statusForm.UPDATE]: PropTypes.bool,
    [statusForm.DELETE]: PropTypes.bool,
    idForModal: PropTypes.number,
  }),
  closeForms: PropTypes.func.isRequired,
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
