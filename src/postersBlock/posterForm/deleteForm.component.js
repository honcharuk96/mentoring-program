import React from 'react';
import { ButList, FormHeader, SupText } from './posterForm.styled';
import RedButtonComponent from '../../global/components/redButton/redButton.component';
import PropTypes from 'prop-types';

export const PosterDeleteForm = ({ id, closeForm, deletePoster }) => {
  const submitFormHandler = () => {
    deletePoster(id);
    closeForm();
  };

  return (
    <>
      <FormHeader>Delete movie</FormHeader>
      <SupText>Are you sure you want to delete this movie?</SupText>
      <ButList>
        <RedButtonComponent text={'Confirm'} click={submitFormHandler} />
      </ButList>
    </>
  );
};

PosterDeleteForm.propTypes = {
  id: PropTypes.number.isRequired,
  closeForm: PropTypes.func.isRequired,
  deletePoster: PropTypes.func.isRequired,
};
