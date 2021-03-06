import React from 'react';
import { ErrorText, Label } from './posterForm.styled';
import { components, default as ReactSelect } from 'react-select';
import PropTypes from 'prop-types';

export const SelectElementComponent = ({ genres, selectedGenres, handleChange, errors, touched }) => (
  <Label key={'genre'} isOpacity>
    {'genre'}
    <span className="d-inline-block" data-toggle="popover" data-trigger="focus" data-content="Please select genres(s)">
      <ReactSelect
        options={genres}
        name={'genre'}
        isMulti
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        components={{
          Option,
        }}
        onChange={handleChange}
        allowSelectAll={true}
        value={selectedGenres}
        id={'reactSelect'}
      />
    </span>
    {errors.selectedGenres && touched.selectedGenres ? <ErrorText>{errors.selectedGenres} </ErrorText> : null}
  </Label>
);

SelectElementComponent.propTypes = {
  errors: PropTypes.object,
  touched: PropTypes.object,
  genres: PropTypes.array.isRequired,
  selectedGenres: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
};

const Option = props => (
  <>
    <components.Option {...props}>
      <input type="checkbox" checked={props.isSelected} onChange={() => null} /> <label>{props.value}</label>
    </components.Option>
  </>
);

Option.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};
