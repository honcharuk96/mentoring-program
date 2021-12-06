import React from 'react';
import PosterCategoryComponent from '../posterCategory.component';
import { render } from '@testing-library/react';

describe('<PosterCategoryComponent />', () => {
  it('should render PosterCategoryComponent', () => {
    const { asFragment } = render(<PosterCategoryComponent />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render PosterCategoryComponent with posters', () => {
    const genres = ['Drama', 'Romance'];
    const { getByText } = render(<PosterCategoryComponent genres={genres} />);
    const el = getByText('Romance');
    expect(el);
  });
});
