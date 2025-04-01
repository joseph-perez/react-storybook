import React from 'react';

import Button from './Button';

export default {
  title: 'Button',
  component: Button
};

const Template = (args) => <Button {...args} />;

export const Text = Template.bind({});
Text.args = {
  label: 'Button',
  variant: 'text'
};

export const Contained = Template.bind({});
Contained.args = {
  label: 'Button',
  variant: 'contained'
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Button',
  variant: 'outlined'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
