import React from 'react';
import { render } from '@testing-library/react';
import RedButtonComponent from '../redButton.component';

describe('RedButtonComponent', function () {
    it('should have text "test"', function () {
        let { getByText } = render(<RedButtonComponent  text={'test'}/>);
        expect(getByText('test'));
    });
    it('snapshot', function () {
        let { asFragment } = render(<RedButtonComponent  text={'test'}/>);
        expect(asFragment()).toMatchSnapshot();
    });
});
