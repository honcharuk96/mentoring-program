import React from 'react';
import { render } from '@testing-library/react';
import { PosterAddForm } from '../addForm.component';

const addPoster = jest.fn();
const closeForms = jest.fn();
describe('<PosterAddForm />', () => {
  it('should render PosterForm without modalForm', () => {
    const { asFragment } = render(<PosterAddForm addPoster={addPoster} closeForm={closeForms} />);
    // expect(observe).toHaveBeenCalled();
    expect(asFragment()).toMatchSnapshot();
  });
});
