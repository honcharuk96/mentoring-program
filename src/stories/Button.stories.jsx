import React from 'react';
import RedButtonComponent from '../global/components/redButton/redButton.component';

export default {
  title: 'Example/RedButton',
  component: RedButtonComponent,
};

const Template = (args) => <RedButtonComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  revertColor: false,
  text: 'Button',
};

export const RevertButton = Template.bind({});
RevertButton.args = {
  revertColor: true,
  text: 'Button',
};

