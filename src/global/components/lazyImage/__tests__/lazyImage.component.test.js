import React from 'react';
import { render } from '@testing-library/react';
import { LazyImage } from '../lazyImage.compoent';

const observe = jest.fn();
const unobserve = jest.fn();

window.IntersectionObserver = jest.fn(() => ({
  observe,
  unobserve,
}));

describe('<LazyImage />', () => {
  it('should render LazyImage isBanner', () => {
    const { asFragment } = render(<LazyImage alt={'test'} src={'https:/test.com'} isBanner={true} />);
    // expect(observe).toHaveBeenCalled();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render LazyImage', () => {
    const { asFragment } = render(<LazyImage alt={'test'} src={'https:/test.com'} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
