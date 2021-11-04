import React, {useCallback, useContext, useEffect, useState} from 'react';
import { AppContext } from '../../App';
import { getPosterById, updatePoster } from '../../servise/posterService';
import { convertPosterState, getDefaultPosterState, statusForm } from '../../global/constants/global.constants';
import { ButList, FormHeader, Input, InputWrapper, Label, TextArea } from './posterForm.styled';
import { SelectElementComponent } from './selectElement.component';
import RedButtonComponent from '../../global/components/redButton/redButton.component';
import { convertGenres, convertSelectedGenres } from './formHelper';
import PropTypes from 'prop-types';

export const PosterUpdateForm = ({ id, closeForm }) => {
  const { setSubmitForm } = useContext(AppContext);
  const [defaultPosterState, setDefaultPosterState] = useState([]);
  const [posterDataById, setPosterDataById] = useState(() => getDefaultPosterState(true));

  useEffect(async () => {
    const { poster } = await getPosterById(id);
    const transformPoster = {
      ...poster,
      genres: convertGenres(poster.genres),
      selectedGenres: convertSelectedGenres(poster.genres),
    };
    setDefaultPosterState(transformPoster);
    setPosterDataById(transformPoster);
  }, []);

  const resetForm = useCallback(() => {
    setPosterDataById(defaultPosterState);
  },[defaultPosterState]);

  const onChangeField = el => {
    const { name, value } = el.target;
    setPosterDataById({ ...posterDataById, [name]: value });
  };
  const handleChange = selected => {
    setPosterDataById({ ...posterDataById, selectedGenres: selected });
  };

  const submitFormHandler = async () => {
    const poster = convertPosterState(posterDataById, true);
    await updatePoster(poster);
    closeForm();
    setSubmitForm({ form: statusForm.UPDATE });
  };
  return (
    <>
      <FormHeader>Update movie</FormHeader>
      <InputWrapper>
        <Label key={'title'}>
          title
          <Input
            required
            pattern={'.{3,}'}
            type={'text'}
            name={'title'}
            value={posterDataById.title}
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
            value={posterDataById.release_date}
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
            value={posterDataById.poster_path}
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
            value={posterDataById.vote_average}
            onChange={onChangeField}
          />
        </Label>
        <SelectElementComponent
          genres={posterDataById.genres}
          selectedGenres={posterDataById.selectedGenres}
          handleChange={handleChange}
        />
        <Label key={'runtime'}>
          runtime
          <Input
            required
            min={0}
            type={'number'}
            name={'runtime'}
            value={posterDataById.runtime}
            onChange={onChangeField}
          />
        </Label>
        <Label key={'overview'} fullWidth>
          overview
          <TextArea name={'overview'} value={posterDataById.overview} onChange={onChangeField}>
            {posterDataById.overview}
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

PosterUpdateForm.propTypes = {
  id: PropTypes.number.isRequired,
  closeForm: PropTypes.func.isRequired,
};
