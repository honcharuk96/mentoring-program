import React from 'react'
import NotFound from '../NotFound.component';
import ShallowRenderer from 'react-test-renderer/shallow';

const shallow = new ShallowRenderer();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({
        pathname: 'localhost:3000/example/path',
    }),
}));

describe('<NotFound />', () => {
    const notFound =  shallow.render(<NotFound/>);
    it('should render ExampleComponent', () => {
         expect(notFound).toMatchSnapshot();
         expect(JSON.stringify(notFound)).toMatch('localhost:3000/example/path')

    });
});
