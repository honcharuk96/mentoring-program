import React from 'react';
import {Provider} from 'react-redux';
import store from '../redux/store';
import {BrowserRouter} from 'react-router-dom';
import App from '../App';

export default {
  title: 'Example/Page',
  component: App,
};

const Template = (args) =>  <Provider store={store}>    <BrowserRouter> <App {...args} />    </BrowserRouter> </Provider> ;

export const FullPage = Template.bind({});


