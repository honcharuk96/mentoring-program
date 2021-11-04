import React, {useCallback, useContext, useState} from 'react';
import { AppContext } from '../../App';
import { addPoster } from '../../servise/posterService';
import { convertPosterState, getDefaultPosterState, statusForm } from '../../global/constants/global.constants';
import { ButList, FormHeader, Input, InputWrapper, Label, TextArea } from './posterForm.styled';
import { SelectElementComponent } from './selectElement.component';
import RedButtonComponent from '../../global/components/redButton/redButton.component';
import PropTypes from 'prop-types';

export const PosterAddForm = ({ closeForm }) => {
  const { setSubmitForm } = useContext(AppContext);
  const [posterFormData, setPosterFormData] = useState(() => getDefaultPosterState());

  const resetForm = useCallback(() => {
    setPosterFormData(getDefaultPosterState);
  },[]);

  const onChangeField = el => {
    const { name, value } = el.target;
    setPosterFormData({ ...posterFormData, [name]: value });
  };
  const handleChange = selected => {
    setPosterFormData({ ...posterFormData, selectedGenres: selected });
  };

  const submitFormHandler = async () => {
    const poster = convertPosterState(posterFormData);
    await addPoster(poster);
    closeForm();
    setSubmitForm({ form: statusForm.ADD });
  };

  return (
    <>
      <FormHeader>Add movie</FormHeader>
      <InputWrapper>
        <Label key={'title'}>
          title
          <Input
            required
            pattern={'.{3,}'}
            type={'text'}
            name={'title'}
            value={posterFormData.title}
            onChange={onChangeField}
          />
        </Label>
        <Label key={'release_date'}>
          date
          <Input
            required={true}
            pattern={'.{3,}'}
            type={'date'}
            name={'release_date'}
            value={posterFormData.release_date}
            onChange={onChangeField}
          />
        </Label>
        <Label key={'poster_path'}>
          movie url
          <Input
            required
            pattern={'https://.*'}
            type={'url'}
            name={'poster_path'}
            value={posterFormData.poster_path}
            onChange={onChangeField}
          />
        </Label>
        <Label key={'vote_average'}>
          rating
          <Input
            required
            step={'.01'}
            min={0}
            max={10}
            type={'number'}
            name={'vote_average'}
            value={posterFormData.vote_average}
            onChange={onChangeField}
          />
        </Label>
        <SelectElementComponent
          genres={posterFormData.genres}
          selectedGenres={posterFormData.selectedGenres}
          handleChange={handleChange}
        />
        <Label key={'runtime'}>
          runtime
          <Input
            required={true}
            min={0}
            type={'number'}
            name={'runtime'}
            value={posterFormData.runtime}
            onChange={onChangeField}
          />
        </Label>
        <Label key={'overview'} fullWidth>
          overview
          <TextArea name={'overview'} value={posterFormData.overview} onChange={onChangeField}>
            {posterFormData.overview}
          </TextArea>
        </Label>
      </InputWrapper>
      <ButList>
        <RedButtonComponent text={'Reset'} revertColor click={resetForm} />
        <RedButtonComponent text={'Submit'} click={submitFormHandler} />
      </ButList>
    </>
  );
};

PosterAddForm.propTypes = {
  closeForm: PropTypes.func.isRequired,
};
