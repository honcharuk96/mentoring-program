import React from 'react';
import { render } from '@testing-library/react';
import PosterForm from '../posterForm.component';
import { statusForm } from '../../../global/constants/global.constants';

const updatePoster = jest.fn();
const addPoster = jest.fn();
const closeForms = jest.fn();
const deletePoster = jest.fn();
const getPosterById = jest.fn();

const poster = {
  id: 337167,
  title: 'Fifty Shades Freed',
  tagline: "Don't miss the climax",
  vote_average: 6.1,
  vote_count: 1195,
  release_date: '2018-02-07',
  poster_path: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
  overview:
    'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
  budget: 55000000,
  revenue: 136906000,
  genres: ['Drama', 'Romance'],
  runtime: 106,
};
describe('<PosterForm />', () => {
  it('should render PosterForm without modalForm', () => {
    const { asFragment } = render(
      <PosterForm
        updatePoster={updatePoster}
        addPoster={addPoster}
        closeForms={closeForms}
        deletePoster={deletePoster}
        getPosterById={getPosterById}
      />,
    );
    // expect(observe).toHaveBeenCalled();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render PosterForm with modalForm - ADD', () => {
    const { asFragment } = render(
      <PosterForm
        updatePoster={updatePoster}
        addPoster={addPoster}
        closeForms={closeForms}
        deletePoster={deletePoster}
        getPosterById={getPosterById}
        modalForm={{ [statusForm.UPDATE]:false, [statusForm.ADD]:true,  [statusForm.DELETE]:false}}
      />,
    );
    // expect(observe).toHaveBeenCalled();
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render PosterForm with modalForm - UPDATE', () => {
      const { asFragment } = render(
      <PosterForm
        updatePoster={updatePoster}
        addPoster={addPoster}
        closeForms={closeForms}
        deletePoster={deletePoster}
        getPosterById={getPosterById}
        posterDataById={poster}
        modalForm={{[statusForm.UPDATE]:true, [statusForm.ADD]:false,  [statusForm.DELETE]:false, idForModal: poster.id} }
      />,
    );
    // expect(observe).toHaveBeenCalled();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render PosterForm with modalForm - DELETE', () => {
    const { asFragment } = render(
      <PosterForm
        updatePoster={updatePoster}
        addPoster={addPoster}
        closeForms={closeForms}
        deletePoster={deletePoster}
        getPosterById={getPosterById}
        modalForm={{ [statusForm.UPDATE]:false, [statusForm.ADD]:false,  [statusForm.DELETE]:true, idForModal: poster.id }}
      />,
    );
    // expect(observe).toHaveBeenCalled();
    expect(asFragment()).toMatchSnapshot();
  });

  // it('should render LazyImage', () => {
  //     const {asFragment} =  render(<LazyImage alt={'test'} src={'https:/test.com'} />);
  //     expect(asFragment()).toMatchSnapshot();
  // });
});
