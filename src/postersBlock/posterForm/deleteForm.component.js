import React, { useContext } from 'react';
import { ButList, FormHeader, SupText } from './posterForm.styled';
import { deletePoster } from '../../servise/posterService';
import { statusForm } from '../../global/constants/global.constants';
import { AppContext } from '../../App';
import RedButtonComponent from '../../global/components/redButton/redButton.component';
import PropTypes from 'prop-types';

export const PosterDeleteForm = ({ id, closeForm }) => {
  const { setSubmitForm } = useContext(AppContext);
  const submitFormHandler = async () => {
    await deletePoster(id);
    closeForm();
    setSubmitForm({ form: statusForm.DELETE });
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
};
