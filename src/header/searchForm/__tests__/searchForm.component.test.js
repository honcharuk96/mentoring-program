import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SearchForm from '../searchForm.component';

const shallow = new ShallowRenderer();
const setPosterDataFromForm = jest.fn();

describe('<SearchForm />', () => {
  it('should render SearchForm withoutPosterData', () => {
    const header = shallow.render(<SearchForm setPosterDataFromForm={setPosterDataFromForm} />);
    expect(header).toMatchSnapshot();
  });
});
