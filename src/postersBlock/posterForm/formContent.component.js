import { ButList, ErrorText, Input, InputWrapper, Label, TextArea } from './posterForm.styled';
import { SelectElementComponent } from './selectElement.component';
import RedButtonComponent from '../../global/components/redButton/redButton.component';
import React from 'react';
import PropTypes from 'prop-types';

export const FormContentComponent = ({ values, handleChange, errors, touched, setValues, handleReset, submitForm }) => (
  <>
    <InputWrapper>
      <Label key={'title'}>
        title
        <Input type={'text'} name={'title'} value={values.title} onChange={handleChange} />
        {errors.title && touched.title ? <ErrorText>{errors.title} </ErrorText> : null}
      </Label>
      <Label key={'release_date'}>
        date
        <Input type={'date'} name={'release_date'} value={values.release_date} onChange={handleChange} />
        {errors.release_date && touched.release_date ? <ErrorText>{errors.release_date} </ErrorText> : null}
      </Label>
      <Label key={'poster_path'}>
        movie url
        <Input type={'url'} name={'poster_path'} value={values.poster_path} onChange={handleChange} />
        {errors.poster_path && touched.poster_path ? <ErrorText>{errors.poster_path} </ErrorText> : null}
      </Label>
      <Label key={'vote_average'}>
        rating
        <Input type={'number'} name={'vote_average'} value={values.vote_average} onChange={handleChange} />
        {errors.vote_average && touched.vote_average ? <ErrorText>{errors.vote_average} </ErrorText> : null}
      </Label>
      <SelectElementComponent
        genres={values.genres}
        selectedGenres={values.selectedGenres}
        errors={errors}
        touched={touched}
        handleChange={selected => setValues({ ...values, selectedGenres: selected })}
      />
      <Label key={'runtime'}>
        runtime
        <Input type={'number'} name={'runtime'} value={values.runtime} onChange={handleChange} />
        {errors.runtime && touched.runtime ? <ErrorText>{errors.runtime} </ErrorText> : null}
      </Label>
      <Label key={'overview'} fullWidth>
        overview
        <TextArea name={'overview'} value={values.overview} onChange={handleChange}>
          {values.overview}
        </TextArea>
        {errors.overview && touched.overview ? <ErrorText>{errors.overview} </ErrorText> : null}
      </Label>
    </InputWrapper>
    <ButList>
      <RedButtonComponent text={'Reset'} revertColor click={handleReset} />
      <RedButtonComponent text={'Submit'} click={submitForm} />
    </ButList>
  </>
);

FormContentComponent.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  setValues: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};
