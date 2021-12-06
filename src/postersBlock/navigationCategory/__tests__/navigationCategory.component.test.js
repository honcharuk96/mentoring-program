import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import NavigationCategory, { SortComponent } from '../navigationCategory.component';
import { links, variantSorts } from '../../../global/constants/global.constants';
import { screen } from '@testing-library/dom';
const changeActiveNav = jest.fn();
const changeVariantSort = jest.fn();
const getPostersByActiveNavWithSort = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn(),
    location: {},
  }),
}));
describe('<NavigationCategory />', () => {
  it('should render NavigationCategory', () => {
    const { asFragment } = render(
      <NavigationCategory
        activeNav={links[0].text}
        changeActiveNav={changeActiveNav}
        changeVariantSort={changeVariantSort}
        getPostersByActiveNavWithSort={getPostersByActiveNavWithSort}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render SortComponent', () => {
    const { asFragment } = render(<SortComponent changeVariantSort={changeVariantSort} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should select correct time on change', () => {
    render(<SortComponent changeVariantSort={changeVariantSort} />);
    expect(screen.getByText(variantSorts[0].label)).toBeInTheDocument();

    fireEvent.change(screen.getByTestId('select'), {
      target: { value: variantSorts[1].name },
    });
    expect(screen.getByText(variantSorts[1].label)).toBeInTheDocument();
  });
});
