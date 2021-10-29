import React from 'react';
import RedButton from '../../global/components/redButton/redButton.component';
import { components, default as ReactSelect } from 'react-select';
import {
  ButList,
  CloseBut,
  FormHeader,
  FormWrapper,
  FormWrapperGlobal,
  Input,
  InputWrapper,
  Label,
  SupText,
  TextArea,
} from './posterForm.styled';
import {addPoster, deletePoster, updatePoster} from '../../servise/posterService';
import {statusForm} from '../../global/constants/global.constants';

export default class PosterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id || null,
      title: props.title || '',
      date: props.date || '',
      movieUrl: props.movieUrl || '',
      rating: props.rating || 0,
      genres: this.convertGenres(props.genres || []),
      selectedGenres: this.convertSelectedGenres(props.genres || []),
      runtime: props.runtime || '',
      overview: props.overview || '',
      showAdd: props.showAdd || false,
      showEdit: props.showEdit || false,
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

  convertSelectedGenres = (data,toObj= true) => {
    if(toObj){
     return data.map(el => ({ value: el, label: el }));
    } else {
      return data.map(el => el.value);
    }
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
    this.props.changeStateModal();
  };
  onChangeField = el => {
    const { name, value } = el.target;
    this.setState({ [name]: value });
  };
  handleChange = selected => {
    this.setState({ selectedGenres: selected });
  };

  setHeader= () =>{
    const {showAdd, showEdit } = this.state;
    if(showAdd){
      return statusForm.ADD
    } else if(showEdit){
      return  statusForm.UPDATE
    }
  }
  submitFormHandler = event => {
    const form = event.target.offsetParent;
    if (form.checkValidity()) {
    (async () => {
      const { id,title,date, movieUrl,rating,runtime,overview} = this.state;
      const poster = {
        title,
        vote_average: +rating,
        release_date: date,
        poster_path: movieUrl,
        overview,
        runtime: +runtime,
        genres: this.convertSelectedGenres(this.state.selectedGenres,false),
      };
      try {
        const { showAdd, showEdit, showDelete } = this.state;
        if(showAdd){
          await addPoster(poster);
        }else if(showEdit){
          await updatePoster({...poster, id});
        } else if(showDelete){
          await deletePoster(id);
        }
      } catch (err) {
        throw new Error(err);
      }
      this.closeForm();
    })();
    }  else {
      form.reportValidity();
    }
  };

  render() {
    const { showAdd, showEdit, showDelete } = this.state;
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
        <FormWrapperGlobal>
          <FormWrapper>
            <CloseBut onClick={this.closeForm} />
            {(showAdd || showEdit) && (
              <>
                <FormHeader>{this.setHeader()} movie</FormHeader>
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
            { showDelete && (
                <>
                  <FormHeader>Delete movie</FormHeader>
                  <SupText>Are you sure you want to delete this movie?</SupText>
                  <ButList>
                    <RedButton text={'Confirm'} click={this.submitFormHandler} />
                  </ButList>
                </>
            )}
          </FormWrapper>
        </FormWrapperGlobal>
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
