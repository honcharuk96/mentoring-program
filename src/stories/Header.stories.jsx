import React from 'react';

import HeaderComponent  from '../header/header.component';
import {Provider} from 'react-redux';
import store from '../redux/store';
import {BrowserRouter} from 'react-router-dom';
import {openModal} from '../actions/modalFormActions';

export default {
  title: 'Example/Header',
  component: HeaderComponent,
};

const Template = (arg) =>   (
      <Provider store={store}>
        <BrowserRouter>
          <HeaderComponent{...arg} />
        </BrowserRouter>
      </Provider>
  )     ;
export const WithoutPosterId = Template.bind({});
WithoutPosterId.args = {
  setSelectedPoster: poster => {console.log(poster)},
  selectedPoster:null,
  openModal:openModal,
};

export const WithPosterId = Template.bind({});
WithPosterId.args = {
  setSelectedPoster: poster => {console.log(poster)},
  selectedPoster:181808,
  openModal:openModal,
};
