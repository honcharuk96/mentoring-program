import React from 'react';
import { CloseBut, FormWrapper, FormWrapperGlobal } from './posterForm.styled';
import { PosterAddForm } from './addForm.component';
import { PosterUpdateForm } from './updateForm.component';
import { PosterDeleteForm } from './deleteForm.component';
import PropTypes from 'prop-types';

export const PosterForm = ({ id, showAdd, showUpdate, showDelete, changeStateModal }) => (
  <>
    <FormWrapperGlobal>
      <FormWrapper>
        <CloseBut onClick={changeStateModal} />
        {showAdd && <PosterAddForm closeForm={changeStateModal} />}
        {showUpdate && <PosterUpdateForm id={id} closeForm={changeStateModal} />}
        {showDelete && <PosterDeleteForm id={id} closeForm={changeStateModal} />}
      </FormWrapper>
    </FormWrapperGlobal>
  </>
);

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
};
