import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import PosterInfoComponent from '../posterInfo.component';

const shallow = new ShallowRenderer();
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: () => ({
    pathname: 'localhost:3000/example/path',
  }),
}));
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

describe('<PosterInfoComponent />', () => {
  it('should render PosterInfoComponent without poster', () => {
    const posterInfo = shallow.render(<PosterInfoComponent getPosterById={getPosterById} posterId={2} />);
    expect(posterInfo).toMatchSnapshot();
  });

  it('should render PosterInfoComponent with poster', () => {
    const posterInfo = shallow.render(
      <PosterInfoComponent getPosterById={getPosterById} posterId={2} poster={poster} />,
    );
    expect(posterInfo).toMatchSnapshot();
  });
});
