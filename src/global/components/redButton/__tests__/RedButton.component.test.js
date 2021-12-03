import React from 'react';
import { render } from '@testing-library/react';
import RedButtonComponent from '../redButton.component';
import renderer from 'react-test-renderer'
import 'jest-styled-components';

describe('RedButtonComponent', function () {
    it('should have text "test"', function () {
        let { getByText } = render(<RedButtonComponent  text={'test'}/>);
        expect(getByText('test'));
    });
    it('default button', () => {
        const tree = renderer.create(<RedButtonComponent  text={'test'}/>).toJSON()
        expect(tree).toMatchSnapshot()
        expect(tree).toHaveStyleRule('background', '#f65261')
        expect(tree).toHaveStyleRule('color', '#ffffff')
    })
    it('revert button', () => {
        const tree = renderer.create(<RedButtonComponent revertColor text={'test'}/>).toJSON()
        expect(tree).toMatchSnapshot()
        expect(tree).toHaveStyleRule('background', '#232323')
        expect(tree).toHaveStyleRule('color', '#f65261')
    })
});
