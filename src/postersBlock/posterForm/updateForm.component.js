import React, { memo, useEffect, useState } from 'react';
import { convertPosterState, getDefaultPosterState } from '../../global/constants/global.constants';
import { FormHeader } from './posterForm.styled';
import { convertGenres, convertSelectedGenres, FormValidationSchema } from './formHelper';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { FormContentComponent } from './formContent.component';

const PosterUpdateForm = ({ closeForm, posterData, updatePoster }) => {
  const [posterDataById, setPosterDataById] = useState(() => getDefaultPosterState(true));

  useEffect(() => {
    if (posterData === null) return;
    const transformPoster = {
      ...posterData,
      genres: convertGenres(posterData.genres),
      selectedGenres: convertSelectedGenres(posterData.genres),
    };
    setPosterDataById(transformPoster);
  }, [posterData]);

  const { handleChange, handleReset, submitForm, values, errors, touched, setValues } = useFormik({
    initialValues: posterDataById,
    enableReinitialize: true,
    validationSchema: FormValidationSchema,
    onSubmit: values => {
      const poster = convertPosterState(values, true);
      updatePoster(poster);
      closeForm();
    },
  });
  return (
    <>
      <FormHeader>Update movie</FormHeader>
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
export default memo(PosterUpdateForm);

PosterUpdateForm.propTypes = {
  closeForm: PropTypes.func.isRequired,
  updatePoster: PropTypes.func.isRequired,
  posterData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
    release_date: PropTypes.string,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    budget: PropTypes.number,
    revenue: PropTypes.number,
    runtime: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};
