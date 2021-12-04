import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow';
import HeaderComponent from '../header.component';

const shallow = new ShallowRenderer();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({
        pathname: 'localhost:3000/example/path',
    }),
}));[]
const openModal = jest.fn()
const setSelectedPoster = jest.fn()

describe('<HeaderComponent />', () => {

    it('should render HeaderComponent without selectedPoster', () => {
        const header =  shallow.render(<HeaderComponent openModal={openModal} setSelectedPoster={setSelectedPoster}/>);
        expect(header).toMatchSnapshot();
    });

    it('should render HeaderComponent with selectedPoster', () => {
        const header =  shallow.render(<HeaderComponent selectedPoster={1} openModal={openModal} setSelectedPoster={setSelectedPoster}/>);
        expect(header).toMatchSnapshot();
    });
});
