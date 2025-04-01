import React from 'react';

import Alert from './Alert';

export default {
  title: 'Alert',
  component: Alert,
};

const Template = (args) => <Alert {...args} />;

export const Success = Template.bind({});
Success.args = {
  severity: 'success'
};

export const Info = Template.bind({});
Info.args = {
  severity: 'info'
};

export const Warning = Template.bind({});
Warning.args = {
  severity: 'warning'
};

export const Error = Template.bind({});
Error.args = {
  severity: 'error'
};
