import React from 'react';
import RedButton from '../../global/components/redButton/redButton.component';
import { components, default as ReactSelect } from 'react-select';
import {
  ButList,
  CloseBut,
  FormHeader,
  FormWrapper,
  FormWrapper2,
  Input,
  InputWrapper,
  Label,
  SupText,
  TextArea,
} from './posterForm.styled';

export default class PosterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title || '',
      date: props.date || '',
      movieUrl: props.movieUrl || '',
      rating: props.rating || 0,
      genres: this.convertGenres(props.genres || []),
      selectedGenres: this.convertSelectedGenres(props.genres || []),
      runtime: props.runtime || '',
      overview: props.overview || '',
      showAddEdit: props.showAddEdit || false,
      showDelete: props.showDelete || false,
    };
    this.defaultState = this.state;
    this.elements = [
      { name: 'title', label: 'title', type: 'text', rules: { required: true, pattern: '.{3,}' } },
      { name: 'date', label: 'date', type: 'date', rules: { required: true } },
      { name: 'movieUrl', label: 'movie url', type: 'url', rules: { required: true, pattern: 'https://.*' } },
      { name: 'rating', label: 'rating', type: 'number', rules: { step: '.01', min: 0, max: 10 } },
      { name: 'genre', label: 'genre', type: 'select', rules: { required: true } },
      { name: 'runtime', label: 'runtime', type: 'number', rules: { min: 0 } },
      { name: 'overview', label: 'overview', type: 'textarea' },
    ];
  }

  convertSelectedGenres = data => {
    return data.map(el => ({ value: el, label: el }));
  };
  convertGenres = data => {
    const def = [
      { value: 'Crime', label: 'Crime' },
      { value: 'Documentary', label: 'Documentary' },
      { value: 'Horror', label: 'Horror' },
      { value: 'Comedy', label: 'Comedy' },
    ];
    let dataNew = data.map(el => ({ value: el, label: el }));
    dataNew = [...def, ...dataNew];
    return dataNew;
  };

  resetForm = () => {
    this.setState(this.defaultState);
  };
  closeForm = () => {
    this.props.parentFunc();
  };
  onChangeField = el => {
    const { name, value } = el.target;
    this.setState({ [name]: value });
  };
  handleChange = selected => {
    this.setState({ selectedGenres: selected });
  };
  submitFormHandler = event => {
    const form = event.target.offsetParent;
    if (form.checkValidity()) {
      console.log(JSON.stringify(this.state));
    } else {
      form.reportValidity();
    }
  };

  render() {
    const { showAddEdit, showDelete } = this.state;
    const project = element => {
      switch (element.type) {
        case 'textarea':
          return (
            <TextArea
              {...element.rules}
              name={element.name}
              value={this.state[element.name]}
              onChange={this.onChangeField}
            >
              {this.state[element.name]}
            </TextArea>
          );
        case 'select':
          return (
            <span
              className="d-inline-block"
              data-toggle="popover"
              data-trigger="focus"
              data-content="Please select account(s)"
            >
              <ReactSelect
                options={this.state.genres}
                name={element.name}
                isMulti
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                components={{
                  Option,
                }}
                onChange={this.handleChange}
                allowSelectAll={true}
                value={this.state.selectedGenres}
                id={'reactSelect'}
              />
            </span>
          );
        default:
          return (
            <Input
              {...element.rules}
              type={element.type}
              name={element.name}
              value={this.state[element.name]}
              onChange={this.onChangeField}
            />
          );
      }
    };
    return (
      <>
        <FormWrapper2>
          <FormWrapper>
            <CloseBut onClick={this.closeForm} />
            {showDelete && (
              <>
                <FormHeader>Delete movie</FormHeader>
                <SupText>Are you sure you want to delete this movie?</SupText>
                <ButList>
                  <RedButton text={'Confirm'} click={this.submitFormHandler} />
                </ButList>
              </>
            )}
            {showAddEdit && (
              <>
                <FormHeader>Add movie</FormHeader>
                <InputWrapper>
                  {this.elements.map(element => {
                    return (
                      <Label
                        key={element.name}
                        fullWidth={element.name === 'overview'}
                        isOpacity={element.name === 'genre'}
                      >
                        {element.label}
                        {project(element)}
                      </Label>
                    );
                  })}
                </InputWrapper>
                <ButList>
                  <RedButton text={'Reset'} revertColor click={this.resetForm} />
                  <RedButton text={'Submit'} click={this.submitFormHandler} />
                </ButList>
              </>
            )}
          </FormWrapper>
        </FormWrapper2>
      </>
    );
  }
}

const Option = props => {
  return (
    <>
      <components.Option {...props}>
        <input type="checkbox" checked={props.isSelected} onChange={() => null} /> <label>{props.value}</label>
      </components.Option>
    </>
  );
};
