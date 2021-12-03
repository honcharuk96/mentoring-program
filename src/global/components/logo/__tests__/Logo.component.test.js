import React from 'react';
import LogoComponent from '../logo.component';
import ShallowRenderer from 'react-test-renderer/shallow';
import 'jest-styled-components';

const renderer = new ShallowRenderer();
describe('LogoComponent', function () {
   const logoComponent = renderer.render(<LogoComponent/>)
    it('snapshot', () => {
        expect(logoComponent).toMatchSnapshot()
    })
});
