import React from 'react';
import { render } from '@testing-library/react';
import PosterCountComponent from '../postersCount.component';

describe('<PosterCountComponent />', () => {
  it('should render PosterCountComponent', () => {
    const { asFragment } = render(<PosterCountComponent numberOfPosters={0} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should contain text in  PosterCategoryComponent with 0 poster', () => {
    const { getByText } = render(<PosterCountComponent numberOfPosters={0} />);
    const text1 = getByText('0');
    const text2 = getByText('movie found');
    expect(text1);
    expect(text2);
  });

  it('should contain text in  PosterCategoryComponent with 12 posters', () => {
    const { getByText } = render(<PosterCountComponent numberOfPosters={12} />);
    const text1 = getByText('12');
    const text2 = getByText('movies found');
    expect(text1);
    expect(text2);
  });
});
