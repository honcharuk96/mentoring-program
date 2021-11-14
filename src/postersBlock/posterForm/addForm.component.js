import React from 'react';
import { convertPosterState, getDefaultPosterState } from '../../global/constants/global.constants';
import { FormHeader } from './posterForm.styled';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { FormValidationSchema } from './formHelper';
import { FormContentComponent } from './formContent.component';

export const PosterAddForm = ({ closeForm, addPoster }) => {
  const { handleChange, handleReset, submitForm, values, errors, touched, setValues } = useFormik({
    initialValues: getDefaultPosterState(),
    validationSchema: FormValidationSchema,
    onSubmit: values => {
      const poster = convertPosterState(values);
      addPoster(poster);
      closeForm();
    },
  });

  return (
    <>
      <FormHeader>Add movie</FormHeader>
      <FormContentComponent
        values={values}
        handleChange={handleChange}
        errors={errors}
        touched={touched}
        setValues={setValues}
        handleReset={handleReset}
        submitForm={submitForm}
      />
    </>
  );
};

PosterAddForm.propTypes = {
  closeForm: PropTypes.func.isRequired,
  addPoster: PropTypes.func.isRequired,
};
