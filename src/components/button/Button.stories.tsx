import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button } from "./Button";
import { Center } from '../center';


export default {
  title: "React-Storybook/UI/Controls/Buttons/Button",
  component: Button,
  args: {
      children: "Button",
      variant:'string'
  },
  decorators: [story=><Center>{ story() }</Center>],
} as Meta;

// Approach 1 :
export const Primary = () => <Button variant="primary">Primary</Button>;
export const CenterPrimary = () => <Center><Button variant="primary">Primary</Button></Center>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;
export const Dark = () => <Button variant="dark">Dark</Button>

// Approach 2 :
const Template: Story = (args:any):any => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  children: "Primary Args",
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: "secondary",
  children: "Secondary Args",
};

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA.args,
  children: "Long Primary Args",
};

export const DarkA = Template.bind({});
DarkA.args = {
  variant: "dark",
  children: "Dark Args",
};

export const LongDarkA = Template.bind({});
LongDarkA.args = {
  ...DarkA.args,
  children: "Long Dark Args",
};