import React from 'react';

import DropdownMenu from './DropdownMenu';

export default {
  title: 'Dropdown Menu',
  component: DropdownMenu
}

const Template = (args) => <DropdownMenu {...args}>Custom Menu</DropdownMenu>;

export const Default = Template.bind({});
Default.args = {}