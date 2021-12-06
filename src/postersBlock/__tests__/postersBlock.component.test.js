import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import PostersArea from '../postersBlock.component';

const shallow = new ShallowRenderer();
describe('<PostersArea />', () => {
  it('should render PostersArea', () => {
    const header = shallow.render(<PostersArea />);
    expect(header).toMatchSnapshot();
  });
});
